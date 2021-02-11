import React, { Component } from 'react';
import './style.css'

class TableArsitekReq extends Component {
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
            ]
         }
    }
    render() { 
        const currentProjectTemp = this.state.currentProject
        console.log(currentProjectTemp)
        return ( 
            <>  
                <div className="change-width">
                    <div>
                        <h3>List of Request Client</h3>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                            <th className="tNumber">ID</th>
                            <th className="tText">Project-Request</th>
                            <th className="tText">Location</th>
                            <th className="tAction">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.currentProject.map((project, idx) => {
                                    console.log(project)
                                    return (
                                        <tr key={idx}>
                                            <td>{idx + 1}</td>
                                            <td>{project.projectName}</td>
                                            <td>{project.location}</td>
                                            <td>
                                                <button className="buttonedit" type="button" onClick={()=>this.state.currentProject}>
                                                    Accept
                                                </button>
                                            </td>
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
 
export default TableArsitekReq;