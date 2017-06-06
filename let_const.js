const name = 'John'

//Si je fais name = 'Bill' renvoie erreur
//Mais tableau ok

const arr = []
console.log(arr)

arr.push(42)
console.log(arr)
console.log("~ ~ ~ ~ ~ ~ ~")
puts = console.log

var a = 13

for (var a = 0; a < 4; a++)
{
	console.log(a)
}

console.log(a) //ici le scope est elargi, alors que si j'utilise let le scope est limite a structure de controle
console.log("~ ~ ~ ~ ~ ~ ~")
let b = 13
for (let b = 0; b < 4; b++)
{
	console.log(b)
}
console.log(b)
