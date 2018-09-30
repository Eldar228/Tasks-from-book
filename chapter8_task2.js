function areArraysSame(arr1,arr2) {
if(arr1.length !== arr2.length) {
    console.log("False");
    return;
};if(arr1.length === arr2.length) {
for(var i = 0; i < arr1.length;i++) {
    if(arr1[i] === arr2[i]){
        console.log("True");
        return;
    } else {
console.log("False");
return;
    };
};
};
};
console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));