$(document).ready(function() {
    // $(".skill_graph").addClass("active")


    $('.toggle').click(function(){
        $(this).toggleClass('active');
        $(".slide_menu_wrap").toggleClass('show');
    });


    document.getElementById("section1").classList.add("show");

    $("#section1 .title > h2.top").lettering();
    $("#section1 .title > h2.bottom").lettering();

    
    var char = '[class*="char"]';
    var tl = new TimelineLite();

    // Stagger letter animation
    tl.staggerFrom(char, 1.5, {
        opacity: 0,
        ease: Elastic.easeOut,
        delay: 1.5,
        y: '100%'
    }, 0.05);


    $(".skill_graph span").each(function() {
        $(this).animate({
            "width": $(this).parent().attr("data-bar") + "%"
        }, 1000);
        $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
    });
    setTimeout(function() {
        $(".skill_graph span b").animate({"opacity":"1"},1000);
    }, 2000);


    var swiper = new Swiper(".effectSwiper", {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });

});





const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

//마우스 움직이기
window.addEventListener("mousemove", function(e){

    gsap.to(cursor, {duration: 0.3, left: e.pageX - 5, top: e.pageY - 5 });
    gsap.to(follower, {duration: 0.8, left: e.pageX - 15, top: e.pageY - 15 });

    document.querySelectorAll(".mouseCont").forEach(em => {
        em.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
            follower.classList.add("active");
        });
        em.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
            follower.classList.remove("active");
        });
    });

});


// 모달팝업 script 
const get = (target) => {   
    return document.querySelector(target)
}

const getAll = (target) => {   
    return document.querySelectorAll(target)
}


const $modalbutton = getAll('.modal_btn');
const $modal = get('.modal');
const $modalCancelButton = get('.modal_button.cancel');
const $body = get('body');
const $img = getAll('.modalContent > .modal_body > img');
const $modal_header = document.querySelector('.modalContent > .modal_header > span');
const $modal_subtitle = document.querySelector('.modalContent > .sub_title > span');
const $modal_body = document.querySelector('.modalContent > .modal_body');
const $detail_page_btn = getAll('.detail_page_btn');


// 모달내용 비우기
$modal_header.innerHTML = undefined;
$modal_subtitle.innerHTML = undefined;
$modal_body.innerHTML = undefined;


const toggleModal = () => {
    $modal.classList.toggle('show');
    $body.classList.toggle('scroll_lock');
}



$detail_page_btn.forEach(function(elem) {
    elem.addEventListener('click', function(e){
        e.preventDefault();
        toggleModal();
        $modal_body.scrollTop = "0";
        let $header = elem.getAttribute('data-header'),
        $value = elem.getAttribute('data-value');
        $modal_header.textContent = $header;
        $modal_subtitle.textContent = $value;


        let idx = Array.from($detail_page_btn).indexOf(e.currentTarget);
        $modal_body.innerHTML = "";
        if ( idx === 0) {
            $modal_body.innerHTML = `<img src="./assets/img/publishing_detail/Kauction_live_detail.png" alt="">`;
        } else if ( idx === 1) {
            $modal_body.innerHTML = `<img src="./assets/img/publishing_detail/Kauction_renewal_detail.png" alt="">`
        } else {
            $modal_body.innerHTML = `<img src="./assets/img/publishing_detail/megabox_detail.png" alt=""></img>`
        }

    });
})



$modalbutton.forEach(function(elem){
    elem.addEventListener('click', function(e) {
        e.preventDefault();
        toggleModal();
        $modal_body.scrollTop = "0";
        let $header = elem.getAttribute('data-header'),
        $value = elem.getAttribute('data-value');
        $modal_header.textContent = $header;
        $modal_subtitle.textContent = $value;
        $modal_body.innerHTML = "";
        let idx = Array.from($modalbutton).indexOf(e.currentTarget);
        for (let i = 0; i<$img.length; i++) {
            $img[i].style.display = "none"
        }
        $img[idx].style.display = "block";
        $modal_body.append($img[idx]);
        
    });
});


$modalCancelButton.addEventListener('click', () => {
    toggleModal()
});

window.addEventListener('click', (e) => {
    if (e.target === $modal) {
      toggleModal()
    }
});



// 페럴럭스
document.querySelectorAll(".util_menu ul li a").forEach(elem => {
    elem.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(elem.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    })
});




function scrollProgress(){
    let scrollTop = (document.documentElement.scrollTop || window.scrollY || window.pageYOffset) + window.innerHeight; 
    const reveal = document.querySelectorAll(".reveal");


    reveal.forEach(el => {
        const revealDelay = el.dataset.delay;

        if( scrollTop > el.parentElement.offsetTop ){
            if( revealDelay == undefined ){
                el.classList.add("show");
            } else {
                setTimeout(() => {
                    el.classList.add("show");
                }, revealDelay);
            }
        }
    })



    document.querySelectorAll(".section").forEach((item, index) => {
        scrollTop > item.offsetTop ? item.classList.add("show") : item.classList.remove("show");

    });


    // about me skill
    document.querySelectorAll("#section2_1.section .skills > div").forEach(item => {
        scrollTop > item.offsetTop ? item.classList.add("show") : item.classList.remove("show");
    });



    // web portfolio
    document.querySelectorAll("#section3 > div > div").forEach(item => {
        scrollTop > item.offsetTop ? item.classList.add("show") : item.classList.remove("show");
    });


    // mobile portfolio
    document.querySelectorAll(".port_mobile").forEach(item => {
        scrollTop > item.offsetTop ? item.classList.add("show") : item.classList.remove("show");
    });

    // #section4 .port_mobile > .content


    if (scrollTop > document.querySelectorAll(".port_mobile")[0].offsetTop) {
        let offset1 = (scrollTop - document.querySelectorAll(".port_mobile")[0].offsetTop) * 0.1;

        document.querySelectorAll("#section4 .port_mobile .mockup_img")[0].style.transform = "translateX("+ offset1 +"px)";
    }

    if (scrollTop > document.querySelectorAll(".port_mobile")[1].offsetTop) {
        let offset1 = (scrollTop - document.querySelectorAll(".port_mobile")[1].offsetTop) * 0.1;

        document.querySelectorAll("#section4 .port_mobile .mockup_img")[1].style.transform = "translateX("+ offset1 +"px)";
    }

}

window.addEventListener("scroll", scrollProgress);


$(".number").each(function (i) {
    var $percent = $(this).find(".value").attr("data-percent");

    var options = {
      value: $percent,
      size: 180,
      startAngle: -Math.PI,
      startColor: "rgb(255, 255, 255)",
      endColor: "rgb(255, 255, 255)",
      animation: {
        duration: 5000,
        easing: "circleProgressEase"
      }
    };
  
    $.easing.circleProgressEase = function (x, t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
      return (c / 2) * ((t -= 2) * t * t + 2) + b;
    };
  
    var s = options.size, // square size
      v = options.value, // current value: from 0.0 to 1.0
      r = s / 2, // radius
      t = s / 40; // thickness
  
    // Prepare canvas
    var canvas = $(this).find(".canvas")[0];
  
    canvas.width = s;
    canvas.height = s;
    var ctx = canvas.getContext("2d");
    var lg = ctx.createLinearGradient(0, 0, s, 0);
    lg.addColorStop(0, options.startColor);
    lg.addColorStop(1, options.endColor);
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
  
    // Draw circle
    if (options.animation) _drawAnimated(v);
    else _draw(v);
  
    function _draw(p) {
      // Clear frame
      ctx.clearRect(0, 0, s, s);
  
      // Draw background circle
      ctx.beginPath();
      ctx.arc(r, r, r, -Math.PI, Math.PI);
      ctx.arc(r, r, r - t, Math.PI, -Math.PI, true);
      ctx.closePath();
      ctx.fill(); // gray fill
  
      // Draw progress arc
      ctx.beginPath();
      ctx.arc(r, r, r, -Math.PI, -Math.PI + Math.PI * 2 * p);
      ctx.arc(r, r, r - t, -Math.PI + Math.PI * 2 * p, -Math.PI, true);
      ctx.closePath();
      ctx.save();
      ctx.clip();
      ctx.fillStyle = lg;
      ctx.fillRect(0, 0, s, s); // gradient fill
      ctx.restore();
    }
  
    function _drawAnimated(v) {
      $(canvas)
        .stop(true, true)
        .css({ value: 0 })
        .animate(
          { value: v },
          $.extend({}, options.animation, {
            step: function (p) {
              _draw(p);
              $(canvas).trigger("circle-animation-progress", [p / v, p]);
            },
  
            complete: function () {
              $(canvas).trigger("circle-animation-end");
            }
          })
        );
    }
  
    // now let's animate numbers
    var valEl = $(this).find(".value");
    valEl.data("origVal", valEl.text());
    $(canvas).on("circle-animation-progress", function (e, progress) {
      valEl.text(parseInt(valEl.data("origVal") * progress) + "%");
    });


});
  




  
















