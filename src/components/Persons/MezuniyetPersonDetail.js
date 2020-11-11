import React, { Component } from 'react'
import {connect} from "react-redux"
import { Table } from 'reactstrap';
import {bindActionCreators} from "redux"
import * as personActions from "../../redux/actions/personActions"

class MezuniyetPersonDetail extends Component {

    componentDidMount(){
      this.props.actions.getPersons();
    }

    render() {
        return (
            <div>
                <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>diplomaNot</th>
                  <th>ulkeSec</th>
                  <th>universiteSec</th>
                  <th>dusunce</th>


                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.mezuniyetPerson.id}</td>
                  <td>{this.props.mezuniyetPerson.diplomaNot}</td>
                  <td>{this.props.mezuniyetPerson.ulkeSec}</td>
                  <td>{this.props.mezuniyetPerson.universiteSec}</td>
                  <td>{this.props.mezuniyetPerson.dusunce}</td>
              
                </tr>
              </tbody>
            </Table>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        selectedPerson: state.selectPersonReducer,
        persons : state.personListReducer,
        mezuniyetPerson :state.personMezuniyetDetailReducer
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            getPersons: bindActionCreators(personActions.getPersons,dispatch),
            getPersonDetail: bindActionCreators(personActions.getPersonDetail,dispatch),
            selectPerson : bindActionCreators(personActions.selectPerson,dispatch),
            getPersonMezuniyetDetail : bindActionCreators(personActions.getPersonMezuniyetDetail,dispatch)
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MezuniyetPersonDetail)