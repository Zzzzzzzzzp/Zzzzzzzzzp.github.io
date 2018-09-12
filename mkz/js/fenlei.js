$(function(){
	/***进入加载内容****/
	function load(pno){
		$.ajax({
			type:"get",
			url:"data/fenlei/getFenleiFenye.php",
			data:"pno="+pno,
			dataType:"json"
		}).then(function(output){
			var ulw=output.pageCount;
			var count=output.count[0];
			var html="",html2="",html3="";
			var ccc=output.count[0];
			html3+=`<span>共${ccc}条筛选结果</span>`;
			if($(".fenlei-content>div:first-child").is(':has(span)')){
				$(".fenlei-content>div:first-child>span").empty();
				$(".fenlei-content>div:first-child").append(html3);
			}else{
				$(".fenlei-content>div:first-child").append(html3);
			}
			output.products.forEach(function(p,i){
				var {lid,limg,title,zjgx,details,rq,sx,jd,tc,sz,bq}=p;
					if(i<=count){
						html+=`
							<li>
								<a href="xqy.html?lid=${lid}"><img src="${limg}"></a>
								<a href="xqy.html?lid=${lid}">${title}</a>
								<span>${zjgx}话</span>
								<span>${details}</span>
								<span>人气：${rq}万</span>
							</li>	
						`;
					}
			})
			document.querySelector(".fenlei-content>div:nth-child(2)>ul").innerHTML=html;
			if(pno<8){
				for(var l=1;l<=output.pageCount;l++){
					if(l==output.pageNo){
						html2+=`
							<li class="liclick">${l}</li>	
						`;
					}else{
						html2+=`
							<li>${l}</li>	
						`;
					}
				}
			}else if(pno>=8&&output.pageCount-pno>2){
				for(var l=pno-6;l<=output.pageCount;l++){
					if(l==output.pageNo){
						html2+=`
							<li class="liclick">${l}</li>	
						`;
					}else{
						html2+=`
							<li>${l}</li>	
						`;
					}
				}
			}else{
				for(var l=output.pageCount-9;l<=output.pageCount;l++){
					if(l==output.pageNo){
						html2+=`
							<li class="liclick">${l}</li>	
						`;
					}else{
						html2+=`
							<li>${l}</li>	
						`;
					}
				}
			};
			if(ulw<10){
				$(".fenlei-content>div:nth-child(3)>ul").width(40*ulw);
				$(".fenlei-content>:nth-child(3)>span:first-child").css("marginLeft",415+((10-ulw)/2)*40);
			}else{
				$(".fenlei-content>div:nth-child(3)>ul").width(400);
				$(".fenlei-content>:nth-child(3)>span:first-child").css("marginLeft",415);
			}
			document.querySelector(".fenlei-content>div:nth-child(3)>ul").innerHTML=html2;
			if(output.pageNo>1){
				$(".fenlei-content>:nth-child(3)>span:first-child").css("visibility","visible");
			}else{
				$(".fenlei-content>:nth-child(3)>span:first-child").css("visibility","hidden");
			}
			if(output.pageNo==output.pageCount){
				$(".fenlei-content>:nth-child(3)>span:last-child").css("visibility","hidden");
			}else{
				$(".fenlei-content>:nth-child(3)>span:last-child").css("visibility","visible");
			}
			/*******************/
		})
	}
	load(pno=1);
	/****更新热门内容切换*****/
	function load2(pno){
		$.ajax({
			type:"get",
			url:"data/fenlei/getFenleiFenye2.php",
			data:"pno="+pno,
			dataType:"json"
		}).then(function(output){
			var ulw=output.pageCount;
			var count=output.count[0];
			var html="",html2="",html3="";
			var ccc=output.count[0];
			html3+=`<span>共${ccc}条筛选结果</span>`;
			if($(".fenlei-content>div:first-child").is(':has(span)')){
				$(".fenlei-content>div:first-child>span").empty();
				$(".fenlei-content>div:first-child").append(html3);
			}else{
				$(".fenlei-content>div:first-child").append(html3);
			}
			output.products.forEach(function(p,i){
				var {lid,limg,title,zjgx,details,rq}=p;
				if(i<=count){
					html+=`
						<li>
							<a href="xqy.html?lid=${lid}"><img src="${limg}"></a>
							<a href="xqy.html?lid=${lid}">${title}</a>
							<span>${zjgx}话</span>
							<span>${details}</span>
							<span>人气：${rq}万</span>
						</li>	
					`;
				}
			})
			if(ulw<10){
				$(".fenlei-content>div:nth-child(3)>ul").width(40*ulw);
				$(".fenlei-content>:nth-child(3)>span:first-child").css("marginLeft",415+((10-ulw)/2)*40);
			}else{
				$(".fenlei-content>div:nth-child(3)>ul").width(400);
				$(".fenlei-content>:nth-child(3)>span:first-child").css("marginLeft",415);
			}
			document.querySelector(".fenlei-content>div:nth-child(2)>ul").innerHTML=html;
			if(pno<8){
				for(var l=1;l<=output.pageCount;l++){
					if(l==output.pageNo){
						html2+=`
							<li class="liclick">${l}</li>	
						`;
					}else{
						html2+=`
							<li>${l}</li>	
						`;
					}
				}
			}else if(pno>=8&&output.pageCount-pno>2){
				for(var l=pno-6;l<=output.pageCount;l++){
					if(l==output.pageNo){
						html2+=`
							<li class="liclick">${l}</li>	
						`;
					}else{
						html2+=`
							<li>${l}</li>	
						`;
					}
				}
			}else{
				for(var l=output.pageCount-9;l<=output.pageCount;l++){
					if(l==output.pageNo){
						html2+=`
							<li class="liclick">${l}</li>	
						`;
					}else{
						html2+=`
							<li>${l}</li>	
						`;
					}
				}
			};
			document.querySelector(".fenlei-content>div:nth-child(3)>ul").innerHTML=html2;
			if(output.pageNo>1){
				$(".fenlei-content>:nth-child(3)>span:first-child").css("visibility","visible");
			}else{
				$(".fenlei-content>:nth-child(3)>span:first-child").css("visibility","hidden");
			}
			if(output.pageNo==output.pageCount){
				$(".fenlei-content>:nth-child(3)>span:last-child").css("visibility","hidden");
			}else{
				$(".fenlei-content>:nth-child(3)>span:last-child").css("visibility","visible");
			}
		})
	}
	var jstj={sx:"全部",jd:"全部",tc:"全部",sz:"全部",bq:"全部",pno:1 };
	function load3(jstj){
		$.ajax({
			type:"get",
			url:"data/fenlei/getFenleiFenye3.php",
			data:jstj,
			dataType:"json"
		}).then(function(output){
			var ulw=output.pageCount;
			var count=output.count[0];
			var html="",html2="",html3="";
			var ccc=output.count[0];
			html3+=`<span>共${ccc}条筛选结果</span>`;
			if($(".fenlei-content>div:first-child").is(':has(span)')){
				$(".fenlei-content>div:first-child>span").empty();
				$(".fenlei-content>div:first-child").append(html3);
			}else{
				$(".fenlei-content>div:first-child").append(html3);
			}
			var pno=jstj.pno;
			output.products.forEach(function(p,i){
				var {lid,limg,title,zjgx,details,rq,sx,jd,tc,sz,bq}=p;
					if(i<=count){
						html+=`
							<li>
								<a href="xqy.html?lid=${lid}"><img src="${limg}"></a>
								<a href="xqy.html?lid=${lid}">${title}</a>
								<span>${zjgx}话</span>
								<span>${details}</span>
								<span>人气：${rq}万</span>
							</li>	
						`;
					}
			})
			if(ulw<10){
				$(".fenlei-content>div:nth-child(3)>ul").width(40*ulw);
				$(".fenlei-content>:nth-child(3)>span:first-child").css("marginLeft",415+((10-ulw)/2)*40);
			}else{
				$(".fenlei-content>div:nth-child(3)>ul").width(400);
				$(".fenlei-content>:nth-child(3)>span:first-child").css("marginLeft",415);
			}
			document.querySelector(".fenlei-content>div:nth-child(2)>ul").innerHTML=html;
			if(pno<=8){
				for(var l=1;l<=output.pageCount;l++){
					if(l==output.pageNo){
						html2+=`
							<li class="liclick">${l}</li>	
						`;
					}else{
						html2+=`
							<li>${l}</li>	
						`;
					}
				}
			}else if(pno>8&&output.pageCount-pno>2){
				for(var l=pno-6;l<=output.pageCount;l++){
					if(l==output.pageNo){
						html2+=`
							<li class="liclick">${l}</li>	
						`;
					}else{
						html2+=`
							<li>${l}</li>	
						`;
					}
				}
			}else{
				for(var l=output.pageCount-9;l<=output.pageCount;l++){
					if(l==output.pageNo){
						html2+=`
							<li class="liclick">${l}</li>	
						`;
					}else{
						html2+=`
							<li>${l}</li>	
						`;
					}
				}
			};
			document.querySelector(".fenlei-content>div:nth-child(3)>ul").innerHTML=html2;
			if(output.pageNo>1){
				$(".fenlei-content>:nth-child(3)>span:first-child").css("visibility","visible");
			}else{
				$(".fenlei-content>:nth-child(3)>span:first-child").css("visibility","hidden");
			}
			if(output.pageNo==output.pageCount||output.pageCount==0){
				$(".fenlei-content>:nth-child(3)>span:last-child").css("visibility","hidden");
			}else{
				$(".fenlei-content>:nth-child(3)>span:last-child").css("visibility","visible");
			}
		})
	}
	/***分页条***/
	$(".fenlei-content>:nth-child(3)>ul").on("click","li",function(){
		var c=$(this).html();
		var ppp=$(".fenlei-content>div:first-child>a[class='a-clickstyle2']").index();
		if(jstj.sx=="全部"&&jstj.jd=="全部"&&jstj.tc=="全部"&&jstj.sz=="全部"&&jstj.bq=="全部"){
			ppp==0?load(pno=c):load2(pno=c)
		}else{
			load3(jstj,jstj.pno=c);
			
		};
	});

	$(".fenlei-content>:nth-child(3)>span:first-child").click(function(){
		var d=$(".fenlei-content>:nth-child(3)>ul>li[class='liclick']").html();
		d--;
		var ppp=$(".fenlei-content>div:first-child>a[class='a-clickstyle2']").index();
		if(jstj.sx=="全部"&&jstj.jd=="全部"&&jstj.tc=="全部"&&jstj.sz=="全部"&&jstj.bq=="全部"){
			ppp==0?load(pno=d):load2(pno=d);
		}else{	
			load3(jstj,jstj.pno=d);
		}
	});

	$(".fenlei-content>:nth-child(3)>span:last-child").click(function(){
		var d=$(".fenlei-content>:nth-child(3)>ul>li[class='liclick']").html();
		d++;
		var ppp=$(".fenlei-content>div:first-child>a[class='a-clickstyle2']").index();
		if(jstj.sx=="全部"&&jstj.jd=="全部"&&jstj.tc=="全部"&&jstj.sz=="全部"&&jstj.bq=="全部"){
			ppp==0?load(pno=d):load2(pno=d);
		}else{
			load3(jstj,jstj.pno=d);
		}
	})
	/***检索题材动态加载****/
	$.ajax({
		type:"get",
		url:"data/fenlei/getFenleiJstc.php",
		dataType:"json"
	}).then(function(tclx){
		var html="";
		html+=`<li><a href="" class="a-clickstyle">全部</a></li>`;
		tclx.forEach(function(p,i){
			if(i<26){
				html+=`
					<li><a href="">${p.tc}</a></li>	
				`;
			}
		})
		document.querySelector(".fenlei-jsk>div>div:last-child>:nth-child(3)>ul").innerHTML=html;
		$(".fenlei-jsk>div>div:last-child>div>a , .fenlei-jsk>div>div:last-child>:nth-child(3)>ul>li>a").mouseover(function(){
			if(!$(this).hasClass("a-clickstyle"))
			$(this).addClass("hover")
		}).mouseout(function(){
			$(this).removeClass("hover")
		});
		$(".fenlei-jsk>div>div:last-child>div>a").click(function(e){
			e.preventDefault();
			$(this).addClass("a-clickstyle").siblings().removeClass("a-clickstyle");
			var p=$(this).parent().attr("id");
			var h=$(this).html();
			if(p=="sx"){
				jstj["sx"]=h;
			}else if(p=="jd"){
				jstj["jd"]=h;
			}else if(p=="sz"){
				jstj["sz"]=h;
			}else if(p=="bq"){
				jstj["bq"]=h;
			}
			load3(jstj,jstj.pno=1);
		});
		$(".fenlei-jsk>div>div:last-child>:nth-child(3)>ul>li>a").click(function(e){
			e.preventDefault();
			$(this).addClass("a-clickstyle").parent().siblings().find("a").removeClass("a-clickstyle");
			if($(this).parent().parent().parent().attr("id")=="tc"){
				jstj["tc"]=$(this).html();
				load3(jstj,jstj.pno=1);
			}
		});
	})
	/***漫画检索部分***/
	$(".fenlei-content>div:first-child>a").click(function(e){
		e.preventDefault();
		$(this).addClass("a-clickstyle2").siblings("a").removeClass("a-clickstyle2");
		$(this).index()==0?load(pno=1):load2(pno=1);
		$(".fenlei-jsk>div>div:last-child>div").each(function(){
			$(this).children("a:eq(0)").addClass("a-clickstyle").siblings().removeClass("a-clickstyle");
		})
		$(".fenlei-jsk>div>div:last-child>:nth-child(3)>ul").children("li:eq(0)").find("a").addClass("a-clickstyle").parent().siblings().find("a").removeClass("a-clickstyle");
	})

})