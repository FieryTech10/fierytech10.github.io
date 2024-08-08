// savefile.js

function saveGame() {
    const gameData = {
        gold,
        skillpoint,
        spCostHp,
        spCostAtk,
        spCostDef,
        spCostMana,
        spCostCountdownUpgrade,
        spCostXpPerClaim,
        smant,
        maxhp,
        hp,
        mana,
        maxmana,
        atk,
        def,
        level,
        xp,
        maxxp,
        mall,
        logs,
        planks,
        ironBar,
        metalSheets,
        goldBar,
        mythrilBar,
        petSummon,
        fireBottle,
        blizzardBottle,
        trappedSoul,
        playerBusinessName,
        playerBusinessIncome,
        playerBusinessItem,
        playerBusinessDescription,
        x,
        businessActive,
        stock,
        sawmil,
        countdownTimer,
		num,
        playerBusinessIncomeMultiplier,
        initialCountdownTimer,
        playerBusinessIncomeMultiplier,
        playerBusinessXpRewardMultiplier
    };

    localStorage.setItem('gameData', JSON.stringify(gameData));
}

function loadGame() {
    const savedData = localStorage.getItem('gameData');
    if (savedData) {
        const gameData = JSON.parse(savedData);

        gold = gameData.gold;
        skillpoint = gameData.skillpoint;
        spCostHp = gameData.spCostHp;
        spCostAtk = gameData.spCostAtk;
        spCostDef = gameData.spCostDef;
        spCostMana = gameData.spCostMana;
        spCostCountdownUpgrade = gameData.spCostCountdownUpgrade;
        spCostXpPerClaim = gameData.spCostXpPerClaim;
        smant = gameData.smant;
        maxhp = gameData.maxhp;
        hp = gameData.hp;
        mana = gameData.mana;
        maxmana = gameData.maxmana;
        atk = gameData.atk;
        def = gameData.def;
        level = gameData.level;
        xp = gameData.xp;
        maxxp = gameData.maxxp;
        mall = gameData.mall;
        logs = gameData.logs;
        planks = gameData.planks;
        ironBar = gameData.ironBar;
        metalSheets = gameData.metalSheets;
        goldBar = gameData.goldBar;
        mythrilBar = gameData.mythrilBar;
        petSummon = gameData.petSummon;
        fireBottle = gameData.fireBottle;
        blizzardBottle = gameData.blizzardBottle;
        trappedSoul = gameData.trappedSoul;
        playerBusinessName = gameData.playerBusinessName;
        playerBusinessIncome = gameData.playerBusinessIncome;
        playerBusinessItem = gameData.playerBusinessItem;
        playerBusinessDescription = gameData.playerBusinessDescription;
        x = gameData.x;
        businessActive = gameData.businessActive;
        stock = gameData.stock;
        sawmil = gameData.sawmil;
        countdownTimer = gameData.countdownTimer;
		num = gameData.num - 1;
        playerBusinessIncomeMultiplier = gameData.playerBusinessIncomeMultiplier;
        initialCountdownTimer = gameData.initialCountdownTimer;
        playerBusinessIncomeMultiplier = gameData.playerBusinessIncomeMultiplier;
        playerBusinessXpRewardMultiplier = gameData.playerBusinessXpRewardMultiplier;
		alert('Successfully Loaded Game. Enjoy!')

        updateUI();
        if (countdownTimer > 0) {
            startIncomeGenerationTimer();
        }
    }
}

function resetGame() {
    localStorage.removeItem('gameData');
    deleteGame = confirm("Are you sure you want to reset your game? This will delete all progress made and you will not be able to get it back.");
    if (deleteGame) {
        clearInterval(intervalCreation);
        setTimeout(() => {
            localStorage.clear();
            updateUI();
            location.reload();
        }, 100);
        
    }
    else {
        alert('Reset cancelled');
    }
    
}

// Function to start the income generation timer if the countdownTimer is already running
function startIncomeGenerationTimer() {
    const incomeInterval = setInterval(() => {
        countdownTimer--;
        if (countdownTimer <= 0) {
            clearInterval(incomeInterval);
            playerBusinessIncome += 1 * playerBusinessIncomeMultiplier;
            incomeReminder();
            updateUI();
            
        }
        saveGame();
    }, 1000);
}

// Load the game when the page loads
window.onload = loadGame;
