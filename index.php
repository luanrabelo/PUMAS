<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>PUMAS</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>	
</head>
<body>
<div class="card bg-white text-dark rounded-top rounded-lg border-0">
<div class="text-center">
<h1 class="dark-grey-text">
<img src="img/mitochondrion.png" height="42" width="42">&nbsp;&nbsp;PUMAS&nbsp;<img src="img/dna.png" height="42" width="42">
</h1>
</div>
<div class="text-center"><h3>Puzzle Mitochondrial Align Software</h3></div>
<div class="text-center" style="font-size: 20px"><h5 id="lab" class="form-text text-muted">Evolution Lab</h5></div>	
<div class="text-center"><small id="author" class="form-text text-muted">Created by Rabelo et al. (2020)</small></div>
</div>		
<?php
if($now > $_SESSION['expire']){
echo("<div class='alert alert-danger' role='alert'>Demorou muito otário!</div>");	
session_destroy();	
}	
include("home.php");
?>	
</body>
</html>
