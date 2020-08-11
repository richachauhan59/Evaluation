import React from 'react'
import Register from './register'

export default class home extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        console.log("richa")
        return (
            <div>
                <div style={{ border: " 2px solid black", width: "35%", margin: "100px auto", height: "400px" }}>
                    <div>
                        <span style={{ border: " 2px solid black", width: "49.39%", float: "left", height: "30px" }}>Login</span>
                        <span style={{ border: " 2px solid black", width: "49%", float: "right", height: "30px", }}>Register</span>
                    </div>
                    <div style={{ margin: "100px auto" }}>
                        <div style={{ marginTop: "20px", padding: "10px" }} >
                            <label style={{ padding: "10px", margin: " 30px auto"}}>Name</label>
                            <input />
                        </div>
                        <div style={{ marginTop: "20px", padding: "10px" }} >
                            <label style={{ padding: "10px", margin: " 30px auto" }}>Email</label>
                            <input />
                        </div>
                        <button style={{ padding: "10px" , margin:" 30px auto"}}>Login/Register</button>
                    </div>
                </div>
                <Register />
            </div>
        )
    }
}