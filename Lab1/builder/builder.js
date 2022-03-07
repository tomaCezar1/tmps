class User {
    constructor(name, { age = undefined, phone = undefined, country = 'Moldova' } = {}) {
        this.name = 'user';
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.country = country;
    }
}
const user1 = new User('user1', { country: 'Romania' });
const user2 = new User('user2', { age: 18, phone: 1234 });
console.log(user1);
console.log('----------');
console.log(user2);
