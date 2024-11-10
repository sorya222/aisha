document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // الحصول على البيانات المدخلة من قبل المستخدم
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // تخزين البيانات في localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // إعادة التوجيه إلى صفحة أخرى بعد التسجيل الناجح
    window.location.href = 'home.html';
});
