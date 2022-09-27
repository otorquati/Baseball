/**
 * @param {string} : String to be tested for validity
 * @return {boolean} : Retruns true if the string is vald else false
 */
var isValid = function(s){
let a=[];
console.log(s.length);
// Verifica p comprimento de s (de 1 a 104)
if ((s.length<1)||(s.length>104)) return false;

// Verificar se s contem caracteres válidos
for(i=0;i<=s.length-1;i++){
  if (a==(s=='('||s==')'||s=='{'||s=='}'||s=='['||s==']')){
    a+=s;
  }else{
    return false;
  }
}
// Verificar a ordem dos caracteres

// definir tipo de caracter
// verificar proximo caracter

return true;
};

let s=['(',')','{','}','[',']'];
if (isValid(s)) console.log("valid");
else console.log("invalid");