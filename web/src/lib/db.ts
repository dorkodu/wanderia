import Dexie, { type Table, type Transaction } from 'dexie'

import { IUser } from '@sdk/core'
import { IGoal } from '@web/namespaces/goal'
import { IHabit } from '@web/namespaces/habit'
import { ITodo } from '@web/namespaces/todo'

import { trekie } from './trekie'


export type IAppDb = Dexie & {
  users: Table<IUser, string>
  habits: Table<IHabit, string>
  goals: Table<IGoal, string>
  todos: Table<ITodo, string>
  momentumSnapshots: Table<IMomentumSnapshot, string>
}

export interface IMomentumSnapshot {
  id: string // day or timestamp id
  createdAt: number
  windowDays: number
  score: number
  trend?: number
  bands?: any
  states?: any
  explanation?: any
  impact?: any
  recommendations?: any
}

export const createAppDb = () => new Dexie('app') as IAppDb

export function startAppDb(
  { db, onPopulate = () => { }, onReady = () => { }, onError = () => { }, }:
    {
      db: IAppDb,
      onPopulate?: (t: Transaction) => any,
      onReady?: (db: Dexie) => any,
      onError?: (e: Error) => any,
    }
) {
  // Schema declaration:
  db.version(2).stores({
    users: 'id, &username',
    habits: 'id, userId, &commitmentId',
    goals: 'id, userId',
    todos: 'id, userId, completed',
    momentumSnapshots: 'id, windowDays, createdAt'
  })

  db.on("populate", onPopulate)

  db.on("ready", onReady)

  db.open().then(async (db) => {
    console.info("[app] db opened successfully.")
  }).catch((e) => {
    console.error(`[app] an error happened in dexie. `, e)
    onError(e)
  })
}

// ------------------ Actual DB Creation Step ---------------------

export const db = createAppDb()
startAppDb({
  db,
  onPopulate: async (t) => {
    try {
      const user = trekie.game().user
      await db.users.add(user, user.id)

      console.info("[app] db populated.")
    } catch (error) {
      console.error("[app] db population failed!.", error)
    }
  },
  onReady: async (db) => {
    console.info("[app] db is ready.")
  },
  onError: async (e) => {
    console.error("[app] db open failed!")
    console.error(e)
  },
})