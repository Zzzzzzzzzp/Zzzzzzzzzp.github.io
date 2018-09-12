<?php
	require("../init.php");
	$sql="SELECT limg,details,dz,lid FROM mkz_laptop order by dz desc";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_all($result,1);
	echo json_encode($row);
?>