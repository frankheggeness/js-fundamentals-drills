/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
function doubleArray(arr){
  newArray = []
  for(i=0;i<arr.length;i++){
    newArray.push(arr[i]*2)
  }
  return newArray;
}
console.log(doubleArray([1,2,3]))
/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
function sumArrays(arr1, arr2){
  var sum1 = 0;
  var sum2 = 0;
  for (i=0;i<arr1.length;i++){
    sum1 += arr1[i]
  }
  for (i=0;i<arr2.length;i++){
    sum2 += arr2[i]
  }
  var sumTotal = sum1+sum2;
  return sumTotal;
}
console.log(sumArrays([1,2,3],[1,3,4]))

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
function stringCount(str){
  var length = str.length;
  return length;
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
function arrayLength(arr){
  var length = arr.length;
  return length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
function countAll(arr){
  var sum = 0;
  for(i=0;i<arr.length;i++){
    sum += arr[i];
  }
  return sum;
}
console.log(countAll([1,2,3]))

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
function countStrings(arr){
  var stringLength=[];
  for(i=0;i<arr.length;i++){
    stringLength.push(arr[i].length);
  }
  return stringLength;
}
console.log(countStrings(['one','two','booo']))

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
function countAllStrings(arr){
  var lengthSum = 0;
  for(i=0;i<arr.length;i++){
    lengthSum += arr[i].length;
  }
  return lengthSum;
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
function convertToArray(obj){
  var values = Object.values(obj);
  return values;
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
function objectSize(obj){
  var keys = Object.keys(obj).length;
  return keys;
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
function createZeroFilledArray(num){
  var zeroArray = [];
  var zero = 0
  for (i=0;i<num;i++){
    zeroArray.push(zero);
  }
  return zeroArray;
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
function poppedArray(arr){
  arr.pop();
  return arr;
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
function splitString(str){
  return str.split('');
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
function lengthOfLast(arr){
  for (i=0;i<arr.length;i++){
    var strLength = arr[i].length;
  }
  return strLength
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
function sumBelowTen(arr){
  var sum = 0;
  for (i=0;i<arr.length;i++){
    if(arr[i]<10){
      sum += arr[i]
    }
  }
  return sum;
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
function moreThanTenLetters(arr){
  var more = 0;
  for (i=0;i<arr.length;i++){
    if(arr[i].length>10){
      more ++
    }
  }
  return more;
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
function multiplyAll(arr){
  var product = 1;
  for (i=0;i<arr.length;i++){
    product *= arr[i];
  }
  return product;
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
function sumAllPositive(arr){
  var sum = 0;
  for(i=0;i<arr.length;i++){
    if(arr[i]>0){
      sum += arr[i]
    }
  }
  return sum;
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
function stringCountBelowThree(arr){
  var amount = 0;
  for (i=0;i<arr.length;i++){
    if(arr[i].length<=3){
      amount ++;
    }
  }
  return amount;
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
function countObjects(arr){
  var amount = arr.length;
  return amount;
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
function getObjectKeys(obj){
  var keys = Object.keys(obj);
  return keys;
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
function getObjectValues(obj){
  var values = Object.values(obj);
  return values;
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
function makeObject(key, value){
  var key1 = key;
  
  var obj = {  
  }
  obj[key1] = value;
  return obj;
}
console.log(makeObject('hope', 'works'))

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
function makeObjectReverse(value, key){
  var obj = {};
  obj[key] = value;
  return obj;
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
function tupleToObject(arr){
  var obj = {};
  obj[arr[0]] = arr[1];
  return obj;
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
function tupleToObjectReverse(arr){
  var obj = {};
  obj[arr[1]] = arr[0]
  return obj;
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
function strToKeys(arr){
  var obj = {};
  for (i=0; i<arr.length;i++){
    obj[arr[i]] = 0;
  }
  return obj;
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
function getValues(obj){
  var val = Object.values(obj);
  return val;
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
function getKeys(obj){
  var keys = Object.keys(obj);
  return keys;
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
function objectToArray(obj){
  var tupleArray = [];
  var keysArray = Object.keys(obj);
  var valuesArray = Object.values(obj);
  for(i=0;i<keysArray.length;i++){
    var newArray = [keysArray[i],valuesArray[i]];
    tupleArray.push(newArray);
  }
  return tupleArray;
}
console.log(objectToArray({
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
}))
/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
function arrayToObject(arr){
  var newObj = {};
  for (i=0;i<arr.length;i++){
    newObj[arr[i]] = false;
  }
  return newObj;
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
function arraysToObject(arr1, arr2){
  var newObj = {};
  for (i=0;i<arr1.length; i++){
    newObj[arr1[i]] = arr2[i]
  }
  return newObj;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
function objectsToTuples(obj1, obj2){
  var newTupes = [];
  var keys1 = Object.keys(obj1);
  var keys2 = Object.keys(obj2);
  var values1 = Object.values(obj1);
  var values2 = Object.values(obj2);
  for (i=0;i<keys1.length;i++){
    newArr = [keys1[i], values1[i]];
    newTupes.push(newArr);
  }
  for (i=0;i<keys2.length;i++){
    newArr2 = [keys2[i], values2[i]];
    newTupes.push(newArr2);
  }
  return newTupes;
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
function mapArrayValues(arr){
  var obj = {};
  for (i=0;i<arr.length;i++){
    obj[arr[i]] = true;
  }
  return obj;
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
function mapStringCounts(arr){
  var newObj = {};
  for(i=0;i<arr.length;i++){
    if(arr[i].length>=5){
      newObj[arr[i]] = true;
    }else{
      newObj[arr[i]] =false;
    }
  }
  return newObj;
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
function arrayToObjectNums(arr){
  var newObj = {};
  for (i=0;i<arr.length;i++){
    newObj[arr[i]] = true
  }
  return newObj;
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
function stringToKeys(str){
  var split = str.split('');
  var newObj = {};
  for (i=0;i<split.length;i++){
    newObj[split[i]] = true;
  }
  return newObj;
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
function charCountMap(arr){
  newObj = {};
  for(i=0;i<arr.length;i++){
    newObj[arr[i]] = arr[i].length;
  }
  return newObj;
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Object}
 */
function frequencyMap(arr){
  newObj = {};
  for(i=0;i<arr;i++){
    newObj[arr[i]] = 1
  }
  

}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Object}
 */
function tupleConvertToObject(arr){
  newObj = {};
  for(i=0;i<arr.length;i++){
    newObj[arr[i][0]] = arr[i][1];
  }
  return newObj;
}


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
