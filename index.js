// Code your solutions in this file
function writeCards(arr, event) {
    let message = []
    for (let i = 0; i < arr.length; i++) {
        message.push("Thank you, " + arr[i] + ", for the wonderful " + event + " gift!");
    }
    return message;
};

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
countDown(10);
countDown(4);