// Declare your arrays here

// Make sure to declare your HTML elements as variables! 
let noRes=document.querySelector(".noRes");
let show_contain=document.querySelector(".show_cont");
let eva=document.querySelector(".eva");
let grade_cont=document.querySelector(".Grade_cont");
let OOhg=document.querySelector(".OOhg");
let OOrg=document.querySelector(".OOrg");
let OOmg=document.querySelector(".OOmg");
let IBO=document.querySelector(".ibohg");
let WFM=document.querySelector(".wfmhg");
// Submit Button 
let submit1Button = document.querySelector(".submit-1");
submit1Button.addEventListener("click", function() {
    let seires=document.querySelector(".Seires").value
    console.log(seires);
    if (seires==="Gundam"){
        show_contain.style.display="block";
    } else if (seires==="Evangelion"){
        eva.style.display="block";
    }
    else {
        noRes.style.display="block";
    }
});
let submit2=document.querySelector(".submit-2");
submit2.addEventListener("click",function(){
    grade_cont.style.display="block";
});
let submit3=document.querySelector(".submit-3");
submit3.addEventListener("click", function(){
    let show=document.querySelector(".show").value;
    let grade=document.querySelector(".grade").value;
    // 00hg
    if (show==="00" && grade==="Hg") {
        OOhg.style.display="block";
    }
    // 00rg
    else if (show==="00" && grade==="Rg") {
        OOrg.style.display="block";
    }
    // 00mg
    else if (show==="00" && grade==="Mg") {
        OOmg.style.display="block";
    }
    // IBOhg
    else if (show==="IBO" && grade==="Hg") {
        IBO.style.display="block";
    }
    // WFMhg
    else if (show==="WFM" && grade==="Hg") {
        WFM.style.display="block";
    }
    // no results
    else{
        noRes.style.display="block";
    }

})