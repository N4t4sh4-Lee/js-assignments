class HealerRobot {
    constructor(name2, color2, hp2, img2) {
        this.name = name2
        this.color2 = color2
        this.hp2 = hp2
        this.img2 = img2
    }
}

let healerRobots = []

const healData = localStorage.getItem('healArray')
const convertHeal = JSON.parse(healData)

if (localStorage.getItem('healArray') == null) {
    healerRobots = []
} else {
    healerRobots = convertHeal
    healerRobots.forEach(function(element){
        console.log(convertHeal[0])
        document.querySelector('.healCreate1').innerHTML += `
            <div class="flex1">
                <div>
                    <img id = "img2Js" src='${element.img2}'>
                </div>
                <div>
                    <p id = "nameJs">Your robot is ${element.name}</p>
                    <p id = "color2Js">Your robot is ${element.color2}</p>
                    <p id = "hp2Js">Your robot still has ${element.hp2} hp left</p>
                </div>
            </div>
        `
    })
}

function healCreate() {
    const nameData = document.querySelector("#name").value
    const color2Data = document.querySelector("#color2").value
    const hp2Data = document.querySelector("#hp2").value
    const img2Data = document.querySelector("#img2").value
    console.log(nameData, color2Data, hp2Data, img2Data)
    const healerRobot = new HealerRobot(nameData, color2Data, hp2Data, img2Data)
    healerRobots.push(healerRobot)

    const stringHeal = JSON.stringify(healerRobots)
    localStorage.setItem('healArray', stringHeal)
    const healData = localStorage.getItem('healArray')
    const convertHeal = JSON.parse(healData)

    document.querySelector('.healCreate1').innerHTML = ''

    healerRobots.forEach(function(element){
        console.log(convertHeal[0])
        document.querySelector('.healCreate1').innerHTML += `
            <div class="flex1">
                <div>
                    <img id = "img2Js" src='${element.img2}'>
                </div>
                <div>
                    <p id = "nameJs">The name of your robot is ${element.name}</p>
                    <p id = "color2Js">Your robot is ${element.color2}</p>
                    <p id = "hp2Js">Your robot still has ${element.hp2} hp left</p>
                </div>
            </div>
        `
    })
}

function deleteRobot() {
    const filteredHealerRobots = healerRobots.filter(function(element) {
        const filteredData = document.querySelector("#name1").value
        return element.name !== filteredData 
    })

    document.querySelector('.healCreate1').innerHTML = ``

    filteredHealerRobots.forEach(function(element){
        console.log(convertHeal[0])

        document.querySelector('.healCreate1').innerHTML += `
            <div class="flex1">
                <div>
                    <img id = "img2Js" src='${element.img2}'>
                </div>
                <div>
                    <p id = "nameJs">The name of your robot is ${element.name}</p>
                    <p id = "color2Js">Your robot is ${element.color2}</p>
                    <p id = "hp2Js">Your robot still has ${element.hp2} hp left</p>
                </div>
            </div>
        `
    })  
    
    healerRobots = filteredHealerRobots

    const stringFilteredHeal = JSON.stringify(filteredHealerRobots)
    localStorage.setItem('healArray', stringFilteredHeal)
}