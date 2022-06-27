import Tippy from '@tippyjs/react/headless';
import 'tippy.js/animations/scale-subtle.css';
import { Wrapper as PopperWrapper } from '../../Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            //delay tippy
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() =>
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1),
                                    )
                                }
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            //back to start when not hover
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}
export default Menu;
