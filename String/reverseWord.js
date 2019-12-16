//Reverse words in a given string

// solution 1
function reverseWord(str) {
    return str.split('.').reverse().join('.');
}

// solution 2
function reverseWord(str) {
    const strSplit = str.split('.');
    let rev = '';
    for (let word of strSplit) {
        rev = word + '.' + rev;
    }
    return rev;
}

console.log(reverseWord('i.like.this.program.very.much'));