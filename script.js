window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // timer
    function countTimer(deadline) {

        let timerDays = document.querySelector('#timer-days'),
            timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');


        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,

            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(((timeRemaining / 60) / 60) % 24),
            days = Math.floor(((timeRemaining / 60) / 60) / 24);

            return {timeRemaining, days, hours, minutes, seconds};
        }

        function updateClock() {
            let timer = getTimeRemaining();

            if (timer.days < 10) {
                timerDays.textContent = "0" + timer.days;
            } else {
                timerDays.textContent = timer.days;
            }

            if (timer.hours < 10) {
                timerHours.textContent = "0" + timer.hours;
            } else {
                timerHours.textContent = timer.hours;
            }

            if (timer.minutes < 10) {
                timerMinutes.textContent = "0" + timer.minutes;
            } else {
                timerMinutes.textContent = timer.minutes;
            }

            if (timer.seconds < 10) {
                timerSeconds.textContent = "0" + timer.seconds;
            } else {
                timerSeconds.textContent = timer.seconds;
            }

            if (timer.timeRemaining > 0) {
                setTimeout(updateClock, 1000);
            } else {
                timerDays.textContent = '00';
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }

        updateClock();
    }

    countTimer('2 january 2020 12:00');

});