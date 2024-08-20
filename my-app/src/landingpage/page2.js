import React from 'react';

export default function InfoGrid() {
    const data = [
        {
            icon: "//s.alicdn.com/@img/imgextra/i1/O1CN01tbfptg1Fv1tsyww7q_!!6000000000548-2-tps-96-96.png",
            title: "Millions of business offerings",
            content: "Explore products and suppliers for your business from millions of offerings worldwide."
        },
        {
            icon: "//s.alicdn.com/@img/imgextra/i2/O1CN01VxEwc91YXeNmcyV6j_!!6000000003069-2-tps-96-96.png",
            title: "Assured quality and transactions",
            content: "Ensure production quality from verified suppliers, with your orders protected from payment to delivery."
        },
        {
            icon: "//s.alicdn.com/@img/imgextra/i2/O1CN01WxanpW1Hv9ESW9cfs_!!6000000000819-2-tps-96-96.png",
            title: "One-stop trading solution",
            content: "Order seamlessly from product/supplier search to order management, payment, and fulfillment."
        },
        {
            icon: "//s.alicdn.com/@img/imgextra/i4/O1CN010nrLfB25RaSKdVtHu_!!6000000007523-2-tps-96-96.png",
            title: "Tailored trading experience",
            content: "Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way."
        }
    ];

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '2em',
        backgroundColor: '#3A190B',
        padding: '2em',
        flexWrap: 'wrap'
    };

    const cubeStyle = {
        backgroundColor: '#3A190B',
        padding: '1em',
        borderRadius: '8px',
        textAlign: 'left',
        width: '12rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'none',  // No transition
        color: 'white',
    };

    const iconStyle = {
        width: '96px',
        height: '96px',
        transition: 'none'  // No transition
    };

    const hoverEffect = {
        iconHoverColor: '#D04A0A',
        backgroundColorHover: '#52220A'
    };

    return (
        <div style={containerStyle}>
            {data.map((item, index) => (
                <div
                    key={index}
                    style={cubeStyle}
                    onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = hoverEffect.backgroundColorHover;
                        e.currentTarget.querySelector('.icon').style.filter = `hue-rotate(45deg) saturate(200%) brightness(110%)`;  // Simulates color change
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = '#3A190B';
                        e.currentTarget.querySelector('.icon').style.filter = 'none';  // Reset icon color
                    }}
                >
                    <div className="icon-container">
                        <img src={item.icon} alt={item.title} className="icon" style={iconStyle} />
                    </div>
                    <div className="title-container" style={{ fontWeight: '600', marginTop: '1em', color: 'white' }}>{item.title}</div>
                    <div className="content-container" style={{ marginTop: '0.5em', fontSize: '14px', color: 'white' }}>{item.content}</div>
                </div>
            ))}
        </div>
    );
}
