import { useEffect } from 'react'

import { createApp } from '@sdk/app'
import { type GameState } from '@sdk/core'

import { goalCommitment } from '@web/namespaces/goal/commitment'
import { habitCommitment } from '@web/namespaces/habit/commitment'
import { todoCommitment } from '@web/namespaces/todo/commitment'

import { generateMockGameState } from './mock'

const initialState: GameState = generateMockGameState()

/**
 * TODO: add importing existing state NOT BLANK/MOCK EVERY TIME 
 * TODO: local for restoring session 
 * TODO: remote after new login
 * ? now we use a clean state & mock data
 */

const commitments = {
  'Habit': habitCommitment,
  'Goal': goalCommitment,
  'Todo': todoCommitment,
}

export const trekie = createApp({
  initialState,
  commitments
})

export function useDailyRefresh() {
  useEffect(trekie.dailyRefresh, [])
}