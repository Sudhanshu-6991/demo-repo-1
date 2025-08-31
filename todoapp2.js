function todoComponent(todo){
  const divel = document.createElement("div");
  const h1el = document.createElement("h1");
  const btnel = document.createElement("button");

  h1el.innerHTML=todo.title;
  btnel.innerHTML="Done";

  divel.appendChild(h1el);
  divel.appendChild(btnel);
  
}