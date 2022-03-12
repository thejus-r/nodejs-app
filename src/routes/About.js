import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class About extends Component {
    render() {
        return (
            <div>
                <main>
                    About
                </main>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
            </div>
        )
    }
}
