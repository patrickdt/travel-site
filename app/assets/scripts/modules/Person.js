class Person {
  constructor(fullName, favColor) {
    this.name = fullName,
    this.favoriteColor = favColor
  }

  greet() {
    console.log("Hello thereeeee, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

export default Person; // ES6 method
//module.exports = Person; // NodeJS method
// target the exports' object parent. and make the exports property equal the Person constructor function.
