async function print() {
  console.log("a");
  console.log("b");
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("c");
      resolve(); // execution will be paused until promise is resolved
    }, 3000);
  });
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("d");
      resolve();
    }, 0)
  );
  console.log("e");
}

print();
