import React from "react";
import { Container, Row, Col, Stack, Image, Form, Button } from "react-bootstrap";
import {
  Facebook,
  Twitter,
  YouTube,
  LinkedIn,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";
import gallery1 from "../assets/img/course-1.jpg";
import gallery2 from "../assets/img/course-2.jpg";
import gallery3 from "../assets/img/course-3.jpg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer py-5" data-aos="fade-up"
      data-aos-duration="800"
    >
      <Container fluid className="px-0">
        <Row xs={1} sm={2} md={4} className="g-0 px-5">
          <Col className="px-3" data-aos="fade-right"
            data-aos-delay="100">
            <h5>Quick Link</h5>
            <Stack as="ul" gap={2} className="quick-links list-unstyled">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>FAQs & Help</li>
            </Stack>
          </Col>

          <Col className="px-3 mt-lg-0 mt-md-0 mt-sm-0 mt-3" data-aos="fade-up"
            data-aos-delay="200"
          >
            <h5>Contact</h5>
            <Stack gap={2}>
              <Stack direction="horizontal" gap={2}>
                <LocationOn fontSize="small" />
                <span>123 Street, New York, USA</span>
              </Stack>
              <Stack direction="horizontal" gap={2}>
                <Phone fontSize="small" />
                <span>+012 345 67890</span>
              </Stack>
              <Stack direction="horizontal" gap={2}>
                <Email fontSize="small" />
                <span>info@example.com</span>
              </Stack>

              <Stack direction="horizontal" gap={2} className="social-icons">
                <Facebook />
                <Twitter />
                <YouTube />
                <LinkedIn />
              </Stack>
            </Stack>
          </Col>

          <Col className="px-3 mt-lg-0 mt-md-0 mt-sm-0 mt-3" data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h5>Gallery</h5>
            <Row xs={3} className="g-2">
              {[gallery1, gallery2, gallery3, gallery2, gallery3, gallery1].map(
                (img, i) => (
                  <Col key={i}>
                    <Image src={img} fluid rounded />
                  </Col>
                )
              )}
            </Row>
          </Col>

          <Col className="px-3 mt-lg-0 mt-md-0 mt-sm-0 mt-3" data-aos="fade-left"
            data-aos-delay="400"
          >
            <h5>Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <Stack direction="horizontal" gap={2}>
              <Form.Control type="email" placeholder="Your email" />
              <Button className="newsletter-btn">SignUp</Button>
            </Stack>
          </Col>
        </Row>

        <Row xs={1} md={2} className="g-0 mt-4 px-5" data-aos="fade-up"
          data-aos-delay="500"
        >
          <Col className="px-3 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
            <p className="mb-0">
              © Your Site Name, All Right Reserved. Designed By HTML Codex
            </p>
          </Col>
          <Col className="px-3 text-md-end">
            <p className="mb-0">Home | Cookies | Help | FAQ</p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
}
