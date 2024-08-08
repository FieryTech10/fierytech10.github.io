function genEnemy(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function encounter(){
  const rName = genEnemy(enemyNames);
  console.log(rName);
  alert("A wild " + rName + " appears!");
  enemyName = rName;
  if (level <= 2){
    enemyHp = Math.floor(Math.random() * 15) + 15;
    enemyAtk = Math.floor(Math.random() * 3) + 1;
    enemyDef = Math.floor(Math.random() * 0) + 0;
  }
  else if (level < 6){
    enemyHp = Math.floor(Math.random() * 15) + 15;
    enemyAtk = Math.floor(Math.random() * 3) + 1;
    enemyDef = Math.floor(Math.random() * 0) + 0;
  }
  enemyMaxHp = enemyHp;
  console.log(enemyHp);
  console.log(enemyAtk);
  console.log(enemyDef);
}