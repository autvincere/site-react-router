import React from 'react'
import style from './WelcomeBox.module.css';

const WelcomeBox = (props) => {
     const {title, subTitle}= props;

     return (
          <section className={`hero is-info welcome is-small ${style.cuadroBienvenida} ` }>
          <div className="hero-body">
              <div className="container">
                  <h1 className="title">
                     {title}
                  </h1>
                  <h2 className="subtitle">
                  {subTitle}
                  </h2>
              </div>
          </div>
    </section>
     )
}

export default WelcomeBox;