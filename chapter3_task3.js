/*больше нравиться прошлый вариант*/




var bodyparts = ["глаз", "нос", "череп"];
var pril = ["вонючий", "унылый", "дурацкий"];
var randompart = ["лапка", "язык","зубы"];
var animals = ["носорога","собаки","слона",];
var x = bodyparts[Math.floor(Math.random()*3)];
var y = pril[Math.floor(Math.random()*3)];
var p = randompart[Math.floor(Math.random()*3)];
var k = animals[Math.floor(Math.random()*3)];
var l = ["У тебя " + x + " еще более " + y + ", чем " + p + " у " + k];
console.log(l.join());