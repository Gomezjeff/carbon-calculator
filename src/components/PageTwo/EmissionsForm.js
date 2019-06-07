import React from 'react'
import { Select } from 'antd'
import NumericInput from '../Utils/NumericInput'
import TextWithTooltip from '../Utils/TextWithTooltip';

const Option = Select.Option

const rtSelect = {
    width: '80px'
}

const percs = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]

export default function EmissionsForm(props) {
    return (
        <table className="page-two-table">
            <thead>
                <tr>
                    <th></th>
                    <th>CO<sub>2</sub> emissions (tons)</th>
                    <th><TextWithTooltip topic='reduction' /></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <TextWithTooltip topic='scope1' />
                    </td>
                    <td>
                        {props.values.emissionsKnown === 'yes'
                            ? <NumericInput
                                maxLength={15}
                                placeholder={`Emissions in tons CO\u2082`}
                                tiptext="Enter your emissions"
                                value={props.values.S1emissions}
                                onChange={e => props.onChange(e, 'S1emissions')}
                            />
                            : <NumericInput
                                value={props.values.S1emissions}
                                disabled
                            />
                        }
                    </td>
                    <td>
                        <Select
                            style={rtSelect}
                            defaultValue={props.values.S1reductionTarget}
                            onChange={e => props.onChange(e, 'S1reductionTarget')}
                        >
                            {percs.map(val => <Option value={val} key={val}>{val}%</Option>)}
                        </Select>
                    </td>
                </tr>
                <tr>
                    <td><TextWithTooltip topic='scope2' /></td>
                    <td>
                        {props.values.emissionsKnown === 'yes'
                            ? <NumericInput
                                placeholder={`Emissions in tons CO\u2082`}
                                tiptext="Enter your emissions"
                                maxLength={15}
                                value={props.values.S2emissions}
                                onChange={e => props.onChange(e, 'S2emissions')}
                            />
                            : <NumericInput
                                value={props.values.S2emissions}
                                disabled
                            />
                        }
                    </td>
                    <td>
                        <Select
                            style={rtSelect}
                            defaultValue={props.values.S2reductionTarget}
                            onChange={e => props.onChange(e, 'S2reductionTarget')}
                        >
                            {percs.map(val => <Option value={val} key={val}>{val}%</Option>)}
                        </Select>
                    </td>
                </tr>
                <tr>
                    <td><TextWithTooltip topic='scope3' /></td>
                    <td>
                        {props.values.emissionsKnown === 'yes'
                            ? <NumericInput
                                placeholder={`Emissions in tons CO\u2082`}
                                tiptext="Enter your emissions"
                                maxLength={15}
                                value={props.values.S3emissions}
                                onChange={e => props.onChange(e, 'S3emissions')}
                            />
                            : <NumericInput
                                value={props.values.S3emissions}
                                disabled
                            />
                        }
                    </td>
                    <td>
                        <Select
                            style={rtSelect}
                            defaultValue={props.values.S3reductionTarget}
                            onChange={e => props.onChange(e, 'S3reductionTarget')}
                        >
                            {percs.map(val => <Option value={val} key={val}>{val}%</Option>)}
                        </Select>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
