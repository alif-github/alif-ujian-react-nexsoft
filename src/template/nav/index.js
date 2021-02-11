import React, { Component } from 'react';
import { Link } from "react-router-dom"

import Menu from "../../component/menu"
import "./style.css"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        console.log("nav:", this.props.page);
        const { changePage } = this.props
        return (
            <div>
                <Link to="/table">
                    <Menu redirect={() => changePage("table")}>Project Request</Menu>
                </Link>
                <Link to="/form">
                    <Menu redirect={() => changePage("form")}>Form Submit</Menu>
                </Link>
                <Link to="/tablelist">
                    <Menu redirect={() => changePage("tablelist")}>Table List</Menu>
                </Link>
            </div>
        );
    }
}

export default Nav;