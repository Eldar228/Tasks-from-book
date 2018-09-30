var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var x = '';
while (x < 5) {
    var x = x + alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(x)};