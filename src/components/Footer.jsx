function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* LEFT */}
        <div className="footer-section">
          <h2 className="footer-logo">PressMart</h2>
          <p>
             UrbanStyles is a modern Shopping site, 
             Get Branded Products at best deals
          </p>
        </div>

        {/* MIDDLE */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: pvrushabh@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Mumbai, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 UrbanStyles | VJ
      </div>
    </footer>
  );
}

export default Footer;
