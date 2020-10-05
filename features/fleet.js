exports.getFleet = function()  {
    function Automobile(make, model, year, color, power) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.power = power;
    }
    
    var a = new Automobile("Mercedes-Benz", "A 170", 2007, "silver", 117);
    var b = new Automobile("Mercedes-Benz", "B 170", 2005, "black", 120);
    var ml = new Automobile("Mercedes-Benz", "ML 230", 1998, "black", 150);
    var fleet = [];
    fleet.push(a);
    fleet.push(b);
    fleet.push(ml);
    for (let item of fleet) {
        console.log("item: \n " + item.make + " " + item.model);
      }

     return fleet;
}