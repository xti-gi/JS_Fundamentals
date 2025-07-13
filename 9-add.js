function add(a, b) {
    console.log(a + b);
}

const firstInt = parseInt(process.argv[2]);
const secondInt = parseInt(process.argv[3]);

if (isNaN(firstInt) || isNaN(secondInt)) {
    console.log("Missing or invalid arguments");
} else {
  add(firstInt, secondInt);
}
