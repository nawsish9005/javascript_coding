let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
document.write(grade); // Output: B



let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
document.write(status); // Output: Adult



function checkEvenOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

document.write(checkEvenOdd(4)); // Output: Even
document.write(checkEvenOdd(7)); // Output: Odd
