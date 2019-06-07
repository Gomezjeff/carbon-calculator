// Marks for pageOne elasticity.

export const elasticityMarks = {
    // Antd is very iffy about label positioning, so I had to hack the marks a little.
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

// OptionsPanel styles

export const panelStyle = {
    background: 'rgba(255, 255, 255, 0.64)',
    border: '0'
}

export const collapseStyle = {
    background: 'rgba(255, 255, 255, 0.64)',
    border: '0',
    fontSize: '130%',
    textAlign: 'center',
    margin: '10px 0',
    borderRadius: '0'
}

export const formStyle = {
    width: '90%',
    margin: 'auto',
}

export const emissionStyle = {
    width: '60%',
    margin: '5%'
}

export const rtStyle = {
    width: '30%',
}

export const calcEmissionsButtonStyle = {
    width: '100%',
    height: '60px',
    marginTop: '1%',
    bottom: '2%',
}