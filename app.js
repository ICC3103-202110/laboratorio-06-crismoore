const {inputForm1, inputForm2, inputForm3, inputForm4, listForm1, listForm2} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const {input1} = await inputForm1(model)
        if (input1 === 'Y'){
            const {input2} = await inputForm2(model)
            const {input4} = await listForm1(model)
            const {input5} = await listForm2(model)
            const updatedModel = update(input1, input2, input4, input5, model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
        else{
            const {input3} = await inputForm3(model)
            const {input4} = await listForm1(model)
            const {input5} = await listForm2(model)
            const updatedModel = update(input1, input3, input4, input5, model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
        }
        }
    }
}

module.exports = {
    app
}