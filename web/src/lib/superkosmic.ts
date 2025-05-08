import { create, StateCreator } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export interface IStatus<TData> {
  kind: string // keyof typeof "given kinds"
  timestamp: number
  data: TData
}

export interface IEvent<TData> {
  create: (data: TData) => IStatus<TData>
  on: (status: IStatus<TData>) => void
}

export const Event = <TData>(kind: IEvent<TData>): IEvent<TData> => kind

export function Cell<TKinds extends Record<any, IEvent<any>>>(kinds: TKinds) {
  return {
    kinds,
    status<TKind extends keyof TKinds>(kind: TKind, data: Parameters<TKinds[TKind]["create"]>[0]) {
      return this.kinds[kind]!.create(data)
    },
    share(status: IStatus<any>) {
      this.kinds[status.kind]!.on(status)
    }
  }
}

export function Store<TState>
  (initializer: StateCreator<TState, [["zustand/immer", never]], [], TState>) {
  return create<TState>()(immer(initializer))
}

export function Slice<TState>
  (initializer: StateCreator<TState, [["zustand/immer", never]], [], TState>) { return initializer }


const Supercell = { Cell, Event, Store, Slice }
export default Supercell

const mind = Cell({
  HabitCreated: Event<{ id: string }>({
    create: (data) => ({ kind: "HabitCreated", timestamp: Date.now(), data }),
    on: (status) => console.log(status)
  }),
  HabitDeleted: Event<{ time: string }>({
    create: (data) => ({ kind: "HabitDeleted", timestamp: Date.now(), data }),
    on: (status) => console.log(status)
  })
})


