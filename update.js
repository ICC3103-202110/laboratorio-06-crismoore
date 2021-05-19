function TOTAL(amount,Tip){
    total = amount+Tip
    total = total.toFixed(2)
    return Number(total)
}

function TIP(amount, tip_per){
    Tip=(amount*tip_per)/100
    Tip = Tip.toFixed(2)
    return Number(Tip)
}

function update(input1, input2, model){
    const {bill_amount} = model
    const {tip_per} = model
    const {Tip} = model
    const {Total} = model
    const newbill = Number(input1)
    const newtipper = Number(input2)
    const newTip = TIP(newbill, newtipper)
    const newtotal = TOTAL(newbill, newTip)
    return {
        ...model,
        bill_amount: '$'+newbill,
        tip_per: newtipper+'%',
        Tip: '$'+newTip,
        Total: '$'+newtotal,
        input1: input1,
        input2: input2
    }
}

module.exports = {
    update
}