import React from 'react'
import { Collapse, Slider, Select, Form, Button, Radio, Tooltip } from 'antd'
import NumericInput from '../Utils/NumericInput'
import { industry } from '../../lib/industry'
import TextWithTooltip from '../Utils/TextWithTooltip'
import { formStyle, collapseStyle, panelStyle, emissionStyle, rtStyle, calcEmissionsButtonStyle } from '../../lib/styleObjects'

const Panel = Collapse.Panel
const Option = Select.Option

const percs = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]

export default function OptionsPanel(props) {
    return (
        <div className="options-panel">
            <Collapse defaultActiveKey={['1']} style={collapseStyle}>
                <Panel header="Change your company info" style={panelStyle}>
                    <TextWithTooltip topic='companyInfo' />
                    <Form style={formStyle}>
                        <Form.Item>
                            <label><b>Industry</b></label>
                            <Select value={props.values.industry} onChange={e => props.onChange(e, 'industry')}>
                                {industry.map(entry => <Option value={entry} key={entry}>{entry}</Option>)}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <label><b>Annual Turnover (Euro's)</b></label>
                            <NumericInput
                                maxLength={16}
                                placeholder="Fill in your revenue" 
                                tiptext="Fill in your revenue"
                                prefix="€"
                                value={props.values.turnover}
                                onChange={e => props.onChange(e, 'turnover')}
                            />
                        </Form.Item>
                        <Form.Item>
                            <label><b>Annual Turnover Growth (%)</b></label>
                            <Slider
                                value={props.values.turnoverGrowth}
                                onChange={e => props.onChange(e, 'turnoverGrowth')}
                                tipFormatter={val => `${val}%`}
                                min={0}
                                max={200}
                                marks={{ 0: '0%', 200: '200%' }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <label><b>What is your overall profit margin (%)</b></label>
                            <Slider
                                value={props.values.profitMargin}
                                onChange={e => props.onChange(e, 'profitMargin')}
                                tipFormatter={val => `${val}%`}
                                marks={{ 0: '0%', 100: '100%' }}
                            />
                        </Form.Item>
                    </Form>
                </Panel>
            </Collapse>
            <Collapse defaultActiveKey={['1']} style={collapseStyle}>
                <Panel header="Change your market info" style={panelStyle}>
                    <Form style={formStyle}>
                        <Form.Item>
                            <TextWithTooltip topic='marketInfo1' />
                            <Slider
                                value={props.values.elasticity}
                                onChange={e => props.onChange(e, 'elasticity')}
                                min={-4}
                                max={0}
                                step={0.1}
                                marks={{ 0: '0', '-4': '-4' }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <TextWithTooltip topic='marketInfo2' />
                            <Slider
                                value={props.values.taxToCustomer}
                                onChange={e => props.onChange(e, 'taxToCustomer')}
                                tipFormatter={val => `${val}%`}
                                marks={{ 0: '0%', 100: '100%' }}
                            />
                        </Form.Item>
                    </Form>
                </Panel>
            </Collapse>
            <Collapse defaultActiveKey={['1']} style={collapseStyle}>
                <Panel header={`Change your CO\u2082 emissions`} style={panelStyle}>
                    <TextWithTooltip topic='emissions' className='infoStyle' />
                    <Form style={formStyle} layout="inline">
                        <Form.Item style={{ textAlign: 'center', margin: 'auto' }} className="scope-options">
                            <label>Do you know your emissions?</label>
                            <Radio.Group 
                                value={props.values.emissionsKnown} 
                                onChange={props.onEmissionsKnownChange}
                                style={{ 
                                    marginLeft: '5%',
                                    marginBottom: '10%'
                                }}
                            >
                                <Radio value="yes">Yes</Radio>
                                <Radio value="no">No</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item className="scope-options">
                            <TextWithTooltip topic='scope1Box' />
                            {props.values.emissionsKnown === 'yes'
                                ? <NumericInput
                                    style={emissionStyle}
                                    placeholder={`Emissions in tons CO\u2082`}
                                    tiptext="Enter your emissions"
                                    maxLength={16}
                                    value={props.values.S1emissions}
                                    onChange={e => props.onChange(e, 'S1emissions')}
                                />
                                : <NumericInput
                                    style={emissionStyle}
                                    value={props.values.S1emissions}
                                    disabled
                                />
                            }
                            <Select
                                style={rtStyle}
                                value={props.values.S1reductionTarget}
                                onChange={e => props.onChange(e, 'S1reductionTarget')}
                            >
                                {percs.map(val => <Option value={val} key={val}>{val}%</Option>)}
                            </Select>
                        </Form.Item>
                    </Form>
                    <Form style={formStyle} layout='inline'>
                        <Form.Item className="scope-options">
                            <TextWithTooltip topic='scope2Box' />
                            {props.values.emissionsKnown === 'yes'
                                ? <NumericInput
                                    style={emissionStyle}
                                    placeholder={`Emissions in tons CO\u2082`}
                                    tiptext="Enter your emissions"
                                    maxLength={16}
                                    value={props.values.S2emissions}
                                    onChange={e => props.onChange(e, 'S2emissions')}
                                />
                                : <NumericInput
                                    style={emissionStyle}
                                    value={props.values.S2emissions}
                                    disabled
                                />
                            }
                            <Select
                                style={rtStyle}
                                value={props.values.S2reductionTarget}
                                onChange={e => props.onChange(e, 'S2reductionTarget')}
                            >
                                {percs.map(val => <Option value={val} key={val}>{val}%</Option>)}
                            </Select>
                        </Form.Item>
                    </Form>
                    <Form style={formStyle} layout="inline">
                        <Form.Item className="scope-options">
                            <TextWithTooltip topic='scope3Box' />
                            {props.values.emissionsKnown === 'yes'
                                ? <NumericInput
                                    style={emissionStyle}
                                    placeholder={`Emissions in tons CO\u2082`}
                                    tiptext="Enter your emissions"
                                    maxLength={16}
                                    value={props.values.S3emissions}
                                    onChange={e => props.onChange(e, 'S3emissions')}
                                />
                                : <NumericInput
                                    style={emissionStyle}
                                    value={props.values.S3emissions}
                                    disabled
                                />
                            }
                            <Select
                                style={rtStyle}
                                value={props.values.S3reductionTarget}
                                onChange={e => props.onChange(e, 'S3reductionTarget')}
                            >
                                {percs.map(val => <Option value={val} key={val}>{val}%</Option>)}
                            </Select>
                        </Form.Item>
                    </Form>
                </Panel>
            </Collapse>
            <a href="https://ecochain.com/carbon-tax-calculator/" target="_blank" rel="noopener noreferrer">
                <Button
                    type="primary"
                    size="large"
                    style={calcEmissionsButtonStyle}
                >
                    <b>Calculate your exact emissions</b>
                </Button>
            </a>
        </div>
    )
}
