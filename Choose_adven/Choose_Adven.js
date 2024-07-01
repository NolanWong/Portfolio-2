let o1=document.querySelector(".o1")
let o2=document.querySelector(".o2")
let o3=document.querySelector(".o3")
let o3_5=document.querySelector(".o3_5")
let o4=document.querySelector(".o4")
let o5=document.querySelector(".o5")
let o6=document.querySelector(".o6")
let o7=document.querySelector(".o7")
let o8=document.querySelector(".o8")
let o9=document.querySelector(".o9")
let o10=document.querySelector(".o10")
let p1=document.querySelector(".p1")
let p2=document.querySelector(".p2")
let p3=document.querySelector(".p3")
let p4=document.querySelector(".p4")
let p5=document.querySelector(".p5")
let p6=document.querySelector(".p6")
let p7=document.querySelector(".p7")
let p8=document.querySelector(".p8end1")
let p9=document.querySelector(".p9")
let p10=document.querySelector(".p10end2")
let p11=document.querySelector(".p11")
let reset=document.querySelector(".reset")
let reset2=document.querySelector(".reset2")
let reset3=document.querySelector(".reset3")
let reset4=document.querySelector(".reset4")
let reset5=document.querySelector(".reset5")
o1.addEventListener("click", function(){
    p2.style.display="block";
    p1.style.display="none";
});
o2.addEventListener("click", function(){
    p3.style.display="block";
    p2.style.display="none";
});
o3.addEventListener("click", function(){
    p4.style.display="block";
    p3.style.display="none";
});
o3_5.addEventListener("click", function(){
    p4.style.display="block";
    p3.style.display="none";
});
o4.addEventListener("click", function(){
    p5.style.display="block";
    p3.style.display="none";
});
o5.addEventListener("click", function(){
    p6.style.display="block";
    p5.style.display="none";
});
o6.addEventListener("click", function(){
    p7.style.display="block";
    p6.style.display="none";
});
o7.addEventListener("click", function(){
    p8.style.display="block";
    p6.style.display="none";
});
o8.addEventListener("click", function(){
    p9.style.display="block";
    p3.style.display="none";
});
o9.addEventListener("click", function(){
    p10.style.display="block";
    p9.style.display="none";
});
o10.addEventListener("click", function(){
    p11.style.display="block";
    p9.style.display="none";
});
// This is the reset button, figure out how it works
reset.addEventListener("click", function(){
    p1.style.display="block";
    p4.style.display="none";
});
reset2.addEventListener("click", function(){
    p1.style.display="block";
    p7.style.display="none";
});
reset3.addEventListener("click", function(){
    p1.style.display="block";
    p8.style.display="none";
});
reset4.addEventListener("click", function(){
    p1.style.display="block";
    p10.style.display="none";
});
reset5.addEventListener("click", function(){
    p1.style.display="block";
    p11.style.display="none";
});