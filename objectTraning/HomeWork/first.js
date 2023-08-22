function CutNumber(Number) {

    this.init = function(Num) {
        if( 0 < parseInt(Num) && parseInt(Num)< 1000) {
            this.сотни = parseInt(Num/100);
            this.десятки = parseInt((Num - this.сотни*100)/10);
            this.единицы = parseInt(Num-this.десятки*10 - this.сотни*100);
        } else {
          if(typeof(this.единицы) != "undefined") {
            delete this.сотни;
            delete this.десятки;
            delete this.единицы;
          }
        }
      }

    this.init(Number);
  }


  let testNum = new CutNumber(256);
  console.log(testNum); 
  testNum.init(543);
  console.log(testNum); 
  testNum.init(232432);
  console.log(testNum);

  let testNum2 = new CutNumber(2526);
  console.log(testNum2);
      