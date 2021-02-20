<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Frontend Coding Challenge</title>
    <link rel="stylesheet" href="src/styles.css">
    <script src="https://use.fontawesome.com/01a25d8417.js"></script>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Shrikhand&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/12dbb86165.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <nav>
      <div class="topnav" id="myTopnav">
        <a href="#">Home</a>
        <a href="#">About</a>
    
        <span class="menu-btn" onclick="openNav()">&#9776;</span>
    
      </div>
      <div class="mobile-nav">
        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
          <a href="#">About</a>
        
        </div>
      </div>
    </nav>
    <main id="main">
      <div id="welcome">
        <!-- <img src="src/imgs/"></img> -->
        <h2 class="title">News Feed</h2>
        <h3 class="subtitle">Add to feed</h3>
        <button id = "displayBtn" class="btn" type="button" name="button" ><i class="fas fa-plus"></i></button>
      </div>
      <div id="card-container"></div>
      <div id="imgTxtContainer" style="display:none;">
        <div id="modalContent">
          <svg id="modalClose" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
          <!-- <div class="input-container"> -->
          <div class="text-input-container">
            <input id="txtImg-input" class = "modalElement" type="text" name="">
          </div>
          <div class="img-file-container">
            <input id="imgTxt-input" class = "modalElement " name = "image" type='file'/>
          </div>
          <button id="imgTxtSubmit" class = "modalElement btn" onclick="uploadImgTxt();">Submit</button>
        <!-- </div> -->
      </div>
    </main>
  </body>
  <script type="text/javascript" src="src/index.js"></script>
</html>