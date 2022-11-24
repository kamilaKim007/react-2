import Logo from '../../assets/header/logo.svg'
import BMenu from '../../assets/header/burger-menu.svg'
import logo1 from '../../assets/header/22.svg'
import logo2 from '../../assets/header/23.svg'
import logo3 from '../../assets/header/24.svg'
import logo4 from '../../assets/header/25.svg'
import logo5 from '../../assets/header/26.svg'
import React, {useState} from 'react'

const Header = () => {

  const[show, ShowState] = useState(false)

  return (  
    <header className='header'>
      <div className='container'>
      {show && <div className='header-burger'>
        <div className='container'>
            <ul className='header-menu'>
              <li className='header-menu-li'>Главная</li>
              <li className='header-menu-li'>О компании</li>
              <li className='header-menu-li'>Портфолио</li>
              <li className='header-menu-li'>Что мы предлагаем</li>
              <li className='header-menu-li'>Специальное предложение </li>
            </ul>
            <button className='header-button' type='button'>Оставить заявку</button>
            <ul className='icons'>
              <li><img src={logo1}/></li>
              <li><img src={logo2}/></li>
              <li><img src={logo3}/></li>
              <li><img src={logo4}/></li>
              <li><img src={logo5}/></li>
            </ul>
        </div>
        </div>
      }

             
        
          <div className='header-icons'>
          <img src={Logo} alt=''/>
          <img src={BMenu} onClick={() => ShowState(!show)}/>
          </div>
          
          <div className='web'>
            <h2 className='web-title'>web applications</h2>
            <p className='web-p'>Повседневная практика.</p>
            <button className='web-btn' type='button'><a className='web-a' href='#'>Спец предложение</a></button>
          </div>
        </div>
        
    </header> 
  )
}

export default Header