const MyHashMap = require("./myhashmap");

const myMap = new MyHashMap();

myMap.put("apple", 1);
myMap.put("banana", 2);
myMap.put("orange", 3);

console.log("Get apple:", myMap.get("apple"));
console.log("Get banana:", myMap.get("banana"));
console.log("Get grape:", myMap.get("grape"));

myMap.remove("banana");

myMap.dump();