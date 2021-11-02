// Given a roman numeral, convert it to an integer.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var integer = 0;
    var lastNum = 0;
    var currentNum = 0;

    // read string right to left
    for(var i = s.length - 1; i > -1; i--){

        if(i < s.length - 1){
            lastNum = currentNum;
        }

        switch(s[i]){
			case "I":
				currentNum = 1;
				break;
			case "V":
				currentNum = 5;
				break;
			case "X":
				currentNum = 10;
				break;
			case "L":
				currentNum = 50;
				break;
			case "C":
				currentNum = 100;
				break;
			case "D":
				currentNum = 500;
				break;
			case "M":
				currentNum = 1000;
				break;
			default:
				currentNum = 0;
				break;
		}

		if(currentNum >= lastNum){
		    integer += currentNum;
		} else if(currentNum < lastNum){
		    integer -= currentNum;
		}

    }

    console.log(integer);
    return integer;
};