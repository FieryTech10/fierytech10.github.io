function claimIncome(){
    gold += playerBusinessIncome;
    playerBusinessXpReward = playerBusinessIncome * playerBusinessXpRewardMultiplier;
	alert(`Claimed ${playerBusinessIncome} gold from ${playerBusinessName}.\n\n +${playerBusinessXpReward} Exp`)
    xp += playerBusinessXpReward;
    playerBusinessIncome = 0;
}