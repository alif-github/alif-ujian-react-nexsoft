import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom';
import LoginArsitek from './login'
import Form from './form_submit'
import TableArsitekReq from './table_request'
import TableList from './table_list'

class Arsitek extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentProject: [
                {
                    projectName: "Gedung Aneka Tambang",
                    location: "Jakarta Selatan"
                },
                {
                    projectName: "Gedung Pertamina",
                    location: "Jakarta Pusat"
                }
            ],

            projectClient: "",
            locationClient: ""
         }
    }

    duplicate = (index) => {
        let currentProjectTemp = this.state.currentProject
        console.log(currentProjectTemp)
        let project = currentProjectTemp[index].projectName
        let locationproject = currentProjectTemp[index].location

        this.setState({
            projectClient: project,
            location: locationproject
        })

        console.log("testing oper name ",project)
        console.log("testing oper location ",locationproject)
        console.log("testing statenya ", this.state.projectName)
        console.log("testing statenya ", this.state.location)
    }


    render() {
        console.log(this.props) 
        return ( 
            <BrowserRouter >
                <Switch>
                    <Route path = "/login">
                        <LoginArsitek /> 
                    </Route> 
                    <Route path = "/form">
                        <Form duplicate1={this.state.projectClient} duplicate2={this.state.locationClient} />
                    </Route> 
                    <Route path = "/table" > 
                        <TableArsitekReq duplicate={this.duplicate} /> 
                    </Route>
                    <Route path ="/tablelist">
                        <TableList/>
                    </Route> 
                </Switch> 
            </BrowserRouter>
         );
    }
}
 
export default Arsitek;