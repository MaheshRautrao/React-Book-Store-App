import FooterLinks from "./FooterLinks";

const Footer = () => {
  const footerLinks1 = ["Home", "About", "Blog", "Contact"];
  const footerLinks2 = ["Link1", "Link2", "Link3", "Link4"];

  return (
    <div>
      <div className="flex">
        <div className="">
          <div>Books Store</div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            cumque fuga distinctio quas!
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
        <div className="flex ">
          <FooterLinks
            footerLinksHeading="Important Links"
            links={footerLinks1}
          />
          <FooterLinks
            footerLinksHeading="Important Links"
            links={footerLinks2}
          />
        </div>
      </div>
      <div>
        <p className="py-10 mx-6 text-center border-t-2">
          Copyright © 2023. All rights reserved || Made with ❤️ by Mahesh
          Rautrao
        </p>
      </div>
    </div>
  );
};

export default Footer;
