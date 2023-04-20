class DefenseRobot {
    constructor(shield, color1, hp1, img1) {
        this.shield = shield
        this.color1 = color1
        this.hp1 = hp1
        this.img1 = img1
    }
}

let defenseRobots = []

const defenseData = localStorage.getItem('defenseArray')
const convertDefense = JSON.parse(defenseData)

if (localStorage.getItem('defenseArray') == null) {
    defenseRobots = []
} else {
    defenseRobots = convertDefense
    defenseRobots.forEach(function(element){
        console.log(convertDefense[0])
        document.querySelector('.defenseCreate1').innerHTML += `
            <div class="flex">
                <div>
                    <img id = "img1Js" src='${element.img1}'>
                </div>
                <div>
                    <p id = "shieldJs">Your shield is made of ${element.shield}</p>
                    <p id = "color1Js">Your robot is ${element.color1}</p>
                    <p id = "hp1Js">Your robot still has ${element.hp1} hp left</p>
                </div>
            </div>
        `
    })    
}

function defenseCreate() {
    const shieldData = document.querySelector("#shield").value
    const color1Data = document.querySelector("#color1").value
    const hp1Data = document.querySelector("#hp1").value
    const img1Data = document.querySelector("#img1").value
    console.log(shieldData, color1Data, hp1Data, img1Data)
    const defenseRobot = new DefenseRobot(shieldData, color1Data, hp1Data, img1Data)
    defenseRobots.push(defenseRobot)

    const stringDefense = JSON.stringify(defenseRobots)
    localStorage.setItem('defenseArray', stringDefense)
    const defenseData = localStorage.getItem('defenseArray')
    const convertDefense = JSON.parse(defenseData)

    document.querySelector('.defenseCreate1').innerHTML = ''

    defenseRobots.forEach(function(element){
        console.log(convertDefense[0])
        document.querySelector('.defenseCreate1').innerHTML += `
            <div class="flex">
                <div>
                    <img id = "img1Js" src='${element.img1}'>
                </div>
                <div>
                    <p id = "shieldJs">Your shield is made of ${element.shield}</p>
                    <p id = "color1Js">Your robot is ${element.color1}</p>
                    <p id = "hp1Js">Your robot still has ${element.hp1} hp left</p>
                </div>
            </div>
        `
    })
}