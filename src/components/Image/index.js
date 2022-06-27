import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import image from '../../assets/images/index'

const cx = classNames.bind(styles)

function Image( {src, alt, className, fallback: customFallback = image.noImage, ...props },ref) {
    const [fallback, setFallback] = useState('')
    const handleError = () => {
        setFallback(customFallback)
    }
    return (
            <img 
                className={cx('wrapper', className)}
                ref={ref}
                alt={alt}
                src={fallback ||src}
                {...props}
                onError={handleError}
            />
    );
}

export default forwardRef(Image);
