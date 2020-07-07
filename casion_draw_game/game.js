console.log("Welcome! Buy in is $500!")
console.log("")
console.log("Draw a card, depending on what it is, you will either win or lose money")
console.log("")
console.log("Here are the rules!")
console.log("-You get 5 turns per game!")
console.log("-If it's higher than 8, you win $500!")
console.log("-If it's higher than 10, you win $1000!")
console.log("-If you get 14 of Diamonds, you win $2000!")
console.log("-If it's lower than 8, you lose $500!")
console.log("-Aces count as 1")
console.log("")
const menu = prompt("Press enter to draw!");

wallet = 500

class Cards {
    constructor () {
        this.suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
        this.value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        // this.money = 500
    }
    randomGenerator() {
        let value = this.value[Math.floor(Math.random()*this.value.length)];
        let suit = this.suits[Math.floor(Math.random()*this.suits.length)];
        let thecard = `${value} of ${suit}`
        if (value <= 5) { 
            wallet -= 500;
           const turn = prompt(`${thecard} Sucks to suck! You have $${wallet}`);

        }else if (value <= 10) {
            wallet += 500
           const turn = prompt(`${thecard} Nice one! You now have $${wallet}`)

        }else if (value <= 13) {
            wallet += 1000;
            const turn = prompt(`${thecard} Draw again! You have $${wallet}`);

        }else if (value = 14) {
            wallet += 2000;
            const turn = prompt(`${thecard} Draw again! You have $${wallet}`);
        }
        return (`$${wallet}`)
    }
}

function total(finaltotal) {
    let wallettotal = finaltotal 
    if (wallettotal <= 0) {
        console.log("You'er broke as joke! Better luck next time!")
    }else if (wallettotal > 500) {
        console.log("Nice game! Come back again so we can win our money back!")        
    }else if (wallettotal = 500){
        "You broke even! No harm no foul!" 
    }
    return wallettotal
}

function difference(dif) {
    let thedif = dif
    // let sub = 500 
    if (thedif > 500) {
        console.log(`Way to go! You won $${dif}`)
        thedif-=500;
        console.log(`That's $${thedif} more from your buy in!`)
    }else if (thedif = 500){
        "You broke even! No harm no foul!" 
    }
    // return thedif
}



let thecard = new Cards();
// for (let i = 0; i < 5; i++) {
while (true) {
    thecard.randomGenerator();
    let continue1 = prompt("Keep going?")
    if (continue1 === "No" || wallet == 0){

        break;
    
    }
}
// thecard.randomGenerator();
// thecard.randomGenerator();
// thecard.randomGenerator();
// thecard.randomGenerator();
// thecard.randomGenerator();
total(wallet)
difference(wallet)