// Resize
jQuery(window).resize(function() {
    "use strict";

    // Logo background
    logobg();

    // jPlayer
    jQuery('.jp-audio-container, .jp-video-container').each(function() {
        jQuery(this).find('.jp-progress-container').width((jQuery(this).width() - 149 < 0) ? 0 : (jQuery(this).width() - 149));
        jQuery(this).find('.jp-progress').width((jQuery(this).width() - 152 < 0) ? 0 : (jQuery(this).width() - 152));
    });
    // Testimonials
    jQuery('.ott-testimonials').each(function() {
        jQuery(this).find('>.caroufredsel_wrapper').width(jQuery(this).width());
        jQuery(this).find('ul>li').width(jQuery(this).width());
    });
    // otouch Redraw
    jQuery('.ott-redraw').each(function() {
        var $curr = jQuery(this);
        if (!$curr.hasClass('not-drawed')) {
            $curr.trigger('ott-animate');
        }
    });
	
			


    // Portfolio Carousel Responsive
    jQuery('ul.ott-carousel>li>.gallery-container').each(function() {
        var $currGallCon = jQuery(this);
        var $currWidth = $currGallCon.width();
        jQuery('>.caroufredsel_wrapper', $currGallCon).width($currWidth);
        jQuery('>.caroufredsel_wrapper>.gallery-slide>.slide-item', $currGallCon).width($currWidth);
        var $currHeight = jQuery('>.caroufredsel_wrapper>.gallery-slide>.slide-item', $currGallCon).height();
        jQuery('>.caroufredsel_wrapper>.gallery-slide', $currGallCon).height($currHeight);
        jQuery('>.caroufredsel_wrapper', $currGallCon).height($currHeight);
        $currGallCon.trigger('ott-carousel-container-height-repair');
    });
});

    jQuery('nav.langes-menu .menu li.parent a').click(function() {
        jQuery('nav.langes-menu ul.sub-menu').slideToggle( "slow", function() {
			// Animation complete.
		});
		$(this).find('a').stop().fadeTo(300, 1);

	});




jQuery(document).ready(function($) {
    "use strict";

    // Nice scroll
    if (jQuery().niceScroll){
        $("html").niceScroll({
            scrollspeed: 70,
            mousescrollstep: 38,
            cursorwidth: 15,
            cursorborder: 0,
            cursorcolor: '#464646',
            cursorborderradius: 0,
            autohidemode: false,
            horizrailenabled: false
        });
    }
    // Logo background
    jQuery('.ott-divider-space').closest('.ott-element').addClass('ott-divider-space-container');
    // Logo background
    logobg();
    // Load Complete
    setTimeout(function() {
        loadComplete();
    }, 6000);
    jQuery(window).scroll(function() {
        var $filter = jQuery('#header.affix');
        var $filterHeight = $filter.height();
        var $scrollTop = jQuery(window).scrollTop();

        // START - One Page Home
        if ($scrollTop <= 50 && jQuery('ul#menu a[href$=#one-page-home]').closest('li').hasClass('menu-item')) {
            setTimeout(function() {
                jQuery('ul#menu li.current_page_item.current-menu-item').removeClass('current_page_item current-menu-item');
                jQuery('ul#menu a[href$=#one-page-home]').closest('li').addClass('current_page_item current-menu-item');
            }, 500);
        }
        // START - One Page Home
        if ($filterHeight <= $scrollTop) {
            $filter.addClass('stuck animated fadeIn');
            if (!jQuery('#header-holder').hasClass('header-holder')) {
                $filter.after(jQuery('<div id="header-holder" class="header-holder" />').height($filterHeight));
            }
        } else {
            $filter.removeClass('stuck animated fadeIn');
            jQuery('#header-holder').remove();
        }
        if (jQuery(this).scrollTop() > jQuery('#header').height()) {
            jQuery('#scrollUp').fadeIn();
        } else {
            jQuery('#scrollUp').fadeOut();
        }
        logobg();
        setTimeout(function() {
            logobg();
        }, 100);
        setTimeout(function() {
            logobg();
        }, 500);
        setTimeout(function() {
            logobg();
        }, 1000);
    });
    jQuery(window).scroll();
    jQuery('#scrollUp').click(function() {
        jQuery("html, body").animate({scrollTop: 0}, 500);
        return false;
    });

    if (jQuery().parallax) {
        jQuery('.bg-parallax').each(function() {
            jQuery(this).parallax("50%", 0.2);
        });
    }

    $(".btn.btn-border").each(function() {
        var $color = jQuery(this).css('color');
        $('span', this).css('background-color', $color);
    });



    $(".btn.btn-flat").hover(
            function() {
                var $color = jQuery(this).css('background-color');
                $('span', this).css('color',  $color);
				$(this).css('color', '#fff')
            },
            function() {
                $(this).css('color', '#fff');
            }
    );
	
		
	    $(".btn.btn-iconed").hover(
            function() {
                var $color = jQuery(this).css('background-color');
                $(this).css('color', '#fff');
            },
            function() {
                $(this).css('color', '#fff');
            }
    );

	
    /* navigation */
    $('ul#menu').superfish({
        delay: 200,
        animation: {
            opacity: 'show',
            height: 'show'
        },
        speed: 'fast',
        autoArrows: false,
        dropShadows: false
    });

    /* mobile navigation */
    jQuery('.show-mobile-menu').click(function() {
        jQuery('#mobile-menu').slideToggle('fast').promise().done(function() {
            jQuery('#mobile-menu li').css('width', '100%').css('width', '');
        });
    });
    jQuery('#mobile-menu ul.sub-menu').each(function() {
        var $parentMenu = jQuery(this).parent('li');
        $parentMenu.addClass('has-children').prepend('<div class="action-expand"><span class="opened">-</span><span class="closed">+</span></div>');
        $parentMenu.children('.action-expand').click(function(e) {
            e.preventDefault();
            var $this = jQuery(this).closest('.has-children');
            $this.siblings('li.menu-open').removeClass('menu-open').children('.sub-menu').slideUp('fast');
            $this.toggleClass('menu-open');
            if ($this.hasClass('menu-open')) {
                $this.children('.sub-menu').slideDown('fast');
            } else {
                $this.children('.sub-menu').slideUp('fast');
            }
            return false;
        });


    });


    // One Page
    $(document).on('click', 'ul#menu a', function() {
        //get current
        var targetSection = $(this).attr('href').split("#")[1];
        if (!targetSection || targetSection == '') {
            return;
        }
        targetSection = '#' + targetSection;

        //get pos of target section
        var targetOffset = Math.floor($(targetSection).offset().top - $('#header').height());

        //scroll			 
        $('html,body').animate({scrollTop: targetOffset}, 1000, function() {
            jQuery(window).scroll();
        });
        return false;
    });
    if(window.location.toString().split("#")[1]){jQuery('.menu-container ul#menu a[href="'+window.location.toString()+'"]').click();}


    /*nav handling
     -------------------*/
    $(function() {
        jQuery('.row-container').waypoint({
            handler: function(direction) {
                var activeSection = jQuery(this);

                if (direction === "up") {
                    activeSection = activeSection.prev();
                }
                if (activeSection.attr('id')) {
                    var activeMenuLink = jQuery('ul#menu a[href$=#' + activeSection.attr('id') + ']');

                    jQuery('ul#menu a').parent('li').removeClass('current_page_item current-menu-item');
                    activeMenuLink.parent('li').addClass('current_page_item current-menu-item');
                }
            },
            offset: $('#header').height()	//when it should switch on consecutive page
        });
    });


    // Accordion
    $('.ott-accordion').each(function($index) {
        $(this).attr('id', 'accordion' + $index);
        $(this).find('.accordion-group').each(function($i) {
            $(this).find('.accordion-toggle').attr('data-parent', '#accordion' + $index).attr('href', '#accordion_' + $index + '_' + $i);
            $(this).find('.accordion-body').attr('id', 'accordion_' + $index + '_' + $i);
        });
        /* Bootstrap Accordion adding active class */
        jQuery(this).on('show', function(e) {
            jQuery(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
        });
        jQuery(this).on('hide', function(e) {
            jQuery(this).find('.accordion-toggle').not(jQuery(e.target)).removeClass('active');
        });
    });

    // Toggle
    $('.ott-toggle').each(function($index) {
        $(this).find('.accordion-group').each(function($i) {
            $(this).find('.accordion-toggle').attr('href', '#toggle_' + $index + '_' + $i);
            $(this).find('.accordion-body').attr('id', 'toggle_' + $index + '_' + $i);
        });
        /* Bootstrap Accordion adding active class */
        jQuery(this).on('show', function(e) {
            jQuery(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
        });
        jQuery(this).on('hide', function(e) {
            jQuery(e.target).prev('.accordion-heading').children('.accordion-toggle').removeClass('active');
        });
    });
    // Tab
    $('.ott-tab').each(function($index) {
        $(this).find(">li").each(function($i) {
            jQuery(this).appendTo(jQuery(this).closest('.ott-tab').find('ul.nav-tabs'));
            $(this).find(">a").attr('href', '#tabitem_' + $index + '_' + $i);
            if ($i === 0) {
                $(this).addClass('active');
            }
        });
        $(this).find(".tab-pane").each(function($in) {
            jQuery(this).appendTo(jQuery(this).closest('.ott-tab').find('div.tab-content'));
            $(this).attr('id', 'tabitem_' + $index + '_' + $in);
            if ($in === 0) {
                $(this).addClass('active');
            }
        });
    });
    $('.ott-tab>ul a').click(function(e) {
        e.preventDefault();
        jQuery(this).tab('show');
    });



    if (jQuery().jPlayer) {
        jQuery('.jp-jplayer-audio').each(function() {
            jQuery(this).jPlayer({
                ready: function() {
                    jQuery(this).jPlayer("setMedia", {
                        mp3: jQuery(this).data('mp3')
                    });
                },
                swfPath: "",
                cssSelectorAncestor: "#jp_interface_" + jQuery(this).data('pid'),
                supplied: "mp3, all"
            });
        });

        jQuery('.jp-jplayer-video').each(function() {
            jQuery(this).jPlayer({
                ready: function() {
                    jQuery(this).jPlayer("setMedia", {
                        m4v: jQuery(this).data('m4v'),
                        poster: jQuery(this).data('thumb')
                    });
                },
                size: {
                    width: '100%',
                    height: 'auto'
                },
                swfPath: "",
                cssSelectorAncestor: "#jp_interface_" + jQuery(this).data('pid'),
                supplied: "m4v, all"
            });
        });
    }


    // PrettyPhoto
    jQuery("a[data-rel^='prettyPhoto'], a.zoom").prettyPhoto({
        deeplinking: false
    });

    // Milestones
    jQuery('.ott-milestones-box').each(function() {
        var $curr = jQuery(this);
        jQuery('>.ott-milestones-content>.ott-milestones-count>.ott-milestones-show>ul', $curr).each(function() {
            jQuery(this).css('bottom', '-' + jQuery(this).height() + 'px');
        });
        $curr.bind('ott-animate', function() {
            setTimeout(function() {
                jQuery('>.ott-milestones-content>.ott-milestones-count>.ott-milestones-show>ul', $curr).each(function() {
                    jQuery(this).animate({bottom: '5px'}, 800).animate({bottom: '0px'}, 'slow');
                });
            }, 1000);
        });
    });
    // Animate General - Init
    jQuery('.ott-animate-gen').each(function() {
        var $curr = jQuery(this);
        var $currChild = $curr.children().eq(-1);
        if ($currChild.attr('id') === 'sidebar' || $currChild.hasClass('ott-pricing') || $currChild.hasClass('ott-our-team') || $currChild.hasClass('ott-blog')) {
            $currChild.children().addClass('ott-animate-gen').attr('data-gen', $curr.attr('data-gen')).attr('data-gen-offset', $curr.attr('data-gen-offset')).css('opacity', '0');
            $curr.removeClass('ott-animate-gen').attr('data-gen', '').attr('data-gen-offset', '').css('opacity', '');
        }
    });
    jQuery(window).resize();
});

jQuery(window).load(function() {
    "use strict";
    // Logo background
    logobg();
    // Load Complete
    loadComplete();
    // Gallery
    img_slider();

    // Testimonials
    jQuery('.ott-testimonials').each(function() {
        var $prev = jQuery(this).find(".carousel-prev");
        var $next = jQuery(this).find(".carousel-next");
        var $easing = 'quadratic';
        var $direction = jQuery(this).data("direction");
        var $duration = jQuery(this).data("duration");
        var $timeout = jQuery(this).data("timeout");
        jQuery(this).find('>ul').carouFredSel({
            items: 1,
            direction: $direction,
            prev: $prev,
            next: $next,
            auto: {
                easing: $easing,
                duration: $duration,
                timeoutDuration: $timeout,
                pauseOnHover: true
            }
        });
    });
    // Carousel
    list_carousel();

    // Carousel Container Height Repair
    jQuery('ul.ott-carousel>li>.gallery-container').unbind('ott-carousel-container-height-repair').bind('ott-carousel-container-height-repair', function() {
        var $currGallCon = jQuery(this);
        var $currLiHeight = $currGallCon.closest('li').height();
        if ($currGallCon.closest('.caroufredsel_wrapper').height() < $currLiHeight) {
            $currGallCon.closest('.caroufredsel_wrapper').animate({height: $currLiHeight}, 600);
            $currGallCon.closest('ul.ott-carousel').height($currLiHeight);
        }
    });
    jQuery('ul.ott-carousel>li>.gallery-container').each(function() {
        var $currGallCon = jQuery(this);
        jQuery('>.carousel-arrow>a', $currGallCon).each(function() {
            jQuery(this).bind('click', function() {
                setTimeout(function() {
                    $currGallCon.trigger('ott-carousel-container-height-repair');
                }, 1100);
            });
        });
    });

    // ottitter
    if (jQuery().jottt) {
        jQuery('.ott-ottitter').each(function() {
            var currentottitter = jQuery(this);
            currentottitter.find('a').live("click", function() {
                jQuery(this).attr('target', "_blank");
            });
            currentottitter.jottt({
                count: currentottitter.attr('data-count'),
                username: currentottitter.attr('data-name'),
                image_size: 0
            });
            currentottitter.children('.ottitter-follow').appendTo(currentottitter);
        });
    }
    //  Animate Custom
    jQuery('.ott-animate').each(function() {
        var $curr = jQuery(this);
        var $currOffset = $curr.attr('data-gen-offset');
        if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
            $currOffset = 'bottom-in-view';
        }
        if ($currOffset === 'none') {
            $curr.trigger('ott-animate');
        } else {
            $curr.waypoint(function() {
                $curr.trigger('ott-animate');
            }, {triggerOnce: true, offset: $currOffset});
        }
    });
    // Animate General - Bind
    jQuery('.ott-animate-gen').each(function() {
        var $curr = jQuery(this);
        $curr.bind('ott-animate', function() {
            $curr.css('opacity', '');
            $curr.addClass('animated ' + $curr.data('gen'));
        });
    });
    //  Animate General
    jQuery('.ott-animate-gen').each(function() {
        var $curr = jQuery(this);
        var $currOffset = $curr.attr('data-gen-offset');
        if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
            $currOffset = 'bottom-in-view';
        }
        $curr.waypoint(function() {
            $curr.trigger('ott-animate');
        }, {triggerOnce: true, offset: $currOffset});
    });

    ///////////////////////////////////
    jQuery(window).resize();
});

function logobg() {
    if (jQuery('#header .ott-logo').hasClass('ott-logo')) {
        if (jQuery('body').hasClass('rtl'))
            var logoTmpSize = jQuery('#header .ott-logo').offset().right;
        else
            var logoTmpSize = jQuery('#header .ott-logo').offset().left;
    }
}

function img_slider() {
    "use strict";
    // Gallery
    jQuery('.gallery-container').each(function() {
        var $prev = jQuery(this).find(".carousel-prev");
        var $next = jQuery(this).find(".carousel-next");
        jQuery(this).find('.gallery-slide').carouFredSel({
            auto: false,
            responsive: true,
            scroll: {fx: 'uncover-fade', easing: "swing", duration: 1000},
            width: '100%',
            heigth: 'auto',
            padding: 0,
            prev: $prev,
            next: $next,
            items: {
                width: 870,
                visible: {
                    min: 1,
                    max: 1
                }
            }
        });
    });
}
function list_carousel() {
    "use strict";
    jQuery('.list_carousel').each(function() {
        var $prev = jQuery(this).closest('.carousel-container').find(".ott-carrow .carousel-prev");
        var $next = jQuery(this).closest('.carousel-container').find(".ott-carrow .carousel-next");
        var $width = 310;
        var $min = 1;
        var $max = 4;
        var $currentCrslPrnt = jQuery(this);
        var $currentCrsl = $currentCrslPrnt.children('ul.ott-carousel');
        if (jQuery(this).hasClass('ott-carousel-partner')) {
            $width = 200;
            $max = 6;
        }
        else if (jQuery(this).hasClass('ott-carousel-post')) {
            $width = 368;
            $max = 4;
        }
		else if (jQuery(this).hasClass('ott-carousel-product list_carousel')) {
            $width = 310;
            $max = 4;
        }
		
        else if (jQuery(this).hasClass('ott-carousel-news')) {
            $width = 368;
            $max = 3;
        }		
        else if (jQuery(this).hasClass('ott-carousel-portfolio')) {
            $width = 270;
            $max = 4;
        }

        else if (jQuery(this).hasClass('ott-carousel-twitter')) {
            $width = 400;
            $max = 1;
        }
        $currentCrsl.carouFredSel({
            responsive: true,
            auto: false,
            prev: $prev,
            next: $next,
            width: '100%',
            heigth: 'auto',
            scroll: 1,
            items: {
                width: $width,
                visible: {
                    min: $min,
                    max: $max
                }
            }
        });
    });
}

// Load Complete
function loadComplete() {
    "use strict";
    jQuery('#loading').remove();
    jQuery('body').removeClass('loading');
}