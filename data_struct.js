var arr = [1, 42, 13, 25]

console.log(arr)
console.log(typeof(arr))
console.log(Array.isArray(arr))
arr.push(77)
console.log(arr.length)
for (var index in arr)
{
	console.log(`${index} = ${arr[index]}`)
}
