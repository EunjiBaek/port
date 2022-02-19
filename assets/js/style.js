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

});

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

//마우스 움직이기
window.addEventListener("mousemove", function(e){

    //마우스 좌표 값
    let pageX = e.pageX;
    let pageY = e.pageY;

    //기준점 가운데로 변경
    let standardX = window.innerWidth/2 - pageX;
    let standardY = window.innerHeight/2 - pageY;


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

     //이미지 움직임
     const move = document.querySelector(".effect_wrap > div > .img img");
     move.style.transform = "translate(" + standardX/20 + "px," + standardY/20 + "px)";


     

});


