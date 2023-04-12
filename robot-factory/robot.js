class HealerRobot {
    constructor(size, color2, hp2, img2) {
        this.size = size
        this.color2 = color2
        this.hp2 = hp2
        this.img2 = img2
    }

    size() {
        document.write(``)
    }

    color2() {
        document.write(``)
    }

    hp2() {
        document.write(``)
    }

    img2() {
        document.write(`${this.img2}`)
    }
}

let healerRobots = []

function healCreate() {
    const sizeData = document.querySelector("#size").value
    const color2Data = document.querySelector("#color2").value
    const hp2Data = document.querySelector("#hp2").value
    const img2Data = document.querySelector("#img2").value
    console.log(sizeData, color2Data, hp2Data, img2Data)
    const healerRobot = {
        size: sizeData, 
        color2: color2Data, 
        hp2: hp2Data, 
        img2: img2Data
    }
    healerRobots.push(healerRobot)
}

class DefenseRobot {
    constructor(shield, color1, hp1, img1) {
        this.shield = shield
        this.color1 = color1
        this.hp1 = hp1
        this.img1 = img1
    }

    shield() {
        document.write(``)
    }

    color1() {
        document.write(``)
    }

    hp1() {
        document.write(``)
    }

    img1() {
        document.write(`${this.img1}`)
    }
}

let defenseRobots = []

function defenseCreate() {
    const shieldData = document.querySelector("#shield").value
    const color1Data = document.querySelector("#color1").value
    const hp1Data = document.querySelector("#hp1").value
    const img1Data = document.querySelector("#img1").value
    console.log(shieldData, color1Data, hp1Data, img1Data)
    const defenseRobot = {
        shield: shieldData, 
        color1: color1Data, 
        hp1: hp1Data, 
        img1: img1Data
    }
    defenseRobots.push(defenseRobot)
}

class AttackRobot {
    constructor(weapon, color, hp, img) {
        this.weapon = weapon
        this.color = color
        this.hp = hp
        this.img = img
    }

    weapon() {
        document.write(``)
    }

    color() {
        document.write(``)
    }

    hp() {
        document.write(``)
    }

    img() {
        document.write(`${this.img}`)
    }
}

let attackRobots = []

function attackCreate() {
    const weaponData = document.querySelector("#weapon").value
    const colorData = document.querySelector("#color").value
    const hpData = document.querySelector("#hp").value
    const imgData = document.querySelector("#img").value
    console.log(weaponData, colorData, hpData, imgData)
    const attackRobot = {
        weapon: weaponData, 
        color: colorData, 
        hp: hpData, 
        img: imgData
    }
    attackRobots.push(attackRobot)
}