import React, { Component } from 'react'
import {connect} from "react-redux"
import { Table } from 'reactstrap';
import {bindActionCreators} from "redux"
import * as personActions from "../../redux/actions/personActions"

class personDetail extends Component {

  componentDidMount(){
    this.props.actions.getPersons();
 }
    render() {
        return (
          <div>
            {this.props.personDetails.length}
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>pasaportNumber</th>
                  <th>kimlik</th>
                  <th>cinsiyet</th>
                  <th>dogumTarih</th>
                  <th>duzenlemeTarih</th>
                  <th>gecerlilikTarih</th>
                  <th>uyruk</th>
                  <th>pasaportTur</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.personDetails.id}</td>
                  <td>{this.props.personDetails.pasaportNumber}</td>
                  <td>{this.props.personDetails.kimlik}</td>
                  <td>{this.props.personDetails.cinsiyet}</td>
                  <td>{this.props.personDetails.dogumTarih}</td>
                  <td>{this.props.personDetails.duzenlemeTarih}</td>
                  <td>{this.props.personDetails.gecerlilikTarih}</td>
                  <td>{this.props.personDetails.uyruk}</td>
                  <td>{this.props.personDetails.pasaportTur}</td>
              
                </tr>
              </tbody>
            </Table>
          </div>
        );
    }
}
 

function mapStateToProps(state){
    return {
        selectedPerson: state.selectPersonReducer,
        personDetails: state.personDetailReducer,
        persons : state.personListReducer
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
          getPersons: bindActionCreators(personActions.getPersons,dispatch),
            getPersons: bindActionCreators(personActions.getPersons,dispatch),
            getPersonDetail: bindActionCreators(personActions.getPersonDetail,dispatch),
            selectPerson : bindActionCreators(personActions.selectPerson,dispatch)
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(personDetail)