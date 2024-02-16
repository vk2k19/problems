"Add two positive numbers given as string of m,n length and print the sum"
"Given values will be strings of length 0 to n size"
"strings will be positive numbers"
"Result should alwayes be in natural numbers and not exponents"
"Always return type should be string"

examples:
addStrings('1',''); // '1'
addStrings('100','11'); // '111'
addStrings('9999','1'); // '10000'
addStrings('9999', '90001'); // '100000'
addStrings('9999999999999','1'); // '10000000000000'
addStrings('12313123132123123','123123123123123'); // '12436246255246246'

function addStrings(x, y) {

    if (x.length + y.length < 17) { return `${+x + +y}`;}

    if (y.length > x.length) {
        [y, x] = [x, y];
    }
    let carry = 0;
    let res = [];
    for (var j=x.length -1, i=y.length-1; j >=0; j--, i--) {
        const result = +x[j] + (+y[i] || 0) + carry;
        res[j] = result % 10;
        carry = Math.floor(result / 10);
    }
    return carry ? carry + res.join('') : res.join('');
}