$(function(){
	var a=document.getElementById("footer");
		a.style.position="fixed";
		a.style.bottom=0;
	var b=document.getElementsByClassName("login-box"),
		h=window.screen.availHeight,
		w=window.screen.availWidth;
		b[0].style.left=(w-700)/2+"px";
		b[0].style.top=(h-600)/2+"px";
})
$(function(){
	$(".login>div:first-child>span").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
		if($(this).html()=="注册"){
			$(".login>div:last-child>.zc").css("display","block");
			$(".login>div:last-child>.dl").css("display","none");
		}
		if($(this).html()=="登陆"){
			$(".login>div:last-child>.dl").css("display","block");
			$(".login>div:last-child>.zc").css("display","none");
		}
	})

	$(".login>div:last-child>.dl>span").click(function(){
		var $btn=$(this);
		$.ajax({
			type:"post",
			url:"data/denglu/denglu.php",
			data:$btn.parent().serialize(),
			success:function(msg){
				alert(msg);
				if(msg==="登录成功!"){
					//?back=http://xxx/products.html?kw=i5
					var i=location.search.indexOf("=");
					location.href=location.search.slice(i+1);
				}
			}
		})
	})
	$(".login>div:last-child>.zc>span").click(function(){
		var $btn=$(this);
		console.log($btn.parent().serialize());	
		$.ajax({
			type:"post",
			url:"data/denglu/zhuce.php",
			data:$btn.parent().serialize(),
			success:function(msg){
				alert(msg);
			}
		})
	})
})