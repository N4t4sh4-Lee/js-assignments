class AttackRobot {
    constructor(name, weapon, hp, img) {
        this.weapon = weapon
        this.name = name
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
                    <p id = "nameJs">Your robot is ${element.name}</p>
                    <p id = "weaponJs">Your robot has a ${element.weapon} as a weapon</p>
                    <p id = "hpJs">Your robot still has ${element.hp} hp left</p>    
                </div>
            </div>
        `
    })
}

function attackCreate() {
    const nameData = document.querySelector("#name").value
    const weaponData = document.querySelector("#weapon").value
    const hpData = document.querySelector("#hp").value
    const imgData = document.querySelector("#img").value
    console.log(nameData, weaponData, hpData, imgData)
    const attackRobot = new AttackRobot(nameData, weaponData, hpData, imgData)
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
                    <p id = "nameJs">Your robot is ${element.name}</p>
                    <p id = "weaponJs">Your robot has a ${element.weapon} as a weapon</p>
                    <p id = "hpJs">Your robot still has ${element.hp} hp left</p>    
                </div>
            </div>
        `
    })
}

function deleteRobot() {
    const filteredAttackRobots = attackRobots.filter(function(element) {
        const filteredData = document.querySelector("#name1").value
        return element.name !== filteredData
    })
    
    document.querySelector('.attackCreate1').innerHTML = ``

    filteredAttackRobots.forEach(function(element){
        console.log(convertAttack[0])

        document.querySelector('.attackCreate1').innerHTML += `
        <div class="flex2">
            <div>
                <img id = "imgJs" src='${element.img}'>
            </div>
            <div>
                <p id = "nameJs">Your robot is ${element.name}</p>
                <p id = "weaponJs">Your robot has a ${element.weapon} as a weapon</p>
                <p id = "hpJs">Your robot still has ${element.hp} hp left</p>    
            </div>
        </div>
        `
    })   

    attackRobots = filteredAttackRobots 
    const stringFilteredAttack = JSON.stringify(filteredAttackRobots)
    localStorage.setItem('attackArray', stringFilteredAttack)
}