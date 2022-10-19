function ReverseString(S) {
  var result = '';
  // Setar a variáveis
  // @normal - string atual
  // @temp - string invertida
  // i - contador
  let normal=S;
  let ltemp='';
  let rTemp='';
  // Percorre a string normal nos dois sentidos
  for( let i=0;i<=S.length-1;i++){
    j=S.length-1-i;
    ltemp+=(S[i]>='A')&&(S[i]<='z')?S[i]:'';
  }
  for (i=ltemp.length-1; i>=0; i--){
  rTemp+=ltemp[i];
  }
  console.log(rTemp);
  ltemp='';
  c=0;
  for(i=0;i<=S.length-1;i++){
    if ((S[i]>='A')&&(S[i]<='z')){
      ltemp+=rTemp[c];
      c++;
    }else{
      ltemp+=S[i];
    }
  }
  result=ltemp;
  return result;
}

var S='z!abdc*<jjk!!';
console.log(ReverseString(S));