$(function(){
		var i,i2;
		var LIWIDTH=72;
		var $box=$(".nav-wrap ul #s1");
		$(".nav-wrap ul>li>a").each(function(i3){
			if($($(this))[0].href==String(window.location)||i3==0){	
				$box.css("left",LIWIDTH*i3+25);
				$(".nav-wrap ul").on("mouseover","a",function(){
					var i=$(this).parent().index();
					$box.css("left",LIWIDTH*i+25);
				}).on("mouseout","a",function(){
					if(!i2){
						$box.css("left",LIWIDTH*i3+25);
					}else{
						$box.css("left",LIWIDTH*i2+25);
					}
				}).on("click","a",function(){
					i2=$(this).parent().index();
					$box.css("left",LIWIDTH*i2+25);
				})
			}
		})
		var $headertop=$(".header-wrap")
		$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>=400){
				$headertop.addClass("header-top")
			}else{
				$headertop.removeClass("header-top")	
			}
		})
});
$(function(){
	if(location.search.indexOf("lid")!=-1){
		var lid=location.search.split("=")[1];
		$.ajax({
			type:"get",
			url:"data/xqy/xqy.php",
			data:"lid="+lid,
			dataType:"json"
		}).then(function(output){
			var {product}=output;
			var {limg,title,details,jd,sc,rq,yp,zjgx,tc,author}=product;
			document.querySelector(".mbx>:last-child")
				.innerHTML=title;
			document.querySelector(".nr-l-1>div:last-child>:nth-child(1)>span:first-child")
				.innerHTML=title;
			document.querySelector(".nr-l-1>div:first-child>img").setAttribute("src",limg)
			document.querySelector(".nr-l-1>div:last-child>:nth-child(1)>span:last-child")
				.innerHTML=tc;
			document.querySelector("#jd").innerHTML=jd;
			document.querySelector("#zz").innerHTML=author;
			document.querySelector("#sc").innerHTML=sc+"万";
			document.querySelector("#rq").innerHTML=rq+"万";
			document.querySelector("#yp").innerHTML=yp;
			document.querySelector(".nr-l-1>div:last-child>:nth-child(3)>div>span")
				.innerHTML=details;
			document.querySelector(".nr-l-2>:nth-child(1)>:nth-child(3)>span")
				.innerHTML=zjgx;
		})
	}
})
$(function(){
	var num = $(".nr-l-3>:nth-child(2)>div>div").length;
	$(".nr-l-3>:nth-child(2)>div").width(num*237);
	var a=237*num-940 ,b=1;
	move();
	timer=setInterval(function(){
		if(a===b){
			move(b=1);
		}else{
			move();
		}
	},10);
	function move(){
		b++;
		$(".nr-l-3>:nth-child(2)>div").animate({
			left:-b+ "px"
		}, 10);
	}

});
$(function(){
	$.ajax({
			type:"get",
			url:"data/denglu/islogin.php",
			dataType:"json",
			success:function(data){
				if(data.ok==0){
					$(".user-head>p").hide().prevAll().show();
					$("#d1>div:first-child").show();
					$("#d2>div:first-child").show();
				}else{
					var {uname}=data;
					$(".user-head>p").show().prevAll().hide();
					$("#uname").html(uname);
					$("#d1>div:first-child").hide();
					$("#d2>div:first-child").hide();
				}
			}
		});
		$(".user-head>a:first-child").click(function(e){
			e.preventDefault();
			location.href="denglu.html?back="+location.href;
		});
		$(".user-head>p>a").click(function(e){
			e.preventDefault();
			$.ajax({
				type:"get",
				url:"data/denglu/signout.php",
				success:function(){
					location.reload(true);
				}
			})
		});

})
$(function(){
	$("#dsou").click(function(){
			if($("#input").val().trim()!==""){
				$.ajax({
					type:"get",
					url:"data/sousuo/sousuo2.php",
					data:{kw:$("#input").val()},
					dataType:"json",
					success:function(data){
						if(data.length>0){
							location.href="xqy.html?lid="+data[0].lid;
						}
					}
				})
			}
		})	

	$("#input").focus(function(){
			$("#yr1").css("display","block").height(400);


			$.ajax({
				type:"get",
				url:"data/sousuo/sousuo.php",
				dataType:"json"
			}).then(function(result){
				var html="";
				var a=1;
				result.forEach(function(p,i){
					i+=a;
					var {limg,details,lid,title,author}=p
					html+=`
						<div class="yr2">
							<div>
								<span>${i}</span><span>${title}</span>
							</div>
							<div id="yr3">
								<span>${i}</span>
								<img src="${limg}">
								<a href="xqy.html?lid=${lid}">${title}</a>
								<span>作者：${author}</span>
								<span>${details}</span>
							</div>
						</div>	
					`;
				})
				$("#yr1").html(html);
			});
			$("#input").keyup(function(e){
				if(e.keyCode!=13){
						if($("#input").val().trim()!==""){		
						$.ajax({
							type:"get",
							url:"data/sousuo/sousuo2.php",
							data:{kw:$("#input").val()},
							dataType:"json",
							success:function(data){
								var d=data.length,html="",a=1;;
									if(d>0){
										data.forEach(function(p,i){
											i+=a;
											var {limg,details,lid,title,author}=p;
											html+=`
												<div class="yr2">
													<div>
														<span>${i}</span><span>${title}</span>
													</div>
													<div id="yr3">
														<span>${i}</span>
														<img src="${limg}">
														<a href="xqy.html?lid=${lid}">${title}</a>
														<span>作者：${author}</span>
														<span>${details}</span>
													</div>
												</div>	
											`;
										})
										$("#yr1").html(html);
										$("#yr1").height(40*d);
									}else{
										html+=`
												<div class="yr2">
													<div style="display:block">
														<span>空</span><span>未找到</span>
													</div>
												</div>	
											`;
										$("#yr1").html(html);
										$("#yr1").height(40);
									}
								}
							})
						}
					}else{
						if($("#input").val().trim()!==""){
							$.ajax({
								type:"get",
								url:"data/sousuo/sousuo2.php",
								data:{kw:$("#input").val()},
								dataType:"json",
								success:function(data){
									if(data.length>0){
										location.href="xqy.html?lid="+data[0].lid;
									}
								}
							})
						}
					}	
				})
		}).blur(function(){
			 setTimeout(function() {
				$("#yr1").hide();
			}, 100)
		})
		$("#yr1").on("mouseover","div",function(){
			$(this).siblings().find('div:nth-child(2)').css("display","none");
				$(this).find('div:nth-child(2)').css("display","block").siblings().css("display","none");
		}).on("mouseout","div",function(){
			$(this).find('div:nth-child(1)').css("display","block")
		})
})