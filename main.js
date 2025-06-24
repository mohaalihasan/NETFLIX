const action = document.querySelector("#action");
const Comendy = document.querySelector("#Comendy");
const Dm = document.querySelector("#Dm");
const md = document.querySelector("#md");
const form = document.querySelector("#form")
const videoContainer = document.querySelector("#VideoEncoder");

// alert("welcome to my channel")

action.addEventListener("click", () => {
  videoContainer.innerHTML = `
       <iframe width="560" height="315" 
       src="https://www.youtube.com/embed/XmAzl4UdBTY?si=io52dv667qVyZU0P" 
       title="YouTube video player" frameborder="0" allow="accelerometer;
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  `;
});

Comendy.addEventListener("click", () => {
    videoContainer.innerHTML = `
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/IgkR92B62SA?si=0vWqAiGAeSvwlLcM"
         title="YouTube video player" frameborder="0" allow="accelerometer; 
         autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
         web-share" 
         referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  
    `;
  });

  Dm.addEventListener("click", () => {
    videoContainer.innerHTML = `
       <iframe width="560" height="315" 
       src="https://www.youtube.com/embed/wyEOwHrpZH4?si=3j8NCS0rgijYBcmg" 
       title="YouTube video player" frameborder="0" allow="accelerometer; 
       autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
       web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  
    `;
  });

  md.addEventListener("click", () => {
    videoContainer.innerHTML = `
    <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/72hK6FUmm8o?si=9JCVrXZO37Zf1W0C" title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
     picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  
    `;
  });