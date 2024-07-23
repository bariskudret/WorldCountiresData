
import countrie  from "./counteris.js";
import { alignmentArray, alignmentLastAdd } from "./util.js"


const table = document.querySelector('.fixed');
const buttonWord = document.querySelector('.startWord');
const buttonText = document.querySelector('.textButton');
const input = document.querySelector('input');
const buttonAligment = document.querySelector('#orderby');

let  showArray = [];
//console.log(countrie);

function removeChildren(){
   Array.from(table.children).forEach(child =>
    child.remove()
   );
}

buttonAligment.addEventListener('click',()=>{
    removeChildren();
    order();
});

buttonText.addEventListener('click', ()=>{

    removeChildren();
    searchAnyWord();
    
    
});

buttonWord.addEventListener('click', ()=>{

    removeChildren();
    createTable();

});

function createTable()
{   
      
    for(let i = 0 ; i<countrie.length ; i+=4)
    {   
        let tr = document.createElement("tr");

        // her satırda 5 hücre olacak.
        for(let j = i ; j< i+4 && countrie.length; j++)
            {
                let td = document.createElement('td');
                td.textContent = countrie[j];
                tr.appendChild(td); // satıra hücre ekle
            }

        table.appendChild(tr); // tabloy satır ekle
     }
        
}

function searchAnyWord(){

       

 
     let inputText = input.value.toLowerCase();

      if(inputText === '' )
        return ;

     let counters = []; 
  
     for ( let i = 0 ; i<countrie.length ; i++)
        {   
            countrie[i] = countrie[i].toLowerCase();
            if( typeof countrie[i] === 'string' && countrie[i].includes(inputText))
                {
                    counters.push(countrie[i]); // Eşleşen kelimeleri dizide sakla
                }
        }
    
    for( let j = 0 ; j<counters.length ; j+=4)
        {
            let tr = document.createElement("tr");

            for(let k = j ;  k< j+4 && k<counters.length ; k++)
            {

                let td = document.createElement('td');
                td.textContent = counters[k].toUpperCase();
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    
}
function order()
    {   
        let array ;        

        //showArray = countrie.slice();

        if(showArray[0] === 'Afghanistan')
        {   showArray.splice(0, showArray.length);
            array = alignmentLastAdd(countrie);
            showArray = showArray.concat(array);

        }
        else{
            showArray.splice(0, showArray.length);
            array = alignmentArray  (countrie);
            showArray = showArray.concat(array);
        }
     

        for( let i = 0 ;i< showArray.length ; i+=4)
        {
            let tr = document.createElement("tr");

            for(let k = i ; k<i+4 && k<showArray.length ; k++ )
            {   
                        
                let td = document.createElement('td');
                td.textContent = showArray[k].toUpperCase();
                tr.appendChild(td);

            }
            table.appendChild(tr);
        }
        
    }  