gsap.registerPlugin(ScrollTrigger);

gsap.to(".cloud",{
  scrollTrigger: {
    trigger:".cloud",
    start:"10% 10% ",
    end:"30% 15%",
    // markers: true,
    scrub:true,
    toggleAction:"play resume play resume"
  },
  x:-200,
  duration: 5,
})

gsap.to(".man",{
  scrollTrigger: {
  trigger:".man",
  start:"-20% 10% ",
  end:"40% 1%",
  // markers: true,
  scrub:true,    
  },
  y:-200,
  duration: 5,
})


gsap.to(".sec1",{
  scrollTrigger: {
  trigger:".sec1",
  start:"5% 10% ",
  end:"30% 15%",
  // markers: true,
  scrub:true,    
  toggleAction:"play reverse play reverse"
  },
  scale:1.1,
  duration: 10,
})



// section 2
// fake buda 

gsap.set(".fake",{perspective:800});
gsap.set(".card", {transformStyle:"preserve-3d"});
gsap.set(".back", {rotationY:-180});
gsap.set([".back", ".front"], {backfaceVisibility:"hidden"});


gsap.to(".card",{
  scrollTrigger: {
  trigger:".card",
  start:"10% 30% ",
  end:"30% 0%",
  // markers: true,
  scrub:true,    
  toggleAction:"play reverse play reverse"
  },
  rotationY:-180, 
  ease:Back.easeOut,
  duration: 10,
  yoyo:true, 
  stagger: 0.1,
})


// section3
// sky + bg3
gsap.to(".sec3",{
  scrollTrigger: {
  trigger:".sec3",
  start:"0% 20% ",
  end:"30% 0%",
  // markers: true,
  scrub:true,    
  },
  scale:1.1,
  // duration: 10,
})

gsap.to(".sky",{
  scrollTrigger: {
  trigger:".sky",
  start:"0% 10% ",
  end:"30% 0%",
  // markers: true,
  scrub:true,    
  },
  scale:1.2,
})


// pin
gsap.to(".section4",{
  scrollTrigger: {
  trigger:".section4",
  start:"top top",
  end:"50%",
  // markers: true,
  scrub:true,     // 动画重复执行
  pin:true, 
  },
})

gsap.to(".sec4c",{
  scrollTrigger: {
  trigger:".sec4",
  scrub:true, 
  start:"30% 10% ",
  end:"50% 0%",
  // markers: true,
  },
  height:"100%",
  ease:"expo-out",
  duration: 10,
})


gsap.to(".sec5",{
  scrollTrigger: {
  trigger:".sec5",
  start:"5% 10% ",
  end:"80% 15%",
  scrub:true, 
  // markers: true,
  },
  scale:1.2,
  duration: 10,
})

gsap.to(".sec5temple",{
  scrollTrigger: {
  trigger:".sec5temple",
  start:"-80% 10% ",
  end:"-30% 15%",
  scrub:true, 
  // markers: true,
  },
  y:-500,
  duration: 10,
})



const sidenavItems = document.querySelectorAll(".sidenav-item");
const totalItems = sidenavItems.length;
const windowHeight = window.innerHeight;
const sectionHeight = windowHeight*6 / totalItems;

//Set initial opacity 
   gsap.set(sidenavItems, { opacity: 0.1 });
    gsap.set(sidenavItems[0], { opacity: 1 });

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  const index = Math.floor(scrollPosition / sectionHeight);

  gsap.to(sidenavItems, {
    opacity: 0.2, 
    duration: 0.3, 
  });

  gsap.to(sidenavItems[index], {
    opacity: 1, 
    duration: 0.3, 
  });
});




gsap.to(".bg-arno",{
  scrollTrigger: {
  trigger:".bg-arno",
  start:"15% 10%",
  end:"40% 15%",
  markers: true,
  scrub:true,    
  },
  y:200,
})





	function checkGSAP() {
    if (typeof gsap !== 'undefined') {
        console.log('GSAP is loaded!');
        console.log('GSAP Version:', gsap.version);
    } else {
        console.log('GSAP is not loaded!');
    }
}
checkGSAP();

gsap.to(".bg-arno",{
  scrollTrigger: {
  trigger:".bg",
  start:"0% 15%",
  end:"20% 20%",
  markers: true,
  scrub:true,    
  },
  duration: 5,
  y: "30vh",
  ease: "back.out(1)",
  startAt: {
    y: "-50vh", 
  }
})



gsap.to(".bg-lily",{
  scrollTrigger: {
  trigger:".bg",
  start:"0% 15%",
  end:"20% 20%",
  markers: true,
  scrub:true,    
  },
  duration: 5,
  x: "10vh",
  ease: "back.out(1)",
  startAt: {
    x: "-40vw", 
    y:"40vh",
  }
})


gsap.to(".bg-sus",{
  scrollTrigger: {
  trigger:".bg",
  start:"0% 15%",
  end:"20% 20%",
  markers: true,
  scrub:true,    
  },
  duration: 5,
  x: "-10vw",
  ease: "back.out(1)",
  startAt: {
    x: "100vw", 
    y:"40vh",
  }
})

gsap.to(".bg-title",{
  scrollTrigger: {
  trigger:".bg",
  start:"0% 15%",
  end:"20% 20%",
  markers: true,
  scrub:true,    
  },
  duration: 5,
  x: "-5vw",
  ease: "back.out(1)",
  startAt: {
    x: "100vw", 
    y:"25vh"
  }
})

gsap.to(".bg-subtitle",{
  scrollTrigger: {
  trigger:".bg",
  start:"0% 15%",
  end:"20% 20%",
  markers: true,
  scrub:true,    
  },
  duration: 5,
  x: "-5vw",
  ease: "back.out(1)",
  startAt: {
    x: "100vw", 
    y:"25vh"
  }
})



