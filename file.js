let item =document.getElementById("itme")
let todobox =document.getElementById("todobox")

item.addEventListener("keyup",function(event){
    console.log(event.key);
    if(event.key == "Enter"){
        addtodo(this.value);
        this.value=""
    }
})

const addtodo=(item)=>{
    const listitem=document.createElement("li")
    listitem.innerHTML=`
    ${item}
    <i class="fa-solid fa-xmark"></i>`;

    listitem.addEventListener("click",()=>{
        listitem.classList.toggle("done")
    })



    todobox.appendChild(listitem)
}