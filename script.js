function oddNumber(a){
    var b=" ";
for(i=0;i<a.length;i++){
    
if(a[i]%2!=0){
    b=b+" "+a[i];
}
}
return b;
};
console.log(oddNumber([2,5,6,8,7,7,1,3,9]));


// function for coverting strings to capital letter;

function sting(a){
  a=a.toUpperCase();
return a;
};
console.log(sting("sandeep"));

// sum of all number in array

function sum(a){
    c=0;
    for(i=0;i<a.length;i++){
c=c+a[i];

    }
  return c;
  };
  console.log(sum([1,2,5,8,9,8,9,8]));
  

  // returning all prime number in array

  function primeNumber(a){
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


// palindrome 
function isPalindrome(N)
{
    let str = "" + N;
    let len = str.length;
    for (let i = 0; i < parseInt(len / 2, 10); i++)
    {
        if (str[i] != str[len - 1 - i ])
            return false;
    }
    return true;
}


function isPalinArray(arr, n)
{
   
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}
 
let arr = [ 121, 131, 20 ];


let n = arr.length;

let res = isPalinArray(arr, n);
if (res == true)
    console.log("Array is a PalinArray");
else
    console.log("Array is not a PalinArray");


// median of two array

function getMedian(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
  
   
    for (count = 0; count <= n; count++)
    {
       
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
  
    
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
       
        if (ar1[i] <= ar2[j])
        {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
  
    return (m1 + m2)/2;
}
  

var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    document.write("Median is "+ getMedian(ar1, ar2, n1));
else
    document.write("Doesn't work for arrays of unequal size");

// removing dublicates from array

function dublicate(chars){
    let uniqueChars = [...new Set(chars)];
return uniqueChars;
}

console.log(dublicate([1,1,2,2,2,5,8,6,8,10,11]));





// rotating an array

function RightRotate(a, n, k)
{
 
    
    k = k % n;
 
    for (let i = 0; i < n; i++) {
        if (i < k) {
 
            console.log(a[n + i - k] + " ");
        }
        else {

            console.log((a[i - k]) + " ");
        }
    }
}
 
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 4;
 
RightRotate(Array, N, K);
 