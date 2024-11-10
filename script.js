// دالة لحفظ بيانات المستخدم عند التسجيل
function saveUserData(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    console.log('تم حفظ بيانات المستخدم في localStorage');
}

// دالة لتسجيل مستخدم جديد
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newUsername = document.getElementById('username').value;
    const newPassword = document.getElementById('password').value;

    // حفظ بيانات المستخدم
    saveUserData(newUsername, newPassword);

    // إظهار رسالة تأكيد للمستخدم
    alert('تم التسجيل بنجاح! سيتم نقلك إلى التطبيق.');

    // إعادة توجيه المستخدم إلى الصفحة الرئيسية للتطبيق بعد التسجيل
    window.location.href = 'home.html';
});

// التحقق من أن المستخدم قد سجل الدخول
window.onload = function() {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (!storedUsername || !storedPassword) {
        // إذا كانت بيانات المستخدم غير موجودة، يتم إعادة توجيه المستخدم إلى صفحة التسجيل
        window.location.href = 'register.html';
    }
};
