import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import {options, initial} from './chartData'
import { connect } from 'react-redux';

class MainChart extends Component {
    state = {
        options,
        initial,
    }

    componentDidMount() {
        const companyInfo = this.props.pageOneInput
        const emissionInfo = this.props.pageTwoInput
        
    }

    render() {
        return (
            <div>
                asdd
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pageOneInput: state.pageOneInput,
    pageTwoInput: state.pageTwoInput
})

export default connect(mapStateToProps)(MainChart)