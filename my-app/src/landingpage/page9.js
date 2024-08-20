import React from 'react';

const Page9 = () => {
    // Styles for the login guide section
    const containerStyle = {
        backgroundImage: 'url("https://s.alicdn.com/@img/imgextra/i3/O1CN01FaQ37w1Zb91Cymass_!!6000000003212-0-tps-1920-456.jpg_q60.jpg")',
        backgroundColor: '#572b18',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1920px 456px',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        height: '456px',
        overflow: 'hidden',
        textAlign: 'center',
        width: '100%',
    };

    const wrapperStyle = {
        margin: 'auto',
        width: '1000px',
    };

    const titleStyle = {
        fontSize: '44px',
        fontWeight: '600',
        lineHeight: '52px',
    };

    const descStyle = {
        fontSize: '20px',
        lineHeight: '26px',
        marginTop: '20px',
    };

    const buttonStyle = {
        backgroundColor: '#f60',
        borderRadius: '999px',
        display: 'inline-block',
        fontWeight: '500',
        height: '60px',
        lineHeight: '60px',
        marginTop: '40px',
        padding: '0 60px',
        color: '#fff',
        textDecoration: 'none',
    };

    // Styles for the vision floor section
    const visionWrapperStyle = {
        margin: 'auto',
        width: '1000px',
    };

    const visionTitleStyle = {
        color: '#51200b',
        fontSize: '44px',
        fontWeight: '600',
        lineHeight: '52px',
        marginTop: '120px',
        textAlign: 'center',
    };

    const visionDescStyle = {
        color: '#666',
        fontSize: '20px',
        lineHeight: '26px',
        marginTop: '20px',
        textAlign: 'center',
    };

    // Styles for the graphic section
    const graphicWrapperStyle = {
        color: '#666',
        margin: '40px auto 32px',
        width: '1000px',
        display: 'flex',
        gap: '32px',

    };

    const leftGraphicStyle = {
        flex: '1',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '16px',
        height: '533px',
        position: 'relative',
        marginBottom: '32px',
    };

    const rightGraphicsStyle = {
        flex: '2',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
    };

    const rightGraphicStyle = {
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '16px',
        height: '250px',
        position: 'relative',
    };

    const graphicTextStyle = {
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        color: '#fff',
        fontSize: '32px',
        lineHeight: '40px',
        margin: '0',
    };

    const graphicTitleStyle = {
        color: '#f60',
        fontSize: '16px',
        margin: '0',
    };

    const graphicNamesStyle = {
        color: '#51200b',
        fontSize: '14px',
        lineHeight: '20px',
        position: 'absolute',
        right: '20px',
        top: '20px',
        width: '126px',
    };

    return (
        <div>
            {/* Login Guide Section */}
            <div style={containerStyle}>
                <div style={wrapperStyle}>
                    <div style={titleStyle}>Ready to get started?</div>
                    <div style={descStyle}>Explore millions of products from trusted suppliers by signing up today!</div>
                    <a
                        href="https://passport.alibaba.com/member/reg/fast/union_reg.htm?spm=a2700.product_home_newuser.sign_up.sign_up_button&_regfrom=ICBU_UNION_REG&_regbizsource=main_page&_lang=en_US&tg=https%3A%2F%2Fug.alibaba.com%2Fapi%2Fpc%2Fregister%2Fredirect%3Fscene%3Dpc_header"
                        target="_self"
                        style={buttonStyle}
                    >
                        Sign up
                    </a>
                </div>
            </div>

            {/* Vision Floor Section */}
            <div style={visionWrapperStyle}>
                <div style={visionTitleStyle}>Empowering businesses through global trade</div>
                <div style={visionDescStyle}>
                    Alibaba.com offers one-stop B2B trading solutions for global small and medium-sized businesses, empowering them to transform through digital trade, grasp opportunities, and accelerate growth internationally.
                </div>
            </div>

            {/* Vision Floor Graphic Section */}
            <div style={graphicWrapperStyle}>
                <div
                    style={{ ...leftGraphicStyle, backgroundImage: 'url("https://s.alicdn.com/@img/imgextra/i1/O1CN01ZUhAEZ1plFc5piQ6Z_!!6000000005400-0-tps-1408-1200.jpg_q60.jpg")' }}
                >
                    <div style={graphicTextStyle}>
                        Make it easy to do business anywhere.<br />
                        <div style={graphicTitleStyle}>OUR MISSION</div>
                    </div>
                </div>
                <div style={rightGraphicsStyle}>
                    <div
                        style={{ ...rightGraphicStyle, backgroundImage: 'url("https://s.alicdn.com/@img/imgextra/i3/O1CN01AuT5oO1CpaMXEBGOd_!!6000000000130-0-tps-1410-646.jpg_q60.jpg")' }}
                    >
                        <div style={graphicTextStyle}>
                            We have teams around the world.<br />
                            <div style={graphicTitleStyle}>OUR LOCATIONS</div>
                        </div>
                        <div style={graphicNamesStyle}>
                            Hangzhou, China<br />
                            Paris, France<br />
                            Munich, Germany<br />
                            Tokyo, Japan<br />
                            Seoul, Korea<br />
                            London, UK<br />
                            New York, US<br />
                            ...<br />
                            and many other locations worldwide.
                        </div>
                    </div>
                    <div
                        style={{ ...rightGraphicStyle, backgroundImage: 'url("https://s.alicdn.com/@img/imgextra/i2/O1CN01KXAelN1CWLiBLU7x9_!!6000000000088-0-tps-1408-490.jpg_q60.jpg")' }}
                    >
                        <div style={graphicTextStyle}>
                            Responsible technology. Sustainable future.<br />
                            <div style={graphicTitleStyle}>OUR ESG PROMISES</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page9;
