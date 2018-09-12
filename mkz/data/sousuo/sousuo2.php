<?php
	require("../init.php");
	@$kw=$_REQUEST["kw"];
	$products=[];
	if($kw!=null){
		$sql="SELECT limg,lid,title,details,author FROM mkz_laptop ";
		$kws=explode(" ",$kw);
		for($i=0;$i<count($kws);$i++){
			$kws[$i]=" title like '%".$kws[$i]."%' ";
		}
		$where=" where ".implode(" and ",$kws);
		$sql.=$where;
		$sql.=" order by rq desc limit 10 ";
		$result=mysqli_query($conn,$sql);
		$products=mysqli_fetch_all($result,1);
	}
	echo json_encode($products);
?>