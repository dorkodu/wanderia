import Dexie, { Table, Transaction } from 'dexie'
import { ulid } from 'ulidx'

import { fillMockUserData } from './mock'
import { trekie } from './trekie'


export type IAppDb = Dexie & {

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
  db.version(1).stores({

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