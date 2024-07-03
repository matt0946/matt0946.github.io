window.onload = function() {
    // loading screen displayed for 1 second
    setTimeout(loadingScreen, 800);

    // intialize first worktab
    work_showTab(1);

    // react-typed bio text
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

function loadingScreen() {
    var loading = document.querySelector('.loading-background');
    if (loading) {
        loading.style.opacity = 0;
        setTimeout(function() {
            loading.remove();
        }, 600);
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
        
        // check if light mode is enabled
        var lightMode = document.querySelector('.dark-mode-container');
        if (lightMode.classList.contains('light-mode-active')) {
            itemCount.style.color = "#f29e0b";
        } else {
            itemCount.style.color = "rgb(194, 127, 224)";
        }

        itemCount.textContent = "...";
        icon.classList.remove('fa-regular','fa-square-minus');
        icon.classList.add('fa-regular', 'fa-square-plus');
        icon.style.color = "rgb(32, 172, 67)";
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

function toggleDarkMode() {
    const darkModeContainer = document.querySelector('.dark-mode-container');
    
    if (darkModeContainer) {
        darkModeContainer.classList.toggle('light-mode-active');
        const navbarItems = document.querySelectorAll('.navbar-item')
        navbarItems.forEach(function(navItems) {
            navItems.classList.toggle('light');
        })

        const sidebarContainer = document.querySelector(".sidebar-container");
        sidebarContainer.classList.toggle('light');
        
        if (darkModeContainer.classList.contains('light-mode-active')) {
            darkModeContainer.style.backgroundColor = "#d8dbe0"; // Light mode color
            darkModeContainer.style.backgroundColor = "#E5D3B3";
            activateLightMode();
            
        } else {
            darkModeContainer.style.backgroundColor = "#28292c"; // Dark mode color
            activateDarkMode();
        }
    }
}

function activateDarkMode() {
    // main background
    var html = document.querySelector('html');
    html.style.background = "rgb(27, 32, 41)";

    // nav bar section
    var navbar = document.querySelector(".navbar-container");
    navbar.style.backgroundColor = "rgb(43, 50, 64)";
    
    var navItems = document.querySelectorAll('.navbar-item a');
    navItems.forEach(function(navItem) {
        navItem.style.color = "white";
    })

    var navName = document.querySelector('.navbar-name');
    navName.style.color = "white";
    navName.style.textShadow = "0 0 5px rgba(217, 193, 228)"
    
    var navNameIcon = document.querySelector('.navbar-item-left i');
    navNameIcon.style.color = "white";
    navNameIcon.style.textShadow = "0 0 5px rgba(217, 193, 228)"

    var resumeButton = document.querySelector(".resume_button");
    resumeButton.style.backgroundColor = "rgb(43, 50, 64)";
    resumeButton.style.boxShadow = "0 0 3px 3px rgb(217, 193, 228)";
    resumeButton.style.textShadow = "0 0 3px rgb(217, 193, 228)"
    resumeButton.style.outline = "2px solid rgb(255, 255, 255)";
    resumeButton.style.color = "white";

    // intro section
    var introBox = document.querySelector('.intro-innerbox');
    introBox.style.backgroundColor = "rgb(43, 50, 64)"
    introBox.style.color = "white";

    var headshot = document.querySelector('.headshot');
    headshot.style.border = "3px solid rgb(43, 50, 64)"

    var headshotBackground = document.querySelector('.headshot-background');
    headshotBackground.style.borderRight = "3px solid rgb(217, 193, 228)";
    headshotBackground.style.borderTop = "3px solid rgb(217, 193, 228)";
    headshotBackground.style.borderLeft = "3px solid rgb(217, 193, 228)";
    headshotBackground.style.boxShadow = "0 0 8px rgb(217, 193, 228)"

    // code-like bio section
    var about = document.querySelector('.about');
    //about.style.color = "white";
    about.style.backgroundColor = "rgba(40, 37, 37, 0.979)";

    var aboutValues = document.querySelectorAll('.about-value');
    aboutValues.forEach(function(values) {
        values.style.color = "rgb(194, 127, 224)";
    })

    var aboutRows = document.querySelectorAll('.about-row');
    aboutRows.forEach(function(row) {
        row.style.borderLeft = "1px solid rgb(73, 72, 62)";
    })

    var aboutItemCounts = document.querySelectorAll('.about-item-count');   
    aboutItemCounts.forEach(function(itemCount, index) {
        if (index != 0 && !itemCount.textContent.includes("items")) {
            itemCount.style.color = "rgb(194, 127, 224)";
        }
    })

    var bioCollapsible = document.querySelectorAll('.collapsible');
    bioCollapsible.forEach(function(collapsible) {
        collapsible.style.backgroundColor = "rgba(40, 37, 37, 0.979)";
    })

    // work section
    var workOutterBox = document.querySelector('.work-outterbox');
    workOutterBox.style.backgroundColor = "rgb(33, 38, 49)";
    workOutterBox.style.color = "white";

    var worktabOptions = document.querySelectorAll('.workexperience');
    worktabOptions.forEach(function(worktabOption) {
        //worktabOption.style.backgroundColor = "#e6d8c3";
        worktabOption.classList.remove("light");
    })
    
    var workDescription = document.querySelector(".work-innerbox-right");
    workDescription.style.backgroundColor = "rgb(43, 50, 64)";
    workDescription.style.color = "white";

    var workDetails = document.querySelectorAll(".work-details");
    workDetails.forEach(function(workDetail) {
        workDetail.style.color = "rgba(255, 255, 255, 0.349)";
    })

    var technologyBoxes = document.querySelectorAll(".technology-box");
    technologyBoxes.forEach(function(technologyBox) {
        technologyBox.style.backgroundColor = "rgb(33, 38, 49)";
        technologyBox.style.color = "white";
    })

    // projects section
    var projectsOutterBox = document.querySelector('.project-outterBox');
    projectsOutterBox.style.backgroundColor = "rgb(33, 38, 49)";
    projectsOutterBox.style.color = "white"; 

    var projectOptions = document.querySelectorAll('.project-collapsible');
    projectOptions.forEach(function(projectOption) {
        projectOption.style.backgroundColor = "rgb(43, 50, 64)";
    })
    
    var sidebarItems = document.querySelectorAll('.sidebar-item a')
    sidebarItems.forEach(function(sidebarItem) {
        sidebarItem.style.color = "rgba(217, 193, 228, 0.699)";
    })
}

function activateLightMode() {
    // main background
    var html = document.querySelector('html');
    html.style.background = "#E5D3B3";

    // nav bar section
    var navbar = document.querySelector(".navbar-container");
    navbar.style.backgroundColor = "#eee6d9";
    
    var navItems = document.querySelectorAll('.navbar-item a');
    navItems.forEach(function(navItem) {
        navItem.style.color = "black";
    })

    var navName = document.querySelector('.navbar-name');
    navName.style.color = "black";
    navName.style.textShadow = "0 0 5px #efbe75"
    
    var navNameIcon = document.querySelector('.navbar-item-left i');
    navNameIcon.style.color = "black";
    navNameIcon.style.textShadow = "0 0 5px #efbe75" 

    var resumeButton = document.querySelector(".resume_button");
    resumeButton.style.backgroundColor = "#eee6d9";
    resumeButton.style.boxShadow = "0 0 3px 3px #efbe75";
    resumeButton.style.textShadow = "0 0 3px #efbe75"
    resumeButton.style.outline = "2px solid #ee9b1e";
    resumeButton.style.color = "#ee9b1e";

    // intro section
    var introBox = document.querySelector('.intro-innerbox');
    introBox.style.backgroundColor = "#eee6d9"
    introBox.style.color = "black";

    var headshot = document.querySelector('.headshot');
    headshot.style.border = "3px solid #eee6d9"

    var headshotBackground = document.querySelector('.headshot-background');
    headshotBackground.style.borderRight = "3px solid #efbe75";
    headshotBackground.style.borderTop = "3px solid #efbe75";
    headshotBackground.style.borderLeft = "3px solid #efbe75";
    headshotBackground.style.boxShadow = "0 0 8px #efbe75"

    // code-like bio section
    var about = document.querySelector('.about');
    //about.style.color = "white";
    about.style.backgroundColor = "white";

    var aboutValues = document.querySelectorAll('.about-value');
    aboutValues.forEach(function(values) {
        values.style.color = "#f29e0b";
    })

    var aboutRows = document.querySelectorAll('.about-row');
    aboutRows.forEach(function(row) {
        row.style.borderLeft = "1px solid rgba(51, 51, 51, 0.349)";
    })

    var aboutItemCounts = document.querySelectorAll('.about-item-count');
    aboutItemCounts.forEach(function(itemCount, index) {
        if (index != 0 && !itemCount.textContent.includes("items")) {
            itemCount.style.color = "#f29e0b";
        }
    })

    var bioCollapsible = document.querySelectorAll('.collapsible');
    bioCollapsible.forEach(function(collapsible) {
        collapsible.style.backgroundColor = "white";
    })

    // work section
    var workOutterBox = document.querySelector('.work-outterbox');
    workOutterBox.style.backgroundColor = "#e6d8c3";
    workOutterBox.style.color = "black";

    var worktabOptions = document.querySelectorAll('.workexperience');
    worktabOptions.forEach(function(worktabOption) {
        //worktabOption.style.backgroundColor = "#e6d8c3";
        worktabOption.classList.add("light");
    })
    
    var workDescription = document.querySelector(".work-innerbox-right");
    workDescription.style.backgroundColor = "#eee6d9";
    workDescription.style.color = "black";

    var workDetails = document.querySelectorAll(".work-details");
    workDetails.forEach(function(workDetail) {
        workDetail.style.color = "rgba(51, 51, 51, 0.349)";
    })

    var technologyBoxes = document.querySelectorAll(".technology-box");
    technologyBoxes.forEach(function(technologyBox) {
        technologyBox.style.backgroundColor = "#e6d8c3";
        technologyBox.style.color = "black";
    })

    // projects section
    var projectsOutterBox = document.querySelector('.project-outterBox');
    projectsOutterBox.style.backgroundColor = "#e6d8c3";
    projectsOutterBox.style.color = "black"; 

    var projectOptions = document.querySelectorAll('.project-collapsible');
    projectOptions.forEach(function(projectOption) {
        projectOption.style.backgroundColor = "#eee6d9";
    })
    
    // contact sidebar section
    var sidebarContainer = document.querySelector('.sidebar-container');
    //sidebarContainer.style.background = "black";

    var sidebarItems = document.querySelectorAll('.sidebar-item a')
    sidebarItems.forEach(function(sidebarItem) {
        sidebarItem.style.color = "#ee9b1e";
    })
}