import React from 'react';
import scrollBtnStyle from "./scrollBtn.module.css"

const ScrollBtn = () => {
    const handleScrollBtn = () => {
      window.scrollTo({
          top:0,
          behavior:"smooth"
      })
    }
    return (
        <div className={scrollBtnStyle.btn} onClick={handleScrollBtn}>
            <span>

            </span>
        </div>
    );
};

export default ScrollBtn;