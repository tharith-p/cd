<script setup lang="ts">

const fourthOfJuly          = new Date(2024, 1, 29).getTime()
const fourthOfJulyNextYear  = new Date(2024 + 1, 1, 28).getTime()
const month                 = new Date().getMonth()

let days      = ref<number>(0)
let hours     = ref<number>(0)
let minutes   = ref<number>(0)
let seconds   = ref<number>(0)


// countdown
onBeforeMount(() => {

    setInterval(function () {
    
        // get today's date
        const today = new Date().getTime();
    
        // get the difference
        let diff;
        if (month > 6) {
            diff = fourthOfJulyNextYear - today;
        } else {
            diff = fourthOfJuly - today;
        }
    
        // math
        days.value      = Math.floor(diff / (1000 * 60 * 60 * 24))
        hours.value     = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        minutes.value   = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        seconds.value   = Math.floor((diff % (1000 * 60)) / 1000)
    }, 1000);
})
</script>

<template>
    <div class="container">
        <div class="balloon white">
            <div class="star-red"></div>
            <div class="face">
                <div class="eye"></div>
                <div class="mouth happy"></div>
            </div>
            <div class="triangle"></div>
            <div class="string"></div>
        </div>

        <div class="balloon red">
            <div class="star"></div>
            <div class="face">
                <div class="eye"></div>
                <div class="mouth happy"></div>
            </div>
            <div class="triangle"></div>
            <div class="string"></div>
        </div>

        <div class="balloon blue">
            <div class="star"></div>
            <div class="face">
                <div class="eye"></div>
                <div class="mouth happy"></div>
            </div>
            <div class="triangle"></div>
            <div class="string"></div>
        </div>
        <div id="timer">
            <div class="days">
                <div class="numbers">{{ days }}</div>{{ days > 1 ? 'days' : 'day' }}
            </div>
            <div class="hours">
                <div class="numbers">{{ hours }}</div>{{ hours > 1 ? 'hours' : 'hour' }}
            </div>
            <div class="minutes">
                <div class="numbers">{{ minutes }}</div>{{ minutes > 1 ? 'minutes' : 'minute' }}
            </div>
            <div class="seconds">
                <div class="numbers">{{ seconds }}</div>{{ seconds > 1 ? 'seconds' : 'second' }}
            </div>
        </div>
        <h1>29th of February counter</h1>
    </div>
    <footer>
        <p>made by <a target="_blank" href="http://172.16.2.9:3031"> tharith</a> ♡</p>
    </footer>
</template>



<style>
@import url('https://fonts.googleapis.com/css?family=Lato:400,700|Montserrat:900');

:root {
    --font: 'Lato', sans-serif;
    --big: 'Montserrat', sans-serif;
    --red: #EF2F3C;
    --white: #F6F4F3;
    --blue: #276FBF;
    --dark: #183059;
    --yellow: #F0A202;

    --star: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

html {
    display: grid;
    min-height: 100%;
}

body {
    display: grid;
    background: var(--dark);
}

.container {
    position: relative;
    margin: auto;
    overflow: hidden;
    width: 650px;
    height: 480px;
}

h1 {
    font-family: var(--font);
    text-align: center;
    margin-top: 2em;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: var(--white);
}

#timer {
    color: var(--white);
    text-align: center;
    text-transform: uppercase;
    font-family: var(--font);
    font-size: .7em;
    letter-spacing: 5px;
    margin-top: 25%;
}

.days,
.hours,
.minutes,
.seconds {
    display: inline-block;
    padding: 20px;
    width: 100px;
    border-radius: 5px;
}

.days {
    background: var(--red);
}

.hours {
    background: var(--white);
    color: var(--dark);
}

.minutes {
    background: var(--blue);
}

.seconds {
    background: var(--yellow);

    .numbers {}
}

.numbers {
    font-family: var(--big);
    color: var(--dark);
    font-size: 4em;
}

.white {
    position: absolute;
    background: var(--white);
    height: 85px;
    width: 75px;
    left: 30%;
    top: 2%;

    .triangle {
        border-bottom: 14px solid var(--white);
    }

    .string {
        background: var(--white);
        border: 1px solid var(--white);
    }
}

.red {
    position: absolute;
    background: var(--red);
    left: 18%;
    top: 9%;
    height: 65px;
    width: 70px;

    .triangle {
        border-bottom: 14px solid var(--red);
    }

    .string {
        background: var(--red);
        border: 1px solid var(--red);
    }
}

.blue {
    position: absolute;
    background: var(--blue);
    height: 80px;
    width: 80px;
    left: 60%;
    top: 5%;

    .triangle {
        border-bottom: 14px solid var(--blue);
    }

    .string {
        background: var(--blue);
        border: 1px solid var(--blue);
    }
}

.balloon {
    border: 1px solid #000;
    border-radius: 50% 50% 50% 50%/ 40% 40% 60% 60%;
    z-index: 2;
}

.eye {
    position: absolute;
    width: 7px;
    height: 7px;
    top: 40%;
    left: 22%;
    background: #000;
    border-radius: 50%;

    &:after {
        content: '';
        left: 35px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #000;
        position: absolute;
    }
}

.mouth {
    position: absolute;
    top: 45%;
    left: 43%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
}

.happy {
    border: 2px solid;
    border-color: transparent #000 #000 transparent;
    transform: rotate(45deg);
}

.triangle {
    position: absolute;
    left: 40%;
    bottom: -10%;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
}

.string {
    position: absolute;
    height: 70px;
    width: 1px;
    left: 48%;
    top: 100%;
    z-index: -1;
}

.star {
    width: 20px;
    height: 20px;
    background: var(--white);
    -webkit-clip-path: var(--star);
    clip-path: var(--star);
}

.star-red {
    width: 30px;
    height: 30px;
    margin-left: 51px;
    margin-top: -5px;
    background: var(--red);
    -webkit-clip-path: var(--star);
    clip-path: var(--star);
}

footer {
    position: fixed;
    bottom: 0;
    right: 0;
    text-transform: uppercase;
    padding: 10px;
    font-family: var(--font);
    font-size: 0.7em;

    p {
        letter-spacing: 3px;
        color: var(--red);
    }

    a {
        color: var(--white);
        text-decoration: none;

        &:hover {
            color: var(--blue);
        }
    }
}
</style>