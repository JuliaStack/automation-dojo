//1 - check if the input is an array
export function isArray(array: any[]): boolean {
  return Array.isArray(array);
}
console.log(isArray([1, 2, 3]));
console.log(isArray("apple", "banana", "cherry"));

//2 - clone an array
export function cloneArray(array: any[]): any[] {
  return array.slice();
}
console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1, 2, [4, 0]]));

//3 - get the first element of an array
export function getFirstElement(array: any[]): any {
  if (array.length > 0) {
    return array[0];
  } else {
    return "Array is empty";
  }
}
console.log(getFirstElement([99, 2, 3]));
console.log(getFirstElement([]));

//4 - get the last element of an array
export function getLastElement(array: any[]): any {
  if (array.length > 0) {
    return array[array.length - 1];
  } else {
    return "Array is empty";
  }
}
console.log(getLastElement([1, 2, 88]));
console.log(getLastElement([]));

//5 - array to string conversion
export function arrayToString(array: any[]): string {
  return array.toString();
}
console.log(arrayToString([1, 2, 3, 4]));
console.log(arrayToString(["red", "green", "white", "black"]));

// 6 - hyphen between even numbers in array
export function hyphenBetweenEvenNumbers(input: string): string {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    result += input[i];
    if (
      i < input.length - 1 &&
      parseInt(input[i]) % 2 === 0 &&
      parseInt(input[i + 1]) % 2 === 0
    ) {
      result += "-";
    }
  }
  return result;
}
console.log(hyphenBetweenEvenNumbers("025468"));
console.log(hyphenBetweenEvenNumbers("123456"));

//array sorting in ascending order
export function sortArrayAsc(array: number[]): number[] {
  return array.sort((a, b) => a - b);
}
console.log(sortArrayAsc([34, 12, 5, 66, 1]));
console.log(sortArrayAsc([3, -2, 0, 8, 7, -5, 909, 3.14]));

//concat two arrays
export function concatArrays(array1: any[], array2: any[]): any[] {
  return array1.concat(array2);
}
console.log(concatArrays([1, 9], [8, 4]));
console.log(concatArrays(["x", "y"], ["z"]));

//array of numbers from 1 to 345
export function arrayOfNumbersAsc(): number[] {
  const numbers = [];
  for (let i = 1; i <= 345; i++) {
    numbers.push(i);
  }
  return numbers;
}
console.log(arrayOfNumbersAsc());

//array of numbers from 241 to 1
export function arrayOfNumbersDesc(): number[] {
  const numbers = [];
  for (let i = 241; i >= 1; i--) {
    numbers.push(i);
  }
  return numbers;
}
console.log(arrayOfNumbersDesc());

//sum of numbers from 1 to 100 in array
export function sumFrom1To100(): number {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumFrom1To100());
