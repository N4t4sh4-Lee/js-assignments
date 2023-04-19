class HealerRobot {
    constructor(size, color2, hp2, img2) {
        this.size = size
        this.color2 = color2
        this.hp2 = hp2
        this.img2 = img2
    }
}

let healerRobots = []

function healCreate() {
    const sizeData = document.querySelector("#size").value
    const color2Data = document.querySelector("#color2").value
    const hp2Data = document.querySelector("#hp2").value
    const img2Data = document.querySelector("#img2").value
    console.log(sizeData, color2Data, hp2Data, img2Data)
    const healerRobot = new HealerRobot(sizeData, color2Data, hp2Data, img2Data)
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
                    <p id = "sizeJs">Your robot is ${element.size} big</p>
                    <p id = "color2Js">Your robot is ${element.color2}</p>
                    <p id = "hp2Js">Your robot still has ${element.hp2} hp left</p>
                </div>
            </div>
        `
    })
}

class DefenseRobot {
    constructor(shield, color1, hp1, img1) {
        this.shield = shield
        this.color1 = color1
        this.hp1 = hp1
        this.img1 = img1
    }
}

let defenseRobots = []

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

class AttackRobot {
    constructor(weapon, color, hp, img) {
        this.weapon = weapon
        this.color = color
        this.hp = hp
        this.img = img
    }
}

let attackRobots = []

function attackCreate() {
    const weaponData = document.querySelector("#weapon").value
    const colorData = document.querySelector("#color").value
    const hpData = document.querySelector("#hp").value
    const imgData = document.querySelector("#img").value
    console.log(weaponData, colorData, hpData, imgData)
    const attackRobot = new AttackRobot(weaponData, colorData, hpData, imgData)
    attackRobots.push(attackRobot)

    const stringAttack = JSON.stringify(attackRobots)
    localStorage.setItem('attackArray', stringAttack)
    const attackData = localStorage.getItem('attackArray')
    const convertAttack = JSON.parse(attackData)

    document.querySelector('.attackCreate1').innerHTML = ''

    attackRobots.forEach(function(element){
        console.log(convertAttack[0])
        document.querySelector('.attackCreate1').innerHTML += `
            <div class="flex2">
                <div>
                    <img id = "imgJs" src='${element.img}'>
                </div>
                <div>
                    <p id = "weaponJs">Your robot has a ${element.weapon} as a weapon</p>
                    <p id = "colorJs">Your robot is ${element.color}</p>
                    <p id = "hpJs">Your robot still has ${element.hp} hp left</p>    
                </div>
            </div>
        `
    })
}
