import React from 'react'
import {Steps} from 'antd'

const { Step } = Steps

export default function Progress(props) {
    return (
        <div className="progress">
            <Steps current={props.step} size="small">
                <Step title="Company Info"/>
                <Step title="Emissions"  />
                <Step title="Results" />
            </Steps>
        </div>
    )
}
