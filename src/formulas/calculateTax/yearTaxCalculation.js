// import { companyInfo, taxInfo, taxScope, reductionInfo, emissionsInput } from '../../lib/sampleCompany'

// SCOPE EMISSIONS CALCULATOR DONE
const scopeEmissionsCalculator = (emissions, taxScope) => {
    const scopes = ['scope1', 'scope2', 'scope3']
    const scopeEmissions = {}

    let total = 0
    for (let i = 0; i < scopes.length; i++) {
        const scope = scopes[i]
        if (taxScope[scope]) {
            scopeEmissions[scope] = emissions[scope]
            total += emissions[scope]
        } else {
            scopeEmissions[scope] = 0
        }
    }
    scopeEmissions["totalTons"] = total
    return scopeEmissions
}

// TURNOVER CALCULATOR DONE
const turnoverCalculator = (turnover, companyInfo, taxYear, scopeEmissions, year, oldP) => {
    const { taxToCustomer, elasticity } = companyInfo
    const { scope1, scope2, scope3, totalTons } = scopeEmissions
    const totalTax = taxYear * totalTons

    const dTurnover = ((totalTax * taxToCustomer / 100) / turnover) * elasticity
    const newQ = turnover * (1 + dTurnover)
    const newP = oldP * (1 + (totalTax * taxToCustomer / 100) / turnover)
    const newTurnover = newQ * newP

    const turnoverInfo = {
        year,
        turnover,
        taxYear,
        scope1,
        scope2,
        scope3,
        taxableEmissions:totalTons,
        totalTax,
        dTurnover,
        newQ,
        newP,
        newTurnover
    }

    return turnoverInfo
}

// TURNOVER TAX CALCULATOR DONE
const turnoverTaxCalculator = (turnover, turnoverGrowth, taxInfo, years) => {
    const { euroPerTon: baseTax, taxGrowth } = taxInfo
    const taxYears = {}

    for (let year = 1; year <= years; year++) {
        if (year === 1) {
            taxYears[year] = {
                year,
                euroPerTon: baseTax,
                newTurnover: turnover,
            }
        } else {
            const baseTax = taxYears[1].euroPerTon
            const newTax = baseTax * (1 + taxGrowth / 100) ** [year - 1]

            const baseTurnover = taxYears[1].newTurnover
            const newTurnover = baseTurnover * (1 + turnoverGrowth / 100) ** [year - 1]

            taxYears[year] = {
                year,
                euroPerTon: newTax,
                newTurnover,
            }
        }
    }

    return taxYears
}

// REDUCED EMISSIONS CALCULATOR DONE
const reducedEmissionsCalculator = (emissions, reduction, year, years, turnoverGrowth) => {
    const scopes = ['scope1', 'scope2', 'scope3']
    const values = Object.values(emissions)
    const reducedEmissions = {}
    const unreducedEmissions = {}
    let totalReduced = 0
    let totalUnreduced = 0

    console.log(emissions, reduction, turnoverGrowth)

    for (let i = 0; i < scopes.length; i++) {
        const scope = scopes[i]
        const yearReduction = (year - 1) / (years - 1)
        let scopeEmissions;
        if(reduction[scope] === 0) {
            scopeEmissions = values[i] + values[i] * (turnoverGrowth / 100) * yearReduction
        } else {
            scopeEmissions = values[i] - values[i] * reduction[scope] * yearReduction
        }
        reducedEmissions[scope] = scopeEmissions
        totalReduced += scopeEmissions
    }

    for (let i = 0; i < scopes.length; i++) {
        const scope = scopes[i]
        const yearReduction = (year - 1) / (years - 1)
        const scopeEmissions = values[i] + values[i] * (turnoverGrowth / 100) * yearReduction
        reducedEmissions[scope] = scopeEmissions
        totalUnreduced += scopeEmissions
    }

    reducedEmissions["totalTon"] = totalReduced
    unreducedEmissions['TotalTon'] = totalUnreduced
    
    return { reducedEmissions, unreducedEmissions }
}

// Combine all the functions to calculate the new turnovers for the given input

export const calculateAnnualValues = (companyInfo, taxScope, taxInfo, emissionsInput, years) => {
    // Object companyInfo SHOULD contain: turnover, turnoverGrowth (0-100), taxToCustomer(0-100), elasticity[-2,0]
    // Object taxScope SHOULD contain: scope1 (boolean), scope2 (boolean), scope3 (boolean)
    // Object taxInfo SHOULD contain: euroPerTon, taxGrowth (0-100)
    // Object emissionsInput SHOULD contain: S1emissions, S2emissions, S3emissions, S1reductionTarget (0-100), S2reductionTarget(0-100), S3reductionTarget(0-100)
    const { turnover: baseTurnover, turnoverGrowth } = companyInfo
    const baseEmissions = {
        scope1: Number(emissionsInput.S1emissions),
        scope2: Number(emissionsInput.S2emissions),
        scope3: Number(emissionsInput.S3emissions),
    }
    const reductionInfo = {
        scope1: emissionsInput.S1reductionTarget / 100,
        scope2: emissionsInput.S2reductionTarget / 100,
        scope3: emissionsInput.S3reductionTarget / 100,
    }
    const mergedCalculations = {}
    let turnoverForecast

    for (let year = 1; year <= years; year++) {
        if (year === 1) {
            const taxEm = scopeEmissionsCalculator(baseEmissions, taxScope)
            const tax = taxInfo.euroPerTon
            const basePrice = 1
            const turnover = turnoverCalculator(baseTurnover, companyInfo, tax, taxEm, year, basePrice)
            mergedCalculations[year] = turnover
            turnoverForecast = turnoverTaxCalculator(turnover.newTurnover, turnoverGrowth, taxInfo, 5)
        } else {
            const reducedEmissions = reducedEmissionsCalculator(baseEmissions, reductionInfo, year, years, companyInfo.turnoverGrowth).reducedEmissions
            const unreducedEmissions = reducedEmissionsCalculator(baseEmissions, reductionInfo, year, years, companyInfo.turnoverGrowth).unreducedEmissions
            const taxEm = scopeEmissionsCalculator(reducedEmissions, taxScope, unreducedEmissions)
            const taxY = turnoverForecast[year].euroPerTon
            const turnForecY = turnoverForecast[year].newTurnover
            const basePrice = mergedCalculations[year - 1].newP
            const turnover = turnoverCalculator(turnForecY, companyInfo, taxY, taxEm, year, basePrice)
            mergedCalculations[year] = turnover
        }
    }
    
    return mergedCalculations
}