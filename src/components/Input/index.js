import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/todos'
import Input from './Input'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(null, mapDispatchToProps)(Input)
