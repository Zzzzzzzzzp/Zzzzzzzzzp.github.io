<?php
	require_once("../init.php");
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
//短信验证
if($uname!=null&&$upwd!=null){
	$sql="select * from mkz_user where uname='$uname'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	if($row!=null){
		echo "该账户已注册!";
	}else{
		$sql2="insert into mkz_user values(NULL, '$uname','$upwd',NUll,'手机号',NULL,NULL,NULL)";
		$result2=mysqli_query($conn,$sql2);
		if($result2 == 1){
			echo "注册成功！";
		}else{
			echo "注册失败！";
		}
	}
}else{
	echo "用户名密码不能为空";
}
?>