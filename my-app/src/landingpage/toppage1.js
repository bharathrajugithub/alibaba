import React from 'react';
import eugeneTrigubaImage from '../image/eugene.jpg';
import logoImage from '../image/Alibaba-Logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { InputText } from 'primereact/inputtext';

function Toppage1() {
  const backgroundStyle = {
    backgroundImage: `url(${eugeneTrigubaImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    position: "relative",
  };

  const navStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    zIndex: 1,
  };

  const navItemStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 28px",
  };

  const logoStyle = {
    width: "200px",
    height: "auto",
  };

  const textOverlayStyle = {
    position: "absolute",
    bottom: "2%",
    left: "6%",
    color: "#fff",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "left",
    zIndex: 2,
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
    maxWidth: "65%",
    marginBottom: "1%",
  };

  const searchBarContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    borderRadius: '30px',
    height: '56px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  };

  const inputStyle = {
    flex: 1,
    padding: '10px 20px',
    border: 'none',
    borderRadius: '30px 0 0 30px',
    outline: 'none',
    fontSize: '1rem',
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '125px',
    height: '48px',
    borderRadius: '100px',
    background: '#ff6a00',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    lineHeight: '20px',
    marginRight: '4px',
  };

  const searchIconStyle = {
    fontSize: '24px',
    color: '#222',
    cursor: 'pointer',
    margin: '0 12px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '0 22px',
    width: '100%',
    overflow: 'hidden',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
    marginTop: '32px',
  };

  return (
    <div style={backgroundStyle}>
      <div style={navStyle}>
        <img src={logoImage} alt="Logo" style={logoStyle} />
        <nav>
          <a href="#home" style={navItemStyle}>Delivery to: 572117, IN</a>
          <a href="#about" style={navItemStyle}><i className="fas fa-globe" style={{ fontSize: "1.2rem" }}></i></a>
          <a href="#contact" style={navItemStyle}><i className="fas fa-user" style={{ fontSize: "1.2rem" }}></i></a>
          <a href="#signup" style={navItemStyle}>
            <button style={{ padding: "10px", backgroundColor: "#FF6A00", color: "white", border: "none", borderRadius: "50px", marginRight: '10px' }}>Sign up</button>
          </a>
        </nav>
      </div>

      <div style={textOverlayStyle}>
        <div style={{ fontSize: "1rem", display: 'flex', marginBottom: '80px', fontWeight: "normal", justifyContent: 'space-between', width: '130%' }}>
          <div style={{ display: 'flex' }}>
            <p style={{ marginRight: '26px' }}>All categories</p>
            <p style={{ marginRight: '26px' }}>Featured selections</p>
            <p style={{ marginRight: '26px' }}>Trade Assurance</p>
          </div>
          <div style={{ display: 'flex' }}>
            <p style={{ marginRight: '26px' }}>Buyer Central</p>
            <p style={{ marginRight: '26px' }}>Help Center</p>
            <p style={{ marginRight: '26px' }}>Get the app</p>
            <p>Become a supplier</p>
          </div>
        </div>

        <p style={{ fontSize: "20px" }}><i className="fa-solid fa-circle-play" style={{ fontSize: "1.2rem" }}></i> Learn about Alibaba.com</p>
        The leading B2B ecommerce platform for
        <br />
        global trade

        {/* Search Bar */}
        <div style={searchBarContainerStyle}>
          <input
            type="text"
            placeholder="Search..."
            style={inputStyle}
          />
          <div style={searchIconStyle}><i className="fa-light fa-camera"></i></div>
          <button style={buttonStyle}>
            <i className="fas fa-search" style={{ fontSize: '16px', marginRight: '18px' }}></i>
            <span>Search</span>
          </button>
        </div>

        {/* Bottom Recommendations */}
        <div className="bottom-recommend-wrap" style={containerStyle}>
          <span style={{ fontSize: '16px' }}>Frequently searched:</span>
          <a
            className="keyword"
            href="https://www.alibaba.com/trade/search?spm=a2700.product_home_newuser.home_new_user_first_screen_fy23_pc_search_bar.bottomItem_pos_0&amp;tab=all&amp;SearchText=i+phone+15+pro+max"
            style={{
              color: 'white',
              margin: '0 12px',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '20px',
              borderRadius: '50px',
              padding: '4px 8px',
              border: '1px solid white',
              display: 'inline-block',
              textAlign: 'center',
              textDecoration: 'none',
              verticalAlign: 'middle',
              transition: 'all 0.3s ease',
            }}
          >
            i phone 15 pro max
          </a>
          <a
            className="keyword"
            href="https://www.alibaba.com/trade/search?spm=a2700.product_home_newuser.home_new_user_first_screen_fy23_pc_search_bar.bottomItem_pos_1&amp;tab=all&amp;SearchText=samsung+s24+ultra"
            style={{
              color: 'white',
              margin: '0 12px',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '20px',
              borderRadius: '50px',
              padding: '4px 8px',
              border: '1px solid white',
              display: 'inline-block',
              textAlign: 'center',
              textDecoration: 'none',
              verticalAlign: 'middle',
              transition: 'all 0.3s ease',
            }}
          >
            samsung s24 ultra
          </a>
          <a
            className="keyword"
            href="https://www.alibaba.com/trade/search?spm=a2700.product_home_newuser.home_new_user_first_screen_fy23_pc_search_bar.bottomItem_pos_2&amp;tab=all&amp;SearchText=t+shirt"
            style={{
              color: 'white',
              margin: '0 12px',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '20px',
              borderRadius: '50px',
              padding: '4px 8px',
              border: '1px solid white',
              display: 'inline-block',
              textAlign: 'center',
              textDecoration: 'none',
              verticalAlign: 'middle',
              transition: 'all 0.3s ease',
            }}
          >
            t shirt
          </a>
          <a
            className="keyword"
            href="https://www.alibaba.com/trade/search?spm=a2700.product_home_newuser.home_new_user_first_screen_fy23_pc_search_bar.bottomItem_pos_3&amp;tab=all&amp;SearchText=shoes"
            style={{
              color: 'white',
              margin: '0 12px',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '20px',
              borderRadius: '50px',
              padding: '4px 8px',
              border: '1px solid white',
              display: 'inline-block',
              textAlign: 'center',
              textDecoration: 'none',
              verticalAlign: 'middle',
              transition: 'all 0.3s ease',
            }}
          >
            shoes
          </a>
        </div>
      </div>

      {/* Add style tag for hover effect and responsive design */}
      <style>
        {`
          .keyword {
            color: white;
            margin: 0 12px;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            border-radius: 50px;
            padding: 4px 8px;
            border: 1px solid white;
            display: inline-block;
            text-align: center;
            text-decoration: none;
            vertical-align: middle;
            transition: all 0.3s ease;
          }

          .keyword:hover {
            background-color: rgba(58, 54, 53, 0.7); /* Dark color with transparency */
          }

          @media (max-width: 768px) {
            .bottom-recommend-wrap {
              flex-direction: column;
              align-items: center;
              padding: 0 10px;
            }

            .keyword {
              margin: 8px 0;
              font-size: 12px;
              padding: 6px 12px;
            }

            .text-overlay {
              font-size: 1.5rem;
              max-width: 90%;
              margin-bottom: 2%;
            }

            .search-bar-container {
              flex-direction: column;
              align-items: stretch;
            }

            .search-bar-container input {
              border-radius: 30px;
              margin-bottom: 10px;
            }

            .search-bar-container button {
              width: 100%;
              border-radius: 30px;
            }
          }

          @media (max-width: 480px) {
            .nav-style {
              flex-direction: column;
              align-items: flex-start;
            }

            .nav-item-style {
              margin: 10px 0;
            }

            .logo-style {
              width: 150px;
            }

            .text-overlay {
              font-size: 1.2rem;
              text-align: center;
              left: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Toppage1;
