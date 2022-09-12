oddNum=(a)=>{
    var b=" ";
    for(i=0;i<a.length;i++){
        
    if(a[i]%2!=0){
        b=b+" "+a[i];
    }
    }
    return b;
    };
    console.log(oddNum([2,5,6,8,7,7,1,3,9]));


    // To upper case

 sting=(a)=>{
        a=a.toUpperCase();
      return a;
      };
      console.log(sting("gowtham is a good boy"));

//// sum of all number in array


sum=(a)=>{
    c=0;
    for(i=0;i<a.length;i++){
c=c+a[i];

    }
  return c;
  };
  console.log(sum([1,2,5,8,9,8,9,8,1,2,5,8,9,8,9,8]));



// all prime number in array

primeNumber=(a)=>{
    var b="";
for(i=2;i<a.length;i++){
    for(j=2;j<a.length;j++){   
if(a[i]%j===0){
    b=b+" "+a[i];
}
}}
return b;
};
console.log(primeNumber([2,2,2,5,5,8,7,7,1,3,9,3,5,11]));

























