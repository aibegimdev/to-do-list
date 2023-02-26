

const input = document.querySelector('.text-input')
const btn = document.querySelector('.add-btn')
const ul= document.querySelector('.list')



function addNewList() {
    let newList = `<li class="list-group-item d-flex justify-content-between align-items-center">
<span class="align-items-center d-flex justify-content-between">
<input type="checkbox" class="mx-2">
${input.value}
</span>
<button class="del-btn btn btn-danger">delete</button>
</li>`
    ul.innerHTML += newList
}


btn.addEventListener('click', () => {
    addNewList()
})

ul.addEventListener('click', (event)=> {
    console.log(event.target.classList)
    if (event.target.classList.contains('del-btn')){
      event.target.parentNode.remove()
    }
})

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        addNewList()
    }
})


  localStorage.setItem('task', JSON.stringify([{id:1, title: 'go to school'}]))
const tasks = getItem("task", JSON.parse)

