function validate_strLenght(str) {
    var regExp = /^(\w){6,20}$/;
    return regExp.test(str);
}
function validate_email(str) {
    var regExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return regExp.test(str);
}
function validate_pwd(str) {
    var regExp = /^[a-zA-Z]\w{5,15}/;
    return regExp.test(str);
}
// （1）根据表单控件user的id填写
var username = document.getElementById("    ");
//（2）通过id获取元素
var email = document.         ("email");
//（3）根据表单控件pwd的id填写
var pwd = document.getElementById("      ");
//（4）通过id获取元素
var pwdOK = document.             ("pwdOK");
 //（5）通过标签名获取元素
var form = document.              ("form")[0];
//（6）表单提交
form.       = function () {
    //（7）（8）使用自定义方法验证用户名、验证邮箱
    if (validate_strLenght(        ) &&          (email.value) && validate_pwd(pwd.value) && checkOk()) {
        console.log(username.value)
        console.log(email.value)
        console.log(pwd.value)
        return false;
    } else {
        //（9）控制台输出
                .log("验证失败")
        return false;
    }
}

// 检查用户名
username.onblur = function () {
    if (validate_strLenght(username.value)) {
        console.log("用户名符合要求")
    } else {
        console.log("用户名不符合要求")
    }
}

//检查meil
email.onblur = function () {
    if (validate_email(email.value)) {
        console.log("邮箱格式符合要求")
    } else {
        console.log("邮箱格式不符合要求")
    }
}

// （10）密码框失去焦点的时候
pwd.         = function () {
    if (validate_pwd(pwd.value)) {
        console.log("密码符合要求")
    } else {
        console.log("密码不符合要求")
    }
}
function checkOk() {
    if (pwd.value == pwdOK.value) {
        console.log("密码与重复密码一致")
        return true
    } else {
        console.log("密码与重复密码不一致")
        return false
    }
}

pwdOK.onkeyup = checkOk