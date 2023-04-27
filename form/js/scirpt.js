let all = document.querySelector('[data-all]')
let needspan = document.querySelector('[data-need]')
let success = document.querySelector('[data-success]')
let errorSpan = document.querySelector('[data-error]')

let bird = document.querySelector('.birds')
let box = document.querySelector('.box')

setTimeout(() => {
    box.style.display = 'flex'
}, 2000)
setTimeout(() => {
        bird.style.display = 'none'
        box.style.margin = "0 auto"

    }, 2050)


//onsubmit

let form = document.forms.fill
let formInp = form.querySelectorAll('input')
let necessarily = form.querySelectorAll('[data-nec]')
let inpDiv = form.querySelectorAll('.necessarily p')
let need = form.querySelector('.need')
let btn = document.querySelector('button')

form.onsubmit = (event) => {
    event.preventDefault()

    let errors = ''
    necessarily.forEach(inp => {

        inp.style.border = '2px solid #4200FF'
        if (inp.value.length === 0) {
            inp.style.border = '2px solid red'

            errors += `${inp.name}`
        }
        inpDiv.forEach(p => {
            if (inp.value.length === 0) {
                p.classList.add('error')
            } else {
                inpDiv.forEach(el => el.classList.remove('errror'))
                p.classList.add('active')

            }
        })

    }
    )
    if (!errors) {
        submit()
    } else {
        needspan.innerHTML =  errors.split(',').length - 1;
        errorSpan.innerHTML =  errors.split(',').length - 1;
    }
}
console.log(need);

function submit() {
    let user = {}
    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })


    console.log(user);
    form.reset()
}
