// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {return property};
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property, {
        set: (value) =>{property = value},
        get: () =>(property),
        enumerable : false
    });
    return property;
};
const createProtoMagicObject = () => {
let obj = () => {};
obj.prototype = obj.__proto__;
return obj;
};
Function.prototype.valueOf = function(){
    return count;
}
let count = 0;
const incrementor = () => {
    count ++;
    return incrementor
};
let count2 = 0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
        count2++;
        return resolve(count2);
    })
};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;