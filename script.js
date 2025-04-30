let t = 1;
let p1 = 0;
let p2 = 0;

function drawCheck() {
  if (((document.getElementById("1").textContent=="×")||(document.getElementById("1").textContent=="o"))
  &&
    ((document.getElementById("2").textContent=="×")||(document.getElementById("2").textContent=="o"))
  &&
  ((document.getElementById("3").textContent=="×")||(document.getElementById("3").textContent=="o"))
  &&
  ((document.getElementById("4").textContent == "×") || (document.getElementById("4").textContent == "o"))
  &&
  ((document.getElementById("5").textContent == "×") || (document.getElementById("5").textContent == "o")) 
  &&
  ((document.getElementById("6").textContent == "×") || (document.getElementById("6").textContent == "o")) 
  &&
  ((document.getElementById("7").textContent == "×") || (document.getElementById("7").textContent == "o"))
  &&
  ((document.getElementById("8").textContent == "×") || (document.getElementById("8").textContent == "o"))
  &&
  ((document.getElementById("9").textContent == "×") || (document.getElementById("9").textContent == "o"))
  )
  {
    console.log("hi");
    refresh();
    return;
  }
}

function refresh() {
  
document.getElementById("line1").style.display="none";
document.getElementById("line2").style.display="none";
document.getElementById("line3").style.display="none";
document.getElementById("line4").style.display="none";
document.getElementById("line5").style.display="none";
document.getElementById("line6").style.display="none";
document.getElementById("line7").style.display="none";
document.getElementById("line8").style.display="none";
document.getElementById("1").textContent = "";
document.getElementById("2").textContent = "";
document.getElementById("3").textContent = "";
document.getElementById("4").textContent = "";
document.getElementById("5").textContent = "";
document.getElementById("6").textContent = "";
document.getElementById("7").textContent = "";
document.getElementById("8").textContent = "";
document.getElementById("9").textContent = "";
}

refresh();

function playsound() {
  const sound = new Audio("win.mp3");
  sound.currentTime = 0;
  sound.play();
}

function winCheck(checkItem, cellId)
{
  if(cellId==1)
  {
    if((checkItem == document.getElementById("2").textContent) && (checkItem == document.getElementById("3").textContent))
    {
      drawCheck();
      document.getElementById("line1").style.display="block";
      if (document.getElementById("1").textContent == "×") {
        p1++;
        document.getElementById("playerScore1").textContent=(p1<10)?String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else {
        p2++;
        document.getElementById("playerScore2").textContent=(p2<10)?String("PLAYER 2 : 0" + p1) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if((checkItem == document.getElementById("5").textContent) && (checkItem == document.getElementById("9").textContent))
    {
      drawCheck();
      document.getElementById("line4").style.display="block";
      if (document.getElementById("1").textContent == "×") {
          p1++;
          document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
          setTimeout(refresh, 2000);
        }
      else {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if((checkItem == document.getElementById("4").textContent) && (checkItem == document.getElementById("7").textContent))
    {
      drawCheck();
      document.getElementById("line6").style.display="block";
      if (document.getElementById("1").textContent == "×")
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
          setTimeout(refresh, 2000);
      }
      else 
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
  }
  else if(cellId==2)
  {
    if((checkItem == document.getElementById("1").textContent) && (checkItem == document.getElementById("3").textContent))
    {
      drawCheck();
      document.getElementById("line1").style.display="block";
      if (document.getElementById("2").textContent == "×") 
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if((checkItem == document.getElementById("5").textContent) && (checkItem == document.getElementById("8").textContent))
    {
      drawCheck();
      document.getElementById("line7").style.display="block";
      if (document.getElementById("2").textContent == "×") 
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
  }
  else if (cellId == 3)
  {
    if ((checkItem == document.getElementById("1").textContent) && (checkItem == document.getElementById("2").textContent))
    {
      drawCheck();
      document.getElementById("line1").style.display = "block";
      if (document.getElementById("3").textContent == "×")
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if ((checkItem == document.getElementById("5").textContent) && (checkItem == document.getElementById("7").textContent))
    {
      drawCheck();
      document.getElementById("line5").style.display = "block";
      if (document.getElementById("3").textContent == "×")
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
        }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if ((checkItem == document.getElementById("6").textContent) && (checkItem == document.getElementById("9").textContent))
    {
      drawCheck();
      document.getElementById("line8").style.display = "block";
      if (document.getElementById("3").textContent == "×")
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
  }
  else if (cellId == 4)
  {
    if ((checkItem == document.getElementById("5").textContent) && (checkItem == document.getElementById("6").textContent))
    {
      drawCheck();
      document.getElementById("line2").style.display = "block";
      if (document.getElementById("4").textContent == "×") 
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if ((checkItem == document.getElementById("1").textContent) && (checkItem == document.getElementById("7").textContent))
    {
      drawCheck();
      document.getElementById("line6").style.display = "block";
      if (document.getElementById("4").textContent == "×") 
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
  }
  else if (cellId == 5)
  {
    if ((checkItem == document.getElementById("4").textContent) && (checkItem == document.getElementById("6").textContent))
    {
      drawCheck();
      document.getElementById("line2").style.display = "block";
      if (document.getElementById("5").textContent == "×") 
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if ((checkItem == document.getElementById("2").textContent) && (checkItem == document.getElementById("8").textContent))
    {
      drawCheck();
      document.getElementById("line7").style.display = "block";
      if (document.getElementById("5").textContent == "×") 
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if ((checkItem == document.getElementById("1").textContent) && (checkItem == document.getElementById("9").textContent))
    {
      drawCheck();
      document.getElementById("line4").style.display = "block";
      if (document.getElementById("5").textContent == "×") 
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if ((checkItem == document.getElementById("3").textContent) && (checkItem == document.getElementById("7").textContent))
    {
      drawCheck();
      document.getElementById("line5").style.display = "block";
      if (document.getElementById("5").textContent == "×") 
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
  }
  else if (cellId == 6)
  {
    if ((checkItem == document.getElementById("4").textContent) && (checkItem == document.getElementById("5").textContent))
    {
      drawCheck();
      document.getElementById("line2").style.display = "block";
      if (document.getElementById("6").textContent == "×")
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if ((checkItem == document.getElementById("3").textContent) && (checkItem == document.getElementById("9").textContent))
    {
      drawCheck();
      document.getElementById("line8").style.display = "block";
      if (document.getElementById("6").textContent == "×")
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
  }
  else if (cellId == 7)
  {
    if ((checkItem == document.getElementById("8").textContent) && (checkItem == document.getElementById("9").textContent))
    {
      drawCheck();
      document.getElementById("line3").style.display = "block";
      if (document.getElementById("7").textContent == "×")
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if ((checkItem == document.getElementById("1").textContent) && (checkItem == document.getElementById("4").textContent))
    {
      drawCheck();
      document.getElementById("line6").style.display = "block";
      if (document.getElementById("7").textContent == "×")
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if ((checkItem == document.getElementById("5").textContent) && (checkItem == document.getElementById("3").textContent))
    {
      drawCheck();
      document.getElementById("line5").style.display = "block";
      if (document.getElementById("7").textContent == "×")
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
  }
  else if (cellId == 8)
  {
    if ((checkItem == document.getElementById("7").textContent) && (checkItem == document.getElementById("9").textContent))
    {
      drawCheck();
      document.getElementById("line3").style.display = "block";
      if (document.getElementById("8").textContent == "×")
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if ((checkItem == document.getElementById("2").textContent) && (checkItem == document.getElementById("5").textContent))
    {
      drawCheck();
      document.getElementById("line7").style.display = "block";
      if (document.getElementById("8").textContent == "×")
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
  }
  else if (cellId == 9)
  {
    if ((checkItem == document.getElementById("7").textContent) && (checkItem == document.getElementById("8").textContent))
    {
      drawCheck();
      document.getElementById("line3").style.display = "block";
      if (document.getElementById("9").textContent == "×")
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if ((checkItem == document.getElementById("3").textContent) && (checkItem == document.getElementById("6").textContent))
    {
      drawCheck();
      document.getElementById("line8").style.display = "block";
      if (document.getElementById("9").textContent == "×")
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
    else if ((checkItem == document.getElementById("1").textContent) && (checkItem == document.getElementById("5").textContent))
    {
      drawCheck();
      document.getElementById("line4").style.display = "block";
      if (document.getElementById("9").textContent == "×")
      {
        p1++;
        document.getElementById("playerScore1").textContent = (p1 < 10) ? String("PLAYER 1 : 0" + p1) : String("PLAYER 1 : " + p1);
        setTimeout(refresh, 2000);
      }
      else
      {
        p2++;
        document.getElementById("playerScore2").textContent = (p2 < 10) ? String("PLAYER 2 : 0" + p2) : String("PLAYER 2 : " + p2);
        setTimeout(refresh, 2000);
      }
      playsound();
    }
  }
}

function turn()
{
  if (t==1) {
    t=2;
  }
  else {
    t=1;
  }
}
function output(turn) {
  if(turn==1)
  {
    return("×");
  }
  else {
    return("o");
  }
}



//action area


{
  document.getElementById("1").addEventListener("click", () =>
    {
      document.getElementById("1").textContent=output(t);
      winCheck(document.getElementById("1").textContent, 1);
      setTimeout(drawCheck, 2000);
      turn();
    }
  );
  
  document.getElementById("2").addEventListener("click", () =>
    {
      document.getElementById("2").textContent=output(t);
      winCheck(document.getElementById("2").textContent, 2);
      setTimeout(drawCheck, 2000);
      turn();
    }
  );
  
  document.getElementById("3").addEventListener("click", () =>
    {
      document.getElementById("3").textContent=output(t);
      winCheck(document.getElementById("3").textContent, 3);
      setTimeout(drawCheck, 2000);
      turn();
    }
  );
  
  document.getElementById("4").addEventListener("click", () =>
    {
      document.getElementById("4").textContent=output(t);
      winCheck(document.getElementById("4").textContent, 4);
      setTimeout(drawCheck, 2000);
      turn();
    }
  );
  
  document.getElementById("5").addEventListener("click", () =>
    {
      document.getElementById("5").textContent=output(t);
      winCheck(document.getElementById("5").textContent, 5);
      setTimeout(drawCheck, 2000);
      turn();
    }
  );
  
  document.getElementById("6").addEventListener("click", () =>
    {
      document.getElementById("6").textContent=output(t);
      winCheck(document.getElementById("6").textContent, 6);
      setTimeout(drawCheck, 2000);
      turn();
    }
  );
  
  document.getElementById("7").addEventListener("click", () =>
    {
      document.getElementById("7").textContent=output(t);
       winCheck(document.getElementById("7").textContent, 7);
       setTimeout(drawCheck, 2000);
      turn();
    }
  );
  
  document.getElementById("8").addEventListener("click", () =>
    {
      document.getElementById("8").textContent=output(t);
      winCheck(document.getElementById("8").textContent, 8);
      setTimeout(drawCheck, 2000);
      turn();
    }
  );
  
  document.getElementById("9").addEventListener("click", () =>
    {
      document.getElementById("9").textContent=output(t);
      winCheck(document.getElementById("9").textContent, 9);
      setTimeout(drawCheck, 2000);
      turn();
    }
  );
}
