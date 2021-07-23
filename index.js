const btnBar = document.querySelector(".btn_bar");

btnBar.addEventListener('click', ()=>{
    console.log("I am pressed");

    document.querySelector(".fa-bars").classList.toggle("fa-times");
    document.querySelector(".mobile_menu").classList.toggle("hide_mobile");
    document.querySelector(".angle_shape ").classList.toggle("hide_mobile");
    
});