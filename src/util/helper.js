function printDate(){
    let today = new Date();
    let date = today.getDate();
    console.log(`Current Date is ${date}`)
}
function printMonth(){
    let today = new Date();
    let date = today.getMonth();
    console.log(`Current Month is ${date}`)
}

function getBatchInfo(){

    const batch = 'Plutonium'
    const daysAtFun = 'W3D5'
    console.log(`${batch}, ${daysAtFun}, The topic for today is Nodejs module system.`)
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo



