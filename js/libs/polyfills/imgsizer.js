var imgSizer={Config:{imgCache:[],spacer:"/img/spacer.gif"},collate:function(C){var D=(document.all&&!window.opera&&!window.XDomainRequest)?1:0;if(D&&document.getElementsByTagName){var F=imgSizer;var E=F.Config.imgCache;var A=(C&&C.length)?C:document.getElementsByTagName("img");for(var B=0;B<A.length;B++){A[B].origWidth=A[B].offsetWidth;A[B].origHeight=A[B].offsetHeight;E.push(A[B]);F.ieAlpha(A[B]);A[B].style.width="100%";}if(E.length){F.resize(function(){for(var G=0;G<E.length;G++){var H=(E[G].offsetWidth/E[G].origWidth);E[G].style.height=(E[G].origHeight*H)+"px";}});}}},ieAlpha:function(A){var C=imgSizer;if(A.oldSrc){A.src=A.oldSrc;}var B=A.src;A.style.width=A.offsetWidth+"px";A.style.height=A.offsetHeight+"px";A.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+B+"', sizingMethod='scale')";A.oldSrc=B;A.src=C.Config.spacer;},resize:function(B){var A=window.onresize;if(typeof window.onresize!="function"){window.onresize=B;}else{window.onresize=function(){if(A){A();}B();};}}};