function revealSection() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight-300) {
            section.style.opacity = 1;
        }
    });
}
window.addEventListener('scroll', revealSection);
window.addEventListener('resize', revealSection);

// Call revealSection on page load to handle initial state
window.addEventListener('load', revealSection);
const topmenuanim=function(){
    document.getElementById('topmenubutton').classList.toggle('open');
    document.getElementById('topnav').classList.toggle('openmenu');
}