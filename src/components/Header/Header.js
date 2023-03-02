import styles from './styles.scss';
import bgDesktop from '../../images/bg-sidebar-desktop.svg';
import bgMobile from '../../images/bg-sidebar-mobile.svg';

const Header = () => {
    return <>
    <div className='header'>
        <picture>
            <source srcSet={bgMobile} media="(max-width: 960px)" />
            <img
                srcSet={bgDesktop}
                alt="Background"
            />
        </picture>
        <div className='header-container'>
            {/* <div className='header-procedure'> */}
                <div className='header-step-icon active'>
                    <span>1</span>
                </div>
                <div className='header-step-icon'>
                    <span>2</span>
                </div>
                <div className='header-step-icon'>
                    <span>3</span>
                </div>
                <div className='header-step-icon'>
                    <span>4</span>
                </div>
            {/* </div> */}
        </div>
    </div>
    
    </>
}

export default Header; 