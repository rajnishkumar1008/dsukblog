import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Formpop from './Formpop';
const ScrollPopupModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setIsVisible(true);
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    const hasClosedPopup = Cookies.get('hasClosedPopup');
    if (!hasClosedPopup) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    Cookies.set('hasClosedPopup', true);
  };

  return (
    <>
      {isVisible && (
       <>
        <div className="backdrop-mod">
<div className="popup-cust">
          <div className="content">
            <h3>Schedule a FREE No Obligation Discussion With Us!</h3>
            <button className='bbt' onClick={handleClose}><span aria-hidden="true">×</span></button>
            <Formpop />
          </div>
        </div>
        </div>
       </>
        
      )}
    </>
  );
};

export default ScrollPopupModal;
