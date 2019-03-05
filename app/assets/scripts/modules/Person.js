function Person(fullName, favColor) {
  this.name = fullName,
  this.favoriteColor = favColor,
  this.greet = function() {
    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

module.exports = Person;
// target the exports' object parent. and make the exports property equal the Person constructor function.
