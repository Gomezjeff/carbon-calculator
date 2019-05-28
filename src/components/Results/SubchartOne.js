import React, { Component } from 'react'
import TextWithTooltip from '../Utils/TextWithTooltip'
import {Line} from 'react-chartjs-2'
import {optionsEuro} from './chartOptions'
import {dataGraphCO2Tax} from '../../formulas/calculateProfit/calculateProfit'

export default class SubchartOne extends Component {
    render() {
        return (
            <div className="subchart-large">
                <TextWithTooltip topic='graphTax' />
                <Line options={optionsEuro} data={
                    {
                        labels: [1, 2, 3, 4, 5],
                        datasets:
                                [
                                    {
                                        label: `Total CO\u2082 tax`,
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
