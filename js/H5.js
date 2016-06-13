/* 内容管理对象 */
require('../css/H5.css');
var H5ComponentBase = require('./H5ComponentBase');
var H5ComponentLogo = require('./H5ComponentLogo');
var H5ComponentPhone = require('./H5ComponentPhone');
var H5ComponentPolyline = require('./H5ComponentPolyline');
var H5ComponentPie = require('./H5ComponentPie');
var H5ComponentBar = require('./H5ComponentBar');
var H5ComponentRadar = require('./H5ComponentRadar');
var H5ComponentRing = require('./H5ComponentRing');
var H5ComponentPoint = require('./H5ComponentPoint');
var H5_loading = require('./H5_loading');

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

