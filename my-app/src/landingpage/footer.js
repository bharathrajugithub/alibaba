import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#e2e0e0',
      color: '#666',
      padding: '20px 30px',
      width: '100%',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      gap: '20px',
      marginBottom: '20px',
    },
    groupLinks: {
      display: 'flex',
      flexDirection: 'row',
      gap: '6px',
      flexWrap: 'wrap', // Allow links to wrap on smaller screens
      justifyContent: 'center',
    },
    infosContent: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '8px',
    },
    legal: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      textAlign: 'center',
    },
    link: {
      color: '#222',
      textDecoration: 'none',
      paddingRight: '6px',
      paddingBottom: '6px',
    },
    img: {
      width: '65px',
      height: '70px',
    },
    gsxt: {
      width: '20px',
      height: '20px',
    },
  };

  return (
    <div style={styles.footer}>
      <div style={styles.row}>
        <div style={styles.groupLinks}>
          <a href="https://www.aliexpress.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>AliExpress</a>
          <a href="https://www.1688.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>1688.com</a>
          <a href="https://g-sellercenter.taobao.com/mail" target="_blank" rel="noopener noreferrer" style={styles.link}>Tmall Taobao World</a>
          <a href="https://global.alipay.com/platform/site/ihome" target="_blank" rel="noopener noreferrer" style={styles.link}>Alipay</a>
          <a href="https://www.lazada.com/en/" target="_blank" rel="noopener noreferrer" style={styles.link}>Lazada</a>
          <a href="https://world.taobao.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>Taobao Global</a>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.infosContent}>
          <a href="https://rulechannel.alibaba.com/icbu#/" target="_blank" rel="noopener noreferrer" style={styles.link}><span>Policies and rules</span></a>
          <a href="https://rulechannel.alibaba.com/icbu?spm=a2700.product_home_l0.0.0.2ce267afC1wZlo&amp;type=detail&amp;ruleId=20002006&amp;cId=147#/rule/detail?ruleId=20002006&amp;cId=147" target="_blank" rel="noopener noreferrer" style={styles.link}><span>Legal Notice</span></a>
          <a href="https://rulechannel.alibaba.com/icbu?type=detail&amp;ruleId=2047&amp;cId=1396#/rule/detail?cId=1396&amp;ruleId=2047" target="_blank" rel="noopener noreferrer" style={styles.link}><span>Product Listing Policy</span></a>
          <a href="https://ipp.aidcgroup.net/#/ippHome" target="_blank" rel="noopener noreferrer" style={styles.link}><span>Intellectual Property Protection</span></a>
          <a href="https://rulechannel.alibaba.com/icbu?type=detail&amp;ruleId=2034&amp;cId=1306#/rule/detail?cId=1306&amp;ruleId=2034" target="_blank" rel="noopener noreferrer" style={styles.link}><span>Privacy Policy</span></a>
          <a href="https://rulechannel.alibaba.com/icbu?type=detail&amp;ruleId=2041&amp;cId=1307#/rule/detail?cId=1307&amp;ruleId=2041" target="_blank" rel="noopener noreferrer" style={styles.link}><span>Terms of Use</span></a>
          <a href="https://aidc.jubao.alibaba.com/" target="_blank" rel="noopener noreferrer" style={styles.link}><span>Integrity Compliance</span></a>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.legal}>
          <div>© 1999-2024 Alibaba.com。版权所有：杭州阿里巴巴海外信息技术有限公司</div>
          <a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <img src="https://img.alicdn.com/tfs/TB1QhYprKT2gK0jSZFvXXXnFXXa-20-20.png" alt="Public Security" style={styles.gsxt} />浙公网安备 33010002000092号
          </a>
          <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <img src="https://img.alicdn.com/tfs/TB1VtZtebH1gK0jSZFwXXc7aXXa-65-70.gif" alt="ICP Record" style={styles.img} />浙ICP备2024067534号
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
