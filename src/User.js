export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
export function printName({ name }) {
  console.log(`User is ${name}`);
}
export function printAge({ age }) {
  console.log(`User age is ${age}`);
}
