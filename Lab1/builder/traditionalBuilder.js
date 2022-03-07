// class User {
//   name: string;
//   age: string;
//   phone: string;
//   country: string;
//   constructor(name) {
//     this.name = name;
//   }
// }
// class UserBuilder {
//   user: User;
//   constructor(name) {
//     this.user = new User(name);
//   }
//   setAge(age) {
//     this.user.age = age;
//     return this;
//   }
//   setPhone(phone) {
//     this.user.phone = phone;
//     return this;
//   }
//   setCountry(country) {
//     this.user.country = country;
//     return this;
//   }
//   build() {
//     return this.user;
//   }
// }
// const builder = new UserBuilder('user1');
// const user1 = builder.setCountry('Moldova').build();
// const user2 = builder.setAge(20).build();
// const user3 = builder.setPhone('123').setAge(21).build();
// console.log(user3);
