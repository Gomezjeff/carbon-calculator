import React, { Component } from 'react'
import MainChart from './MainChart'
import TaxOptions from './TaxOptions'
import SubCharts from './SubCharts'
import { Checkbox, Tabs } from 'antd'
import './Results.css'
import { connect } from 'react-redux';
import OptionsContainer from './OptionsContainer'
import TextWithTooltip from '../Utils/TextWithTooltip'
import SubChartOne from './SubchartOne'
import SubChartTwo from './SubchartTwo'
import ProfitTable from './Tables/ProfitTable'
import TaxperyearTable from './Tables/TaxperyearTable';
import EmissionsTable from './Tables/EmissionsTable'

class ResultsContainer extends Component {
    state = {
        euroPerTon: 50, // euros
        taxGrowth: 5.5, // percentage,
        checked: ['Scope 1', 'Scope 2', 'Scope 3'],
        taxScope: { scope1: true, scope2: true, scope3: true },
        cumulative: true
    }

    onChange = (data, target) => {
        if(!target) {
            this.setState({
                cumulative: data.target.checked
            })
        } else {
            this.setState({ [target]: data })
        }
    }

    onCheckboxChange = (data, target) => {
        const newScope = { scope1: true, scope2: true, scope3: true }

        if(!data.includes('Scope 1')) newScope.scope1 = false
        if(!data.includes('Scope 2')) newScope.scope2 = false
        if(!data.includes('Scope 3')) newScope.scope3 = false

        this.setState({ taxScope: newScope })

        this.onChange(data, target)
    }

    render() {
        return (
            <>
            <div className="results-container">
                <div className="options-container">
                    <TaxOptions 
                        values={this.state} 
                        onChange={this.onChange} 
                        onCheckboxChange={this.onCheckboxChange} 
                    />
                    <OptionsContainer />
                </div>
                
                <div className="chart-container">
                    <Tabs style={{marginTop: '1%'}}>
                        <Tabs.TabPane tab="Overview" key="1">
                            <MainChart 
                                taxInfo={this.state} 
                                companyData={this.props.companyData} 
                                emissionData={this.props.emissionData}
                                cumulative={this.state.cumulative}
                                taxScope={this.state.taxScope} 
                            />
                            <SubCharts 
                                taxInfo={this.state} 
                                companyData={this.props.companyData} 
                                emissionData={this.props.emissionData}
                                cumulative={this.state.cumulative}
                                taxScope={this.state.taxScope}  
                            />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Profit" key="2">
                            <MainChart 
                                taxInfo={this.state} 
                                companyData={this.props.companyData} 
                                emissionData={this.props.emissionData}
                                cumulative={this.state.cumulative}
                                taxScope={this.state.taxScope} 
                            />
                            <ProfitTable
                                taxInfo={this.state} 
                                companyData={this.props.companyData} 
                                emissionData={this.props.emissionData}
                                cumulative={this.state.cumulative}
                                taxScope={this.state.taxScope}
                            />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Tax/year" key="3">
                            <SubChartOne
                                taxInfo={this.state} 
                                companyData={this.props.companyData} 
                                emissionData={this.props.emissionData}
                                cumulative={this.state.cumulative}
                                taxScope={this.state.taxScope} 
                            />
                            <TaxperyearTable
                                taxInfo={this.state} 
                                companyData={this.props.companyData} 
                                emissionData={this.props.emissionData}
                                cumulative={this.state.cumulative}
                                taxScope={this.state.taxScope} 
                            />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Emissions" key="4">
                            <SubChartTwo 
                                taxInfo={this.state} 
                                companyData={this.props.companyData} 
                                emissionData={this.props.emissionData}
                                cumulative={this.state.cumulative}
                                taxScope={this.state.taxScope} 
                            />
                            <EmissionsTable
                                taxInfo={this.state} 
                                companyData={this.props.companyData} 
                                emissionData={this.props.emissionData}
                                cumulative={this.state.cumulative}
                                taxScope={this.state.taxScope}
                            />
                        </Tabs.TabPane>
                    </Tabs>

                </div>
            </div>
            <a className="ecochain" href="https://ecochain.com">
                <img src={require('../../assets/ecochain.png')} alt="powered by Ecochain" />
            </a>
            <footer>
                <div className="footer">
                    <TextWithTooltip topic='disclaimer' />
                </div>
            </footer>
        </>
        )
    }
}

const mapStateToProps = state => ({
    companyData: state.pageOneInput,
    emissionData: state.pageTwoInput
})

export default connect(mapStateToProps)(ResultsContainer)