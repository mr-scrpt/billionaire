$(document).ready(() => {
	/* Настройки */
	const mainClass = `block-s`;
	/* Настройки КОНЕЦ*/

	const $menuCollection = $(`.${mainClass}`);
	false &&
		$menuCollection.each((idx, item) => {
			const $menu = $(item);
			let mobileSize = $(item).attr("data-adaptive-width");
			let menuMode = $(item).attr("data-mode-menu");
			const $inner = $menu.children(`.${mainClass}__inner`);
			const $body = $inner.children(`.${mainClass}__body`);
			const $controller = $menu.find(`.${mainClass}__controller`);
			clearClassAndStyle($menu, $body, mainClass, mobileSize);
			controllMenu($controller, mainClass, mobileSize, menuMode);
			closeOutsideMenu($body, mainClass);
			/*  */ /*  */ /*  */
			/*  */ /*  */ /*  */
			adaptiveMode(mobileSize, $body, $controller, mainClass);
			/*  */ /*  */ /*  */
			/*  */ /*  */ /*  */
			offsetBody($inner, $body, mobileSize, menuMode);

			checkMode(menuMode, $body);

			$(window).resize(() => {
				mobileSize = $(item).attr("data-adaptive-width");
				clearClassAndStyle($menu, $body, mainClass, mobileSize);
				/*  */ /*  */ /*  */
				/*  */ /*  */ /*  */
				adaptiveMode(mobileSize, $body, $controller, mainClass);
				/*  */ /*  */ /*  */
				/*  */ /*  */ /*  */
				offsetBody($inner, $body, mobileSize, menuMode);
				controllMenu($controller, mainClass, mobileSize, menuMode);
			});
		});
});

const checkMode = (menuMode, $body) => {
	console.log("-> ", menuMode);
	if (menuMode !== "fullScreen" && !$body) {
		return false;
	}

	$($body).prependTo($("body"));
};

const checkMobileMode = (mobileSize) => {
	let width = getSize();
	if (width < mobileSize) {
		return true;
	}
	return false;
};

const offsetBody = ($inner, $body, mobileSize, menuMode) => {
	const mode = checkMobileMode(mobileSize);
	let width = getSize();
	if (mode && menuMode !== "fullScreen") {
		const height = $inner.outerHeight();
		$body.css({ top: height });
	} else {
		$body.css({ top: "auto" });
	}
};

/*  */
/*  */
const adaptiveMode = (mobileSize, $body, $controller, mainClass) => {
	const mode = checkMobileMode(mobileSize);

	const adaptiveBodyClass = `${mainClass}__body_desc`;
	const adaptiveControllerClass = `${mainClass}__controller_mobile`;

	if (!mode) {
		$body.addClass(adaptiveBodyClass);
		$controller.removeClass(adaptiveControllerClass);
		/* $body.css({ position: "relative", transform: "translateX(0)" }); */
	} else {
		$body.removeClass(adaptiveBodyClass);
		$controller.addClass(adaptiveControllerClass);

		/* 	$body.removeAttr("style"); */
	}
};
/*  */
/*  */

const controllMenu = ($controller, mainClass, mobileSize, menuMode) => {
	$controller.on("click", (e) => {
		e.stopPropagation();
		const $currentBody = $(`.block-s__body`);
		const $currentMenu = $(e.target).closest(`.${mainClass}`);
		console.log("-> currentBody", $currentBody, mainClass);
		if (menuMode === "fullScreen" && $currentBody) {
			$currentBody.hasClass(`${mainClass}_open`)
				? $currentBody.removeClass(`${mainClass}_open_fullscreen`) &&
				  $currentBody.addClass(`${mainClass}_close_fullscreen`)
				: $currentBody.removeClass(`${mainClass}_close_fullscreen`) &&
				  $currentBody.addClass(`${mainClass}_open_fullscreen`);
		} else {
			const mode = checkMobileMode(mobileSize);

			if (mode) {
				$currentMenu.hasClass(`${mainClass}_open`)
					? $currentMenu.removeClass(`${mainClass}_open`) &&
					  $currentMenu.addClass(`${mainClass}_close`)
					: $currentMenu.removeClass(`${mainClass}_close`) &&
					  $currentMenu.addClass(`${mainClass}_open`);
			}
		}
		/* const mode = checkMobileMode(mobileSize);

		if (mode) {
			const $currentMenu = $(e.target).closest(`.${mainClass}`);

			$currentMenu.hasClass(`${mainClass}_open`)
				? $currentMenu.removeClass(`${mainClass}_open`) &&
				  $currentMenu.addClass(`${mainClass}_close`)
				: $currentMenu.removeClass(`${mainClass}_close`) &&
				  $currentMenu.addClass(`${mainClass}_open`);
		} */
	});
};

const closeOutsideMenu = ($body, mainClass) => {
	$body.on("click", (e) => {
		e.stopPropagation();
	});

	$("html").click(function () {
		const $openMenu = $(`.${mainClass}_open`);
		$openMenu.each(function (_, item) {
			$(item).hasClass(`${mainClass}_open`) &&
				$(item).removeClass(`${mainClass}_open`) &&
				$(item).addClass(`${mainClass}_close`);
		});
	});
};

const clearClassAndStyle = ($menu, $body, mainClass, mobileSize) => {
	let width = getSize();
	if (width >= mobileSize) {
		if ($menu.hasClass(`${mainClass}_close`)) {
			$menu.removeClass(`${mainClass}_close`);
		}

		if ($menu.hasClass(`${mainClass}_open`)) {
			$menu.removeClass(`${mainClass}_open`);
		}

		$body.removeAttr("style");
	}
};

const getSize = () => $(window).width();
