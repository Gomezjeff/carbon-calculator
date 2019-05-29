// Uncomment next to text console.table
// import { companyInfo, taxScope, taxInfo, emissionsInput } from '../../lib/sampleCompany'
import { calculateAnnualValues } from '../calculateTax/yearTaxCalculation'

const getYearArray = (years) => {
    const yearArray = []
    for (let year = 1; year <= years; year++) {
        yearArray.push(year)
    }
    return yearArray
}

const turnoverWithoutTaxes = (companyInfo, yearArray) => {
    const { turnover: baseTurnover, turnoverGrowth, profitMargin } = companyInfo
    const turnoverWithoutTaxes = {}

    // Run for the different years
    yearArray.map(year => {
        // Calculate the annual turnover for the given year
        const yearTurnover = baseTurnover * (1 + turnoverGrowth / 100) ** (year - 1)

        // Calculate the profit for the given year without taxes
        const profit = yearTurnover * profitMargin / 100

        // Get the values for the previous year
        const previousYear = turnoverWithoutTaxes[year - 1]

        // Calculate the cumulative profit for the given interval
        const cumulative = year > 1 ?
            previousYear.cumulative + profit : profit

        // Put the results in an year object
        const returnObject = {
            year,
            yearTurnover,
            profit,
            cumulative
        }

        // Insert the object year object in the general object
        turnoverWithoutTaxes[year] = returnObject
        return null
    })
    return turnoverWithoutTaxes
}

const turnoverWithTaxes = (companyInfo, yearValues, yearArray) => {
    const { profitMargin } = companyInfo
    const turnoverWithTaxes = {}

    // Run for the different years
    yearArray.map(year => {
        const { taxableEmissions, totalTax, scope1, scope2, scope3 } = yearValues[year]

        // Get the values for the previous year
        const previousYear = turnoverWithTaxes[year - 1]

        // Return the turnover after annual growth
        const turnover = year === 1 ? yearValues[year].newTurnover : yearValues[year].turnover

        // Calculate the profit for a given year before taxes
        const profitBT = turnover * profitMargin / 100

        // Calculate the cumulative profit for the given interval
        const cumulativeProfitBT = year > 1 ?
            previousYear.cumulativeProfitBT + profitBT : profitBT

        // Calculate the cumulative emissions for the given interval
        const cumulativeEmissions = year > 1 ?
            previousYear.cumulativeEmissions + taxableEmissions : taxableEmissions

        // Calculate the profit for a given year after taxes
        const profitAT = profitBT - totalTax

        // Calculate the cumulative profit for the given interval
        const cumulativeProfitAT = year > 1 ?
            previousYear.cumulativeProfitAT + profitAT : profitAT

        // Calculate the cumulative co2 tax
        const cumulativeTax = year > 1 ?
            previousYear.cumulativeTax + totalTax : totalTax

        // Add the scopes to the object
        const scope1Cumulative = year > 1 ?
            previousYear.scope1Cumulative + scope1 : scope1
        const scope2Cumulative = year > 1 ?
            previousYear.scope2Cumulative + scope2 : scope2
        const scope3Cumulative = year > 1 ?
            previousYear.scope3Cumulative + scope3 : scope3

        // Put the results in an year object
        const returnObject = {
            year,
            turnover,
            profitBT,
            cumulativeProfitBT,
            taxableEmissions,
            cumulativeEmissions,
            totalTax,
            profitAT,
            cumulativeProfitAT,
            cumulativeTax,
            scope1,
            scope1Cumulative,
            scope2,
            scope2Cumulative,
            scope3,
            scope3Cumulative,
        }

        // Insert the object year object in the general object
        turnoverWithTaxes[year] = returnObject
        return null
    })

    return turnoverWithTaxes
}

const calculateProfitWithoutTaxes = (companyInfo, years) => {
    const yearArray = getYearArray(years)
    const profitWithoutTaxes = turnoverWithoutTaxes(companyInfo, yearArray)

    return profitWithoutTaxes
}

const calculateProfitWithTaxes = (companyInfo, taxScope, taxInfo, emissionsInput, years) => {
    const yearArray = getYearArray(years)
    const yearValues = calculateAnnualValues(companyInfo, taxScope, taxInfo, emissionsInput, years)
    const profitWithTaxes = turnoverWithTaxes(companyInfo, yearValues, yearArray)

    return profitWithTaxes
}

const createArrays = (profitTable, varNameDiscrete, varNameCumulative, years, isCumulative) => {
    const yearArray = getYearArray(years)
    let profit = []
    let cumulative = []

    yearArray.map(year => {
        if (profitTable[year][varNameDiscrete] < 20 ) {
            profit = [...profit, profitTable[year][varNameDiscrete].toFixed(2)]
            cumulative = [...cumulative, profitTable[year][varNameCumulative].toFixed(2)]
        } else {
            profit = [...profit, profitTable[year][varNameDiscrete].toFixed(0)]
            cumulative = [...cumulative, profitTable[year][varNameCumulative].toFixed(0)]
        }
        return null
    })

    const graphData = isCumulative ? cumulative : profit

    return graphData
}

export const dataGraphProfitNT = (companyInfo, years, profit, cumulative, isCumulative) => {
    if (!companyInfo.turnover) return []
    companyInfo.turnover = parseInt(companyInfo.turnover)
    const profitTable = calculateProfitWithoutTaxes(companyInfo, years)
    const graphData = createArrays(profitTable, profit, cumulative, years, isCumulative)

    return graphData

}

export const dataGraphProfitAT = (companyInfo, taxScope, taxInfo, emissionsInput, years, profit, cumulative, isCumulative) => {
    if (!companyInfo.turnover) return []
    taxInfo.euroPerTon = parseInt(taxInfo.euroPerTon)
    const profitTable = calculateProfitWithTaxes(companyInfo, taxScope, taxInfo, emissionsInput, years, isCumulative)
    const graphData = createArrays(profitTable, profit, cumulative, years, isCumulative)
    return graphData
}

export const dataGraphCO2Tax = (companyInfo, taxScope, taxInfo, emissionsInput, years, profit, cumulative, isCumulative) => {
    if (!companyInfo.turnover) return []
    const profitTable = calculateProfitWithTaxes(companyInfo, taxScope, taxInfo, emissionsInput, years, isCumulative)
    const graphData = createArrays(profitTable, profit, cumulative, years, isCumulative)

    return graphData
}

export const dataGraphTaxableEmissions = (companyInfo, taxScope, taxInfo, emissionsInput, years, nameProfit, nameCumulative, isCumulative) => {
    const profitTable = calculateProfitWithTaxes(companyInfo, taxScope, taxInfo, emissionsInput, years, isCumulative)
    const graphData = createArrays(profitTable, nameProfit, nameCumulative, years, isCumulative)

    return graphData
}

// To run the following tests, uncomment the first line with imports

// console.table(dataGraphProfitNT(companyInfo, 5, "profit", "cumulative", true))
// console.table(dataGraphProfitNT(companyInfo, 5, "profit", "cumulative", false))
// console.table(dataGraphProfitAT(companyInfo, taxScope, taxInfo, emissionsInput, 5, "profitAT", "cumulativeProfitAT", true))
// console.table(dataGraphCO2Tax(companyInfo, taxScope, taxInfo, emissionsInput, 5, "totalTax", "cumulativeTax", true))
// console.table(dataGraphCO2Tax(companyInfo, taxScope, taxInfo, emissionsInput, 5, "totalTax", "cumulativeTax", false))
// console.table(dataGraphTaxableEmissions(companyInfo, taxScope, taxInfo, emissionsInput, 5, "taxableEmissions", "cumulativeEmissions", true))
// console.table(dataGraphTaxableEmissions(companyInfo, taxScope, taxInfo, emissionsInput, 5, "scope1", "scope1Cumulative", false))
