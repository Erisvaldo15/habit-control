import elements from "./exports/elements.js"

const dateNow = new Date()

// let tomorrow = dateNow.setDate(dateNow.getDate() + 6)
// let dateHabit = new Date(tomorrow).toLocaleDateString("pt-BR")

// console.log(dateHabit)

for (let index = 0; index <= 11; index++) {

    let divDay = elements.days.appendChild(document.createElement('div'))
    let date = divDay.appendChild(document.createElement('p'))

    let afterDay = dateNow.setDate(dateNow.getDate() + index)
    let dateHabit = new Date(afterDay).toLocaleDateString("pt-BR").split('/')

    divDay.classList.add('day')
    date.textContent = `${dateHabit[0]}/${dateHabit[1]}`
 
    for (let index = 1; index <= 5; index++) {
        let checkbox = divDay.appendChild(document.createElement('input'))
        checkbox.type = 'checkbox'
    }

}