//Longest Palindrome in a String

function isPalindrome(s) {
    let rev = s.split('').reverse().join('');
    return s === rev;
}

function longestPalind(s) {
    let max_length = 0, maxp = '';

    for (let i = 0; i < s.length; i++) {
        let subs = s.substr(i, s.length);
        console.log(subs);
        
        for (let j = subs.length; j >= 0; j--) {
            let sub_subs = subs.substr(0, j);
            console.log('checking: '+ sub_subs);
            if(sub_subs.length <= 1) {
                continue;
            }

            if(isPalindrome(sub_subs)) {
                console.log('palindrome: '+ sub_subs)
                if(sub_subs.length > max_length) {
                    max_length = sub_subs.length;
                    maxp = sub_subs;
                }
            }
        }
    }
    return maxp;
}

longestPalind('aaaabbaa');
