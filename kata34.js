function nerdify(txt) {
  txt = txt.split("").map(el => el === "a" || el === "A"
    ? 4 : el === "e" || el === "E"
      ? 3 : el === "l"
        ? 1 : el)

  return txt.join("")
}

console.log(nerdify("Fundamentals"))

// with regexp
//
//   function nerdify(txt){
//     txt=txt.replace(/a|A/g,'4')
//     txt=txt.replace(/e|E/g,'3')
//     txt=txt.replace(/l/g,'1')
//     return txt
//   }