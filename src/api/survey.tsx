import axios from 'axios';
import { API } from 'const/url';
import { SurveyDetail, SurveyEntry } from 'types/data';

interface ISurveyList {
  surveys: SurveyEntry[];
  total_count: number;
}

interface ISurveyDetail {
  data: SurveyDetail
}

export async function getSurveyList() {
  const { data } = await axios.get<ISurveyList>(API.SURVEY_LIST);

  return data;
}

export async function getSurveyDetail(id: string) {
  const { data } = await axios.get<ISurveyDetail>(`${API.SURVEY_DETAIL}?id=${id}`);

  return data.data;
}