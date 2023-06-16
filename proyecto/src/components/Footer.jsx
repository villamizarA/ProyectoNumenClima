import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="siguenos">
                <p>Síguenos en:</p>
                </div>
                <div className="social">
                    <div>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook">Facebook</i>
                            <img className="redes" src="https://cdn.icon-icons.com/icons2/1645/PNG/512/facebook_109862.png" alt="" ></img>
                        </a>
                     </div>
                     <div>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter">Twitter</i>
                            <img className="redes" src="https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579542-yumminkysocialmedia22_83078.png" alt=""></img>
                        </a>
                        </div>
                        <div>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram">instagram</i>
                            <img className="redes" src=" https://cdn.icon-icons.com/icons2/1645/PNG/512/instagam_109863.png" alt=""></img>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;