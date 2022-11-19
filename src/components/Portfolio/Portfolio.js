import React from 'react'
import Scroll from '../../assets/company/scroll.png'

const Portfolio = () => {
  return (
    <section className='portfolio'>
        <div className='container'>
            <h6 className='portfolio-title'>Портфолио</h6>
            <div className='portfolio-card'></div>
            <div className='portfolio-scroll'>
                <img src={Scroll} alt=''/>
            </div>
            <button className='portfolio-btn' type='button'>
            Перейти на сайт
            </button>
        </div>
    </section>
  )
}
export default Portfolio