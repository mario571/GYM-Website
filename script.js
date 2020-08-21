function show_all(){
    document.getElementById("img1").style.display="inline-block";
    document.getElementById("img2").style.display="inline-block";
    document.getElementById("img3").style.display="inline-block";
    document.getElementById("img4").style.display="inline-block";
    document.getElementById("img5").style.display="inline-block";
    document.getElementById("img6").style.display="inline-block";
    document.getElementById("img7").style.display="inline-block";
    document.getElementById("all_agllery").style.color="#f15d44";
    document.getElementById("fitness").style.color="black";
    document.getElementById("coiching").style.color="black";

   
}

function  show_fitness(){
    document.getElementById("img1").style.display="inline-block";
    document.getElementById("img2").style.display="inline-block";
    document.getElementById("img3").style.display="none";
    document.getElementById("img4").style.display="none";
    document.getElementById("img5").style.display="none";
    document.getElementById("img6").style.display="none";
    document.getElementById("img7").style.display="none";
    document.getElementById("fitness").style.color="#f15d44";
    document.getElementById("coiching").style.color="black";
    document.getElementById("all_agllery").style.color="black";
    document.getElementById("img").style.transition = "all 2s";
}
function  show_coiching(){
    document.getElementById("img1").style.display="none";
    document.getElementById("img3").style.display="inline-block";
    document.getElementById("img2").style.display="inline-block";
    document.getElementById("img4").style.display="inline-block";
    document.getElementById("img5").style.display="none";
    document.getElementById("img6").style.display="none";
    document.getElementById("img7").style.display="none";
    document.getElementById("coiching").style.color="#f15d44";
    document.getElementById("all_agllery").style.color="black";
    document.getElementById("fitness").style.color="black";
    document.getElementById("event").style.color="black";
    document.getElementById("other").style.color="black";
    
    

}
function  show_event(){
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";
    document.getElementById("img3").style.display="none";
    document.getElementById("img4").style.display="none";
    document.getElementById("img5").style.display="none";
    document.getElementById("img6").style.display="none";
    document.getElementById("img7").style.display="block";
    document.getElementById("img7").style.position="relative";
    document.getElementById("img7").style.marginLeft="0%";

    document.getElementById("event").style.color="#f15d44";
    document.getElementById("coiching").style.color="black";
    document.getElementById("all_agllery").style.color="black";
    document.getElementById("fitness").style.color="black";
    document.getElementById("other").style.color="black";
   

}
function  show_others(){
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";
    document.getElementById("img3").style.display="none";
    document.getElementById("img4").style.display="none";
    document.getElementById("img7").style.display="none";
    document.getElementById("img5").style.display="inline-block";
    document.getElementById("img6").style.display="inline-block";
    document.getElementById("other").style.color="#f15d44";
    document.getElementById("coiching").style.color="black";
    document.getElementById("all_agllery").style.color="black";
    document.getElementById("fitness").style.color="black";
    document.getElementById("event").style.color="black";

    
   

}
  


  