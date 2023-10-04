"use client";

import Link from "next/link";
import { StartBtn } from "../ui/StartBtn";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    msg: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the form fields are empty
    if (
      !formData.fname ||
      !formData.lname ||
      !formData.email ||
      !formData.msg
    ) {
      toast.error("Please fill in all fields.");
      return; // Exit the function to prevent further execution
    }
    console.log(" data", formData);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("response data", response);
      if (!response.ok) throw new Error("Failed to submit form data");

      // // Reset the form and clear any previous errors on success
      setFormData({
        fname: "",
        lname: "",
        email: "",
        msg: "",
      });
      setError(null);

      // Show a success toast message
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Error", error);
      setError("Failed to submit the form. Please try again later.");
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center -mx-4">
          <div className="mb-16 lg:mb-0 max-w-2xl lg:w-1/2 px-4">
            <Link
              className="mb-6 inline-block text-3xl font-bold leading-none"
              href="/"
            >
              <Image
                className="h-12"
                src="/atis-assets/logo/atis/atis-mono-sign.svg"
                alt=""
                width={100}
                height={100}
              />
            </Link>
            <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading">
              So much more than a business analytics tool
            </h2>
            <p className="mb-8 text-gray-500 leading-loose">
              Business Analytics tools that we will be discussing in detail.
            </p>
            <StartBtn txt="Get Started" />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
              <div className="mb-6 py-8 px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center">
                <form onSubmit={handleSubmit}>
                  {error && <p className="text-red-500 mb-4">{error}</p>}
                  <div className="mb-6">
                    <span className="text-sm text-gray-400">Sign Up</span>
                    <h4 className="text-2xl">Create an account</h4>
                  </div>
                  <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="mb-4 lg:mb-0 w-full lg:w-1/2 px-2">
                      <input
                        className="py-2 px-3 w-full bg-gray-50 rounded "
                        type="text"
                        name="fname"
                        value={formData.fname}
                        onChange={handleInputChange}
                        placeholder="First Name"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 px-2">
                      <input
                        className="py-2 px-3 w-full bg-gray-50 rounded "
                        type="text"
                        name="lname"
                        value={formData.lname}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <input
                    className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@example.com"
                  />
                  <textarea
                    className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                    type="text"
                    name="msg"
                    value={formData.msg}
                    onChange={handleInputChange}
                    placeholder="Message"
                  />
                  <button
                    className="mb-4 py-4 rounded text-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition duration-200 w-full"
                    type="submit"
                  >
                    send
                  </button>
                </form>
                <Toaster position="bottom-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
