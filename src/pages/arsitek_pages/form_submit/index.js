import React, { Component } from 'react';
import './style.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projectName: "",
            projectLocation: "",
            projectVendor: "",
            projectAmount: "",
         }
    }

    setValue = el => {
        console.log([el.target.name]);
        console.log(el.target.value);
        console.log("a",el)
        this.setState({
            [el.target.name]: el.target.value
        })
        console.log(this.setState)
    }

    handleSubmit = el => {
        el.preventDefault()
    }

    render() { 
        const {projectName , projectLocation , projectVendor , projectAmount} = this.state
        return ( 
            <>
                <form onSubmit={this.handleSubmit}>
                    <h3>Submit for new Project</h3>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Project Name :</label>
                        <input name="projectName" type="text" class="form-control" id="formGroupExampleInput" onChange={this.setValue}/>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Project Location :</label>
                        <input name="projectLocation" type="text" class="form-control" id="formGroupExampleInput" onChange={this.setValue}/>
                    </div>
                    <div>
                        <select name="projectVendor" class="form-select form-select-sm" aria-label=".form-select-sm example" onChange={this.setValue}>
                            <option selected>-Select vendor (Contractor)-</option>
                            <option value="WIKA">WIKA</option>
                            <option value="ADIKARYA">ADIKARYA</option>
                            <option value="WASKITA">WASKITA</option>
                        </select>
                    </div>
                    <br/>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Biaya Proyek (Rp.):</label>
                        <input name="projectAmount" type="number" class="form-control" id="formGroupExampleInput" onChange={this.setValue}/>
                    </div>
                        <br/>
                        <button type="submit" onClick={() => this.props.save({projectName , projectLocation , projectVendor , projectAmount})}>Submit</button>
                </form>
            </>
         );
    }
}
 
export default Form;