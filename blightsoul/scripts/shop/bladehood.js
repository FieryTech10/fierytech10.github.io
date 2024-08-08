// business.js

// Function to start a business
function startBusiness() {
  const businessName = document.getElementById("bName").value;
  const businessDesc = document.getElementById("bDesc").value;
  const businessItem = document.getElementById("bItem").value;

  if (gold >= 500 && businessName && businessDesc && businessItem && businessActive === false) {
      playerBusinessName = businessName;
      playerBusinessDescription = businessDesc;
      playerBusinessItem = businessItem;
      gold -= 500;

      alert(`Thank you for registering with us. Please press 'ok' and your business will be set up and ready. Please note the 500 Gold will be taken once you click 'ok'.
      
Name: ${playerBusinessName}
Description: ${playerBusinessDescription}
Signature Item: ${playerBusinessItem}`);

      document.getElementById("startBusiness").style.display = "none";
      document.getElementById("closeBusiness").style.display = "block";
      businessActive = true;

      setTimeout(() => {
          alert("Congrats on purchasing a business! You have received +5000 exp for buying one!");
          shopBought(); // Assuming this is defined elsewhere
          xp += 5000;
      }, 100);
  } else if (businessActive === true) {
    alert("Oh? You already have a business. I am so sorry sir/ma'am, here are your shop's keys.");
    document.getElementById("startBusiness").style.display = "none";
    document.getElementById("closeBusiness").style.display = "block";
  }
  else {
      alert("Sorry, you don't seem to have enough gold or you have not fully filled out the form.");
  }
}

// Function to close a business
function closeBusiness() {
  const closeConfirmation = confirm("Are you sure you want to close your business? You will get no refunds from this.");

  if (closeConfirmation) {
      alert(`${playerBusinessName} has been shut down. Sad to see ${playerBusinessItem} leave the shelves. Hopefully, one day it will be back.`);

      playerBusinessName = "N/A";
      playerBusinessDescription = "N/A";
      playerBusinessItem = "N/A";
      playerBusinessIncome = 0;

      document.getElementById("startBusiness").style.display = "block";
      document.getElementById("closeBusiness").style.display = "none";
      sawmil = false;
  } else {
      alert("Your business has been left alone and kept the same. Shutdown cancelled.");
  }
}

// Function to craft planks
function craftPlanks() {
  if (logs >= 1 && sawmil === true) {
      logs -= 1;
      planks++;
      alert("Sawed 1x Logs into 1x Planks.");
  } else if (sawmil === true && logs <= 0) {
      alert("You do not have enough logs to saw!");
  } else {
    alert("You need to have a sawmill to craft planks! You can get one from Gemghoul's Upgrades for free.");
  }
}

// Function to craft stock
function craftStock() {
  if (planks >= 1) {
      planks -= 1;
      stock++;
      startIncomeGeneration(); // Start income generation when stock is crafted
  } else {
      alert("You do not have the required amount of planks to craft stock.");
  }
}
// Function to update UI based on the business status
function updateUI() {
  document.getElementById("sawmilShop").style.display = (!sawmil && businessActive) ? "block" : "none";

  document.getElementById("stockStat").innerHTML = `Stock Left: ${stock}`;
  document.getElementById("incomeStat").innerHTML = `Income From Business: ${playerBusinessIncome}`;
  document.getElementById("itemServiceStat").innerHTML = `Item/Service: ${playerBusinessItem}`;
  if (countdownTimer > 119) {
    document.getElementById("timeLeft").innerHTML = `Time Left: ${Math.ceil(countdownTimer / 60)} minutes`;
  }
  else if (countdownTimer > 0 && countdownTimer < 120) {
    document.getElementById("timeLeft").innerHTML = `Time Left: ${countdownTimer} seconds`;
  }
  else if (countdownTimer <= 0 && stock <= 0 && playerBusinessIncome <= 0){
    document.getElementById("timeLeft").innerHTML = `<p style="color: red;">No income to collect</p>`;
  }
  else {
    document.getElementById("timeLeft").innerHTML = `<p style="color: green;">Income ready to collect!</p>`;
}
}

// Interval to periodically update the UI
setInterval(updateUI, 50);

// Income generation variables
let countdownTimer = 0; // Timer in seconds
function incomeAlertReminder(){
  alert(`Your store has sold all of it's stock. Please collect income and produce more. \n \n Info: \n ${playerBusinessIncome} Gold ready to claim\n\n(Blightsoul)`)
}
// Function to remind player if their stock is gone and income is ready to claim
function incomeReminder() {
  if (stock <= 0 && countdownTimer <= 0) {
    setTimeout(incomeAlertReminder, 10) 
  }
}

// Function to start income generation
function startIncomeGeneration() {
  if (stock >= 1 && countdownTimer === 0) {
      stock--; // Use one stock to start income generation
      countdownTimer = initialCountdownTimer;

      const incomeInterval = setInterval(() => {
          countdownTimer--;
          if (countdownTimer <= 0) {
              clearInterval(incomeInterval, incomeReminder());
              playerBusinessIncome += 3 * playerBusinessIncomeMultiplier;
          }
          saveGame();
      }, 1000);
  }
}

setInterval(startIncomeGeneration, 50)