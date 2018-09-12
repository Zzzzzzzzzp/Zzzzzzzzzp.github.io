$(function(){
	$.ajax({
		type:"get",
		url:"data/gengxin/getGengxinProducts.php",
		dataType:"json"
	}).then(function(products){
		var html="";
		products.forEach(function(p,i){
			var {lid,title,details,limg,zjgx,rq,gxsj}=p;
			if(gxsj==6){
				html+=`
					<li>
						<a href="xqy.html?lid=${lid}"><img src="${limg}"></a>
						<a href="xqy.html?lid=${lid}">${title}</a>
						<span>第${zjgx}话</span>
						<span>${details}</span>
						<span>${rq}万</span>
					</li>
					`;
			}
		})
		document.querySelector(".main>.gengxin-2>ul").innerHTML=html;
		$(".gengxin-2>div>ul").on("mouseover","li",function(){
			$(this).addClass("gengxin-h").siblings().removeClass("gengxin-h");
			html="";
			var a=$(this).index();
			products.forEach(function(p,i){
				var {lid,title,details,limg,zjgx,rq,gxsj}=p;
				if(gxsj==a){
					html+=`
						<li>
							<a href="xqy.html?lid=${lid}"><img src="${limg}"></a>
							<a href="xqy.html?lid=${lid}">${title}</a>
							<span>第${zjgx}话</span>
							<span>${details}</span>
							<span>${rq}万</span>
						</li>
						`;
				}
			})
			document.querySelector(".main>.gengxin-2>ul").innerHTML=html;
		})
	})
	
})