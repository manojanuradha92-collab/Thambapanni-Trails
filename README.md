# 🏔️ Thambapanni Trails - Sri Lanka Tourism Website

A professional, visually stunning travel and tourism website for **Thambapanni Trails**, showcasing the natural beauty, cultural heritage, and hidden gems of Sri Lanka.

## 🌟 Features

### Core Features
- **Professional Navigation Bar** - Sticky navbar with smooth scrolling and mobile responsiveness
- **Hero Section** - Compelling headline with dual call-to-action buttons
- **Featured Destinations** - 6 curated destination cards with descriptions and duration info
- **Tour Packages** - 3 professional package options (Classic, Adventure Explorer, Ultimate Indulgence) with pricing and ratings
- **Why Choose Us** - 6 key benefits with attractive feature boxes
- **About Section** - Company information with impressive statistics
- **Customer Testimonials** - 5-star reviews from satisfied travelers
- **Contact Section** - Multiple contact methods with contact form
- **Newsletter Subscription** - Email subscription for promotions and updates
- **Professional Footer** - Links, social media, and company information

### Interactive Features
- **Modal Windows** - 
  - "Book Your Adventure" modal for direct bookings
  - "Plan Your Custom Trip" modal for custom itinerary requests
- **Form Validation** - Email, phone, and text validation with error messages
- **Toast Notifications** - Success and error messages with auto-dismiss
- **Mobile Menu** - Responsive hamburger menu for mobile devices
- **Smooth Animations** - CSS animations and transitions throughout
- **Scroll Effects** - Dynamic navbar shadow on scroll
- **Intersection Observer** - Scroll-triggered animations

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with Grid, Flexbox, and animations
- **Vanilla JavaScript** - No frameworks required
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
Thambapanni-Trails/
├── index.html       # Main HTML file
├── styles.css       # Complete styling
├── script.js        # JavaScript functionality
└── README.md        # This file
```

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/manojanuradha92-collab/Thambapanni-Trails.git
```

2. Navigate to the project directory:
```bash
cd Thambapanni-Trails
```

3. Open in a web browser:
- Simply open `index.html` in your favorite web browser
- Or use a local server (recommended):
  ```bash
  # Using Python 3
  python -m http.server 8000
  
  # Using Python 2
  python -m SimpleHTTPServer 8000
  
  # Using Node.js (http-server)
  npx http-server
  ```

4. Visit `http://localhost:8000` in your browser

## 🎨 Customization Guide

### Color Scheme
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #1a4d6d;      /* Main blue */
    --secondary-color: #ff9f1c;    /* Golden orange */
    --accent-color: #2ecc71;       /* Green accent */
    --dark-color: #0f2438;         /* Dark background */
    --light-color: #f8f9fa;        /* Light background */
    --text-color: #333;            /* Text color */
}
```

### Content Updates

**Destinations**: Edit the destination cards in the HTML:
```html
<div class="destination-card">
    <div class="destination-image" style="background: [gradient];">
        [emoji]
    </div>
    <h3>Destination Name</h3>
    <p class="location">Location</p>
    <p class="description">Description text</p>
    <p class="duration">⏱️ Duration</p>
</div>
```

**Packages**: Modify the package cards with your pricing:
```html
<div class="package-card">
    <h3>Package Name</h3>
    <p class="package-duration">Duration</p>
    <div class="package-price">$Price</div>
    <!-- Features list -->
</div>
```

**Contact Information**: Update in both the Contact Section and Footer:
```html
<div class="info-box">
    <h3>📞 Phone</h3>
    <p>+94 (0) YOUR-NUMBER</p>
</div>
```

### Font Customization
Update the font-family in `styles.css`:
```css
body {
    font-family: 'Your Font Family', sans-serif;
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ✅ Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Considerations

### Form Handling
- **Client-side Validation**: Email, phone, and text validation
- **CORS**: If backend is added, ensure proper CORS headers
- **HTTPS**: Always use HTTPS in production
- **Backend Integration**: Forms currently log to console; integrate with backend service

### Recommended Backend Integration
```javascript
// Example: Send form data to server
fetch('/api/bookings', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select main branch as source
4. Site will be available at `https://username.github.io/Thambapanni-Trails`

### Other Platforms
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub repo
- **Traditional Hosting**: Upload all files via FTP/SFTP

## 📈 Future Enhancements

- [ ] Backend integration for form submissions
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Admin dashboard for managing content
- [ ] User authentication system
- [ ] Booking management system
- [ ] Multi-language support (Sinhala, Tamil)
- [ ] Blog/Travel guides section
- [ ] Photo gallery with lightbox
- [ ] Weather integration
- [ ] Map integration (Google Maps)
- [ ] Reviews and ratings system
- [ ] CRM integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Thambapanni Trails**
- Website: [Thambapanni Trails](https://github.com/manojanuradha92-collab/Thambapanni-Trails)
- Contact: info@thambapannitrails.com

## 🙏 Support

If you have any questions or need assistance, please contact us:
- 📧 Email: info@thambapannitrails.com
- 📞 Phone: +94 (0) 112 345 678
- 📍 Address: 123 Galle Road, Colombo 3, Sri Lanka

---

**Discover the Soul of Sri Lanka with Thambapanni Trails** 🏔️🏖️🦁
