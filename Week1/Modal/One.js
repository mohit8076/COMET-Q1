const menu = document.querySelector(".menu");
const sidebar= document.querySelector(".sidebar");
const close = document.querySelector(".close")


menu.addEventListener('click',function(){
    sidebar.classList.toggle('show-sidebar');
});

close.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
})


