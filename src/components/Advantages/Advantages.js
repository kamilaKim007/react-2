import React from 'react'
import {advantagesData} from '../../data2/advantagesData'

const Advantages = () => {
  return (
    <section className='advantages'>
        <div className='container'>
            <h2 className='advantages-title'>Наши преимущества</h2>
            <div className='advantages-row'>
                {
                    advantagesData.map((item) => (
                        <div className='advantages-card'>
                            <img src={item.icon} alt=''/>
                            <h8 className='advantages-card-text'>{item.text}</h8>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Advantages