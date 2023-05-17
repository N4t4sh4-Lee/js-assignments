class DefenseRobot {
    constructor(name2, shield, hp1, img1) {
        this.name = name2
        this.shield = shield
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
                    <p id = "nameJs">The name of your robot is ${element.name}</p>
                    <p id = "shieldJs">Your shield is made of ${element.shield}</p>
                    <p id = "hp1Js">Your robot still has ${element.hp1} hp left</p>
                </div>
            </div>
        `
    })    
}

function defenseCreate() {
    const nameData = document.querySelector("#name").value
    const shieldData = document.querySelector("#shield").value
    const hp1Data = document.querySelector("#hp1").value
    const img1Data = document.querySelector("#img1").value
    console.log(nameData, shieldData, hp1Data, img1Data)
    const defenseRobot = new DefenseRobot(nameData, shieldData, hp1Data, img1Data)
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
                    <p id = "nameJs">The name of your robot is ${element.name}</p>
                    <p id = "shieldJs">Your shield is made of ${element.shield}</p>
                    <p id = "hp1Js">Your robot still has ${element.hp1} hp left</p>
                </div>
            </div>
        `
    })
}

function deleteRobot() {
    const filteredDefenseRobots = defenseRobots.filter(function(element) {
        const filteredData = document.querySelector("#name1").value
        return element.name !== filteredData 
    })

    document.querySelector('.defenseCreate1').innerHTML = ``

    filteredDefenseRobots.forEach(function(element){
        console.log(convertDefense[0])

        document.querySelector('.defenseCreate1').innerHTML += `
            <div class="flex">
                <div>
                    <img id = "img1Js" src='${element.img1}'>
                </div>
                <div>
                    <p id = "nameJs">The name of your robot is ${element.name}</p>
                    <p id = "shieldJs">Your shield is made of ${element.shield}</p>
                    <p id = "hp1Js">Your robot still has ${element.hp1} hp left</p>
                </div>
            </div>
        `
    })

    defenseRobots = filteredDefenseRobots 

    const stringFilteredDefense = JSON.stringify(filteredDefenseRobots)
    localStorage.setItem('defenseArray', stringFilteredDefense)
}