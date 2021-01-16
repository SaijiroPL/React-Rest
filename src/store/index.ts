import { combineReducers } from 'redux'
import { SurveyReducer } from './survey'

export const rootReducer = combineReducers({
  survey: SurveyReducer
})

export type RootState = ReturnType<typeof rootReducer>