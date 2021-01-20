const array = [1, 2, 3, 4];
const cage = document.querySelector('.cage');
const cage_shadow = document.querySelector('.cage-shadow');
const button = document.querySelector('button');

const happy_colors = [
    {
        light: 'e7e42d',
        dark: 'cac829',
        name: 'yellow',
        adder: 0,
        id: 0,
    },
    {
        light: '3572c2',
        dark: '266097',
        name: 'blue',
        adder: 0,
        id: 1,
    },
    {
        light: '35c270',
        dark: '269755',
        name: 'green',
        adder: 0,
        id: 2,
    },
    {
        light: 'b42b2b',
        dark: '972626',
        name: 'red',
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

const start = () => {
    render_balls();
    determine_winner();
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
            console.log(`${color.name} is a winner!`);
        }
        if (color.adder === Math.floor(array.length / 2)) {
            potential_winner.push(color.name);
        }
        if (color.adder == 1) {
            googled.push(color.name);
        }
    }

    if (potential_winner.length == 1) {
        console.log(potential_winner + ' is a winner!');
    }

    if (googled.length === array.length) {
        console.log('You just got googled!');
    }
};

button.addEventListener('click', start);
