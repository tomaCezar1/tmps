import Singleton from './singleton.js';
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');
const countBtn = document.getElementById('count');
const singleton = Singleton.getInstance();
const addHandler = () => {
    singleton.increaseCount();
    countBtn.innerHTML = String(singleton.count);
};
const removeHandler = () => {
    singleton.decreaseCount();
    countBtn.innerHTML = String(singleton.count);
};
addBtn.addEventListener('click', addHandler);
removeBtn.addEventListener('click', removeHandler);
const areInstancesEqual = () => {
    const s2 = Singleton.getInstance();
    if (singleton === s2) {
        console.log('references the same object in memory');
        return;
    }
};
areInstancesEqual();
