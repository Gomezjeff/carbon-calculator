import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { options } from './chartOptions'
import { dataGraphTaxableEmissions } from '../../formulas/calculateProfit/calculateProfit'
import TextWithTooltip from '../Utils/TextWithTooltip';


export default class SubchartTwo extends Component {
    render() {
        return (
            <div className="subchart-large">
                <TextWithTooltip topic='graphEmissions' />
                <Line options={options} data={
                    {
                        labels: [1, 2, 3, 4, 5],
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
                                    backgroundColor: "rgba(60, 116, 151, 0.3)",
                                    pointBackgroundColor: "rgba(60, 116, 151, 0.8)",
                                    borderColor: "rgba(60, 116, 151, 0.8)"
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
                                    backgroundColor: "rgba(69, 168, 72, 0.3)",
                                    pointBackgroundColor: "rgba(69, 168, 72, 1)",
                                    borderColor: "rgba(69, 168, 72, 0.8)"
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
                                    backgroundColor: "rgba(101, 188, 162, 0.3)",
                                    pointBackgroundColor: "rgba(101, 188, 162, 1)",
                                    borderColor: "rgba(101, 188, 162, 0.8)"
                                },
                            ]
                    }
                } />
            </div>
        )
    }
}
