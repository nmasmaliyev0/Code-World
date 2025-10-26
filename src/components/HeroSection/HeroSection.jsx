import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='hero-content'>
          <div className='hero-headline'>
            <h1>Bizimlə təhsildə yeniliyə doğru addım at!</h1>
          </div>

          <div className='hero-info'>
            <h4 className='hero-subtitle'>Axtardığın ixtisaslar burda</h4>

            <div className='hero-list'>
              <p>Qrafik Dizayn</p>
              <p>UX/UI design</p>
              <p>Frontend proqramlaşdırma</p>
              <p>Backend proqramlaşdırma</p>
              <p>Data Analitika</p>
            </div>
          </div>
        </div>

        <div className='hero-btn-container'>
          <button className='hero-btn'>Bizə qoşul</button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection