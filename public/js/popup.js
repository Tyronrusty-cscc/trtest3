window.onload = function() {
    const cookieContainer = document.querySelector(".cookie-container");
    const cookieButton = document.querySelector(".cookie-btn");

    cookieButton.addEventListener("click", () => {
        localStorage.setItem("cookieBannerDisplayed", "true");
        console.log("Cookie set with value:", "true");
        const cookieBannerDisplayed = localStorage.getItem("cookieBannerDisplayed");
        console.log("Cookie Banner Display after sertting:",cookieBannerDisplayed);
        cookieContainer.classList.remove("active");

        
    });

    setTimeout(() => {
        const cookieBannerDisplayed = localStorage.getItem("cookieBannerDisplayed");
        console.log("Cookie Banner Display on load:", cookieBannerDisplayed);
        if (!cookieBannerDisplayed) {
            cookieContainer.classList.add("active");
        }
    }, 2000); // Adjust delay as needed
};


const cookieBannerDisplayed = localStorage.getItem("cookieBannerDisplayed");
console.log("cookie banner displayed", cookieBannerDisplayed);