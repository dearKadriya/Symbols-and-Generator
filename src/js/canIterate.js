
function canIterate (obj) {
    return Symbol.iterator in Object(obj);
}
console.log(canIterate(new Map()));
console.log(canIterate(new Set()));
console.log(canIterate(null));
console.log(canIterate(10));
console.log(canIterate("Netology"));

