// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

// This function checks if a number is prime
function isPrime(number) {
  let count = 0
  let loopCounter = 1

  while (loopCounter <= number) {
    if (number % loopCounter === 0) {
      count = count + 1
    }
    loopCounter = loopCounter + 1
  }

  if (count === 2) {
    return true
  } else {
    return false
  }
}

// This function multiplies two numbers using addition
function multiplyByAdding(a, b) {
  let total = 0
  let counter = 0

  while (counter < b) {
    total = total + a
    counter = counter + 1
  }

  return total
}

// This function finds prime numbers and multiplies them
function calculate() {
  // input
  const limit = parseInt(document.getElementById("limit").value)
  let number = 2
  let product = 1
  let steps = "1"
  let primeList = ""

  // process
  while (number <= limit) {
    if (isPrime(number) === true) {
      product = multiplyByAdding(product, number)
      steps = steps + " × " + number
      primeList = primeList + number + ", "
    }
    number = number + 1
  }

  // output
  if (primeList !== "") {
    document.getElementById("results").innerHTML =
      "Prime numbers: " + primeList.slice(0, -2) +
      "<br>Steps: " + steps +
      "<br>Final product: " + product
  } else {
    document.getElementById("results").innerHTML =
      "There are no prime numbers in that range."
  }
}