<?php
require_once("../init.php");
@$lid=$_REQUEST["lid"];
$output=[
	"product"=>[]
];
if($lid!=null){
	$sql="SELECT * FROM mkz_laptop where lid=$lid";
	$result=mysqli_query($conn,$sql);
	$output["product"]=mysqli_fetch_all($result,1)[0];
}
echo json_encode($output);