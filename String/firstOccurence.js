


function first(s1, s2) {

  for(let i = 0; i < s1.length; i++) {

    let found = true;

    for(let j = 0; j < s2.length; j++) {

      let char = s1.charAt(i + j);
      let char2 = s2.charAt(j);

      if(char !== char2) {
        found = false;
        break;
      }
    }

    if(found) {
      return i;
    }
  }

  return -1;
}

console.log(first("farazlovewaliya", "waliya"));
