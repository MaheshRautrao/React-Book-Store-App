const TestimonialCard = ({
  testimonial_person_name,
  testimonial_text,
  testimonial_person_img,
}) => {
  return (
    <div className="relative flex flex-col gap-4 px-6 py-8 mx-4 shadow-lg rounded-xl dark:bg-gray-800 ">
      <div>
        <img
          src={testimonial_person_img}
          alt=""
          className="object-cover w-20 h-20 rounded-full"
        />
      </div>
      <div>
        <div>
          <p className="text-sm text-gray-500">{testimonial_text}</p>
          <h1 className="text-xl font-bold text-black dark:text-white">
            {testimonial_person_name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
