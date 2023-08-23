document.addEventListener('DOMContentLoaded', function () {
    console.log("Your index.js file is loaded correctly!");

    // Navigation scrolling
    const sections = {
        work: document.querySelector('.mywork1'),
        about: document.querySelector('.aboutoverview'),
        resume: document.querySelector('.resumecenterpage'),
        contact: document.querySelector('.contact'),
    };

    const navItems = {
        work: document.querySelector('.nav-work'),
        about: document.querySelector('.nav-about'),
        resume: document.querySelector('.nav-resume'),
        contact: document.querySelector('.nav-contact'),
    };

    Object.keys(navItems).forEach(sectionKey => {
        navItems[sectionKey].addEventListener('click', () => scrollToSection(sections[sectionKey]));
    });

    function scrollToSection(section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }

 <!-- JavaScript for Image Expansion -->
    <script>
        $(document).ready(function() {
            // Handle image click event to open modal
            $(".expandable-image").click(function() {
                const imageUrl = $(this).attr("src");
                $(".modal-image").attr("src", imageUrl);
                $("#imageModal").modal("show");
            });
        });
    </script>
