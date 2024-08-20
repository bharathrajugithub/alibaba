import React from 'react';

function Page6() {
    // Inline styles
    const styles = {
        container: {
            backgroundImage: 'url(https://s.alicdn.com/@img/imgextra/i1/O1CN01ZU454s273tH4l7azv_!!6000000007742-0-tps-3000-1394.jpg_q60.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '750px', // Adjust height as needed
            position: 'relative', // Allows absolute positioning of child elements
            color: '#fff',
            padding: '20px',
            boxSizing: 'border-box'
        },
        title: {
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            display: '-webkit-box',
            fontSize: '44px',
            fontWeight: 600,
            lineHeight: '52px',
            marginBottom: '20px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '800px',
            borderRadius: '8px',
            position: 'absolute',
            top: '20px', // Distance from the top of the container
            left: '20px', // Distance from the left side of the container
            padding: '20px'
        },
        cardWrapper: {
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            position: 'absolute',
            top: '120px', // Adjust as needed
            left: '20px', // Distance from the left side of the container
            width: 'calc(100% - 40px)', // Adjust width to fit within container
        },
        card: {
            backdropFilter: 'blur(50px)',
            background: 'hsla(0, 0%, 100%, .11)',
            borderRadius: '20px',
            fontSize: '16px',
            height: '350px',
            lineHeight: '22px',
            overflow: 'hidden',
            padding: '50px',
            position: 'relative',
            width: 'calc(50% - 10px)', // Adjust width as needed
            boxSizing: 'border-box',
            marginTop: '16%'
        },
        cardIcon: {
            display: 'block',
            height: '70px',
            margin: '18px 0 20px',
            width: '400px'
        },
        cardText1: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '10px'
        },
        cardText2: {
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 4,
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '16px',
            lineHeight: '22px',
            marginBottom: '20px'
        },
        cardAction: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        cardLink: {
            color: '#007bff',
            textDecoration: 'none',
            fontWeight: '600'
        },
        watchButton: {
            backgroundColor: '#00000032',
            border: '1px solid #fff',
            borderRadius: '999px',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '600',
            height: '48px',
            lineHeight: '48px',
            marginInlineEnd: '20px',
            maxWidth: '320px',
            padding: '0 20px',
            textAlign: 'center',
            boxSizing: 'border-box'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.title} title="Trade with confidence from production quality to purchase protection">
                Trade with confidence from production quality to purchase protection
            </div>
            <div style={styles.cardWrapper}>
                <div style={styles.card}>
                    <div style={styles.cardText1}>Ensure production quality with</div>
                    <img
                        style={styles.cardIcon}
                        src="//s.alicdn.com/@img/imgextra/i3/O1CN01cnsiSd1sFb5vxUBwd_!!6000000005737-2-tps-1200-210.png_q60.jpg"
                        alt="icon"
                    />
                    <div style={styles.cardText2}>
                        Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the "Verified" logo to begin sourcing with experienced suppliers your business could rely on.
                    </div>
                    <div style={styles.cardAction}>
                        <button style={styles.watchButton}>Watch video</button>
                        <a
                            style={styles.cardLink}
                            href="https://sale.alibaba.com/p/d7v3mp6m3?spm=a2700.product_home_newuser.service_guarantee@@verified.view_more&amp;wx_navbar_transparent=true&amp;path=/p/d7v3mp6m3&amp;ncms_spm=a27aq.27913922&amp;prefetchKey=met&amp;wx_xpage=true"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
                <div style={styles.card}>
                    <div style={styles.cardText1}>Protect your purchase with</div>
                    <img
                        style={styles.cardIcon}
                        src="//s.alicdn.com/@img/imgextra/i1/O1CN01I0ebSF1UCntpAivUU_!!6000000002482-2-tps-1200-210.png_q60.jpg"
                        alt="icon"
                    />
                    <div style={styles.cardText2}>
                        Source confidently with access to secure payment options, protection against product or shipping issues, and mediation support for any purchase-related concerns when you order and pay on Alibaba.com.
                    </div>
                    <div style={styles.cardAction}>
                        <button style={styles.watchButton}>Watch video</button>
                        <a
                            style={styles.cardLink}
                            href="https://tradeassurance.alibaba.com/?spm=a2700.product_home_newuser.service_guarantee@@ta_plus.view_more&amp;tracelog=nhp_btm_service_ta"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>

            {/* Add style tag for responsive design */}
            <style>
                {`
                @media (max-width: 1200px) {
                    .title {
                        fontSize: '36px',
                        width: '600px',
                        top: '10px',
                        left: '10px',
                        padding: '15px'
                    }
                    .card {
                        width: calc(50% - 10px);
                    }
                }

                @media (max-width: 768px) {
                    .title {
                        fontSize: '28px',
                        width: '100%',
                        top: '10px',
                        left: '10px',
                        padding: '15px'
                    }
                    .cardWrapper {
                        top: '80px',
                        left: '10px',
                        width: 'calc(100% - 20px)',
                        flexDirection: 'column',
                    }
                    .card {
                        width: 100%,
                        marginTop: '10px',
                        height: 'auto'
                    }
                    .cardIcon {
                        width: '100%'
                    }
                }

                @media (max-width: 480px) {
                    .title {
                        fontSize: '24px',
                        width: '100%',
                        top: '10px',
                        left: '10px',
                        padding: '10px'
                    }
                    .cardWrapper {
                        top: '60px',
                        left: '10px',
                        width: 'calc(100% - 20px)',
                        flexDirection: 'column',
                    }
                    .card {
                        width: 100%,
                        marginTop: '10px',
                        height: 'auto'
                    }
                    .cardIcon {
                        width: '100%'
                    }
                }
                `}
            </style>
        </div>
    );
}

export default Page6;
