const person = {
  name: 'Cezar',
  age: 20,
  nationality: 'Moldovan',
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`Value of ${prop} : ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    return Reflect.set(obj, prop, value);
  },
});

personProxy.name;
personProxy.age = 43;
personProxy.name = 'Jane Doe';
