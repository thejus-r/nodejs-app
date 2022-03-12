import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <main>
                    Home
                </main>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </div>
        )
    }
}
