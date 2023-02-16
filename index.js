let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

            //   counter-funtion
// document.addEventListener("DOMContentLoaded", ()=>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    } 
    // counter("counter1", 0, 1278, 3000);
    // counter("counter2", 0, 1278, 3000);
    // counter("counter3", 0, 1278, 3000);
    // counter("counter4", 0, 1278, 3000);

})؛


    counter("counter1", 0, 1278, 3000);
    counter("counter2", 0, 1278, 3000);
    counter("counter3", 0, 1278, 3000);
    counter("counter4", 0, 1278, 3000);