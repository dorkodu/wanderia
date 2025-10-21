export async function getUser(
) {
  // username
  // email
  // userId
}

export async function checkUsernameAvailability(username: string): Promise<boolean> {
  // This would typically check the database to see if username exists
  // For now, we'll return a simple check
  // In a real implementation, you'd query your user table
  // return !(await db.select().from(users).where(eq(users.username, username)).limit(1)).length

  // Temporary: block some common usernames and return true for others
  const blockedUsernames = ['admin', 'root', 'api', 'www', 'mail', 'ftp', 'test', 'support', 'help'];
  return !blockedUsernames.includes(username.toLowerCase());
}

export async function updateUser(id: string, username: string) {

}

export async function getUserIdWithGoogle(oauthId: string) {

}

// --- Settings Repository (placeholder implementation) ---
// In a real implementation, these would interact with the Drizzle ORM
// using the `settings` table. For now we simulate an in-memory store.

interface SettingsData {
  id: string
  userId: string
  preferences?: {
    theme?: "light" | "dark" | "system"
    language?: string
  }
  config?: {
    notificationsEmail?: boolean
  }
  onboarding?: {
    completed?: boolean
    step?: number
  }
  createdAt: Date
  updatedAt: Date
}

const memorySettings = new Map<string, SettingsData>()

function ensure(userId: string): SettingsData {
  let row = memorySettings.get(userId)
  if (!row) {
    row = {
      id: userId, // simplifying id == userId
      userId,
      preferences: { theme: "system" },
      config: { notificationsEmail: true },
      onboarding: { completed: false, step: 0 },
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    memorySettings.set(userId, row)
  }
  return row
}

export async function getSettings(userId: string) {
  return ensure(userId)
}

export async function updateSettings(userId: string, data: Partial<Omit<SettingsData, "id" | "userId" | "createdAt" | "updatedAt">>) {
  const row = ensure(userId)
  Object.assign(row, {
    preferences: { ...row.preferences, ...data.preferences },
    config: { ...row.config, ...data.config },
    onboarding: { ...row.onboarding, ...data.onboarding },
    updatedAt: new Date(),
  })
  memorySettings.set(userId, row)
  return row
}

export * as userRepository from "./repository";

