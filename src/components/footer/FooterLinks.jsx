import FooterLink from "./FooterLink";

const FooterLinks = ({ footerLinksHeading, links }) => {
  return (
    <div className="flex flex-col">
      <div>{footerLinksHeading} </div>
      <ul className="flex flex-col">
        {links.map((link, ind) => (
          <FooterLink key={ind} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
