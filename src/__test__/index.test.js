const randomStrings = require('../index');

describe('probar funcionalidades de randomStrings', () => {
	test('Probar funcionalidad', () => {
		expect(typeof (randomStrings())).toBe('string');
	});
	test('comprobar que no existe una ciudad', () => {
		expect(randomStrings()).not.toMatch(/cordoba/);
	});
});