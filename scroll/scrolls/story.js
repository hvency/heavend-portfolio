document.addEventListener("DOMContentLoaded", () => {

    // Show selected chapter
    window.showChapter = function(num) {

        const chapters = document.querySelectorAll(".chapter");

        chapters.forEach(chapter => {
            chapter.classList.remove("active");
        });

        const selectedChapter = document.getElementById(`part${num}`);

        if (selectedChapter) {

            selectedChapter.classList.add("active");

            // Smooth scroll back to article top
            window.scrollTo({
                top: document.querySelector(".story-content").offsetTop - 40,
                behavior: "smooth"
            });

        }

    };

});