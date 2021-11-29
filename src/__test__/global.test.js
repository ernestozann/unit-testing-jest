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

const reverseString2 = str => {
	return new Promise((resolve, reject) => {
		if (!str) {
			reject(Error('Error'))
		} else {
			resolve(str.split("").reverse().join(""))
		}
	});
};

test('Probar una promesa', () => {
	return reverseString2('hola')
		.then(string => {
			expect(string).toBe('aloh');
		});
});

test('probar async/await', async () => {
	const string = await reverseString2('hola');
	expect(string).toBe('aloh');
});

afterEach(() => console.log('Despues de cada prueba'));
afterAll(() => console.log('Despues de todas las pruebas'));

beforeEach(() => console.log('antes de cada prueba'));
beforeAll(() => console.log('antes de todas las pruebas'));