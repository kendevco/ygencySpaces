import Link from 'next/link'

const PageNotFound = () => {
  return (
    <section
      className='error-section pt-220 rpt-120 pb-100 rpb-80 rel z-1'
      style={{ backgroundImage: 'url(assets/images/hero/hero-two-bg.png)' }}>
      <div className='container-1290 container'>
        <div className='row align-items-center'>
          <div className='col-lg-5'>
            <div className='error-content rmb-55 wow fadeInRight delay-0-2s'>
              <h1>OPPS!</h1>
              <div className='section-title mb-50 rmb-35'>
                <h2>This Page Are Cant Be Found</h2>
              </div>
              <Link legacyBehavior href='/'>
                <a className='theme-btn style-two'>
                  Go to Home <i className='far fa-arrow-right' />
                </a>
              </Link>
              {/* <div className='social-style-four d-flex rmt-35 mt-60'>
                <a href='#'>
                  <i className='fab fa-facebook-f' /> <span>Facebook</span>
                </a>
                <a href='#'>
                  <i className='fab fa-twitter' /> <span>Twitter</span>
                </a>
                <a href='#'>
                  <i className='fab fa-dribbble' /> <span>Dribbble</span>
                </a>
              </div> */}
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='error-image wow zoomIn delay-0-2s'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='assets/images/background/404-error.png'
                alt='404 Error'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default PageNotFound
