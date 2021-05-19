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
        const {input2} = await inputForm2(model)
        const {input3} = await listForm1(model)
        const {input4} = await listForm2(model)
        const updatedModel = update(input1, input2, input3, input4, model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}