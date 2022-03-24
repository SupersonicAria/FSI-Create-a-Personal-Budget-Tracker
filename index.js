let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    let stringAnswer = window.prompt(weeklyExpenseQuestions[i])
    let weeklyAnswer = parseFloat(stringAnswer)
    weeklyExpenses = weeklyExpenses + weeklyAnswer
}

let n = 0
while(n < monthlyExpenseQuestions.length){
    let stringAnswer = window.prompt(monthlyExpenseQuestions[n])
    let monthlyAnswer = parseFloat(stringAnswer)
    monthlyExpenses = monthlyExpenses + monthlyAnswer
    n++
}

for(let i = annualExpenseQuestions.length-1; i >= 0; i--){
    let stringAnswer = window.prompt(annualExpenseQuestions[i])
    let annualAnswer = parseFloat(stringAnswer)
    annualExpenses = annualExpenses + annualAnswer
}