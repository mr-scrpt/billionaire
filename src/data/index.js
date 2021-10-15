const { readFileSync } = require("fs");

exports.data = {
	menu: JSON.parse(readFileSync("./src/data/menu.json", "utf8")),
	phone: JSON.parse(readFileSync("./src/data/phone.json", "utf8")),
	social: JSON.parse(readFileSync("./src/data/social.json", "utf8")),
	texts: JSON.parse(readFileSync("./src/data/texts.json", "utf8")),
	conditions: JSON.parse(readFileSync("./src/data/conditions.json", "utf8")),
	tours: JSON.parse(readFileSync("./src/data/tours.json", "utf8")),
	casino: JSON.parse(readFileSync("./src/data/casino.json", "utf8")),
	hotel: JSON.parse(readFileSync("./src/data/hotel.json", "utf8")),
	form: JSON.parse(readFileSync("./src/data/form.json", "utf8")),
	social: JSON.parse(readFileSync("./src/data/social.json", "utf8")),
};
