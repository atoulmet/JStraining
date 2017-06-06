var a = 'Hello'
var b = 'John'
var c = true

var sayHello = function (b)
{
	var c = 'World' //Ici variables sont redefinies uniquement dans le scope de la fonction anonyme

	console.log(a)
	console.log(b)
	console.log(c)
}

sayHello('Bob')
console.log('\n')

console.log(a)
console.log(b)
console.log(c)
