function validation(){
    var form = document.getElementById("form");
    var Email = document.getElementById("one");
    var Username = document.getElementById("two");
    var Password = document.getElementById("three");
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(Email.matches(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHtml = "Your Email address is valid";
        text.style.color = "#00ff00";
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHtml = "please Enter Valid Email";
        text.style.color = "#00ff00";
    }
}