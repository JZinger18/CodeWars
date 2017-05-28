// Create a function, comparing two intergers as strings.
// If a < b return 'less'
// If a = b return 'equal'
// If a > b return 'greater'

function compareIntegers(a, b) {

  if(a < b)
  	return 'less'
  if(a === b)
  	return 'equal'
  if(a > b)
  	return 'greater'
  
}


debug(compareIntegers("10000000000000000000000000000000000","1000000000000000000000000000000001"))
