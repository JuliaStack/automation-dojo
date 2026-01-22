function isEvenNumber(num: number) {
    if (num % 2 === 0 && num > 0){
        console.log("Even"); 
    } 
    else if (num === 0){
        console.log("Zero");
    }
    else {
        console.log("Odd");
    }
}
isEvenNumber(23);

function greetings(daytime: string) {
    if (daytime < "12:00") {
        console.log("Good morning");
    } 
    else if (daytime >= "12:00" && daytime < "18:00") {
        console.log("Good afternoon");
    }
    else if (daytime > "24:00") {
        console.log("Invalid time");
    }
    else {
        console.log("Good evening");
    }
}
greetings("00:00");

function examineScore(score: number) {
    if (score >= 50) {
        console.log("Test passed");
    }
    else {
        console.log("Test failed");
    };
}
examineScore(50);

function voteAge(age: number) {
    if (age >= 18) {
        console.log("Eligible to vote");
    }
    else {
        console.log("Not eligible to vote");
    }
}
voteAge(18);

function numbersComparison(a: number, b: number) {
    if (a > b) {
        console.log("a is greater than b");
    }
    else if (a < b) {
        console.log("a is less than b");
    }
    else {
        console.log("a is equal to b");
    }
}
numbersComparison(10, 11);

function trafficLight(color: string){
    if (color === "green"){
        console.log("Go");
    }
    else if (color === "yellow"){
        console.log("Caution");
    }
    else if (color === "red"){
        console.log("Stop");
    }
    else {
        console.log("Invalid color");
    }
}
trafficLight("green");

function numberDefiner(num: number) {
    if (num > 0){
        console.log("The number is positive");
    }
    else if(num === 0){
        console.log("The number is zero");
    }
    else {
        console.log("The number is negative");
    }
}
numberDefiner(10);