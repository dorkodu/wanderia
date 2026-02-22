import { AccountTier, IUser } from '@sdk/core'

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


export async function fillMockUserData() {
}