const bottomText = [
    {
        "topText": "Who should get an EPC?", 
        "middleText": "Landlords in the UK must have an EPC obtained once every 10 years. In Scotland, an EPC must be obtained prior to advertising, whereas in the rest of the UK an EPC must be in the process of being obtained during advertising, and then provided to tenants on move-in.", 
        "bottomText": "Since April 2018 it is illegal to rent any residential or commercial property in England or Wales with an EPC Rating below E."
    },
    {
        "topText": "How long is an EPC valid for?", 
        "middleText": "An EPC is valid for 10 years.", 
        "bottomText": "Your EPC needs to accurately reflect information about your property at the time you apply, so if you’ve undertaken construction work on your property you may need to get a new EPC to ensure it reflects the properties current circumstances."
    },
    {
        "topText": "What does an EPC rating tell you?", 
        "middleText": "The EPC rating tells you how energy efficient your property is and gives it a rating from A to G (A being most energy efficient).", 
        "bottomText": ""
    }
]

bottomText.forEach(text => {
    document.querySelector('#bottomSection').innerHTML += `
    <div class="bottom-block">
        <h2 class="topText">${text.topText}</h3>
        <p class="middleText">${text.middleText}</p>
        <p class="bottomText">${text.bottomText}</p>
    </div>`;
})

document.querySelector('#menuToggle').addEventListener('click', (event) => {

    event.target.nextElementSibling.classList.toggle('show-menu');
    
});

function reveal() {
    const reveals = document.querySelectorAll(".bottom-block");
    for (let i = 0; i < reveals.length; i++) {
        let elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);