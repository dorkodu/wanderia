import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import z from 'zod';
import { authClient } from "./client";
import type { Session, User } from './types';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  error: string | null;
  login: (identifier: string, password: string) => Promise<boolean>; // identifier can be email or username
  logout: () => Promise<void>;
  signup: (params: { email: string; password: string; name: string; username?: string }) => Promise<boolean>;
  forgotPassword: (email: string) => Promise<boolean>;
  checkUsernameAvailability: (username: string) => Promise<boolean>;
  completeOnboarding: () => Promise<boolean>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { data: sessionData, isPending: sessionPending, error: sessionError } = authClient.useSession();
  const derivedUser = (sessionData?.user ?? null) as User | null;
  const derivedSession = (sessionData?.session ?? null) as Session | null;

  // local operation loading & error
  const [opLoading, setOpLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loading = opLoading || sessionPending;
  // prefer local error, else session hook error message
  const combinedError = error || (sessionError ? (sessionError as any)?.message || 'Session error' : null);

  const login = async (identifier: string, password: string): Promise<boolean> => {
    // rudimentary email detection
    const isEmail = z.email().safeParse(identifier).success;

    return isEmail
      ? loginWithEmail(identifier, password)
      : loginWithUsername(identifier, password);
  };

  const loginWithUsername = async (username: string, password: string): Promise<boolean> => {
    try {
      setOpLoading(true);
      setError(null);

      const result = await authClient.signIn.username({ username, password });

      if (result?.error) {
        setError(result.error.message || "Login failed.");
        return false;
      } else if (
        result.data &&
        'user' in result.data &&
        result.data.user
      ) {
        // session hook will revalidate automatically
        return true;
      } else {
        setError("Login failed.");
        return false;
      }
    } catch (err: any) {
      setError(err?.message || "Login failed.");
      return false;
    } finally {
      setOpLoading(false);
    }
  }

  const loginWithEmail = async (email: string, password: string): Promise<boolean> => {
    try {
      setOpLoading(true);
      setError(null);

      const result = await authClient.signIn.email({ email, password });

      if (result?.error) {
        setError(result.error.message || "Login failed.");
        return false;
      } else if (
        result.data &&
        'user' in result.data &&
        result.data.user
      ) {
        // session hook will revalidate automatically
        return true;
      } else {
        setError("Login failed.");
        return false;
      }
    } catch (err: any) {
      setError(err?.message || "Login failed.");
      return false;
    } finally {
      setOpLoading(false);
    }
  };

  const signup = async ({ email, password, name, username }: { email: string; password: string; name: string; username?: string }): Promise<boolean> => {
    try {
      setOpLoading(true);
      setError(null);

      // If a user is already logged in, sign out so we can switch to the new account cleanly
      if (derivedSession || derivedUser) {
        try {
          await authClient.signOut();
        } catch (e) {
          console.warn('Sign out before signup failed, proceeding anyway:', e);
        }
      }

      // Use email signup with username plugin - BetterAuth will handle setting username
      const result = await authClient.signUp.email({
        email,
        password,
        name,
        username, // username plugin handles this field
        callbackURL: "/onboarding"
      });

      if (result?.error) {
        setError(result.error.message || "Signup failed.");
        return false;
      } else if (result.data && 'user' in result.data && result.data.user) {
        // session hook will update
        return true;
      } else {
        setError("Signup failed.");
        return false;
      }
    } catch (err: any) {
      setError(err?.message || "Signup failed.");
      return false;
    } finally {
      setOpLoading(false);
    }
  };

  // Social login postponed for now

  const logout = async (): Promise<void> => {
    try {
      setOpLoading(true);
      await authClient.signOut();
    } catch (err: any) {
      console.error('Logout failed:', err);
    } finally {
      setOpLoading(false);
    }
  };

  const forgotPassword = async (email: string): Promise<boolean> => {
    try {
      setOpLoading(true);
      setError(null);

      // TODO: Better-auth might have a forgetPassword method
      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // You would typically call something like:
      // const result = await authClient.forgetPassword({ email });
      // if (result?.error) {
      //   setError(result.error.message || "Failed to send reset email.");
      //   return false;
      // }

      return true;
    } catch (err: any) {
      setError(err?.message || "Failed to send reset email.");
      return false;
    } finally {
      setOpLoading(false);
    }
  };

  const checkUsernameAvailability = async (username: string): Promise<boolean> => {
    try {
      // For now, we'll simulate a realistic username availability check
      // In production, this would make a real API call to your backend
      await new Promise(resolve => setTimeout(resolve, 300)); // Simulate network delay

      // Block common/reserved usernames
      const blockedUsernames = [
        'admin', 'root', 'api', 'www', 'mail', 'ftp', 'test', 'support', 'help',
        'user', 'guest', 'demo', 'example', 'sample', 'anonymous', 'null', 'undefined',
        'about', 'privacy', 'terms', 'login', 'signup', 'register', 'dashboard',
        'profile', 'settings', 'account', 'home', 'contact', 'blog', 'news'
      ];

      // Check if username is in blocked list (case insensitive)
      if (blockedUsernames.includes(username.toLowerCase())) {
        return false;
      }

      // For demo purposes, also block usernames that are too short or contain certain patterns
      if (username.length < 3) {
        return false;
      }

      // Simulate some usernames being taken (for demo)
      const commonTakenUsernames = ['john', 'jane', 'user123', 'test123', 'demo'];
      if (commonTakenUsernames.includes(username.toLowerCase())) {
        return false;
      }

      // Otherwise, username is available
      return true;
    } catch (err: any) {
      console.warn('Username availability check failed:', err);
      // On error, assume username might be taken for safety
      return false;
    }
  };

  const completeOnboarding = async (): Promise<boolean> => {
    try {
      setOpLoading(true);
      setError(null);

      // TODO: Call API to mark onboarding as completed
      // const result = await authClient.updateUser({ onboardingCompleted: true });

      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update local user state
      // On success, could optimistically update user object if needed via mutation endpoint

      return true;
    } catch (err: any) {
      setError(err?.message || "Failed to complete onboarding.");
      return false;
    } finally {
      setOpLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value: AuthContextType = {
    user: derivedUser,
    session: derivedSession,
    loading,
    error: combinedError,
    login,
    logout,
    signup,
    forgotPassword,
    checkUsernameAvailability,
    completeOnboarding,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
