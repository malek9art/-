// بيانات الاعتماد الثابتة
const ADMIN_CREDENTIALS = {
    username: 'm711kart',
    password: 'Ma775672439#'
};

// تحديث نص وعرض عناصر القائمة
function updateLoginDropdownText() {
    const loginDropdownLink = document.getElementById('login-dropdown-link');
    const dashboardLink = document.getElementById('dashboard-link');
    const isLoggedIn = localStorage.getItem('malekArtLoggedIn') === 'true';
    
    if (loginDropdownLink) {
        if (isLoggedIn) {
            loginDropdownLink.innerHTML = '<i class="fas fa-sign-out-alt"></i> تسجيل الخروج';
        } else {
            loginDropdownLink.innerHTML = '<i class="fas fa-sign-in-alt"></i> تسجيل الدخول';
        }
    }
    
    if (dashboardLink) {
        dashboardLink.style.display = isLoggedIn ? 'block' : 'none';
    }
}

// إدارة زر تسجيل الدخول في القائمة
function initLoginDropdown() {
    const loginDropdownLink = document.getElementById('login-dropdown-link');
    
    if (loginDropdownLink) {
        loginDropdownLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const isLoggedIn = localStorage.getItem('malekArtLoggedIn') === 'true';
            
            if (isLoggedIn) {
                // إذا كان المستخدم مسجلاً بالفعل، قم بتسجيل الخروج
                if (confirm('هل تريد تسجيل الخروج؟')) {
                    logout();
                    alert('تم تسجيل الخروج بنجاح');
                }
            } else {
                // إذا لم يكن مسجلاً، اعرض نافذة تسجيل الدخول
                const adminLoginModal = document.getElementById('adminLoginModal');
                if (adminLoginModal) {
                    adminLoginModal.style.display = 'flex';
                }
            }
        });
    }
    
    // تحديث نص وعرض زر التسجيل/التسجيل الخروج
    updateLoginDropdownText();
}

// التحقق من بيانات تسجيل الدخول
function validateLogin(username, password) {
    const isValid = username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
    console.log('محاولة تسجيل دخول:', username, 'نتيجة:', isValid);
    return isValid;
}

// التحقق من حالة تسجيل الدخول
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('malekArtLoggedIn') === 'true';
    const dashboardLink = document.getElementById('dashboard-link');
    const adminPanel = document.querySelector('.admin-panel');
    
    console.log('فحص حالة التسجيل:', isLoggedIn);
    
    if (isLoggedIn) {
        if (dashboardLink) {
            dashboardLink.style.display = 'block';
            console.log('تم عرض رابط لوحة التحكم');
        }
        if (adminPanel) {
            adminPanel.style.display = 'block';
            console.log('تم عرض زر الإدارة');
        }
    } else {
        if (dashboardLink) dashboardLink.style.display = 'none';
        if (adminPanel) adminPanel.style.display = 'none';
        console.log('المستخدم غير مسجل، إخفاء عناصر التحكم');
    }
    
    // تحديث نص وعرض عناصر القائمة
    updateLoginDropdownText();
    
    return isLoggedIn;
}

// تسجيل الدخول
function login(username, password) {
    if (validateLogin(username, password)) {
        localStorage.setItem('malekArtLoggedIn', 'true');
        console.log('تم تسجيل الدخول بنجاح');
        
        // إطلاق event لإعلام المكونات الأخرى
        const event = new Event('loginSuccess');
        window.dispatchEvent(event);
        
        return true;
    }
    console.log('فشل تسجيل الدخول');
    return false;
}

// تسجيل الخروج
function logout() {
    localStorage.removeItem('malekArtLoggedIn');
    console.log('تم تسجيل الخروج');
    
    // تحديث واجهة المستخدم
    checkLoginStatus();
    
    // إغلاق لوحة التحكم إذا كانت مفتوحة
    const adminDashboard = document.getElementById('adminDashboard');
    if (adminDashboard) {
        adminDashboard.style.display = 'none';
    }
}

// تهيئة نظام المصادقة
function initAuthSystem() {
    console.log('تهيئة نظام المصادقة...');
    const isLoggedIn = checkLoginStatus();
    
    // تهيئة زر تسجيل الدخول في القائمة
    initLoginDropdown();
    
    // إضافة event listeners للنموذج
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const adminCloseBtn = document.getElementById('adminCloseBtn');
    const adminLoginModal = document.getElementById('adminLoginModal');
    
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', function() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (login(username, password)) {
                if (adminLoginModal) adminLoginModal.style.display = 'none';
                checkLoginStatus();
                alert('تم تسجيل الدخول بنجاح!');
                
                // تحميل لوحة التحكم إذا كانت متوفرة
                if (typeof initAdminPanel === 'function') {
                    initAdminPanel();
                }
            } else {
                alert('اسم المستخدم أو كلمة المرور غير صحيحة!');
            }
        });
    }
    
    if (adminCloseBtn) {
        adminCloseBtn.addEventListener('click', function() {
            if (adminLoginModal) adminLoginModal.style.display = 'none';
        });
    }
    
    // فتح لوحة التحكم من الرابط
    const dashboardLink = document.getElementById('dashboard-link');
    const adminDashboard = document.getElementById('adminDashboard');
    
    if (dashboardLink && adminDashboard) {
        dashboardLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (checkLoginStatus()) {
                adminDashboard.style.display = 'block';
                console.log('فتح لوحة التحكم من الرابط');
                
                // تحميل لوحة التحكم إذا كانت متوفرة
                if (typeof initAdminPanel === 'function') {
                    initAdminPanel();
                }
            }
        });
    }
    
    // فتح نافذة تسجيل الدخول عند النقر على زر الإدارة
    const adminBtn = document.getElementById('adminBtn');
    if (adminBtn) {
        adminBtn.addEventListener('click', function() {
            if (checkLoginStatus()) {
                if (adminDashboard) {
                    adminDashboard.style.display = 'block';
                    console.log('فتح لوحة التحكم مباشرة');
                    
                    // تحميل لوحة التحكم إذا كانت متوفرة
                    if (typeof initAdminPanel === 'function') {
                        initAdminPanel();
                    }
                }
            } else {
                if (adminLoginModal) {
                    adminLoginModal.style.display = 'flex';
                    console.log('فتح نافذة تسجيل الدخول');
                }
            }
        });
    }
    
    console.log('تم تهيئة نظام المصادقة بنجاح');
}

// جعل الدوال متاحة globally لل debugging
window.checkLoginStatus = checkLoginStatus;
window.login = login;
window.logout = logout;
window.testLogin = function() {
    console.log('اختبار تسجيل الدخول...');
    const success = login('m711kart', 'Ma775672439#');
    console.log('نتيجة الاختبار:', success);
    checkLoginStatus();
    return success;
};

// تصدير الدوال للاستخدام في ملفات أخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateLogin,
        checkLoginStatus,
        login,
        logout,
        initAuthSystem
    };
}
