export function isEvenNumber(num: number) {
  if (typeof num === "number") {
    if (num % 2 === 0 && num !== 0) {
      return "The number is even";
    } else if (num === 0) {
      return "The number is zero";
    } else {
      return "The number is odd";
    }
  } else {
    throw Error("Please provide a number");
  }
}
console.log(isEvenNumber(56));

// Additional examples of if...else conditions
export function greetings(daytime: string) {
  if (daytime < "12:00") {
    return "Good morning";
  } else if (daytime >= "12:00" && daytime < "18:00") {
    return "Good afternoon";
  } else if (daytime > "24:00") {
    return "Invalid time";
  } else {
    return "Good evening";
  }
}
console.log(greetings("00:00"));

// Example usages of if...else conditions
export function examineScore(score: number) {
  if (typeof score === "number" && score >= 0 && score <= 100) {
    if (score >= 50) {
      return "Test passed";
    } else {
      return "Test failed";
    }
  } else {
    throw Error("Please provide a valid score between 0 and 100");
  }
}
console.log(examineScore(50));

// More examples of if...else conditions
export function voteAge(age: number) {
  if (typeof age === "number" && age >= 0) {
    if (age >= 18) {
      return "Eligible to vote";
    } else {
      return "Not eligible to vote";
    }
  } else {
    throw Error("Please provide a valid age");
  }
}
console.log(voteAge(20));

// Additional examples of if...else conditions
export function numbersComparison(a: number, b: number) {
  //1 option to write
  if (typeof a === "number" && typeof b === "number") {
    if (a > b) {
      return "a is greater than b";
    } else if (a < b) {
      return "a is less than b";
    } else {
      return "a is equal to b";
    }
  } else {
    throw Error("Please provide numbers to compare");
  }

  /* 2 option to write - less code but harder to debug using breakpoints
    if (a === b)
        return 'a is equal to b';
        return a > b ? 'a is greater than b' : 'a is less than b';*/
}
console.log(numbersComparison(5, -6));

// More examples of if...else conditions
export function trafficLight(color: string) {
  if (color === "green") {
    return "Go";
  } else if (color === "yellow") {
    return "Caution";
  } else if (color === "red") {
    return "Stop";
  } else {
    return "Invalid color";
  }
}
console.log(trafficLight("green"));

export function numberDefiner(num: number) {
  if (typeof num === "number") {
    if (num > 0) {
      return "The number is positive";
    } else if (num === 0) {
      return "The number is zero";
    } else {
      return "The number is negative";
    }
  } else {
    throw Error("Please provide a number");
  }
}
console.log(numberDefiner(321));
