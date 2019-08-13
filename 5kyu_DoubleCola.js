/*
  Kata URL: https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0
*/

function whoIsNext(names, r){
  // Formula is sum(names.lengh * 2^n) < r
  
  // Variable config
  var iterations = 0;
  var acumulated_cans = 0;
  var names_length = names.length;
  var with_same_name = 1;

  // Obtain number of cans we need
  while (acumulated_cans < r){
    // Number of times a name appear is 2^n
    with_same_name =  Math.pow(2, iterations);
    acumulated_cans += names_length * with_same_name;
    iterations ++;
  }
  
  // We need to know how many cans we have fully delivered
  var delivered_cans = ( acumulated_cans -( names_length * with_same_name));
  // We need to know how many cans we have remaining
  var unassigned_cans = r - delivered_cans;
  var latest_can_counter = 0;
  
  
  // We know that each group of names is Y times people with same same together
  while (latest_can_counter < names_length){
    if (unassigned_cans<=latest_can_counter * with_same_name){
      break;
    }else{
      latest_can_counter++;
    }
  }
  
  return names[latest_can_counter-1];
}
