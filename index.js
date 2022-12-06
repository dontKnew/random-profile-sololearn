alert("if you see error laoding,,, thats mean profile does not exit then genrate again \n\n After Click wait for image loading.. ");


window.onload = function (){
     
    
    
     document.querySelector("#random").src = "https://api.sololearn.com/Uploads/Avatars/4188281.jpg";
          
     
}

function random(){
var id = (Math.floor(Math.random() * 9000000));

// console.log(Math.floor(100000 + Math.random()*(1000000 + 1 - 100000)))
 document.querySelector("#random").src = 
   "https://api.sololearn.com/Uploads/Avatars/"+id+".jpg";
   console.log(id);
   
   document.querySelector("#profile").href = "https://www.sololearn.com/Profile/"+id+"/?ref=app";
   
   
    document.querySelector("#idp").innerHTML = id;
   

}
