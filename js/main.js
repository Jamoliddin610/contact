let form = document.querySelector("form");

let name = document.getElementById("exampleInput1");
let surname = document.getElementById("exampleInput2");
let relative = document.getElementById("exampleInput3");
let phone = document.getElementById("exampleInput4");
let btnGr = document.getElementById("relative")
let list = document.getElementById("wrapperList");

btnGr.addEventListener('click',filterItems)

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let firstname = name.value;
    let secondname = surname.value;
    let relative_ch = relative.value;
    let tel = phone.value;

    let li = document.createElement('li');
    li.className = 'wrapper__items d-flex justify-content-between border-bottom border-primary align-items-center'
    li.innerHTML = `<div class="wrapper__about align-items-start justify-content-center d-flex flex-column">
            <h2 class="wrapper__name fw-bolder">${secondname+" "+firstname} </h2>
            <p class="wrapper__tel">${tel}</p>
          </div>
          <a href="tel:${tel}" class="bg-success d-flex align-items-lg-center justify-content-center text-decoration-none wrapper__link">Call</a>`
    list.appendChild(li)



    name.value="";
    surname.value = "";
    relative.value = "";
    phone.value = "";

})
btnGr.value= 'relative'
function filterItems(e){
    let n = list.childNodes
    if (relative.value == e.target.value) {
        n.className ='wrapper__items d-flex justify-content-between border-bottom border-primary align-items-center'
    }else{
        n.className = "d-none"
    }

}