AUTHOR Name: Mahiyat Subha Monami
# Payment Checkout Form 
## Version 1.0.0

=============================================
TABLE OF CONTENTS
=============================================
1. DESCRIPTION
2. FEATURES
3. FILE STRUCTURE
4. INSTALLATION
5. DEPENDENCIES
6. CUSTOMIZATION
7. BROWSER SUPPORT
8. FAQ
9. CHANGELOG
10. CREDITS
11. LICENSE
12. SUPPORT

=============================================
1. DESCRIPTION
=============================================

Payment Checkout Form is a modern, interactive payment form with a realistic 
credit card UI that updates in real-time as users type. Perfect for e-commerce 
websites, payment gateways, and checkout pages.

Demo: Open the 'demo' folder to see preview.png

=============================================
2. FEATURES
=============================================

 Interactive Card - Real-time credit card preview with flip animation
 Card Flip - CVV input triggers card flip to show back
 Card Detection - Auto-detects Visa, Mastercard, Amex
 Intl Phone Input - Country selection with dial codes
 Numbers Only - Phone input accepts only numeric values
 Auto Formatting - Card numbers & expiry auto-format
 Validation - Visual feedback for invalid inputs
 Toast Notifications - Success message popup
 Mobile Responsive - Works perfectly on all devices

=============================================
3. FILE STRUCTURE
=============================================

template/
│
├── index.html              # Main HTML file
├── style.css               # All styling
├── script.js               # JavaScript functionality
├── README.txt              # This file
│
└── demo/                    # Demo assets
    └── preview.png          # Preview image

=============================================
4. INSTALLATION
=============================================

METHOD 1: Direct Download
-------------------------
1. Download the package from ThemeForest
2. Extract the ZIP file
3. Upload to your server or open locally
4. Open index.html in your browser

METHOD 2: Manual Setup
----------------------
Create these files in your project folder:

your-project/
├── index.html
├── style.css
└── script.js

Copy the code from source files into each.

=============================================
5. DEPENDENCIES
=============================================

Add these to your HTML <head> section:

-----------------------------------------------------------------
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Font Awesome 6 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- International Phone Input CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css">
-----------------------------------------------------------------

Add these before closing </body> tag:

-----------------------------------------------------------------
<!-- International Phone Input JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>

<!-- Your custom script -->
<script src="script.js"></script>
-----------------------------------------------------------------

=============================================
6. CUSTOMIZATION
=============================================

A. Change Colors (in style.css)
-------------------------------
Find the :root section and modify:

:root {
    --primary: #4f46e5;        /* Main theme color */
    --primary-hover: #4338ca;   /* Hover state */
    --bg-color: #f3f4f6;        /* Page background */
    --text-dark: #1f2937;       /* Dark text */
    --text-light: #6b7280;      /* Light text */
}

B. Add More Card Types (in script.js)
-------------------------------------
Extend the detection function:

const re = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    amex: /^3[47]/,
    discover: /^6011|^65|^64[4-9]/,  // Add Discover
    jcb: /^35/,                       // Add JCB
    diners: /^3(?:0[0-5]|[68])/       // Add Diners Club
};

C. Phone Validation (Numbers Only)
----------------------------------
Add this to script.js:

phoneInput.addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

D. Modify Form Fields
---------------------
Add new fields in index.html:

<div class="form-group full-width">
    <label for="newField">New Field</label>
    <div class="input-wrapper">
        <i class="fa-regular fa-icon icon"></i>
        <input type="text" id="newField" placeholder="Enter value">
    </div>
</div>

=============================================
7. BROWSER SUPPORT
=============================================

Browser         Version         Support
----------------------------------------
Chrome          60+              Full
Firefox         55+              Full
Safari          12+              Full
Edge            79+              Full
Opera           50+              Full
Internet Exp.   11               Limited*

*Internet Explorer has limited CSS Grid and Flexbox support. 
Consider adding polyfills for IE support.

=============================================
8. FAQ
=============================================

Q: Is this a complete payment solution?
A: No, this is a frontend template. You need backend integration 
   (like Stripe, PayPal, etc.) for actual payment processing.

Q: Can I use this on multiple projects?
A: Yes, with your ThemeForest Standard License.

Q: How do I change the success message?
A: Edit the showToast() function in script.js:

   function showToast() {
       toast.classList.add('show');
       setTimeout(() => {
           toast.classList.remove('show');
       }, 3000); // Change duration here
   }

Q: Does it work with all payment gateways?
A: Yes, it's just the UI layer. Integrate with any payment API.

Q: How do I make the phone input required?
A: The phone input already has the 'required' attribute in HTML.

Q: Can I remove the phone input?
A: Yes, simply delete that form-group section from HTML.

=============================================
9. CHANGELOG
=============================================

Version 1.0.0 (February 13, 2026)
---------------------------------
- Initial release
- Interactive credit card UI
- Real-time form updates
- International phone input
- Form validation
- Responsive design
- Toast notifications
- Numbers-only phone validation
- Card flip animation
- Card brand detection (Visa, MC, Amex)

=============================================
10. CREDITS
=============================================

Resources Used:
--------------
- Font Awesome 6 - Icons (https://fontawesome.com)
- Google Fonts - Inter Font (https://fonts.google.com)
- intl-tel-input - Phone input library (https://github.com/jackocnr/intl-tel-input)
- ipapi.co - GeoIP lookup service (https://ipapi.co)

=============================================
11. LICENSE
=============================================

This item is licensed under ThemeForest Standard License.

Use in personal and commercial projects 
Modify as needed
Resell or redistribute
Include in freebies

For full license details, visit:
https://themeforest.net/licenses/standard

=============================================
12. SUPPORT
=============================================

For support, questions, or customizations:

Email: s.m.mahi8925@gmail.com
Website: https://signature.monamidigitalhub.com/
Support Hours: Monday - Friday, 9AM - 6PM EST

=============================================
THANK YOU!
=============================================

Thank you for purchasing the Payment Checkout Form!

If you enjoy this item, please leave a 5-star rating on ThemeForest.
Your support helps us create more awesome products!
&copy; 2026 Payment Checkout Form. All rights reserved.
Version 1.0.0 | Last Updated: February 13, 2026

=============================================
