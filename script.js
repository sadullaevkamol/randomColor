const startBtn = document.querySelector('.start'),
    screens = document.querySelectorAll('.screen'),
    timeList = document.querySelector('.time-list'),
    timeEl = document.querySelector('#time'),
    board = document.querySelector('.board')


let time = 0,
    score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up')
})


timeList.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target.classList.contains('time-btn')) {
        screens[1].classList.add('up')
        let btnAttr = e.target.getAttribute('data-time')
        time = Number(btnAttr)
        startGame();
    }
})

function decreaseTime() {
    if (time === 0) {
        timeEl.parentNode.classList.add('hide')
        board.innerHTML = `Ваш счет: ${score}`
    } else {
        let currentTime = --time;

        if (currentTime < 10) {
            currentTime = `0${currentTime}`;
        }

        timeEl.innerHTML = `00:${currentTime}`;
    }
}

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
}

function createRandomCircle() {
    const circle = document.createElement('div')

    circle.classList.add('circle')

    let { width, height } = board.getBoundingClientRect()

    let size = randomNumber(20, 60);

    let x = randomNumber(0, width - size)
    let y = randomNumber(0, height - size)

    circle.style = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: ${randomColor(1, 5)};
    `

    board.appendChild(circle)

}



function randomColor(min, max) {
    let color = Math.floor(Math.random() * (max - min) + min)
    if (color === 1) return color = 'linear-gradient(90deg, #4216e3 0%, #4c30ec 47%, #6646f7 100%)'
    if (color === 2) return color = 'linear-gradient(90deg, #e3d516 0%, #c9ec30 47%, #f7dd46 100%)'
    if (color === 3) return color = 'linear-gradient(90deg, #16dce3 0%, #30a1ec 47%, #46d4f7 100%)'
    if (color === 4) return color = 'linear-gradient(90deg, #16e342 0%, #75ec30 47%, #46f772 100%)'
    if (color === 5) return color = 'linear-gradient(90deg, #cb16e3 0%, #ec30c3 47%, #f746f7 100%)'
}


board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRandomCircle()
    }
})


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


// const obj = {
//     name: 'John',
//     age: 30
// }



// let userName = obj.name

// let userAge = obj.age



// let {name, age, secondName: secondName = 'Johnson'} = obj


// console.log(name, secondName, age);


// let arr = ['1', '2', 'apple', 'plum']

// let [one, two] = ['1', '2', 'apple', 'plum']


// console.log(one);
// console.log(two);

