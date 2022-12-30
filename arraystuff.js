
function checkEquals(array1, array2) {
    let ind = 0;
    if (array1.length != array2.length) {
        return false;
    }
    for (i of array1) {
        if (array2[ind] != i) {
            return false;
        }
        ind += 1;
    };
    return true;
};

function range(end, startWith0) {
    return Array(end).keys();
}
for (i of range(5)) {
    i += 1;
    console.log(i);
}
