

gsap.fromTo(
    "svg",
    {rotate: 0},
    {rotate: 180, duration: 0.2, repeat: -1, repeatDelay: 1, ease: "power3"}

);

document.addEventListener('DOMContentLoaded',()=>{
gsap.To(
    ".anything",
    {x:"-68vw", duration:1.5}
)
})



gsap.fromTo(
    ".letter",
    {rotateX: 360, duration:5}
);


document.querySelector('btn').addEventListener('mouseenter' ,()=>{
    gsap.fromTo(
        "btn",
        {rotateX: 180},
        {rotateX: 0, duration: 0.5 }
    );
})
const span = document.querySelectorAll('span')
span.forEach((el) =>{
    el.addEventListener('mouseenter' , () => {
        gsap.fromTo(
            el,
            {rotateX: 180},
            {rotateX: 0, duration: 0.5, ease: "power.out" }
        );
    })
})






















