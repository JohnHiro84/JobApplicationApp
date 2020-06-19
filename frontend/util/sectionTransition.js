
export var sectionTransition = function(value){


  let numValue = Number(value);
  if(numValue === 1){
    document.getElementById('part-one-section').className = 'part-hide';
    document.getElementById('part-two-section').className = 'part-container';
    window.scrollTo(0,0);

  } else if(numValue === 2){
    document.getElementById('part-two-section').className = 'part-hide';
    document.getElementById('part-three-section').className = 'part-container';
    document.getElementById('part-one').scrollIntoView();

  } else if(numValue === 3){
    document.getElementById('part-three-section').className = 'part-hide';
    document.getElementById('part-four-section').className = 'part-container';
    document.getElementById('part-two').scrollIntoView();

  } else if(numValue === 4){
    document.getElementById('part-four-section').className = 'part-hide';
    document.getElementById('part-five-section').className = 'part-container';
    document.getElementById('part-three').scrollIntoView();

  } else if(numValue === 5){
    document.getElementById('part-five-section').className = 'part-hide';
    document.getElementById('part-six-section').className = 'part-container';
    document.getElementById('part-four').scrollIntoView();

  } else if(numValue === 6){
    document.getElementById('part-six-section').className = 'part-hide';
    document.getElementById('part-seven-section').className = 'part-container';
    document.getElementById('part-five').scrollIntoView();

  } else if(numValue === 7){
    document.getElementById('part-seven-section').className = 'part-hide';
    document.getElementById('part-eight-section').className = 'part-container';
    document.getElementById('part-six').scrollIntoView();

  } else if(numValue === 8){
    document.getElementById('part-eight-section').className = 'part-container';
    document.getElementById('part-seven').scrollIntoView();

  }
}

export var jumpToRecentSection = function(application){

  let sections = ['one','two','three','four','five','six','seven','eight'];

  for(let i = (sections.length-1); i >= 0; i--){

    let sectionFormatted = 'part_' + sections[i] + "_validated";

    if(application[sectionFormatted]){

      document.getElementById('part-one-section').className = 'part-hide';
      sectionTransition(Number(i) + 1);
      break;
    }
  }
}
