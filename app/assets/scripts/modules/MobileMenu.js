import $ from 'jquery';

class MobileMenu {
  constructor() {
    //alert("Testing from MobileMenu.")
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    // bind() is very useful here. It uses the "this" inside the function it's used in: in this case toggleTheMenu's menu-content instead of menu-icon.
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    // so basically the "this" has the same instance as the "this" from events(). It needs to pass the instance to the method in order for the method to know which instance it's going to use from.
  }
}

export default MobileMenu;
