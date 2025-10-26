import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <div className='footer-left-logo'>
            <img src="../logo-big.png" alt="logo" />
            <p>Codeworld</p>
          </div>

          <div className='footer-left-section'>
            <h6 className='footer-left-title'>
              İxtisaslar
            </h6>

            <div className='footer-left-links'>
              <p>Qrafik Dizayn</p>
              <p>UX/Uİ Dizayn</p>
              <p>Frontend</p>
              <p>Backend</p>
              <p>Data Analitika</p>
              <p>QA</p>
            </div>
          </div>
        </div>

        <div className='footer-right'>
          <div className='footer-right-socials'>
            <img src="../linkedin-logo.png" alt="linkedin-logo" />
            <img src="../instagram-logo.png" alt="instagram-logo" />
            <img src="../facebook-logo.png" alt="facebook-logo" />
          </div>

          <div className='footer-right-section'>
            <h6 className='footer-right-title'>
              Digər
            </h6>

            <div className='footer-right-links'>
              <a href="#">
                <p>Məxfilik</p>
              </a>
              <p>Bizimlə əlaqə</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;