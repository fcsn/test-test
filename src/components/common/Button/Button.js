import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => (<button {...rest}>{children}</button>)

const Button = ({children, to, disabled}) => {
    const Element = (to && !disabled) ? Link : Div;
    return (
            <Element to={to} className={cx('btn', {disabled})}>
                {children}
            </Element>
        )
}

export default Button;


