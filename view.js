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
    const {left_value} = model
    const {left_unit} = model
    const {right_value} = model 
    const {right_unit} = model
    return [
        {'leftValue': left_value, 'leftUnit': left_unit, 'rightValue': right_value, 'rightUnit': right_unit}
        ]
}

function inputForm1(model){
    const {input1} = model
    const message = 'Left temperature is source?'  
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
    const message = 'Temperature value to convert?'   
    return inquirer.prompt([
        {
            name: 'input2',
            type: 'input2',
            message: message,
            default: input2
        }
    ])
}

function inputForm3(model){
    const {input3} = model
    const message = 'Temperature value to convert?'   
    return inquirer.prompt([
        {
            name: 'input3',
            type: 'input3',
            message: message,
            default: input3
        }
    ])
}


function inputForm4(model){
    const {input4} = model
    const message = 'From?'
    return inquirer.prompt([
        {
            name: 'input4',
            type: 'input4',
            message: message,
            default: input4
        }
    ])
}

function inputForm5(model){
    const {input5} = model
    const message = 'To?'
    return inquirer.prompt([
        {
            name: 'input5',
            type: 'input5',
            message: message,
            default: input5
        }
    ])
}

function listForm1(model){
    const {input4} = model
    const message = 'From?'
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    return inquirer.prompt({
        name: 'input4',
        type: 'list',
        message: message, 
        default: input4,
        choices: choices
    })
}

function listForm2(model){
    const {input5} = model
    const message = 'To?'
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    return inquirer.prompt({
        name: 'input5',
        type: 'list',
        message: message, 
        default: input5,
        choices: choices
    })
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
    inputForm2,
    inputForm3,
    inputForm4,
    inputForm5,
    listForm1,
    listForm2
}