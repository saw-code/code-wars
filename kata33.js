// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
//
//   "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//
// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => {
  let splitString = s.split(" ")
  let newSentence = []

  return splitString.map((el, index) => el === splitString[index + 1]
    ? newSentence.push(el) : el)
    .filter(el => typeof(el) === "string")
    .join(" ")
}

// best practice:
// const removeConsecutiveDuplicates = s => s.split(" ")
//   .filter((x,i,arr) => x !== arr[i-1])
//   .join(" ");

