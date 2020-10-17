import React, { Component } from 'react'

export default class register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: "ritesh@gmail.com",
            password: "ritesh",
            name: "ritesh meher"
        }
    }
    
    render() {
        return (
            <div>
                Hello login
            </div>
        )
    }
}
