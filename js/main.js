let form = document.querySelector("form");

let name = document.getElementById("exampleInput1");
let surname = document.getElementById("exampleInput2");
let relative = document.getElementById("disabledSelect");
let phone = document.getElementById("exampleInput4");
let relavBtn = document.getElementById("relative");
let list = document.getElementById("wrapperList");
let allBtn = document.getElementById("all");
let friendBtn = document.getElementById("friends")
let workmateBtn = document.getElementById("workmates")




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
            <div class="wrapper__about-inner d-flex align-items-center">
              <span class="wrapper__tel me-3">+998 ${tel}</span>
            <p class="wrapper__wh text-primary fw-bolder text-lowercase p-0 m-0">${relative_ch}</p>
            </div>
          </div>
          <a href="tel:${tel}" class="bg-success d-flex align-items-lg-center justify-content-center text-decoration-none wrapper__link">Call</a>`
    list.appendChild(li)



    name.value="";
    surname.value = "";
    relative.value = "";
    phone.value = "";

});



relavBtn.addEventListener("click", () => {
    let text = document.querySelectorAll('.wrapper__wh')
        for (let i = 0; i < text.length; i++) {
            if(text[i].textContent == relavBtn.textContent){
                text[i].parentNode.parentNode.parentNode.className = 'wrapper__items d-flex justify-content-between border-bottom border-primary align-items-center'
            }
            else{
                text[i].parentNode.parentNode.parentNode.className = 'd-none'
            }
        }
    
})

friendBtn.addEventListener("click", () => {
    let text = document.querySelectorAll('.wrapper__wh')
    for (let i = 0; i < text.length; i++) {
        if (text[i].textContent == friendBtn.textContent) {
            text[i].parentNode.parentNode.parentNode.className = 'wrapper__items d-flex justify-content-between border-bottom border-primary align-items-center'
        }
        else {
            text[i].parentNode.parentNode.parentNode.className = 'd-none'
        }
    }

})
workmateBtn.addEventListener("click", () => {
    let text = document.querySelectorAll('.wrapper__wh')
    for (let i = 0; i < text.length; i++) {
        if (text[i].textContent == workmateBtn.textContent) {
            text[i].parentNode.parentNode.parentNode.className = 'wrapper__items d-flex justify-content-between border-bottom border-primary align-items-center'
        }
        else {
            text[i].parentNode.parentNode.parentNode.className = 'd-none'
        }
    }

})

allBtn.addEventListener('click',()=>{
    let li = document.querySelectorAll('li')
    for (let i = 0; i < li.length; i++) {
        li[i].className = 'wrapper__items d-flex justify-content-between border-bottom border-primary align-items-center'
    }
})