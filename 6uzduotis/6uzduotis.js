let namesArray = ['Jacob','Will Jacobs','Vince','Julian','Jacob','Tim','Jo Gill','Erin','Will Baker','Dawn Jacob','Elaine','Alyson','Jacob Laney','Vincenzo', 'Will', 'Timm', 'Jacob' ];

// vardu masyvo papildymas

  document.querySelector('.addName').addEventListener('click', ()=>{

    let nameToArray = document.querySelector('.nameValue');
    let name = nameToArray.value;

    if(name === ''){
      alert('Value to remove is empty.')
      return false;
    }

      namesArray.push(name);
      nameToArray.value = '';

// Papildzius atsinaujina vardu sarasas vaizde     
      generuotiVaizda();
});

function generuotiVaizda(){

  let allNamesHTML = ''

  for(let i = 0; i < namesArray.length; i++){
    let names =  namesArray[i];
    let HTML = `<p>${i+1}. ${names}</p>`;
        allNamesHTML += HTML;
  }
  document.querySelector('.listOfValue').innerHTML = allNamesHTML;
}
generuotiVaizda();


document.querySelector('.searchName').addEventListener('click', ()=>{
  let nameToSearch = document.querySelector('.nameValue');
  let searchName = nameToSearch.value;

  let searchResult = [];

    for(i = 0; i < namesArray.length; i++){
      if(searchName === namesArray[i]){
        continue
      }
      searchResult.push(namesArray[i]);
    }
    
    nameToSearch.value = '';

  let allSearchedNamesHTML ='';

    for(i=0; i<searchResult.length; i++){
      let result = searchResult[i];
      let searchHTML = `<p>${i+1}. ${result}</p>`;
        allSearchedNamesHTML += searchHTML;
      }
    document.querySelector('.listOfResult').innerHTML = allSearchedNamesHTML;
})