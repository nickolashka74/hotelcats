var scroll = new SmoothScroll('a[href*="#"]', {
	easing: 'easeInQuad',
});

//Menu
let unlock = true;
let iconMenu = document.querySelector(".header__burger");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".header__menu");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("active");
			menuBody.classList.toggle("active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".header__burger");
	let menuBody = document.querySelector(".header__menu");
	iconMenu.classList.remove("active");
	menuBody.classList.remove("active");
}
//=================

//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================

//Tippy
tippy('.emptyRoom', {
	content: "Пустой номер",
	theme: 'hotelcats',
	duration: 400,
	onMount(instance) {
		const box = instance.popper.firstElementChild;
		requestAnimationFrame(() => {
		  box.classList.add('animated');
		  box.classList.add('rubberBand');
		});
	  },
	  onHidden(instance) {
		const box = instance.popper.firstElementChild;
		box.classList.remove('animated');
		box.classList.remove('rubberBand');
	  },
  });

  tippy('.sunbed', {
	content: "Лежак",
	theme: 'hotelcats',
	duration: 400,
	onMount(instance) {
		const box = instance.popper.firstElementChild;
		requestAnimationFrame(() => {
		  box.classList.add('animated');
		  box.classList.add('rubberBand');
		});
	  },
	  onHidden(instance) {
		const box = instance.popper.firstElementChild;
		box.classList.remove('animated');
		box.classList.remove('rubberBand');
	  },
  });

  tippy('.scratchingPost', {
	content: "Когтеточка",
	theme: 'hotelcats',
	duration: 400,
	onMount(instance) {
		const box = instance.popper.firstElementChild;
		requestAnimationFrame(() => {
		  box.classList.add('animated');
		  box.classList.add('rubberBand');
		});
	  },
	  onHidden(instance) {
		const box = instance.popper.firstElementChild;
		box.classList.remove('animated');
		box.classList.remove('rubberBand');
	  },
  });

  tippy('.gameComplex', {
	content: "Игровой комплекс",
	theme: 'hotelcats',
	duration: 400,
	onMount(instance) {
		const box = instance.popper.firstElementChild;
		requestAnimationFrame(() => {
		  box.classList.add('animated');
		  box.classList.add('rubberBand');
		});
	  },
	  onHidden(instance) {
		const box = instance.popper.firstElementChild;
		box.classList.remove('animated');
		box.classList.remove('rubberBand');
	  },
  });