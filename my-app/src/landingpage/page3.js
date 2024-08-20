import React from 'react';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css'; // Import PrimeReact theme
import 'primereact/resources/primereact.min.css'; // Import PrimeReact core styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUserShield, faLock, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

function Page3() {
    const contentContainerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', // Adjust columns as needed
        gap: '20px', // Space between columns
        alignItems: 'center',
        height: '160px',
        fontSize: '44px',
        marginLeft: '5%',
    };

    const titleStyle = {
        gridColumn: '1 / 1',
        fontWeight: 500, // Semi-bold
    };

    const categoryInfoStyle = {
        gridColumn: '2 / 3',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
        gap: '1px',
        marginLeft: '2%', // Space between items
    };

    const numberItemStyle = {
        position: 'relative', // Required for absolute positioning of ::before
        textAlign: 'left',
        paddingLeft: '20px', // Space for vertical line
        marginTop: '20%',
    };

    const numberItemBeforeStyle = {
        content: '""',
        position: 'absolute',
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '4px',
        height: '86%',
        backgroundColor: '#ddd',
        borderRadius: '2px',
    };

    const spanStyle = {
        display: 'block',
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#f60',
    };

    const pStyle = {
        marginTop: '1px',
        fontSize: '20px',
        color: '#51200b',
    };

    // Example carousel items with FontAwesome icons and text
    const carouselItems = [
        { id: 1, icon: faShieldAlt, text: 'Security' },
        { id: 2, icon: faUserShield, text: 'User Protection' },
        { id: 3, icon: faLock, text: 'Privacy' },
        { id: 4, icon: faGlobe, text: 'Global Access' },
    ];

    const carouselItemTemplate = (item) => {
        return (
            <div style={carouselItemStyle} className="carousel-item-content">
                <div style={iconContainerStyle}>
                    <FontAwesomeIcon icon={item.icon} size="2x" />
                </div>
                <p style={textStyle}>{item.text}</p>
            </div>
        );
    };

    const carouselContainerStyle = {
        marginTop: '20%', // Gap between content and carousel
    };

    const carouselItemStyle = {
        backgroundColor: 'black',
        borderRadius: '50px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '120px',
        width: '120px',
        textAlign: 'center',
        padding: '10px',
    };

    const iconContainerStyle = {
        marginBottom: '10px',
    };

    const textStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
    };

    return (
        <div>
            <div style={contentContainerStyle} className="industry-category">
                <div style={titleStyle} className="title home-util-ellipsis line3 home-fw-semi-bold" title="Explore millions of offerings tailored to your business needs">
                    Explore millions of offerings tailored to your business 
                </div>
                <div style={categoryInfoStyle} className="category-number">
                    <div style={numberItemStyle} className="number-item">
                        <span style={spanStyle}>200M+</span>
                        <p style={pStyle}>products</p>
                        <div style={numberItemBeforeStyle}></div>
                    </div>
                    <div style={numberItemStyle} className="number-item">
                        <span style={spanStyle}>200K+</span>
                        <p style={pStyle}>suppliers</p>
                        <div style={numberItemBeforeStyle}></div>
                    </div>
                    <div style={numberItemStyle} className="number-item">
                        <span style={spanStyle}>5,900</span>
                        <p style={pStyle}>product categories</p>
                        <div style={numberItemBeforeStyle}></div>
                    </div>
                    <div style={numberItemStyle} className="number-item">
                        <span style={spanStyle}>200+</span>
                        <p style={pStyle}>countries and regions</p>
                        <div style={numberItemBeforeStyle}></div>
                    </div>
                </div>
            </div>

            <div style={carouselContainerStyle}>
                <Carousel value={carouselItems} itemTemplate={carouselItemTemplate} numVisible={4} numScroll={2} circular={true} autoplayInterval={3000}>
                    {/* Carousel content goes here */}
                </Carousel>
            </div>

            {/* Add style tag for responsive design */}
            <style>
                {`
                @media (max-width: 768px) {
                    .industry-category {
                        margin-left: 2%;
                    }

                    .contentContainerStyle {
                        grid-template-columns: 1fr; // Single column for small screens
                        margin-left: 0;
                    }

                    .category-number {
                        grid-template-columns: 1fr;
                        gap: 10px;
                    }

                    .number-item {
                        margin-top: 10%;
                    }

                    .carousel-item-content {
                        height: 100px;
                        width: 100px;
                    }

                    .carousel-container-style {
                        margin-top: 10%;
                    }
                }

                @media (max-width: 480px) {
                    .industry-category {
                        margin-left: 0;
                        font-size: 36px;
                    }

                    .category-number {
                        grid-template-columns: 1fr;
                        margin-left: 0;
                    }

                    .number-item {
                        margin-top: 5%;
                    }

                    .carousel-item-content {
                        height: 80px;
                        width: 80px;
                    }
                }
                `}
            </style>
        </div>
    );
}

export default Page3;
