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



let patterns = {
    name: /^[a-zA-Z ]+$/,
    age: /^\S[0-9]{0,3}$/,
    surname: /^[a-zA-Z ]+$/,
    Aboutyou: /^[a-zA-Z ]+$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    JS: /^[a-zA-Z ]+$/,
    PhoneNumber: /^9989[012345789][0-9]{7}$/,
    HTML: /^[a-zA-Z ]+$/,
    CSS: /^[a-zA-Z ]+$/,
    MomsName: /^[a-zA-Z ]+$/,
    PAPSNAME: /^[a-zA-Z ]+$/,
    car: /^[a-zA-Z ]+$/
}

function validate(regex, field) {
    
    if (regex.test(field.value)) {
        field.style.border = '2px solid rgb(97, 255, 65)'
    } else {
        field.style.border = '2px solid red'
    }

}

formInp.forEach(inp => {
    inp.onkeyup = () => {
        validate(patterns[inp.name], inp)

    }
})
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
                
                inpDiv.forEach(el => el.classList.add('active'))

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
