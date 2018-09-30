var  l = "Javascript is awesome";
var cnt = 0;
for (var i = 0; i < l.length; i++) {
    if (l[i] === "a") cnt++;
};
console.log(cnt);

var g = 0;
var f = 0; 
while(f < l.length) {
    f++;
    if (l[f] === "a") g++;
};
console.log(g);