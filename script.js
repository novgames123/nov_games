    let nam = document.getElementById('name').value;
    let pass = document.getElementById('password').value;
function clk(){
    localStorage.setItem("name" , nam);
    localStorage.setItem("password" , pass);
}
