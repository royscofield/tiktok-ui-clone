import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image/index';
import Data from '../Layout/Components/Search/Data.json';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            {Data.map((info) => (
                <>
                    <Image
                        className={cx('avatar')}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/281833212_750298806154393_8865792997063012852_n.jpg?stp=dst-jpg_p403x403&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Z_uED0owxXwAX9Mybga&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLFU8bkq5V5wX-AER6xU0t8Y6-e_FBWBJ0UQ4c3ornLYg&oe=62C4FCC1"
                        alt="avatar"
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('name')} key={info.id}>
                            <span>{info.name}</span>
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            />
                        </h4>
                        <span className={cx('username')}>{info.username}</span>
                    </div>
                </>
            ))}
        </div>
    );
}

export default AccountItem;
