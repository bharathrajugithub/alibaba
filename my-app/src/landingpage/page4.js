import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css'; // Import PrimeReact theme
import 'primereact/resources/primereact.min.css'; // Import PrimeReact core styles
import { Carousel } from 'primereact/carousel'; // Import the Carousel component

export default function Page4() {
    // Example carousel items
    const carouselItems = [
        { id: 1, content: 'Item 1' },
        { id: 2, content: 'Item 2' },
        { id: 3, content: 'Item 3' },
    ];

    const carouselItemTemplate = (item) => {
        return (
            <div className="carousel-item-content" style={carouselItemStyle}>
                <h3 style={itemContentStyle}>{item.content}</h3>
            </div>
        );
    };

    const carouselContainerStyle = {
        width: '100%',
        marginTop: '20px', // Adjust as needed
    };

    const carouselItemStyle = {
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center',
    };

    const itemContentStyle = {
        fontSize: '18px',
        color: '#333',
    };

    return (
        <div>
            <div style={carouselContainerStyle} className="carousel-container">
                <Carousel
                    value={carouselItems}
                    itemTemplate={carouselItemTemplate}
                    numVisible={3}
                    circular
                    autoplayInterval={3000}
                    className="custom-carousel"
                    style={{ width: '100%' }}
                />
            </div>

            {/* Add style tag for responsive design */}
            <style>
                {`
                @media (max-width: 1024px) {
                    .custom-carousel .p-carousel-item {
                        flex: 1 0 33%; /* Show 3 items in a row */
                    }
                }

                @media (max-width: 768px) {
                    .custom-carousel .p-carousel-item {
                        flex: 1 0 50%; /* Show 2 items in a row */
                    }
                }

                @media (max-width: 480px) {
                    .custom-carousel .p-carousel-item {
                        flex: 1 0 100%; /* Show 1 item per row */
                    }
                }
                `}
            </style>
        </div>
    );
}
