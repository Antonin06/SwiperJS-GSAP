document.addEventListener("DOMContentLoaded", function() {
	const swiper1 = new Swiper('.swiper1', {
		slidesPerView: '1',
		effect: "fade",
		loop: true,
		// mousewheel: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});
	swiper1.on('slideChange', function () {
		gsap.fromTo('.swiper1 .swiper-slide .slide-title',{autoAlpha:0, x:250}, {autoAlpha:1, x:0, duration: .3} );
		gsap.fromTo('.swiper1 .swiper-slide .slide-content',{autoAlpha:0, x:250}, {autoAlpha:1, x:0, duration: .3, delay: .3} );
		gsap.fromTo('.swiper1 .swiper-slide span',{autoAlpha:0, y:100}, {autoAlpha:1, y:0, duration: .3, delay: .5} );
		gsap.fromTo('.swiper1 .swiper-slide img',{autoAlpha:0, scale:0.7}, {autoAlpha:1, scale:1, duration: .3} );
	})
	swiper1.on('slideChangeTransitionEnd', function () {
		// gsap.to('.swiper-slide .slide-title', {duration: .2, x:0, opacity: 1});
	})

	const swiper2 = new Swiper('.swiper2', {
		slidesPerView: 1.5,
		centeredSlides: true,
		spaceBetween: 30,
		// centered: true,
		loop: true,
		// mousewheel: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	swiper2.on('slideChange', function() {
		// var tl_title = gsap.timeline({repeat: 0, repeatDelay: 1})
		// tl_title.to('.swiper2 .slide-title',{autoAlpha:0, y:100,duration: 1,delay: 3});
		// tl_title.to('.swiper2 .slide-title',{autoAlpha:1, y:0,duration: 1 });
		// tl_title.to('.swiper2 .slide-title',{autoAlpha:0, y:100,duration: 1});
		gsap.fromTo('.swiper2 .slide-title',{autoAlpha:0, y:100}, {autoAlpha:1,y:0,duration: 1});
		gsap.fromTo('.swiper2 .slide-title',{autoAlpha:1,y:0},{autoAlpha:0, y:100,duration: 1, delay:2} );
	})
	swiper2.on('slideChangeTransitionStart', function () {
		gsap.to('.swiper2 .swiper-slide-prev img',{padding: 40, opacity: .5, duration: .5} );
		gsap.to('.swiper2 .swiper-slide-next img',{padding: 40, opacity: .5, duration: .5} );
		// gsap.to('.swiper2 .swiper-slide-active .slide-title',{autoAlpha:1, duration: .3, delay: 2} );

	})
	swiper2.on('slideChangeTransitionEnd', function () {
		gsap.to('.swiper2 .swiper-slide-active img',{padding: 0, opacity: 1, duration: .5} );
	})


	// gsap.set(".project-preview", { width: 0 });

	let nav_items = document.querySelectorAll('.navigation-item');

	nav_items.forEach(function(nav_item, i){
		let index = i+1;
		nav_item.addEventListener("mouseover", function(evt) {
			gsap.to('.project-preview', {width:600, ease: Expo.easeInOut, duration: .5});
		})
		nav_item.addEventListener("mouseout", function(evt) {
			gsap.to('.project-preview', {width:0, ease: Expo.easeInOut, duration: .2});
		})
		// console.log(nav_item)

		let hover = nav_item.querySelector('.navigation-link-'+ index);
		// console.log(hover)

		hover.addEventListener('mouseover', function(evt) {
			let test = document.querySelector('.project-preview').style.backgroundImage = "url('../images/img"+index+".jpg')";
			console.log(test)
			// console.log(preview, index)
			// preview
			// console.log(preview.style.backgroundImage, index)
		})


	})

	// for (var i = 0; i < nav_items.length; i++) {
	// 	let index = i+1;
	// 	console.log(index)
	// 	nav_item.addEventListener("mouseover", function(evt) {
	// 		gsap.to('.project-preview', {width:600, ease: Expo.easeInOut, duration: .5});
	// 	})
	// 	nav_item.addEventListener("mouseout", function(evt) {
	// 		gsap.to('.project-preview', {width:0, ease: Expo.easeInOut, duration: .2});
	// 	})
	// }

});
