function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
 return document.querySelector('.target');
}

function increaseRankBy(n){
  let goodies = document.querySelectorAll('ul.ranked-list li');

  for(var i of goodies) {
    goodies[i].innerHTML = parseInt(goodies[i].innerHTML) + n;
  }
}


function deepestChild(){
 return document.querySelector('div#grand-node div div div div');
}
