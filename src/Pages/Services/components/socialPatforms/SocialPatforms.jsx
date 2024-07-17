import React from 'react';
import facebookImg from '/marketing/facebook.png';
import instagramImg from '/marketing/instagram.png';
import twitterImg from '/marketing/X.png';
import linkedinImg from '/marketing/linkedin.png';
import youtubeImg from '/marketing/youtube.png';
import tiktokImg from '/marketing/tiktok.png';
import "./SocialPlatforms.css"
import TypicalHeader from '../typicalHeader/typicalHeader';

const SocialMediaPlatforms = () => {
  return (
    <section className="social-media-platforms">
        <TypicalHeader Title={"Leveraging <span>Top Social Media Platforms</span> for Your Brand's Growth"} subTitle={"Popular Platforms"}/>      
      <div className="platform">
        <img src={facebookImg} alt="Facebook" className="platform-image" />
        <div className="platform-content">
          <h3>Facebook</h3>
          <p>With over 2.8 billion monthly active users, Facebook is a powerhouse for social media marketing. We can help you:
            <ul>
              <li><i className="fa fa-check"></i> Create and manage engaging content that resonates with your audience.</li>
              <li><i className="fa fa-check"></i> Run targeted ad campaigns to reach your ideal customers.</li>
              <li><i className="fa fa-check"></i> Use Facebook Analytics to track performance and optimize strategies.</li>
            </ul>
          </p>
        </div>
      </div>
      
      <div className="platform">
        <img src={instagramImg} alt="Instagram" className="platform-image" />
        <div className="platform-content">
          <h3>Instagram</h3>
          <p>Instagram is perfect for visually-driven marketing with its 1 billion active users. Our services include:
            <ul>
              <li><i className="fa fa-check"></i> Crafting visually appealing posts and stories to captivate your followers.</li>
              <li><i className="fa fa-check"></i> Influencer partnerships to amplify your brand's reach.</li>
              <li><i className="fa fa-check"></i> Utilizing Instagram Shopping features to boost direct sales.</li>
            </ul>
          </p>
        </div>
      </div>
      
      <div className="platform">
        <img src={twitterImg} alt="Twitter" className="platform-image" />
        <div className="platform-content">
          <h3>Twitter</h3>
          <p>Twitter is ideal for real-time engagement and customer service. We can:
            <ul>
              <li><i className="fa fa-check"></i> Develop a strong brand voice that stands out in tweets.</li>
              <li><i className="fa fa-check"></i> Monitor trends and conversations to engage with your audience effectively.</li>
              <li><i className="fa fa-check"></i> Run Twitter Ads to target specific demographics and increase brand visibility.</li>
            </ul>
          </p>
        </div>
      </div>
      
      <div className="platform">
        <img src={linkedinImg} alt="LinkedIn" className="platform-image" />
        <div className="platform-content">
          <h3>LinkedIn</h3>
          <p>LinkedIn is the go-to platform for B2B marketing. Our approach involves:
            <ul>
              <li><i className="fa fa-check"></i> Creating professional content that showcases your industry expertise.</li>
              <li><i className="fa fa-check"></i> Building and nurturing professional networks.</li>
              <li><i className="fa fa-check"></i> Running LinkedIn Ads to generate leads and drive traffic to your website.</li>
            </ul>
          </p>
        </div>
      </div>
      
      <div className="platform">
        <img src={youtubeImg} alt="YouTube" className="platform-image" />
        <div className="platform-content">
          <h3>YouTube</h3>
          <p>As the second largest search engine, YouTube offers massive potential for video marketing. We offer:
            <ul>
              <li><i className="fa fa-check"></i> Video content creation that tells your brand story compellingly.</li>
              <li><i className="fa fa-check"></i> YouTube SEO to ensure your videos rank higher in search results.</li>
              <li><i className="fa fa-check"></i> Running targeted video ad campaigns to reach a broader audience.</li>
            </ul>
          </p>
        </div>
      </div>
      
      <div className="platform">
        <img src={tiktokImg} alt="TikTok" className="platform-image" />
        <div className="platform-content">
          <h3>TikTok</h3>
          <p>TikTok is rapidly growing and perfect for creative, short-form video content. We can help by:
            <ul>
              <li><i className="fa fa-check"></i> Creating viral, engaging videos that appeal to your target audience.</li>
              <li><i className="fa fa-check"></i> Partnering with TikTok influencers to expand your brand's reach.</li>
              <li><i className="fa fa-check"></i> Utilizing TikTok Ads to drive traffic and conversions.</li>
            </ul>
          </p>
        </div>
      </div>
      
      <div className="summary">
        <p>Each platform offers unique opportunities, and our tailored strategies ensure your brand maximizes its potential on every platform. Whether it's content creation, targeted advertising, or analytics, we provide comprehensive solutions to elevate your social media presence and drive business growth.</p>
      </div>
    </section>
  );
};

export default SocialMediaPlatforms;
