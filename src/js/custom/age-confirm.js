$(document).ready(() => {
	const mainClass = `age-confirm`;
	const block = $(`.${mainClass}`);
	const page = $(".page");
	const isAgree = localStorage.getItem("agree");

	const buttonAgree = $(".age-confirm__button-confirm");
	const buttonDisAgree = $(".age-confirm__button-disconfirm");

	if (!isAgree) {
		block.addClass(`${mainClass}_open`);
		page.addClass("page_overflow");
	}

	buttonDisAgree.on("click", () => {
		page.empty();
	});

	buttonAgree.on("click", () => {
		block.removeClass(`${mainClass}_open`);
		page.removeClass("page_overflow");
		localStorage.setItem("agree", true);
	});
});
