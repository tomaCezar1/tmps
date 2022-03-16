const person = {
  name: 'Cezar',
  age: 20,
  nationality: 'Moldovan',
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
    return true; // return is necessary here
  },
});

personProxy.name;
personProxy.age = 43;
