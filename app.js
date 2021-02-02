const array = [1, 2, 3, 4];
const cage = document.querySelector('.cage');
const cage_shadow = document.querySelector('.cage-shadow');
const button = document.querySelector('.goBtn');
const select = document.querySelector('select');
const input = document.querySelector('input');
const body = document.querySelector('body');
const restart_Btn = document.querySelector('#restart-button');
const form = document.querySelector('form');
let heading = document.querySelector('h1');

const happy_colors = [
    {
        light: 'e7e42d',
        dark: 'cac829',
        name: 'Yellow',
        adder: 0,
        id: 0,
    },
    {
        light: '3572c2',
        dark: '266097',
        name: 'Blue',
        adder: 0,
        id: 1,
    },
    {
        light: '35c270',
        dark: '269755',
        name: 'Green',
        adder: 0,
        id: 2,
    },
    {
        light: 'b42b2b',
        dark: '972626',
        name: 'Red',
        adder: 0,
        id: 3,
    },
];

let random_color;
let potential_winner = [];
let googled = [];

const randomColor = () => {
    let random_number = Math.floor(Math.random() * Math.floor(4));
    for (let color of happy_colors) {
        if (random_number === color.id) {
            random_color = color;
            random_color.adder++;
        }
    }
};

let template = '';

const start = (e) => {
    e.preventDefault();
    render_balls();
    determine_winner();
    restart_Btn.classList.remove('hide');
    form.classList.add('hide');
};

const render_balls = () => {
    array.forEach((element) => {
        randomColor();
        template += `   
        <div class="container">
        <div class="ball" style="background: linear-gradient(360deg, #${random_color.dark} 35%, #${random_color.light} 100%);"></div>
        <div class="shadow"></div>
        </div>
    `;
        cage.innerHTML = template;
        cage.appendChild(cage_shadow);
    });
};

const determine_winner = () => {
    for (let color of happy_colors) {
        if (color.adder >= Math.floor(array.length / 2 + 1)) {
            heading.innerHTML = `${color.name} is a winner!`;
        }
        if (color.adder === Math.floor(array.length / 2)) {
            potential_winner.push(color.name);
        }
        if (color.adder == 1) {
            googled.push(color.name);
        }
    }

    if (potential_winner.length == 1) {
        heading.innerHTML = `${potential_winner} is a winner!`;
    }
    if (potential_winner.length > 1) {
        heading.innerHTML = `We have a tie, place your bets again!`;
    }

    if (googled.length === array.length) {
        heading.innerHTML = `You just got googled!`;
    }
};

button.addEventListener('click', start);
restart_Btn.addEventListener('click', () => {
    window.location.reload();
});
