//Permutations of a given string

function permutationString(str) {
    var results = [];

    if(str.length === 1) {
        return results.push(str);
    }

    for (var i = 0; i < str.length; i++) {
        var firstChar = str[i];
        var otherChar = str.substring(0, i) + str.substring(i + 1);
        var otherPermutations = permutationString(otherChar);

        for (var j = 0; j < otherPermutations && otherPermutations.length; j++) {
            results.push(firstChar + otherPermutations(j));
            console.log(results);
        }
    }
    // for (let i = 0; i < str.length; i++) {
    //     console.log(str);
    // }
}

permutationString('ABC');