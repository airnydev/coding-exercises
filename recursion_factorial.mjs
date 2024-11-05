// write a recursive factorial function for n!
// assume n will be non-negative integer
function factorial (n) {
  if (n <= 1) {
    return 1
  }
  return n * factorial(n - 1)
}

export { factorial }