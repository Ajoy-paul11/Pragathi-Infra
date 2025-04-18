import React,{ useState } from "react";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { Fieldset } from "@mantine/core";
import { Input } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { toast } from "react-toastify";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // Push the form submission event to dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "form_submission",
          formId: "admission_form",
        });

        toast.success("Message sent Successfully");

        reset();
      } else {
        toast.error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast.error(error.message || "Internal Server Error, Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact us" className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-block px-3 py-1 text-sm font-medium bg-[#FF6F61]/10 text-[#FF6F61] rounded-full mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#222222] mb-4">
            Contact Us
          </h2>
          <p className="text-[#555555] max-w-2xl">
            Have questions about a property or need expert advice? Our team is
            here to help.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className=" lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" rounded-md bg-white shadow-md"
            >
              <div className=" overflow-hidden">
                <div className=" h-20 bg-[#003366] relative rounded-t-md">
                  <div className=" absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-[#FF6F61] flex items-center justify-center">
                    <FiPhone className=" text-white h-6 w-6'" />
                  </div>
                </div>
                <div className=" p-6 pt-10">
                  <h3 className=" font-bold text-lg text-[#222222] mb-2">
                    {" "}
                    Call Us
                  </h3>
                  <p className=" text-sm mb-1 text-[#555555]">
                    Mon-Sat, 9am-7pm
                  </p>
                  <p className="font-medium text-[#222222]">+91 9845041912</p>
                  <p className="font-medium text-[#222222]">+91 9900099963</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" rounded-md bg-white shadow-md"
            >
              <div className=" overflow-hidden">
                <div className=" h-20 bg-[#003366] relative rounded-t-md">
                  <div className=" absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-[#FF6F61] flex items-center justify-center">
                    <FiMail className=" text-white h-6 w-6'" />
                  </div>
                </div>
                <div className=" p-6 pt-10">
                  <h3 className=" font-bold text-lg text-[#222222]">
                    Email Us
                  </h3>
                  <p className=" text-sm mb-1 text-[#555555]">
                    We'll respond within 24 hours
                  </p>
                  <p className=" font-medium text-[#222222]">
                  sales@pragathiinfrarealty.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  type="hidden"
                  value={import.meta.env.VITE_FORM_API_KEY}
                  {...register("access_key")}
                />
                <input type="hidden" {...register("subject")} />
                <input
                  type="hidden"
                  value="Pragathi Infra Realty"
                  {...register("from_name")}
                />
                <Fieldset
                  legend="Fill up the form below"
                  variant="filled"
                  className=""
                >
                  <div className=" my-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium "
                    >
                      Name
                    </label>
                    <Input
                      variant="filled"
                      placeholder="Enter your name"
                      type="text"
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className="mt-1 block w-full rounded-md  shadow-sm focus:border-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className=" my-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium "
                    >
                      Email
                    </label>
                    <Input
                      variant="filled"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="mt-1 block w-full rounded-md  shadow-sm focus:border-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className=" my-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium "
                    >
                      Phone Number
                    </label>
                    <Input
                      variant="filled"
                      placeholder="Enter your mobile number"
                      type="tel"
                      id="phone"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      className="mt-1 block w-full rounded-md  shadow-sm focus:border-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div className=" my-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium "
                    >
                      Message
                    </label>
                    <Textarea
                      placeholder="Enter your query"
                      autosize
                      variant="filled"
                      minRows={4}
                      id="message"
                      rows="8"
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className="mt-1 block w-full rounded-md  shadow-sm focus:border-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className={`w-full bg-[#FF6F61] text- py-2 px-4 rounded-md hover:cta-color/70 focus:outline-none focus:ring-2  focus:ring-opacity-50 transition duration-150 ease-in-out 
                      ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </Fieldset>
              </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
