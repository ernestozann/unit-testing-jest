const text = 'hola mundo';
const fruits = ['manzana', 'melon', 'banana'];

test('Debe contener un texto', () => {
	expect(text).toMatch(/mundo/);
});

test('Tenemos una banana', () => {
	expect(fruits).toContain('banana');
});

test('mayor que', () => {
	expect(10).toBeGreaterThan(9);
});

test('Verdadero', () => {
	expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
	callback(str.split("").reverse().join(""))
}

test('probar un callback', () => {
	reverseString('hola', (str) => {
		expect(str).toBe('aloh');
	});
});