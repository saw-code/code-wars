var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}

function aliasGen(first, last){
  let a = first[0]
  let b = last[0]
 
 if(a.match(/[A-Z]/) && b.match(/[A-Z]/)) {
   return firstName[a] + " " + surname[b]
 } else {
   return "Your name must start with a letter from A - Z."
 }
}

console.log(aliasGen("Alisa", "Boris"))