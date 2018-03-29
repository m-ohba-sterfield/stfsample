$(function(){
	//$("body").css("opacity",0);
	$(".block").css("opacity",0);
	
	//$("body").animate({opacity:"1"}, 600);
	$(window).bind('load', function(){
		var sct = $(document).scrollTop();
		var hei = $(window).height();
		
		function anime(){
			sct = $(document).scrollTop();
			hei = $(window).height();
			$(".block").each( function(){
				if($(this).offset().top + 100 < sct + hei){
					$(this).animate({opacity:"1", right: 0}, 1200);				
				};
			});
		}
		
		$(window).scroll(function () {
			anime();		
		});
		var timer =false;
		$(window).resize(function() {
			if(timer !== false) {
				clearTimeout(timer);	
			}
    		timer = setTimeout(function() {
    			anime();
    		},200);
		});
		anime();
	});

	
	var wid = $(window).width();
	
	if(wid < 481 ){
		$(".menu").removeClass("heightLine");
	}
	// if($(".art-list").size() > 0){
	// 	$(window).resize(function(event) {
	// 		heightLine();
	// 	});
	// }
	if($(".letter").size() > 0){
		modalWindow();
	}
});

function modalWindow(){
	var $modal = ".letter a:has(img)";
	var $mBg= '.modalBg';
	//�{�^�����N���b�N�������̏���
	$(document).on('click', $modal, function(event) {
		event.preventDefault();
		//.gnavi a��href�ɂ��郊���N���ۑ�
		var link = $(this).attr("href");
		if(link.match(/\.(jpeg|jpg|gif|png)$/i) === null){
			location.href = link;
			return false;
		}
		//���[�_���̔w�i��\��
		var overlay = $('<div>', { 'class': 'modalBg' });
		var wrap = $('<div>', { 'class': 'modalOuter' });
		var content = $('<div>', { 'class': 'modalContent' });
		var close = $('<div>', { 'class': 'modalClose' });
		var img = $('<img>', { src: link });
		img.one('load', function() {
			var imgWrap = $('<figure>',{ 'class': 'modalImg' });
            imgWrap.append(img);
			content.html(imgWrap);
		});
		wrap.append(close);
		wrap.append(content);
		overlay.append(wrap);

		$('body').append(overlay);
		$('.modalBg').fadeIn('fast', function() {
			$('.modalOuter').fadeIn('normal');
		});
		overlay.on('click', function(e){
            if(e.target === this || $(e.target).hasClass('modalImg')){ //
                actionClose();
            }
        });
		close.on('click', function(e){
            e.preventDefault();
            actionClose();
        });
	});
	//�����ݒ�
	var actionClose = function(){
		$('.modalBg,.modalOuter').fadeOut('fast', function() {
			$(this).remove();
		});
	}
}


//-----[�摜�����N�t�F�[�h]
$(function(){
		$("a.fade img").hover(function(){
		$(this).fadeTo(100, 0.7);
	},function(){
		$(this).fadeTo(200, 1.0);
	});
});
			
//�����N�؂�摜�������ւ���
//$(function () {
//     $('img').error(function(){
//          $(this).attr({src:'images/missing.jpg',alt:'�摜��������܂���'});
//     });
//});

//�e�[�u���̋����E��̍s�̐F��ς���
$(function(){
     $("tr:odd").addClass("odd");
});

//�y�[�W�g�b�v�փX�N���[�����遦�悭�g�p
$(function(){
   $('a[href^=#]').click(function() {
      var speed = 1000;// �~���b
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top; //target�̈ʒu���擾
       var body = 'body';
    var userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1 || userAgent.indexOf("firefox") > -1 ) { /*IE6.7.8.9.10.11*/
      body = 'html';
    }
    $(body).animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
   });
});


//�t�H�[���Ƀe�L�X�g�����Ă����A�t�H�[�J�X�ŏ����i�����F���ύX�j
$(function(){
     $(".focus").focus(function(){
          if(this.value == "�L�[���[�h�����"){
               $(this).val("").css("color","#f39");
          }
     });
     $(".focus").blur(function(){
          if(this.value == ""){
               $(this).val("�L�[���[�h�����").css("color","#969696");
          }
     });
});

//�c�[���`�b�v
$(function(){
     $(".tooltip a").hover(function() {
        $(this).next("span").animate({opacity: "show", top: "-75"}, "slow");}, function() {
               $(this).next("span").animate({opacity: "hide", top: "-85"}, "fast");
     });
});

$(function(){
	$('.sidemenu .archiveYear ul').css('display','none');
	$('.sidemenu .archiveYear ul:first').css('display','block');
	$('.sidemenu .archiveYear h4').click(function(){
		$(this).next('ul').slideToggle();
		$(this).children('ul').toggleClass('open');

	});
});

$(function(){
	$('.sidemenu .cat-item').hover(
		function(){
			// $(this).find('ul').css('display','block');
			$(this).find('ul').slideToggle();			
		},
		function(){
			// $(this).find('ul').css('display','none');
		}
	);
});