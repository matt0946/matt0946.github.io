window.onload = function() {
    var introElement = document.querySelector('.intro-type'); // Selects the first element with the class 'intro'
    if (introElement) {
        var typed = new Typed(introElement, {
            strings: ["Hello! My name is Matthew :)", "I am a UBC student!", "I am an aspiring developer!"],
            typeSpeed: 150,
            backSpeed: 100,
            loop: true
        });
    }
}



function about_collapse() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
        
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var itemCount = this.nextElementSibling;
            var content = itemCount.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
                itemCount.textContent = "...";
            } else {
                content.style.display = "block";
                itemCount.textContent = "4 items";
            }
        });
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


