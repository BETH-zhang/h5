
var H5ComponentBase = require('./H5ComponentBase');
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