$(function() {

	var navigation = $(".header_functional_block__menu li");

	navigation.eq(0).click( function(){
		$(".header_functional_block__catalog").toggle();
	});

	navigation.eq(1).click( function(){
		$(".header_functional_block__services").toggle();
	});

	navigation.eq(2).click( function(){
		$(".header_functional_block__information").toggle();
	});

	navigation.eq(3).click( function(){
		$(".header_functional_block__business").toggle();
	});

	$(".header_functional_block__search").click( function(){
		$(".header_functional_block__search-action").toggle();
	});
	//показ мобильного меню
	var	firstLine = $(".menu-mobile_first-line .first-line")
			secondLineCatalog = $(".menu-catalog .third-line");
			secondLineCatalogLi = $(".menu-catalog .menu-mobile_third-line");

	$(".menu-burger").click( function(){
		$(".menu-mobile").toggle();
	});

	firstLine.eq(0).click( function(e){
		e.preventDefault(e);
		$(".menu-catalog").toggle();
	});

	secondLineCatalog.each( function() {
		$(this).click( function(e) {
			e.preventDefault();
			var i = secondLineCatalog.index($(this));

			secondLineCatalogLi.eq(i).toggle();
		});
 	});

	firstLine.eq(1).click( function(e){
		e.preventDefault(e);
		$(".menu-services").toggle();
	});

 	var secondLineServices = $(".menu-services .third-line");
		 secondLineServicesLi = $(".menu-services .menu-mobile_third-line");

	secondLineServices.each( function() {
		$(this).click( function(e) {
			e.preventDefault();
			var i = secondLineServices.index($(this));

			secondLineServicesLi.eq(i).toggle();
		});
 	});

 	firstLine.eq(2).click( function(e){
		e.preventDefault(e);
		$(".menu-information").toggle();
	});

	firstLine.eq(3).click( function(e){
		e.preventDefault(e);
		$(".menu-business").toggle();
	});

});
