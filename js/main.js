 function mosalas(){
    var values = document.getElementById("weight").value;

    for(i=0 ; i< values ;i++){
        document.write("<br>");
       for(j=0;j<i;j++){
               document.write("*");
       }
    }
 }
 