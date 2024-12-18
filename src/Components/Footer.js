import React from 'react';
import './Footer.css'; // Ensure this is the correct path to your CSS file

function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        {/* Contact Information */}
        <div>
          <h3>Contact Us</h3>
          <p>Kirkos Subcity, Dembel City Center Building, 5th Floor</p>
          <p>Addis Ababa, Ethiopia</p>
          <p>Email: info@al-impex.com</p>
          <p>Phone: +251 123 456 789</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/zala">Zala</a></li>
            <li><a href="/wezam">Wezam</a></li>
            <li><a href="/manufacturing">Manufucturing</a></li>
            <li><a href="/contact-Us">Contact</a></li>
      
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.675 0h-21.35C.598 0 0 .598 0 1.325v21.351C0 23.402.598 24 1.325 24H12.82v-9.294H9.692V11.33h3.128V8.775c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.098 2.795.142v3.243h-1.919c-1.504 0-1.794.714-1.794 1.762v2.313h3.587l-.467 3.376h-3.12V24h6.116C23.402 24 24 23.402 24 22.675V1.325C24 .598 23.402 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 4.557a9.94 9.94 0 01-2.828.775 4.92 4.92 0 002.165-2.724 9.86 9.86 0 01-3.127 1.195 4.919 4.919 0 00-8.384 4.482 13.963 13.963 0 01-10.141-5.144 4.89 4.89 0 00-.664 2.475 4.918 4.918 0 002.188 4.096 4.903 4.903 0 01-2.229-.617v.062a4.918 4.918 0 003.946 4.827 4.903 4.903 0 01-2.223.085 4.918 4.918 0 004.6 3.416 9.868 9.868 0 01-6.102 2.104c-.396 0-.786-.023-1.172-.069A13.933 13.933 0 007.557 21c9.054 0 14.002-7.496 14.002-13.986 0-.213-.004-.426-.014-.637A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.23 0H1.77C.792 0 0 .774 0 1.732v20.537C0 23.227.792 24 1.77 24h20.46c.978 0 1.77-.773 1.77-1.731V1.732C24 .774 23.208 0 22.23 0zM7.125 20.452H3.467V9h3.658v11.452zM5.296 7.605a2.138 2.138 0 11.002-4.277 2.138 2.138 0 01-.002 4.277zm14.77 12.847h-3.657v-5.601c0-1.334-.025-3.048-1.855-3.048-1.858 0-2.142 1.448-2.142 2.946v5.703h-3.659V9h3.512v1.561h.051c.489-.927 1.686-1.903 3.471-1.903 3.712 0 4.396 2.444 4.396 5.624v6.17z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-text">
        &copy; 2024 Al-Impex Business PLC. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
