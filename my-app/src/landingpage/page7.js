import React, { useState } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row', // Default row layout for larger screens
    alignItems: 'flex-start',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    gap: '20px',
  },
  textContainer: {
    flex: 1,
    paddingRight: '20px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    position: 'relative',
  },
  listItemHover: {
    backgroundColor: '#f0f0f0',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginRight: '20px',
    position: 'relative',
  },
  iconWrapper: {
    transition: 'transform 0.3s ease',
  },
  icon: {
    width: '48px',
    height: '48px',
    transition: 'transform 0.3s ease',
  },
  iconHover: {
    transform: 'scale(1.2)', // Enlarges the icon on hover
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
  },
  description: {
    fontSize: '14px',
    textAlign: 'left',
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    height: 'auto',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    transition: 'opacity 0.5s ease-in-out',
  },
  verticalLine: {
    content: '""',
    width: '4px',
    height: '80px',
    backgroundColor: '#ddd',
    borderRadius: '2px',
    marginTop: '8px',
  },
  // Add media queries for responsiveness
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column', // Stack items vertically for tablet
    },
    textContainer: {
      paddingRight: '0', // Remove padding on smaller screens
      paddingBottom: '20px', // Add space below the textContainer
    },
    listItem: {
      flexDirection: 'column', // Stack icon and text vertically on smaller screens
      textAlign: 'center',
    },
    iconContainer: {
      marginRight: '0', // Remove right margin
      marginBottom: '10px', // Add margin below icon
    },
    description: {
      textAlign: 'center', // Center align text on smaller screens
    },
  },
  '@media (max-width: 480px)': {
    container: {
      padding: '10px', // Reduce padding for mobile
    },
    title: {
      fontSize: '16px', // Adjust font size for mobile
    },
    description: {
      fontSize: '12px', // Adjust font size for mobile
    },
    icon: {
      width: '40px', // Adjust icon size for mobile
      height: '40px',
    },
  },
};

const Page7 = () => {
  const [currentImage, setCurrentImage] = useState('https://s.alicdn.com/@img/imgextra/i1/O1CN01KrWFW11fg52xUQzdc_!!6000000004035-0-tps-1380-1060.jpg_q60.jpg');
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClick = (imageUrl) => {
    setCurrentImage(imageUrl);
  };

  const handleHover = (itemId, imageUrl) => {
    setHoveredItem(itemId);
    setCurrentImage(imageUrl);
  };

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <ul className="full-link_item_wrapper">
          {[{
            id: 1,
            iconSrc: "//s.alicdn.com/@img/imgextra/i4/O1CN01mkYwO01N9PeKLQWYq_!!6000000001527-2-tps-96-96.png",
            title: "Search for matches",
            description: "Search and filter from millions of product and supplier offerings to find the matching ones for your business.",
            imageUrl: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01KrWFW11fg52xUQzdc_!!6000000004035-0-tps-1380-1060.jpg_q60.jpg',
          }, {
            id: 2,
            iconSrc: "//s.alicdn.com/@img/imgextra/i4/O1CN015lgvwy1md3g5nlS9C_!!6000000004976-2-tps-96-96.png",
            title: "Identify the right one",
            description: "Evaluate product quality and supplier capabilities easily and efficiently through verified inspections and digital sourcing tools.",
            imageUrl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN0168f1F61TkrjFojnmE_!!6000000002421-2-tps-1380-1060.png_q60.jpg', // Updated hover image URL
          }, {
            id: 3,
            iconSrc: "//s.alicdn.com/@img/imgextra/i3/O1CN01HZd7ME1fEbDXenc3M_!!6000000003975-2-tps-96-96.png",
            title: "Pay with confidence",
            description: "Pay for your order in over 20 currencies via 20+ secure payment methods, including flexible payment terms.",
            imageUrl: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01XW2muo1PFU87b4zQ5_!!6000000001811-2-tps-1380-1060.png_q60.jpg', // New hover image
          }, {
            id: 4,
            iconSrc: "//s.alicdn.com/@img/imgextra/i3/O1CN01Q2EI0L1iqYtRZh1gI_!!6000000004464-2-tps-96-96.png",
            title: "Fulfill with transparency",
            description: "Get your logistics needs fulfilled with customized solutions at <a href='https://sale.alibaba.com/p/logistics_market.html?&amp;wx_navbar_transparent=true&amp;path=/p/logistics_market.html&amp;prefetchKey=met&amp;wx_xpage=true&amp;from=homeBanner' target='_blank'><span>the Alibaba.com Logistics Marketplace</span></a>, with real-time tracking for 26,000+ routes across 220 countries and regions, all powered by Alibaba.com Logistics.",
            imageUrl: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01Q2EI0L1iqYtRZh1gI_!!6000000004464-2-tps-1380-1060.png_q60.jpg',
          }, {
            id: 5,
            iconSrc: "//s.alicdn.com/@img/imgextra/i4/O1CN012nUsin1exeYsphwoy_!!6000000003938-2-tps-96-96.png",
            title: "Manage with ease",
            description: "Check order status, manage suppliers, track payments and shipments, and contact after-sales support all via My Alibaba.",
            imageUrl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01spEIDZ1TPnVsDakHo_!!6000000002375-2-tps-1380-1060.png_q60.jpg',
          }].map((item) => (
            <li
              key={item.id}
              className="full-link_item"
              style={hoveredItem === item.id ? { ...styles.listItem, ...styles.listItemHover } : styles.listItem}
              onClick={() => handleClick(item.imageUrl)}
              onMouseEnter={() => handleHover(item.id, item.imageUrl)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div style={styles.iconContainer}>
                <div className="full-link_icon_wrapper" style={{ ...styles.iconWrapper, ...(hoveredItem === item.id ? styles.iconHover : {}) }}>
                  <img className="full-link_icon" src={item.iconSrc} alt="icon" style={styles.icon} />
                </div>
                {/* Vertical Line */}
                <div style={styles.verticalLine}></div>
              </div>
              <div className="full-link_content">
                <div className="full-link_item_title" style={styles.title}>
                  {item.title}
                </div>
                <div className="home-dot-element full-link_item_desc" style={styles.description} dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.imageContainer}>
        <img
          src={currentImage}
          alt="current"
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default Page7;
