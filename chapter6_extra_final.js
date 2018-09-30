var array = ["aaa", "a", "Eldaar"];
var cnt = 0;
for (var i = array.length -1; i < array.length;i--) {
    for(var g = 0;g < array[i].length;g--) {
if (array[i][g] === "a") cnt++;
    };
};
console.log(cnt);