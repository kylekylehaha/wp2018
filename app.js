var pic = ['./web_pic/redbanner.jpg' , './web_pic/sunglass.jpg' , './web_pic/yellowsmokeman.jpg'];
var intropic = ['./web_pic/redman.jpg' , './web_pic/basketball.jpg' , './web_pic/red.jpg'];
var buttomcolor = ['red' , '#87CDFA' , '#FFFF00'];
var length = pic.length;
var i =0;
var j =1;
setInterval("change()",3000);
function change(){
    $('body').css({
            "background-image":'url(' +pic[i]+ ')' ,
            'transition':'background-image 2s'
          });
    $('#intropic').css({
            'background-image':'url(' +intropic[i]+ ')',
            'transition':'background-image 2s'
        });
    $('.buttomleft').css('color' , ''+buttomcolor[i]+'');
    $('.buttomright').css('color' , ''+buttomcolor[i]+'');
    $('#squareswift').animate({'margin-left':''+(((j-1)*33)+4)+'%'},2000);
    $('#square' + (j) + '').css({
            'opacity':'1',
            'transition':'opacity 1s'
    });
    $('#introtxt' + (j) + '').css({
            'opacity':'1',
            'transition':'opacity 1s'
    });
    $('#bannertxt' + (j) + '').css({
            'display':'block',
            'transition':'fly left 1s'
    });
    if (j == 3){
      $('#square' +(j-2)+ '').css({
          'opacity':'0.5',
          'transition':'opacity 1s'
      });
      $('#introtxt' +(j-2)+ '').css({
          'opacity':'0',
          'transition':'opacity 1s'
      });
      $('#bannertxt' +(j-2)+ '').css({
          'display':'none',
          'transition':'display 1s'
      });
    }
    else {
      $('#square' + (j+1) + '').css({
            'opacity':'0.5',
            'transition':'opacity 1s'
      });
      $('#introtxt' + (j+1) + '').css({
            'opacity':'0',
            'transition':'opacity 1s'
      });
      $('#bannertxt' +(j+1)+ '').css({
          'display':'none',
          'transition':'display 1s'
      });
    }
    if (j>=2){
      $('#square' +(j-1)+ '').css({
          'opacity':'0.5',
          'transition':'opacity 1s'
      });
      $('#introtxt' +(j-1)+ '').css({
          'opacity':'0',
          'transition':'opacity 1s'
      });
      $('#bannertxt' +(j-1)+ '').css({
          'display':'none',
          'transition':'display 1s'
      });
    }
    else{
      $('#square' +(j+2)+ '').css({
          'opacity':'0.5',
          'transition':'opacity 1s'
      });
      $('#introtxt' +(j+2)+ '').css({
          'opacity':'0',
          'transition':'opacity 1s'
      });
      $('#bannertxt' +(j+2)+ '').css({
          'display':'none',
          'transition':'display 1s'
      });
    }
    i++; j++;
    if(i >= length){
      i = 0;
      j = 1;
    }
}          

$('#videobutton').click(function(){
  $(this).addClass('rotateX');
},function(){
  $(this).removeClass('rotateX');
});



