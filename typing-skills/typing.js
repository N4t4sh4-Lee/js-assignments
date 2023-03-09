const twoDArray = [
    [95, 95, 96, 96, 97, 96, 95, 96, 96, 97, 97, 98, 97],
    [66, 62, 65, 63, 72, 71, 68, 69, 72, 78, 72, 81, 73]
]

twoDArray[0].forEach(function(element){
    document.querySelector("#accuracyScore").innerHTML += `<div>${element}</div>`
})

twoDArray[1].forEach(function(element){
    document.querySelector("#wpmScore").innerHTML += `<div>${element}</div>`
})

let avg = 0
let sum = 0

twoDArray[0].forEach(function(element){
    sum = sum + element
    avg = (sum)/twoDArray[0].length
    document.querySelector("#averageAccuracy").innerHTML = `Average accuracy score: ${Math.round(avg)}`
})

let avg1 = 0
let sum1 = 0

twoDArray[1].forEach(function(element){
    sum1 = sum1 + element
    avg1 = (sum1)/twoDArray[1].length
    document.querySelector("#averageWpm").innerHTML = `Average WPM score: ${Math.round(avg1)}`
})

let highestNum = 0

twoDArray[0].forEach(function(element) {
    if (highestNum < element) {
        highestNum = element
        document.querySelector("#mostAccurate").innerHTML = `Most Accurate score: ${highestNum}`
    } else {
        highestNum = highestNum
    }
})

let highestNum1 = 0

twoDArray[1].forEach(function(element) {
    if (highestNum1 < element) {
        highestNum1 = element
        document.querySelector("#fastestWpm").innerHTML = `Fastest WPM score: ${highestNum1}`
    } else {
        highestNum1 = highestNum1
    }
})

let lastIndex = twoDArray[0].length - 1

document.querySelector("#latestAccuracy").innerHTML = `Latest Accuracy score: ${twoDArray[0][lastIndex]}`

let lastIndex1 = twoDArray[1].length - 1

document.querySelector("#latestWpm").innerHTML = `Latest WPM score: ${twoDArray[1][lastIndex1]}`
