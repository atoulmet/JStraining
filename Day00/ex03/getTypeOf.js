function getTypeOf(value) {
	if (Array.isArray(value) === true) {
		console.log(`> getTypeOf(${value})
'array'`);
	return
	}
	switch (typeof(value)) {
		case 'number':
			console.log(`> getTypeOf(${value})
'number'`);
			break
		case 'string':
			console.log(`> getTypeOf(${value})
'string'`);
			break
		case 'object':
			console.log(`> getTypeOf(${value})
'object'`);
			break
		case 'function':
			console.log(`> getTypeOf(${value})
'function'`);
			break
		case 'array':
			console.log(`> getTypeOf(${value})
'array'`);
			break
	}
}
module.exports = getTypeOf;
