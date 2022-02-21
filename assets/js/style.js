$(document).ready(function() {
    // $(".skill_graph").addClass("active")

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


    // web portfolio
    document.querySelectorAll(".portfolio_wrap").forEach(item => {
        scrollTop > item.offsetTop ? item.classList.add("show") : item.classList.remove("show");
    });


    // mobile portfolio
    document.querySelectorAll(".port_mobile").forEach(item => {
        scrollTop > item.offsetTop ? item.classList.add("show") : item.classList.remove("show");
    });

}

window.addEventListener("scroll", scrollProgress);















