let users = JSON.parse(localStorage.getItem('users')) || [];
let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;

// إظهار نموذج تسجيل الدخول أو التسجيل بناءً على حالة تسجيل الدخول
function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('app-content').style.display = 'none';
}

// إظهار نموذج التسجيل
function showRegisterForm() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('app-content').style.display = 'none';
}

// إظهار التطبيق بعد تسجيل الدخول
function showAppContent() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';
}

// تسجيل الدخول
function login() {
    let username = document.getElementById('name').value;
    let password = document.getElementById('password').value;

    // البحث عن المستخدم في قاعدة البيانات
    let user = users.find(u => u.name === username && u.password === password);
    
    if (user) {
        loggedInUser = user;
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        showAppContent();
    } else {
        alert('اسم المستخدم أو كلمة السر غير صحيحة');
    }
}

// تسجيل جديد
function register() {
    let name = document.getElementById('new-name').value;
    let studentClass = document.getElementById('new-class').value;
    let major = document.getElementById('new-major').value;
    let parentPhone = document.getElementById('new-parent-phone').value;
    let password = document.getElementById('new-password').value;

    // تحقق من أن البيانات ليست فارغة
    if (name && studentClass && major && parentPhone && password) {
        let newUser = {
            name: name,
            studentClass: studentClass,
            major: major,
            parentPhone: parentPhone,
            password: password
        };

        // إضافة المستخدم الجديد إلى قاعدة البيانات (المخزنة في localStorage)
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert('تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.');
        showLoginForm();
    } else {
        alert('يرجى ملء جميع الحقول');
    }
}

// تسجيل الخروج
function logout() {
    localStorage.removeItem('loggedInUser');
    loggedInUser = null;
    showLoginForm();
}

// عرض الأقسام داخل التطبيق
function showSection(section) {
    document.getElementById('study-schedule').style.display = 'none';
    document.getElementById('videos').style.display = 'none';
    document.getElementById('exams').style.display = 'none';

    document.getElementById(section).style.display = 'block';
}

window.onload = function() {
    // التحقق من إذا كان هناك مستخدم مسجل
    if (loggedInUser) {
        showAppContent();
    } else {
        showLoginForm();
    }
};
