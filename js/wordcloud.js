"use strict";window.setImmediate||(window.setImmediate=function(){return window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var b=[void 0],c="zero-timeout-message",d=function(d){var e=b.length;return b.push(d),window.postMessage(c+e.toString(36),"*"),e};return window.addEventListener("message",function(d){if("string"==typeof d.data&&d.data.substr(0,c.length)===c){d.stopImmediatePropagation();var e=parseInt(d.data.substr(c.length),36);b[e]&&(b[e](),b[e]=void 0)}},!0),window.clearImmediate=function(c){b[c]&&(b[c]=void 0)},d}()||function(b){window.setTimeout(b,0)}}()),window.clearImmediate||(window.clearImmediate=function(){return window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(b){window.clearTimeout(b)}}()),function(a){var b=function(){var b=document.createElement("canvas");if(!b||!b.getContext)return!1;var c=b.getContext("2d");return!!c.getImageData&&(!!c.fillText&&(!!Array.prototype.some&&!!Array.prototype.push))}(),c=function(){if(b){for(var e,f,c=document.createElement("canvas").getContext("2d"),d=20;d;){if(c.font=d.toString(10)+"px sans-serif",c.measureText("Ｗ").width===e&&c.measureText("m").width===f)return d+1;e=c.measureText("Ｗ").width,f=c.measureText("m").width,d--}return 0}}(),d=function(b){for(var c,d,e=b.length;e;c=Math.floor(Math.random()*e),d=b[--e],b[e]=b[c],b[c]=d);return b},e=function(e,f){function u(a,b){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(b-a)+a).toFixed()+"%)"}if(b){Array.isArray(e)||(e=[e]),e.forEach(function(a,b){if("string"==typeof a){if(e[b]=document.getElementById(a),!e[b])throw"The element id specified is not found."}else if(!a.tagName&&!a.appendChild)throw"You must pass valid HTML elements, or ID of the element."});var g={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(f)for(var h in f)h in g&&(g[h]=f[h]);if("function"!=typeof g.weightFactor){var i=g.weightFactor;g.weightFactor=function(b){return b*i}}if("function"!=typeof g.shape)switch(g.shape){case"circle":default:g.shape="circle";break;case"cardioid":g.shape=function(b){return 1-Math.sin(b)};break;case"diamond":case"square":g.shape=function(b){var c=b%(2*Math.PI/4);return 1/(Math.cos(c)+Math.sin(c))};break;case"triangle-forward":g.shape=function(b){var c=b%(2*Math.PI/3);return 1/(Math.cos(c)+Math.sqrt(3)*Math.sin(c))};break;case"triangle":case"triangle-upright":g.shape=function(b){var c=(b+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(c)+Math.sqrt(3)*Math.sin(c))};break;case"pentagon":g.shape=function(b){var c=(b+.955)%(2*Math.PI/5);return 1/(Math.cos(c)+.726543*Math.sin(c))};break;case"star":g.shape=function(b){var c=(b+.955)%(2*Math.PI/10);return(b+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-c)+3.07768*Math.sin(2*Math.PI/10-c)):1/(Math.cos(c)+3.07768*Math.sin(c))}}g.gridSize=Math.max(Math.floor(g.gridSize),4);var n,o,p,q,r,s,t,j=g.gridSize,k=j-g.maskGapWidth,l=Math.abs(g.maxRotation-g.minRotation),m=Math.min(g.maxRotation,g.minRotation);switch(g.color){case"random-dark":t=function(){return u(10,50)};break;case"random-light":t=function(){return u(50,90)};break;default:"function"==typeof g.color&&(t=g.color)}var v=null;"function"==typeof g.classes&&(v=g.classes);var y,w=!1,x=[],z=function(b){var e,f,c=b.currentTarget,d=c.getBoundingClientRect();b.touches?(e=b.touches[0].clientX,f=b.touches[0].clientY):(e=b.clientX,f=b.clientY);var g=e-d.left,h=f-d.top,i=Math.floor(g*(c.width/d.width||1)/j),k=Math.floor(h*(c.height/d.height||1)/j);return x[i][k]},A=function(b){var c=z(b);if(y!==c)return y=c,c?void g.hover(c.item,c.dimension,b):void g.hover(void 0,void 0,b)},B=function(b){var c=z(b);c&&(g.click(c.item,c.dimension,b),b.preventDefault())},C=[],D=function(b){if(C[b])return C[b];var c=8*b,d=c,e=[];for(0===b&&e.push([q[0],q[1],0]);d--;){var f=1;"circle"!==g.shape&&(f=g.shape(d/c*2*Math.PI)),e.push([q[0]+b*f*Math.cos(-d/c*2*Math.PI),q[1]+b*f*Math.sin(-d/c*2*Math.PI)*g.ellipticity,d/c*2*Math.PI])}return C[b]=e,e},E=function(){return g.abortThreshold>0&&(new Date).getTime()-s>g.abortThreshold},F=function(){return 0===g.rotateRatio?0:Math.random()>g.rotateRatio?0:0===l?m:m+Math.random()*l},G=function(b,d,e){var f=!1,h=g.weightFactor(d);if(h<=g.minSize)return!1;var i=1;h<c&&(i=function(){for(var b=2;b*h<c;)b+=2;return b}());var k=document.createElement("canvas"),l=k.getContext("2d",{willReadFrequently:!0});l.font=g.fontWeight+" "+(h*i).toString(10)+"px "+g.fontFamily;var m=l.measureText(b).width/i,n=Math.max(h*i,l.measureText("m").width,l.measureText("Ｗ").width)/i,o=m+2*n,p=3*n,q=Math.ceil(o/j),r=Math.ceil(p/j);o=q*j,p=r*j;var s=-m/2,t=.4*-n,u=Math.ceil((o*Math.abs(Math.sin(e))+p*Math.abs(Math.cos(e)))/j),v=Math.ceil((o*Math.abs(Math.cos(e))+p*Math.abs(Math.sin(e)))/j),w=v*j,x=u*j;k.setAttribute("width",w),k.setAttribute("height",x),f&&(document.body.appendChild(k),l.save()),l.scale(1/i,1/i),l.translate(w*i/2,x*i/2),l.rotate(-e),l.font=g.fontWeight+" "+(h*i).toString(10)+"px "+g.fontFamily,l.fillStyle="#000",l.textBaseline="middle",l.fillText(b,s*i,(t+.5*h)*i);var y=l.getImageData(0,0,w,x).data;if(E())return!1;f&&(l.strokeRect(s*i,t,m*i,n*i),l.restore());for(var B,C,D,z=[],A=v,F=[u/2,v/2,u/2,v/2];A--;)for(B=u;B--;){D=j;a:{for(;D--;)for(C=j;C--;)if(y[4*((B*j+D)*w+(A*j+C))+3]){z.push([A,B]),A<F[3]&&(F[3]=A),A>F[1]&&(F[1]=A),B<F[0]&&(F[0]=B),B>F[2]&&(F[2]=B),f&&(l.fillStyle="rgba(255, 0, 0, 0.5)",l.fillRect(A*j,B*j,j-.5,j-.5));break a}f&&(l.fillStyle="rgba(0, 0, 255, 0.5)",l.fillRect(A*j,B*j,j-.5,j-.5))}}return f&&(l.fillStyle="rgba(0, 255, 0, 0.5)",l.fillRect(F[3]*j,F[0]*j,(F[1]-F[3]+1)*j,(F[2]-F[0]+1)*j)),{mu:i,occupied:z,bounds:F,gw:v,gh:u,fillTextOffsetX:s,fillTextOffsetY:t,fillTextWidth:m,fillTextHeight:n,fontSize:h}},H=function(b,c,d,e,f){for(var h=f.length;h--;){var i=b+f[h][0],j=c+f[h][1];if(i>=o||j>=p||i<0||j<0){if(!g.drawOutOfBound)return!1}else if(!n[i][j])return!1}return!0},I=function(b,c,d,f,h,i,k,l,m){var o,n=d.fontSize;o=t?t(f,h,n,i,k):g.color;var p;p=v?v(f,h,n,i,k):g.classes;var q,r=d.bounds;q={x:(b+r[3])*j,y:(c+r[0])*j,w:(r[1]-r[3]+1)*j,h:(r[2]-r[0]+1)*j},e.forEach(function(a){if(a.getContext){var e=a.getContext("2d"),h=d.mu;e.save(),e.scale(1/h,1/h),e.font=g.fontWeight+" "+(n*h).toString(10)+"px "+g.fontFamily,e.fillStyle=o,e.translate((b+d.gw/2)*j*h,(c+d.gh/2)*j*h),0!==l&&e.rotate(-l),e.textBaseline="middle",e.fillText(f,d.fillTextOffsetX*h,(d.fillTextOffsetY+.5*n)*h),e.restore()}else{var i=document.createElement("span"),k="";k="rotate("+-l/Math.PI*180+"deg) ",1!==d.mu&&(k+="translateX(-"+d.fillTextWidth/4+"px) scale("+1/d.mu+")");var q={position:"absolute",display:"block",font:g.fontWeight+" "+n*d.mu+"px "+g.fontFamily,left:(b+d.gw/2)*j+d.fillTextOffsetX+"px",top:(c+d.gh/2)*j+d.fillTextOffsetY+"px",width:d.fillTextWidth+"px",height:d.fillTextHeight+"px",lineHeight:n+"px",whiteSpace:"nowrap",transform:k,webkitTransform:k,msTransform:k,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};o&&(q.color=o),i.textContent=f;for(var r in q)i.style[r]=q[r];if(m)for(var s in m)i.setAttribute(s,m[s]);p&&(i.className+=p),a.appendChild(i)}})},J=function(b,c,d,f,g){if(!(b>=o||c>=p||b<0||c<0)){if(n[b][c]=!1,d){var h=e[0].getContext("2d");h.fillRect(b*j,c*j,k,k)}w&&(x[b][c]={item:g,dimension:f})}},K=function(b,c,d,f,h,i){var m,k=h.occupied,l=g.drawMask;l&&(m=e[0].getContext("2d"),m.save(),m.fillStyle=g.maskColor);var n;if(w){var q=h.bounds;n={x:(b+q[3])*j,y:(c+q[0])*j,w:(q[1]-q[3]+1)*j,h:(q[2]-q[0]+1)*j}}for(var r=k.length;r--;){var s=b+k[r][0],t=c+k[r][1];s>=o||t>=p||s<0||t<0||J(s,t,l,n,i)}l&&m.restore()},L=function(b){var c,e,f;Array.isArray(b)?(c=b[0],e=b[1]):(c=b.word,e=b.weight,f=b.attributes);var h=F(),i=G(c,e,h);if(!i)return!1;if(E())return!1;if(!g.drawOutOfBound){var j=i.bounds;if(j[1]-j[3]+1>o||j[2]-j[0]+1>p)return!1}for(var k=r+1,l=function(a){var d=Math.floor(a[0]-i.gw/2),g=Math.floor(a[1]-i.gh/2),j=i.gw,l=i.gh;return!!H(d,g,j,l,i.occupied)&&(I(d,g,i,c,e,r-k,a[2],h,f),K(d,g,j,l,i,b),!0)};k--;){var m=D(r-k);g.shuffle&&(m=[].concat(m),d(m));var n=m.some(l);if(n)return!0}return!1},M=function(b,c,d){return c?!e.some(function(a){var e=document.createEvent("CustomEvent");return e.initCustomEvent(b,!0,c,d||{}),!a.dispatchEvent(e)},this):void e.forEach(function(a){var e=document.createEvent("CustomEvent");e.initCustomEvent(b,!0,c,d||{}),a.dispatchEvent(e)},this)},N=function(){var b=e[0];if(b.getContext)o=Math.ceil(b.width/j),p=Math.ceil(b.height/j);else{var c=b.getBoundingClientRect();o=Math.ceil(c.width/j),p=Math.ceil(c.height/j)}if(M("wordcloudstart",!0)){q=g.origin?[g.origin[0]/j,g.origin[1]/j]:[o/2,p/2],r=Math.floor(Math.sqrt(o*o+p*p)),n=[];var d,f,h;if(!b.getContext||g.clearCanvas)for(e.forEach(function(a){if(a.getContext){var b=a.getContext("2d");b.fillStyle=g.backgroundColor,b.clearRect(0,0,o*(j+1),p*(j+1)),b.fillRect(0,0,o*(j+1),p*(j+1))}else a.textContent="",a.style.backgroundColor=g.backgroundColor,a.style.position="relative"}),d=o;d--;)for(n[d]=[],f=p;f--;)n[d][f]=!0;else{var i=document.createElement("canvas").getContext("2d");i.fillStyle=g.backgroundColor,i.fillRect(0,0,1,1);var k=i.getImageData(0,0,1,1).data,l=b.getContext("2d").getImageData(0,0,o*j,p*j).data;d=o;for(var m,t;d--;)for(n[d]=[],f=p;f--;){t=j;a:for(;t--;)for(m=j;m--;)for(h=4;h--;)if(l[4*((f*j+t)*o*j+(d*j+m))+h]!==k[h]){n[d][f]=!1;break a}n[d][f]!==!1&&(n[d][f]=!0)}l=i=k=void 0}if(g.hover||g.click){for(w=!0,d=o+1;d--;)x[d]=[];g.hover&&b.addEventListener("mousemove",A),g.click&&(b.addEventListener("click",B),b.addEventListener("touchstart",B),b.addEventListener("touchend",function(a){a.preventDefault()}),b.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),b.addEventListener("wordcloudstart",function a(){b.removeEventListener("wordcloudstart",a),b.removeEventListener("mousemove",A),b.removeEventListener("click",B),y=void 0})}h=0;var u,v;0!==g.wait?(u=window.setTimeout,v=window.clearTimeout):(u=window.setImmediate,v=window.clearImmediate);var z=function(b,c){e.forEach(function(a){a.addEventListener(b,c)},this)},C=function(b,c){e.forEach(function(a){a.removeEventListener(b,c)},this)},D=function a(){C("wordcloudstart",a),v(F)};z("wordcloudstart",D);var F=u(function a(){if(h>=g.list.length)return v(F),M("wordcloudstop",!1),void C("wordcloudstart",D);s=(new Date).getTime();var b=L(g.list[h]),c=!M("wordclouddrawn",!0,{item:g.list[h],drawn:b});return E()||c?(v(F),g.abort(),M("wordcloudabort",!1),M("wordcloudstop",!1),void C("wordcloudstart",D)):(h++,void(F=u(a,g.wait)))},g.wait)}};N()}};e.isSupported=b,e.minFontSize=c,"function"==typeof define&&define.amd?(a.WordCloud=e,define("wordcloud",[],function(){return e})):"undefined"!=typeof module&&module.exports?module.exports=e:a.WordCloud=e}(this);