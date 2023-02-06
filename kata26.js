function largest(n, array) {
  if (n !== 0) {
    return array.sort((a, b) => {
      return a - b
    }).slice(-n)
  }
  return []
}

console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))