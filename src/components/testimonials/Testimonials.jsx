import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const testimonials = [
    {
      testimonial_person_name: "person 1",
      testimonial_text:
        "This is demo text for the individual testimonials card in testimonials",
      testimonial_person_img: "testimonial-img-1.jpg",
    },
    {
      testimonial_person_name: "person 2",
      testimonial_text:
        "This is demo text for the individual testimonials card in testimonials",
      testimonial_person_img: "testimonial-img-2.jpg",
    },
    {
      testimonial_person_name: "person 3",
      testimonial_text:
        "This is demo text for the individual testimonials card in testimonials",
      testimonial_person_img: "testimonial-img-1.jpg",
    },
    {
      testimonial_person_name: "person 4",
      testimonial_text:
        "This is demo text for the individual testimonials card in testimonials",
      testimonial_person_img: "testimonial-img-2.jpg",
    },
  ];

  return (
    <div className="flex flex-col pb-10 ">
      <div className="flex flex-col items-center justify-center gap-2 mb-10 ">
        <h1 className="text-3xl font-semibold">Testimonials</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure,
          corporis
        </p>
      </div>
      <div className="flex items-center justify-center ">
        <div className="w-[80%] p-2 ">
          <Slider {...settings}>
            {testimonials.map((testimonail, ind) => {
              return (
                <TestimonialCard
                  key={ind}
                  testimonial_person_name={testimonail.testimonial_person_name}
                  testimonial_text={testimonail.testimonial_text}
                  testimonial_person_img={testimonail.testimonial_person_img}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
