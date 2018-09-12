<?php
require_once("../init.php");
@$sx=$_REQUEST["sx"];
@$jd=$_REQUEST["jd"];
@$tc=$_REQUEST["tc"];
@$sz=$_REQUEST["sz"];
@$bq=$_REQUEST["bq"];
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

$sqlp="SELECT lid,limg,zjgx,details,title,rq,sx,jd,tc,sz,bq FROM mkz_laptop WHERE ";
$sql="SELECT count(*) FROM mkz_laptop WHERE ";
if(!$sx==null&&$sx!="全部"){
	$sqlp.=" sx='$sx' and";
	$sql.=" sx='$sx' and";
}
if(!$jd==null&&$jd!="全部"){
	$sqlp.=" jd='$jd' and";
	$sql.=" jd='$jd' and";
}
if(!$tc==null&&$tc!="全部"){
	$sqlp.=" tc='$tc' and";
	$sql.=" tc='$tc' and";
}
if(!$sz==null&&$sz!="全部"){
	$sqlp.=" sz='$sz' and";
	$sql.=" sz='$sz' and";
}
if(!$bq==null&&$bq!="全部"){
	$sqlp.=" bq='$bq' and";
	$sql.=" bq='$bq' and";
}
$sqlp.=" order by gxsj desc limit $n,30";
if($sx=="全部"&&$jd=="全部"&&$tc=="全部"&&$sz=="全部"&&$bq=="全部"){
	$sqlp=" SELECT lid,limg,zjgx,details,title,rq,sx,jd,tc,sz,bq FROM mkz_laptop order by rq desc limit $n,30 ";
	$sql=" SELECT count(*) FROM mkz_laptop ";
}else{
	$sqlp=preg_replace('/[a][n][d]\s[o]/','o',$sqlp);
	$sql=preg_replace('/[a][n][d]$/','',$sql);
}
$resultp=mysqli_query($conn,$sqlp);
$output["products"]=mysqli_fetch_all($resultp,1);
$result=mysqli_query($conn,$sql);
$output["count"]=mysqli_fetch_row($result);
$output["pageCount"]=ceil(($output["count"][0])/($output["pageSize"]));
echo json_encode($output);
