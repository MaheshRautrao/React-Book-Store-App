const Footer = () => {
  return (
    <div className="flex">
      <div className="">
        <div>Books Store</div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio cumque
          fuga distinctio quas!
        </div>
        <div>
          <div>
            <span>Noida, Uttar Pradesh</span>
            <img src="./address.png" className="w-5 bg-blue-200" />
          </div>
          <div>
            <span>+91 123456789</span>
            <img src="./phone.png" className="w-5 bg-blue-200" />
          </div>
        </div>
        <div className="flex gap-3">
          <img src="facebook.png" alt="" className="w-5 bg-blue-200" />
          <img src="instagram.png" alt="" className="w-5 bg-blue-200" />
          <img src="linkedin.png" alt="" className="w-5 bg-blue-200" />
        </div>
      </div>
      <div>
        <div>Important Links</div>
      </div>
    </div>
  );
};

export default Footer;
