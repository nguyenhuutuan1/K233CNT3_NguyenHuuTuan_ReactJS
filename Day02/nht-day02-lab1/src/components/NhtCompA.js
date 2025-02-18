import React, { Component } from 'react'

export default class NhtCompA extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "Hữu Tuấn" };
    }

    render() {
        return (
            <div>
                <h2>NhtCompA</h2>
                <p>Dữ liệu trong state: {this.state.name}</p>
                <h3> Hiển thị dữ liệu từ props</h3>
                <p>Name: {this.props.nhtName}</p>
                <p>Address: {this.props.nhtAddress}</p>
            </div>
        )
    }
}
