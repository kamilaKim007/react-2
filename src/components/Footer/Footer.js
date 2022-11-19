import React from 'react'
import Ficon from '../../assets/footer/digital flow.svg'
import Flogo1 from '../../assets/footer/22.svg'
import Flogo2 from '../../assets/footer/23.svg'
import Flogo3 from '../../assets/footer/24.svg'
import Flogo4 from '../../assets/footer/25.svg'
import Flogo5 from '../../assets/footer/26.svg'


const Footer = () => {
  return (
    <section className='footer'>
      <div className='container'>
        <div className='inf'>
          <h2 className='inf-title'>Пункт</h2>
          <p className='inf-subtitle'>В своём стремлении улучшить пользовательский опыт 
          мы упускаем, что многие известные личности.</p>
        </div>
        <div className='footer-icons'>
          <img src={Ficon} alt=''/>
          <img src={Flogo1} alt=''/>
          <img src={Flogo2} alt=''/>
          <img src={Flogo3} alt=''/>
          <img src={Flogo4} alt=''/>
          <img src={Flogo5} alt=''/>
        </div>
      </div>
    </section>
  )
}

export default Footer