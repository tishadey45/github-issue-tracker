// alert("js file conected");
document.getElementById("sign-btn").addEventListener("click", function(event){
    // console.log(event);
event.preventDefault();
const username = document.getElementById("user-name").value;
// console.log(username);
const password = document.getElementById("password").value;
// console.log(username,password);
if(username==="admin"){
    if(password ==="admin123" ){
    window.location.href = "./main.html"
    }else{
    alert("wrong password");
    }
}else{
   alert("wrong username");
}
})