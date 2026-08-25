"use client";

import { useState } from "react";


export default function VisaInquiryForm() {

  const [formData,setFormData] = useState({
    name:"",
    phone:"",
    email:"",
    city:"",
    message:"",
  });


  const [errors,setErrors] = useState({});


  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });

  };



  const validate = ()=>{

    const newErrors = {};


    if(!formData.name.trim()){
      newErrors.name = "Name is required";
    }


    if(!formData.phone.trim()){
      newErrors.phone = "Phone number is required";
    }


    if(
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ){
      newErrors.email = "Enter valid email";
    }


    return newErrors;

  };




  const handleSubmit = (e)=>{

    e.preventDefault();


    const validationErrors = validate();


    if(Object.keys(validationErrors).length){

      setErrors(validationErrors);
      return;

    }


    setErrors({});


    console.log("Visa Enquiry Data:",formData);


    setFormData({
      name:"",
      phone:"",
      email:"",
      city:"",
      message:"",
    });

  };



  return (

    <div
      className="
      rounded-4xl
      bg-white/[0.45]
      backdrop-blur-2xl
      border
      border-gray-200
      p-6
      "
    >


      <h3
        className="
        fs-32-20
        uppercase
        text-black
        !mb-6
        "
      >
        Get Expert Guidance
      </h3>



      <form
        onSubmit={handleSubmit}
        className="
        flex
        flex-col
        gap-5
        "
      >


        <div>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="
            w-full
            rounded-xl
            border
            border-gray-200
            bg-white/70
            px-4
            py-3
            outline-none
            "
          />

          {errors.name && (
            <p className="text-red-600 text-sm !mt-2 !mb-0">
              {errors.name}
            </p>
          )}

        </div>




        <div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="
            w-full
            rounded-xl
            border
            border-gray-200
            bg-white/70
            px-4
            py-3
            outline-none
            "
          />

          {errors.phone && (
            <p className="text-red-600 text-sm !mt-2 !mb-0">
              {errors.phone}
            </p>
          )}

        </div>




        <div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="
            w-full
            rounded-xl
            border
            border-gray-200
            bg-white/70
            px-4
            py-3
            outline-none
            "
          />

          {errors.email && (
            <p className="text-red-600 text-sm !mt-2 !mb-0">
              {errors.email}
            </p>
          )}

        </div>




        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="
          w-full
          rounded-xl
          border
          border-gray-200
          bg-white/70
          px-4
          py-3
          outline-none
          "
        />




        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="
          w-full
          rounded-xl
          border
          border-gray-200
          bg-white/70
          px-4
          py-3
          outline-none
          resize-none
          "
        />




        <button
          type="submit"
          className="
          base-button
          primary
          w-full
          "
        >
          Submit Enquiry
        </button>



      </form>


    </div>

  );

}