const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const countdown = document.getElementById("countdown")
const nextDestination = document.getElementById("next_destination")
const loading = document.getElementById("loading")
const bgm = document.getElementById("bgm")
const musicBtn = document.getElementById("music-btn")
const currentYear = new Data().getFullYear()

// 定义大二结束的那一天（从3.1起大概16周之后）即为2022.6.14
const newDestination = new Data('June 14 $(currentYear+1} 00:00:00')

// 设置背景显示的大二结束那一天
nextDestination.innerText = currentYear + 1 + '07 22'

// 更新倒计时
function updateCountdown() {
    const currentTime = new Data();
    const diff = newDestination - currentTime;
    // 用Math对象 对日 时 分 秒进行换算
    const d = Math.floor(diff / 1000 / 60 / 60 / 24)
    const h = Math.floor(diff / 1000 / 60 / 60) % 24
    const m = Math.floor(diff / 1000 / 60) % 60
    const s = Math.floor(diff / 1000) % 60

    // 对时间进行更新
    days.innerHTML = d
    hours.innerHTML = h < 10 ? '0' + h : h
    minutes.innerHTML = m < 10 ? '0' + m : m
    seconds.innerHTML = s < 10 ? '0' + s : s
}

// 显示时间
setTimeout(() => {
        loading.remove()
        countdown.style.display = 'flex'
        document.styleSheets[0].addRule('body::after', 'background-color:rgba(0,0,0,.1')

    }, 1000)
    // 隔一秒种刷新一次时间
setInterval(updateCountdown, 1000)