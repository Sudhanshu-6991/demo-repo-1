let cnt = 1;

function todoAppStart(){
  console.log("DEBUG");
  
  if(document.querySelector("input").value != ""){
    // Read the input
    const readval = document.querySelector("input").value;

    //Create the new element
    let newdivelemt = document.createElement("div");
    newdivelemt.setAttribute("id", cnt);
    newdivelemt.innerHTML = "<div>"+readval +" <button onClick = 'removetask("+cnt+")'> Done</button></div>";

    // Add the element to the HTML
    
    document.querySelector("body").appendChild(newdivelemt);

    //Blank the value in present in input
    document.querySelector("input").value ="";

    cnt++;

  }
  else{
    alert("please add some text!!")
  }
}


function removetask(id){
  let removeelemet = document.getElementById(id);
  removeelemet.parentNode.removeChild(removeelemet);
}