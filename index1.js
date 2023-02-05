function adduser(){
    player1_name = document.getElementById("Play1input").value;
    player2_name = document.getElementById("Play2input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location = "index2.html";
}