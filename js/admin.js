// تحميل لوحة التحكم
function loadAdminPanel() {
    const data = JSON.parse(localStorage.getItem('malekArtData'));
    
    // تحميل معرض الأعمال في لوحة التحكم
    const portfolioItems = document.getElementById('portfolioItems');
    if (portfolioItems) {
        portfolioItems.innerHTML = '';
        data.portfolio.forEach(item => {
            portfolioItems.innerHTML += `
                <div class="admin-item" data-id="${item.id}">
                    <div class="admin-item-info">
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                    </div>
                    <div class="admin-item-actions">
                        <button class="admin-item-btn admin-item-edit" onclick="editPortfolioItem(${item.id})">تعديل</button>
                        <button class="admin-item-btn admin-item-delete" onclick="deletePortfolioItem(${item.id})">حذف</button>
                    </div>
                </div>
            `;
        });
    }
    
    // تحميل الخدمات في لوحة التحكم
    const serviceItems = document.getElementById('serviceItems');
    if (serviceItems) {
        serviceItems.innerHTML = '';
        data.services.forEach(service => {
            serviceItems.innerHTML += `
                <div class="admin-item" data-id="${service.id}">
                    <div class="admin-item-info">
                        <h4>${service.title}</h4>
                        <p>${service.description}</p>
                    </div>
                    <div class="admin-item-actions">
                        <button class="admin-item-btn admin-item-edit" onclick="editServiceItem(${service.id})">تعديل</button>
                        <button class="admin-item-btn admin-item-delete" onclick="deleteServiceItem(${service.id})">حذف</button>
                    </div>
                </div>
            `;
        });
    }
    
    // تحميل آراء العملاء في لوحة التحكم
    const testimonialItems = document.getElementById('testimonialItems');
    if (testimonialItems) {
        testimonialItems.innerHTML = '';
        data.testimonials.forEach(testimonial => {
            testimonialItems.innerHTML += `
                <div class="admin-item" data-id="${testimonial.id}">
                    <div class="admin-item-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.position}</p>
                    </div>
                    <div class="admin-item-actions">
                        <button class="admin-item-btn admin-item-edit" onclick="editTestimonialItem(${testimonial.id})">تعديل</button>
                        <button class="admin-item-btn admin-item-delete" onclick="deleteTestimonialItem(${testimonial.id})">حذف</button>
                    </div>
                </div>
            `;
        });
    }
    
    // تحميل معلومات التواصل في لوحة التحكم
    if (document.getElementById('contactPhoneInput')) {
        document.getElementById('contactPhoneInput').value = data.contact.phone;
    }
    if (document.getElementById('contactEmailInput')) {
        document.getElementById('contactEmailInput').value = data.contact.email;
    }
    if (document.getElementById('contactAddressInput')) {
        document.getElementById('contactAddressInput').value = data.contact.address;
    }
    if (document.getElementById('contactScheduleInput')) {
        document.getElementById('contactScheduleInput').value = data.contact.schedule;
    }
}

// إضافة عمل جديد
function addPortfolioItem() {
    const title = document.getElementById('portfolioTitle').value;
    const description = document.getElementById('portfolioDesc').value;
    const image = document.getElementById('portfolioImage').value;
    
    if (!title || !description || !image) {
        alert('يرجى ملء جميع الحقول');
        return;
    }
    
    const data = JSON.parse(localStorage.getItem('malekArtData'));
    const newId = data.portfolio.length > 0 ? Math.max(...data.portfolio.map(item => item.id)) + 1 : 1;
    
    data.portfolio.push({
        id: newId,
        title,
        description,
        image
    });
    
    localStorage.setItem('malekArtData', JSON.stringify(data));
    
    // إعادة تحميل المحتوى
    if (typeof loadContent === 'function') {
        loadContent();
    }
    loadAdminPanel();
    
    // إعادة تعيين الحقول
    document.getElementById('portfolioTitle').value = '';
    document.getElementById('portfolioDesc').value = '';
    document.getElementById('portfolioImage').value = '';
    
    alert('تم إضافة العمل بنجاح');
}

// إضافة خدمة جديدة
function addServiceItem() {
    const title = document.getElementById('serviceTitle').value;
    const description = document.getElementById('serviceDesc').value;
    const icon = document.getElementById('serviceIcon').value;
    
    if (!title || !description || !icon) {
        alert('يرجى ملء جميع الحقول');
        return;
    }
    
    const data = JSON.parse(localStorage.getItem('malekArtData'));
    const newId = data.services.length > 0 ? Math.max(...data.services.map(item => item.id)) + 1 : 1;
    
    data.services.push({
        id: newId,
        title,
        description,
        icon
    });
    
    localStorage.setItem('malekArtData', JSON.stringify(data));
    
    // إعادة تحميل المحتوى
    if (typeof loadContent === 'function') {
        loadContent();
    }
    loadAdminPanel();
    
    // إعادة تعيين الحقول
    document.getElementById('serviceTitle').value = '';
    document.getElementById('serviceDesc').value = '';
    document.getElementById('serviceIcon').value = '';
    
    alert('تم إضافة الخدمة بنجاح');
}

// إضافة رأي جديد
function addTestimonialItem() {
    const name = document.getElementById('testimonialName').value;
    const position = document.getElementById('testimonialPosition').value;
    const text = document.getElementById('testimonialText').value;
    const avatar = document.getElementById('testimonialAvatar').value;
    const rating = parseFloat(document.getElementById('testimonialRating').value);
    
    if (!name || !position || !text || !avatar || !rating) {
        alert('يرجى ملء جميع الحقول');
        return;
    }
    
    if (rating < 1 || rating > 5) {
        alert('يرجى إدخال تقييم بين 1 و 5');
        return;
    }
    
    const data = JSON.parse(localStorage.getItem('malekArtData'));
    const newId = data.testimonials.length > 0 ? Math.max(...data.testimonials.map(item => item.id)) + 1 : 1;
    
    data.testimonials.push({
        id: newId,
        name,
        position,
        text,
        avatar,
        rating
    });
    
    localStorage.setItem('malekArtData', JSON.stringify(data));
    
    // إعادة تحميل المحتوى
    if (typeof loadContent === 'function') {
        loadContent();
    }
    loadAdminPanel();
    
    // إعادة تعيين الحقول
    document.getElementById('testimonialName').value = '';
    document.getElementById('testimonialPosition').value = '';
    document.getElementById('testimonialText').value = '';
    document.getElementById('testimonialAvatar').value = '';
    document.getElementById('testimonialRating').value = '';
    
    alert('تم إضافة الرأي بنجاح');
}

// حفظ معلومات التواصل
function saveContactInfo() {
    const phone = document.getElementById('contactPhoneInput').value;
    const email = document.getElementById('contactEmailInput').value;
    const address = document.getElementById('contactAddressInput').value;
    const schedule = document.getElementById('contactScheduleInput').value;
    
    if (!phone || !email || !address || !schedule) {
        alert('يرجى ملء جميع الحقول');
        return;
    }
    
    const data = JSON.parse(localStorage.getItem('malekArtData'));
    data.contact = {
        phone,
        email,
        address,
        schedule
    };
    
    localStorage.setItem('malekArtData', JSON.stringify(data));
    
    // إعادة تحميل المحتوى
    if (typeof loadContent === 'function') {
        loadContent();
    }
    
    alert('تم حفظ معلومات التواصل بنجاح');
}

// حذف عمل
function deletePortfolioItem(id) {
    if (confirm('هل أنت متأكد من أنك تريد حذف هذا العمل؟')) {
        const data = JSON.parse(localStorage.getItem('malekArtData'));
        data.portfolio = data.portfolio.filter(item => item.id !== id);
        localStorage.setItem('malekArtData', JSON.stringify(data));
        
        // إعادة تحميل المحتوى
        if (typeof loadContent === 'function') {
            loadContent();
        }
        loadAdminPanel();
        
        alert('تم حذف العمل بنجاح');
    }
}

// حذف خدمة
function deleteServiceItem(id) {
    if (confirm('هل أنت متأكد من أنك تريد حذف هذه الخدمة؟')) {
        const data = JSON.parse(localStorage.getItem('malekArtData'));
        data.services = data.services.filter(item => item.id !== id);
        localStorage.setItem('malekArtData', JSON.stringify(data));
        
        // إعادة تحميل المحتوى
        if (typeof loadContent === 'function') {
            loadContent();
        }
        loadAdminPanel();
        
        alert('تم حذف الخدمة بنجاح');
    }
}

// حذف رأي
function deleteTestimonialItem(id) {
    if (confirm('هل أنت متأكد من أنك تريد حذف هذا الرأي؟')) {
        const data = JSON.parse(localStorage.getItem('malekArtData'));
        data.testimonials = data.testimonials.filter(item => item.id !== id);
        localStorage.setItem('malekArtData', JSON.stringify(data));
        
        // إعادة تحميل المحتوى
        if (typeof loadContent === 'function') {
            loadContent();
        }
        loadAdminPanel();
        
        alert('تم حذف الرأي بنجاح');
    }
}

// تحرير عمل
function editPortfolioItem(id) {
    const data = JSON.parse(localStorage.getItem('malekArtData'));
    const item = data.portfolio.find(item => item.id === id);
    
    if (!item) return;
    
    // ملء النموذج بالبيانات الحالية
    document.getElementById('portfolioTitle').value = item.title;
    document.getElementById('portfolioDesc').value = item.description;
    document.getElementById('portfolioImage').value = item.image;
    
    // تغيير نص زر الإضافة إلى تحديث
    const addButton = document.getElementById('addPortfolioBtn');
    const originalText = addButton.textContent;
    addButton.textContent = 'تحديث العمل';
    
    // تغيير سلوك الزر للتحديث بدلاً من الإضافة
    addButton.onclick = function() {
        if (!confirm('هل تريد حفظ التعديلات؟')) {
            addButton.textContent = originalText;
            addButton.onclick = addPortfolioItem;
            return;
        }
        
        item.title = document.getElementById('portfolioTitle').value;
        item.description = document.getElementById('portfolioDesc').value;
        item.image = document.getElementById('portfolioImage').value;
        
        localStorage.setItem('malekArtData', JSON.stringify(data));
        
        // إعادة تحميل المحتوى
        if (typeof loadContent === 'function') {
            loadContent();
        }
        loadAdminPanel();
        
        // إعادة تعيين الزر
        addButton.textContent = originalText;
        addButton.onclick = addPortfolioItem;
        
        // إعادة تعيين الحقول
        document.getElementById('portfolioTitle').value = '';
        document.getElementById('portfolioDesc').value = '';
        document.getElementById('portfolioImage').value = '';
        
        alert('تم تحديث العمل بنجاح');
    };
}

// تحرير خدمة
function editServiceItem(id) {
    const data = JSON.parse(localStorage.getItem('malekArtData'));
    const item = data.services.find(item => item.id === id);
    
    if (!item) return;
    
    // ملء النموذج بالبيانات الحالية
    document.getElementById('serviceTitle').value = item.title;
    document.getElementById('serviceDesc').value = item.description;
    document.getElementById('serviceIcon').value = item.icon;
    
    // تغيير نص زر الإضافة إلى تحديث
    const addButton = document.getElementById('addServiceBtn');
    const originalText = addButton.textContent;
    addButton.textContent = 'تحديث الخدمة';
    
    // تغيير سلوك الزر للتحديث بدلاً من الإضافة
    addButton.onclick = function() {
        if (!confirm('هل تريد حفظ التعديلات؟')) {
            addButton.textContent = originalText;
            addButton.onclick = addServiceItem;
            return;
        }
        
        item.title = document.getElementById('serviceTitle').value;
        item.description = document.getElementById('serviceDesc').value;
        item.icon = document.getElementById('serviceIcon').value;
        
        localStorage.setItem('malekArtData', JSON.stringify(data));
        
        // إعادة تحميل المحتوى
        if (typeof loadContent === 'function') {
            loadContent();
        }
        loadAdminPanel();
        
        // إعادة تعيين الزر
        addButton.textContent = originalText;
        addButton.onclick = addServiceItem;
        
        // إعادة تعيين الحقول
        document.getElementById('serviceTitle').value = '';
        document.getElementById('serviceDesc').value = '';
        document.getElementById('serviceIcon').value = '';
        
        alert('تم تحديث الخدمة بنجاح');
    };
}

// تحرير رأي
function editTestimonialItem(id) {
    const data = JSON.parse(localStorage.getItem('malekArtData'));
    const item = data.testimonials.find(item => item.id === id);
    
    if (!item) return;
    
    // ملء النموذج بالبيانات الحالية
    document.getElementById('testimonialName').value = item.name;
    document.getElementById('testimonialPosition').value = item.position;
    document.getElementById('testimonialText').value = item.text;
    document.getElementById('testimonialAvatar').value = item.avatar;
    document.getElementById('testimonialRating').value = item.rating;
    
    // تغيير نص زر الإضافة إلى تحديث
    const addButton = document.getElementById('addTestimonialBtn');
    const originalText = addButton.textContent;
    addButton.textContent = 'تحديث الرأي';
    
    // تغيير سلوك الزر للتحديث بدلاً من الإضافة
    addButton.onclick = function() {
        if (!confirm('هل تريد حفظ التعديلات؟')) {
            addButton.textContent = originalText;
            addButton.onclick = addTestimonialItem;
            return;
        }
        
        const rating = parseFloat(document.getElementById('testimonialRating').value);
        
        if (rating < 1 || rating > 5) {
            alert('يرجى إدخال تقييم بين 1 و 5');
            return;
        }
        
        item.name = document.getElementById('testimonialName').value;
        item.position = document.getElementById('testimonialPosition').value;
        item.text = document.getElementById('testimonialText').value;
        item.avatar = document.getElementById('testimonialAvatar').value;
        item.rating = rating;
        
        localStorage.setItem('malekArtData', JSON.stringify(data));
        
        // إعادة تحميل المحتوى
        if (typeof loadContent === 'function') {
            loadContent();
        }
        loadAdminPanel();
        
        // إعادة تعيين الزر
        addButton.textContent = originalText;
        addButton.onclick = addTestimonialItem;
        
        // إعادة تعيين الحقول
        document.getElementById('testimonialName').value = '';
        document.getElementById('testimonialPosition').value = '';
        document.getElementById('testimonialText').value = '';
        document.getElementById('testimonialAvatar').value = '';
        document.getElementById('testimonialRating').value = '';
        
        alert('تم تحديث الرأي بنجاح');
    };
}

// تهيئة لوحة التحكم
function initAdminPanel() {
    console.log('تهيئة لوحة التحكم...');
    
    // تحميل بيانات لوحة التحكم
    loadAdminPanel();
    
    // إضافة event listeners للأزرار
    const addPortfolioBtn = document.getElementById('addPortfolioBtn');
    const addServiceBtn = document.getElementById('addServiceBtn');
    const addTestimonialBtn = document.getElementById('addTestimonialBtn');
    const saveContactBtn = document.getElementById('saveContactBtn');
    const adminDashboardClose = document.getElementById('adminDashboardClose');
    const adminBtn = document.getElementById('adminBtn');
    const adminLoginModal = document.getElementById('adminLoginModal');
    
    // فتح لوحة التحكم من زر الترس
    if (adminBtn) {
        adminBtn.addEventListener('click', function() {
            const isLoggedIn = localStorage.getItem('malekArtLoggedIn') === 'true';
            if (isLoggedIn) {
                document.getElementById('adminDashboard').style.display = 'block';
                console.log('فتح لوحة التحكم من زر الإعدادات');
            } else {
                if (adminLoginModal) {
                    adminLoginModal.style.display = 'flex';
                    console.log('فتح نافذة تسجيل الدخول من زر الإعدادات');
                }
            }
        });
    }
    
    // إغلاق لوحة التحكم
    if (adminDashboardClose) {
        adminDashboardClose.addEventListener('click', function() {
            document.getElementById('adminDashboard').style.display = 'none';
            console.log('إغلاق لوحة التحكم');
        });
    }
    
    // إضافة عمل جديد
    if (addPortfolioBtn) {
        addPortfolioBtn.addEventListener('click', addPortfolioItem);
    }
    
    // إضافة خدمة جديدة
    if (addServiceBtn) {
        addServiceBtn.addEventListener('click', addServiceItem);
    }
    
    // إضافة رأي جديد
    if (addTestimonialBtn) {
        addTestimonialBtn.addEventListener('click', addTestimonialItem);
    }
    
    // حفظ معلومات التواصل
    if (saveContactBtn) {
        saveContactBtn.addEventListener('click', saveContactInfo);
    }
    
    // تبديل علامات التبويب في لوحة التحكم
    const adminTabs = document.querySelectorAll('.admin-tab');
    adminTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // إزالة النشاط من جميع علامات التبويب
            adminTabs.forEach(t => t.classList.remove('active'));
            // إضافة النشاط إلى علامة التبويب المحددة
            this.classList.add('active');
            
            // إخفاء جميع المحتويات
            document.querySelectorAll('.admin-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // إظهار المحتوى المحدد
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}Content`).classList.add('active');
            
            console.log('تم التبديل إلى تبويب:', tabId);
        });
    });
    
    console.log('تم تهيئة لوحة التحكم بنجاح');
}

// تهيئة لوحة التحكم عند تسجيل الدخول
window.addEventListener('loginSuccess', function() {
    console.log('تم تسجيل الدخول، تهيئة لوحة التحكم...');
    initAdminPanel();
});

// جعل الدوال متاحة globally
window.addPortfolioItem = addPortfolioItem;
window.addServiceItem = addServiceItem;
window.addTestimonialItem = addTestimonialItem;
window.saveContactInfo = saveContactInfo;
window.deletePortfolioItem = deletePortfolioItem;
window.deleteServiceItem = deleteServiceItem;
window.deleteTestimonialItem = deleteTestimonialItem;
window.editPortfolioItem = editPortfolioItem;
window.editServiceItem = editServiceItem;
window.editTestimonialItem = editTestimonialItem;

// تصدير الدوال للاستخدام في ملفات أخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadAdminPanel,
        addPortfolioItem,
        addServiceItem,
        addTestimonialItem,
        saveContactInfo,
        deletePortfolioItem,
        deleteServiceItem,
        deleteTestimonialItem,
        editPortfolioItem,
        editServiceItem,
        editTestimonialItem,
        initAdminPanel
    };
}
