// skills.js

document.addEventListener("DOMContentLoaded", function() {
    // Get modal elements
    var modal = document.getElementById("skillTreeModal");
    var btn = document.getElementById("openSkillTreeBtn");
    var span = document.getElementsByClassName("closeSkilltree")[0];

    // Open the modal
    btn.onclick = function() {
        modal.style.display = "block";
        updateSkillTreeDisplay();
    }

    // Close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Update skill tree display
    function updateSkillTreeDisplay() {
        document.getElementById("skillPointsDisplay").innerText = skillpoint;
        document.getElementById("spCostHpDisplay").innerText = spCostHp;
        document.getElementById("spCostManaDisplay").innerText = spCostMana;
        document.getElementById("spCostAtkDisplay").innerText = spCostAtk;
        document.getElementById("spCostDefDisplay").innerText = spCostDef;
        document.getElementById("spCostCountdownUpgradeDisplay").innerText = (spCostCountdownUpgrade >= 12) ? "Maximum Level Reached" : spCostCountdownUpgrade;
        document.getElementById("spCostXpPerClaimDisplay").innerText = spCostXpPerClaim;
        document.getElementById("spCostIncomeMultiplierDisplay").innerText = spCostIncomeMultiplier;
        saveGame();
    }

    // Upgrade functions
    window.upgradeMaxHp = function() {
        if (skillpoint >= spCostHp) {
            skillpoint -= spCostHp;
            maxhp += 10;  // Adjust the increment as needed
            spCostHp += 1;  // Increase cost for next upgrade
            updateSkillTreeDisplay();
        } else {
            alert("Not enough skill points.");
        }
    }

    window.upgradeMaxMana = function() {
        if (skillpoint >= spCostMana) {
            skillpoint -= spCostMana;
            maxmana += 5;  // Adjust the increment as needed
            spCostMana += 1;  // Increase cost for next upgrade
            updateSkillTreeDisplay();
        } else {
            alert("Not enough skill points.");
        }
    }

    window.upgradeAtk = function() {
        if (skillpoint >= spCostAtk) {
            skillpoint -= spCostAtk;
            atk += 1;  // Adjust the increment as needed
            spCostAtk += 1;  // Increase cost for next upgrade
            updateSkillTreeDisplay();
        } else {
            alert("Not enough skill points.");
        }
    }

    window.upgradeDef = function() {
        if (skillpoint >= spCostDef) {
            skillpoint -= spCostDef;
            def += 1;  // Adjust the increment as needed
            spCostDef += 1;  // Increase cost for next upgrade
            updateSkillTreeDisplay();
        } else {
            alert("Not enough skill points.");
        }
    }
    window.upgradeCountdown = function() {
        if (skillpoint >= spCostCountdownUpgrade && initialCountdownTimer > 300) {
            skillpoint -= spCostCountdownUpgrade;
            initialCountdownTimer -= 300;  // Adjust the increment as needed
            spCostCountdownUpgrade += 1;  // Increase cost for next upgrade
            updateSkillTreeDisplay();
            } else if (skillpoint < spCostCountdownUpgrade) {
                alert("Not enough skill points.");
            }
            else {
                alert("Woah there, you already have the maximum level upgrade for the sell timer!");
            }
    }
    window.upgradeXpPerClaim = function() {
        if (skillpoint >= spCostXpPerClaim) {
            skillpoint -= spCostXpPerClaim;
            playerBusinessXpRewardMultiplier += 250;  // Adjust the increment as needed
            spCostXpPerClaim += 1;  // Increase cost for next upgrade
            updateSkillTreeDisplay();
            } else {
                alert("Not enough skill points.")
            }
    }
    window.upgradeIncomeMultiplier = function() {
        if (skillpoint >= spCostIncomeMultiplier) {
            skillpoint -= spCostIncomeMultiplier;
            playerBusinessIncomeMultiplier += 1;  // Adjust the increment as needed
            spCostIncomeMultiplier += 1;  // Increase cost for next upgrade
            updateSkillTreeDisplay();
            } else {
                alert("Not enough skill points.")
            }
    }
});
