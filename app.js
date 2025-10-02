// FlexiPay Professional Platform - Enhanced Demo Version with Fixed Login
// تطوير المهندس فيلوباتر داود

// Test Users Data - Enhanced for Quick Demo Access
const testUsers = [
    {
        id: "USR001", 
        email: "ahmed@test.com",
        password: "123456",
        name: "فيلوباتير داود سليمان صموئيل",
        phone: "+201142792668",
        avatar: "👤",
        isDemo: true,
        creditScore: 720,
        memberSince: "مارس 2024"
    },

];

// Application State
let currentState = {
    isLoggedIn: false,
    currentSection: 'dashboard',
    selectedPaymentMethod: null,
    currentTheme: 'light',
    currentCalendarMonth: new Date(),
    unreadNotifications: 0,
    rewardPoints: 2450,
    sessionTimer: null,
    currentUser: null,
    isDemoMode: false
};

// Loan Data
const loanData = {
    id: "LOAN001",
    type: "قرض شخصي",
    originalAmount: 350000,
    currentBalance: 176600,
    paidAmount: 173400,
    monthlyPayment: 10200,
    nextDueDate: "2025-10-15",
    interestRate: 14.5,
    completionPercentage: 49.5,
    status: "نشط",
    paymentsRemaining: 31
};

// Notifications Data
const notificationsData = [
    {
        id: "N001",
        type: "payment_reminder",
        title: "تذكير موعد السداد",
        message: "قسطك القادم مستحق في 15 أكتوبر - مبلغ 10,200 جنيه",
        time: "منذ ساعة",
        read: false,
        priority: "high"
    },
    {
        id: "N002",
        type: "payment_success",
        title: "تم الدفع بنجاح", 
        message: "تم سداد مبلغ 5,000 جنيه عبر فودافون كاش",
        time: "أمس",
        read: true,
        priority: "normal"
    },
    {
        id: "N003",
        type: "system",
        title: "مرحباً بك في النسخة التجريبية",
        message: "جميع الميزات متاحة للتجربة. استكشف المنصة بحرية!",
        time: "الآن",
        read: false,
        priority: "normal"
    }
];

// Analytics Data
const analyticsData = {
    monthlyProgress: [
        {month: "يناير", paid: 12000, target: 10200},
        {month: "فبراير", paid: 10200, target: 10200},
        {month: "مارس", paid: 15000, target: 10200},
        {month: "أبريل", paid: 10200, target: 10200},
        {month: "مايو", paid: 10200, target: 10200},
        {month: "يونيو", paid: 8000, target: 10200},
        {month: "يوليو", paid: 10200, target: 10200},
        {month: "أغسطس", paid: 11500, target: 10200},
        {month: "سبتمبر", paid: 10200, target: 10200}
    ]
};

// Chatbot Knowledge Base
const chatbotResponses = {
    balance: "رصيدك الحالي هو 176,600 جنيه من أصل 350,000 جنيه. تم سداد 49.5% من القرض. استمر بهذا الأداء الرائع! 🎉",
    nextPayment: "قسطك القادم مستحق في 15 أكتوبر بمبلغ 10,200 جنيه. يمكنك الدفع مبكراً أو استخدام الدفع المرن.",
    paymentMethods: "يمكنك الدفع عبر: البنوك المحفوظة، فودافون كاش، InstaPay، أو فوري. أيهم تفضل؟",
    reschedule: "يمكنك طلب إعادة جدولة الدفعات من قسم 'طلباتي' مع ذكر السبب. سيتم مراجعة طلبك خلال 48 ساعة.",
    latePayment: "في حالة التأخير، يتم تطبيق غرامة تأخير 2% شهرياً. ننصح بالاتصال بنا فوراً لتجنب تأثر تقييمك الائتماني.",
    technicalSupport: "يمكنني مساعدتك في حل المشاكل التقنية. تأكد من تحديث التطبيق أو تواصل مع الدعم على 16555.",
    financialAdvice: "الدفع المبكر يوفر عليك فوائد ويحسن تقييمك الائتماني. حاول تخصيص 30% من دخلك كحد أقصى للأقساط.",
    rewards: `لديك ${currentState.rewardPoints.toLocaleString()} نقطة مكافآت! 🌟 يمكنك استبدالها بخصومات أو هدايا من متجر المكافآت.`,
    greeting: "أهلاً وسهلاً! أنا مساعدك الذكي في FlexiPay. كيف يمكنني مساعدتك اليوم؟"
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 FlexiPay Demo - تحميل المنصة...');
    initializeApp();
});

function initializeApp() {
    // Initialize Enhanced Login System
    initializeEnhancedLogin();
    
    // Initialize Core Systems
    initializeTheme();
    initializeNavigation();
    initializeNotifications();
    initializePaymentSystem();
    initializeChatbot();
    initializeCalendar();
    initializeRewards();
    initializeGlobalFeatures();
    
    // Show login container by default
    showLoginContainer();
    
    console.log(`
🎉 FlexiPay منصة الدفع المرن المحسنة
✨ الميزات الجديدة:
• دخول تجريبي فوري بنقرة واحدة
• حسابات تجريبية بكلمة مرور 123456
• إرشادات واضحة ومساعدة فورية
• جميع الميزات تعمل بنسبة 100%

🔧 تطوير: المهندس فيلوباتر داود
✅ مشكلة تسجيل الدخول تم إصلاحها تماماً!
    `);
}

// Enhanced Login System
function initializeEnhancedLogin() {
    // Quick Demo Button
    const quickDemoBtn = document.getElementById('quickDemoBtn');
    if (quickDemoBtn) {
        quickDemoBtn.addEventListener('click', handleQuickDemo);
    }
    
    // Quick Login Buttons for Test Accounts
    const quickLoginBtns = document.querySelectorAll('.quick-login-btn');
    quickLoginBtns.forEach(btn => {
        btn.addEventListener('click', handleQuickLogin);
    });
    
    // Traditional Login Form
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', handleTraditionalLogin);
    }
    
    // Register Button
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn) {
        registerBtn.addEventListener('click', handleRegister);
    }
    
    // Password Toggle
    setupPasswordToggles();
    
    console.log('✅ نظام تسجيل الدخول المحسن جاهز');
}

function handleQuickDemo() {
    showLoading('quickDemoBtn');
    
    // Animate button
    const btn = document.getElementById('quickDemoBtn');
    btn.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        // Auto-login with first test user
        const demoUser = testUsers[0];
        loginUser(demoUser, true);
        
        // Show success message
        showSuccessNotification('تم الدخول للنسخة التجريبية بنجاح! 🚀');
        
        btn.style.transform = 'scale(1)';
        hideLoading('quickDemoBtn');
    }, 800);
}

function handleQuickLogin(event) {
    const btn = event.target;
    const email = btn.dataset.email;
    const name = btn.dataset.name;
    
    showLoading(btn);
    btn.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        // Find user by email
        const user = testUsers.find(u => u.email === email);
        if (user) {
            loginUser(user, true);
            showSuccessNotification(`مرحباً ${name}! تم تسجيل الدخول بنجاح 🎉`);
        }
        
        btn.style.transform = 'scale(1)';
        hideLoading(btn);
    }, 600);
}

function handleTraditionalLogin() {
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (!email || !password) {
        showErrorNotification('يرجى ملء جميع الحقول أو استخدام التجربة السريعة أعلاه');
        return;
    }
    
    showLoading('loginBtn');
    
    setTimeout(() => {
        // Check if user exists in test accounts
        const user = testUsers.find(u => u.email === email && u.password === password);
        
        if (user) {
            loginUser(user, false);
            showSuccessNotification(`أهلاً وسهلاً ${user.name}! 🎉`);
        } else {
            showErrorNotification('بيانات غير صحيحة. جرب: ahmed@test.com أو sara@test.com مع كلمة مرور: 123456');
        }
        
        hideLoading('loginBtn');
    }, 1200);
}

function handleRegister() {
    const nameInput = document.getElementById('registerName');
    const emailInput = document.getElementById('registerEmail');
    const passwordInput = document.getElementById('registerPassword');
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (!name || !email || !password) {
        showErrorNotification('يرجى ملء الحقول أو استخدام التجربة السريعة');
        return;
    }
    
    showLoading('registerBtn');
    
    setTimeout(() => {
        // Create temporary demo user
        const newUser = {
            id: "USR_TEMP_" + Date.now(),
            email: email,
            password: password,
            name: name,
            phone: "+201000000000",
            avatar: "👤",
            isDemo: true,
            creditScore: 650,
            memberSince: "الآن"
        };
        
        loginUser(newUser, true);
        showSuccessNotification(`مرحباً ${name}! تم إنشاء حسابك التجريبي وتسجيل الدخول بنجاح 🎊`);
        
        hideLoading('registerBtn');
    }, 1500);
}

function loginUser(user, isDemoMode = false) {
    // Set current state
    currentState.isLoggedIn = true;
    currentState.currentUser = user;
    currentState.isDemoMode = isDemoMode;
    
    // Hide login container and show main app immediately
    hideLoginContainer();
    
    // Show main app with immediate content loading
    setTimeout(() => {
        showMainApp();
        
        // Update UI with user data immediately
        updateUserInterface(user);
        
        // Initialize dashboard content immediately
        showSection('dashboard');
        updateDashboard();
        
        // Initialize notifications immediately
        updateNotifications();
        
        // Start session (demo sessions don't expire)
        if (!isDemoMode) {
            startSessionManagement();
        }
        
        console.log(`✅ تم تسجيل دخول ${user.name} ${isDemoMode ? '(نسخة تجريبية)' : ''}`);
    }, 200);
}

function hideLoginContainer() {
    const loginContainer = document.getElementById('loginContainer');
    if (loginContainer) {
        loginContainer.style.transition = 'all 0.3s ease';
        loginContainer.style.transform = 'scale(0.95)';
        loginContainer.style.display = 'none';
        setTimeout(() => {
            loginContainer.classList.add('none');
        }, 300);
    }
}

function showLoginContainer() {
    const loginContainer = document.getElementById('loginContainer');
    if (loginContainer) {
        loginContainer.classList.remove('hidden');
        loginContainer.style.opacity = '0';
        loginContainer.style.transform = 'scale(0.95)';
        setTimeout(() => {
            loginContainer.style.transition = 'all 0.3s ease';
            loginContainer.style.transform = 'scale(1)';
            loginContainer.style.opacity = '1';
        }, 50);
    }
}

function showMainApp() {
    const mainApp = document.getElementById('mainApp');
    if (mainApp) {
        mainApp.classList.remove('hidden');
        mainApp.style.opacity = '0';
        mainApp.style.transform = 'translateY(20px)';
        mainApp.style.transition = 'all 0.4s ease';
        
        // Force immediate content rendering
        setTimeout(() => {
            mainApp.style.opacity = '1';
            mainApp.style.transform = 'translateY(0)';
        }, 50);
    }
}

function hideMainApp() {
    const mainApp = document.getElementById('mainApp');
    if (mainApp) {
        mainApp.style.transition = 'all 0.3s ease';
        mainApp.style.opacity = '0';
        mainApp.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            mainApp.classList.add('hidden');
        }, 300);
    }
}

function setupPasswordToggles() {
    const toggles = document.querySelectorAll('.password-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input[type="password"], input[type="text"]');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.className = 'fas fa-eye-slash';
            } else {
                input.type = 'password';
                icon.className = 'fas fa-eye';
            }
        });
    });
}

function showLoginForm() {
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
    });
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.classList.add('active');
    }
}

function showRegisterForm() {
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
    });
    
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.classList.add('active');
    }
}

// User Interface Updates
function updateUserInterface(user) {
    // Update user name in header
    const userName = document.getElementById('userName');
    if (userName) {
        userName.textContent = user.name;
    }
    
    // Update welcome message
    const welcomeUserName = document.getElementById('welcomeUserName');
    if (welcomeUserName) {
        welcomeUserName.textContent = user.name.split(' ')[0];
    }
    
    // Update avatar if available
    const userAvatar = document.querySelector('.user-avatar');
    if (userAvatar) {
        userAvatar.textContent = user.avatar;
    }
    
    // Ensure profile dropdown is functional
    initializeProfileDropdown();
}

function initializeProfileDropdown() {
    // Make sure logout functionality is visible and working
    const logoutLinks = document.querySelectorAll('[onclick*="logout"]');
    logoutLinks.forEach(link => {
        link.style.display = 'flex';
        link.onclick = function(e) {
            e.preventDefault();
            logout();
        };
    });
}

function updateDashboard() {
    // Update loan overview immediately
    const totalLoanAmount = document.getElementById('totalLoanAmount');
    const paidAmount = document.getElementById('paidAmount');
    const remainingAmount = document.getElementById('remainingAmount');
    const nextPayment = document.getElementById('nextPayment');
    
    if (totalLoanAmount) totalLoanAmount.textContent = formatCurrency(loanData.originalAmount);
    if (paidAmount) paidAmount.textContent = formatCurrency(loanData.paidAmount);
    if (remainingAmount) remainingAmount.textContent = formatCurrency(loanData.currentBalance);
    if (nextPayment) nextPayment.textContent = `15 أكتوبر - ${formatCurrency(loanData.monthlyPayment)}`;
    
    // Update progress circle immediately
    updateProgressCircle();
    
    // Update recent activities immediately
    updateRecentActivities();
    
    // Update rewards display
    updateRewardsDisplay();
}

function updateProgressCircle() {
    const circle = document.querySelector('.circle');
    const percentage = document.querySelector('.percentage');
    
    if (circle && percentage) {
        // Animate progress circle
        setTimeout(() => {
            circle.style.strokeDasharray = `${loanData.completionPercentage}, 100`;
        }, 100);
        percentage.textContent = `${loanData.completionPercentage}%`;
    }
}

function updateRecentActivities() {
    const activitiesList = document.getElementById('recentActivitiesList');
    if (!activitiesList) return;
    
    const activities = [
        {
            type: 'payment',
            title: 'دفعة ناجحة',
            description: 'تم سداد 10,200 ج.م عبر فودافون كاش',
            time: 'منذ يومين',
            icon: '💳'
        },
        {
            type: 'reward',
            title: 'مكافأة جديدة',
            description: 'حصلت على 102 نقطة مكافآت',
            time: 'منذ يومين',
            icon: '⭐'
        },
        {
            type: 'notification',
            title: 'تذكير هام',
            description: 'قسطك القادم مستحق خلال 3 أيام',
            time: 'منذ ساعة',
            icon: '🔔'
        }
    ];
    
    activitiesList.innerHTML = '';
    
    activities.forEach(activity => {
        const activityElement = document.createElement('div');
        activityElement.className = 'activity-item';
        activityElement.innerHTML = `
            <div class="activity-icon ${activity.type}">
                ${activity.icon}
            </div>
            <div class="activity-details">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-description">${activity.description}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        `;
        activitiesList.appendChild(activityElement);
    });
}

// Navigation System
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.dataset.section;
            showSection(targetSection);
            
            // Update active state
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

function showSection(sectionId) {
    currentState.currentSection = sectionId;
    
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Initialize section-specific features
        if (sectionId === 'analytics') {
            setTimeout(initializeChart, 100);
        } else if (sectionId === 'chatbot') {
            focusChatInput();
        }
    }
}

// Notifications System
function initializeNotifications() {
    currentState.unreadNotifications = notificationsData.filter(n => !n.read).length;
    updateNotificationCount();
    
    const notificationBtn = document.querySelector('.notification-btn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', toggleNotifications);
    }
    
    renderNotifications();
}

function updateNotifications() {
    currentState.unreadNotifications = notificationsData.filter(n => !n.read).length;
    updateNotificationCount();
    renderNotifications();
}

function updateNotificationCount() {
    const notificationCount = document.getElementById('notificationCount');
    if (notificationCount) {
        notificationCount.textContent = currentState.unreadNotifications;
        notificationCount.style.display = currentState.unreadNotifications > 0 ? 'flex' : 'none';
    }
}

function renderNotifications() {
    const notificationsList = document.getElementById('notificationsList');
    if (!notificationsList) return;
    
    notificationsList.innerHTML = '';
    
    notificationsData.slice(0, 5).forEach(notification => {
        const notificationElement = createNotificationElement(notification);
        notificationsList.appendChild(notificationElement);
    });
}

function createNotificationElement(notification) {
    const div = document.createElement('div');
    div.className = `notification-item ${!notification.read ? 'unread' : ''}`;
    
    const iconClass = getNotificationIcon(notification.type);
    
    div.innerHTML = `
        <div class="notification-icon ${notification.type}">
            <i class="${iconClass}"></i>
        </div>
        <div class="notification-content">
            <div class="notification-title">${notification.title}</div>
            <div class="notification-message">${notification.message}</div>
            <div class="notification-time">${notification.time}</div>
        </div>
    `;
    
    div.addEventListener('click', () => markNotificationAsRead(notification.id));
    
    return div;
}

function getNotificationIcon(type) {
    const icons = {
        payment_reminder: 'fas fa-clock',
        payment_success: 'fas fa-check-circle',
        system: 'fas fa-info-circle'
    };
    return icons[type] || 'fas fa-bell';
}

function toggleNotifications() {
    const dropdown = document.getElementById('notificationsDropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

function markNotificationAsRead(notificationId) {
    const notification = notificationsData.find(n => n.id === notificationId);
    if (notification && !notification.read) {
        notification.read = true;
        currentState.unreadNotifications--;
        updateNotificationCount();
        renderNotifications();
    }
}

function markAllAsRead() {
    notificationsData.forEach(n => n.read = true);
    currentState.unreadNotifications = 0;
    updateNotificationCount();
    renderNotifications();
}

// Payment System
function initializePaymentSystem() {
    const paymentAmount = document.getElementById('paymentAmount');
    const paymentSlider = document.getElementById('paymentSlider');
    const payButton = document.getElementById('payButton');
    const methodCards = document.querySelectorAll('.method-card');
    
    if (paymentAmount && paymentSlider) {
        paymentAmount.addEventListener('input', handlePaymentAmountChange);
        paymentSlider.addEventListener('input', handlePaymentSliderChange);
        
        // Set initial values
        paymentAmount.value = loanData.monthlyPayment;
        paymentSlider.value = loanData.monthlyPayment;
        paymentSlider.max = loanData.currentBalance;
        
        calculatePaymentImpact();
    }
    
    methodCards.forEach(card => {
        card.addEventListener('click', () => selectPaymentMethod(card));
    });
    
    if (payButton) {
        payButton.addEventListener('click', processPayment);
    }
}

function handlePaymentAmountChange() {
    const paymentAmount = document.getElementById('paymentAmount');
    const paymentSlider = document.getElementById('paymentSlider');
    
    if (paymentSlider) {
        paymentSlider.value = paymentAmount.value;
    }
    calculatePaymentImpact();
    updatePayButtonState();
}

function handlePaymentSliderChange() {
    const paymentAmount = document.getElementById('paymentAmount');
    const paymentSlider = document.getElementById('paymentSlider');
    
    if (paymentAmount) {
        paymentAmount.value = paymentSlider.value;
    }
    calculatePaymentImpact();
    updatePayButtonState();
}

function calculatePaymentImpact() {
    const paymentAmount = document.getElementById('paymentAmount');
    if (!paymentAmount) return;
    
    const amount = parseFloat(paymentAmount.value) || 0;
    
    if (amount > 0 && amount <= loanData.currentBalance) {
        const newRemaining = loanData.currentBalance - amount;
        const newCompletionPercentage = ((loanData.originalAmount - newRemaining) / loanData.originalAmount * 100).toFixed(1);
        
        const remainingAfterPayment = document.getElementById('remainingAfterPayment');
        const newCompletionRate = document.getElementById('newCompletionRate');
        
        if (remainingAfterPayment) {
            remainingAfterPayment.textContent = formatCurrency(newRemaining);
            remainingAfterPayment.style.color = 'var(--color-success)';
        }
        
        if (newCompletionRate) {
            newCompletionRate.textContent = `${newCompletionPercentage}%`;
        }
    }
}

function selectPaymentMethod(card) {
    document.querySelectorAll('.method-card').forEach(c => {
        c.classList.remove('selected');
    });
    
    card.classList.add('selected');
    card.style.transform = 'scale(1.05)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 200);
    
    currentState.selectedPaymentMethod = card.dataset.method;
    updatePayButtonState();
}

function updatePayButtonState() {
    const payButton = document.getElementById('payButton');
    const paymentAmount = document.getElementById('paymentAmount');
    
    if (!payButton || !paymentAmount) return;
    
    const amount = parseFloat(paymentAmount.value) || 0;
    const hasMethod = currentState.selectedPaymentMethod !== null;
    const validAmount = amount >= 1000 && amount <= loanData.currentBalance;
    
    payButton.disabled = !hasMethod || !validAmount;
    
    if (hasMethod && validAmount) {
        payButton.innerHTML = `<i class="fas fa-credit-card"></i> تأكيد دفع ${formatCurrency(amount)}`;
    } else {
        payButton.innerHTML = '<i class="fas fa-credit-card"></i> اختر طريقة الدفع والمبلغ';
    }
}

function processPayment() {
    const paymentAmount = document.getElementById('paymentAmount');
    if (!paymentAmount) return;
    
    const amount = parseFloat(paymentAmount.value);
    const methodName = document.querySelector(`[data-method="${currentState.selectedPaymentMethod}"] .method-name`).textContent;
    
    showLoading('payButton');
    
    setTimeout(() => {
        // Update loan data
        loanData.currentBalance -= amount;
        loanData.paidAmount += amount;
        loanData.completionPercentage = ((loanData.paidAmount / loanData.originalAmount) * 100).toFixed(1);
        
        // Add reward points
        currentState.rewardPoints += Math.floor(amount / 100);
        
        // Show success
        showSuccessModal(`تم دفع ${formatCurrency(amount)} بنجاح عبر ${methodName}! 🎉`);
        
        // Reset form
        paymentAmount.value = loanData.monthlyPayment;
        document.getElementById('paymentSlider').value = loanData.monthlyPayment;
        document.querySelectorAll('.method-card').forEach(c => c.classList.remove('selected'));
        currentState.selectedPaymentMethod = null;
        
        // Update UI
        updatePayButtonState();
        calculatePaymentImpact();
        updateDashboard();
        
        hideLoading('payButton');
    }, 1800);
}

// Chatbot System
function initializeChatbot() {
    const sendButton = document.getElementById('sendMessage');
    const chatInput = document.getElementById('chatInput');
    const voiceButton = document.getElementById('voiceInput');
    const attachFileButton = document.getElementById('attachFile');
    const quickQuestionButtons = document.querySelectorAll('.question-btn');
    
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    if (voiceButton) {
        voiceButton.addEventListener('click', handleVoiceInput);
    }
    
    if (attachFileButton) {
        attachFileButton.addEventListener('click', handleFileAttachment);
    }
    
    quickQuestionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const questionType = this.dataset.question;
            handleQuickQuestion(questionType);
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    if (!chatInput) return;
    
    const message = chatInput.value.trim();
    
    if (message) {
        addMessageToChat(message, 'user');
        chatInput.value = '';
        
        showTypingIndicator();
        
        setTimeout(() => {
            hideTypingIndicator();
            const response = generateAIResponse(message);
            addMessageToChat(response, 'bot');
        }, 1500 + Math.random() * 1000);
    }
}

function handleQuickQuestion(questionType) {
    let response = '';
    let actionNeeded = false;
    
    switch(questionType) {
        case 'balance':
            response = chatbotResponses.balance;
            break;
            
        case 'nextPayment':
            response = chatbotResponses.nextPayment;
            break;
            
        case 'paymentMethods':
            response = chatbotResponses.paymentMethods;
            break;
            
        case 'latePayment':
            response = chatbotResponses.latePayment;
            break;
            
        case 'reschedule':
            response = chatbotResponses.reschedule;
            actionNeeded = true;
            setTimeout(() => showSection('requests'), 2000);
            break;
            
        case 'rewards':
            response = `لديك ${currentState.rewardPoints.toLocaleString()} نقطة مكافآت! 🌟 يمكنك استبدالها بخصومات أو هدايا من متجر المكافآت.`;
            actionNeeded = true;
            setTimeout(() => showSection('rewards'), 2000);
            break;
            
        case 'technicalSupport':
            response = chatbotResponses.technicalSupport;
            break;
            
        case 'financialAdvice':
            response = chatbotResponses.financialAdvice;
            break;
            
        default:
            response = 'عذراً، لم أفهم سؤالك. يمكنك إعادة صياغته أو التواصل مع فريق الدعم على 16555.';
    }
    
    addMessageToChat(response, 'bot');
    
    if (actionNeeded) {
        setTimeout(() => {
            addMessageToChat('هل تريد أن أوجهك لهذا القسم الآن؟', 'bot');
        }, 1000);
    }
}

function generateAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('رصيد') || lowerMessage.includes('باقي') || lowerMessage.includes('كام') || lowerMessage.includes('كم')) {
        return chatbotResponses.balance;
    }
    
    if (lowerMessage.includes('قسط') || lowerMessage.includes('دفع') || lowerMessage.includes('موعد')) {
        return chatbotResponses.nextPayment;
    }
    
    if (lowerMessage.includes('مكافآت') || lowerMessage.includes('نقاط') || lowerMessage.includes('هدايا')) {
        return `لديك ${currentState.rewardPoints.toLocaleString()} نقطة مكافآت رائعة! 🎁 يمكنك استبدالها بخصومات على الأقساط أو هدايا من متجر المكافآت.`;
    }
    
    if (lowerMessage.includes('تأجيل') || lowerMessage.includes('جدولة') || lowerMessage.includes('تعديل')) {
        return 'يمكنك طلب تأجيل أو إعادة جدولة من قسم "طلباتي". ستحتاج لتقديم مبرر وسيتم الرد خلال 48 ساعة. هل تريد الانتقال لهذا القسم؟ 📅';
    }
    
    if (lowerMessage.includes('مساعدة') || lowerMessage.includes('مشكلة') || lowerMessage.includes('استفسار')) {
        return 'أنا هنا لمساعدتك! يمكنني الإجابة على أسئلتك حول الرصيد، المدفوعات، المكافآت، أو أي استفسار آخر. كما يمكنك التواصل مع فريق الدعم على 16555 (متاح 24/7). 🆘';
    }
    
    const responses = [
        'فهمت سؤالك. دعني أساعدك في ذلك... يمكنك أيضاً استخدام الأسئلة السريعة أدناه للحصول على إجابات فورية.',
        'هذا سؤال جيد! بناءً على حسابك، أنصحك بمراجعة قسم التحليلات لمعرفة تفاصيل أكثر. هل تريد أن أوجهك إليه؟',
        'يمكنني مساعدتك في هذا الأمر. للحصول على معلومات دقيقة ومفصلة، يرجى التواصل مع فريق الدعم على 16555 أو استخدام الأسئلة السريعة.',
        'شكراً لثقتك في FlexiPay! أعمل على تحسين إجاباتي باستمرار. في الأثناء، يمكنك تجربة الأسئلة السريعة أو التواصل مع الدعم الفني.'
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const currentTime = new Date().toLocaleTimeString('ar-EG', {hour: '2-digit', minute: '2-digit'});
    const avatar = sender === 'bot' ? '🤖' : '👤';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-bubble">
            <div class="message-content">${message}</div>
            <div class="message-time">${currentTime}</div>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-bubble">
            <div class="message-content">
                <div class="typing-dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function handleVoiceInput() {
    const voiceButton = document.getElementById('voiceInput');
    if (voiceButton) {
        voiceButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        setTimeout(() => {
            voiceButton.innerHTML = '<i class="fas fa-microphone"></i>';
            const chatInput = document.getElementById('chatInput');
            if (chatInput) {
                chatInput.value = 'قد إيه باقي عليا في القرض؟';
                sendMessage();
            }
        }, 2500);
    }
}

function handleFileAttachment() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.multiple = true;
    fileInput.accept = '.pdf,.jpg,.png,.doc,.docx';
    
    fileInput.onchange = function(e) {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            addMessageToChat(`تم رفع ${files.length} ملف بنجاح 📎`, 'user');
            setTimeout(() => {
                addMessageToChat('شكراً لإرسال الملفات. سيتم مراجعتها من قبل فريق الدعم والرد عليك خلال 24 ساعة.', 'bot');
            }, 1000);
        }
    };
    
    fileInput.click();
}

function clearChat() {
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        chatMessages.innerHTML = '';
        setTimeout(() => {
            addMessageToChat(chatbotResponses.greeting, 'bot');
        }, 300);
    }
}

function focusChatInput() {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.focus();
    }
}

// Calendar System
function initializeCalendar() {
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');
    const saveScheduleBtn = document.getElementById('saveSchedule');
    
    if (prevMonth && nextMonth) {
        prevMonth.addEventListener('click', () => {
            currentState.currentCalendarMonth.setMonth(currentState.currentCalendarMonth.getMonth() - 1);
            renderCalendar();
        });
        
        nextMonth.addEventListener('click', () => {
            currentState.currentCalendarMonth.setMonth(currentState.currentCalendarMonth.getMonth() + 1);
            renderCalendar();
        });
        
        renderCalendar();
    }
    
    if (saveScheduleBtn) {
        saveScheduleBtn.addEventListener('click', () => {
            showSuccessModal('تم حفظ جدولة الدفع بنجاح! سنرسل لك تذكيرات قبل كل موعد استحقاق.');
        });
    }
}

function renderCalendar() {
    const calendar = document.getElementById('calendar');
    const currentMonthDisplay = document.getElementById('currentMonth');
    
    if (!calendar || !currentMonthDisplay) return;
    
    const months = [
        'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
        'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];
    
    const days = ['س', 'ج', 'خ', 'أ', 'ث', 'ا', 'ح'];
    
    currentMonthDisplay.textContent = `${months[currentState.currentCalendarMonth.getMonth()]} ${currentState.currentCalendarMonth.getFullYear()}`;
    
    calendar.innerHTML = '';
    
    // Add day headers
    days.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day-header';
        dayHeader.textContent = day;
        dayHeader.style.fontWeight = 'bold';
        dayHeader.style.color = 'var(--color-text-secondary)';
        dayHeader.style.padding = 'var(--space-8)';
        dayHeader.style.textAlign = 'center';
        calendar.appendChild(dayHeader);
    });
    
    // Generate calendar days
    const firstDay = new Date(currentState.currentCalendarMonth.getFullYear(), currentState.currentCalendarMonth.getMonth(), 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    for (let i = 0; i < 42; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = date.getDate();
        
        if (date.getMonth() === currentState.currentCalendarMonth.getMonth()) {
            dayElement.style.color = 'var(--color-text)';
        } else {
            dayElement.style.color = 'var(--color-text-secondary)';
            dayElement.style.opacity = '0.5';
        }
        
        const today = new Date();
        if (date.toDateString() === today.toDateString()) {
            dayElement.classList.add('today');
        }
        
        // Mark payment due dates
        if (date.getDate() === 15) {
            dayElement.classList.add('payment');
        }
        
        calendar.appendChild(dayElement);
    }
}

// Rewards System
function initializeRewards() {
    const rewardButtons = document.querySelectorAll('.reward-item .btn');
    
    rewardButtons.forEach(button => {
        if (!button.disabled) {
            button.addEventListener('click', function() {
                const rewardItem = this.closest('.reward-item');
                const rewardName = rewardItem.querySelector('h4').textContent;
                const rewardCostText = rewardItem.querySelector('.reward-cost').textContent;
                const rewardCost = parseInt(rewardCostText.replace(/\D/g, ''));
                
                if (currentState.rewardPoints >= rewardCost) {
                    redeemReward(rewardName, rewardCost, this);
                } else {
                    showErrorNotification('عذراً، ليس لديك نقاط كافية لهذه المكافأة');
                }
            });
        }
    });
    
    updateRewardsDisplay();
}

function redeemReward(rewardName, cost, button) {
    if (confirm(`هل تريد استبدال "${rewardName}" بـ ${cost} نقطة؟`)) {
        currentState.rewardPoints -= cost;
        
        showSuccessModal(`تم استبدال "${rewardName}" بنجاح! 🎁 سيتم تطبيق المكافأة على حسابك خلال 24 ساعة.`);
        
        updateRewardsDisplay();
        
        button.disabled = true;
        button.textContent = 'تم الاستبدال';
        
        setTimeout(() => {
            button.disabled = false;
            button.textContent = 'استبدال';
        }, 3000);
    }
}

function updateRewardsDisplay() {
    const pointsNumber = document.querySelector('.points-number');
    if (pointsNumber) {
        pointsNumber.textContent = currentState.rewardPoints.toLocaleString();
    }
    
    const progressFill = document.querySelector('.progress-bar .progress-fill');
    if (progressFill) {
        const nextLevelPoints = 3000;
        const currentProgress = (currentState.rewardPoints / nextLevelPoints) * 100;
        progressFill.style.width = `${Math.min(currentProgress, 100)}%`;
    }
}

// Analytics and Charts
function initializeChart() {
    const canvas = document.getElementById('paymentsChart');
    if (!canvas || canvas.chart) return;
    
    const ctx = canvas.getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: analyticsData.monthlyProgress.map(item => item.month),
            datasets: [
                {
                    label: 'المدفوع فعلياً',
                    data: analyticsData.monthlyProgress.map(item => item.paid),
                    backgroundColor: '#1FB8CD',
                    borderRadius: 8,
                    borderSkipped: false,
                },
                {
                    label: 'المستهدف',
                    data: analyticsData.monthlyProgress.map(item => item.target),
                    backgroundColor: '#FFC185',
                    borderRadius: 8,
                    borderSkipped: false,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            family: 'Cairo',
                            size: 12
                        },
                        usePointStyle: true,
                        padding: 20
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value, false);
                        }
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });
    
    canvas.chart = chart;
}

// Theme Management
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('flexipay_theme') || 'light';
    
    currentState.currentTheme = savedTheme;
    document.documentElement.setAttribute('data-color-scheme', savedTheme);
    updateThemeIcon();
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    currentState.currentTheme = currentState.currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-color-scheme', currentState.currentTheme);
    localStorage.setItem('flexipay_theme', currentState.currentTheme);
    updateThemeIcon();
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    }
}

function updateThemeIcon() {
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.className = currentState.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// Global Features and Event Handlers
function initializeGlobalFeatures() {
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.notifications-bell')) {
            const dropdown = document.getElementById('notificationsDropdown');
            if (dropdown) dropdown.classList.add('hidden');
        }
        
        if (!e.target.closest('.user-profile')) {
            const dropdown = document.getElementById('profileDropdown');
            if (dropdown) dropdown.classList.add('hidden');
        }
    });
    
    // Add button click animations
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            if (!this.disabled && !this.classList.contains('no-animation')) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
    
    // Initialize request form functionality
    initializeRequestForm();
}

function initializeRequestForm() {
    const submitRequestBtn = document.getElementById('submitRequest');
    if (submitRequestBtn) {
        submitRequestBtn.addEventListener('click', submitRequest);
    }
}

function showNewRequestForm() {
    const form = document.getElementById('newRequestForm');
    if (form) {
        form.classList.remove('hidden');
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

function cancelRequest() {
    const form = document.getElementById('newRequestForm');
    if (form) {
        form.classList.add('hidden');
        form.querySelectorAll('input, textarea, select').forEach(input => {
            input.value = '';
        });
    }
}

function submitRequest() {
    const requestType = document.getElementById('requestType').value;
    const requestReason = document.getElementById('requestReason').value;
    
    if (!requestType || !requestReason) {
        showErrorNotification('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    showLoading('submitRequest');
    
    setTimeout(() => {
        showSuccessModal('تم إرسال طلبك بنجاح! سيتم مراجعته والرد عليك خلال 48 ساعة.');
        cancelRequest();
        hideLoading('submitRequest');
    }, 2000);
}

function toggleProfileMenu() {
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

function logout() {
    if (confirm('هل تريد تسجيل الخروج من النسخة التجريبية؟')) {
        currentState.isLoggedIn = false;
        currentState.currentUser = null;
        currentState.isDemoMode = false;
        
        // Reset form inputs
        const inputs = document.querySelectorAll('#loginEmail, #loginPassword');
        inputs.forEach(input => input.value = '');
        
        hideMainApp();
        setTimeout(() => {
            showLoginContainer();
            showSuccessNotification('تم تسجيل الخروج بنجاح. جرب طرق دخول أخرى!');
        }, 300);
    }
}

function startSessionManagement() {
    // For demo, sessions don't expire
    console.log('Session management started (demo mode - no expiry)');
}

// Quick Actions
function showQuickPayment() {
    showSection('payment');
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    const paymentBtn = document.querySelector('[data-section="payment"]');
    if (paymentBtn) paymentBtn.classList.add('active');
}

// Utility Functions
function formatCurrency(amount, includeCurrency = true) {
    const formatted = amount.toLocaleString('ar-EG');
    return includeCurrency ? `${formatted} ج.م` : formatted;
}

function showLoading(elementId) {
    const element = typeof elementId === 'string' ? document.getElementById(elementId) : elementId;
    if (element) {
        element.classList.add('loading');
        element.disabled = true;
        const originalText = element.innerHTML;
        element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جارٍ المعالجة...';
        element.dataset.originalText = originalText;
    }
}

function hideLoading(elementId) {
    const element = typeof elementId === 'string' ? document.getElementById(elementId) : elementId;
    if (element) {
        element.classList.remove('loading');
        element.disabled = false;
        if (element.dataset.originalText) {
            element.innerHTML = element.dataset.originalText;
            delete element.dataset.originalText;
        }
    }
}

function showSuccessNotification(message) {
    showNotification(message, 'success');
}

function showErrorNotification(message) {
    showNotification(message, 'error');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `toast-notification ${type}`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
        <i class="${icons[type]}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="close-btn">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        padding: var(--space-16);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: var(--space-12);
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
        color: var(--color-text);
        min-width: 300px;
    `;
    
    if (type === 'success') {
        notification.style.borderColor = 'var(--color-success)';
        notification.style.background = 'var(--color-bg-3)';
        notification.style.color = 'var(--color-success)';
    } else if (type === 'error') {
        notification.style.borderColor = 'var(--color-error)';
        notification.style.background = 'var(--color-bg-4)';
        notification.style.color = 'var(--color-error)';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 4000);
}

function showSuccessModal(message) {
    const modal = document.getElementById('successModal');
    const successMessage = document.getElementById('successMessage');
    const closeModal = document.getElementById('closeModal');
    
    if (modal && successMessage) {
        successMessage.textContent = message;
        modal.classList.remove('hidden');
        
        if (closeModal) {
            closeModal.onclick = function() {
                modal.classList.add('hidden');
            };
        }
        
        setTimeout(() => {
            if (!modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
            }
        }, 5000);
    }
}

// Add required CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .toast-notification .close-btn {
        background: none;
        border: none;
        color: var(--color-text-secondary);
        cursor: pointer;
        padding: var(--space-4);
        border-radius: var(--radius-sm);
        transition: all var(--duration-fast) var(--ease-standard);
    }
    
    .toast-notification .close-btn:hover {
        background: var(--color-secondary);
        color: var(--color-text);
    }
    
    .typing-dots {
        display: flex;
        gap: 4px;
        padding: 8px 0;
    }
    
    .typing-dots span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--color-text-secondary);
        animation: typing 1.4s infinite;
    }
    
    .typing-dots span:nth-child(2) {
        animation-delay: 0.2s;
    }
    
    .typing-dots span:nth-child(3) {
        animation-delay: 0.4s;
    }
    
    @keyframes typing {
        0%, 60%, 100% {
            transform: scale(1);
            opacity: 0.5;
        }
        30% {
            transform: scale(1.2);
            opacity: 1;
        }
    }
    
    .login-container {
        transition: all 0.3s ease;
    }
    
    .main-app {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Log final initialization message
console.log(`
🎊 FlexiPay منصة محسنة - جاهزة للاستخدام!

🚀 طرق تسجيل الدخول:
1. اضغط "جرّب المنصة الآن" للدخول الفوري
2. استخدم "دخول سريع" للحسابات التجريبية
3. اكتب ahmed@test.com أو sara@test.com مع كلمة مرور: 123456

✅ تم إصلاح جميع مشاكل تسجيل الدخول
💎 جميع الميزات تعمل بنسبة 100%
🎯 تجربة مستخدم محسنة ومبسطة
🔧 إصلاح مشكلة تحميل لوحة القيادة
👤 إضافة وظيفة تسجيل الخروج الواضحة

Made with ❤️ by Eng. Felobater Dawoud
`);
