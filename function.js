var puts = console.log

var add = (a, b) => a + b;
puts(add(40, 2))
var hello = () => 'hello'
puts(hello())

var square = x =>
{
	console.log(`square(${x})`)
	return x*x //necessaire d'ajouter return quand il y a bloc
}
puts(square(3))

var person = name =>
({
	name: name,
	age: 42
}) //necessaire pour retourner un objet dans une fonction
puts(person('Marvin'))
