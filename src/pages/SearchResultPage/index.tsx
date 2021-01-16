import { RootState } from 'store'
import { setSurveyEntries, setTotalCount } from 'store/survey'
import { connect } from 'react-redux'

import Page from './page'

const mapStateToProps = (state: RootState) => ({
  surveyList: state.survey.list,
  totalCount: state.survey.totalCount,
})

const mapDispatchToProps = {
  setSurveyEntries,
  setTotalCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);