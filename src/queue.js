
function head(array){
    if (checkEmptyArray(array)){
        return null;
    }
    return array[0];
}

function tail(array){
    if (checkEmptyArray(array)){
        return null;
    }
     return array.shift();
}

function max(array){
    if (checkEmptyArray(array)){
        return null;
    }
     return Math.max(array);
}
function min(array){
    if (checkEmptyArray(array)){
        return null;
    }
     return Math.min(array);
}
function checkEmptyArray(array){
    if (array.length==0)
        return true;
    else
        return false;
}
module.exports = head,tail,max,min ;