import React from 'react'
import {dataGraphCO2Tax} from '../../../formulas/calculateProfit/calculateProfit'
import './tables.css'
import {addCommas} from '../../Utils/addCommas'

export default function TaxperyearTable(props) {
    const perYear = dataGraphCO2Tax(
        props.companyData,
        props.taxScope,
        props.taxInfo,
        props.emissionData,
        5,
        "totalTax",
        "cumulativeTax",
        props.cumulative
    )

    return (
        <table className="chart-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Year 1</th>
                    <th>Year 2</th>
                    <th>Year 3</th>
                    <th>Year 4</th>
                    <th>Year 5</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="desc-column"><b>Tax per year</b></td>
                    {
                        perYear.map(el => {
                            return <td>€{addCommas(el)}</td>
                        })
                    }
                </tr>
            </tbody>
        </table>
    )
}
