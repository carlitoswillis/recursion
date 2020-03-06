// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {


  // your code goes here
  var typeobj = typeof obj;

  if (typeobj === "number" || typeobj === "boolean") {
  	return (obj + ""); 
  } else if (typeobj === "string") {
  	return '"' + obj + '"';
  } else if (obj === null) {
  	return "null";
  } else if (typeobj === "function") {
  	return "";
  } else if (obj === undefined) {
  	return "";
  } else if (Array.isArray(obj)) {
  	var arrStrReturn = "";
  	if (obj.length === 0) {
  	} else {
  		for (var element of obj) {
  			if (element !== obj[obj.length-1]) {
  				arrStrReturn = arrStrReturn + stringifyJSON(element) + ","
  			} else {
  				arrStrReturn = arrStrReturn + stringifyJSON(element);
  			}	
  		}
  	}
  	// else if (obj.length === 1) {
  	// 	arrStrReturn = stringifyJSON(obj[0]);
  	// } else {
  	// 	arrStrReturn = stringifyJSON(obj[0]) + ","+ stringifyJSON(obj.slice(1)) ;
  	// }
  	return '[' + arrStrReturn + ']'
  } else {

    var keys = Object.keys(obj);
  	var arrObjReturn = "";
  	if (Object.keys(obj).length === 0) {
  		return "{}";
  	} else {
  		for (var key of keys) {
  			if (stringifyJSON(obj[key]) === '') {
  			} else if (key !== keys[keys.length-1]) {
  				arrObjReturn = arrObjReturn + stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ","
  			} else {
  				arrObjReturn = arrObjReturn + stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
  			}	
  		}
  	}
  	
  	return '{' + arrObjReturn + '}'

  }


}
