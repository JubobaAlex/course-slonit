
let low = 1;
let high = 100;
let guess;

const num = Math.floor(Math.random() * high) + low
console.log(`Компьютер 1 загадал число:${num}.\n` )
while(true) {
    guess = Math.floor((high + low) /2 )
    console.log(`Компьютер 2: Пробую число ${guess}.`)

    if(guess > num) {
        console.log("Компьютер 1: Меньше.")
        high = guess - 1;
    } else if(guess < num) {
        console.log("Компьютер 1: Больше.")
        low = guess + 1;
    } else if(guess === num) {
        console.log("Компьютер 1: Угадал!")
        break;
    }
}

