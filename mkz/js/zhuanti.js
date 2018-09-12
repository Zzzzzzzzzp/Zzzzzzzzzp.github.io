$(function(){
	$.ajax({
		type:"get",
		url:"data/zhuanti/zhuanti.php",
		dataType:"json"
	}).then(function(ztcontent){
		var num=10;
		load();
		function load(){
			var html=`
				<li>
						<a href=""><img src="images/80.png"></a>
						<div>
							<a href="">萨拉疯狂萨佛</a>
							<p><span>👍</span>25</p>
						</div>
					</li>
					<li>
						<a href=""><img src="images/79.png"></a>
						<div>
							<a href="">萨拉疯狂萨佛</a>
							<p><span>👍</span>25</p>
						</div>
					</li>
					<li>
						<a href=""><img src="images/78.png"></a>
						<div>
							<a href="">萨拉疯狂萨佛</a>
							<p><span>👍</span>25</p>
						</div>
					</li>
					<li>
						<a href=""><img src="images/76.png"></a>
						<div>
							<a href="">萨拉疯狂萨佛</a>
							<p><span>👍</span>25</p>
						</div>
					</li>	
			`;
			ztcontent.forEach(function(p,i){
				var {limg,dz,details,lid}=p;
				if(i<num){
					html+=`
						<li>
							<a href="xqy.html?lid=${lid}"><img src="${limg}"></a>
							<div>
								<a href="xqy.html?lid=${lid}">${details}</a>
								<p><span>👍</span>${dz}</p>
							</div>
						</li>	
					`;
				}
			})
			$(".content-2>ul").html(html);
			var ele=$(".content-2>ul").find("li");
			var col=4;
			var eleWidth=$(".content-2>ul>li").outerWidth(true);
			waterfall(ele,col,eleWidth);
			var lastliTop=parseInt($(".content-2>ul>li:last-child").css("top"));
			//var lastliH=parseInt($(".content-2>ul>li:last-child").outerHeight(true))+1;
			var ulH=lastliTop+470;
			$(".content-2>ul").height(ulH);
		}	
		//滚动加载
		$(document).scroll(function(){
			var html=$(".content-2>ul").html();
			if ($(document).scrollTop() + window.innerHeight == $(document).height()) {
				ztcontent.forEach(function(p,i){
					var {limg,dz,details,lid}=p;
					if(num<i&&i<num+8){
						html+=`
							<li>
								<a href="xqy.html?lid=${lid}"><img src="${limg}"></a>
								<div>
									<a href="xqy.html?lid=${lid}">${details}</a>
									<p><span>👍</span>${dz}</p>
								</div>
							</li>	
						`;
					}
				})
				$(".content-2>ul").html(html);
				var ele=$(".content-2>ul").find("li");
				var col=4;
				var eleWidth=$(".content-2>ul>li").outerWidth(true);
				waterfall(ele,col,eleWidth);
				var lastliTop=parseInt($(".content-2>ul>li:last-child").css("top"));
				//var lastliH=parseInt($(".content-2>ul>li:last-child").outerHeight(true))+1; 图片问题高度难以确定;
				var ulH=lastliTop+470;
				$(".content-2>ul").height(ulH);
				num+=8;
			}
		})
		//瀑布流
			function waterfall(ele,col,eleWidth){
				var hArr = [];
				for(var i = 0;i < ele.length;i++){
					if(i < col){
						hArr.push(ele[i].offsetHeight);
					}else{
						//min不能用于数组，apply的第一个参数传递作用域，第二个参数传递数组。Math.min.apply(null, [1, 2, 3]) 等价于 Math.min(1, 2, 3)
						var minH = Math.min.apply(null,hArr);
						var index = hArr.indexOf(minH);
						ele[i].style.position = 'absolute';   
						ele[i].style.top = minH + 'px';           //ele.style.left/top 是有px的，而offsetHeight/offsetWidth是没有px的
						ele[i].style.left = index * eleWidth + 'px';
						hArr[index] += ele[i].offsetHeight;
					}
				}
			}
	})
	$(".content-2>div").on("click","span",function(){
			$(this).addClass("click").siblings("span").removeClass("click");
	});
})


