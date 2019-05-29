import React from 'react'

export const labels = {
    elasticity: {
        position: 'right',
        text: `How price sensitive is your market?`,
        message:
            <div>
                <p>How sensitive are consumers in your market to price change? </p>
                <p>To indicate this, we use the price elasticity of demand.</p>
                <p>Inelastic goods and services have fewer substitutes and price change doesn't affect quantity demanded as much. A good example of relatively inelastic demand (between 0 and -1) is that for gasoline. While luxury goods tend to be elastic ({'<-1'}). When selecting a value use the following examples:</p>
                <p>A) No elasticity = 0. This means that a price change does not affect your demand, it will stay the same."10% increase in price results in 0% change in demand."</p>
                <p>B) Demand is inelastic: Value between: - 0,1 and -0,9. This means that a change in price will have an effect on your demand that is lower than your difference in price. "10% increase in price results in -5% change in demand."</p>
                <p>C) Demand is "unit elastic": value is -1. This means that a change in price has the the same % change in demand. "10% increase in price results in -10% change in demand."</p>
                <p>D) Demand is elastic: value is {'< -1'}. This means that a change in price will lead to a bigger change in demand. "10% increase in price will result in a -15% change in demand.</p>
            </div>
    },
    taxToCustomer: {
        position: 'right',
        text: `What percentage of the carbon tax will be levied to your customer?`,
        message:
            <div>
                <p>Does the polluter pay?</p>
                <p>Please indicate the percentage of the tax that will be levied on your customer by increasing your prices.</p>
                <p>This can be adjusted again in the results page</p>
            </div>
    },
    scope1: {
        position: 'left',
        text: `Scope 1 - Direct emissions`,
        message:
            <div>
                <p>Direct GHG emissions occur from sources that are owned or controlled by the company.</p>
                <p>For example:</p>
                <ul className='scope-message'>
                    <li>Fuel combustion</li>
                    <li>Company vehicles</li>
                    <li>Fugitive emissions</li>
                </ul>
            </div>
    },
    scope2: {
        position: 'left',
        text: `Scope 2 - Direct emissions`,
        message:
            <div>
                <p>Scope 2 accounts for GHG emissions from the generation of purchased electricity consumed by a company.</p>
                <p>Examples: Purchased electricity, heat and steam</p>
            </div>
    },
    scope3: {
        position: 'left',
        text: `Scope 3 - Indirect emissions`,
        message:
            <div>
                <p>Scope 3 emissions are a consequence of the activities of the company, but occur from sources not owned or controlled by the company.</p>
                <p>Examples of scope 3 emissions:</p>
                <ul className='scope-message'>
                    <li>Purchased goods and services</li>
                    <li>Business travel</li>
                    <li>Employee commuting</li>
                    <li>Waste disposal</li>
                    <li>Use of sold products</li>
                    <li>Transportation and distribution (up- and downstream)</li>
                </ul>
            </div>
    },
    scope1Box: {
        position: 'left',
        text: `Scope 1 - Direct emissions`,
        message:
            <div>
                <p>Direct GHG emissions occur from sources that are owned or controlled by the company.</p>
                <p>For example:</p>
                <ul className='scope-message'>
                    <li>Fuel combustion</li>
                    <li>Company vehicles</li>
                    <li>Fugitive emissions</li>
                </ul>
            </div>
    },
    scope2Box: {
        position: 'left',
        text: `Scope 2 - Direct emissions`,
        message:
            <div>
                <p>Scope 2 accounts for GHG emissions from the generation of purchased electricity consumed by a company.</p>
                <p>Examples: Purchased electricity, heat and steam</p>
            </div>
    },
    scope3Box: {
        position: 'left',
        text: `Scope 3 - Indirect emissions`,
        message:
            <div>
                <p>Scope 3 emissions are a consequence of the activities of the company, but occur from sources not owned or controlled by the company.</p>
                <p>Examples of scope 3 emissions:</p>
                <ul className='scope-message'>
                    <li>Purchased goods and services</li>
                    <li>Business travel</li>
                    <li>Employee commuting</li>
                    <li>Waste disposal</li>
                    <li>Use of sold products</li>
                    <li>Transportation and distribution (up- and downstream)</li>
                </ul>
            </div>
    },
    co2Tax: {
        position: 'box',
        message:
            <div>
                <p>In this section you can change the CO<sub>2</sub> price per ton to see the effect on your profit.</p>
                <p>The price of carbon that is widely accepted among companies like DSM is set on 50 euros per ton of CO<sub>2</sub>equivalents. It can be expected that this price will reach 100 euro per ton by 2020. growth per year is set on 10%.</p>
            </div>
    },
    companyInfo: {
        position: 'box',
        message:
            <div>
                <p>Use this tab to change your company information or see how other industries perform under tax regulation.
                </p>
            </div>
    },
    marketInfo1: {
        position: 'right',
        text: `How price sensitive is your market?`,
        message:
            <div>
                <p>How sensitive are consumers in your market to price change? </p>
                <p>To indicate this, we use the price elasticity of demand.</p>
                <p>Inelastic goods and services have fewer substitutes and price change doesn't affect quantity demanded as much. A good example of relatively inelastic demand (between 0 and -1) is that for gasoline. While luxury goods tend to be elastic ({'<-1'}). When selecting a value use the following examples:</p>
                <p>A) No elasticity = 0. This means that a price change does not affect your demand, it will stay the same."10% increase in price results in 0% change in demand."</p>
                <p>B) Demand is inelastic: Value between: - 0,1 and -0,9. This means that a change in price will have an effect on your demand that is lower than your difference in price. "10% increase in price results in -5% change in demand."</p>
                <p>C) Demand is "unit elastic": value is -1. This means that a change in price has the the same % change in demand. "10% increase in price results in -10% change in demand."</p>
                <p>D) Demand is elastic: value is {'< -1'}. This means that a change in price will lead to a bigger change in demand. "10% increase in price will result in a -15% change in demand.</p>
            </div>
    },
    marketInfo2: {
        position: 'right',
        text: `What percentage of the carbon tax will be levied to your customer?`,
        message:
            <div>
                <p>Does the polluter pay?</p>
                <p>Please indicate the percentage of the tax that will be levied on your customer by increasing your prices.</p>
                <p>This can be adjusted again in the results page</p>
            </div>
    },
    emissions: {
        position: 'box',
        message:
            <div>
                <p>Change your emissions, reduction targets or calculate your exact emissions.</p>
            </div>
    },
    graphTax: {
        position: 'graph',
        text: `Tax per year`,
        message:
            <div>
                <p>This graph displays the total tax that your company has to pay per year.</p>
            </div>
    },
    graphEmissions: {
        position: 'graph',
        text: `Taxable emissions (in tons)`,
        message:
            <div>
                <p>This graph displays the total amount of taxable emissions for your company per year.</p>
            </div>
    },
    graphProfit: {
        position: 'graph',
        text: 'Profit per year',
        message:
            <div>
                <p>This graph displayes the total amount profit per year for your company before and after the CO<sub>2</sub> tax is deducted.</p>
            </div>
    },
    reduction: {
        position: 'reduction',
        text: 'Reduction target in 5 years',
        message:
            <div>
                <p>Please indicate how much emissions you are planning to reduce in 5 years.</p>
                <p> If you do'nt have any reduction targets or plans please leave the value at 0.</p>
                <p> Targets can be changed again in the final step.</p>
            </div>
    },
    disclaimer: {
        position: 'disclaimer',
        text: 'No rights can be derived from the information given in this tool',
        message:
            <div>
                <p>This calculator only provides an indication of the impact of carbon tax on your profit. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the information provided by this calculator. Any reliance you place on such information is therefore strictly at your own risk.</p>
            </div>
    },
    taxableEmissions: {
        position: 'right',
        text: 'Taxable emissions',
        message:
        <div>
            <p>Indicate here for which scopes the tax will be applicable.</p> 
            <p>For an explanation about the different scopes, scroll down to the “change emissions tab”.</p>
        </div>
    }
}
