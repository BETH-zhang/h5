/*加载 H5组件 相关资源*/
var html = [];
var res = [
    'Base','Bar','Point','Polyline',
    'Radar','Pie','Ring',
    'Logo','Phone'
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
            css: {top: 50, opacity: 0},      
            animateIn: {opacity: 1},
            animateOut: {opacity: 0},
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
                ['轻松工作', .7, 'rgba(225, 0, 0, 0.7)', 0, 0],
                ['节日活动', .7, 'rgba(225, 0, 0, 0.4)', 60, '-110%'],
                ['生日派对', .5, 'rgba(225, 0, 0, 0.6)', -60, '-90%'],
                ['户外郊游', .4, 'rgba(255, 0, 0, 0.8)', 130, '80%'],
                ['各种聚餐', .7, 'rgba(225, 0, 0, 0.7)', -60, '110%'],
                ['奇葩分享', .4, 'rgba(225, 0, 0, 0.4)', 80, '150%']
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
            // bg: '../imgs/face_logo.png',
            css: {top: 50, opacity: 0},      
            animateIn: {opacity: 1},
            animateOut: {opacity: 0}
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
    .loader([], 1);

})