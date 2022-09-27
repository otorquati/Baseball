/**
 * @param {string} : String to be tested for validity
 * @return {boolean} : Retruns true if the string is vald else false
 */
var isValid = function(s){
let a=[];
let result=false;
console.log(s.length);
console.log(`s= ${s}`);
// Verifica p comprimento de s (de 1 a 104)
if ((s.length<1)||(s.length>104)) return false;

// Verificar se s contem caracteres válidos
for(i=0;i<=s.length-1;i++){
  if ((s[i]=='(')||(s[i]==')')||(s[i]=='{')||(s[i]=='}')||(s[i]=='[')||(s[i]==']')){
    a.push(s[i]);
    console.log(`a = ${a}`);
  }else{
    return result;
  }
}
var cp=0;
var cc=0;
var cch=0;
a=[];
// Verificar a ordem dos caracteres
for( i=0;i<=(s.length); i++){
a=s[i]
  switch (a){
    case '(':
      if(cp==0){
        cp+=1;
      } else {
        cp=cp+cch+cc+1;
      }
      break;
    case '{':
      if(cch==0){
        cch+=1;
      } else {
        cch=cp+cch+cc+1;
      }
      break;
    case '[':
      if(cc==0){
        cc+=1;
      } else {
        cc=cp+cch+cc+1;
      }
      break;
    case ')':
      cp-=1;
      break;
    case '}':
      cch-=1;
      break;
    case ']':
      cc-=1;    
  }
console.log(`cp= ${cp} cch= ${cch} cc= ${cc}`);
}
if ((cc==0) && (cch==0) && (cp==0)){result=true};
return result;
};

let s=['(','}','{',']','[',')'];
if (isValid(s)) console.log("valid");
else console.log("invalid");