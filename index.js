
const add_task_task_btn = document.querySelector("#btn_add_note");
const task_to_be_add = document.querySelector("#task_to_add");
const main = document.querySelector("#task_cards");


  

const delete_from_local_storage = (element) =>{
  let get_item_from_ls =JSON.parse(localStorage.getItem("notes"));
  let arr_after_deltion_of_element =[]
  let arr= get_item_from_ls;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      continue;
    }
    else{
      arr_after_deltion_of_element.push(arr[i])
    }

    
  }
  localStorage.setItem("notes",JSON.stringify(arr_after_deltion_of_element));

  
}
  

  


const display_old_notes = ()=>{
  let get_item_from_ls =JSON.parse(localStorage.getItem("notes"));
  if (get_item_from_ls !=null) {
    let arr = get_item_from_ls;
    for (let i=0; i<arr.length; i++) {
      const note = document.createElement("div")
  note.classList.add("note");
  note.innerHTML =`<div class="card mx-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Note</h5>
    <p class="card-text">${arr[i]}</p>
    <a  id ="delete" class="btn btn-primary">delete</a>
  </div>
</div>`;
note.querySelector("#delete").addEventListener('click',(e =>{
  note.remove()
  delete_from_local_storage(note.querySelector(".card-text").innerHTML)
}))

main.appendChild(note);
      
      
    }
    
  }

}
display_old_notes()
const updateLocalStorage = ()=>{
  let get_item_from_ls =JSON.parse(localStorage.getItem("notes"));
  if (get_item_from_ls ==null) {
    let arr =[]
    arr.push(task_to_be_add.value)
    task_to_be_add.value ="";
    
    localStorage.setItem("notes",JSON.stringify(arr));
    
    
  }
  else{
    let arr = get_item_from_ls;
    arr.push(task_to_be_add.value);
    localStorage.setItem("notes",JSON.stringify(arr));
    task_to_be_add.value ="";

  
  }

  
  

  
   
}
add_task_task_btn.addEventListener("click",(e)=>{

  const note = document.createElement("div")
  note.classList.add("note");
  note.innerHTML =`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Note</h5>
    <p class="card-text">${task_to_be_add.value}</p>
    <a  id ="delete" class="btn btn-primary">delete</a>
  </div>
</div>`;
note.querySelector("#delete").addEventListener('click',(e =>{
  note.remove()
  
}))

main.appendChild(note);
updateLocalStorage();
}) 
