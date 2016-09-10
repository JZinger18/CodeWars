//https://www.codewars.com/kata/square-n-sum

function squareSum(numbers){
  return numbers.reduce(function(a, b){
    return a + (b*b);
  }, 0)

}