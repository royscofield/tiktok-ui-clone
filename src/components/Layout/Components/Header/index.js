import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEllipsisVertical,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '../../../../assets/images/index';
import { Wrapper as PopperWrapper } from '../../../Popper';
import Button from '../../../Button';
import AccountItem from '../../../AccountItem';
import Menu from '../../../Popper/Menu/index';
import {
    MessageIcon,
    InboxIcon,
    SearchIcon,
    ProfileIcon,
    CoinIcon,
    SettingIcon,
    LanguageIcon,
    FeedbackIcon,
    KeyboardIcon,
    LogoutIcon,
} from '../../../Icons/index';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

const currentUserMenu = [
    {
        icon: <ProfileIcon />,
        title: 'View profile',
        to: '/cht',
    },
    {
        icon: <CoinIcon />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                        {/* loading ... */}
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 100]}
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx('icon')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 100]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('icon')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                text
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? currentUserMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <img
                                className={cx('current-user-logo')}
                                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/281833212_750298806154393_8865792997063012852_n.jpg?stp=dst-jpg_p403x403&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Z_uED0owxXwAX9Mybga&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLFU8bkq5V5wX-AER6xU0t8Y6-e_FBWBJ0UQ4c3ornLYg&oe=62C4FCC1"
                                alt="cao hoang thien"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
