const javascript = require('./javascript')

test ('checkTable', () => {
	expect(javascript("a", "aaa.com")).toBe("false");
});
