let namesArray = ['Jonas', 'Petras', 'Jonas', 'Antanas', 'Kipras', 'Jonas', 'Andrius'];

function generuotiVaizda(){

  let allNamesHTML = ''

  for(let i = 0; i < namesArray.length; i++){
    let names =  namesArray[i];
    let HTML = `<p>${i+1}. ${names}</p>`;
        allNamesHTML += HTML;
  }
  document.querySelector('.left-names').innerHTML = allNamesHTML;
}
generuotiVaizda();

document.querySelector('.unique').addEventListener('click', ()=>{

    let uniqueNamesArray = [];
    let uniqueNames = new Set(namesArray);
    let result = Array.from(uniqueNames);

    for(i=0; i<result.length; i++){
      let name = result[i];
      uniqueNamesArray.push(name);
      }

    let allUniqueNamesHTML = ''

    for(let i = 0; i < uniqueNamesArray.length; i++){
      let uniqueNames =  uniqueNamesArray[i];
      let uniqueHTML = `<p>${i+1}. ${uniqueNames}</p>`;
      console.log(uniqueHTML);
      allUniqueNamesHTML += uniqueHTML;
      }
document.querySelector('.right-names').innerHTML = allUniqueNamesHTML;
})

document.querySelector('.reset').addEventListener('click', ()=>{

document.querySelector('.right-names').innerHTML = "";
})