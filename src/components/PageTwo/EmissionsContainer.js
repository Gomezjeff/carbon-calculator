import React, { Component } from 'react'
import { Radio, message } from 'antd'
import PageHeader from '../PageHeader'
import EmissionsForm from './EmissionsForm'
import { calculateEmissions } from '../../formulas/calculateEmissions/calculateEmissions'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { submitInputTwo } from '../../actions/input'
import './style.css'

class EmissionsContainer extends Component {
    state = this.props.pageTwoInput

    componentDidMount() {
        if (this.state.emissionsKnown === 'no') {
            const { industry, turnover } = this.props.pageOneInput
            const { S1emissions, S2emissions, S3emissions } = calculateEmissions(industry, turnover)
            this.setState({
                emissionsKnown: 'no',
                S1emissions,
                S2emissions,
                S3emissions,
            })
        }
    }

    onEmissionsKnownChange = (event) => {
        const emissionsKnown = event.target.value

        if (emissionsKnown === 'yes') {
            this.setState({
                emissionsKnown,
                S1emissions: 0,
                S2emissions: 0,
                S3emissions: 0,
            })
        } else if (emissionsKnown === 'no') {
            const { industry, turnover } = this.props.pageOneInput
            const { S1emissions, S2emissions, S3emissions } = calculateEmissions(industry, turnover)
            this.setState({
                emissionsKnown,
                S1emissions,
                S2emissions,
                S3emissions,
            })
        }
    }

    onChange = (data, target) => {
        this.setState({
            [target]: data
        })
    }

    onSubmit = () => {
        if (!this.state.emissionsKnown) {
            message.error("Please select 'Yes' or 'No'")
        } else {
            this.props.submitInputTwo(this.state)
            this.props.history.push("/results")
        }
    }

    render() {
        if (!sessionStorage.getItem('companyInfo')) {
            return <Redirect to='/' />
        } else {
            return (
                <div className="container">
                    <PageHeader />
                    <div className="knows-emissions">
                        <h2>Company CO<sub>2</sub> Emissions</h2>
                        Do you know your company CO<sub>2</sub> emissions?
                        <Radio.Group
                            value={this.state.emissionsKnown}
                            onChange={this.onEmissionsKnownChange}
                            style={{ marginLeft: '5%' }}
                        >
                            <Radio value="yes">Yes</Radio>
                            <Radio value="no">No</Radio>
                        </Radio.Group>
                    </div>
                    {this.state.emissionsKnown &&
                        <div className="form-container">
                            <EmissionsForm values={this.state} onChange={this.onChange} />
                            {this.state.emissionsKnown === 'no' &&
                            <div className="info-box">
                                <p>
                                    Unfortunately you don't know your exact emissions. 
                                    Based on your industry and turnover we will give you a 
                                    <b> rough (!) </b> 
                                    estimation of your emissions to play around with. 
                                    Emissions are estimated by using input/output modelling.
                                    <br /><br />
                                    <i>- No rights can be derived from the information given in this tool -</i>
                                </p>
                            </div>
                            }
                            <button className="continue-button" onClick={this.onSubmit}>Continue</button>
                        </div>
                    }
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        pageOneInput: state.pageOneInput,
        pageTwoInput: state.pageTwoInput
    }
}

export default connect(mapStateToProps, { submitInputTwo })(EmissionsContainer)
