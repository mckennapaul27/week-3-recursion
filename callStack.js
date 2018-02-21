function sendReports () {
    console.log('sending report to A')
    buyCoffees()
    console.log('sending report to B')
    console.log('sending report to C')
}

function buyCoffees () {
    console.log('walking to coffee shop')
    sendUrgentReport()
    console.log('ordering coffees')
    console.log('walking back to office')
}

function sendUrgentReport () {
    console.log('sending urgent report')
}

console.log('come into office')
sendReports()
console.log('all done')