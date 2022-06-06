import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images/index'


const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt='TikTok' />
            </div>
        </div>
    );
}

export default Header;
