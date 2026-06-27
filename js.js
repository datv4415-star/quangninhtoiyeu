

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "admin" && password === "123456"){
        alert("Đăng nhập thành công");
        window.location.href = "trangchu.html";
    }else{
        alert("Tên đăng nhập hoặc mật khẩu không đúng");
    }
});

function guiTinNhan(){

    var hoten = document.forms["lienhe"]["hoten"].value;
    var email = document.forms["lienhe"]["email"].value;
    var noidung = document.forms["lienhe"]["noidung"].value;

    if(hoten == "" || email == "" || noidung == ""){
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
    else{
        alert("Gửi liên hệ thành công!");
    }

}