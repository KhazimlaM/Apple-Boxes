function appleBoxes(){
    var theCostPaid= 0;
    var theApplesBought= 0;
    var theApplesToSell = 0;
    var theDesiredProfit = 0;

    var CalculatedAmount1 = 0;
    
    function setCostPaid(cost){
        theCostPaid = cost;
        
    }
    function getCostPaid(){
        return theCostPaid;
    }

    function setApplesBought(cost){
        theApplesBought = cost;
    }

    function getApplesBought(){
         return theApplesBought;
    }

    function setApplesToSell(amount){
        theApplesToSell = amount;
    }

    function  getApplesToSell(){
        return theApplesToSell;
    }

    function setDesiredProfit(amount){
        theDesiredProfit = amount;
    }
     
    function getDesiredProfit(){
        return theDesiredProfit;
    }

   
    function getCalculatedAmount1(){
        CalculatedAmount1 = theCostPaid * theApplesToSell / theDesiredProfit.value ;
        return CalculatedAmount1.toFixed(2)
    }


    return {
        setCostPaid,
        getCostPaid,
        setApplesBought,
        getApplesBought,
        setApplesToSell,
        getApplesToSell,
        setDesiredProfit,
        getDesiredProfit,
        getCalculatedAmount1,

    }
}
