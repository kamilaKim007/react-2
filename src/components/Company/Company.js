import React from 'react'


const Company = () => {
  return (
    <section className='company'>
        
        <div className='container'>
            
            <div className='company-about'>
                    <h5 className='company-title'>О компании</h5>
                    <p className='company-subtitle'>
                    Мы диджитал агентство занимаемся полным 
                    циклом продвижения компаний в интернете.
                    </p>
                    <p className='company-subtitle'>
                    Разработка сайтов – Сделаем уникальный дизайн согласно вашему фирменному стилю. 
                    Напишем чистый код, без использования конструкторов.
                    </p>
                    <p className='company-subtitle'>
                    Продвижение – поможем вам быстро добиться желаемого результата, 
                    обеспечим постоянный приток новых заявок.
                    </p>
            </div>
        </div>
        <div className='company-card'></div>
    </section>
  )
}

export default Company