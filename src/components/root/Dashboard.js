import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Navi from '../Navbar/Navbar'
import Basvurular from '../Basvurular/Basvurular'
import { Route, Switch } from 'react-router-dom'
import Register from '../Login/Register'
import LoginC from '../Login/LoginC'
import personDetail from '../Persons/personDetail'
import MezuniyetPersonDetail from '../Persons/MezuniyetPersonDetail'
import BasvuruEkle from '../Basvurular/BasvuruEkle'

export default class Dashboard extends Component {
    render() {
        return (
          <div>
            <Container>
              <Navi />

              <Switch>
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={LoginC} />
                <Route path="/" exact component={Basvurular} />
                <Route path="/persons" exact component={Basvurular} />
                <Route
                  path="/personDetail/:id"
                  exact
                  component={personDetail}
                />
                <Route
                  path="/mezuniyetDetail/:id"
                  exact
                  component={MezuniyetPersonDetail}
                />
                <Route path="/createperson" exact component={BasvuruEkle} />
              </Switch>
            </Container>
          </div>
        );
    }
}
