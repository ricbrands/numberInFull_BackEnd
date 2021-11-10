const { unity, ten } = require('../resources/usMap');

function unityUS(s){
    return unity.get(s);
}

function tenUS(s){
    if (s[0] === '1'){
        return ten.get(s);
    } else {
        if (s[1] === '0'){
            return(ten.get(s[0]));
        } else {
            return(ten.get(s[0]) + '-' + unityUS(s[1]));
        }
    }
}

function hundredUS(s){
    let number = '';

    number += unityUS(s[0]) + ' hundred';

    if (s[1] !== '0'){
        number += ' ' + tenUS(s.substring(1));
    } else {
        if (s[2] !== '0'){
            number += ' ' + unityUS(s[2]);
        }
    }

    return number;
}

function numberInFullUS(s){
    if (s.length === 1) return unityUS(s)
    else if (s.length === 2) return tenUS(s)
    else if (s.length === 3) return hundredUS(s)
}

exports.numberInFullUS = numberInFullUS;