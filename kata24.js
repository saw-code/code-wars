function createArray(number){
  let newArray = [];

  for(let counter = 1; counter <= number; counter += 1){
    newArray.push(counter);
  }

  return newArray;
}

console.log(createArray(5))
