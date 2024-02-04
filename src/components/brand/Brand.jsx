import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';
const Brand = () => {
  // Also here the way of "Array" instead of reapting the code, it will help you when you need to edit the style for example.
  return (
    <div className="gpt3__brand ">
      <div>
        <img src={google} alt="google" />
      </div>

      <div>
        <img src={slack} alt="slack" />
      </div>

      <div>
        <img src={atlassian} alt="atlassian" />
      </div>

      <div>
        <img src={dropbox} alt="dropbox" />
      </div>

      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
