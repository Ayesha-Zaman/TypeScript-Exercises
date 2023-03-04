var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Turkiye", "Malaysia", "Dubai", "Switzerland", "Maldives"];
console.log(places);
var a = __spreadArray([], places, true).sort();
console.log(a);
console.log(places);
var b = __spreadArray([], places, true).reverse();
console.log(b);
console.log(places);
var c = places.reverse();
console.log(c);
var d = places.reverse();
console.log(d);
var e = places.sort();
console.log(e);
var f = places.reverse();
console.log(f);
