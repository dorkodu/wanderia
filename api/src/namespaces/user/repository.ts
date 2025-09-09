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

export * as userRepository from "./repository";

