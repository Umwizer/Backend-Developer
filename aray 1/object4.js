let object1={a:1,b:2,c:3};
let object2={b:2,c:3,d:5};
let commonKeys = Object.keys(object1).filter(key => object2.hasOwnProperty(key));
console.log(commonKeys);
let commonvalues=commonKeys.map(key=>object1[key]);
console.log(commonvalues);