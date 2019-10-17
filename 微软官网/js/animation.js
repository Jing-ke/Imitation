/*Created by fengyu at TZ40期js on 2018/3/31*/

/*
	ele : 标签节点
	time : 动画持续时间
	[callback] : 回调函数
	json : json对象-----必须有data属性（需要操作的对应的属性）
						[option]  默认匀速运动 
							 [easing]   运动函数（默认匀速运动）
					                    1.Linear 匀速，  此时speed可以不填。
					                    2.Quad 二次方缓动效果
					                    3.Cubic 三次方缓动效果
					                    4.Quart 四次方缓动效果
					                    5.Quint 五次方缓动效果

					                    6.Sine  正弦缓动效果
					                    7.Expo  指数缓动效果
					                    8.Circ  圆形缓动函数

					                    9.Elastic 指数衰减正弦曲线缓动函数
					                    10.Back  超过范围的三次方的缓动函数
					                    11.Bounce 指数衰减的反弹曲线缓动函数
					        
					        [speed]     运动方式（值为Number）
					                    0   代表加速运动
					                    1   代表减速运动
					                    2   先加速后减速
*/
function animation(ele,json,time,callback){
	window.requestAnimationFrame = window.requestAnimationFrame || function(fn){return setTimeout(fn,1000/60)};
	window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
	function getStyle(ele){return ele.currentStyle || getComputedStyle(ele);}
	var Tween = {
	    Linear: {
	        easeIn: function(t, b, c, d) { return c * t / d + b; }
	    },
	    Quad: {
	        easeIn: function(t, b, c, d) {
	            return c * (t /= d) * t + b;
	        },
	        easeOut: function(t, b, c, d) {
	            return -c * (t /= d) * (t - 2) + b;
	        },
	        easeInOut: function(t, b, c, d) {
	            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
	            return -c / 2 * ((--t) * (t - 2) - 1) + b;
	        }
	    },
	    Cubic: {
	        easeIn: function(t, b, c, d) {
	            return c * (t /= d) * t * t + b;
	        },
	        easeOut: function(t, b, c, d) {
	            return c * ((t = t / d - 1) * t * t + 1) + b;
	        },
	        easeInOut: function(t, b, c, d) {
	            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
	            return c / 2 * ((t -= 2) * t * t + 2) + b;
	        }
	    },
	    Quart: {
	        easeIn: function(t, b, c, d) {
	            return c * (t /= d) * t * t * t + b;
	        },
	        easeOut: function(t, b, c, d) {
	            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	        },
	        easeInOut: function(t, b, c, d) {
	            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
	            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	        }
	    },
	    Quint: {
	        easeIn: function(t, b, c, d) {
	            return c * (t /= d) * t * t * t * t + b;
	        },
	        easeOut: function(t, b, c, d) {
	            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	        },
	        easeInOut: function(t, b, c, d) {
	            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
	            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	        }
	    },
	    Sine: {
	        easeIn: function(t, b, c, d) {
	            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	        },
	        easeOut: function(t, b, c, d) {
	            return c * Math.sin(t / d * (Math.PI / 2)) + b;
	        },
	        easeInOut: function(t, b, c, d) {
	            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	        }
	    },
	    Expo: {
	        easeIn: function(t, b, c, d) {
	            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	        },
	        easeOut: function(t, b, c, d) {
	            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	        },
	        easeInOut: function(t, b, c, d) {
	            if (t == 0) return b;
	            if (t == d) return b + c;
	            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	        }
	    },
	    Circ: {
	        easeIn: function(t, b, c, d) {
	            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	        },
	        easeOut: function(t, b, c, d) {
	            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	        },
	        easeInOut: function(t, b, c, d) {
	            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
	            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	        }
	    },
	    Elastic: {
	        easeIn: function(t, b, c, d, a, p) {
	            if (t == 0) return b;
	            if ((t /= d) == 1) return b + c;
	            if (!p) p = d * .3;
	            if (!a || a < Math.abs(c)) { a = c; var s = p / 4; } else var s = p / (2 * Math.PI) * Math.asin(c / a);
	            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	        },
	        easeOut: function(t, b, c, d, a, p) {
	            if (t == 0) return b;
	            if ((t /= d) == 1) return b + c;
	            if (!p) p = d * .3;
	            if (!a || a < Math.abs(c)) { a = c; var s = p / 4; } else var s = p / (2 * Math.PI) * Math.asin(c / a);
	            return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
	        },
	        easeInOut: function(t, b, c, d, a, p) {
	            if (t == 0) return b;
	            if ((t /= d / 2) == 2) return b + c;
	            if (!p) p = d * (.3 * 1.5);
	            if (!a || a < Math.abs(c)) { a = c; var s = p / 4; } else var s = p / (2 * Math.PI) * Math.asin(c / a);
	            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	        }
	    },
	    Back: {
	        easeIn: function(t, b, c, d, s) {
	            if (s == undefined) s = 1.70158;
	            return c * (t /= d) * t * ((s + 1) * t - s) + b;
	        },
	        easeOut: function(t, b, c, d, s) {
	            if (s == undefined) s = 1.70158;
	            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	        },
	        easeInOut: function(t, b, c, d, s) {
	            if (s == undefined) s = 1.70158;
	            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
	            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	        }
	    },
	    Bounce: {
	        easeIn: function(t, b, c, d) {
	            return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
	        },
	        easeOut: function(t, b, c, d) {
	            if ((t /= d) < (1 / 2.75)) {
	                return c * (7.5625 * t * t) + b;
	            } else if (t < (2 / 2.75)) {
	                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
	            } else if (t < (2.5 / 2.75)) {
	                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
	            } else {
	                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
	            }
	        },
	        easeInOut: function(t, b, c, d) {
	            if (t < d / 2) return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
	            else return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	        }
	    }
	};
	var option = json.option,
		data = json.data,

		speedArr = ["easeIn",'easeOut','easeInOut'],
		startValue = {},
		changeValue = {},
		startTime;
	for (var key in data) {
		startValue[key] = parseFloat(getStyle(ele)[key])
		changeValue[key] = parseFloat(data[key]) - startValue[key];
		if (!changeValue[key]) { // 值为0
			delete startValue[key]
			delete changeValue[key]
		}
	}
	var speed = option && option.speed,
		easing = option && option.easing;

	if (typeof option === "object" ) {
		if ('easing' in option) {
			speed = Math.floor(option.speed) || 0,
			easing = option.easing;
			if (easing.toLowerCase() === 'linear') {
				easing = "Linear";
				speed = 0;
			}else{
				if (speed < 0 || speed > 2) {
					speed = 0;
				}
			}
		}else{
			easing = 'Linear';
			speed = 0;
		}
	}else{
		easing = 'Linear';
		speed = 0;
	}
	startTime = new Date();
	fn();
	function fn(){
		var t = new Date() - startTime, 
			T_ = time - t;  
		for (var key in changeValue) {
			var val = Tween[easing][speedArr[speed]](t,startValue[key],changeValue[key],time);
			if (T_ <= 0) { 
				val = Math.min(parseFloat(data[key]),val);
				val = Math.max(parseFloat(data[key]),val);
			}
			if (key.toLowerCase() === "opacity") { 
				ele.style[key] = val;
				ele.style.filter = "alpha(opacity="+ val*100 +")"
			}else {
				ele.style[key] = val + "px";
			}
		}
		if(T_ <= 0){
			callback && callback.call(ele)
		}else{
			requestAnimationFrame(fn)
		}
	}
}