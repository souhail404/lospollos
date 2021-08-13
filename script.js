const menu = document.getElementById('menu');
const icon = document.getElementById('icon');
const j = document.getElementById('j');
const jj = document.getElementById('jj');
const jjj = document.getElementById('jjj');
const jjjj = document.getElementById('jjjj');

icon.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});

j.addEventListener('click',()=>{
    menu.classList.remove('active');
    icon.classList.remove('active');
});
jj.addEventListener('click',()=>{
    menu.classList.remove('active');
    icon.classList.remove('active');
});
jjj.addEventListener('click',()=>{
    menu.classList.remove('active');
    icon.classList.remove('active');
});
jjjj.addEventListener('click',()=>{
    menu.classList.remove('active');
    icon.classList.remove('active');
});

$(document).ready(function(){
   $('.home-image').slick({
      autoplay:true,
      dots:false,
      speed:1000,
   });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 575){
            $('.nav-bar').addClass("active");
        }
        else{
            $('.nav-bar').removeClass("active");
        }
    })
    });
