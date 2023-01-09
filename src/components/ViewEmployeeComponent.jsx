import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        })
    }
    cancel() {
        this.props.history.push('/employees');
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label><h5> Employee First Name : </h5></label>
                            <div> <h5 style={{ color: 'blue' }}>  &nbsp; {this.state.employee.firstName}</h5></div>
                        </div>
                        <div className="row">
                            <label> <h5> Employee Last Name: </h5></label>
                            <div><h5 style={{ color: 'blue' }}>  &nbsp; {this.state.employee.lastName} </h5></div>
                        </div>
                        <div className="row">
                            <label><h5> Employee Email ID: </h5></label>
                            <div><h5 style={{ color: 'blue' }}>  &nbsp; {this.state.employee.emailId} </h5></div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="text-center">
                    <button className='btn btn-dark' style={{ textAlign: 'center' }} onClick={this.cancel.bind(this)}>Back</button>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
