let anObject = { left: 1, right: 2 };
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
console.log(Object.keys({ x: 0, y: 0, z: 2 }));
// → ["x", "y", "z"]
let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
// → {a: 1, b: 3, c: 4}
// OBJECTS//
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

let obj1 = { value: 10 };
let obj2 = obj1;
let obj3 = { value: 10 };
console.log(obj1 == obj2);
//true
console.log(obj3 == obj1);
//false
