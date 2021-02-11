import React, { Component } from 'react';
import { Switch, Route, useParams } from "react-router-dom"
import TableArsitekReq from '../../pages/arsitek_pages/table_request'
import Form from '../../pages/arsitek_pages/form_submit'
import TableList from '../../pages/arsitek_pages/table_list'
import LoginArsitek from '../../pages/arsitek_pages/login'

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProject: [],
            projects:[],
            projectNameCl:"",
            projectLocation:""
        }
    }

    duplicate = (index) => {
        let currentProjectTemp = this.state.currentProject
        let nameProject = currentProjectTemp[index].projectName
        let locProject = currentProjectTemp[index].location
        console.log("cek nama proyek",nameProject)
        console.log("cek loc proyek", locProject)
        this.setState({
            projectNameCl: nameProject,
            projectLocation: locProject
        })
    }

    save = (project) => {
        const {projectName , projectLocation , projectVendor , projectAmount} = project
        let projectsTemp = this.state.projects
        console.log("ini submit")
      if (
        //validation success
        //that is condition 'if' , if state fill in (good)
        project.projectName !== "" &&
        project.projectLocation !== "" &&
        project.projectVendor !== "" &&
        project.projectAmount !== ""
      ) {
        alert('Success Added: ' + project.projectName + ' , Thank you for fullfill this form!');
        projectsTemp.push({
          projectName,
          projectLocation,
          projectVendor,
          projectAmount
        })
        this.setState({
          projects: projectsTemp
        })
      } else {
        //validation not success
        //if the state still empty or user not full fill perfectly
        alert('Please fill all form data')
        console.log(this.state);
      }
      console.log("masuk sejumlah array ",this.state.projects)
    }

    render() {

        if (this.props.page === 'form') {
            console.log('masuk sini, page: form')
            return (
                <Form save={this.save} />
            )
        }
        if (this.props.page === 'table') {
            console.log('masuk sini, page: table')
            return (
                <TableArsitekReq duplicate={this.duplicate} />
            )
        }
        if (this.props.page === 'tablelist') {
            console.log('masuk sini, page: tablelist')
            return (
                <TableList projects={this.state.projects}/>
            )
        }
        return <Form/>
    }
}

export default Body;