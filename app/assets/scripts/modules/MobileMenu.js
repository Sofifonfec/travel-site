import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.siteHeader = $(".site-header");  //we target the site header to create a modifier class when clicked
		this.menuIcon = $(".site-header__menu-icon");		//we target the element in the DOM to create an event on it
		this.menuContent = $(".site-header__menu-content");  //we target the menu content to change its class when clicked
		this.events();  //so that the events method below is automatically called when the icon is clicked
	}
	
	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));	//we create the event to do something when the element is clicked 
	}  //bind is a JS feature to point toward the toggleTheMenu object when clicked
	
	toggleTheMenu() {    //we define a new method to tell the event what we want to happen when the icon is clicked 
		this.menuContent.toggleClass("site-header__menu-content--is-visible"); //we create a new class when the icon is clicked
		this.siteHeader.toggleClass("site-header--is-expanded");  //we change the class when clicked to style the menu on mobile
		this.menuIcon.toggleClass("site-header__menu-icon--close-x") //add a new modifier class when icon is clicked to create the X 
	}
}

export default MobileMenu;
