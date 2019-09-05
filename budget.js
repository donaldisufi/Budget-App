
var array = [];
var incomeArr=[];
const arr = ['January','Febraury','March','April','May','june','July','August','September','October','November','Desember'];
var now = arr[new Date().getMonth()];
var income = 0;
var expense = 0;
var totalVlera = 0;
var symbol = '+';
document.getElementById("h2").innerHTML = `Available Budget in ${now} :`;

$('#inputGroupSelect01').on('change', changePlusMinus );

function changePlusMinus(evt) {

    var x = this.value;

    symbol = x;
    
}
var count = 0;
parseInt(document.getElementById("incometotal"));
document.getElementById("expensetotal").innerHTML = expense;


$('#btnok').on("click",function () {
 var texti = document.getElementById("inputi").value;
  
    if (symbol === "+") {
         var incom = parseInt($('#int2').val());
         
        income += incom;
       document.getElementById("incometotal").innerHTML = income;
        
        $('#indiv').after(`<div  class="row incomenext" id=`+count+`> 
                             <div class="col-md-8 in1">
                               <h3 id="intext">Income text</h3> 
                             </div> 
                             <div class="col-md-4 in2"> 
                             <div class="row">  
                             <div class="col-md-6 dis"></div> 
                             <div class="col-md-6"> <h4 id="invalue" class=`+count+` > 000.00</h2></div>
                              <div class="col-md-6" id="butoni"> 
                       <button id=`+count+` class="btn btn-info">Delete</button></div> 
                       </div> 
                       </div> 
        </div>`);
      
     
        
         totalVlera = income - expense ;
         document.getElementById("totalVlera").innerHTML = totalVlera;
         document.getElementById("incometotal").innerHTML = income;
        document.getElementById("invalue").innerHTML = incom;
        document.getElementById("intext").innerText = texti;

    

    }else {
         var exp = parseInt($('#int2').val());
         expense += exp;
         document.getElementById("expensetotal").innerHTML = expense;
        
    

         $('#indiv2').after(`
         <div class="row excomenext">
         <div class="col-md-8 in3">

             <h2 id="extext">excome text</h2>
         </div>
         <div class="col-md-4 in4">
             <div class="row">
                 
                 <div class="col-md-6">
                     <h2 id="exvalue"> 000.00</h2>
                 </div>
                 <div class="col-md-6" id="butoni2">
                     <button id="click2" class="btn btn-danger">Delete</button>
                 </div>

             </div>
         </div>
     </div>   
         `);
         document.getElementById("extext").innerText = texti;
         document.getElementById("exvalue").innerHTML = exp;
         totalVlera = income - expense ;
         document.getElementById("totalVlera").innerHTML = totalVlera;
        
    }
    

    count++;


});


