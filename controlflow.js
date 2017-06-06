var day = 'Monday'

switch (day)
{
	case 'Monday':
		console.log('Ravioli')
		break

	default:
	console.log('Diete')
}

const puts = console.log;

const arr = ['hello', 'world', '!']
var i = 0;
while (i < arr.length)
{
	console.log(arr[i])
	i++;
}

for (var i = 0; i < arr.length; i++)
{
	console.log(arr[i]);
}
for (var index in arr)
{
		console.log(arr[index]);
}
for (var item of arr) //equivalent du foreach mais attention change IN par OF
{
		console.log(item);
}
