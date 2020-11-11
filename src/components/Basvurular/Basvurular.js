import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as personActions from "../../redux/actions/personActions"
import {Button,Table} from "reactstrap"
import { Link } from 'react-router-dom'

class basvurular extends Component {
  componentDidMount(){
    this.props.actions.getPersons();

  }

  select = pid =>{
    this.props.actions.getPersonDetail(pid);
    this.props.actions.getPersonMezuniyetDetail(pid);
  //  localStorage.setItem("persons", this.props.mezuniyetPerson)
   // console.log(localStorage)
    
  }
    render() {
        return (
          <div>
            <h5>Başvuru Sayısı: {this.props.persons.length}</h5>
            <Table>
              <thead>
                <tr>
                  <th>ad</th>
                  <th>soyad</th>
                  <th>email</th>
                  <th>tel</th>
                  <th>departman</th>
                  <th>Pasaport Detayı</th>
                  <th>Mezuniyet Detayı</th>
                </tr>
              </thead>
              <tbody>
                {this.props.persons.map((p) => (
                  <tr key={p.id}>
                    <td>{p.ad}</td>
                    <td>{p.soyad}</td>
                    <td>{p.email}</td>
                    <td>{p.tel}</td>
                    <td>{p.departman}</td>                  
                      <td>
                       <Link to={"personDetail/" + p.id} onClick={()=>this.select(p.id)}> <Button  color="info"> Pasaport Detayı </Button></Link>
                      </td>
                      <td>
                       <Link to={"mezuniyetDetail/" + p.id} onClick={()=>this.select(p.id)}> <Button  color="info"> Mezuniyet Detayı </Button></Link>
                      </td>
                    
                  </tr>
                ))}
              </tbody>
            </Table>
            
          
          </div>
        );
    }
}



function mapStateToProps(state){
    return {
        selectedPerson : state.selectPersonReducer,
        persons : state.personListReducer, 
        personDetails: state.personDetailReducer,
        mezuniyetPerson :state.personMezuniyetDetailReducer
    }
}
function mapDispatchToProps(dispatch){

  return{
    actions:{
      getPersonDetail: bindActionCreators(personActions.getPersonDetail,dispatch),
      getPersons: bindActionCreators(personActions.getPersons,dispatch),
      selectPerson : bindActionCreators(personActions.selectPerson,dispatch),
      getPersonMezuniyetDetail : bindActionCreators(personActions.getPersonMezuniyetDetail,dispatch)
    }
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(basvurular)