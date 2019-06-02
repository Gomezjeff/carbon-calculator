import React, { Component } from 'react'
import { Button } from 'antd'
import './LandingPage.css'

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page-container">
                <img 
                    src={require('../../assets/Logo.png')} 
                    alt="Carbon tax calculator logo" 
                    id="logo" 
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        margin: '1%'
                    }}
                />
                <div className="landing-page">
                    <h1>Welcome to the Carbon Tax Calculator</h1>
                    <h3>Find out what impact carbon taxation has on your profit</h3>
                    <Button type="primary" onClick={() => this.props.history.push("/step-1")}>Calculate</Button>
                </div>
            </div>
        )
    }
}
