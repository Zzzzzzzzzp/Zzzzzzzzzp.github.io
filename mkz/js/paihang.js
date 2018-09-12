$(function(){
	$(".paihang-content-l>dl").on("mouseover","dt",function(){
		$(this).find("a").addClass("a-color").find("i").addClass("i-style")
	}).on("mouseout","dt",function(){
		if($(this).siblings().children("a").hasClass("a-color")){
			$(this).find("a").removeClass("a-color").find("i").removeClass("i-style")
		}
	}).on("click","dt",function(){
		$(this).find("a").addClass("a-color").find("i").addClass("i-style");
		$(this).siblings().find("a").removeClass("a-color").find("i").removeClass("i-style");	
	})
})
$(function(){
	$.ajax({
		type:"get",
		url:"data/paihang/getPaihangProducts.php",
		dataType:"json"
	}).then(function(products){
		var html="";
		products.forEach(function(p,i){
			var bd=["人气榜","月票榜","收藏榜","独家榜","新作榜","上升榜","合作榜","评分榜","热评榜"];//榜单名称
			var pz=["周点击","月票数","总收藏","周点击","周点击","周点击","周点击","总评分","周热度"];//票数种类
			var pzlx=["rq","yp","sc","rq","rq","rq","rq","pf","dz"];
			var {lid,title,details,limg}=p;
			if(i===1){
				html+=`<div>
						<a href=""><i></i>${bd[1]}</a>
						<ul>
							<li>
								<a href="xqy.html?lid=${p[0].lid}"><img src="${p[0].limg}" alt=""></a>
								<div>
									<span><a href="xqy.html?lid=${p[0].lid}">${p[0].title}</a></span>
									<span>${p[0].details}</span>
									<span>${pz[1]}：<b>${p[0].yp}</b></span>
								</div>
								<span>1</span>
							</li>
							<li>
								<span>2</span>
								<span><a href="xqy.html?lid=${p[1].lid}">${p[1].title}</a></span>
								<span>${p[1].yp}</span>	
							</li>
							<li>
								<span>3</span>
								<span><a href="xqy.html?lid=${p[2].lid}">${p[2].title}</a></span>
								<span>${p[2].yp}</span>
							</li>
							<li>
								<span>4</span>
								<span><a href="xqy.html?lid=${p[3].lid}">${p[3].title}</a></span>
								<span>${p[3].yp}</span>	
							</li>
							<li>
								<span>5</span>
								<span><a href="xqy.html?lid=${p[4].lid}">${p[4].title}</a></span>
								<span>${p[4].yp}</span>	
							</li>
							<li>
								<span>6</span>
								<span><a href="xqy.html?lid=${p[5].lid}">${p[5].title}</a></span>
								<span>${p[5].yp}</span>	
							</li>
							<li>
								<span>7</span>
								<span><a href="xqy.html?lid=${p[6].lid}">${p[6].title}</a></span>
								<span>${p[6].yp}</span>
							</li>
							<li>
								<span>8</span>
								<span><a href="xqy.html?lid=${p[7].lid}">${p[7].title}</a></span>
								<span>${p[7].yp}</span>
							</li>
							<li>
								<span>9</span>
								<span><a href="xqy.html?lid=${p[8].lid}">${p[8].title}</a></span>
								<span>${p[8].yp}</span>
							</li>
							<li>
								<span>10</span>
								<span><a href="xqy.html?lid=${p[9].lid}">${p[9].title}</a></span>
								<span>${p[9].yp}</span>	
							</li>
						</ul>
					</div>`;
			}
			if(i===2){
				html+=`<div>
						<a href=""><i></i>${bd[2]}</a>
						<ul>
							<li>
								<a href="xqy.html?lid=${p[0].lid}"><img src="${p[0].limg}" alt=""></a>
								<div>
									<span><a href="xqy.html?lid=${p[0].lid}">${p[0].title}</a></span>
									<span>${p[0].details}</span>
									<span>${pz[1]}：<b>${p[0].sc}万</b></span>
								</div>
								<span>1</span>
							</li>
							<li>
								<span>2</span>
								<span><a href="xqy.html?lid=${p[1].lid}">${p[1].title}</a></span>
								<span>${p[1].sc}万</span>	
							</li>
							<li>
								<span>3</span>
								<span><a href="xqy.html?lid=${p[2].lid}">${p[2].title}</a></span>
								<span>${p[2].sc}万</span>
							</li>
							<li>
								<span>4</span>
								<span><a href="xqy.html?lid=${p[3].lid}">${p[3].title}</a></span>
								<span>${p[3].sc}万</span>	
							</li>
							<li>
								<span>5</span>
								<span><a href="xqy.html?lid=${p[4].lid}">${p[4].title}</a></span>
								<span>${p[4].sc}万</span>	
							</li>
							<li>
								<span>6</span>
								<span><a href="xqy.html?lid=${p[5].lid}">${p[5].title}</a></span>
								<span>${p[5].sc}万</span>	
							</li>
							<li>
								<span>7</span>
								<span><a href="xqy.html?lid=${p[6].lid}">${p[6].title}</a></span>
								<span>${p[6].sc}万</span>
							</li>
							<li>
								<span>8</span>
								<span><a href="xqy.html?lid=${p[7].lid}">${p[7].title}</a></span>
								<span>${p[7].sc}万</span>
							</li>
							<li>
								<span>9</span>
								<span><a href="xqy.html?lid=${p[8].lid}">${p[8].title}</a></span>
								<span>${p[8].sc}万</span>
							</li>
							<li>
								<span>10</span>
								<span><a href="xqy.html?lid=${p[9].lid}">${p[9].title}</a></span>
								<span>${p[9].sc}万</span>	
							</li>
						</ul>
					</div>`;
			}
			if(i===7){
				html+=`<div>
						<a href=""><i></i>${bd[7]}</a>
						<ul>
							<li>
								<a href="xqy.html?lid=${p[0].lid}"><img src="${p[0].limg}" alt=""></a>
								<div>
									<span><a href="xqy.html?lid=${p[0].lid}">${p[0].title}</a></span>
									<span>${p[0].details}</span>
									<span>${pz[1]}：<b>${p[0].sc}万</b></span>
								</div>
								<span>1</span>
							</li>
							<li>
								<span>2</span>
								<span><a href="xqy.html?lid=${p[1].lid}">${p[1].title}</a></span>
								<span>${p[1].sc}万</span>	
							</li>
							<li>
								<span>3</span>
								<span><a href="xqy.html?lid=${p[2].lid}">${p[2].title}</a></span>
								<span>${p[2].sc}万</span>
							</li>
							<li>
								<span>4</span>
								<span><a href="xqy.html?lid=${p[3].lid}">${p[3].title}</a></span>
								<span>${p[3].sc}万</span>	
							</li>
							<li>
								<span>5</span>
								<span><a href="xqy.html?lid=${p[4].lid}">${p[4].title}</a></span>
								<span>${p[4].sc}万</span>	
							</li>
							<li>
								<span>6</span>
								<span><a href="xqy.html?lid=${p[5].lid}">${p[5].title}</a></span>
								<span>${p[5].sc}万</span>	
							</li>
							<li>
								<span>7</span>
								<span><a href="xqy.html?lid=${p[6].lid}">${p[6].title}</a></span>
								<span>${p[6].sc}万</span>
							</li>
							<li>
								<span>8</span>
								<span><a href="xqy.html?lid=${p[7].lid}">${p[7].title}</a></span>
								<span>${p[7].sc}万</span>
							</li>
							<li>
								<span>9</span>
								<span><a href="xqy.html?lid=${p[8].lid}">${p[8].title}</a></span>
								<span>${p[8].sc}万</span>
							</li>
							<li>
								<span>10</span>
								<span><a href="xqy.html?lid=${p[9].lid}">${p[9].title}</a></span>
								<span>${p[9].sc}万</span>	
							</li>
						</ul>
					</div>`;
			}
			if(i===8){
				html+=`<div>
						<a href=""><i></i>${bd[8]}</a>
						<ul>
							<li>
								<a href="xqy.html?lid=${p[0].lid}"><img src="${p[0].limg}" alt=""></a>
								<div>
									<span><a href="xqy.html?lid=${p[0].lid}">${p[0].title}</a></span>
									<span>${p[0].details}</span>
									<span>${pz[1]}：<b>${p[0].sc}万</b></span>
								</div>
								<span>1</span>
							</li>
							<li>
								<span>2</span>
								<span><a href="xqy.html?lid=${p[1].lid}">${p[1].title}</a></span>
								<span>${p[1].sc}万</span>	
							</li>
							<li>
								<span>3</span>
								<span><a href="xqy.html?lid=${p[2].lid}">${p[2].title}</a></span>
								<span>${p[2].sc}万</span>
							</li>
							<li>
								<span>4</span>
								<span><a href="xqy.html?lid=${p[3].lid}">${p[3].title}</a></span>
								<span>${p[3].sc}万</span>	
							</li>
							<li>
								<span>5</span>
								<span><a href="xqy.html?lid=${p[4].lid}">${p[4].title}</a></span>
								<span>${p[4].sc}万</span>	
							</li>
							<li>
								<span>6</span>
								<span><a href="xqy.html?lid=${p[5].lid}">${p[5].title}</a></span>
								<span>${p[5].sc}万</span>	
							</li>
							<li>
								<span>7</span>
								<span><a href="xqy.html?lid=${p[6].lid}">${p[6].title}</a></span>
								<span>${p[6].sc}万</span>
							</li>
							<li>
								<span>8</span>
								<span><a href="xqy.html?lid=${p[7].lid}">${p[7].title}</a></span>
								<span>${p[7].sc}万</span>
							</li>
							<li>
								<span>9</span>
								<span><a href="xqy.html?lid=${p[8].lid}">${p[8].title}</a></span>
								<span>${p[8].sc}万</span>
							</li>
							<li>
								<span>10</span>
								<span><a href="xqy.html?lid=${p[9].lid}">${p[9].title}</a></span>
								<span>${p[9].sc}万</span>	
							</li>
						</ul>
					</div>`;
			}
			if(i<9&&i!=1&&i!=2&&i!=7&&i!=8){
				html+=`<div>
						<a href=""><i></i>${bd[i]}</a>
						<ul>
							<li>
								<a href="xqy.html?lid=${p[0].lid}"><img src="${p[0].limg}" alt=""></a>
								<div>
									<span><a href="xqy.html?lid=${p[0].lid}">${p[0].title}</a></span>
									<span>${p[0].details}</span>
									<span>${pz[1]}：<b>${p[0].sc}万</b></span>
								</div>
								<span>1</span>
							</li>
							<li>
								<span>2</span>
								<span><a href="xqy.html?lid=${p[1].lid}">${p[1].title}</a></span>
								<span>${p[1].sc}万</span>	
							</li>
							<li>
								<span>3</span>
								<span><a href="xqy.html?lid=${p[2].lid}">${p[2].title}</a></span>
								<span>${p[2].sc}万</span>
							</li>
							<li>
								<span>4</span>
								<span><a href="xqy.html?lid=${p[3].lid}">${p[3].title}</a></span>
								<span>${p[3].sc}万</span>	
							</li>
							<li>
								<span>5</span>
								<span><a href="xqy.html?lid=${p[4].lid}">${p[4].title}</a></span>
								<span>${p[4].sc}万</span>	
							</li>
							<li>
								<span>6</span>
								<span><a href="xqy.html?lid=${p[5].lid}">${p[5].title}</a></span>
								<span>${p[5].sc}万</span>	
							</li>
							<li>
								<span>7</span>
								<span><a href="xqy.html?lid=${p[6].lid}">${p[6].title}</a></span>
								<span>${p[6].sc}万</span>
							</li>
							<li>
								<span>8</span>
								<span><a href="xqy.html?lid=${p[7].lid}">${p[7].title}</a></span>
								<span>${p[7].sc}万</span>
							</li>
							<li>
								<span>9</span>
								<span><a href="xqy.html?lid=${p[8].lid}">${p[8].title}</a></span>
								<span>${p[8].sc}万</span>
							</li>
							<li>
								<span>10</span>
								<span><a href="xqy.html?lid=${p[9].lid}">${p[9].title}</a></span>
								<span>${p[9].sc}万</span>	
							</li>
						</ul>
					</div>`;
			}	
		})
		document.querySelector("#main>.paihang>.paihang-content>.paihang-content-r").innerHTML=html;
	})
})
$(function(){
	$(".paihang-content-l>dl").on("click","dt",function(e){
		e.preventDefault();
		var q=$(this).index()-1;
		if(q!=-1){
			$(".paihang-content-r").css("display","none");
			$(".paihang-content-yc").css("display","block");
		}else{
			$(".paihang-content-r").css("display","block");
			$(".paihang-content-yc").css("display","none");
		}
		$.ajax({
			type:"get",
			url:"data/paihang/getPhallProducts.php",
			dataType:"json"
		}).then(function(products){
			var html="",html2="";
			products.forEach(function(p,i){
				var {lid,title,details,limg,pf,jd,rq}=p;
				if(i==q){
					if(i!=1&&i!=2&&i!=7&&i!=8){
						html+=`
							<div>
								<a href="xqy.html?lid=${p[0].lid}"><img src="${p[0].limg}"></a>
								<div>
									<b>${p[0].title}<span>${p[0].pf}</span></b>
									<p>${p[0].details}</p>
									<p>状态：<span>${p[0].jd}</span>周点击：<span>${p[0].rq}万</span></p>
								</div>
							</div>
							<div>
								<a href="xqy.html?lid=${p[1].lid}"><img src="${p[1].limg}"></a>
								<div>
									<b>${p[1].title}<span>${p[1].pf}</span></b>
									<p>${p[1].details}</p>
									<p>状态：<span>${p[1].jd}</span>周点击：<span>${p[1].rq}万</span></p>
								</div>
							</div>
							<div>
								<a href="xqy.html?lid=${p[2].lid}"><img src="${p[2].limg}"></a>
								<div>
									<b>${p[2].title}<span>${p[2].pf}</span></b>
									<p>${p[2].details}</p>
									<p>状态：<span>${p[2].jd}</span>周点击：<span>${p[2].rq}万</span></p>
								</div>
							</div>
							<ul></ul>	
						`;
						p.forEach(function(p2,i2){
							var {lid,title,details,limg,pf,jd,rq}=p2;
							if(i2<60&&i2>2){
								html2+=`
									<li><span>${i2+1}</span><a href="xqy.html?lid=${p2.lid}">${p2.title}</a><span>${p2.rq}万</span></li>	
								`;
							}
						})
					}
					if(q==1){
						html+=`
							<div>
								<a href="xqy.html?lid=${p[0].lid}"><img src="${p[0].limg}"></a>
								<div>
									<b>${p[0].title}<span>${p[0].pf}</span></b>
									<p>${p[0].details}</p>
									<p>状态：<span>${p[0].jd}</span>总票数：<span>${p[0].yp}</span></p>
								</div>
							</div>
							<div>
								<a href="xqy.html?lid=${p[1].lid}"><img src="${p[1].limg}"></a>
								<div>
									<b>${p[1].title}<span>${p[1].pf}</span></b>
									<p>${p[1].details}</p>
									<p>状态：<span>${p[1].jd}</span>总票数：<span>${p[0].yp}</span></p>
								</div>
							</div>
							<div>
								<a href="xqy.html?lid=${p[2].lid}"><img src="${p[2].limg}"></a>
								<div>
									<b>${p[2].title}<span>${p[2].pf}</span></b>
									<p>${p[2].details}</p>
									<p>状态：<span>${p[2].jd}</span>总票数：<span>${p[0].yp}</span></p>
								</div>
							</div>
							<ul></ul>	
						`;
						p.forEach(function(p2,i2){
							var {lid,title,details,limg,pf,jd,rq}=p2;
							if(i2<60&&i2>2){
								html2+=`
									<li><span>${i2+1}</span><a href="xqy.html?lid=${p2.lid}">${p2.title}</a><span>${p2.yp}</span></li>	
								`;
							}
						})
					}
					if(q==2){
						html+=`
							<div>
								<a href="xqy.html?lid=${p[0].lid}"><img src="${p[0].limg}"></a>
								<div>
									<b>${p[0].title}<span>${p[0].pf}</span></b>
									<p>${p[0].details}</p>
									<p>状态：<span>${p[0].jd}</span>总收藏：<span>${p[0].sc}万</span></p>
								</div>
							</div>
							<div>
								<a href="xqy.html?lid=${p[1].lid}"><img src="${p[1].limg}"></a>
								<div>
									<b>${p[1].title}<span>${p[1].pf}</span></b>
									<p>${p[1].details}</p>
									<p>状态：<span>${p[1].jd}</span>总收藏：<span>${p[0].sc}万</span></p>
								</div>
							</div>
							<div>
								<a href="xqy.html?lid=${p[2].lid}"><img src="${p[2].limg}"></a>
								<div>
									<b>${p[2].title}<span>${p[2].pf}</span></b>
									<p>${p[2].details}</p>
									<p>状态：<span>${p[2].jd}</span>总收藏：<span>${p[0].sc}万</span></p>
								</div>
							</div>
							<ul></ul>	
						`;
						p.forEach(function(p2,i2){
							var {lid,title,details,limg,pf,jd,rq}=p2;
							if(i2<60&&i2>2){
								html2+=`
									<li><span>${i2+1}</span><a href="xqy.html?lid=${p2.lid}">${p2.title}</a><span>${p2.sc}万</span></li>	
								`;
							}
						})
					}
					if(q==7){
						html+=`
							<div>
								<a href="xqy.html?lid=${p[0].lid}"><img src="${p[0].limg}"></a>
								<div>
									<b>${p[0].title}<span>${p[0].pf}</span></b>
									<p>${p[0].details}</p>
									<p>状态：<span>${p[0].jd}</span>总收藏：<span>${p[0].sc}</span></p>
								</div>
							</div>
							<div>
								<a href="xqy.html?lid=${p[1].lid}"><img src="${p[1].limg}"></a>
								<div>
									<b>${p[1].title}<span>${p[1].pf}</span></b>
									<p>${p[1].details}</p>
									<p>状态：<span>${p[1].jd}</span>总收藏：<span>${p[0].sc}</span></p>
								</div>
							</div>
							<div>
								<a href="xqy.html?lid=${p[2].lid}"><img src="${p[2].limg}"></a>
								<div>
									<b>${p[2].title}<span>${p[2].pf}</span></b>
									<p>${p[2].details}</p>
									<p>状态：<span>${p[2].jd}</span>总收藏：<span>${p[0].sc}</span></p>
								</div>
							</div>
							<ul></ul>	
						`;
						p.forEach(function(p2,i2){
							var {lid,title,details,limg,pf,jd,rq}=p2;
							if(i2<60&&i2>2){
								html2+=`
									<li><span>${i2+1}</span><a href="xqy.html?lid=${p2.lid}">${p2.title}</a><span>${p2.pf}</span></li>	
								`;
							}
						})
					}
					if(q==8){
						html+=`
							<div>
								<a href="xqy.html?lid=${p[0].lid}"><img src="${p[0].limg}"></a>
								<div>
									<b>${p[0].title}<span>${p[0].pf}</span></b>
									<p>${p[0].details}</p>
									<p>状态：<span>${p[0].jd}</span>周热度：<span>${p[0].dz}</span></p>
								</div>
							</div>
							<div>
								<a href="xqy.html?lid=${p[1].lid}"><img src="${p[1].limg}"></a>
								<div>
									<b>${p[1].title}<span>${p[1].pf}</span></b>
									<p>${p[1].details}</p>
									<p>状态：<span>${p[1].jd}</span>周热度：<span>${p[0].dz}</span></p>
								</div>
							</div>
							<div>
								<a href="xqy.html?lid=${p[2].lid}"><img src="${p[2].limg}"></a>
								<div>
									<b>${p[2].title}<span>${p[2].pf}</span></b>
									<p>${p[2].details}</p>
									<p>状态：<span>${p[2].jd}</span>周热度：<span>${p[0].dz}</span></p>
								</div>
							</div>
							<ul></ul>	
						`;
						p.forEach(function(p2,i2){
							var {lid,title,details,limg,pf,jd,rq}=p2;
							if(i2<60&&i2>2){
								html2+=`
									<li><span>${i2+1}</span><a href="xqy.html?lid=${p2.lid}">${p2.title}</a><span>${p2.dz}</span></li>	
								`;
							}
						})
					}
				}
			})
			if(q>-1&&q<9){
				document.querySelector("#main>.paihang>.paihang-content>.paihang-content-yc").innerHTML=html;
				document.querySelector("#main>.paihang>.paihang-content>.paihang-content-yc>ul").innerHTML=html2;
			}
		})
	})
})