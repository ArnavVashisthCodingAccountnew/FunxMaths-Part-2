function addUser(){
    var username_player2 = "";
    document.getElementById("username_2").value = username_player2;
    var username_player1 = "";
    document.getElementById("username_1").value = username_player1;
    localStorage.setItem("player1", username_player1);
    localStorage.setItem("player2", username_player2);
    window.location.href = "quiz_game_page.html";
}