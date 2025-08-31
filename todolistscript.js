

let ctr = 1;

function addtodolist(){
if(document.querySelector("input").value != ""){
   //Read the element
   let readval = document.querySelector("input").value;
   //Create a new div
   let divelement = document.createElement("div");
   divelement.setAttribute("id",ctr);
   
   divelement.innerHTML = "<div>" + readval + "<button onClick='removefromthelistbutton("+ctr+")'> Delete</button></div>";
   ctr = ctr + 1;
   document.querySelector("body").appendChild(divelement);
   document.querySelector("input").value = "";
}
}
function removefromthelistbutton(id){
  console.log(id);
  
        const element = document.getElementById(id);
        element.parentNode.removeChild(element);
} 