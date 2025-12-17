import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Twitter, YouTube, LinkedIn, LocationOn, Phone, Email } from "@mui/icons-material";
import gallery1 from '../assets/img/course-1.jpg';
import gallery2 from '../assets/img/course-2.jpg';
import gallery3 from '../assets/img/course-3.jpg';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="mb-4">
          {/* Quick Links */}
          <Col md={3} sm={6} className="mb-3">
            <h5>Quick Link</h5>
            <ul className="quick-links list-unstyled">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>FAQs & Help</li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3} sm={6} className="mb-3">
            <h5>Contact</h5>
            <p><LocationOn /> 123 Street, New York, USA</p>
            <p><Phone /> +012 345 67890</p>
            <p><Email /> info@example.com</p>
            <div className="social-icons mt-2">
              <Facebook />
              <Twitter />
              <YouTube />
              <LinkedIn />
            </div>
          </Col>

          {/* Gallery */}
          <Col md={3} sm={6} className="mb-3">
            <h5>Gallery</h5>
            <div className="gallery-grid">
              <img src={gallery1} alt="gallery" />
              <img src={gallery2} alt="gallery" />
              <img src={gallery3} alt="gallery" />
              <img src={gallery2} alt="gallery" />
              <img src={gallery3} alt="gallery" />
              <img src={gallery1} alt="gallery" />
            </div>
          </Col>

          {/* Newsletter */}
          <Col md={3} sm={6} className="mb-3">
            <h5>Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button>SignUp</button>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "#444" }} />

        <Row className="pt-3">
          <Col md={6} sm={12}>
            <p>© Your Site Name, All Right Reserved. Designed By HTML Codex</p>
          </Col>
          <Col md={6} sm={12} className="text-md-end">
            <p>Home | Cookies | Help | FAQ</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
