window.onload = function() {
    var introElement = document.querySelector('.intro-type'); // Selects the first element with the class 'intro'
    if (introElement) {
        var typed = new Typed(introElement, {
            strings: ["I am an aspiring developer!", "I am a computer science UBC 2024 candidate!", "I like to craft scalable projects with code!"],
            typeSpeed: 150,
            backSpeed: 100,
            loop: true
        });
    }
}

function about_collapse(clickedElement) {
    clickedElement.classList.toggle("active");
    var icon = clickedElement.querySelector('i');

    var itemCount = clickedElement.nextElementSibling;
    var content = itemCount.nextElementSibling;
    if (content.style.display === "block" || content.style.display === "") {
        content.style.display = "none";
        itemCount.style.color = "rgb(205, 96, 255)";
        itemCount.textContent = "...";
        icon.classList.remove('fa-regular','fa-square-minus');
        icon.classList.add('fa-regular', 'fa-square-plus');
        icon.style.color = "rgb(219, 206, 25)";
    } else {
        content.style.display = "block";
        itemCount.textContent = "4 items"
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
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.remove('fa-solid', 'fa-angles-up');
        icon.classList.add('fa-solid', 'fa-angles-down');
    }
}

function work_showTab(tabName) {
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


