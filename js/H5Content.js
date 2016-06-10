/*加载 H5组件 相关资源*/
var html = [];
var res = [
    'Base','Bar','Point','Polyline',
    'Radar','Pie','Ring',
    'Logo'
    ];
for(s in res){
    html.push('<script type="text/javascript" src="js/H5Component'+res[s]+'.js"><\/script>');
    html.push('<link rel="stylesheet" type="text/css" href="css/H5Component'+res[s]+'.css">');

}
/*加载 工具组件*/
var toolRes = [
    'TimeFormat'
    ];
for(s in toolRes){
    html.push('<script type="text/javascript" src="js/'+toolRes[s]+'.js"><\/script>');
}
document.write( html.join('') );

/*主要逻辑*/
$(function(){
    
    var h5 = new H5();

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
    .addPage()
        .addComponent('caption', {
            text: '前端技术栈'
        })
    .addPage()
        .addComponent('caption', {
            text: '我们时间去哪了'
        })
    .addPage()
        .addComponent('caption', {
            text: '我们的快乐日子'
        })
    .addPage()
        .addComponent('caption', {
            text: '技术部的猿猿们'
        })
    .addPage()
        .addComponent('caption', {
            text: '让我们一起[起航]'
        })
    .addPage()
    .loader(3);

})