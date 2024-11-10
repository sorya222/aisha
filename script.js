// دالة لحفظ بيانات المستخدم عند التسجيل
function saveUserData(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

// دالة لتسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('usernameLogin').value;
    const password = document.getElementById('passwordLogin').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        // تحويل المستخدم إلى الصفحة الرئيسية
        window.location.href = 'home.html';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('errorMessage').innerText = 'اسم المستخدم أو كلمة السر غير صحيحة';
    }
});

// دالة لتسجيل مستخدم جديد
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newUsername = document.getElementById('username').value;
    const newPassword = document.getElementById('password').value;

    saveUserData(newUsername, newPassword);

    alert('تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.');

    // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول بعد التسجيل
    window.location.href = 'login.html';
});

// دالة لتسجيل الخروج
function logout() {
    // إزالة بيانات المستخدم عند تسجيل الخروج
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول
    window.location.href = 'login.html';
}
