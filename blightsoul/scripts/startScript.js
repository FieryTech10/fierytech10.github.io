function start(){
				document.getElementById("start").style.display = "none";
				document.getElementById("game").style.display = "block";
			}
	 		
			
	 		//stats
			setInterval(function(){
						  document.getElementById('level').innerHTML = "Level " + level;
        if (skillpoint > 0){
          document.getElementById('skillpoints').style.display = "block";
          document.getElementById('skillpoints').innerHTML = "You have " + skillpoint + " skillpoint/s available."
        }
        else{
          document.getElementById('skillpoints').style.display = "none";
        }
                    document.getElementById('health').innerHTML = hp + "/" + maxhp + " Health";
        document.getElementById('enemyHealth').innerHTML = enemyHp + "/" + enemyMaxHp + " Health";
                    document.getElementById('mana').innerHTML = mana + "/" + maxmana + " Mana";
                    document.getElementById('attack').innerHTML = atk + " Attack";
        document.getElementById('enemyName').innerHTML = enemyName;
        document.getElementById('enemyAttack').innerHTML = enemyAtk + " Attack";
                    document.getElementById('defence').innerHTML = def + " Defence";
        document.getElementById('enemyDefence').innerHTML = enemyDef + " Defence";
						  document.getElementById('exp').innerHTML = xp + "/" + maxxp + " Exp To Lvl Up";
						  document.getElementById('gold').innerHTML = gold + " Gold";
						  document.getElementById('logs').innerHTML = logs + "x Logs";
						  document.getElementById('planks').innerHTML = planks + "x Planks";
						  document.getElementById('ironBar').innerHTML = ironBar + "x Iron Bars";
						  document.getElementById('metalSheets').innerHTML = metalSheets + "x Metal Sheets";
						  document.getElementById('goldBar').innerHTML = goldBar + "x Gold Bars";
						  document.getElementById('mythrilBar').innerHTML = mythrilBar + "x Mythril Bars";
						  document.getElementById('petSummon').innerHTML = petSummon + "x Pet Summons";
						  document.getElementById('fireBottle').innerHTML = fireBottle + "x Fire Storms In A Bottle";
						  document.getElementById('blizzardBottle').innerHTML = blizzardBottle + "x Blizzards In A Bottle";
						  document.getElementById('trappedSoul').innerHTML = trappedSoul + "x Trapped Souls";
                    if (hp > maxhp){
                     hp = maxhp   
                    }
                    else if (mana > maxmana){
                     mana = maxmana   
                    }
                    else if (hp <=0){
                        hp = 10;
                        resetGame()
                     location.reload()   
                    }
						  else if (xp >= maxxp){
                        xp -= maxxp;
								level += 1;
								maxxp += 2500;
								var amnt = level * 3;
								gold += amnt;
                smant = level / 2;
                var check = Number.isInteger(smant);
                if(check == false){
                  smant += 0.5;
                }
                skillpoint += smant;
								//alert("You leveled up to Level " + level + ", loot from missions will now be better\n\n+" + smant + " Skillpoints\n\n+" + amnt + " Gold");
                saveGame();
						  }
						  }, 50);
						  
						  //console text
              var intervalCreation = 1;
						  var num = 1;
						  var c = document.getElementById('console');
						  function next() {
						  	switch(num){
						  		case 1:
						  			c.innerHTML = "Waking up in a cave, you cannot remember anything that happened.";
						  			num++;
						  			break;
						  		case 2:
						  			c.innerHTML = "You exit the cave and head to the nearest town.";
						  			num++;
						  			break;
							   case 3:
									c.innerHTML = "Upon entering the town, you are approached by a knight in shining armour.";
									num++;
									break;
								case 4:
									c.innerHTML = "\"STRAY! Leave our town or you shall be punished.\"";
									num++;
									break;
								case 5:
									c.innerHTML = "You feel anger go through your veins. You have never been spoken to before like this.";
									//choice.style.display = "block";
									num++;
									break;
									//bad start
								case 6:
									c.innerHTML = "You punch the knight in the face with all your strength. Luckily your Dad is a lawyer, so you do not get a severe punishment.";
									num++;
									break;
								case 7:
									c.innerHTML = "Unfortunately, you still commited the crime nonetheless. You are charged with a total fine of 500 Gold and you are now put on probation.";
									num++;
									break;
								case 8:
									c.innerHTML = "-500 Gold";
									num++;
									gold -= 500;
									break;
								case 9:
									c.innerHTML = "You apply for working rights, however due to your criminal history the most you can do is start a business as no one will hire you.";
									num++;
									break;
								case 10:
									c.innerHTML = "This is it. This is where you make up for your crimes and help the community.";
									num++;
									break;
								case 11:
									c.innerHTML = "Good luck fellow Blighsoulian, enjoy your time starting a business.";
									num++;
									break;
								case 12:
									c.innerHTML = "Upon leaving this introduction, please make your way to the mall.";
									num++;
									break;
								case 13:
									c.innerHTML = "Bladehood's is the business you will require, they will assist you in starting your own business.";
									mall = 1;
									num++;
									break;
								case 14:
									c.innerHTML = "Craft stock using supplies in order to produce an income. Spend skillpoints and buy upgrades from Gemghoul to maximize your earnings.";
									num++;
									break;
                case 15:
                  c.innerHTML = "Oh wait, you have " + gold + " Gold... here is an extra 900 to help you start your life.";
                  gold += 900;
                  num++;
                  break;
                case 16:
                  c.innerHTML = "";
                  num++;
                  document.getElementById("next").style.display = "none";
                  document.getElementById("theMall").style.display = "block";
                  intervalCreation = setInterval(saveGame, 10)
                  break;
						  }}