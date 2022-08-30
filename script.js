const item = document.getElementById('item')
const toDoBox = document.getElementById('to-do-box')

item.addEventListener('keyup',
function(event){
    if(event.key == 'Enter'){
        
        addToDo(this.value)
        this.value = ''
    }
})

const addToDo = (item) =>{
    const listItem = document.createElement('li')
    console.log(item)
    listItem.innerHTML = `${item}<i class="fas fa-times"></i>`
    toDoBox.appendChild(listItem)
    listItem.addEventListener('click',function(){
        this.classList.toggle('done')
    })
    listItem.querySelector('i').addEventListener('click',
    function(){
        listItem.remove()
    })
}