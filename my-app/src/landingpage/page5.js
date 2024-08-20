import React from 'react';

const Page5 = () => {
  const containerStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column', // Ensure vertical alignment
  };

  const titleStyle = {
    fontSize: '32px',
    marginBottom: '30px',
    color: '#222',
    fontWeight: '600',
  };

  const cardWrapperStyle = {
    display: 'flex',
    flexWrap: 'nowrap', // Prevent cards from wrapping to the next line
    overflowX: 'auto',  // Allow horizontal scrolling if the cards overflow
    gap: '20px',
    justifyContent: 'center',
  };

  const cardStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '379px',   // Set the width of the card
    height: '379px',  // Adjust height as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textDecoration: 'none',
    color: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    position: 'relative',
  };

  const cardContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
    borderRadius: '10px',
    zIndex: 1,
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensure images cover the entire card area
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle} title="Source direct-from-factory">
        Source direct-from-factory
      </div>
      <div style={cardWrapperStyle}>
        <a
          className="home-dot-element entrance-card-item"
          href="https://sale.alibaba.com/p/sample/ddmyk0s9e/index.html?spm=a2700.product_home_newuser.factory_scene.getSample&amp;wx_navbar_transparent=true&amp;path=/p/sample/ddmyk0s9e/index.html&amp;ncms_spm=a27aq.27015428&amp;prefetchKey=met&amp;tab=0&amp;topOfferIds=1600724617297&amp;categoryIds=15"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...cardStyle, backgroundImage: 'url(//s.alicdn.com/@img/imgextra/i1/O1CN01Lcuxd21Gs6zkRBFHe_!!6000000000677-2-tps-920-920.png)' }}
        >
          <div style={cardContentStyle}>
            <div className="entrance-card-item-title" title="Get samples">
              <span className="home-fw-semi-bold">Get samples</span>
            </div>
            <div className="entrance-card-item-link-text" title="View more">
              View more
            </div>
          </div>
        </a>
        <a
          className="home-dot-element entrance-card-item"
          href="https://sale.alibaba.com/p/dvlu4za85/index.html?spm=a2700.product_home_newuser.factory_scene.factoryLive&amp;wx_navbar_transparent=true&amp;path=/p/d5mdeso6p/index.html&amp;ncms_spm=a27aq.26979134&amp;prefetchKey=met&amp;topOfferIds=1600582358302&amp;cardId=2339803&amp;cardType=2332212"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...cardStyle, backgroundImage: 'url(//s.alicdn.com/@img/imgextra/i3/O1CN01blSupV1NpY5ZcwvIj_!!6000000001619-2-tps-920-920.png)' }}
        >
          <div style={cardContentStyle}>
            <img
              src="//s.alicdn.com/@img/imgextra/i1/O1CN017KJkv81ec7twePq1p_!!6000000003891-1-tps-48-48.gif"
              alt="live"
              style={{ width: '48px', height: '48px', marginBottom: '5px' }} // Set specific size
            />
            <div className="entrance-card-item-title" title="Take factory live tours">
              <span className="home-fw-semi-bold">Take factory live tours</span>
            </div>
            <div className="entrance-card-item-link-text" title="View LIVE">
              View LIVE
            </div>
          </div>
        </a>
        <a
          className="home-dot-element entrance-card-item"
          href="https://sale.alibaba.com/p/factories/v2/rank_list.html?spm=a2700.product_home_newuser.factory_scene.factoryRank&amp;wx_screen_direc=portrait&amp;wx_navbar_transparent=true&amp;path=/p/factories/v2/rank_list.html&amp;ncms_spm=a27aq.24735993&amp;prefetchKey=marchexpo&amp;cardId=4408&amp;cardType=101001553&amp;companyIds=&amp;topOfferIds=1601048612407"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...cardStyle, backgroundImage: 'url(//s.alicdn.com/@img/imgextra/i1/O1CN01twP5Jv1tjCIiCOQAv_!!6000000005937-2-tps-920-920.png)' }}
        >
          <div style={cardContentStyle}>
            <div className="entrance-card-item-title" title="Connect with top-ranking manufacturers">
              <span className="home-fw-semi-bold">Connect with top-ranking manufacturers</span>
            </div>
            <div className="entrance-card-item-link-text" title="View more">
              View more
            </div>
          </div>
        </a>
      </div>

      {/* Add style tag for responsive design */}
      <style>
        {`
        @media (max-width: 1024px) {
          .carousel-container {
            display: flex;
            flex-direction: column;
          }
          .carousel-container a {
            width: 300px; /* Adjust card width */
            height: 300px; /* Adjust card height */
          }
        }

        @media (max-width: 768px) {
          .carousel-container {
            display: flex;
            flex-direction: column;
          }
          .carousel-container a {
            width: 250px; /* Adjust card width */
            height: 250px; /* Adjust card height */
          }
        }

        @media (max-width: 480px) {
          .carousel-container {
            display: block;
          }
          .carousel-container a {
            width: 100%; /* Full width cards */
            height: 200px; /* Adjust card height */
            margin-bottom: 20px; /* Space between cards */
          }
        }
        `}
      </style>
    </div>
  );
};

export default Page5;
