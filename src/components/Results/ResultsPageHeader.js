import React from 'react'

export default function PageHeader() {
    return (
        <div className="results-logo">
            <img src={require('../../assets/Logo.png')} alt="logo" id="logo" />
            <h4>Carbon Tax Calculator</h4>
        </div>
    )
}
