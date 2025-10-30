import { } from '@sdk/app'
import { AccountTier, type GameState, IUser } from '@sdk/core'

import { ulid } from 'ulidx'

// initialize app
// register a user
// fill mock data like a real user 

export function generateMockUser(): IUser {
  return {
    id: ulid(),
    username: 'doruk',
    name: 'Doruk Eray',
    bio: `Founder • Polymath • Craftsman`,
    email: 'doruk@dorkodu.com',
    pictureUrl: '/images/doruk--green.png',
    location: "Istanbul, TR",
    url: "https://doruk.dorkodu.com",
    birthDate: new Date("03/08/2004").getTime(),
    joinedAt: new Date("19/02/2024 10:50").getTime(),
    tier: AccountTier.PREMIUM,
  }
}

export function generateMockGameState(): GameState {
  return {
    user: generateMockUser(),
    xp: 0,
    coins: 0,
    momentum: 0,
    streak: 0,
    dailyTarget: 10,
    lastActive: new Date("20/02/2024 16:34").getTime(),
    lastXp: new Date("20/02/2024 16:34").getTime(),
    lastStreak: new Date("20/02/2024 16:34").getTime(),
    xpHistory: {},
    lastDailyCheck: undefined,
  }
}

export async function fillMockUserData() {
}