# 📊 Google Analytics Setup Guide

## 🎯 الهدف
تتبع عدد زوار البورتفوليو ومعرفة:
- عدد الزوار (يومي/شهري/سنوي)
- من أنهي دول
- أنهي صفحات زاروها
- قد إيه قعدوا في الموقع
- من أنهي أجهزة (موبايل/كمبيوتر/تابلت)

---

## 🚀 الخطوات

### 1️⃣ إنشاء حساب Google Analytics

1. روح على: https://analytics.google.com/
2. اضغط **Start measuring**
3. املأ البيانات:
   - **Account name**: Portfolio Analytics
   - **Property name**: Eslam Salah Portfolio
   - **Reporting time zone**: (GMT+02:00) Cairo
   - **Currency**: Egyptian Pound (EGP)
4. اختار **Web** platform
5. أدخل:
   - **Website URL**: `https://eslamsalah5.github.io`
   - **Stream name**: Portfolio Website
6. اضغط **Create stream**

### 2️⃣ الحصول على Measurement ID

بعد إنشاء الـ stream، هتلاقي **Measurement ID** بالشكل ده:
```
G-XXXXXXXXXX
```
مثال: `G-ABC123DEF4`

### 3️⃣ تفعيل Google Analytics في البورتفوليو

1. افتح ملف `src/index.html`
2. ابحث عن السطر ده:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```
3. استبدل `G-XXXXXXXXXX` بالـ Measurement ID بتاعك
4. ابحث عن السطر ده كمان:
   ```javascript
   gtag("config", "G-XXXXXXXXXX");
   ```
5. استبدل `G-XXXXXXXXXX` بنفس الـ ID

### 4️⃣ رفع التعديلات

```bash
# Build
npm run build

# Commit
git add .
git commit -m "feat(analytics): add Google Analytics tracking"
git push origin main

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

---

## 📈 مشاهدة الإحصائيات

بعد ما ترفع التعديلات:

1. روح على: https://analytics.google.com/
2. اختار الـ Property بتاعك
3. من القائمة الجانبية:
   - **Reports** → **Realtime**: شوف الزوار الحاليين (live)
   - **Reports** → **Acquisition**: من فين جايين الزوار
   - **Reports** → **Engagement**: أنهي صفحات زاروها
   - **Reports** → **Demographics**: من أنهي دول وأعمار
   - **Reports** → **Tech**: أنهي أجهزة ومتصفحات

---

## 🎨 بدائل أخرى (اختياري)

### Microsoft Clarity (مجاني - تسجيل فيديو)
- الموقع: https://clarity.microsoft.com/
- المميزات:
  - تسجيل فيديو لحركة الزوار
  - Heatmaps (خرائط حرارية)
  - Session recordings
- التكامل: أضف كود Clarity في `index.html` بنفس الطريقة

### Plausible Analytics (Privacy-focused)
- الموقع: https://plausible.io/
- المميزات:
  - بسيط جداً
  - لا يستخدم cookies
  - Privacy-friendly
- السعر: $9/شهر (بعد trial مجاني)

---

## 🔒 الخصوصية

Google Analytics يحترم خصوصية الزوار:
- لا يجمع معلومات شخصية
- يستخدم cookies لتتبع الجلسات فقط
- يمكن للزوار تعطيله من المتصفح

---

## ✅ التحقق من التفعيل

بعد الرفع، تأكد إن Google Analytics شغال:

1. افتح البورتفوليو: https://eslamsalah5.github.io/portfolio/
2. افتح Developer Tools (F12)
3. اذهب لـ **Network** tab
4. ابحث عن request لـ `google-analytics.com` أو `gtag/js`
5. لو موجود، يبقى شغال ✅

أو:

1. روح على Google Analytics
2. اختار **Realtime** report
3. افتح البورتفوليو في tab تاني
4. هتشوف نفسك ظاهر في الـ Realtime report ✅

---

## 📞 الدعم

لو واجهتك أي مشكلة:
- Google Analytics Help: https://support.google.com/analytics
- أو ابعتلي message

---

**تم إضافة Google Analytics بنجاح! 🎉**
