const tempo = 3000

function funcionario1() {
    document.querySelector('.time img').src = 'img/veterinario1.png'
    document.querySelector('.time p').innerText = 'Se um dia meu coração for consultado, para saber se andou ' +
        'errado, será difícil negar'
    setTimeout('funcionario2()', tempo)
}

function funcionario2() {
    document.querySelector('.time img').src = 'img/veterinario2.jpg'
    document.querySelector('.time p').innerText = 'meu coração tem mania de amor, amor não é fácil de achar'
    setTimeout('funcionario1()', tempo)
}

const btn = document.querySelector('.footer-bg .github img')
console.log(btn)
btn.addEventListener('mouseover',  () => {
    btn.src = 'img/github2.svg'
} )

btn.addEventListener('mouseout', () => {
    btn.src = 'img/github.svg'
})
