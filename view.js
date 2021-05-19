const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.yellowBright(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'roman'
            }
        )
    )
}

function getTable(model){
    const {bill_amount} = model
    const {tip_per} = model
    const {Tip} = model 
    const {Total} = model
    return [
        {'Bill Amount': bill_amount, 'Tip (%)': tip_per, 'Tip': Tip, 'Total': Total},
        ]
}

function inputForm1(model){
    const {input1} = model
    const message = 'Bill Amount?'  
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'input1',
            message: message,
            default: input1
        }
    ])
}


function inputForm2(model){
    const {input2} = model
    const message = 'Tip(%)?'   
    return inquirer.prompt([
        {
            name: 'input2',
            type: 'input2',
            message: message,
            default: input2
        }
    ])
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm1,
    inputForm2
}