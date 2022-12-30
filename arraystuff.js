
export function checkEquals(array1, array2) {
    let ind = 0;
    if (array1.length != array2.length) {
        return false;
    }
    for (let i in array1) {
        if (array2[ind] != i) {
            return false;
        }
        ind += 1;
    };
    return true;
};

export function range(end) {
    return Array(end).keys();
}

export function checkShare(a1, a2, value) {
    if (a1.includes(value) && a2.includes(value)){
        return true;
    } else {
        return false;
    }
}

// arraystuff 1.1
