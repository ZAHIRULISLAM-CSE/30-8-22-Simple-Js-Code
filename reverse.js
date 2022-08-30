 var speech="iam Joy";
 length=speech.length;
 rev=speech.length;
 var array=[];

 for(i=0;i<length;i++){
    array[i]=speech[rev-1]
    rev--;
 }
 console.log(array);


 //without array

 var speech="iam Joy";
 length=speech.length;
 rev=speech.length;

 for(i=0;i<length;i++){
   console.log(speech[rev-1])
    rev--;
 }
 //proper 

 function reverse(string){
   var string1="";
   for(i=0;i<string.length;i++){
    string1=string[i]+string1;
   }
   return string1

 }

 speech1="iam going to school";
 var result=reverse(speech1);
 console.log(result);


