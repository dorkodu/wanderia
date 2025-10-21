import { usernameClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // Server has auth mounted at /auth
  baseURL: "http://localhost:8000",
  apiPath: "/auth", // This is the base path where auth is mounted

  plugins: [
    usernameClient()
  ],
  fetchOptions: {
    credentials: "include",
  }
});


