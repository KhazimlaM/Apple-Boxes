describe("The Apple Boxes factory function" , function(){
    it('it should be able to set the cost paid' , function(){
        const apples = appleBoxes();
  
        apples.setCostPaid(60.50);
        assert.equal(60.50, apples.getCostPaid());

    });
  
    it(' it should be able to set the apples bought' , function(){
        const apples = appleBoxes();
  
      apples.setApplesBought(30.00);
        assert.equal(30.00, apples.getApplesBought());
  
    });
  
    it('it should be able to set the apples to sell' , function(){
        const apples = appleBoxes();
  
      apples.setApplesToSell(3.00)
      assert.equal(3.00, apples.getApplesToSell());
      
    });
  
    it('it should be able to set the desired profit' , function(){
        const apples = appleBoxes();
  
      apples.setDesiredProfit(200.00)
        assert.equal(200.00, apples.getDesiredProfit());
  
    });
  
  
});