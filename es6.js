// Object clone
var obj = {a:0};
var copy = Object.assign({},obj); // {a:0}

// Merge With same properties
var obj1 = {a:1,b:2,c:1};
var obj2 = {b:2,c:1};
var obj3 = {c:3};
var obj = Object.assign({},obj1,obj2,obj3); // {a:1,b:2,c:3};

// Array Element Finding
let array = ['a','b','c','d','e'];
array.find( x => x == 'e') // 'e'
array.findIndex( x => x == 'e') // 4


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

// String repeating
let repeat = 'foo '.repeat(3); // foo foo foo






