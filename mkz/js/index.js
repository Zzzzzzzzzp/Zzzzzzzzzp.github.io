$(function(){
/*轮播图*/
	var $wrap=$(".banner-wrap");
	var $aLeft=$(".ck-left") , $aRight=$(".ck-right");
	var WRAPWIDTH=1300,interval=500,wait=3000,moved=0,timer=null;
	timer=setInterval(function(){
		move();
	},wait);
	function move(){
		moved++;
		$wrap.animate({
			left:-moved*WRAPWIDTH
		},interval,function(){
			if(moved==$wrap.children().length-1){
				$wrap.css("left",0);
				moved=0;
			}
		})
	}
	$(".banner").mouseenter(function(){
		clearInterval(timer);
		timer=null;
	}).mouseleave(function(){
		timer=setInterval(function(){
			move();
		},wait);
	});
	$aRight.click(function(){
		if(!$wrap.is(":animated")){
			move();
		}
	});
	$aLeft.click(function(){
		if(!$wrap.is(":animated")){
			if(moved==0){
				moved=$wrap.children().length-1;
				$wrap.css("left",-moved*WRAPWIDTH);
			}else{
				moved--;
				$wrap.animate({
					left:-moved*WRAPWIDTH
				},interval)
			}
		}
	});
	

/*榜单排行*/
	$("#main>.zjgx>.zjgx-r>div").on("mouseover","span",function(){
			$(this).addClass("onspan").siblings('span').removeClass("onspan")
	})
	$("#main>.zjgx>.zjgx-r>div>.ss1").hover(function(){$("#main>.zjgx>.zjgx-r>div>.u1").removeClass("ddd").siblings('ul').addClass("ddd")})
	$("#main>.zjgx>.zjgx-r>div>.ss2").hover(function(){$("#main>.zjgx>.zjgx-r>div>.u2").removeClass("ddd").siblings('ul').addClass("ddd")})
	$("#main>.zjgx>.zjgx-r>div>.ss3").hover(function(){$("#main>.zjgx>.zjgx-r>div>.u3").removeClass("ddd").siblings('ul').addClass("ddd")})


/*右侧导航条*/
	var $divLift=$("#lift"),$floors=$(".floor");
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>=300){
			$divLift.show();
			$floors.each(function(i,f){
				var $f=$(f);
				var offsetTop=$f.offset().top;
				if(offsetTop<=scrollTop+innerHeight/2)
					$divLift.find(".lift_item:eq("+i+")")
						.addClass("lifthover")
						.siblings().removeClass("lifthover");
			})
		}else
				$divLift.hide();
	});
	$divLift.children("ul").on("click","li",function(){
		var $li=$(this);
		var i=$li.index();
		var offsetTop=$($floors[i]).offset().top;
		$("html,body").stop(true).animate({
			scrollTop: offsetTop
		},500)
	})
})


/*楼层内容*/
$(function(){
	$.ajax({
		type:"get",
		url:"data/index/getIndexProducts.php",
		dataType:"json"
	}).then(function(products){
		var html="";
		var html2="";
		products.forEach(function(p,i){
			var {lid,title,details,author,limg,zjgx}=p;
			if(34<i&&i<43){
				html+=`
					<li>
						<a href="xqy.html?lid=${lid}" data-text=""><img src="${limg}"><span>第${zjgx}话</span></a>
						<div>
							<dl>
								<dt><a href="xqy.html?lid=${lid}">${title}</a></dt>
								<dd>${details}</dd>
								<dd>作者：${author}</dd>
							</dl>
						</div>
					</li>	
				`;
			}
			if(23<i&&i<34){
				html2+=`
					<li>
						<a href="xqy.html?lid=${lid}" data-text=""><img src="${limg}"><span>第${zjgx}话</span></a>
						<div>
							<dl>
								<dt><a href="xqy.html?lid=${lid}">${title}</a></dt>
								<dd>${details}</dd>
								<dd>作者：${author}</dd>
							</dl>
						</div>
					</li>	
				`;
			}
		})
		document.querySelector("#main>.jpkz>.jpkz-r>ul").innerHTML=html;
		document.querySelector("#main>.xzb>.xzb-l>ul").innerHTML=html2;
	})
})