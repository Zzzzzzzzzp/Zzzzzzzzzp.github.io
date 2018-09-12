<?php
require_once("../init.php");
@$pno=$_REQUEST["pno"];
if($pno==null){
	$pno=1;
}
$output=[
	"count"=>0,//总数
	"pageSize"=>30,//每页30个
	"pageCount"=>0,//总页数=ceil(count/pageSize)
	"pageNo"=>0,//当前第几页
	"products"=>[]//商品列表
];
$n=($pno-1)*30;
$output["pageNo"]=$pno;
$sql="SELECT count(*) FROM mkz_laptop";
$result=mysqli_query($conn,$sql);
$output["count"]=mysqli_fetch_row($result);	
$output["pageCount"]=ceil(($output["count"][0])/($output["pageSize"]));
$sqlp="SELECT lid,limg,zjgx,details,title,rq,sx,jd,tc,sz,bq FROM mkz_laptop order by gxsj desc limit $n,30";
$resultp=mysqli_query($conn,$sqlp);
$output["products"]=mysqli_fetch_all($resultp,1);	
echo json_encode($output);
