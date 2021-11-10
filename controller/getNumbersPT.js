const { unidade, dezena, centena } = require('../resources/ptMap');

function unityPT(s){
    return unidade.get(s);
}

function tenPT(s){
    if (s[0] === '1'){
        return dezena.get(s);
    } else {
        if (s[1] === '0'){
            return(dezena.get(s[0]));            
        } else {
            return(dezena.get(s[0]) + ' e ' + unityPT(s[1]));
        }
    }
}

function hundredPT(s){
    if (centena.has(s)){
        return centena.get(s);
    }
    let number = '';

    number += centena.get(s[0]);
    if (s[1] !== '0'){
        number += ' e ' + tenPT(s[1] + s[2]);
    } else {
        if (s[2] !== '0'){
            number += ' e ' + unityPT(s[2]);
        }
    }

    return number;
}

function numberInFullPT(s){
    if (s.length === 1) return unityPT(s)
    else if (s.length === 2) return tenPT(s)
    else if (s.length === 3) return hundredPT(s)
}


exports.numberInFullPT = numberInFullPT;