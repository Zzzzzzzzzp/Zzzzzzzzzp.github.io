<?php
	require("../init.php");
	$sql="SELECT limg,lid,title,details,author FROM mkz_laptop order by rq desc limit 1,10";
	$result=mysqli_query($conn,$sql);
	echo json_encode(mysqli_fetch_all($result,1));
?>