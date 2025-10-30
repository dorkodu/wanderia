import { ulid } from "ulidx"
import { z } from "zod"
import { DEFAULT_AVATAR } from "./consts"

export type IAccount = z.infer<typeof IAccount>
export type IProfile = z.infer<typeof IProfile>
export type IUser = IAccount & IProfile
export enum AccountTier {
  FREE = 0,
  PREMIUM = 1,
  BUSINESS = 2,
  SUPERFAN = 3,
}

const IProfile = z.object({
  bio: z.string().trim().max(500),
  location: z.string().trim().max(100),
  url: z.string().url().trim(),
})

const IAccount = z.object({
  id: z.string().ulid(),
  username: z.string().trim().regex(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9_.]{1,16}(?<![_.])$/),
  name: z.string().trim().min(1).max(48),
  email: z.string().trim().email().max(320),
  pictureUrl: z.string().trim().url(),
  joinedAt: z.number(),
  birthDate: z.number(),
  tier: z.nativeEnum(AccountTier),
})

export const IUser = IAccount.merge(IProfile)

const ICreateUserInput = IUser.partial({
  pictureUrl: true,
  location: true,
  url: true,
  bio: true,
  id: true,
})
export type ICreateUserInput = z.infer<typeof ICreateUserInput>

export function createUser(input: ICreateUserInput): IUser | false {

  let { success, data } = ICreateUserInput.safeParse(input)
  if (!success || !data) throw new Error

  return {
    id: ulid(),
    username: data.username,
    name: data.name,
    bio: data.bio ?? ``,
    email: data.email,
    pictureUrl: data.pictureUrl ?? DEFAULT_AVATAR,
    tier: data.tier,
    location: data.location ?? ``,
    url: data.url ?? ``,
    joinedAt: Date.now(),
    birthDate: data.birthDate,
  }
}

export function registerAccount() {
  // create 
}

export const USERNAME_REGEX = /^(?![_.])(?!.*[_.]{2})([a-zA-Z0-9_.]{1,16})(?<![_.])$/
export const USERHANDLE_REGEX = /^@(?![_.])(?!.*[_.]{2})([a-zA-Z0-9_.]{1,16})(?<![_.])$/

export const schema = {
  Account: IAccount,
  Profile: IProfile,
  User: IUser,

  password: z.string().min(8),

  username: z.string().trim().regex(USERNAME_REGEX),

  birthDate: z.string() // Birth date must be a valid string in "YYYY-MM-DD" format.
    .refine((date) => /^\d{4}-\d{2}-\d{2}$/.test(date), {
      message: "Date must be in YYYY-MM-DD format.",
    })
    .transform((date) => new Date(`${date}T00:00:00Z`)) // Convert to UTC date
}