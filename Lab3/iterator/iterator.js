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
