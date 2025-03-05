function addTodo() {
    const input = document.querySelector('input')
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    li.onclick = () => ul.removeChild(li)
    li.textContent = input.value
    ul.appendChild(li)
}