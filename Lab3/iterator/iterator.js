function range(start, end, step = 1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start = start + step;
        return { value: start, done: false };
      }
      return { value: start, done: true };
    },
  };
}

for (const n of range(0, 20, 5)) {
  console.log(n);
}

function makeRange(start = 0, end = 100, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next: function () {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}

const iterator = makeRangeIterator(1, 10, 2);

let result = iterator.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = iterator.next();
}
