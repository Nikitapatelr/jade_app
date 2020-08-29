var form;
var year, month;
var y;

function setup() {
  var canvas1 = createCanvas(700,800);
      canvas1.position(700,20);
      
  form = new Form();
 

}

function draw() {
  background(220);
  line(350,0,350,800)
  form.display();
  getdate();

if(form.productdetails!==null){
y= 10;
z=10;
  for(var i in form.productdetails){
    z=z+10
    text(form.productdetails[i][0] +'     '+ form.productdetails[i][1]+ '    '+ form.productdetails[i][2], 360,z)
       
    if(form.productdetails[i][2] <= year){
    
      if(form.productdetails[i][1] <= month){
       
        y=y+10;
        
         text(form.productdetails[i][0] + " has expired.", 10, y);
      }
      else if(form.productdetails[i][1]>month){
        
          text(form.productdetails[i][0] + " " + (form.productdetails[i][1]-month) +" months to expired.", 10, y+100);
        }
    }
    else{
  
      text(form.productdetails[i][0] + " " + (form.productdetails[i][2]-year) +" year to expired.", 10, y+200);
    }
    
  }
  }
  }

async function getdate(){
 //fetching month and year
 var expiry = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
 var expiryjson = await expiry.json();
 var datetime = expiryjson.datetime;
 year = datetime.slice(0,4);
 month = datetime.slice(5,7);
 
}
