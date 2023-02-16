import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Components
import { listMenu } from '~/constants/menu';
// Css module
import classNames from 'classnames/bind';
import styles from './_MenuMb.module.scss';
const cx = classNames.bind(styles);
function MenuMb() {
  return (
    
      <ul className={cx('wrapper-menu')}>
        {listMenu !== undefined &&
          listMenu.map((menu, index) => {
            return (
              <li className={cx('item', `${menu.chidrent ? 'after' : ''}`)} key={index}>
                <Link to={menu.link}>{menu.name}</Link>
                {menu.chidrent && (
                  <ul className={cx('wrapper-menu__children')}>
                    {menu.chidrent !== undefined &&
                      menu.chidrent.map((item, i) => {
                        return (
                          <li key={i} className={cx('item-children')}>
                            {item.name}
                          </li>
                        );
                      })}
                  </ul>
                )}
              </li>
            );
          })}
      </ul>
    
  );
}

export default MenuMb;
