import React from 'react'
import { dataGraphProfitNT, dataGraphProfitAT } from '../../../formulas/calculateProfit/calculateProfit'
import { addCommas } from '../../Utils/addCommas'
import './style.css'

export default function profitTable(props) {
    const noTax = dataGraphProfitNT(
        props.companyData, 
        5, 
        "profit",
        "cumulative",
        props.cumulative
    )

    const tax = dataGraphProfitAT(
        props.companyData, 
        props.taxScope, 
        props.taxInfo,
        props.emissionData,
        5,
        "profitAT",
        "cumulativeProfitAT",
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
                    <td className="desc-column"><b>Before tax</b></td>
                    {
                        noTax.map((el, i) => <td key={i}>€{addCommas(el)}</td>)
                    }
                </tr>
                <tr> 
                    <td className="desc-column"><b>After tax</b></td>
                    {
                        tax.map((el, i) => <td key={i}>€{addCommas(el)}</td>)
                    }
                </tr>
                <tr>
                    <td className="desc-column"><b>Impact on profit</b></td>{
                        tax.map((el, index) => {
                            return el - noTax[index]
                        }).map((el, i) => {
                            return el < 0
                                ? <td className="negative" key={i}>€{addCommas(el.toFixed(2))}</td>
                                : <td className="positive" key={i}>€{addCommas(el.toFixed(2))}</td>
                        })
                    } 
                </tr>
            </tbody>
        </table>
    )
}
