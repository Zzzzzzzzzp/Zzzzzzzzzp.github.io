<?php
	//data/index/getGengxinProducts.php
	require("../init.php");
	$sql="SELECT * FROM mkz_laptop";
	$result=mysqli_query($conn,$sql);
	echo json_encode(mysqli_fetch_all($result,1));