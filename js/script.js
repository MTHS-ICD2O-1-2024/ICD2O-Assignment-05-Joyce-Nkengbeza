"use strict"

function calculate() {
  // input
  let limit = parseInt(document.getElementById("limit").value)
  let number = 2
  let product = 1
  let steps = "1"
  let primeText = ""
  let commaNeeded = false

  while (number <= limit) {
    // Check if 'number' is prime:
    let count = 0
    let testNumber = 1

    while (testNumber <= number) {
      if (number % testNumber === 0) {
        count = count + 1
      }
      testNumber = testNumber + 1
    }

    if (count === 2) {
      // Multiply product by number using addition:
      let total = 0
      let counter = 0
      while (counter < product) {
        total = total + number
        counter = counter + 1
      }
      product = total

      // Prepare output strings
      steps = steps + " x " + number

      if (commaNeeded === true) {
        primeText = primeText + ", "
      }
      primeText = primeText + number
      commaNeeded = true
    }
    number = number + 1
  }

  // output
  if (primeText !== "") {
    document.getElementById("results").innerHTML =
      "Prime numbers: " +
      primeText +
      "<br>Steps: " +
      steps +
      "<br>Final product: " +
      product
  } else {
    document.getElementById("results").innerHTML =
      "There are no prime numbers in that range."
  }
}
