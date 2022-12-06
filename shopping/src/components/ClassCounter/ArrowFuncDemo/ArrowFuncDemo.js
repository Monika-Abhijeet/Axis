function ArrowFuncDemo() {
  //    regular function
  function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
  }

  const addNumbersArrow = (num1, num2) => {
    let sum = num1 + num2;
    console.log(sum);
  };

  function printHello() {
    console.log("Hello Good afternoon");
  }

  const printHelloArrow = () => {
    console.log("Hello Good afternoon");
  };

  return (
    <div>
      <h1>Arrow Function demo</h1>
      <button onClick={printHello}>Print hello</button>
      <button onClick={printHelloArrow}>Print hello Arrow</button>
      <button onClick={() => addNumbers(15, 10)}>Add Numbers</button>
    </div>
  );
}

export default ArrowFuncDemo;
