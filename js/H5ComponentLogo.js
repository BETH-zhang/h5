/* logo组件对象 */

var H5ComponentLogo = function(name, cfg){
	var component = new H5ComponentBase(name, cfg);

	var path1 = $('<div class="logo path1">');
	var path2 = $('<div class="logo path2">');
	var path3 = $('<div class="logo path3">');

	component.append(path1);
	component.append(path2);
	component.append(path3);

	return component;
}