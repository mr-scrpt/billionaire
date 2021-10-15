$(document).ready(() => {
	const mainClass = `menu-overflow`;

	const $menu = $(`.${mainClass}`);
	/* const $menuList = $(`.${mainClass}__list`); */
	const $menuControl = $(`.${mainClass}__control`);
	const $menuCloser = $(`.${mainClass}__closer`);
	const $menuItems = $(`.${mainClass}__item`);

	$menuControl.on("click", () => {
		toggleMenuStatu($menu, mainClass);
	});

	$menuCloser.on("click", () => {
		closeMenu($menu, mainClass);
	});

	$menuItems.on("click", () => {
		closeMenu($menu, mainClass);
	});
});

const openMenu = ($menu, mainClass) => {
	$menu.removeClass(`${mainClass}_close`);
	$menu.addClass(`${mainClass}_open`);
};
const closeMenu = ($menu, mainClass) => {
	$menu.removeClass(`${mainClass}_open`);
	$menu.addClass(`${mainClass}_close`);
};

const toggleMenuStatu = ($menu, mainClass) => {
	const status = checkMenu($menu, mainClass);
	status === "open"
		? closeMenu($menu, mainClass)
		: openMenu($menu, mainClass);
};

const checkMenu = ($menu, mainClass) => {
	if ($menu.hasClass(`${mainClass}_open`)) {
		return "open";
	}
	return "close";
};
