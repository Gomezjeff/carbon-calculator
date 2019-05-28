import React from 'react'
import {dataGraphTaxableEmissions} from '../../../formulas/calculateProfit/calculateProfit'
import './tables.css'
import {addCommas} from '../../Utils/addCommas'

export default function TaxperyearTable(props) {
    const scope1 = dataGraphTaxableEmissions(
        props.companyData,
        props.taxScope,
        props.taxInfo,
        props.emissionData,
        5,
        "scope1",
        "scope1Cumulative",
        props.cumulative
    )

    const scope2 = dataGraphTaxableEmissions(
        props.companyData,
        props.taxScope,
        props.taxInfo,
        props.emissionData,
        5,
        "scope2",
        "scope2Cumulative",
        props.cumulative
    )

    const scope3 = dataGraphTaxableEmissions(
        props.companyData,
        props.taxScope,
        props.taxInfo,
        props.emissionData,
        5,
        "scope3",
        "scope3Cumulative",
        props.cumulative
    )

    return (
        <table class="chart-table">
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
                    <td className="desc-column"><b>Scope 1 </b>( <i>in tons CO<sub>2</sub></i> )</td>
                    {
                        scope1.map(el => <td>{addCommas(el)}</td>)
                    }
                </tr>
                <tr>
                    <td className="desc-column"><b>Scope 2 </b>( <i>in tons CO<sub>2</sub></i> )</td>
                    {
                        scope2.map(el => <td>{addCommas(el)}</td>)
                    }
                </tr>
                <tr>
                    <td className="desc-column"><b>Scope 3 </b>( <i>in tons CO<sub>2</sub></i> )</td>
                    {
                        scope3.map(el => <td>{addCommas(el)}</td>)
                    }
                </tr>
            </tbody>
        </table>
    )
}
