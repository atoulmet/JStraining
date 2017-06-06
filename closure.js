var createIdCreator = function (a)
{
	var id = a

	return function()
	{
		id++
		return id
	}
}

var createId = createIdCreator(10)
console.log(createId())
console.log(createId())
console.log(createId())
