atk = 10
var x = atk + 1;
var one = Math.floor(Math.random() * atk) + x;
var two = atk;
var y = atk - 9;
var three = Math.floor(Math.random() * atk) + y;
var attackOptions = [one, two, three];
var rand = Math.floor(Math.random()*attackOptions.length);
var rValue = attackOptions[rand];
console.log("one: " + one + "\ntwo: " + two + "\nthree: " + three + "\nchoice: " + rValue)

function basicAttack(){
    var atkDmg = rValue - enemyDef;
    if (enemyDef < atk){
      enemyHp -= atkDmg;
      document.getElementById("console").innerHTML = "Enemy took " + atkDmg + " damage!!";
      
    }
}

function shadowAttack(){
  
}

function lightAttack(){
  
}