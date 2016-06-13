/* 柱图组件对象 */

var H5ComponentBase = require('./H5ComponentBase');
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