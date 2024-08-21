function codename() {
    let password = this.value;
    let reg = /^[0-9A-Za-z]{6,}$/;
    if(!reg.test(password)){
        alert("密码长度应大于6, 请重试");
        return false;
    }
}

let username = localStorage.getItem("username");
let password = localStorage.getItem("password");
console.log("username:" + username);
console.log("password:" + password);

function check() {
    console.log(document.getElementById("username").value);
    console.log(document.getElementById("password").value);

    let Name = document.getElementById("username");
    let Password = document.getElementById("password");
    
    if(username == document.getElementById("username").value && password == document.getElementById("password").value){
        alert("登陆成功，点击ok进入");
        window.location.href = "./main.html";
    }
    else if(Name.value==""||Password.value==""){
        alert("账号密码不能为空！");
        return false;
    }
    else {
        alert("账号或密码错误，请重试");
        return false;
    }
}

