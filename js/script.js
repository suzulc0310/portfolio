document.addEventListener('DOMContentLoaded', () => {
    const entryElements = document.querySelectorAll('.smooth-entry');

    entryElements.forEach(element => {
        const delay = element.getAttribute('data-delay') || 0;
        
        element.style.transitionDelay = `${delay}s`;

        element.classList.add('entry');
    });
});

function openTab(evt, tabName) {
    let tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabContent[i].classList.remove("active");
    }

    let tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    const currentTab = document.getElementById(tabName);
    currentTab.style.display = "block";
    
    setTimeout(() => {
        currentTab.classList.add("active");
    }, 10);
    
    evt.currentTarget.classList.add("active");
}

document.addEventListener('DOMContentLoaded', () => {
    // Анимация появления элементов
    const entryElements = document.querySelectorAll('.smooth-entry');
    entryElements.forEach(element => {
        const delay = element.getAttribute('data-delay') || 0;
        element.style.transitionDelay = `${delay}s`;
        element.classList.add('entry');
    });

    // Инициализация элементов модального окна
    const modal = document.getElementById("projectModal");
    const modalImg = document.getElementById("modalImg");
    const iframeContainer = document.getElementById("iframeContainer");
    const projectIframe = document.getElementById("projectIframe");
    const carouselContainer = document.getElementById("carouselContainer");
    const carouselSlides = document.getElementById("carouselSlides");
    const captionText = document.getElementById("modal-caption");
    const closeBtn = document.querySelector(".modal-close");

    let currentSlideIndex = 0;
    let totalSlides = 0;
    function resetModal() {
        modalImg.style.display = "none";
        iframeContainer.style.display = "none";
        carouselContainer.style.display = "none";
        modalImg.src = "";
        projectIframe.src = "";
        carouselSlides.innerHTML = "";
        captionText.innerHTML = "";
        currentSlideIndex = 0;
    }
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            resetModal();
            const img = this.querySelector('img');
            modalImg.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = this.getAttribute('data-full-description') || this.getAttribute('data-description') || "";
            modal.style.display = "block";
            
        });
    });
    document.querySelectorAll('.carousel-trigger').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            resetModal();
            
            const imagesString = this.getAttribute('data-images');
            if (!imagesString) return;

            const imagesArray = imagesString.split(',');
            totalSlides = imagesArray.length;

            imagesArray.forEach(imgSrc => {
                const slideDiv = document.createElement('div');
                slideDiv.className = 'carousel-slide';
                const imgElement = document.createElement('img');
                imgElement.src = imgSrc.trim();
                slideDiv.appendChild(imgElement);
                carouselSlides.appendChild(slideDiv);
            });

            carouselContainer.style.display = "block";
            updateCarouselPosition();
            captionText.innerHTML = this.getAttribute('data-caption') || "";
            modal.style.display = "block";
        });
    });
    document.querySelectorAll('.preview-trigger').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            resetModal();
            const url = this.getAttribute('data-url');
            iframeContainer.style.display = "block";
            projectIframe.src = url;
            modal.style.display = "block";
        });
    });
    function updateCarouselPosition() {
        carouselSlides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }
    document.getElementById("carouselPrev").addEventListener('click', (e) => {
        e.stopPropagation();
        currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
        updateCarouselPosition();
    });
    document.getElementById("carouselNext").addEventListener('click', (e) => {
        e.stopPropagation();
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
        updateCarouselPosition();
    });
    closeBtn.onclick = () => {
        modal.style.display = "none";
        resetModal();
    };
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            resetModal();
        }
    };
});
function openTab(evt, tabName) {
    let tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabContent[i].classList.remove("active");
    }

    let tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    const currentTab = document.getElementById(tabName);
    currentTab.style.display = "block";
    setTimeout(() => currentTab.classList.add("active"), 10);
    evt.currentTarget.classList.add("active");
}