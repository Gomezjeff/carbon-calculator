import React from 'react'
import {Collapse, Icon, Slider, Select, Form, Button} from 'antd'
import NumericInput from '../Utils/NumericInput'
import {industry} from '../../lib/industry'
import {Link} from 'react-router-dom'
import TextWithTooltip from '../Utils/TextWithTooltip'
import './Results.css'

const Panel = Collapse.Panel
const Option = Select.Option

const cog = <Icon type="setting" />

const panelStyle = {
    background: 'rgba(255, 255, 255, 0.64)',
    border: '0'
}

const collapseStyle = {
    background: 'rgba(255, 255, 255, 0.64)',
    border: '0',
    fontSize: '130%',
    textAlign: 'center',
    margin: '10px 0',
    borderRadius: '0'
}

const formStyle = {
    width: '90%',
    maxWidth: '400px',
    margin: 'auto'
}

const emissionStyle = {
    width: '60%',
    margin: '5%'
}

const rtStyle = {
    width: '30%',
}

const percs = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export default function OptionsPanel(props) {
    return (
        <div className="options-panel">
            <Collapse defaultActiveKey={['1']} style={collapseStyle}>
                <Panel header="Change your company info" style={panelStyle}>
                <TextWithTooltip topic='companyInfo' />
                    <Form style={formStyle}>
                        <Form.Item>
                            <label>Industry</label>
                            <Select defaultValue="Select industry" onChange={e => props.onChange(e, 'industry')}>
                                {industry.map(entry => <Option value={entry} key={entry}>{entry}</Option>)}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <label>Annual Turnover (Euro's)</label>
                            <NumericInput
                                maxLength={25}
                                prefix="€"
                                value={props.values.turnover}
                                onChange={e => props.onChange(e, 'turnover')}
                            />
                        </Form.Item>
                        <Form.Item>
                            <label>Annual Turnover Growth (%)</label>
                            <Slider
                                value={props.values.turnoverGrowth}
                                onChange={e => props.onChange(e, 'turnoverGrowth')}
                                tipFormatter={val => `${val}%`} 
                                min={0}
                                max={200}
                                marks={{0: '0%', 200: '200%'}}
                            />
                        </Form.Item>
                        <Form.Item>
                            <label>What is your overall profit margin (%)</label>
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
                <TextWithTooltip topic='marketInfo' />
                    <Form style={formStyle}>
                        <Form.Item>
                            <label>How price sensitive is your market?</label>
                            <Slider
                                value={props.values.elasticity}
                                onChange={e => props.onChange(e, 'elasticity')}
                                min={-4}
                                max={0}
                                step={0.1}
                                marks={{0: '0', '-4': '-4'}}
                            />
                        </Form.Item>
                        <Form.Item>
                            <label>What percentage of the carbon tax will be levied to your customer?</label>
                            <Slider
                                value={props.values.taxToCustomer}
                                onChange={e => props.onChange(e, 'taxToCustomer')}
                                tipFormatter={val => `${val}%`} 
                                marks={{0: '0%', 100: '100%'}}
                            />
                        </Form.Item>
                    </Form>
                </Panel>
            </Collapse>
            <Collapse defaultActiveKey={['1']} style={collapseStyle}>
                <Panel header="Change your CO2 emissions" style={panelStyle}>
                    {/* <Radio.Group 
                        value={props.values.emissionsKnown} 
                        onChange={props.onEmissionsKnownChange}
                        style={{ marginLeft: '5%' }}
                    >
                        <Radio value="yes">Yes</Radio>
                        <Radio value="no">No</Radio>
                    </Radio.Group> */}
                    <TextWithTooltip topic='emissions' className='infoStyle' />
                    <Form style={formStyle} layout="inline">
                        <Form.Item>
                            <label>Scope 1 - Direct emissions</label>
                            {props.values.emissionsKnown === 'yes'
                                ? <NumericInput
                                    style={emissionStyle}
                                    maxLength={25}
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
                        <Form.Item>
                            <label>Scope 2 - Direct emissions</label>
                            {props.values.emissionsKnown === 'yes'
                                ? <NumericInput
                                    style={emissionStyle}
                                    maxLength={25}
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
                        <Form.Item>
                            <label>Scope 3 - Indirect emissions</label>
                            {props.values.emissionsKnown === 'yes'
                                ? <NumericInput
                                    style={emissionStyle}
                                    maxLength={25}
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
            <Link to="/ecochain">
                <Button 
                    type="primary" 
                    size="large"
                    style={{
                        width: '100%',
                        height: '60px',
                        marginTop: '1%',
                        bottom: '2%',
                    }}
                >
                    <b>Calculate your exact emissions</b>
                </Button>
            </Link>
        </div>
    )
}
