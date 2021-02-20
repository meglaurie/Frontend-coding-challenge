// Mobile menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

const displayBtn = document.getElementById('displayBtn');
const modalContent = document.getElementById('imgTxtContainer');
const submit = document.getElementById('imgTxtSubmit');
const img = document.getElementById('imgTxt-input');
const cardContainer = document.getElementById('card-container');


const card = document.createElement('div');
card.classList.add("card");


// Save to local storage
function saveLocalCards(card){
  let imgs;
  let txt;
  if(localStorage.getItem('imgs') === null){
    imgs = [];
    txt = [];
  }else{
    imgs = JSON.parse(localStorage.getItem('imgs'));
  }
  imgs.push(card);
  console.log(card);
  localStorage.setItem('cards', JSON.stringify(cards));
}

function closeModal(){
  modalContent.style.display = 'none';
}

function uploadImgTxt(){

  const card = document.createElement('div');
  card.classList.add("card");

  // upload Image 
  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img');
        if (img.files && img.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
               cardImg.src = e.target.result;
               card.appendChild(cardImg);
            };
            // console.log(input.files[0]);
            reader.readAsDataURL(img.files[0]);
        }
  


    // The date
    const cardDate = document.createElement('h4');
    cardDate.classList.add('date');
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
    cardDate.innerHTML = month + " " + day + ", " + year;
    card.appendChild(cardDate);
   

    // Get text 
    const cardTxt = document.createElement('p');
    cardTxt.classList.add('card-txt');
    var inputVal = document.getElementById("txtImg-input").value;
    cardTxt.innerHTML = inputVal;
    document.getElementById("txtImg-input").value = " ";
    card.appendChild(cardTxt);
    const parent = document.getElementById('main');
    parent.appendChild(cardContainer, card);
    
    closeModal();
    // saveLocalCards(card);
}

let lastCard = uploadImgTxt();

// localStorage.clear();

displayBtn.addEventListener("click", function() {
    modalContent.style.display = 'block';
});

const close = document.getElementById('modalClose');

close.addEventListener("click", function(){
  modalContent.style.display = 'none';
});





// Get image from user
// function uploadImg(input) {
//   // console.log(input.files);
//   const cardImg = document.createElement('img');
  
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();

//             reader.onload = function (e) {
//                cardImg.src = e.target.result;
//                cardImg.classList.add('card-img');
//                card.appendChild(cardImg);
//             };
//             // console.log(input.files[0]);
//             reader.readAsDataURL(input.files[0]);
//         }
//         console.log('img upload');
//     }


// // The Date

// function date(){
//   const cardDate = document.createElement('h4');
//   cardDate.classList.add('date');
//   var date = new Date();
//   var day = date.getDate();
//   var month = date.getMonth();
//   var year = date.getFullYear();
//   var monthsYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   for(var i = 0; i < monthsYear.length; i++){
//     if(month == i){
//       month = monthsYear[i];
//     }
//   }
//   cardDate.innerHTML = month + " " + day + ", " + year;
//   card.appendChild(cardDate);
//   console.log('Get date');
// };

// // Get text from user and clear input feild
// function getInputValue(){
//     const cardTxt = document.createElement('p');
//     cardTxt.classList.add('card-txt');
//     var inputVal = document.getElementById("txtImg-input").value;
//     cardTxt.innerHTML = inputVal;
//     document.getElementById("txtImg-input").value = " ";
//     card.appendChild(cardTxt);
//     console.log('get text value');
// }


// function uploadImgTxt(){
//   createCard();
//   cardContainer.appendChild(card);
//   // if image has a value == true then createElement img 
//   // and appendchild to card appendChild to conatiner 
// // 
// }