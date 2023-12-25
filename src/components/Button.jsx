const Button = ({ btn_text }) => {
  return (
    <button className="px-3 py-2 rounded-full text-white bg-blue-500">
      {btn_text}
    </button>
  );
};

export default Button;
