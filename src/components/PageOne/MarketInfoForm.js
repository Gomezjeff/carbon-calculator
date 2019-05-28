import React from 'react'
import { Slider, Form } from 'antd'
import '../Utils/styles.css'
import TextWithTooltip from '../Utils/TextWithTooltip';

function percFormatter(value) {
    return `${value}%`
}

const elasticityMarks = {
    '0': {
        label: 'Customer doesn\'t react to price',
        style: {
            fontSize: '80%',
            width: '100px',
            transform: 'translate(-40px)'
        }
    }, 
    '-4': {
        label: 'Customer reacts heavily to price',
        style: {
            fontSize: '80%',
            width: '100px',
            transform: 'translate(-50px)'
        }
    }
}

export default function MarketInfoForm(props) {
    return (
        <div className="form-container" onSubmit={props.onSubmit}>
            <h2>Market Information</h2>
            <Form>
                <Form.Item style={{width: '100%'}} wrapperCol={{ sm: 12 }}>
                    <TextWithTooltip topic='elasticity'/>
                    <Slider
                        style={{width: '65%'}}
                        value={props.values.elasticity} 
                        onChange={e => props.onChange(e, 'elasticity')}
                        min={-4}
                        max={0}
                        step={0.1}
                        marks={elasticityMarks}
                    />
                </Form.Item>
                <Form.Item style={{width: '100%'}} colon={false} wrapperCol={{ sm: 12 }}>
                    <TextWithTooltip topic='taxToCustomer'/>
                    <Slider
                        style={{width: '65%'}}
                        value={props.values.taxToCustomer} 
                        onChange={e => props.onChange(e, 'taxToCustomer')}
                        tipFormatter={percFormatter} 
                        marks={{ 0: '0%', 100: '100%' }}
                    />
                </Form.Item>
            </Form>
        </div>
    )
}
