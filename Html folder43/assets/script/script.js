// 1)
// выведите в консоли значение name через точку
let str = '{"name": "Alex", "age": 24}';
let obj = JSON.parse(str);
console.log(obj.name); 
// 2)
// выведите в консоли значение name через квадратные скобки
let str2 = '{"name": "Alex", "age": 24}';
let obj2 = JSON.parse(str);
console.log(obj["name"]); 
// 3)
// к называется обьект находящийся в JSON?
// Литерал