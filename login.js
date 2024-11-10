// دالة تحقق من الاسم وكلمة السر
function validateLogin() {
    const studentName = document.getElementById('studentName').value;
    const password = document.getElementById('password').value;

    // تحقق من إذا كانت بيانات التسجيل صحيحة
    if (studentName === localStorage.getItem('studentName') && password === localStorage.getItem('password')) {
        // إذا كانت صحيحة، الانتقال إلى الصفحة الرئيسية
        window.location.href = 'index.html';
    } else {
        alert('الاسم أو كلمة السر غير صحيحة');
        return false; // لمنع إرسال النموذج إذا كانت البيانات غير صحيحة
    }
}
