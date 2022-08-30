var speech="Iam Joy    Iam a       Student Of Rajshahi University."
var count=0;

for(var i=0;i<speech.length;i++){
    if(speech[i]==" "&&speech[i-1]!=' ' ){
        count++;
    }
}
count++
console.log(count);