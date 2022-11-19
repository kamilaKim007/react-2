import React from 'react'
import Logo from '../../assets/header/logo.svg'
import BMenu from '../../assets/header/burger-menu.svg'
import Flogo1 from '../../assets/footer/22.svg'
import Flogo2 from '../../assets/footer/23.svg'
import Flogo3 from '../../assets/footer/24.svg'
import Flogo4 from '../../assets/footer/25.svg'
import Flogo5 from '../../assets/footer/26.svg'
const [status, setStatus] = useState(false)

const Header = () => {
  return (
    <section className='header'>
        <div className='container'>
          <div className='header-icons'>
            <img src={Logo} alt=''/>
          </div>
          <div className='header-navigation'>
            <img src={BMenu} alt=''/>
            {/* <input  className='header-toogle-menu' type='checkbox'/> */}
            <div className='header_hamb'></div>
            <ul className='header-navigation_menu'>
              <li className='header-navigation_menu_li'><a className='header-navigation_menu_li_a' href='#'>Главная</a></li>
              <li className='header-navigation_menu_li'><a className='header-navigation_menu_li_a' href='#'>О компании</a></li>
              <li className='header-navigation_menu_li'><a className='header-navigation_menu_li_a' href='#'>Портфолио</a></li>
              <li className='header-navigation_menu_li'><a className='header-navigation_menu_li_a' href='#'>Что мы предлагаем</a></li>
              <li className='header-navigation_menu_li'><a className='header-navigation_menu_li_a' href='#'>Специальное предложение</a></li>
            </ul>
            <button className='header-navigation_button' type='button'>Подать заявку</button>
            <div className='header-navigation_icons'>
          <img src={Flogo1} alt=''/>
          <img src={Flogo2} alt=''/>
          <img src={Flogo3} alt=''/>
          <img src={Flogo4} alt=''/>
          <img src={Flogo5} alt=''/>
        </div>
          </div>
          <div className='web'>
            <h4 className='web-title'>web applications</h4>
            <p className='web-subtitle'>Повседневная практика.</p>
            <button className='web-btn' type='button'>Спец предложение</button>
          </div>
        </div>
    </section>
  )
}

export default Header