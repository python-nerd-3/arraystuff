let a1 = ["a", "b", "c"];
let a2 = ["a", "b", "c"];
let a3 = ["HAHA", "u thot", "LOL"];

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

console.log(checkEquals(a1, a3))

// JAVIERSCRIPT的basik Built In Meffods!
// why does shawn wasell love arrays

let a4 = new Array("cheese", "burger") // ez to type

function range(end, startWith0) {
    return Array(end).keys();
}
for (i of range(5)) {
    i += 1;
    console.log(i);
}
