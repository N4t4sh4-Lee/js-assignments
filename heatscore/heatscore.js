let gender = prompt(`Is your partner a girl or a boy?`)

if (gender === "boy") {
    let boyhairstyle = prompt(`What type of hairstyle does he have?(buzzcut/undercut/pomp/bowl cut/afro/bald)`)
    let boypersonality = prompt(`Which word describes his personality most accurately?(funny/socially adept/interesting)`)
    let boymoney = prompt(`What job does he have?(unemployed/entrepeneur/salary man/public servant/freelancer/educator/entertainment)`)
    
    let boyhairstylescore = 30
    
    if (boyhairstyle === "afro") {
        boyhairstylescore = 30
    } else if (boyhairstyle === "bowl cut") {
        boyhairstylescore = 50
    } else if (boyhairstyle === "pomp") {
        boyhairstylescore = 70 
    } else if (boyhairstyle === "buzzcut") {
        boyhairstylescore = 90
    } else if (boyhairstyle === "undercut") {
        boyhairstylescore = 100
    } else if (boyhairstyle === "bald") {
        boyhairstylescore = 0
    } else {
        boyhairstylescore = 0
    }
    
    let boypersonalityscore = 50
    
    if (boypersonality === "funny") {
        boypersonalityscore = 50
    } else if (boypersonality === "socially adept") {
        boypersonalityscore = 70
    } else if (boypersonality === "interesting") {
        boypersonalityscore = 100
    } else {
        boypersonalityscore = 0
    }
    
    let boymoneyscore = 0
    
    if (boymoney === "unemployed") {
        boymoneyscore = 0
    } else if (boymoney === "entrepeneur") {
        boymoneyscore = 20
    } else if (boymoney === "salary man") {
        boymoneyscore = 40
    } else if (boymoney === "educator") {
        boymoneyscore = 60
    } else if (boymoney === "entertainment") {
        boymoneyscore = 70 
    } else if (boymoney === "freelancer") {
        boymoneyscore = 80 
    } else if (boymoney === "public servant") {
        boymoneyscore = 100
    } else {
        boymoneyscore = 0
    }
    
    boyhairstylescore = parseInt(boyhairstylescore)
    boypersonalityscore = parseInt(boypersonalityscore)
    boymoneyscore = parseInt(boymoneyscore)
        
    document.write(`<p class = "fullheatscore"> Full heatscore: 300`)
    console.log(`His heatscore: ${boyhairstylescore} + ${boypersonalityscore} + ${boymoneyscore} = ${boyhairstylescore + boypersonalityscore + boymoneyscore}`)
    document.write(`<p class = "yourheatscore"> His heatscore: ${boyhairstylescore + boypersonalityscore + boymoneyscore}`)
    boyheatscore = boyhairstylescore + boypersonalityscore + boymoneyscore
    
    if (boyheatscore <= 100) {
        document.write(`<img src="https://media.tenor.com/OayBeL-KhswAAAAC/heart-pixel.gif" class = "heartbreak">`)
        document.write(`<p class = "block"> Advice: block him!`)
    } else if (boyheatscore > 100 && boyheatscore <= 230) {
        document.write(`<img src="https://i.pinimg.com/originals/bd/34/23/bd342367b384dc04c56e595288f3b31e.gif" class = "friendheart">`)
        document.write('<p class = "friendzone"> Advice: friendzone him!')
    } else if (boyheatscore > 230) {
        document.write(`<img src="https://bestanimations.com/media/hearts/1230084119pixel-heart-pink-animated-gif.gif" class = "heart">`)
        document.write(`<p class = "date"> Advice: date him!`) 
    } 

} else if (gender === "girl") {
    let girlhairstyle = prompt(`What type of hairstyle does she have?(bob/ponytail/fringe/straight hair/wavy hair/curly hair/bald)`)
    let girlbeauty = prompt(`On a scale of 1 ~ 10, how beautiful is she?`)
    let girlmoney = prompt(`What job does she have?(unemployed/entrepeneur/salary man/public servant/freelancer/educator/entertainment)`)

    let girlhairstylescore = 30

    if (girlhairstyle === "bob") {
        girlhairstylescore = 30
    } else if (girlhairstyle === "fringe") {
        girlhairstylescore = 50
    } else if (girlhairstyle === "curly hair") {
        girlhairstylescore = 60
    } else if (girlhairstyle === "ponytail") {
        girlhairstylescore = 70 
    } else if (girlhairstyle === "straight hair") {
        girlhairstylescore = 90
    } else if (girlhairstyle === "wavy hair") {
        girlhairstylescore = 100
    } else if (girlhairstyle === "bald") {
        girlhairstylescore = 0
    } else {
        girlhairstylescore = 0
    }

    let girlbeautyscore = 1

    if (girlbeauty === "1") {
        girlbeautyscore = 10
    } else if (girlbeauty === "2") {
        girlbeautyscore = 20
    } else if (girlbeauty === "3") {
        girlbeautyscore = 30
    } else if (girlbeauty === "4") {
        girlbeautyscore = 40
    } else if (girlbeauty === "5") {
        girlbeautyscore = 50
    } else if (girlbeauty === "6") {
        girlbeautyscore = 60
    } else if (girlbeauty === "7") {
        girlbeautyscore = 70
    } else if (girlbeauty === "8") {
        girlbeautyscore = 80
    } else if (girlbeauty === "9") {
        girlbeautyscore = 90
    } else if (girlbeauty === "10") {
        girlbeautyscore = 100
    } else {
        girlbeautyscore = 0
    }

    let girlmoneyscore = 0
    
    if (girlmoney === "unemployed") {
        girlmoneyscore = 0
    } else if (girlmoney === "entrepeneur") {
        girlmoneyscore = 20
    } else if (girlmoney === "salary man") {
        girlmoneyscore = 40
    } else if (girlmoney === "educator") {
        girlmoneyscore = 60
    } else if (girlmoney === "entertainment") {
        girlmoneyscore = 70 
    } else if (girlmoney === "freelancer") {
        girlmoneyscore = 80 
    } else if (girlmoney === "public servant") {
        girlmoneyscore = 100
    } else {
        girlmoneyscore = 0
    }

    girlhairstylescore = parseInt(girlhairstylescore)
    girlbeautyscore = parseInt(girlhairstylescore)
    girlmoneyscore = parseInt(girlmoneyscore)
        
    document.write(`<p class = "fullheatscore"> Full heatscore: 300`)
    console.log(`Her heatscore: ${girlhairstylescore} + ${girlbeautyscore} + ${girlmoneyscore} = ${girlhairstylescore + girlbeautyscore + girlmoneyscore}`)
    document.write(`<p class = "yourheatscore"> Her heatscore: ${girlhairstylescore + girlbeautyscore + girlmoneyscore}`)
    girlheatscore = girlhairstylescore + girlbeautyscore + girlmoneyscore

    if (girlheatscore <= 100) {
        document.write(`<img src="https://media.tenor.com/OayBeL-KhswAAAAC/heart-pixel.gif" class = "heartbreak">`)
        document.write(`<p class = "block"> Advice: block her!`)
    } else if (girlheatscore > 100 && girlheatscore <= 230) {
        document.write(`<img src="https://i.pinimg.com/originals/bd/34/23/bd342367b384dc04c56e595288f3b31e.gif" class = "friendheart">`)
        document.write('<p class = "friendzone"> Advice: friendzone her!')
    } else if (girlheatscore > 230) {
        document.write(`<img src="https://bestanimations.com/media/hearts/1230084119pixel-heart-pink-animated-gif.gif" class = "heart">`) 
        document.write(`<p class = "date"> Advice: date her!`)
    }  
    
} else {
    document.write(`<p class = "error">ERROR 404`)
}
