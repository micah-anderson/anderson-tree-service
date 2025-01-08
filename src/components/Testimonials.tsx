import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    location: "Kelowna",
    text: "Anderson Tree Service did an amazing job with our property. Their team was professional, efficient, and left everything spotless. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah B.",
    location: "West Kelowna",
    text: "Quick response to our emergency call after a storm. Great work at a fair price. Very reliable and professional service.",
    rating: 5,
  },
  {
    name: "David M.",
    location: "Lake Country",
    text: "Best tree service in the Okanagan. They took great care of our property and their attention to detail was impressive.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-center mb-16 text-lg">
          Trusted by homeowners across the Okanagan Valley
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">
                {testimonial.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
