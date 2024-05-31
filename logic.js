window.onload = function() {
    work_showTab(1);
    var introElement = document.querySelector('.intro-type'); // Selects the first element with the class 'intro'
    if (introElement) {
        var typed = new Typed(introElement, {
            strings: ["Welcome!", 
            "Welcome!", 
            "Welcome to my website!",
            "I am a bachelor's of computer science UBC 2024 candidate!", 
            "I am an aspiring software developer!",
            "I like to craft scalable projects with code!"],
            typeSpeed: 50,
            backSpeed: 100,
            loop: true
        });
    }
}

function about_collapse(clickedElement, expandElement) {
    clickedElement.classList.toggle("active");
    var icon = clickedElement.querySelector('i');

    var itemCount = clickedElement.nextElementSibling;
    var content = itemCount.nextElementSibling;
    if (content.style.display === "block" || content.style.display === "") {
        content.style.display = "none";
        //itemCount.style.color = "rgb(205, 96, 255)";
        itemCount.style.color = "rgb(253, 143, 0)";
        itemCount.textContent = "...";
        icon.classList.remove('fa-regular','fa-square-minus');
        icon.classList.add('fa-regular', 'fa-square-plus');
        icon.style.color = "rgb(219, 206, 25)";
        icon.style.color = "rgb(32, 172, 67)"
    } else {
        content.style.display = "block";
        if (expandElement == 1) {
            itemCount.textContent = "6 items";
        } else {
            itemCount.textContent = "4 items";
        }
        itemCount.style.color = "rgba(171, 172, 171, 0.438)";
        icon.classList.remove('fa-regular', 'fa-square-plus');
        icon.classList.add('fa-regular', 'fa-square-minus');
        icon.style.color = "rgb(53, 200, 226)";
    }
}

function project_collapse(clickedElement) {
    clickedElement.classList.toggle("active");
    var content = clickedElement.querySelector('.project-desc-container');
    var icon = clickedElement.querySelector('i');
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.classList.remove('fa-solid', 'fa-angles-down');
        icon.classList.add('fa-solid', 'fa-angles-up');
        clickedElement.style.borderRadius = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.remove('fa-solid', 'fa-angles-up');
        icon.classList.add('fa-solid', 'fa-angles-down');
        clickedElement.style.borderRadius = "5px";
    }
}

function work_showTab() {
    var tabs = document.querySelectorAll('.workexperience');
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var tabId = this.dataset.tab;

            // Remove the active class from all tabs
            tabs.forEach(function(tab) {
                tab.classList.remove('active-tab');
            });

            // Add the active class to the clicked tab
            this.classList.add('active-tab');

            // Hide all content
            document.querySelectorAll('.work-cont').forEach(function(content) {
                content.style.display = 'none';
            });

            // Show the clicked tab's content
            var content = document.querySelector('.work-cont[data-content="' + tabId + '"]');
            content.style.display = 'block';
        });
    });
}

var navItems = document.querySelectorAll('.navbar-item a');

navItems.forEach(function(navItem) {
    navItem.addEventListener('click', function() {
        navItems.forEach(function(item) {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});

window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        // highlight current nav section in view
        var rect = section.getBoundingClientRect();
        var isInView = (rect.top >= 0) && (rect.bottom <= window.innerHeight) && rect.top <= (window.innerHeight - 70);
        if (isInView) {
            var id = section.id;
            navItems.forEach(function(navItem) {
                navItem.classList.remove('active');
                if (navItem.getAttribute('href') === '#' + id) {
                    navItem.classList.add('active');
                }
            });

        }

        // fade section in and out
        isInView = rect.bottom > 0 && rect.top < (window.innerHeight - 70 || document.documentElement.clientHeight - 150);
        if (isInView && section.id !== 'navbar' 
            && section.id !== 'sidebar' && section.id !== 'footer') {
            section.classList.add('section-visible');
        } else {
            section.classList.remove('section-visible');
        }
    });
});
