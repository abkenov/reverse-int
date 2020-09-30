module.exports = function reverse (n) {
    let temp = n.toString()
    let result = ""
    
    for (digit of temp) {
        result = digit + result
    }

    return parseInt(result)
}
