/* Funções do Analisador de Placar 
var analise = document.getElementById('analise');*/
var sdados='';
function CalPoints(ops){
  var result = null;
  let registro=[];
  result = 0;
 //let n=ops.length;
  // preenche placar
  let c='';
  let a=[];
  for( let pos=0; pos<=ops.length-1;pos++){
      c+=ops[pos];
  }
  if (ops.length>0) {
    for (let pos=0;pos<=ops.length-1;pos++){
      //alert(`pos = ${pos}`)
      s=(ops[pos]);
      s=(s>=0 && s<=9)?Number(s):s;
      c=registro.length;
      switch (s){
        case '+':
          s=Number(registro[c-1])+Number(registro[c-2]);
          break
        case 'D':
            s=(Number(registro[c-1])*2);
            break
        case 'C':
            registro.pop();
        }
        if(!isNaN(s)){
          registro.push(s);
        }
          }
        for(let i=0; i<=registro.length-1; i++){
          result+=Number(registro[i]);
        }
  } else {
    alert(`Adicione valores`);
  }
  return result;
} 

var ops = ["5","-2","4","C","D","9","+","+"];
console.log(CalPoints(ops));
var ops = ["5","2","C","D","+"]
console.log(CalPoints(ops));
