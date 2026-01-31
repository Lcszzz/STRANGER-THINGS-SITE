// SCROOL SUAVE -> ANIMAÇÕES -> ANIMAÇÃO DE SCROOL//
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)

ScrollSmoother.create({
	smooth: 1,
	effects: true
});



// animação header//

gsap.from (".h2head",{

     x:-500,
     duration: 1.4,


})

// animação header//

gsap.from (".imghead",{

       x:500,
       duration: 1.4,


})







// animaçoes hero//

gsap.from(".hero",{
    opacity:0 ,
    duration:2

}
)

gsap.from("picture:nth-child(2)",{
    y:100,
    duration:1.5
}
)

gsap.from("picture:nth-child(1)",{
    y:-200,
    duration:1
}
)

//animações cards//

 gsap.from(".card", {

    opacity:0,
    y:200,
    filter: "blur(25px)",
    stagger:.8,
    scrollTrigger:{
        trigger: ".cards",
        markers: false,
        start: "0% 59%",
        end: "100% 49%",
        scrub: true,

        
    }
   




})


//animaçôes nomes das cidades agradecimentos//

gsap.from(".obrigado ul li",{

        opacity:0,
        x:40,
        filter :"blur (15px)",
        duration:1,
        stagger:.03,
        scrollTrigger:{
            trigger:".obrigado ul",
            markers: false,
            start:"0% 85%",
            end:"100% 70%",
            scrub:true,
            
        }




})


//animações footer//

gsap.from("footer",{

y:"-30%",

immediateRender:false,
scrollTrigger: {

    trigger: "footer",
    scrub:true,
    markers:false,
    invalidateOnRefresh: true,
    end: "100% 100%"
}




})

// letras surgindo//

  
 