//Javascript: find an object in array based on object's property
let obj = objArray.find(function (obj) { return obj.id === 3; });

// Number Sign Determination
console.log(Math.sign(7)); // 1
console.log(Math.sign(-7)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0
console.log(Math.sign(NaN)); // NaN

// Number Type Checking
Number.isNaN(7) //false
Number.isNaN(NaN) // true
Number.isFinite(NaN) // false
Number.isFinite(7) // true
Number.isFinite(Infinity) // false
Number.isFinite(-Infinity) // false

// String Searching
"Hello".startsWith("ello",1); //true
"Hello".endsWith("hell",4); //true
"Hello".includes("ell"); //true
"Hello".includes("ell",1); //true
"Hello".includes("ell",2); //false




