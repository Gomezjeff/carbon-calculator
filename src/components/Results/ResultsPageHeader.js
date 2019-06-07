import React from 'react'
import { Link } from 'react-router-dom'

export default function PageHeader() {
    return (
        <Link to="/">
            <div className="results-logo">
                <img src={require('../../assets/Logo.png')} alt="logo" id="logo" />
                <h4>Carbon Tax Calculator</h4>
            </div>
        </Link>
    )
}
