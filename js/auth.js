// بيانات الاعتماد الثابتة
const ADMIN_CREDENTIALS = {
    username: 'm711kart',
    password: 'Ma775672439#'
};

// التحقق من بيانات تسجيل الدخول
function validateLogin(username, password) {
    return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
}

// التحقق من حالة تسجيل الدخول
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('malekArtLoggedIn') === 'true';
    const dashboardLink = document.getElementById('dashboard-link');
    const adminPanel = document.querySelector('.admin-panel');
    
    if (isLoggedIn) {
        if (dashboardLink) dashboardLink.style.display = 'block';
        if (adminPanel) adminPanel.style.display = 'block';
    } else {
        if (dashboardLink) dashboardLink.style.display = 'none';
        if (adminPanel) adminPanel.style.display = 'none';
    }
}

// تسجيل الدخول
function login(username, password) {
    if (validateLogin(username, password)) {
        localStorage.setItem('malekArtLoggedIn', 'true');
        return true;
    }
    return false;
}

// تسجيل الخروج
function logout() {
    localStorage.removeItem('malekArtLoggedIn');
    checkLoginStatus();
}

// تهيئة نظام المصادقة
function initAuthSystem() {
    checkLoginStatus();
    
    // إضافة event listeners للنموذج
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const adminCloseBtn = document.getElementById('adminCloseBtn');
    const adminLoginModal = document.getElementById('adminLoginModal');
    
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', function() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (login(username, password)) {
                adminLoginModal.style.display = 'none';
                checkLoginStatus();
                alert('تم تسجيل الدخول بنجاح!');
            } else {
                alert('اسم المستخدم أو كلمة المرور غير صحيحة!');
            }
        });
    }
    
    if (adminCloseBtn) {
        adminCloseBtn.addEventListener('click', function() {
            adminLoginModal.style.display = 'none';
        });
    }
    
    // فتح لوحة التحكم من الرابط
    const dashboardLink = document.getElementById('dashboard-link');
    const adminDashboard = document.getElementById('adminDashboard');
    
    if (dashboardLink && adminDashboard) {
        dashboardLink.addEventListener('click', function(e) {
            e.preventDefault();
            adminDashboard.style.display = 'block';
        });
    }
}

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
