let hairstyle = prompt(`What type of hairstyle does he have?(buzzcut/undercut/pomp/bowl cut/afro)`)
let personality = prompt(`Which word describes his personality most accurately?(funny/socially adept/interesting)`)
let money = prompt(`What job does he have?(unemployed/entrepeneur/salary man/public servant/freelancer/educator/entertainment)`)

let hairstylescore = 30

if (hairstyle === "afro") {
    hairstylescore = 30
} else if (hairstyle === "bowl cut") {
    hairstylescore = 50
} else if (hairstyle === "pomp") {
    hairstylescore = 70 
} else if (hairstyle === "buzzcut") {
    hairstylescore = 90
} else if (hairstyle === "undercut") {
    hairstylescore = 100
} else {
    hairstylescore = 0
}

let personalityscore = 50

if (personality === "funny") {
    personalityscore = 50
} else if (personality === "socially adept") {
    personalityscore = 70
} else if (personality === "interesting") {
    personalityscore = 100
} else {
    personalityscore = 0
}

let moneyscore = 0

if (money === "unemployed") {
    moneyscore = 0
} else if (money === "entrepeneur") {
    moneyscore = 20
} else if (money === "salary man") {
    moneyscore = 40
} else if (money === "educator") {
    moneyscore = 60
} else if (money === "entertainment") {
    moneyscore = 70 
} else if (money === "freelancer") {
    moneyscore = 80 
} else if (money === "public servant") {
    moneyscore = 100
} else {
    moneyscore = 0
}

hairstylescore = parseInt(hairstylescore)
personalityscore = parseInt(personalityscore)
moneyscore = parseInt(moneyscore)

document.write(`<img src="https://bestanimations.com/media/hearts/1230084119pixel-heart-pink-animated-gif.gif" class = "heart">`)

document.write(`<p class = "fullheatscore"> Full heatscore: 300`)
console.log(`Your heatscore: ${hairstylescore} + ${personalityscore} + ${moneyscore} = ${hairstylescore + personalityscore + moneyscore}`)
document.write(`<p class = "yourheatscore"> Your heatscore: ${hairstylescore + personalityscore + moneyscore}`)
heatscore = hairstylescore + personalityscore + moneyscore

if (heatscore <= 100) {
    document.write(`<p class = "block"> Advice: block him!`)
} else if (heatscore > 100 && heatscore <= 230) {
    document.write('<p class = "friendzone"> Advice: friendzone him!')
} else if (heatscore > 230) {
    document.write(`<p class = "date"> Advice: date him!`) 
}