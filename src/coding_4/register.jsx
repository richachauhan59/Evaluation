import React from 'react';

import axios from 'axios';

export default class EmpList extends React.Component {
    state = {
        employees: []
    }

    componentDidMount() {
        axios.get(`https://reqres.in/api/users?page=2`)
            .then(res => {
                const employees = res.data.data;
                this.setState({ employees });
            })
    }

    render() {
        return (
            <div>
                {this.state.employees.map(emp => 
                <div style={{
                        border: " 2px solid black",
                        width: "65%",
                        margin: "20px auto",
                        height: "100px"
                    }}>
                    <div style={{ width: "40%", height: "100px", float: "left" }}>
                        <img style={{ borderRadius: '50%', height: "80px", marginTop:"10px" }} src={emp.avatar}></img>
                    </div>
                        <div style={{ width: "60%", height: "100px"}}>
                        <p>
                            {emp.first_name}{" "}{emp.last_name}
                        </p>
                    
                        <p>
                            {emp.email}
                        </p>
                    </div >
                    
                        
                        
                </div>
                        
                )}
            </div>
        )
    }
}

