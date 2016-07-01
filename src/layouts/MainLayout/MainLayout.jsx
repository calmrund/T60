import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './MainLayout.less';
import Slider from '../../components/slider/slider.jsx'
import logoUrl from './logo.png';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>

      <div className={styles.side}>
        <h2 className={styles.logotitle}>
          <img className={styles.logo} title="logo" src={logoUrl} />物探公司集成平台
        </h2>
        <Slider />
      </div>

      <div className={styles.content}>

        <div className={styles.head}>
          <h1>Platform</h1>
        </div>

        <div className={styles.main}>
          {children}
        </div>

      </div>

    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
