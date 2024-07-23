
function stringCompare( value1, value2)
{
    if(!containsOnlyLetters(value1) && !containsOnlyLetters(value2))
    {
    return;
    }
    let stringsmall = value1.length > value2.length ? value2 : value1;
    
for(let i = 0 ; i<stringsmall.length ; i++)
    {
      if(value1[i] === value2[i])
        continue;
      
      return value1[i]<value2[i]? value1: value2;
    }    
    return stringsmall;

}

function containsOnlyLetters(str)
{
    return /^[a-zA-Z]+$/.test(str);
}

// seçlilen index ile diğer bütün indexleri karşılaştırma
function alignmentArray(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const result = stringCompare(array[j], array[i]);
            if (result === array[j]) {
                
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
function alignmentLastAdd(array)
{
    for(let i = array.length-1 ; i>0 ; i--)
    {
        for(let j = i-1 ; j>=0; j--)
            {
                const result = stringCompare(array[j] , array[i]);
                if(result === array[j]){
                    const temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
    }
        return array;
}

export {alignmentArray, alignmentLastAdd};