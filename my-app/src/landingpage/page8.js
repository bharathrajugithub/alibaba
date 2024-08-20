import React from 'react';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css';  // Import PrimeReact theme
import 'primereact/resources/primereact.min.css';            // Import PrimeReact core styles
import 'primeicons/primeicons.css';                          // Import PrimeIcons

const items = [
  {
    imgSrc: "//s.alicdn.com/@img/imgextra/i4/O1CN01cBGvqy1R9eJnhkpv5_!!6000000002069-2-tps-352-352.png_350x350.jpg",
    name: "Ron Williams",
    job: "Founder and CEO of Ron Williams Fitness",
    review: "Alibaba.com is a game changer for small businesses like us. We were able to find the exact product we needed and I don’t think we could have sourced anything without Alibaba.com."
  },
  // Add more items here if needed
];

const carouselItemTemplate = (item) => (
  <div style={styles.carouselItem}>
    <div style={styles.imageContainer}>
      <img src={item.imgSrc} alt={item.name} style={styles.carouselImg} />
    </div>
    <div style={styles.textContainer}>
      <h3 style={styles.carouselName}>{item.name}</h3>
      <p style={styles.carouselText}>{item.job}</p>
      <p style={styles.carouselReviews}>{item.review}</p>
    </div>
  </div>
);

const styles = {
  container: {
    backgroundColor: '#f7f2f0',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    color: '#51200b',
    fontSize: '44px',
    fontWeight: 'normal',
    lineHeight: '52px',
    margin: '120px auto 0',
    maxWidth: '1000px',
  },
  description: {
    color: '#666',
    fontSize: '20px',
    lineHeight: '26px',
    margin: '20px auto 0',
    maxWidth: '1000px',
  },
  learnMore: {
    display: 'inline-block',
    marginTop: '20px',
    fontSize: '20px',
    lineHeight: '26px',
    color: '#51200b',
    textDecoration: 'none',
  },
  carousel: {
    marginTop: '40px',
    backgroundColor: '#ffffff',
    height: 'auto',
    overflow: 'hidden',
    display: 'flex',
    borderRadius: '10px',
    alignItems: 'center',
  },
  carouselItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    gap: '20px',
  },
  imageContainer: {
    flex: '1',
    textAlign: 'center',
  },
  textContainer: {
    flex: '2',
    textAlign: 'left',
  },
  carouselImg: {
    height: '176px',
    width: '176px',
    borderRadius: '10px',
  },
  carouselName: {
    color: '#222',
    fontSize: '20px',
    fontWeight: 'bold',
    lineHeight: '28px',
    margin: '10px 0',
  },
  carouselText: {
    color: '#666',
    fontSize: '16px',
    lineHeight: '22px',
    margin: '8px 0',
  },
  carouselReviews: {
    color: '#222',
    fontSize: '18px',
    lineHeight: '24px',
    marginTop: '10px',
  },
};

// Responsive media queries
const mediaStyles = `
@media (max-width: 768px) {
  h1 {
    font-size: 32px;
    line-height: 40px;
  }
  p {
    font-size: 18px;
    line-height: 24px;
  }
  .carousel-container {
    flex-direction: column;
  }
  .carousel-img {
    height: 140px;
    width: 140px;
  }
}
@media (max-width: 480px) {
  h1 {
    font-size: 24px;
    line-height: 32px;
  }
  p {
    font-size: 16px;
    line-height: 22px;
  }
  .carousel-img {
    height: 120px;
    width: 120px;
  }
}
`;

function Page8() {
  return (
    <div style={styles.container}>
      <style>{mediaStyles}</style>
      <h1 style={styles.title}>Get tailored discounts, services, and tools for your business stage.</h1>
      <p style={styles.description}>
        Grow with curated benefits offered by the free Alibaba.com Membership, whether you are a small business
        needing the essentials to start sourcing or a well-established enterprise looking for tools and solutions for more complex orders.
      </p>
      <a href="https://ug.alibaba.com/api/center/main.htm" target="_blank" rel="noreferrer" style={styles.learnMore}>
        Learn more
      </a>

      <div style={styles.carousel}>
        <Carousel
          value={items}
          itemTemplate={carouselItemTemplate}
          numVisible={1}
          circular
          autoplayInterval={3000}
        />
      </div>
    </div>
  );
}

export default Page8;
