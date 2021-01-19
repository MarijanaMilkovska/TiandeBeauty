import React from "react";
import { Link } from "react-router-dom";
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Footer = () => {
  return (
    <div className="Footer container-fluid">
      <div className="row lists">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row">
                <div className="col-md-4">
                  <h2>Поврзи се</h2>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/TianDe-Beauty-Health-102140814977880"
                        target="blank"
                      >
                        <i class="fab fa-facebook fa-2x"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/tian_de_beauty_health?igshid=ncohahmyl3zf"
                        target="blank"
                      >
                        <i class="fab fa-instagram fa-2x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h2>Информации</h2>
                  <ul>
                    <li>
                      <Link to="/AboutUs">TianDe Beauty & Health</Link>
                    </li>
                    <li>
                      <Link to="/Shipping">Испорака</Link>
                    </li>
                    <li>
                      <Link to="/Payment">Плаќање</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h2>Правни информации</h2>
                  <ul>
                    <li>
                      <Link to="/Terms">Услуги и правила</Link>
                    </li>
                    <li>
                      <Link to="/Privacy">Политика за приватност</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row copyright">
        <div className="col-md-12">
        <MessengerCustomerChat pageId="102140814977880" appId="417313766063665" />
          <p>
            Copyrights &copy; 2020 <span>TianDe Beauty and Health</span>. All
            rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
