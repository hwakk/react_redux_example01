import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    onClick:function(_size){
      dispatch({type:'INCREMENT', size:_size});
    }
  }
}

export default connect(null, mapDispatchToProps)(AddNumber);

/*
export default class extends Component{
  render() {
    return <AddNumber onClick={function(_size){
      store.dispatch({type:'INCREMENT', size:_size});
    }.bind(this)}></AddNumber>
  }
}
*/