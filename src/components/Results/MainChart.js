import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { optionsEuro } from '../../lib/chartOptions'
import { dataGraphProfitNT, dataGraphProfitAT, dataGraphProfitNoReduction } from '../../formulas/calculateProfit/calculateProfit'
import TextWithTooltip from '../Utils/TextWithTooltip'
import '../Utils/styles.css'

export default class MainChart extends Component {
    render() {
        if(!this.props.emissionData || !this.props.taxInfo || !this.props.companyData) return 'loading'
        return (
            <div className='profit-chart'>
                <TextWithTooltip topic='graphProfit' />
                <Line
                    options={optionsEuro}
                    data={
                        {
                            labels: [1, 2, 3, 4, 5],
                            datasets:
                            [
                                {
                                    label: "Profit without tax ",
                                    data: dataGraphProfitNT(
                                        this.props.companyData, 
                                        5, 
                                        "profit",
                                        "cumulative",
                                        this.props.cumulative
                                    ),
                                    backgroundColor: "rgba(101, 188, 162, 0.3)",
                                    pointBackgroundColor:  "rgba(101, 188, 162, 0.8)",
                                    borderColor: "rgba(101, 188, 162, 0.8)"
                                },
                                {
                                    label: "Profit after tax ",
                                    data: dataGraphProfitAT(
                                        this.props.companyData, 
                                        this.props.taxScope, 
                                        this.props.taxInfo,
                                        this.props.emissionData,
                                        5,
                                        "profitAT",
                                        "cumulativeProfitAT",
                                        this.props.cumulative
                                    ),
                                    backgroundColor: "rgba(69, 168, 72, 0.3)",
                                    pointBackgroundColor:  "rgba(69, 168, 72, 0.8)",
                                    borderColor: "rgba(69, 168, 72, 0.8)"
                                },
                                {
                                    label: "Profit without reduction targets ",
                                    data: dataGraphProfitNoReduction(
                                        this.props.companyData,
                                        this.props.taxScope,
                                        this.props.taxInfo,
                                        this.props.emissionData,
                                        5,
                                        "profitAT",
                                        "cumulativeProfitAT",
                                        this.props.cumulative
                                    ),
                                    backgroundColor: "rgba(224, 22, 22, 0.3)",
                                    pointBackgroundColor: "rgb(224, 22, 22, 0.8)",
                                    borderColor: "rgb(224, 22, 22, 0.8)"
                                },
                            ]
                        }
                    }
                />
            </div>
        )
    }
}