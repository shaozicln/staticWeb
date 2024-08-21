email.onchange = function(){
    let email = this.value;
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if(!reg.test(email)){
        alert("邮箱格式不正确，请重新输入！");
        return false;
    }
}
email.onchange = function () {
    let email = this.value;
    let reg = /^\S{1,5}$/;;
}

username.onchange = function () {
    let username = this.value;
    let reg = /^\S{1,5}$/;
    if (!reg.test(username)) {
        alert("用户名长度不能超过5位！");
        return false;
    }
}

password.onchange = function () {
    let password = this.value;
    let reg = /^[0-9A-Za-z]{6,}$/;
    if (!reg.test(password)) {
        alert("密码长度要大于6位,请重新输入！");
        return false;
    }
}

function checkpassword(){
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    if(password == repassword) {
        document.getElementById("attention").innerHTML = "<font color='green'>两次密码一致</font>"
    }
    else{
        document.getElementById("attention").innerHTML = "<font color='red'>两次密码输入不一致！</font>"
    }
}

function check2(){
    localStorage.setItem("username", document.getElementById("username").value);
    localStorage.setItem("password", document.getElementById("password").value);
    localStorage.setItem("email", document.getElementById("email").value);

    let file = document.getElementById("file");
    let Email = document.getElementById("email");
    let Name = document.getElementById("username");
    let Password = document.getElementById("password");
    let Repassword = document.getElementById("repassword");

    if(file.value==""||Email.value == ""||Name.value==""||Password == ""/* ||Repassword == "" */){
        alert("账号、密码、邮箱不能为空！");
        return false;
    }
    else if(Password.value == Repassword.value){
        alert("注册成功！欢迎");
        window.location.href="./signin.html";
    }
    else {
        alert("error!请重试")
    }
}
//password