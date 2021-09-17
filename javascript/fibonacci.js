const fibonacci = (num) => {
  const fibs = []
  return [...Array(num).keys()].reduce((pf, cf) => {
    fibs.push(pf)
    return pf === 0 ? (pf + 1) : (pf + fibs[cf - 1])
  }, 0)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
