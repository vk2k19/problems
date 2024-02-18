// Given a nested array of numbers convert it into a flattened array

[1,2,[3,4],5]
// simple flatmap function for two level
[1,2,[3,[4]],5].flatMap(x => x)

[1,2,[3,4],5].map(x => {
    if (typeof x === 'number') return  x;
    return x.map(y => y);
})

// via recursion
const input = [1,2,[3,[4,5]],6];
const res = [];
const flatMap = function (x) {
    for (var i = 0; i < x.length; i++) {
        if (typeof x[i] === 'number') {res.push(x[i]);}
        else {
            flatMap(x[i]);
        }
    }
    return res;
}

console.log(flatMap(input));

// via while loop by shifting
let input1 = [1,2,[3,[4,5]],6];
const res1 = [];

while(input1.length) {
    if (typeof input1[0] === 'number') {
        res1.push(input1.shift());
    } else {
        input1 = [...input1.shift(), ...input1];
    }
}
console.log(res1)

// via reverse lookup
let input2 = [1,2,[3,[4,5]],6];
const res2 = [];

while(input2.length) {
    const lastnumber = input2.pop();
    if (typeof lastnumber === 'number') {
        res2.push(lastnumber);
    } else {
        input2 = [...input2, ...lastnumber];
    }
}
console.log(res2.reverse())

// via for loop
let input3 = [1,2,[3,[4,5]],6];
const res3 = [];

flatten: for(var i = 0; i < input3.length;) {
    console.log(res3, input3, 'process', i);
    const lastnumber = input3.pop();
    if (typeof lastnumber === 'number') {
        res3.push(lastnumber);
    } else {
        input3 = [...input3, ...lastnumber];
        continue flatten;
    }
}

console.log(res3.reverse())