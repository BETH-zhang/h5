/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*加载 H5组件 相关资源*/
	__webpack_require__(1);
	// var html = [];
	// var res = [
	//     'Base','Bar','Point','Polyline',
	//     'Radar','Pie','Ring',
	//     'Logo','Phone'
	//     ];
	// for(s in res){
	//     // html.push('<script type="text/javascript" src="js/H5Component'+res[s]+'.js"><\/script>');
	//     html.push('<link rel="stylesheet" type="text/css" href="css/H5Component'+res[s]+'.css">');
	// }
	/*加载 工具组件*/
	// var toolRes = [
	//     'TimeFormat'
	//     ];
	// for(s in toolRes){
	//     html.push('<script type="text/javascript" src="js/'+toolRes[s]+'.js"><\/script>');
	// }
	// document.write( html.join('') );

	var getDaysFromYear = __webpack_require__(8);

	/*主要逻辑*/
	$(function(){
	    
	    // var h5 = new H5();
	    var h5 = __webpack_require__(9);
	    console.log(h5);

	    h5.whenAddPage = function(){
	        this.addComponent('slide_up', {
	            bg: '../imgs/footer_bg.png',
	            css: {
	                opacity: 0,
	                left: 0, bottom: -20,
	                width: '100%',
	                height: '33px',
	                zIndex: 999
	            },
	            animateIn: {opacity: 1, bottom: '-1px'},
	            animateOut: {opacity: 0, bottom: '-3px'},
	            delay: 500
	        });
	    }

	    h5
	    .addPage('face')
	        .addComponent('logo', {
	            type: 'logo',
	            center: true,
	            width: 300,
	            height: 300,
	            // bg: '../imgs/face_logo.png',
	            css: {top: 50, opacity: 1}
	        })
	        .addComponent('hi', {
	            center: true,
	            width: 470,
	            height: 49,
	            bg: '../imgs/face_hi.png',
	            css: {top: 300, opacity: 0},
	            animateIn: {top: 220, opacity: 1},
	            animateOut: {top: 300, opacity: 0},            
	            delay: 300
	        })
	        .addComponent('time', {
	            center: true,
	            width: 470,
	            height: 49,
	            text: '我来智课已经有'+getDaysFromYear(2015, 6, 5)+'天',
	            css: {top: 350, opacity: 0},
	            animateIn: {top: 250, opacity: 1},
	            animateOut: {top: 350, opacity: 0},            
	            delay: 500
	        })
	        .addComponent('slogan', {
	            center: true,
	            width: 402,
	            height: 258,
	            bg: '../imgs/face_slogan.png',
	            css: {top: 430, opacity: 0},
	            animateIn: {top: 330, opacity: 1},
	            animateOut: {top: 430, opacity: 0},            
	            delay: 700
	        })
	        .addComponent('join', {
	            center: true,
	            width: 280,
	            height: 27,
	            bg: '../imgs/face_join.png',
	            css: {bottom: 0, opacity: 0},
	            onclick: function(){
	                location.href = 'http://job.smartstudy.com';
	            },
	            animateIn: {bottom: 60, opacity: 1},
	            animateOut: {bottom: 0, opacity: 0},            
	            delay: 1000
	        })
	    .addPage()
	        .addComponent('caption', {
	            text: '技术部人员变化'
	        })
	        .addComponent('polyline', {
	            type: 'polyline',
	            width: 600,
	            height: 255,
	            data: [
	                ['2015.03', .4],
	                ['2015.06', .6],
	                ['2015.09', .7],
	                ['2016.02', .6],
	                ['2016.06', .8],
	            ],
	            css: {top: 100,opacity: 0},
	            animateIn: {top: 120,opacity: 1},
	            animateOut: {top: 100,opacity: 0},
	            center: true
	        })
	        .addComponent('msg', {
	            text: '2015-2016技术部在不断大',
	            css: {opacity: 0, top: 300},
	            animateIn: {opacity: 1},
	            animateOut: {opacity: 0},
	            delay: 500
	        })
	        .addComponent('people', {
	            center: true,
	            width: 514,
	            height: 304,
	            bg: '../imgs/p-people.png',
	            css: {bottom: 0, opacity: 0},
	            animateIn: {bottom: 60, opacity: 1},
	            animateOut: {bottom: 0, opacity: 0},            
	            delay: 1000
	        })
	    .addPage()
	        .addComponent('caption', {
	            text: '技术部职位分布'
	        })
	        .addComponent('bar', {
	            type: 'bar',
	            width: 500,
	            height: 600,
	            doubleWidth: true,
	            data: [
	                ['Node', .38, '#ff0000'],
	                ['前端', .27],
	                ['科研', .15],
	                ['Python', .13],
	                ['测试', .06],
	                ['运维', .03],
	                ['架构师', .01],
	                ['科学家', .01]
	            ],
	            css: {top: 0,opacity: 0,},
	            animateIn: {top: 160,opacity: 1},
	            animateOut: {top: 0,opacity: 0},
	            center: true
	        })
	        .addComponent('msg', {
	            text: 'Node开发和前端开发占据较大比例',
	            css: {opacity: 0, bottom: 100},
	            animateIn: {opacity: 1},
	            animateOut: {opacity: 0},
	            delay: 500
	        })
	    .addPage()
	        .addComponent('caption', {
	            text: '技术部男女比例'
	        })
	        .addComponent('pie', {
	            type: 'pie',
	            width: 300,
	            height: 300,
	            data: [
	                ['男', .84, 'rgba(225, 0, 4, 0.7)'],
	                ['女', .16, '#c00'],
	            ],
	            css: {top: 100,opacity: 0},
	            animateIn: {top: 140,opacity: 1},
	            animateOut: {top: 0,opacity: 0},
	            center: true
	        })
	        .addComponent('msg', {
	            text: '妹子都去哪了？？？',
	            css: {opacity: 0, top: 310},
	            animateIn: {opacity: 1},
	            animateOut: {opacity: 0},
	            delay: 500
	        })
	        .addComponent('men', {
	            width: 125,
	            height: 305,
	            bg: '../imgs/p-men.png',
	            css: {left: -20, bottom: 0, opacity: 0},
	            animateIn: {left: 20, bottom: 60, opacity: 1},
	            animateOut: {left: -20, bottom: 0, opacity: 0},         
	            delay: 1000
	        })
	        .addComponent('pk', {
	            center: true,
	            width: 123,
	            height: 64,
	            bg: '../imgs/p-pk.png',
	            css: {left: 140, bottom: 0, opacity: 0},
	            animateIn: {left: 140, bottom: 120, opacity: 1},
	            animateOut: {left: 140, bottom: 0, opacity: 0},            
	            delay: 1000
	        })
	        .addComponent('women', {
	            width: 213,
	            height: 311,
	            bg: '../imgs/p-women.png',
	            css: {right: -20, bottom: 0, opacity: 0},
	            animateIn: {right: 20, bottom: 60, opacity: 1},
	            animateOut: {right: -20, bottom: 0, opacity: 0},      
	            delay: 1000
	        })
	    .addPage()
	        .addComponent('caption', {
	            text: '前端技术栈'
	        })
	        .addComponent('ring-all', {
	            center : true,type : 'ring',
	            width : 300,height : 300,
	            data:[['React' , .7  ,'#ff0000']],
	            css : {top:100,opacity:0,fontSize: '30px'},
	            animateIn:{opacity:1,top:120},
	            animateOut:{opacity:0,top:100}
	        })
	        .addComponent('msg', {
	            text: 'React+Redux+Webpack',
	            css: {opacity: 0, top: 300},
	            animateIn: {opacity: 1},
	            animateOut: {opacity: 0},
	            delay: 2000
	        })
	        .addComponent('ring-1', {
	            type : 'ring',
	            width : 140,height : 140,
	            data:[['Ejs' , .6  ,'#990000']],
	            css : {left: 30, bottom:130,opacity:0, fontSize: '12px'},
	            animateIn:{opacity:1},
	            animateOut:{opacity:0}
	        })
	        .addComponent('ring-2', {
	            center : true,type : 'ring',
	            width : 140,height : 140,
	            data:[['Vue' , .3  ,'#990000']],
	            css : {left:30,bottom:130,opacity:0,fontSize:'12px'},
	            animateIn:{opacity:1},
	            animateOut:{opacity:0}
	        })
	        .addComponent('ring-3', {
	            type : 'ring',
	            width : 140,height : 140,
	            data:[['Django' , .3  ,'#990000']],
	            css : {right:30,bottom:130,opacity:0,fontSize:'12px'},
	            animateIn:{opacity:1},
	            animateOut:{opacity:0}
	        })
	        .addComponent('ring-4', {
	            type : 'ring',
	            width : 140,height : 140,
	            data:[['Bootstrap' , .5  ,'#990000']],
	            css : {left: 70, bottom:60,opacity:0,fontSize:'12px'},
	            animateIn:{opacity:1},
	            animateOut:{opacity:0}
	        })
	        .addComponent('ring-5', {
	            type : 'ring',
	            width : 140,height : 140,
	            data:[['JQuery' , .3  ,'#990000']],
	            css : {right: 70, bottom:60,opacity:0,fontSize:'12px'},
	            animateIn:{opacity:1},
	            animateOut:{opacity:0}
	        })
	    .addPage()
	        .addComponent('caption', {
	            text: '我们时间去哪了'
	        })
	        .addComponent('point', {
	            type: 'point',
	            width: 240,
	            height: 240,
	            data: [
	                ['节日活动', .7, 'rgba(225, 0, 0, 0.7)', 0, 0],
	                ['轻松工作', .6, 'rgba(225, 0, 0, 0.4)', 60, '-110%'],
	                ['生日派对', .5, 'rgba(225, 0, 0, 0.6)', -60, '-90%'],
	                ['户外郊游', .4, 'rgba(255, 0, 0, 0.8)', 130, '80%'],
	                ['奇葩分享', .6, 'rgba(225, 0, 0, 0.7)', -60, '110%'],
	                ['各种聚餐', .4, 'rgba(225, 0, 0, 0.4)', 80, '150%']
	            ],
	            css: {bottom: 0,opacity: 1},
	            animateIn: {bottom: 200,opacity: 1},
	            animateOut: {bottom: 0,opacity: 0},
	            center: true
	        })
	    .addPage()
	        .addComponent('caption', {
	            text: '我们的快乐日子'
	        })
	        .addComponent('team', {
	            center: true,
	            width: 432,
	            height: 173,
	            bg: '../imgs/p-team1.png',
	            css: {top: 500, opacity: 0},
	            animateIn: {top: 120, opacity: 1},
	            animateOut: {top: 500, opacity: 0},  
	            delay: 200
	        })
	        .addComponent('team', {
	            center: true,
	            width: 432,
	            height: 173,
	            bg: '../imgs/p-team2.png',
	            css: {top: 500, opacity: 0},
	            animateIn: {top: 220, opacity: 1},
	            animateOut: {top: 500, opacity: 0},  
	            delay: 500
	        })
	        .addComponent('team', {
	            center: true,
	            width: 432,
	            height: 173,
	            bg: '../imgs/p-team3.png',
	            css: {top: 500, opacity: 0},
	            animateIn: {top: 320, opacity: 1},
	            animateOut: {top: 500, opacity: 0},  
	            delay: 700
	        })
	        .addComponent('team', {
	            center: true,
	            width: 432,
	            height: 173,
	            bg: '../imgs/p-team4.png',
	            css: {top: 500, opacity: 0},
	            animateIn: {top: 430, opacity: 1},
	            animateOut: {top: 500, opacity: 0},  
	            delay: 1000
	        })
	    .addPage()
	        .addComponent('caption', {
	            text: '技术部的猿猿们'
	        })
	        .addComponent('phone', {
	            type: 'phone',
	            center: true,
	            width: 600,
	            // height: 600,
	            data: [
	                '../imgs/people/p-1.png',
	                '../imgs/people/p-2.png',
	                '../imgs/people/p-3.png',
	                '../imgs/people/p-4.png',
	                '../imgs/people/p-5.png',
	                '../imgs/people/p-6.png',
	                '../imgs/people/p-7.png',
	                '../imgs/people/p-8.png',
	                '../imgs/people/p-9.png',
	                '../imgs/people/p-10.png',
	                '../imgs/people/p-11.png',
	                '../imgs/people/p-12.png',
	                '../imgs/people/p-13.png',
	                '../imgs/people/p-14.png',
	                '../imgs/people/p-15.png',
	                '../imgs/people/p-16.png',
	                '../imgs/people/p-17.png',
	                '../imgs/people/p-18.png',
	                '../imgs/people/p-19.png',
	                '../imgs/people/p-20.png',
	                '../imgs/people/p-21.png',
	                '../imgs/people/p-22.png',
	                '../imgs/people/p-23.png',
	                '../imgs/people/p-24.png',
	                '../imgs/people/p-25.png',
	                '../imgs/people/p-26.png',
	                '../imgs/people/p-27.png',
	                '../imgs/people/p-28.png',
	                '../imgs/people/p-29.png',
	                '../imgs/people/p-30.png',
	                '../imgs/people/p-31.png',
	                '../imgs/people/p-32.png',
	                '../imgs/people/p-33.png',
	                '../imgs/people/p-34.png',
	                '../imgs/people/p-35.png',
	                '../imgs/people/p-36.png',
	                '../imgs/people/p-37.png',
	                '../imgs/people/p-38.png',
	                '../imgs/people/p-39.png',
	                '../imgs/people/p-40.png',
	                '../imgs/people/p-41.png',
	                '../imgs/people/p-42.png',
	                '../imgs/people/p-43.png',
	                '../imgs/people/p-44.png',
	                '../imgs/people/p-45.png',
	                '../imgs/people/p-46.png',
	                '../imgs/people/p-47.png',
	                '../imgs/people/p-48.png',
	                '../imgs/people/p-49.png',
	                '../imgs/people/p-50.png',
	                '../imgs/people/p-51.png',
	                '../imgs/people/p-52.png',
	                '../imgs/people/p-53.png',
	                '../imgs/people/p-54.png',
	                '../imgs/people/p-55.png',
	                '../imgs/people/p-56.png',
	                '../imgs/people/p-57.png',
	                '../imgs/people/p-58.png'
	            ],
	            css: {top: 120, opacity: 1}
	        })
	        .addComponent('msg', {
	            text: '开来成为我们中的一员吧！',
	            css: {opacity: 0, bottom: 60},
	            animateIn: {opacity: 1},
	            animateOut: {opacity: 0},
	            delay: 1000
	        })
	    .addPage()
	        .addComponent('caption', {
	            text: '让我们[起航]'
	        })
	        .addComponent('begin', {
	            center: true,
	            width: 600,
	            html: '<p>我来自一个平凡的世界<br/>'+
	                    '却想拥有一段不平凡的人生辉煌<br/>'+
	                    '不知从那天起<br/>'+
	                    '自由的彼岸变成我追逐的梦想<br/></p>'+

	                   '<p>我来到一片茫茫的雾海<br/>'+
	                    '却不曾想有着无数的惊涛骇浪<br/>'+
	                    '不知从何时起<br/>'+
	                    '持久的热情变成我无知的迷茫<br/></p>'+

	                   '<p>信念的灯塔在远处闪亮<br/>'+
	                    '活力和激情装点我的衣裳<br/>'+
	                    '信心和勇气让我重拾希望<br/>'+
	                    '助我渡过失意的汪洋<br/></p>'+
	                    　 　
	                   '<p>年轻的潜力唤醒心中的巨人<br/>'+
	                    '我要做自己的大王<br/>'+
	                    '超越自我，享受生活<br/>'+
	                    '让生命之船扬帆起航</p>',
	            css: {opacity: 0, top: 90, color: '#fff', textAlign: 'center'},
	            animateIn: {opacity: 1},
	            animateOut: {opacity: 0},
	            delay: 500
	        })
	    .addPage()
	        .addComponent('logo', {
	            type: 'logo',
	            center: true,
	            width: 300,
	            height: 300,
	            css: {top: 50, opacity: 1}
	        })
	        .addComponent('end', {
	            center: true,
	            width: 600,
	            html: '<p>那些我参与的<br/>'+
	                    '和没有参与的<br/>'+
	                    '都不重要<br/>'+
	                    '重要的是<br/>'+
	                    '你是否愿意和我一起参与其中<br/>'+
	                    '一起来创造一个<br/>'+
	                    '不一样的智课</p>',
	            css: {opacity: 0, top: 200, color: '#fff', textAlign: 'center'},
	            animateIn: {opacity: 1},
	            animateOut: {opacity: 0},
	            delay: 500
	        })
	        .addComponent('join', {
	            center: true,
	            width: 280,
	            height: 27,
	            bg: '../imgs/face_join.png',
	            css: {bottom: 0, opacity: 0},
	            onclick: function(){
	                location.href = 'http://job.smartstudy.com';
	            },
	            animateIn: {bottom: 60, opacity: 1},
	            animateOut: {bottom: 0, opacity: 0},            
	            delay: 1000
	        })
	    .loader([
	        '../imgs/page_bg.png',
	        '../imgs/face_bg.png',
	        '../imgs/page_caption_bg.png',
	        '../imgs/footer_bg.png',
	        '../imgs/face_hi.png',
	        '../imgs/face_slogan.png',
	        '../imgs/face_join.png',
	        '../imgs/p-people.png',
	        '../imgs/p-men.png',
	        '../imgs/p-pk.png',
	        '../imgs/p-women.png',
	        '../imgs/p-team1.png',
	        '../imgs/p-team2.png',
	        '../imgs/p-team3.png',
	        '../imgs/p-team4.png',
	        '../imgs/people/p-1.png',
	        '../imgs/people/p-2.png',
	        '../imgs/people/p-3.png',
	        '../imgs/people/p-4.png',
	        '../imgs/people/p-5.png',
	        '../imgs/people/p-6.png',
	        '../imgs/people/p-7.png',
	        '../imgs/people/p-8.png',
	        '../imgs/people/p-9.png',
	        '../imgs/people/p-10.png',
	        '../imgs/people/p-11.png',
	        '../imgs/people/p-12.png',
	        '../imgs/people/p-13.png',
	        '../imgs/people/p-14.png',
	        '../imgs/people/p-15.png',
	        '../imgs/people/p-16.png',
	        '../imgs/people/p-17.png',
	        '../imgs/people/p-18.png',
	        '../imgs/people/p-19.png',
	        '../imgs/people/p-20.png',
	        '../imgs/people/p-21.png',
	        '../imgs/people/p-22.png',
	        '../imgs/people/p-23.png',
	        '../imgs/people/p-24.png',
	        '../imgs/people/p-25.png',
	        '../imgs/people/p-26.png',
	        '../imgs/people/p-27.png',
	        '../imgs/people/p-28.png',
	        '../imgs/people/p-29.png',
	        '../imgs/people/p-30.png',
	        '../imgs/people/p-31.png',
	        '../imgs/people/p-32.png',
	        '../imgs/people/p-33.png',
	        '../imgs/people/p-34.png',
	        '../imgs/people/p-35.png',
	        '../imgs/people/p-36.png',
	        '../imgs/people/p-37.png',
	        '../imgs/people/p-38.png',
	        '../imgs/people/p-39.png',
	        '../imgs/people/p-40.png',
	        '../imgs/people/p-41.png',
	        '../imgs/people/p-42.png',
	        '../imgs/people/p-43.png',
	        '../imgs/people/p-44.png',
	        '../imgs/people/p-45.png',
	        '../imgs/people/p-46.png',
	        '../imgs/people/p-47.png',
	        '../imgs/people/p-48.png',
	        '../imgs/people/p-49.png',
	        '../imgs/people/p-50.png',
	        '../imgs/people/p-51.png',
	        '../imgs/people/p-52.png',
	        '../imgs/people/p-53.png',
	        '../imgs/people/p-54.png',
	        '../imgs/people/p-55.png',
	        '../imgs/people/p-56.png',
	        '../imgs/people/p-57.png',
	        '../imgs/people/p-58.png'
	        ], 1);

	})

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body{\n    margin: 0;\n    padding: 0;\n    font-family: 'Hack', 'Noto Sans S Chinese', 'Lantinghei SC', 'Arial', sans-serif, 'Microsoft Yahei';\n}\n\n.h5_page{\n    background-image: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../imgs/page_bg.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ");\n}\n.h5_page_face{\n    background-image: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../imgs/face_bg.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ");\n}\n\n.h5_component_name_time{\n    text-align: center;\n    color: #fff;\n    font-size: 22px;\n}\n/*.h5_component_name_slogan{\n    -webkit-animation:rock 2s infinite 2s;\n}\n@-webkit-keyframes rock{\n    0%{ transform:rotate(0deg)}\n    5%{ transform:rotate(3deg)}\n    10%{ transform:rotate(-4deg)}\n    15%{ transform:rotate(3deg)}\n    20%{ transform:rotate(-2deg)}\n    25%{ transform:rotate(1deg)}\n    30%{ transform:rotate(-1deg)}\n    70%{ transform:rotate(0deg)}\n    100%{ transform:rotate(0deg)}\n}\n*/\n\n.h5_component_name_caption{\n    position: absolute;\n    top: 20px;\n    background-image: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../imgs/page_caption_bg.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ");\n    width: 323px;\n    height: 77px;\n    text-align: center;\n    line-height: 77px;\n    font-size: 20px;\n    color: #fff;\n}\n\n.h5_component_name_msg{\n    text-align: center;\n    width: 100%;\n    color: #fff;\n    font-size: 15px;\n}\n\n.h5_component_name_back{\n    top: 30px;\n    -webkit-animation:back 2s infinite 2s;\n}\n\n@-webkit-keyframes back{\n    50%{ top: 20px; }\n}\n\n.h5_component_name_team{\n    border: 1px solid #ff0000;\n}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * 获取过去到现在的天数
	 */
	var getDaysFromYear = function(year, month, day){
	    var d = new Date();
	    var cYear = d.getFullYear();
	    var cMonth = d.getMonth() + 1;
	    var cday = d.getDate();

	    this.getDaysInMonth = function(year, month) {
	        var d= new Date();
	        return new Date(year, month, 0).getDate();
	    }

	    var y = cYear - year;
	    var allMonth = 0;
	    if(y < 1){
	        allMonth = cMonth - month +1;
	    }else if(y = 1){
	        allMonth = 12 - month + 1 + cMonth - 1;
	    }else if(y > 1){
	        allMonth = 12 - month + 1 + cMonth - 1 + 12*(y-1);
	    }
	    var days = 0 - day + cday;

	    if(y < 1){
	        for(var i=month;i<=cMonth; i++){
	            days += this.getDaysInMonth(year, i);
	        }
	    }else if(y = 1){
	        for(var i=month;i<=12; i++){
	            days += this.getDaysInMonth(year, i);
	        }
	        for(var i=1;i<cMonth; i++){
	            days += this.getDaysInMonth(cYear, i);
	        }
	    }else if(y > 1){
	        for(var i=month;i<=12; i++){
	            days += this.getDaysInMonth(year, i);
	        }
	        for(var i=1;i<cMonth; i++){
	            days += this.getDaysInMonth(cYear, i);
	        }
	        for(var j=1; j<y-1; j++){
	            for(var i=1;i<12; i++){
	                days += this.getDaysInMonth(year+j, i);
	            }
	        }
	    }

	    return days;
	}

	module.exports = getDaysFromYear;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* 内容管理对象 */
	__webpack_require__(10);
	var H5ComponentBase = __webpack_require__(12);
	var H5ComponentLogo = __webpack_require__(15);
	var H5ComponentPhone = __webpack_require__(18);
	var H5ComponentPolyline = __webpack_require__(21);
	var H5ComponentPie = __webpack_require__(24);
	var H5ComponentBar = __webpack_require__(27);
	var H5ComponentRadar = __webpack_require__(30);
	var H5ComponentRing = __webpack_require__(33);
	var H5ComponentPoint = __webpack_require__(36);
	var H5_loading = __webpack_require__(39);

	var H5 = function(){
		this.id = ('h5_'+Math.random()).replace('.', '_');
		this.el = $('<div class="h5" id="'+this.id+'">').hide();
		
		this.page = [];
		$('body').append(this.el);

		/*新增一个页*/
		/**
		 * 新增一个页
		 * @param {string} name 组件的名称，会加入到ClassName中
		 * @param {string} text 页内的默认文本
		 * @return {H5} H5对象，可以重复使用H5对象支持的方法
		 */
		this.addPage = function(name, text){
			var page = $('<div class="h5_page section">');

			if(name != undefined){
				page.addClass('h5_page_'+name);
			}
			if(text != undefined){
				page.text(text);
			}

			this.el.append(page);
			this.page.push(page);

			if(typeof this.whenAddPage === 'function'){
				this.whenAddPage();
			}
			return this;
		}

		/*新增一个组件*/
		this.addComponent = function(name, cfg){
			var cfg = cfg || {};
			cfg = $.extend({
				type: 'base'
			}, cfg);

			var component;//定义一个变量，存储组件元素
			var page = this.page.slice(-1)[0];
			switch( cfg.type ){
				case 'base':
					component = H5ComponentBase(name, cfg);
					break;
				case 'logo':
					component = H5ComponentLogo(name, cfg);
					break;
				case 'phone':
					component = H5ComponentPhone(name, cfg);
					break;
				case 'polyline':
					component = H5ComponentPolyline(name, cfg);
					break;
				case 'pie':
	            	component = H5ComponentPie(name, cfg);
					break;
				case 'bar':
					component = H5ComponentBar(name, cfg);
					break;
				case 'radar':
					component = H5ComponentRadar(name, cfg);
					break; 
				case 'ring':
					component = H5ComponentRing(name, cfg);
					break; 
				case 'point':
					component = H5ComponentPoint(name, cfg);
					break; 
				default:
			};

			page.append(component);
			return this;
		}

		/*H5对象初始化呈现*/
		this.loader = function( firstPage ){
			this.el.fullpage({
				onLeave: function(index, nextIndex, direction){
	                // debugger
	                $(this).find('.h5_component').trigger('onLeave');
	            },
	            afterLoad: function(anchorLink, index){
	                // debugger
	                $(this).find('.h5_component').trigger('onLoad');
	            }
			});
			this.page[0].find('.h5_component').trigger('onLoad');
			this.el.show();

			if(firstPage){
				$.fn.fullpage.moveTo( firstPage );
			}

		}

		this.loader = typeof H5_loading === 'function' ? H5_loading : this.loader;

		return this;
	}

	module.exports = H5();



/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	 /* 基本图文组件对象 */
	__webpack_require__(13);

	var H5ComponentBase =function ( name, cfg ) {
	    var cfg = cfg || {};
	    var id = ( 'h5_c_'+Math.random() ).replace('.','_') ;

	    // 把当前的组建类型添加到样式中进行标记
	    var cls = ' h5_component_'+cfg.type; 
	    var component = $('<div class="h5_component '+cls+' h5_component_name_'+name+'" id="'+id+'">');

	    cfg.text   &&  component.text(cfg.text);
	    cfg.width  &&  component.width(cfg.width/2);
	    cfg.height &&  component.height(cfg.height/2);
	    cfg.html   &&  component.html(cfg.html);

	    cfg.css && component.css( cfg.css );
	    cfg.bg  && component.css('backgroundImage','url('+cfg.bg+')');

	    if( cfg.center === true){
	        component.css({
	            marginLeft : ( cfg.width/4 * -1) + 'px',
	            left:'50%'
	        })
	    }
	    //  ... 很多自定义的参数
	    if( typeof cfg.onclick === 'function' ){
	        component.on('click',cfg.onclick);
	    }

	    // 任务二：(1)支持 relativeTo参数（CSS translate 实现方法）
	    // 任务二：(2)获取 relateveTo 元素的位置，应该用 offsetLeft、offsetTop
	    // 任务二：(3)考虑 cfg.center 对relativeTo参数的影响，并且在有、没有这两种情况下都要支持
	    if(cfg.relativeTo){
	        var parent = $('body').find('.h5_component_name_'+cfg.relativeTo);
	        var position = {
	            left:$(parent)[0].offsetLeft,
	            top:$(parent)[0].offsetTop,
	        };
	        if(cfg.center === true){
	            position.left=0;
	        }
	        component.css('transform','translate('+position.left+'px,'+position.top+'px)');
	    }

	    component.on('onLoad',function(){
	    
	        setTimeout(function(){
	            component.addClass(cls+'_load').removeClass(cls+'_leave');
	            cfg.animateIn && component.animate( cfg.animateIn );
	        },cfg.delay || 0)

	        return false;
	    })
	    component.on('onLeave',function(){

	        setTimeout(function(){
	            component.addClass(cls+'_leave').removeClass(cls+'_load');
	            cfg.animateOut && component.animate( cfg.animateOut );
	         },cfg.delay || 0)
	        return false;
	    })


	    return component;
	}


	module.exports = H5ComponentBase;

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* logo组件对象 */
	__webpack_require__(16);

	var H5ComponentBase = __webpack_require__(12);
	var H5ComponentLogo = function(name, cfg){
		var component = H5ComponentBase(name, cfg);

		var path1 = $('<div class="logo path1">');
		var path2 = $('<div class="logo path2">');
		var path3 = $('<div class="logo path3">');

		component.append(path1);
		component.append(path2);
		component.append(path3);

		return component;
	}

	module.exports = H5ComponentLogo;

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(19);

	var H5ComponentBase = __webpack_require__(12);
	var H5ComponentPhone = function(name, cfg){
		var component = H5ComponentBase(name, cfg);

		$.each(cfg.data, function(index, item){

	        var img = $('<div class="img img_'+index+'" ><img src="'+item+'"/></div>');
	        
	        var len = cfg.data.length;
	        img.css('transition','all 1s '+index*1.5/len+'s');

			component.append(img);
		});

		return component;
	}

	module.exports = H5ComponentPhone;

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* 折线图组件对象 */
	__webpack_require__(22);

	var H5ComponentBase = __webpack_require__(12);
	var H5ComponentPolyline = function(name, cfg){
		var component = H5ComponentBase(name, cfg);

		// 绘制网格线
		var w = cfg.width;
		var h = cfg.height;
		
		// 加入一个画布（网格线背景）
		var cns = document.createElement('canvas');
		var ctx = cns.getContext('2d');
		cns.width = ctx.width = w;
		cns.height = ctx.height = h;

		component.append(cns);

		// 水平网格线 100份－》10份
		var step = 10;

		if(cfg.showBg){
			ctx.beginPath();
			ctx.lineWidth = 1;
			ctx.strokeStyle = '';

			window.ctx = ctx;
			for(var i=0; i<step+1; i++){
				var y = (h/step) * i;
				ctx.moveTo(0, y);
				ctx.lineTo(w, y);
			}
		}

		// 垂直网格线(根据项目的个数去分)
		step = cfg.data.length+1;
		var text_w = w/step>>0;
		for(var i = 0; i<step+1;i++){
			var x = (w/step) * i;
			ctx.moveTo(x, 0);
			ctx.lineTo(x, h);

			if(cfg.data[i]){
				var text = $('<div class="text">');
				text.text(cfg.data[i][0]);
				text.css('width', text_w/2).css('left', x/2-text_w/4+text_w/2);

				component.append(text);
			}
		}
		
		ctx.stroke();

		// 加入一个画布（数据层）
		var cns = document.createElement('canvas');
		var ctx = cns.getContext('2d');
		cns.width = ctx.width = w;
		cns.height = ctx.height = h;
		component.append(cns);

		/**
		 * 绘制折线遗迹对应的数据和阴影
		 * @param  {float} per 0-1之间的数据，会根据这个值绘制数据
		 * @return {[type]}     [description]
		 */
		var draw = function(per){
			// 清空画布
			ctx.clearRect(0, 0, w, h);

			// 绘制折线数据
			ctx.beginPath();
			ctx.lineWidth = 3;
			// ctx.strokeStyle = '#ff8878';
			ctx.strokeStyle = '#e90004';

			var x = 0;
			var y = 0;
			var row_w = w/(cfg.data.length+1);
			// 画点
			for(i in cfg.data){
				var item = cfg.data[i];

				x = row_w * i + row_w;
				// y = h * (1-item[1]);
				// 传入相对值之后的绘制点
				y = h - (item[1]*h*per);

				ctx.moveTo(x, y);
				ctx.arc(x, y, 5, 0, 2*Math.PI);
				// ctx.stroke();
			}

			// 连线
			// 移动画笔到第一个数据的点位置
			ctx.moveTo(row_w, h - (cfg.data[0][1]*h*per) );
			// ctx.arc(row_w, h * (1-cfg.data[0][1]), 20, 0, 2*Math.PI);
			// ctx.stroke();
			for(i in cfg.data){
				var item = cfg.data[i];
				x = row_w * i + row_w;
				y = h - (item[1]*h*per);
				ctx.lineTo(x, y);
			}

			ctx.stroke();
			ctx.lineWidth = 1;
			ctx.fillStyle = 'rgba(233, 0, 4, 0.5)';

			// 绘制阴影
			ctx.lineTo(x, h);
			ctx.lineTo(row_w, h);
			ctx.fill();

			// 写数据
			for(i in cfg.data){
				var item = cfg.data[i];
				x = row_w * i + row_w;
				y = h - (item[1]*h*per);
				ctx.fillStyle = item[2] ? item[2] : '#e90004';
				ctx.fillText(((item[1]*100) >> 0)+'%', x-10, y-10);
			}	


			ctx.stroke();

		}

		component.on('onLoad', function(){
			// 折线图生长动画
			var s = 0;				
			for(i=0;i<100;i++){
				setTimeout(function(){
					s+=.01;
					draw(s);			
				}, i*10, 500);
			}
		});

		component.on('onLeave', function(){
			var s = 1;
			for(i=0;i<100;i++){
				setTimeout(function(){
					s-=.01;
					draw(s);			
				}, i*10, 500);
			}
		});


		return component;
	}


	module.exports = H5ComponentPolyline;

/***/ },
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* 饼图组件对象 */
	__webpack_require__(25);

	var H5ComponentBase = __webpack_require__(12);
	var H5ComponentPie =function ( name, cfg ) {
	  var component = H5ComponentBase( name ,cfg );
	  
	  //  绘制网格线 - 背景层
	  var w = cfg.width;
	  var h = cfg.height;

	  //  加入一个画布（网格线背景）
	  var cns = document.createElement('canvas');
	  var ctx = cns.getContext('2d');
	  cns.width = ctx.width = w;
	  cns.height = ctx.height =h;
	  $(cns).css('zIndex',1);
	  component.append(cns);

	  var r =w/2;

	  //  加入一个底图层
	  ctx.beginPath();
	  // ctx.fillStyle='#eee';
	  // ctx.strokeStyle='#eee';
	  ctx.lineWidth = 1;
	  ctx.arc(r,r,r,0,2*Math.PI);
	  ctx.fill();
	  ctx.stroke();

	  //  绘制一个数据层
	  var cns = document.createElement('canvas');
	  var ctx = cns.getContext('2d');
	  cns.width = ctx.width = w;
	  cns.height = ctx.height =h;
	  $(cns).css('zIndex',2);
	  component.append(cns);

	  var colors = ['red','green','blue','#a00','orange']; //  备用颜色
	  var sAngel = 1.5 * Math.PI; //  设置开始的角度在 12 点位置
	  var eAngel = 0; //  结束角度
	  var aAngel = Math.PI*2; //  100%的圆结束的角度 2pi = 360


	  var step = cfg.data.length;
	  for(var i=0;i<step;i++){
	    
	    var item  = cfg.data[i];
	    var color = item[2] || ( item[2] = colors.pop() );

	    eAngel = sAngel + aAngel * item[1];

	    ctx.beginPath();
	    ctx.fillStyle=color;
	    ctx.strokeStyle=color;
	    ctx.lineWidth = .1;

	    ctx.moveTo(r,r);
	    ctx.arc(r,r,r,sAngel,eAngel);
	    ctx.fill();
	    ctx.stroke();
	    sAngel = eAngel;


	    //  加入所有的项目文本以及百分比

	    var text = $('<div class="text">');
	    text.text( cfg.data[i][0] );
	    var per =  $('<div class="per">');
	    per.text( cfg.data[i][1]*100 +'%'  );
	    text.append(per);

	    var x = r + Math.sin( .5 * Math.PI - sAngel ) * r;
	    var y = r + Math.cos( .5 * Math.PI - sAngel ) * r;

	    // text.css('left',x/2);
	    // text.css('top',y/2);

	    if(x > w/2){
	      text.css('left',x/2);
	    }else{
	      text.css('right',(w-x)/2);
	    }
	    if(y > h/2){
	      text.css('top',y/2);
	    }else{
	      text.css('bottom',(h-y)/2+20);
	    }
	    if( cfg.data[i][2] ){
	      text.css('color',cfg.data[i][2]); 
	    }
	    text.css('opacity',0);
	    component.append(text);

	  }

	   //  加入一个蒙板层
	  var cns = document.createElement('canvas');
	  var ctx = cns.getContext('2d');
	  cns.width = ctx.width = w;
	  cns.height = ctx.height =h;
	  $(cns).css('zIndex',3);
	  component.append(cns);


	  ctx.fillStyle='#000';
	  ctx.strokeStyle='#000';
	  ctx.lineWidth = 1;


	  //  生长动画

	  var draw = function( per ){

	    ctx.clearRect(0,0,w,h);

	    ctx.beginPath();

	    ctx.moveTo(r,r);

	    if(per <=0){
	      ctx.arc(r,r,r,0,2*Math.PI);
	      component.find('.text').css('opacity',0)
	    }else{
	      ctx.arc(r,r,r,sAngel,sAngel+2*Math.PI*per,true);
	    }

	    ctx.fill();
	    ctx.stroke();

	    if( per >= 1){
	      component.find('.text').css('opacity',1);
	      ctx.clearRect(0,0,w,h);
	    }
	  }
	  draw(0);

	  component.on('onLoad',function(){
	    //  饼图生长动画
	      var s = 0;
	      for( i=0;i<100;i++){
	        setTimeout(function(){
	            s+=.01;
	            draw(s);
	        },i*10+500);
	      }
	  });
	  component.on('onLeave',function(){
	    //  饼图退场动画
	      var s = 1;
	      for( i=0;i<100;i++){
	        setTimeout(function(){
	            s-=.01;
	            draw(s);
	        },i*10);
	      }
	  });

	  return component;
	}


	module.exports = H5ComponentPie;

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* 柱图组件对象 */

	var H5ComponentBase = __webpack_require__(12);
	__webpack_require__(28);
	var H5ComponentBar =function ( name, cfg ) {
	  var component = H5ComponentBase( name ,cfg );

	  $.each(cfg.data,function(idx,item){

	    var line = $('<div class="line">');
	    var name = $('<div class="name">');
	    var rate = $('<div class="rate">');
	    var per = $('<div class="per">');

	    var width = item[1]*100 + '%';
	    if(cfg.doubleWidth){
	      width = item[1]*1.5*100 + '%';
	    }

	    var  bgStyle = '';
	    if( item[2] ){
	      bgStyle = 'style="background-color:'+item[2]+'"';
	    }

	    rate.html( '<div class="bg" '+bgStyle+'></div>' );

	    rate.css('width',width);

	    name.text( item[0]);

	    per.text(item[1]*100 + '%');

	    line.append( name ).append( rate ).append( per );

	    component.append(line);
	  });

	  return component;
	}

	module.exports = H5ComponentBar;

/***/ },
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* 雷达图组件对象 */
	__webpack_require__(31);

	var H5ComponentBase = __webpack_require__(12);
	var H5ComponentRadar = function(name, cfg){
		var component = H5ComponentBase(name, cfg);

		var w = cfg.width;
		var h = cfg.height;

		// 加入一个画布
		var cns = document.createElement('canvas');
		var ctx = cns.getContext('2d');
		cns.width = ctx.width = w;
		cns.height = ctx.height = h;
		component.append(cns);

		var r = w/2;
		var step = cfg.data.length;

		// ctx.beginPath();
		// ctx.arc(r, r, 5, 0, 2*Math.PI);
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.arc(r, r, r-5, 0, 2*Math.PI);
		// ctx.stroke();

		// 计算一个圆周上的坐标（计算多边形的顶点坐标）
		// 已知：圆心坐标（a,b）\半径 r；角度deg
		// rad = (2*Math.PI/360)*(360/step)*i
		// x = a + Math.sin(rad) * r;
		// y = b + Math.cos(rad) * r;

		// 绘制网格背景（分面绘制，分为10份）
		var isBlue = false;
		for(var s = 10; s>0; s--){
			ctx.beginPath();

			for(var i=0;i<step;i++){
				var rad = (2*Math.PI/360)*(360/step)*i;
				var x = r + Math.sin(rad) * r*(s/10);
				var y = r + Math.cos(rad) * r*(s/10);

				// ctx.beginPath();
				// ctx.arc(x, y, 5, 0, 2*Math.PI);
				// ctx.moveTo(r, r);
				ctx.lineTo(x, y);

			}
			ctx.closePath();
			ctx.fillStyle = (isBlue = !isBlue) ? '#99c0ff' : '#f1f9ff';
			ctx.fill();
			// ctx.stroke();
		}

		// 绘制伞骨
		for(var i=0; i< step;i++){
			var rad = (2*Math.PI/360)*(360/step)*i;
			var x = r + Math.sin(rad) * r;
			var y = r + Math.cos(rad) * r;
			ctx.moveTo(r, r);
			ctx.lineTo(x, y);

			// 输出项目文字
			var text = $('<div class="text">');
			text.text(cfg.data[i][0]);

			text.css('transition', 'all .5s ' + i*.1 + 's');

			if(x>w/2){
				text.css('left', x/2+5);
			}else{
				text.css('right', (w-x)/2+5);
			}

			if(y>h/2){
				text.css('top', y/2+5);
			}else{
				text.css('bottom', (h-y)/2+5);
			}

			if(cfg.data[i][2]){
				text.css('color', cfg.data[i][2]).css('opacity', 0);
			}

			component.append(text);
		}
		ctx.strokeStyle = '#e0e0e0';
		ctx.stroke();

		// 数据层的开发
		// 加入一个画布
		var cns = document.createElement('canvas');
		var ctx = cns.getContext('2d');
		cns.width = ctx.width = w;
		cns.height = ctx.height = h;
		component.append(cns);

		ctx.strokeStyle = '#f00';

		var draw = function(per){
			if(per <= 1){
				component.find('.text').css('opacity', 0);
			}
			if(per >= 1){
				component.find('.text').css('opacity', 1);
			}

			ctx.clearRect(0, 0, w, h);
			// 输出数据的折线
			for(var i=0;i<step;i++){
				var rad = (2*Math.PI/360)*(360/step)*i;
				
				var rate = cfg.data[i][1] * per;

				var x = r + Math.sin(rad) * r * rate;
				var y = r + Math.cos(rad) * r * rate;

				ctx.lineTo(x, y);
				// ctx.arc(x, y, 5, 0, 2*Math.PI);
				// ctx.fill();
			}
			ctx.closePath();
			ctx.stroke();

			// 输出数据的点
			ctx.fillStyle = '#ff7677';
			for(var i=0;i<step;i++){
				var rad = (2*Math.PI/360)*(360/step)*i;
				var rate = cfg.data[i][1] * per;

				var x = r + Math.sin(rad) * r * rate;
				var y = r + Math.cos(rad) * r * rate;

				ctx.beginPath();
				ctx.arc(x, y, 5, 0, 2*Math.PI);
				ctx.fill();
				ctx.closePath();
			}
		}

		component.on('onLoad', function(){
			//雷达图的生长动画
			var s = 0;
			for(i=0;i<100;i++){
				setTimeout(function(){
					s+=.01;
					draw(s);
				}, i*10+500);
			}
		});
		component.on('onLeave', function(){
			var s = 1;
			for(i=0;i<100;i++){
				setTimeout(function(){
					s-=.01;
					draw(s);
				}, i*10+500);
			}

		});
		return component;
	}


	module.exports = H5ComponentRadar;

/***/ },
/* 31 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 32 */,
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* 环图组件对象 */
	__webpack_require__(34);

	var H5ComponentBase = __webpack_require__(12);
	var H5ComponentPie = __webpack_require__(24);
	var H5ComponentRing =function ( name, cfg ) {

	  if(cfg.data.length>1){  //  环图应该只有一个数据
	    // 任务二：(1) 把数据格式化为只有一项，例如 a = [ [1] , [2] , [3] ] 格式化为： a=[ [1] ]
	    cfg.data = [cfg.data[0]];
	  }

	  //  任务二：(2) 重设配置中的 type 参数，不仅利用 H5ComponentPie 构建 DOM 结构和 JS 逻辑，也使用其 CSS 样式定义（思考下为什么能达到这个效果）
	  cfg.type = 'pie';
	  var component = H5ComponentPie( name ,cfg );

	  //  任务二：(3) 修正组件的样式，以支持在样式文件中组件的样式定义 .h5_component_ring 相关样式能生效
	  component.addClass('h5_component_ring');

	  
	  var mask = $('<div class="mask">');

	  // 任务二：(4) 把创建好的遮罩元素添加到组件中
	  component.append(mask);

	  var text = component.find('.text');

	  text.attr('style','');
	  if(cfg.data[0][2]){
	    text.css('color',cfg.data[0][2]);
	  }
	  //  任务二：(5) 在遮罩元素( .mask ) 中添加文本信息
	  mask.append( text );

	  return component;
	}


	module.exports = H5ComponentRing;

/***/ },
/* 34 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* 散点图表组件对象 */
	__webpack_require__(37);

	var H5ComponentBase = __webpack_require__(12);
	var H5ComponentPoint =function ( name, cfg ) {
	   var component =  H5ComponentBase( name ,cfg );
	   
	   var base = cfg.data[0][1];   //  以第一个数据的 比例为大小的 100%

	   //   输出每个 Point
	   $.each( cfg.data,function( idx ,item ){

	        var point = $('<div class="point point_'+idx+'" >');
	        point.addClass('point_focus');

	        var name = $('<div class="name">'+item[0]+'</div>');
	        var rate = $('<div class="per">'+ (item[1]*100)+'%</div>');

	        name.css('font-size', 22*item[1]);
	        name.append(rate);
	        point.append(name);


	        var per =  (item[1]/base*100) + '%';

	        point.width(per).height(per);

	        if(item[2]){
	            point.css('background-color',item[2]);
	        }


	        if(item[3] !== undefined && item[4]!== undefined ){
	            point.css('left',item[3]).css('top',item[4]);
	            //  任务一：暂存left、top到元素上
	            point.data('left',item[3]).data('top',item[4]);
	            
	        }

	        //  任务二：设置zIndex、重设位置
	        point.css('zIndex',100-idx);
	        point.css('left',0).css('top',0);
	        

	        point.css('transition','all 1s '+idx*.5+'s')
	        component.append( point );
	   } );

	   //  任务三：onLoad之后取出暂存的left、top 并且附加到 CSS 中
	   component.on('onLoad',function(){
	      component.find('.point').each(function(idx,item){
	        $(item).css('left',$(item).data('left')).css('top',$(item).data('top'));
	      })
	   });
	   // 任务 四：onLeave之后，还原初始的位置
	   component.on('onLeave',function(){
	      component.find('.point').each(function(idx,item){
	        $(item).css('left',0).css('top',0);
	      })
	   })

	   component.find('.point').on('click',function(){

	        component.find('.point').removeClass('point_focus');
	        $(this).addClass('point_focus');

	        return false;
	   }).eq(0).addClass('point_focus');

	   return component;
	}

	module.exports = H5ComponentPoint;

/***/ },
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/*loading动画*/
	__webpack_require__(40);

	var H5_loading = function(images, firstPage){

		if(this._images === undefined){//第一个进入
			this._images = (images || []).length;
			this._loaded = 0;

			var id = this.id;
			window[id] = this;//把当前对象存储在全局对象window中，用来进行某个图片加载完成之后的回调

			for(s in images){
				var item = images[s];
				var img = new Image;
				img.onload = function(){
					window[id].loader();
				}
				img.src = item;
			}

			$('#rate').text('0%');
			return this;

		}else{
			this._loaded ++;
			$('#rate').text( ((this._loaded / this._images * 100)>>0) + '%' );
			
			if(this._loaded < this._images){
				window[id] = null;
				return this;
			}

		}

		this.el.fullpage({
			onLeave: function(index, nextIndex, direction){
	            // debugger
	            $(this).find('.h5_component').trigger('onLeave');
	        },
	        afterLoad: function(anchorLink, index){
	            // debugger
	            $(this).find('.h5_component').trigger('onLoad');
	        }
		});
		this.page[0].find('.h5_component').trigger('onLoad');
		this.el.show();

		if(firstPage){
			$.fn.fullpage.moveTo( firstPage );
		}
	}

	module.exports = H5_loading;

/***/ },
/* 40 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);