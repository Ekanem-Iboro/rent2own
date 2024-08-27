import TextField from "./reuseable/TextField";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
// import ctwitter from "../assets/icons/c_twitter.svg";
// import cinstagram from "../assets/icons/c_instagram.svg";
// import cfacebook from "../assets/icons/c_facebook.svg";
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Field is required"),
  phonenumber: z.string().min(11, "Phone Number is required"),
});

// type definition for login form
export type ContactInput = z.TypeOf<typeof contactSchema>;

const Contact = () => {
  const [countryCode, setCountryCode] = useState("+1");
  // const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  const methods = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });
  // useForm() destructuring or methods destructuring. Here methods = useForm()
  const { handleSubmit, register } = methods;

  const contactMsg = async (data: ContactInput) => {
    console.log(data);
  };

  return (
    <section
      className="bg-[#ffffff] lg:px-[15%] md:px-[8%] px-4 w-full md:pb-3 py-10 "
      id="contact"
    >
      <div className="w-full md:flex block justify-between items-center py-9">
        <div className="text-center w-full">
          <p className="text-[18px] text-[#191919] font-[600] leading-[21.6px] my-3 ">
            Email
          </p>
          <p className="text-[14px] text-[#2D2D2D] font-[500] leading-[16.8px]">
            Our friendly team is here to help.
          </p>
          <p className="text-[14px] text-primary font-[600] leading-[16.8px] mt-5">
            prorichauto@gmail.com
          </p>
        </div>

        <div className="text-center w-full">
          <p className="text-[18px] text-[#191919] font-[600] leading-[21.6px] my-3">
            Office
          </p>
          <p className="text-[14px] text-[#2D2D2D] font-[500] leading-[16.8px]">
            Come say hello at our office HQ.
          </p>
          <p className="text-[14px] text-primary font-[600] leading-[16.8px]  mt-5">
            1801 Ipswich Road, Rocklea, QLD 4106
          </p>
        </div>

        <div className="text-center w-full">
          <p className="text-[18px] text-[#191919] font-[600] leading-[21.6px] my-3">
            Phone
          </p>
          <p className="text-[14px] text-[#2D2D2D] font-[500] leading-[16.8px]">
            Mon-Fri from 8am to 5pm.
          </p>
          <p className="text-[14px] text-primary font-[600] leading-[16.8px] mt-5">
            +61 (046) 609-2198
          </p>
        </div>
        {/* <ul className="flex gap-5 items-center my-8 ">
          {contactLink?.map((item) => (
            <li key={item.id} className="">
              <Link to={item.path} className="underline">
                <img src={item.icon} alt="" className="text-[#191919] font-[600]" />
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
      <div className="  lg:w-[50%] md:w-[65%] w-full bg-[#ffffff] md:rounded-[15px] rounded-none md:mt-20 mb-10 p-[20px]  m-auto ">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(contactMsg)}>
            <div className="w-full md:grid grid-cols-2 gap-3 mt-6 block">
              <TextField
                name="firstName"
                label="First Name"
                placeholder="e.g Emmanuel"
                variant="long"
              />
              <TextField
                name="lastName"
                label="Last Name"
                placeholder="e.g Jimmy"
              />
            </div>
            <div className="mt-6">
              <TextField
                name="email"
                label="Email"
                placeholder="e.g you@gmail.com"
              />
            </div>
            <div className="mt-7">
              <label
                htmlFor="message"
                className=" text-[16px] leading-[19.2px] font-[500] text-[#191919]"
              >
                Phone number
              </label>
              <div
                className={`flex items-center mt-3 w-full border border-[#B7B7B7] focus:border-[#B7B7B7]  rounded-md p-1  ${
                  methods.formState.errors.phonenumber ? "border-[#DA1E28]" : ""
                } `}
              >
                <select
                  value={countryCode}
                  onChange={handleCountryChange}
                  className="  w-[16%] focus:outline-none "
                >
                  <option value="AUS" className="bg-[#ffffff]">
                    AUS
                  </option>
                </select>
                <input
                  {...register("phonenumber")}
                  type="tel"
                  className={`focus:outline-none pl-5 py-2 w-full `}
                  // value={phoneNumber}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              {methods.formState.errors.message && (
                <p className="text-[#DA1E28] text-sm mt-[6px]">
                  {methods.formState.errors.phonenumber?.message}
                </p>
              )}
            </div>
            <div className="mt-6">
              <label
                htmlFor="message"
                className="mt-8 text-[16px] leading-[19.2px] font-[500] text-[#191919]"
              >
                Messages
              </label>
              <textarea
                rows={5}
                {...register("message")}
                id=""
                placeholder="Type your message"
                className={`w-full border border-[#B7B7B7] focus:border-[#B7B7B7] rounded-md p-3  resize-none focus:outline-none ${
                  methods.formState.errors.message ? "border-[#DA1E28]" : ""
                }`}
              ></textarea>
              {methods.formState.errors.message && (
                <p className="text-[#DA1E28] text-sm mt-[6px]">
                  {methods.formState.errors.message.message}
                </p>
              )}
            </div>
            {/* <div className="mt-6 flex item-center ml-2">
              <TextField
                name="checkbox"
                label=""
                placeholder=""
                type="checkbox"
              />
              <p className="text-[14px] text-[#B7B7B7] ml-4 mt-1">
                You agree to our friendly privacy policy.
              </p>
            </div> */}
            <button className="w-full bg-secondary py-3 px-[4rem] rounded-[12px] text-white mt-6 text-[16px] font-[600] leading-[19.2px]">
              Send message
            </button>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default Contact;

// const contactLink = [
//   {
//     id: 1,
//     icon: ctwitter,
//     path: "/",
//   },
//   {
//     id: 2,
//     icon: cinstagram,
//     path: "/",
//   },
//   {
//     id: 3,
//     icon: cfacebook,
//     path: "/",
//   },
// ];
