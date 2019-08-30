const toggleMenu = () => {
	const burger = document.querySelector('.header__burger'),
			menu = document.querySelector('.header__menu'),
			spans = document.querySelectorAll('.header__burger-elem');

	burger.addEventListener('click', () => {
		menu.classList.toggle('header__menu-active');
		burger.classList.toggle('header__burger-static');

		spans.forEach((item) => {
			item.classList.toggle('header__burger-active');
		});
	});

}

toggleMenu();