function changeAccumulate(isInterval) {
    let randomCost=Math.round(Math.random()*(100 - 10)+10);
    let randomStages=Math.round(Math.random()*(4 - 1) +1);

    $('.accumulate__meter-cost').val(randomCost);
    $('.accumulate__meter-stages').val(randomStages);
    $('.accumulate__stages_value, .accumulate__cost_value').animate({
        'font-size':0
    },250,function () {
        $('.accumulate__stages_value').html(randomStages);
        $('.accumulate__cost_value').html(`${randomCost*100} &#8381;`);
        $('.accumulate__stages_value, .accumulate__cost_value').animate({
            'font-size':24
        },250);
    });
    if(isInterval) {
        $('.accumulate__days, .accumulate__seats').animate({
            'font-size':0
        },250,function () {
            let days=Math.round(Math.random()*(10 - 1)+1);
            let seats=Math.round(Math.random()*(40 - 1)+1);
            $('.accumulate__days').val(days);
            $('.accumulate__seats').val(seats);
            $('.accumulate__days, .accumulate__seats').animate({
                'font-size':20
            },250);
        });
    }
}

let accumulateInterval = setInterval(()=> {
    changeAccumulate(true);
},10000);

$('.accumulate__days,.accumulate__seats').on('input',function () {
    changeAccumulate();
})