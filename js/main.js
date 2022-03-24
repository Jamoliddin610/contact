const elForm = document.querySelector("#form")
const elBtnGroup = document.querySelector('#btn-group')
const elListGroup = document.querySelector("#wrapperList")
let elFirstInput = document.querySelector("#exampleInput1")
let elSecondInput = document.querySelector("#exampleInput2")
let elThridInput = document.querySelector("#exampleInput3")
let elFourInput = document.querySelector("#exampleInput4")



let newArr = []
let newListArr = []

elForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    newArr.push({
        name:elFirstInput.value,
        surname:elSecondInput.value,
        person:elThridInput.value,
        phone:elFourInput.value,
    })
    newListArr = newArr.map((items)=>{
        return `<li class="wrapper__items d-flex justify-content-between border-bottom border-primary align-items-center">
          <div class="wrapper__about align-items-start justify-content-center d-flex flex-column">
            <h2 class="wrapper__name fw-bolder">${items.name}  ${items.surname}</h2>
            <div class="wrapper__about-inner d-flex align-items-center">
              <span class="wrapper__tel me-3">+998${items.phone}</span>
            <p class="wrapper__wh text-primary fw-bolder text-lowercase p-0 m-0">${items.person}</p>
            </div>
          </div>
          <a href="tel:+998${items.phone}" class="bg-success d-flex align-items-lg-center justify-content-center text-decoration-none wrapper__link">Call</a>
        </li>`
    })
    elListGroup.innerHTML = newListArr.join("")
    console.log(newArr);

    (elFirstInput.value = ""),(elSecondInput.value = ""),(elThridInput.value = ""),(elFourInput.value = "");
})
elBtnGroup.addEventListener('click',(e)=>{
    let newTypeArr = newArr.filter((item)=>{
        return item.person == e.target.textContent;
    });
    if (e.target.textContent == "All") {
        newTypeArr = newArr;

    }
    let newListArray = newTypeArr.map((item)=>{
        return `<li class="wrapper__items d-flex justify-content-between border-bottom border-primary align-items-center">
          <div class="wrapper__about align-items-start justify-content-center d-flex flex-column">
            <h2 class="wrapper__name fw-bolder">${item.name}  ${item.surname}</h2>
            <div class="wrapper__about-inner d-flex align-items-center">
              <span class="wrapper__tel me-3">+998${item.phone}</span>
            <p class="wrapper__wh text-primary fw-bolder text-lowercase p-0 m-0">${item.person}</p>
            </div>
          </div>
          <a href="tel:+998${item.phone}" class="bg-success d-flex align-items-lg-center justify-content-center text-decoration-none wrapper__link">Call</a>
        </li>`
    })
    elListGroup.innerHTML = newListArray.join("")
})