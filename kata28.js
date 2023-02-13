function solve(s){
  let upper = 0, lower = 0, number = 0, special = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 'A' && s[i] <= 'Z')
      upper++;
    else if (s[i] >= 'a' && s[i] <= 'z')
      lower++;
    else if (s[i]>= '0' && s[i]<= '9')
      number++;
    else
      special++;
  }

  return [upper, lower, number, special]
}

// best practice

// const solve = x => {
//   let u = x.match(/[A-Z]/g)||[]
//   let d = x.match(/[a-z]/g)||[]
//   let n = x.match(/[0-9]/g)||[]
//   let s = x.match(/[^A-Z0-9]/gi)||[]
//   return [u.length, d.length, n.length, s.length]
// }