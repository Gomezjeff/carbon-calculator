import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import {optionsEuro, options} from './chartOptions'
import {dataGraphCO2Tax, dataGraphTaxableEmissions} from '../../formulas/calculateProfit/calculateProfit'

export default class SubCharts extends Component {
    
    render() {
        return (
            <div className="subcharts-container">
                <div className="subchart">
                    <h3>Tax per year</h3>
                    <Line options={optionsEuro} data={
                        {
                            labels: [1,2,3,4,5],
                            datasets:
                            [
                                {
                                    label: "Total CO2 tax",
                                    data: dataGraphCO2Tax(
                                        this.props.companyData, 
                                        this.props.taxScope, 
                                        this.props.taxInfo, 
                                        this.props.emissionData, 
                                        5, 
                                        "totalTax", 
                                        "cumulativeTax", 
                                        this.props.cumulative
                                    ),
                                    backgroundColor: "rgba(101, 188, 162, 0.4)",
                                    pointBackgroundColor:  "rgba(101, 188, 162, 1)",
                                },
                            ]
                        }
                    } />
                </div>
                <div className="subchart">
                    <h3>Taxable emissions</h3>
                    <Line options={options} data={
                        {
                            labels: [1,2,3,4,5],
                            datasets:
                            [
                                {
                                    label: "Scope 1",
                                    data: dataGraphTaxableEmissions(
                                        this.props.companyData, 
                                        this.props.taxScope, 
                                        this.props.taxInfo, 
                                        this.props.emissionData, 
                                        5, 
                                        "scope1", 
                                        "scope1Cumulative", 
                                        this.props.cumulative
                                    ),
                                    backgroundColor: "rgba(101, 188, 162, 0.4)",
                                    pointBackgroundColor:  "rgba(101, 188, 162, 1)",
                                },
                                {
                                    label: "Scope 2",
                                    data: dataGraphTaxableEmissions(
                                        this.props.companyData, 
                                        this.props.taxScope, 
                                        this.props.taxInfo, 
                                        this.props.emissionData, 
                                        5, 
                                        "scope2", 
                                        "scope2Cumulative", 
                                        this.props.cumulative
                                    ),
                                    backgroundColor: "rgba(69, 168, 72, 0.4)",
                                    pointBackgroundColor:  "rgba(69, 168, 72, 1)",
                                },
                                {
                                    label: "Scope 3",
                                    data: dataGraphTaxableEmissions(
                                        this.props.companyData, 
                                        this.props.taxScope, 
                                        this.props.taxInfo, 
                                        this.props.emissionData, 
                                        5, 
                                        "scope3", 
                                        "scope3Cumulative", 
                                        this.props.cumulative
                                    ),
                                    backgroundColor: "rgba(89, 168, 160, 0.4)",
                                    pointBackgroundColor:  "rgba(89, 168, 160, 0.4)",
                                },
                            ]
                        }
                    } />
                </div>
            </div>
        )
    }
}