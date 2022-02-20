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




