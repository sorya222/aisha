// دالة تسجيل الخروج
function logout() {
    // توجيه المستخدم إلى صفحة تسجيل الدخول
    window.location.href = 'login.html';
}

// دالة إظهار الأقسام
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// تخزين بيانات الطالب بعد التسجيل
function registerStudent() {
    const studentName = document.getElementById('studentName').value;
    const password = document.getElementById('password').value;

    // تخزين الاسم وكلمة السر في localStorage
    localStorage.setItem('studentName', studentName);
    localStorage.setItem('password', password);

    // الانتقال إلى التطبيق
    window.location.href = 'index.html';
}
