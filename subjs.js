var Sun=["PHYS","CHEM","BIO","MATHS","HIST"];
var Mon=["MATHS","GEO","HIST","PHYS"];
var Tue=["CHEM","PED","GEO","BIO"];
var Wed=["HIST","ENG","ODIA","MATHS"];
var Thurs=["CHEM","PHY","HIST","GEO"];
var Fri=["ODIA","ENG","MATHS","BIO"];
var Sat=["PHY","BIO","CHEM","GEO"];
var day=[0,1,2,3,4,5,6];
var title="TIME TABLE"
var DAY;

selectDay();
getDays();


function selectDay(){
    //make someting to count each day
    switch (new Date().getDay()) {
        case 0:
          DAY=day[0];
          break;
        case 1:
          DAY=day[1];
          break;
        case 2:
            DAY=day[1];
          break;
        case 3:
            DAY=day[1];
          break;
        case 4:
            DAY=day[1];
          break;
        case 5:
            DAY=day[1];
          break;
        case 6:
            DAY=day[1];
      }
}

function getDays(){
    

    if (DAY===0){
    document.write(Mon);
    }
    if(DAY===1){
        document.write(Tue);
    }
    if(DAY===2){
        document.write(Wed);
    }
    if(DAY===3){
        document.write(Thurs);
    }
    if(DAY===4){
        document.write(Fri);
    }
    if(DAY===5){
        document.write(Sat);
    }
    if(DAY===6){
        document.write(Sun);
    }
}
