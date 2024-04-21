function formatTime(hours, minutes, seconds) {
    return {
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
    };
}

// Функція для оновлення таймера
function updateTimer() {
    // Парсимо рядок часу
    let hours = parseInt(document.getElementById('hours').textContent);
    let minutes = parseInt(document.getElementById('minutes').textContent);
    let seconds = parseInt(document.getElementById('seconds').textContent);

    // Зменшуємо час на одну секунду
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                // Таймер завершено
                clearInterval(timerInterval);
                // alert('Час вийшов!');
                return;
            }
        }
    }

    // Оновлюємо вміст таймера
    const formattedTime = formatTime(hours, minutes, seconds);
    document.getElementById('hours').textContent = formattedTime.hours;
    document.getElementById('minutes').textContent = formattedTime.minutes;
    document.getElementById('seconds').textContent = formattedTime.seconds;
}

// Оновлюємо таймер кожну секунду
let timerInterval = setInterval(updateTimer, 1000);