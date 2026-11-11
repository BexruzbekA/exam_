function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumToN(10));

function inRange(num, min, max) {
  return num >= min && num <= max;
}
console.log(inRange(5, 1, 10));

function squareEndsWithNumber(n) {
  return String(n * n).endsWith(String(n));
}
console.log(squareEndsWithNumber(5));
console.log(squareEndsWithNumber(6));

function addIndex(arr) {
  return arr.map((num, index) => num + index);
}
console.log(addIndex([5, 10, 15, 20]));

function removeDrinks(arr) {
  return arr.filter((item) => item !== "cola" && item !== "fanta");
}
console.log(removeDrinks(["cola", "suv", "fanta", "choy"]));

function countDigits(n) {
  return String(Math.abs(n)).length;
}
console.log(countDigits(12345));
console.log(countDigits(0));

function biggestNumber(n) {
  let result = String(n)
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");

  return Number(result);
}
console.log(biggestNumber(4215));
console.log(biggestNumber(123));

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber(1, 10));

function isNarcissistic(n) {
  let digits = String(n).split("");
  let power = digits.length;

  let sum = digits.reduce((total, digit) => {
    return total + Number(digit) ** power;
  }, 0);

  return sum === n;
}
console.log(isNarcissistic(153));
console.log(isNarcissistic(123));

function countUppercase(text) {
  let count = 0;

  for (let letter of text) {
    if (letter >= "A" && letter <= "Z") {
      count++;
    }
  }

  return count;
}
console.log(countUppercase("Salom DUNYO"));
