import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_copyright">
        <span>&copy; 2022 SoftSuite. All rights reserved.</span>
      </div>
      <div className="footer_contact">
        <span>
          <a href="mailto:support@softsuite.com">support@softsuite.com</a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
