// التحقق من وجود بيانات المستخدم في localStorage
const username = localStorage.getItem('username');

if (username) {
    // عرض اسم المستخدم
    document.getElementById('usernameDisplay').textContent = username;
} else {
    // إذا لم يتم العثور على بيانات المستخدم، توجيههم إلى صفحة تسجيل الدخول
    window.location.href = 'login.html';
}

// وظيفة تسجيل الخروج
document.getElementById('logout').addEventListener('click', function() {
    // مسح بيانات المستخدم من localStorage عند تسجيل الخروج
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    
    // إعادة التوجيه إلى صفحة تسجيل الدخول
    window.location.href = 'login.html';
});
