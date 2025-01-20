UnicornStudio.addScene({
    elementId: "gravityCoding", // id of the HTML element to render your scene in (the scene will use its dimensions)
    fps: 100, // frames per second (0-120) [optional]
    scale: 1,
    dpi: 1, // pixel ratio [optional]
    lazyLoad: true, // will not initialize the scene until it scrolls into view
    filePath: "./WaterEffect/effect.json",
    interactivity: {
      // [optional]
      mouse: {
        disableMobile: true, // disable touch movement on mobile
      },
    },
  })
    .then((scene) => {
      // scene is ready
      // To remove a scene, you can use:
      // scene.destroy()
    })
    .catch((err) => {
      console.error(err);
    });


// Blob movement effect

var videoContainer = document.querySelector(".section-2");
var blob = document.querySelector("#blob");

videoContainer.addEventListener("mousemove", function(details){
  blob.style.transform = `translate(${details.clientX * 0.5}px, ${details.clientY * 0.3}px)`
})


// GSAP Code for section 2

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
 
  var part1 = gsap.timeline({
    scrollTrigger:{
      trigger: "#section2-1",
      start:"10% 100%",
      end:"90% 0%",
      scrub: true,
      // markers: true,
      duration: 1,
    }
  });
  part1.to("#top-nav-sec2",{
    backgroundColor: "#fd7024"
  }, 'a')
  .from("#section2-1 h1, #section2-1 p, #section2-1 img",{
    opacity: 0,
    y: -850,
  }, 'a')
  .to("#section2-1 h1, #section2-1 p, #section2-1 img",{
    opacity:0,
    y:850,
  })


  var part2 = gsap.timeline({
    scrollTrigger:{
      trigger: "#section2-2",
      start:"10% 100%",
      end:"90% 0%",
      scrub: true,
      // markers: true,
      duration: 1,
    }
  });
  part2.to("#top-nav-sec2-1",{
    backgroundColor: "#fd7024"
  }, 'b')
  .from("#section2-2 h1, #section2-2 p, #section2-2 img",{
    opacity: 0,
    y: -850,
  }, 'b')
  .to("#section2-2 h1, #section2-2 p, #section2-2 img",{
    opacity:0,
    y:850,
  })


  var part3 = gsap.timeline({
    scrollTrigger:{
      trigger: "#section2-3",
      start:"10% 100%",
      end:"90% 0%",
      scrub: true,
      // markers: true,
      duration: 1,
    }
  });
  part3.to("#top-nav-sec2-2",{
    backgroundColor: "#fd7024"
  }, 'c')
  .from("#section2-3 h1, #section2-3 p, #section2-3 img",{
    opacity: 0,
    y: -850,
  }, 'c')
  .to("#section2-3 h1, #section2-3 p, #section2-3 img",{
    opacity:0,
    y:850,
  })


  var part4 = gsap.timeline({
    scrollTrigger:{
      trigger: "#section2-4",
      start:"10% 100%",
      end:"90% 0%",
      scrub: true,
      // markers: true,
      duration: 1,
    }
  });
  part4.to("#top-nav-sec2-3",{
    backgroundColor: "#fd7024"
  }, 'c')
  .from("#section2-4 h1, #section2-4 p, #section2-4 img",{
    opacity: 0,
    y: -850,
  }, 'c')
  .to("#section2-4 h1, #section2-4 p, #section2-4 img",{
    opacity:0,
    y:850,
  })


 });


//  --------------to open different window -----------------------
 function windowopen(){
  window.open("login.html","_self");
 }

function open1(){
  window.open("profileList.html","_self");
}
function open2(){
  window.open("register.html","_self");
}
function open3(){
  window.open("profileList.html","_self");
}

//  --------------------------registration form--------------------------------
function submitForm(event) {
  event.preventDefault();

  const form = document.getElementById('personalForm');
  const formData = new FormData(form);

  // Handle form submission here, for now we are just logging the data
  console.log('Form Data Submitted:');

  formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
  });

  // Optional: Alert the user
  alert("Form Submitted Successfully!");
}
// ----------------------------------------------------------------------------