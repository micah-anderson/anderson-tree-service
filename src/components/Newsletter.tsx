import React, { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      // Here you would typically send the email to your backend
      // For now, we'll simulate a submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Email template for backend
      const subscriptionData = {
        email,
        timestamp: new Date().toISOString(),
        source: "website_footer",
      };

      // You would typically send this to your backend
      console.log("Newsletter subscription:", subscriptionData);

      setStatus("success");
      setMessage("Thank you for subscribing! You'll receive our updates soon.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-white text-lg font-bold mb-4">Stay Updated</h3>
      <p className="text-sm text-gray-300 mb-4">
        Get the latest tree care tips and updates delivered to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") {
                setStatus("idle");
                setMessage("");
              }
            }}
            className={`w-full bg-gray-800 text-white px-4 py-3 pr-12 rounded-lg 
                       placeholder-gray-400 border ${
                         status === "error"
                           ? "border-red-500"
                           : "border-gray-700"
                       }
                       focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent
                       transition-all duration-200`}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="absolute right-2 top-1/2 -translate-y-1/2
                     text-gray-400 hover:text-[#FF6A00]
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-colors duration-200"
          >
            {status === "loading" ? (
              <svg
                className="animate-spin h-5 w-5"
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
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>

        {message && (
          <p
            className={`text-sm ${
              status === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
