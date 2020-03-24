let timer_minute = $('span#minute');
let timer_second = $('span#second');

let reset_button = $('button#reset');
let start_button = $('button#start');

timer_minute.html('00');
timer_second.html('00');

let timer_number_second = parseInt(timer_second.html());
let timer_number_minute = parseInt(timer_minute.html());

start_button.click(() => {

    if (start_button.text() == 'start') {
        timer_interval = setInterval(start_timer, 1000);

        reset_button.css('display', 'none');
        start_button.html('stop');
        start_button.css('background', '#f32013');
    } else
        stop_timer();
});

let timer_interval;

function start_timer() {
    timer_number_second++;

    if (timer_number_second < 10)
        timer_second.html('0' + timer_number_second);
    else
        timer_second.html(timer_number_second);

    if (timer_number_second == 60) {
        timer_number_second = 0;
        timer_second.html('0' + timer_number_second);

        if (timer_number_minute < 9) {
            timer_number_minute++;

            timer_minute.html('0' + timer_number_minute);
        } else {
            timer_number_minute++;

            timer_minute.html(timer_number_minute);
        }
    }
}

function stop_timer() {
    clearInterval(timer_interval);

    reset_button.css('display', 'block');
    start_button.html('start');
    start_button.css('background', '#4bb543');
}

// reset it all
reset_button.click(() => {
    timer_number_second = '00';
    timer_number_minute = '00';
    timer_second.html(timer_number_second);
    timer_minute.html(timer_number_minute);
});