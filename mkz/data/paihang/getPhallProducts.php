<?php
	//data/paihang/getPaihangProducts.php
	require("../init.php");
	$output=[
		0=>[],
		1=>[],
		2=>[],
		3=>[],
		4=>[],
		5=>[],
		6=>[],
		7=>[],
		8=>[]
	];
	$sqlrq="SELECT * FROM mkz_laptop order by rq desc limit 0,60";
	$resultrq=mysqli_query($conn,$sqlrq);
	$output[0]=mysqli_fetch_all($resultrq,1);

	$sqlyp="SELECT * FROM mkz_laptop order by yp desc limit 0,60";
	$resultyp=mysqli_query($conn,$sqlyp);
	$output[1]=mysqli_fetch_all($resultyp,1);

	
	$sqlsc="SELECT * FROM mkz_laptop order by sc desc limit 0,60";
	$resultsc=mysqli_query($conn,$sqlsc);
	$output[2]=mysqli_fetch_all($resultsc,1);

	$sqldj="SELECT * FROM mkz_laptop WHERE bq='独家' order by rq desc limit 0,60 ";
	$resultdj=mysqli_query($conn,$sqldj);
	$output[3]=mysqli_fetch_all($resultdj,1);

	$sqlxz="SELECT * FROM mkz_laptop WHERE bdlx='新作' order by rq desc limit 0,60 ";
	$resultxz=mysqli_query($conn,$sqlxz);
	$output[4]=mysqli_fetch_all($resultxz,1);

	$sqlss="SELECT * FROM mkz_laptop WHERE bdlx='上升' order by rq desc limit 0,60 ";
	$resultss=mysqli_query($conn,$sqlss);
	$output[5]=mysqli_fetch_all($resultss,1);

	$sqlhz="SELECT * FROM mkz_laptop WHERE bq='合作' order by rq desc limit 0,60 ";
	$resulthz=mysqli_query($conn,$sqlhz);
	$output[6]=mysqli_fetch_all($resulthz,1);

	$sqlpf="SELECT * FROM mkz_laptop order by pf desc limit 0,60";
	$resultpf=mysqli_query($conn,$sqlpf);
	$output[7]=mysqli_fetch_all($resultpf,1);

	$sqldz="SELECT * FROM mkz_laptop order by dz desc limit 0,60";
	$resultdz=mysqli_query($conn,$sqldz);
	$output[8]=mysqli_fetch_all($resultdz,1);
	
	echo json_encode($output);
	
?>