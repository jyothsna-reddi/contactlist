function Adder(x) {
    return function(y) {
      return x + y;
    };
  }
  var add5 = Adder(5);
  console.log(add5);
  var add10 = Adder(10);
  console.log(add5(2));
  console.log(add10(2));