function correctData(date) {
    return date < 10 ? "0" + date :   date;
}

function saleTime(){
  let endDate = new Date(2024, 8, 30);
    let nowDate = new Date();
    let finish = endDate - nowDate;
    
    let day = Math.floor (finish/(24*60*60*1000))
    let hours = Math.floor((finish % (24 * 60 * 60 * 1000))/(60 * 60 * 1000))
    let minutes = Math.floor(( finish % (60 * 60*1000))/(60 * 1000))
    let seconds = Math.floor((finish%(60 * 1000))/1000)

    let timerValue = document.getElementsByClassName("timetitle")
    timerValue[0].innerHTML=correctData(day);
    timerValue[1].innerHTML=correctData(hours);
    timerValue[2].innerHTML=correctData(minutes);
    timerValue[3].innerHTML=correctData(seconds);



    if (finish <=0) {
        timerValue[0].innerHTML = "00"
        timerValue[1].innerHTML = "00"
        timerValue[2].innerHTML = "00"
        timerValue[3].innerHTML = "00"
    }
}
saleTime()

setInterval(() => saleTime(), 1000);