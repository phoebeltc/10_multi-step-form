import styles from './styles.scss';
import bgDesktop from '../../images/bg-sidebar-desktop.svg';
import bgMobile from '../../images/bg-sidebar-mobile.svg';

const Header = () => {
    return <>
        <picture>
            <source srcSet={bgMobile} media="(max-width: 960px)" />
            <img
                srcSet={bgDesktop}
                alt="Background"
            />
        </picture>
    </>
}

export default Header; 