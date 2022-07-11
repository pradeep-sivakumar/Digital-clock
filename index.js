let clock = document.getElementById("clock");

setInterval(update,1000);

function update() {
    
    let date = new Date();
    clock.innerHTML = formatDate(date);

    function formatDate(date){
        let hrs = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        let amOrPm = hrs<12? "AM" : "PM" ;

        hrs = (hrs%12) || 12;
        
        hrs = formatZeroes(hrs);
        min = formatZeroes(min);
        sec = formatZeroes(sec);

        return `${hrs} : ${min} : ${sec} ${amOrPm}`;
    }
    
    function formatZeroes(time) {
        return time<10? "0"+time : time;
    }
}

