import { SurveyEntry } from 'types/data';

export function typedAction(type: string, payload?: any) {
  return { type, payload }
}

type SurveyState = {
  list: SurveyEntry[];
  totalCount: number;
}

const initStates: SurveyState = {
  list: [],
  totalCount: 0
}

export const setSurveyEntries = (entries: SurveyEntry[]) => typedAction('survey/list', entries);
export const setTotalCount = (count: number) => typedAction('survey/count', count);

type SurveyAction = ReturnType<typeof setSurveyEntries | typeof setTotalCount>

export function SurveyReducer(
  state = initStates,
  action: SurveyAction
): SurveyState {
  switch (action.type) {
    case 'survey/list': 
      return { ...state, list: action.payload }
    case 'survey/count':
      return { ...state, totalCount: action.payload }
    default: 
      return state;
  }
}
