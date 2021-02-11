import React, { Component } from 'react';
import './style.css'

class TableList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projects:[]
         }
    }
    render() {
        console.log(this.props.projects) 
        return ( 
            <>  
                <div className="change-width">
                    <div>
                        <h3>List of RAB (Arsitek)</h3>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th className="tNumber">ID</th>
                                <th className="tText">Project-Request</th>
                                <th className="tText">Location</th>
                                <th className="tText">Contractor</th>
                                <th className="tText">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.projects.map((project, idx) => {
                                    console.log(project)
                                    return (
                                        <tr key={idx}>
                                            <td>{idx + 1}</td>
                                            <td>{project.projectName}</td>
                                            <td>{project.projectLocation}</td>
                                            <td>{project.projectVendor}</td>
                                            <td>{project.projectAmount}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </>
         );
    }
}

// onClick={()=>this.props.update(idx)}
 
export default TableList;