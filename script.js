
// --- 1. DOM Elements ---
const cardObject = document.getElementById('cardObject');
const displayCardNumber = document.getElementById('displayCardNumber');
const displayName = document.getElementById('displayName');
const displayExpiry = document.getElementById('displayExpiry');
const displayCvv = document.getElementById('displayCvv');
const cardBrandLogo = document.getElementById('cardBrandLogo');
const paymentForm = document.getElementById('paymentForm');
const submitBtn = document.getElementById('submitBtn');
const toast = document.getElementById('toast');

// --- 2. International Phone Input Setup ---
const phoneInput = document.getElementById("phone");
const iti = window.intlTelInput(phoneInput, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    separateDialCode: true,
    preferredCountries: ['us', 'gb', 'ca', 'au', 'in'],
    initialCountry: "auto",
    geoIpLookup: function (callback) {
        fetch("https://ipapi.co/json")
            .then(res => res.json())
            .then(data => callback(data.country_code))
            .catch(() => callback("us"));
    }
});

// FIX: Numbers only for phone input
phoneInput.addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

// Prevent non-numeric keypress
phoneInput.addEventListener('keypress', function (e) {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!/[0-9]/.test(keyValue)) {
        e.preventDefault();
    }
});

// --- 3. Interactive Card Logic ---

// Card Type Detection (Visa, Mastercard, Amex, etc.)
function detectCardType(number) {
    const re = {
        visa: /^4/,
        mastercard: /^5[1-5]/,
        amex: /^3[47]/
    };

    if (re.visa.test(number)) {
        cardBrandLogo.className = 'fa-brands fa-cc-visa';
        return 'visa';
    } else if (re.mastercard.test(number)) {
        cardBrandLogo.className = 'fa-brands fa-cc-mastercard';
        return 'mastercard';
    } else if (re.amex.test(number)) {
        cardBrandLogo.className = 'fa-brands fa-cc-amex';
        return 'amex';
    } else {
        cardBrandLogo.className = 'fa-brands fa-cc-visa'; // Default fallback
        return 'unknown';
    }
}

// Input: Card Number
document.getElementById('cardNumber').addEventListener('input', function (e) {
    let value = this.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');

    // Detect type
    detectCardType(value);

    // Format with spaces
    let formatted = '';
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formatted += ' ';
        }
        formatted += value[i];
    }
    this.value = formatted;

    // Update Visual Card
    displayCardNumber.textContent = formatted || '#### #### #### ####';
});

// Input: Full Name
document.getElementById('fullName').addEventListener('input', function (e) {
    displayName.textContent = this.value.toUpperCase() || 'YOUR NAME';
});

// Input: Expiry Date
document.getElementById('expiryDate').addEventListener('input', function (e) {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    this.value = value;
    displayExpiry.textContent = value || 'MM/YY';
});

// Input: CVV (Flip Card Interaction)
const cvvInput = document.getElementById('cvv');

cvvInput.addEventListener('focus', function () {
    cardObject.classList.add('is-flipped'); // Show back
});

cvvInput.addEventListener('blur', function () {
    cardObject.classList.remove('is-flipped'); // Show front
});

cvvInput.addEventListener('input', function (e) {
    // Mask visual CVV
    let value = this.value.replace(/[^0-9]/g, '');
    this.value = value;
    displayCvv.textContent = value ? '*'.repeat(value.length) : '***';
});

// Input: Phone Formatting (Basic)
phoneInput.addEventListener('input', function () {
    // intl-tel-input handles much of this, but we ensure only numbers in main field logic if needed
    // Currently, we rely on the library's internal formatting for best results
});

// --- 4. Validation & Submission ---

function validateForm() {
    let isValid = true;

    // Simple validation logic for demo purposes
    const inputs = paymentForm.querySelectorAll('input');

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('invalid');
            isValid = false;
        } else {
            input.classList.remove('invalid');
        }

        // Remove error on input
        input.addEventListener('input', () => {
            input.classList.remove('invalid');
        });
    });

    return isValid;
}

paymentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateForm()) {
        // Shake animation for visual feedback
        paymentForm.style.transform = "translateX(5px)";
        setTimeout(() => { paymentForm.style.transform = "translateX(-5px)"; }, 100);
        setTimeout(() => { paymentForm.style.transform = "translateX(0)"; }, 200);
        return;
    }

    // Simulate Processing
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
    submitBtn.style.opacity = '0.8';
    submitBtn.disabled = true;

    setTimeout(() => {
        // Success State
        submitBtn.innerHTML = originalBtnText;
        submitBtn.style.opacity = '1';
        submitBtn.disabled = false;

        showToast();

        // Reset Form
        paymentForm.reset();
        displayCardNumber.textContent = '#### #### #### ####';
        displayName.textContent = 'YOUR NAME';
        displayExpiry.textContent = 'MM/YY';
        displayCvv.textContent = '***';
        cardBrandLogo.className = 'fa-brands fa-cc-visa';
    }, 2000);
});

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

