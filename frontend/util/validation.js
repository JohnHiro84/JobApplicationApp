


export var validateInformation = function(info, partNum){
  // console.log(partNum);
  let validated = {
    part_one_validated: false,
    part_two_validated: false,
    part_three_validated: false,
    part_four_validated: false,
    part_five_validated: false,
    part_six_validated: false,
    part_seven_validated: false,
    part_eight_validated: false,
    part_nine_validated: false,
    errors: []
  }
  let errors = [];

  validatePartOne(info, validated, partNum);
  validatePartTwo(info, validated, partNum);
  validatePartThree(info, validated, partNum);
  validatePartFour(info, validated, partNum);
  validatePartFive(info, validated, partNum);
  validatePartSix(info, validated, partNum);
  validatePartSeven(info, validated, partNum);
  validatePartEight(info, validated, partNum);

  return validated;
}

var validatePartOne = function(info, validated, partNum){
  if(Number(partNum) < 1){
    return false;
  }
  if(!isValidString(info.first_name)) validated['errors'].push('first_name');
  if(!isValidString(info.last_name)) validated['errors'].push('last_name');
  if(!isValidString(info.country)) validated['errors'].push('country');
  if(!isValidString(info.address_line1)) validated['errors'].push('address_line1');
  if(!isValidString(info.city)) validated['errors'].push('city');
  if(!isValidString(info.state_location)) validated['errors'].push('state_location');
  if(!isValidString(info.contact_method)) validated['errors'].push('contact_method');
  if(!isValidPhone(info.primary_phone)) validated['errors'].push('primary_phone');
  if(!isValidEmail(info.email)) validated['errors'].push('email');

  if(validated['errors'].length > 0) {
    validated['part_one_validated'] = false;
  } else {
    validated['part_one_validated'] = true;
  }
}

export var isValidString = function(str){
  if(str === "" || str === undefined || str === " "){
    return false;
  }
  return true;
}


var isValidEmail = function(email) { return /^.+@.+\..+$/.test(email);}


var charsUnder400 = function(str){
  if(!isValidString(str)){
    return false;
  }
  if(str.length > 400){
    return false;
  } else {
    return true;
  }
}


var isValidPhone = function(phonetxt){
  var regex = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
  if(regex.test(phonetxt)){
    return true;
  } else {
    return false;
  }
}


var validatePartTwo = function(info, validated, partNum){
  if(Number(partNum) < 2){
    return false;
  }

  if(!isValidString(info.start_date)) validated['errors'].push('start_date');

  if(validated['errors'].length > 0) {
    validated['part_two_validated'] = false;
  } else {
    validated['part_two_validated'] = true;
  }
}



var validatePartThree = function(info, validated, partNum){

  if(Number(partNum) < 3){
    return false;
  }

  if(!isValidString(info.authorized)) validated['errors'].push('authorized');
  if(!isValidString(info.countries_authorized)) validated['errors'].push('countries_authorized');

  if(validated['errors'].length > 0) {
    validated['part_three_validated'] = false;
  } else {
    validated['part_three_validated'] = true;
  }
}


var validatePartFour = function(info, validated, partNum){

  if(Number(partNum) < 4){
    return false;
  }

  if(!isValidString(info.resume_file)) validated['errors'].push('resume_file');

  if(validated['errors'].length > 0) {
    validated['part_four_validated'] = false;
  } else {
    validated['part_four_validated'] = true;
  }
}



var validatePartFive = function(info, validated, partNum){

  if(Number(partNum) < 5){
    return false;
  }

  if(!isValidString(info.undergrad_institution)) validated['errors'].push('undergrad_institution');
  if(!isValidString(info.undergrad_major)) validated['errors'].push('undergrad_major');
  if(!isValidString(info.undergrad_gpa)) validated['errors'].push('undergrad_gpa');
  if(!isValidString(info.undergrad_major_gpa)) validated['errors'].push('undergrad_major_gpa');
  if(!isValidString(info.grad_institution)) validated['errors'].push('grad_institution');
  if(!isValidString(info.grad_major)) validated['errors'].push('grad_major');
  if(!isValidString(info.grad_gpa)) validated['errors'].push('grad_gpa');
  if(!charsUnder400(info.explain_interest)) validated['errors'].push('explain_interest');
  if(!isValidString(info.referred_by)) validated['errors'].push('referred_by');
  if(!isValidString(info.relocate)) validated['errors'].push('relocate');

  if(validated['errors'].length > 0) {
    validated['part_five_validated'] = false;
  } else {
    validated['part_five_validated'] = true;
  }
}


var validatePartSix = function(info, validated, partNum){

  if(Number(partNum) < 6){
    return false;
  }

  if(!isValidString(info.resume_text)) validated['errors'].push('resume_text');

  if(validated['errors'].length > 0) {
    validated['part_six_validated'] = false;
  } else {
    validated['part_six_validated'] = true;
  }
}


var validatePartSeven = function(info, validated, partNum){

  if(Number(partNum) < 7){
    return false;
  }

  if(!isValidString(info.race)) validated['errors'].push('race');
  if(!isValidString(info.gender)) validated['errors'].push('gender');
  if(!isValidString(info.veteran)) validated['errors'].push('veteran');

  if(validated['errors'].length > 0) {
    validated['part_seven_validated'] = false;
  } else {
    validated['part_seven_validated'] = true;
  }
}



var validatePartEight = function(info, validated, partNum){

  if(Number(partNum) < 8){
    return false;
  }

  if(!isValidString(info.disability)) validated['errors'].push('disability');
  if(!isValidString(info.signature)) validated['errors'].push('signature');
  if(!isValidString(info.date)) validated['errors'].push('date');

  if(validated['errors'].length > 0) {
    validated['part_eight_validated'] = false;
  } else {
    validated['part_eight_validated'] = true;
  }
}


export var isPreviousSectionValid = function(str, state){

  let numberWord = str.split('-')[1];

  if(numberWord === 'one'){
    return true;
  } else if(numberWord === 'two'){
    return state['part_one_validated']

  } else if(numberWord === 'two'){
    return state['part_one_validated']

  } else if(numberWord === 'three'){
    return state['part_two_validated']

  } else if(numberWord === 'four'){
    return state['part_three_validated']

  } else if(numberWord === 'five'){
    return state['part_four_validated']

  } else if(numberWord === 'six'){
    return state['part_five_validated']

  } else if(numberWord === 'seven'){
    return state['part_six_validated']

  } else if(numberWord === 'eight'){
    return state['part_seven_validated']

  } else if(numberWord === 'nine'){
    return state['part_eight_validated']
  }

}
