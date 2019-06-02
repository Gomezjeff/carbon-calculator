import React, { Component } from 'react'
import OptionsPanel from './OptionsPanel'
import { connect } from 'react-redux'
import { updateInput } from '../../actions/input'
import { calculateEmissions } from '../../formulas/calculateEmissions/calculateEmissions'

class OptionsContainer extends Component {
    onChange = (data, target) => {
        const update = async function() {
            await this.props.updateInput({ [target]: data })
            if (this.props.emissionsKnown === 'no') {
                this.props.updateInput(calculateEmissions(this.props.industry, this.props.turnover))
            }
        }.bind(this)
        update()
    }

    onEmissionsKnownChange = (e) => {
        this.props.updateInput({ emissionsKnown: e.target.value })
        this.props.updateInput(calculateEmissions(this.props.industry, this.props.turnover))
    }

    render() {
        return (
            <OptionsPanel 
                values={this.props} 
                onChange={this.onChange}
                onEmissionsKnownChange={this.onEmissionsKnownChange}
            />
        )
    }
}

const mapStateToProps = state => ({
    industry: state.pageOneInput.industry,
    turnover: state.pageOneInput.turnover, 
    turnoverGrowth: state.pageOneInput.turnoverGrowth, 
    profitMargin: state.pageOneInput.profitMargin, 
    elasticity: state.pageOneInput.elasticity, 
    taxToCustomer: state.pageOneInput.taxToCustomer, 
    emissionsKnown: state.pageTwoInput.emissionsKnown,
    S1emissions: state.pageTwoInput.S1emissions, 
    S1reductionTarget: state.pageTwoInput.S1reductionTarget, 
    S2emissions: state.pageTwoInput.S2emissions, 
    S2reductionTarget: state.pageTwoInput.S2reductionTarget, 
    S3emissions: state.pageTwoInput.S3emissions, 
    S3reductionTarget: state.pageTwoInput.S3reductionTarget, 
})

export default connect(mapStateToProps, { updateInput })(OptionsContainer)