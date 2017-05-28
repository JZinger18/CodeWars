//given an array of digits, return array with each digit incremneted by it position in array
//increment from 1 not base 0


function incrementer(num) {
	var array = num
	var new_number;
	var new_array = []
	for(var i = 0; i < array.length; i++) {
		new_number = (array[i] + (i+1))
		if(new_number > 9) {
			var digit = new_number.toString()
			var final_digit = parseInt(digit[digit.length-1])
			new_array.push(final_digit)
		}

		else {
			new_array.push(new_number)
		}

  	}	
  	
  	return new_array;
}
