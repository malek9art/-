// بيانات الموقع (سيتم تخزينها في localStorage لمحاكاة قاعدة البيانات)
function initializeSiteData() {
    if (!localStorage.getItem('malekArtData')) {
        const initialData = {
            portfolio: [
                {
                    id: 1,
                    title: "هوية بصرية متكاملة",
                    description: "تصميم هوية بصرية لمطعم راقي",
                    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    id: 2,
                    title: "تصميم شعار مبتكر",
                    description: "شعار لشركة تقنية ناشئة",
                    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                },
                {
                    id: 3,
                    title: "تصميم واجهات تطبيقات",
                    description: "واجهة تطبيق جوال لخدمة التوصيل",
                    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                },
                {
                    id: 4,
                    title: "تصميم غلاف كتاب",
                    description: "غلاف رواية أدبية معاصرة",
                    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80"
                },
                {
                    id: 5,
                    title: "تصميم مواد ترويجية",
                    description: "بروشورات وكروت visita",
                    image: "https://images.unsplash.com/photo-1588690154757-badf4644190f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                },
                {
                    id: 6,
                    title: "تصميم إعلانات",
                    description: "حملة إعلانية لمؤسسة خيرية",
                    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80"
                }
            ],
            services: [
                {
                    id: 1,
                    title: "تصميم الشعارات",
                    description: "تصميم شعارات مبتكرة تعبر عن هوية علامتك التجارية بطريقة إبداعية واحترافية، مع تقديم دليل استخدام متكامل.",
                    icon: "fas fa-pencil-alt"
                },
                {
                    id: 2,
                    title: "تصميم واجهات المستخدم",
                    description: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام لتطبيقات الجوال والويب مع ضمان تجربة مستخدم ممتازة.",
                    icon: "fas fa-mobile-alt"
                },
                {
                    id: 3,
                    title: "الهوية البصرية",
                    description: "بناء هوية بصرية متكاملة ومتناسقة لعلامتك التجارية تشمل جميع عناصر التواصل البصري.",
                    icon: "fas fa-paint-brush"
                }
            ],
            testimonials: [
                {
                    id: 1,
                    name: "عمر السقاف",
                    position: "مدير تسويق - صنعاء",
                    text: "تعاملت مع مالك في تصميم الهوية البصرية لشركتنا، وكانت تجربة رائعة. الاحترافية والإبداع واضح في كل تفصيلة. أنصح بالتعامل معه لكل من يبحث عن جودة وإبداع حقيقي.",
                    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
                    rating: 5
                },
                {
                    id: 2,
                    name: "فاطمة أحمد",
                    position: "صاحبة متجر إلكتروني - عدن",
                    text: "كنت بحاجة لتصميم شعار لمتجري الإلكتروني، ومالك قدم لي أكثر من تصميم رائع وكان متعاون جداً في تنفيذ التعديلات حتى وصلنا للتصميم المثالي. شكراً لك على الإبداع والاحترافية.",
                    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
                    rating: 4.5
                },
                {
                    id: 3,
                    name: "محمد الحدي",
                    position: "مؤسس startup - تعز",
                    text: "تعاملت مع مالك لتصميم واجهة تطبيق الجوال لشركتي الناشئة، وكان العمل ممتازاً ومتجاوزاً للتوقعات. الالتزام بالوقت والجودة جعلاني أعود إليه مرة أخرى لأعمال أخرى.",
                    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
                    rating: 5
                }
            ],
            contact: {
                phone: "+967 783 720 851",
                email: "malek9art@gmail.com",
                address: "الرياض، المملكة العربية السعودية",
                schedule: "الأحد - الخميس: 9 ص - 5 م"
            }
        };
        localStorage.setItem('malekArtData', JSON.stringify(initialData));
    }
    return JSON.parse(localStorage.getItem('malekArtData'));
}

// تحميل المحتوى من localStorage
function loadContent() {
    const data = initializeSiteData();
    
    // تحميل معرض الأعمال
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (portfolioGrid) {
        portfolioGrid.innerHTML = '';
        data.portfolio.forEach(item => {
            portfolioGrid.innerHTML += `
                <div class="portfolio-item">
                    <img src="${item.image}" alt="${item.title}" class="portfolio-img">
                    <div class="portfolio-overlay">
                        <h3 class="portfolio-title">${item.title}</h3>
                        <p class="portfolio-desc">${item.description}</p>
                    </div>
                </div>
            `;
        });
    }
    
    // تحميل الخدمات
    const servicesGrid = document.getElementById('servicesGrid');
    if (servicesGrid) {
        servicesGrid.innerHTML = '';
        data.services.forEach(service => {
            servicesGrid.innerHTML += `
                <div class="service-card">
                    <div class="service-icon"><i class="${service.icon}"></i></div>
                    <h3 class="service-title">${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            `;
        });
    }
    
    // تحميل آراء العملاء
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (testimonialsGrid) {
        testimonialsGrid.innerHTML = '';
        data.testimonials.forEach(testimonial => {
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= testimonial.rating) {
                    stars += '<i class="fas fa-star"></i>';
                } else if (i - 0.5 === testimonial.rating) {
                    stars += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }
            
            testimonialsGrid.innerHTML += `
                <div class="testimonial-card">
                    <div class="testimonial-header">
                        <div class="testimonial-avatar">
                            <img src="${testimonial.avatar}" alt="${testimonial.name}">
                        </div>
                        <div class="testimonial-info">
                            <h3>${testimonial.name}</h3>
                            <p>${testimonial.position}</p>
                        </div>
                    </div>
                    <div class="testimonial-text">
                        ${testimonial.text}
                    </div>
                    <div class="testimonial-rating">
                        ${stars}
                    </div>
                </div>
            `;
        });
    }
    
    // تحميل معلومات التواصل
    if (document.getElementById('contactPhone')) {
        document.getElementById('contactPhone').textContent = data.contact.phone;
    }
    if (document.getElementById('contactEmail')) {
        document.getElementById('contactEmail').textContent = data.contact.email;
    }
    if (document.getElementById('contactAddress')) {
        document.getElementById('contactAddress').textContent = data.contact.address;
    }
    if (document.getElementById('contactSchedule')) {
        document.getElementById('contactSchedule').textContent = data.contact.schedule;
    }
}

// تأثيرات الحركة والظهور
function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // مراقبة عناصر المعرض والخدمات
    document.querySelectorAll('.portfolio-item, .service-card').forEach(item => {
        observer.observe(item);
    });
}

// التنقل السلس
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // إغلاق القائمة على الهاتف بعد النقر
                const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.querySelector('.hamburger');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
}

// تهيئة القائمة المتنقلة
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // تأثير التمرير على navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// تهيئة نموذج التواصل
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('شكراً لتواصلك! سنرد عليك في أقرب وقت ممكن.');
            this.reset();
        });
    }
}

// تهيئة جميع مكونات الموقع
function initWebsite() {
    initializeSiteData();
    loadContent();
    initNavigation();
    initAnimations();
    initSmoothScrolling();
    initContactForm();
    
    // تهيئة نظام المصادقة
    if (typeof initAuthSystem === 'function') {
        initAuthSystem();
    }
}

// تشغيل التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initWebsite);

// تصدير الدوال للاستخدام في ملفات أخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeSiteData,
        loadContent,
        initWebsite
    };
}
