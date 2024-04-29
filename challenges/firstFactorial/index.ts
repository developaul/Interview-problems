function FirstFactorial(num: number) {
  let factorial = 1

  for (let i = num; i > 0; i--) {
    factorial *= i
  }

  return factorial
}

console.log(FirstFactorial(4))