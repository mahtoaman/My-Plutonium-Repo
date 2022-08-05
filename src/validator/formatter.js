function trimStr(){
    let str = '               Hello        World                '

    const result = str.trim()
    console.log(result)
}

function upCase(){
    let str = "aman KumAr"

    const result = str.toUpperCase()
    console.log(result)
}

function lwCase(){
    let str = 'Aman KUMAR'
    const result = str.toLowerCase()
    console.log(result)
}

module.exports.trimStr = trimStr
module.exports.upCase = upCase
module.exports.lwCase = lwCase

