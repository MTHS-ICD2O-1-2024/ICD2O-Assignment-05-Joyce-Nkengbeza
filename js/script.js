// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict"

function isPrime(num) {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

// Multiply using addition
function multiplyByAddition(a, b) {
  let result = 0
  for (let i = 0; i < b; i++) {
    result += a
  }
  return result
}

function calculate() {
  const limit = parseInt(document.getElementById("limit").value)
  let primes = []
  let product = 1
  let showSteps = "1"

  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i)
      product = multiplyByAddition(product, i)
      showSteps += " × " + i
    }
  }

  if (primes.length > 0) {
    document.getElementById("results").innerHTML =
      "Prime numbers: " +
      primes.join(", ") +
      "<br>Multiplication: " +
      showSteps +
      "<br>Final product using repeated addition is: <strong>" +
      product +
      "</strong>"
  } else {
    document.getElementById("results").innerHTML =
      "There are no prime numbers in that range."
  }
}
