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
    document.querySelectorAll('.workexperience').forEach(function(tab) {
        tab.addEventListener('click', function() {
            var tabId = this.dataset.tab;
    
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

