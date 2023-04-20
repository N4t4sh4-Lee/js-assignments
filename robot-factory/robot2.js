class AttackRobot {
    constructor(weapon, color, hp, img) {
        this.weapon = weapon
        this.color = color
        this.hp = hp
        this.img = img
    }
}

let attackRobots = []

const attackData = localStorage.getItem('attackArray')
const convertAttack = JSON.parse(attackData)

if (localStorage.getItem('attackArray') == null) {
    attackRobots = []
} else {
    attackRobots = convertAttack

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