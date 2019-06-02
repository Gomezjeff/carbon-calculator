import React from 'react'
import {industry} from '../../lib/industry'
import {Select, Slider, Form} from 'antd'
import NumericInput from '../Utils/NumericInput'

const Option = Select.Option

function percFormatter(value) {
    return `${value}%`
}

export default function CompanyInfoForm(props) {
    return (
        <div className="form-container">
            <h2>Company Information</h2>
            <Form layout='inline'>
                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: '30%' }}>
                    <label>Industry</label><br />
                    <Select 
                        placeholder="Select industry" 
                        value={props.values.industry}
                        onChange={e => props.onChange(e, 'industry')}
                    >
                        {industry.map(entry => <Option value={entry} key={entry}>{entry}</Option>)}
                    </Select>
                </Form.Item>
                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: '30%' }}>
                    <label>Annual Turnover (Euro's)</label>
                    <NumericInput 
                        maxLength={16}
                        placeholder="Fill in your revenue" 
                        tiptext="Fill in your revenue"
                        prefix="€" 
                        value={props.values.turnover} 
                        onChange={e => props.onChange(e, 'turnover')} 
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: '30%' }}>
                    <label>Annual Turnover Growth (%)</label>
                    <Slider
                        style={{ width: '250px' }}
                        value={props.values.turnoverGrowth} 
                        onChange={e => props.onChange(e, 'turnoverGrowth')}
                        tipFormatter={percFormatter} 
                        min={0}
                        max={200}
                        marks={{ 0: '0%', 200: '200%' }}
                    />
                </Form.Item>
            </Form>
            <Form layout='inline' style={{ marginTop: '3%' }}>
                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: '30%' }}>
                    <label>What is your overall profit margin (%)</label>
                    <Slider
                        value={props.values.profitMargin} 
                        onChange={e => props.onChange(e, 'profitMargin')}
                        tipFormatter={percFormatter} 
                        marks={{ 0: '0%', 100: '100%' }}
                    />
                </Form.Item>
            </Form>
        </div>
    )
}
