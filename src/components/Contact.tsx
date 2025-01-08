import React, { useState, useCallback } from "react";
import { Calendar, Upload, PhoneCall } from "lucide-react";

interface FormData {
  service: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  images: File[];
}

interface FormErrors {
  service?: string;
  name?: string;
  email?: string;
  phone?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    service: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    images: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  // Validation functions
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^\+?[\d\s-()]{10,}$/;
    return re.test(phone);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // File handling functions
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );

    if (files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...files].slice(0, 5), // Limit to 5 images
      }));
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).filter((file) =>
        file.type.startsWith("image/")
      );

      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...files].slice(0, 5), // Limit to 5 images
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitMessage("Please correct the errors in the form.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Create FormData object for file upload
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "images") {
          submitData.append(key, value);
        }
      });
      formData.images.forEach((image) => {
        submitData.append("images", image);
      });

      // Here you would typically send the form data to your backend
      // For now, we'll simulate a submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Email template
      const emailBody = `
        New Estimate Request:
        Service: ${formData.service}
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Message: ${formData.message}
        Number of Images: ${formData.images.length}
      `;

      // You would typically send this to your backend
      console.log("Email body:", emailBody);

      setSubmitMessage(
        "Thank you! Your estimate request has been sent successfully. We'll contact you within 24 hours to discuss your project."
      );
      setFormData({
        service: "",
        name: "",
        email: "",
        phone: "",
        message: "",
        images: [],
      });
    } catch (error) {
      setSubmitMessage(
        "There was an error submitting your request. Please try again or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Estimate Today
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let us help you maintain and enhance your property's value with
              our expert tree care services.
            </p>
          </header>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Service Needed <span className="text-red-500">*</span>
                </label>
                <select
                  className={`w-full p-3 border ${
                    errors.service ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-[#FF6A00] transition-colors duration-200`}
                  value={formData.service}
                  onChange={(e) => {
                    setFormData({ ...formData, service: e.target.value });
                    setErrors({ ...errors, service: undefined });
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="removal">Tree Removal</option>
                  <option value="pruning">Tree Trimming & Pruning</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="assessment">Tree Health Assessment</option>
                  <option value="other">Other Services</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-500">{errors.service}</p>
                )}
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className={`w-full p-3 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-[#FF6A00] transition-colors duration-200`}
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      setErrors({ ...errors, name: undefined });
                    }}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className={`w-full p-3 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-[#FF6A00] transition-colors duration-200`}
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      setErrors({ ...errors, phone: undefined });
                    }}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className={`w-full p-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-[#FF6A00] transition-colors duration-200`}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setErrors({ ...errors, email: undefined });
                  }}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Tell us about your project
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-[#FF6A00] transition-colors duration-200"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {/* Image Upload */}
              <div
                className={`border-2 border-dashed ${
                  isDragging
                    ? "border-[#FF6A00] bg-orange-50"
                    : "border-gray-300"
                } 
                           rounded-lg p-6 text-center transition-colors duration-200
                           ${formData.images.length > 0 ? "pb-4" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 mb-2">
                  Drop images here or click to upload
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Upload up to 5 images of your tree(s) or property
                </p>
                <input
                  type="file"
                  className="hidden"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="inline-block px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg cursor-pointer transition-colors duration-200"
                >
                  Select Files
                </label>

                {formData.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {formData.images.map((file, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-[#FF6A00] text-white font-semibold py-4 px-8 rounded-lg 
                          transition-all duration-300 flex items-center justify-center gap-2
                          disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    Request Free Estimate
                  </>
                )}
              </button>

              {submitMessage && (
                <div
                  className={`text-center p-4 rounded-lg ${
                    submitMessage.includes("error")
                      ? "bg-red-50 text-red-800"
                      : "bg-green-50 text-green-800"
                  }`}
                >
                  {submitMessage}
                </div>
              )}
            </form>

            {/* Emergency Contact Section - Separated from form */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#FF6A00] rounded-full animate-pulse" />
                  <h4 className="text-lg font-semibold text-gray-900">
                    24/7 Emergency Service
                  </h4>
                  <div className="w-3 h-3 bg-[#FF6A00] rounded-full animate-pulse" />
                </div>
                <p className="text-gray-600 text-center mb-4">
                  Don't wait for an estimate in emergency situations. Our team
                  is available 24/7 for urgent tree care needs.
                </p>
                <div className="flex flex-col items-center">
                  <a
                    href="tel:+12504700478"
                    className="inline-flex items-center justify-center gap-2 bg-[#FF6A00] hover:bg-[#FF8533] text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold group"
                  >
                    <PhoneCall className="w-5 h-5 group-hover:animate-wiggle" />
                    <span className="text-lg">250-470-0478</span>
                  </a>
                  <span className="text-sm text-gray-500 mt-2">
                    Direct Emergency Line
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
