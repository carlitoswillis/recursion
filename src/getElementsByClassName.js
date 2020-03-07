// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here

  var body = document.body;
  var classNameList = [];
  
  function getElementsHelper (element) {

  	if (element === undefined || element.className === undefined || element.classList === undefined) {
  		return;
  	}

  	if (element.className === className || element.classList.contains(className)) {
  		classNameList.push(element);
  	}

	for (var item of element.childNodes) {

		if (item === undefined || item.classList === undefined) {

		} else {
			getElementsHelper(item);
		}

	  }

  }

  getElementsHelper(body);

  return classNameList;

};
