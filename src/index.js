
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


var date = new Date();

var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var monthsYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for(var i = 0; i < monthsYear.length; i++){
  if(month == i){
    month = monthsYear[i];
  }
}

document.getElementById('root').innerHTML = "<p>" + month + " " + day + "," + year + "</p>";

console.log(date);

function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img')
                    .attr('src', e.target.result)
                    .width(150)
                    .height(200);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
