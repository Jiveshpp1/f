player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;


function send() {
    number1 = document.getElementById("number1") .value;
    number2 = document.getElementById("number2") .value;
    actual_anw = parseInt(number1) * parseInt(number2);
    console.log(actual_anw);
    

    question_num = "<h4>"+ number1 +" X "+ number2 +"</h4>";
    input_box = "Answer : <input type= 'text' id='Input_check_box'>";
    Check_bton = "<br><br><button class= 'btn btn-info' onclick='check()'>Check</button>";
    row = question_num + input_box + Check_bton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";


}


question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("Input_check_box").value
        if(get_answer == actual_anw){

                if(answer_turn == "player1"){
                    player1_score = player1_score + 1;
                    document.getElementById("player1_score").innerHTML = player1_score;
                
                }
                else{
                    player2_score = player2_score + 1;
                    document.getElementById("player2_score").innerHTML = player2_score;
                
                }
            
        }
        if(question_turn == "player1"){
            question_turn = "player2";
            document.getElementById("player_question").innerHTML = "Question Turn -" + player2_name;
        }
        else{
            question_turn = "player1";
            document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
        }

        if(answer_turn == "player1"){
            answer_turn = "player2";
            document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;
        }
        else{
            answer_turn = "player1";
            document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1_name;

        }
        document.getElementById("output").innerHTML = "";

}