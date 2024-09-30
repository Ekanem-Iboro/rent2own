import TextField from "./reuseable/TextField";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import { useState } from "react";
import { ContactAdressPhone } from "./reuseable/ContactAdressPhone";
import { useContactUs } from "@/hooks/mutation";
import Loader from "./reuseable/Loader";
// import ctwitter from "../assets/icons/c_twitter.svg";
// import cinstagram from "../assets/icons/c_instagram.svg";
// import cfacebook from "../assets/icons/c_facebook.svg";
const contactSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Field is required"),
  phone: z.string().min(11, "Phone Number is required"),
});

// type definition for login form
export type ContactInput = z.TypeOf<typeof contactSchema>;

const Contact = () => {
  // const [countryCode, setCountryCode] = useState("+1");
  // const [phoneNumber, setPhoneNumber] = useState("");

  // const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setCountryCode(e.target.value);
  // };
  const { mutate: ContactUsMutation, isPending: contactUsPending } =
    useContactUs();
  const methods = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });
  // useForm() destructuring or methods destructuring. Here methods = useForm()
  const { handleSubmit, register } = methods;

  const contactMsg = async (data: ContactInput) => {
    console.log(data);
    ContactUsMutation(data);
  };

  return (
    <section className="bg-[#ffffff]  px-4 w-full  py-10 ">
      <ContactAdressPhone />
      <div className="  lg:w-[40%] md:w-[65%] w-full bg-[#ffffff] md:rounded-[15px] rounded-none md:mt-16 mb-10 p-[20px]  m-auto ">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(contactMsg)}>
            <div className="w-full md:grid grid-cols-2 gap-3 mt-6 block">
              <TextField
                name="firstname"
                label="First Name"
                placeholder="e.g Emmanuel"
                variant="long"
              />
              <TextField
                name="lastname"
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
                className={`flex items-center mt-3 w-full border border-[#B7B7B7] focus:border-[#B7B7B7]  rounded-md p-1 
                  
                  `}
              >
                {/* <select
                  value={countryCode}
                  onChange={handleCountryChange}
                  className="  w-[16%] focus:outline-none "
                >
                  <option value="AUS" className="bg-[#ffffff]">
                    AUS
                  </option>
                </select> */}
                <input
                  {...register("phone")}
                  type="tel"
                  className={`focus:outline-none  py-2 w-full `}
                  // value={phoneNumber}
                  placeholder="0468319716"
                />
              </div>
              {methods.formState.errors.message && (
                <p className="text-[#DA1E28] text-sm mt-[6px]">
                  {methods.formState.errors.phone?.message}
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
            <button className="w-full bg-secondary py-3 px-[4rem] rounded-[12px] text-white mt-6 text-[16px] font-[600] leading-[19.2px] flex items-center justify-center gap-1">
              {contactUsPending && <Loader size={10} />}
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
