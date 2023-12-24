const FooterLink = ({ link }) => {
  return (
    <li className="duration-300 hover:translate-x-2 hover:text-blue-600 hover:cursor-pointer ">
      <span>⮚</span>
      <span>{link}</span>
    </li>
  );
};

export default FooterLink;
