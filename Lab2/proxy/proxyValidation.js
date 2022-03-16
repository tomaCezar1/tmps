const person = {
  name: 'Cezar',
  age: 20,
  nationality: 'Moldovan',
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(`Property doesn't exist`);
    } else {
      console.log(`Value of ${prop} is ${obj[prop]}`);
    }
  },
  // add validations when setting new values to the obj
  set: (obj, prop, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      console.log(`Only numeric values for age`);
    } else if (prop === 'name' && value.length < 2) {
      console.log(`Enter a valid name`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      obj[prop] = value;
    }
    return true;
  },
});

personProxy.nonExistentProperty;
personProxy.age = '44';
personProxy.name = '';
