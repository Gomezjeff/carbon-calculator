import React, { Component } from 'react'
import { message } from 'antd'
import { connect } from 'react-redux';
import CompanyInfoForm from './CompanyInfoForm'
import MarketInfoForm from './MarketInfoForm'
import { submitInputOne } from '../../actions/input'
import PageHeader from '../PageHeader'
import './style.css'

class InfoContainer extends Component {
    state = this.props.pageOneInput

    onChange = (data, target) => {
        this.setState({ [target]: data })
    }

    onSubmit = () => {
        if(!this.state.industry) {
            message.error('Please select an industry.')
        } else if(!this.state.turnover) {
            message.error('Please enter your annual turnover.')
        } else {
            this.props.submitInputOne(this.state)
            this.props.history.push('/step-2')
        }
    }

    render() {
        return (
            <div className="info container">
                <PageHeader />
                <CompanyInfoForm values={this.state} onChange={this.onChange} />
                <MarketInfoForm values={this.state} onChange={this.onChange} />
                <button onClick={this.onSubmit} className="continue-button"> Continue </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pageOneInput: state.pageOneInput
})

export default connect(mapStateToProps, { submitInputOne })(InfoContainer)