function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
 return document.querySelector('.target');
}

function increaseRankBy(n){
  let goodies = document.querySelectorAll('ul.ranked-list li');
  for (const element of goodies) {
    goodies[element].innerHTML = parseInt(goodies[element].innerHTML) + n;
    }
}


function deepestChild(){
 return document.querySelector('div#grand-node div div div div');
}

