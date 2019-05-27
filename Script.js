var counter = 0
var currentPlayer

function buttonClick(id){
    console.log(id);
    console.log(counter)
    counter++
    currentPlayer = getPlayer(counter)
    document.getElementById(id).innerHTML=currentPlayer
    document.getElementById(id).disabled = true
    console.log(currentPlayer)
    winner();
}

function getPlayer(counter){
    if(counter%2==0){
        return "X"
    }else{
        return "O"
    }
}

function winner(){
    if(document.getElementById("q1").innerHTML == "X" && 
        document.getElementById("q2").innerHTML == "X" &&
         document.getElementById("q3").innerHTML == "X"){
             alert("winner is X")
         } 
         else if(document.getElementById("q1").innerHTML == "O" && 
         document.getElementById("q2").innerHTML == "O" &&
          document.getElementById("q3").innerHTML == "O"){
              alert("winner is O")
          }
            else if(document.getElementById("q4").innerHTML == "O" && 
          document.getElementById("q5").innerHTML == "O" &&
           document.getElementById("q6").innerHTML == "O"){
               alert("winner is O")
           }
           else if(document.getElementById("q7").innerHTML == "O" && 
           document.getElementById("q8").innerHTML == "O" &&
            document.getElementById("q9").innerHTML == "O"){
                alert("winner is O")
            } 
            else if(document.getElementById("q1").innerHTML == "O" && 
            document.getElementById("q5").innerHTML == "O" &&
             document.getElementById("q9").innerHTML == "O"){
                 alert("winner is O")
             }   
             else if(document.getElementById("q3").innerHTML == "O" && 
             document.getElementById("q5").innerHTML == "O" &&
              document.getElementById("q7").innerHTML == "O"){
                  alert("winner is O")
              }
              else if(document.getElementById("q4").innerHTML == "X" && 
              document.getElementById("q5").innerHTML == "X" &&
               document.getElementById("q6").innerHTML == "X"){
                   alert("winner is X")
               }
               else if(document.getElementById("q7").innerHTML == "X" && 
               document.getElementById("q8").innerHTML == "X" &&
                document.getElementById("q9").innerHTML == "X"){
                    alert("winner is X")
                }
                else if(document.getElementById("q1").innerHTML == "X" && 
                document.getElementById("q5").innerHTML == "X" &&
                 document.getElementById("q9").innerHTML == "X"){
                     alert("winner is X")
                 }   
                 else if(document.getElementById("q3").innerHTML == "X" && 
                 document.getElementById("q5").innerHTML == "X" &&
                  document.getElementById("q7").innerHTML == "X"){
                      alert("winner is X")
                  }
                  else if(document.getElementById("q1").innerHTML == "X" && 
                  document.getElementById("q4").innerHTML == "X" &&
                   document.getElementById("q7").innerHTML == "X"){
                       alert("winner is X")
                   }
                   else if(document.getElementById("q2").innerHTML == "X" && 
                   document.getElementById("q5").innerHTML == "X" &&
                    document.getElementById("q8").innerHTML == "X"){
                        alert("winner is X")
                    }
                    else if(document.getElementById("q3").innerHTML == "X" && 
                    document.getElementById("q6").innerHTML == "X" &&
                     document.getElementById("q9").innerHTML == "X"){
                         alert("winner is X")
                     }
}
    