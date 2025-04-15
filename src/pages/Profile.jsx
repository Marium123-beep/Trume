import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Header from "../components/Header";

const Profile = () => {
  const [image, setImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "abc@gmail.com",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
    }),
    onSubmit: (values) => {
      console.log("Updated Profile:", values);
    },
  });

  const passwordFormik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      console.log("Updated Password:", values);
      setIsModalOpen(false);
    },
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header />
      <div className="border border-gray-300 rounded-lg bg-white p-6 w-[1100px] max-w-[95%] ml-2">
        <h2 className="text-xl font-bold mb-6">Profile Settings</h2>
        <div className="border border-gray-300 rounded-lg p-6 w-full max-w-2xl">
          {/* Profile Image Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Profile Image</h3>
            <div className="relative">
              <img
                src={image || "/assets/user.jpg"}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-gray-100 object-cover"
              />
              <label className="absolute top-2 right-[-10px] bg-[#4d8073] text-white rounded-full py-3 px-4 cursor-pointer">
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                ✎
              </label>
            </div>
          </div>

          {/* Profile Form */}
          <form className="mt-6" onSubmit={formik.handleSubmit}>
            <label className="block text-sm font-medium text-black">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="mt-1 p-2 w-full border rounded-3xl text-[#767676] placeholder:text-[#767676] focus:ring-green-700 focus:border-green-700"
              placeholder="Alex"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
            ) : null}

            <label className="block mt-4 text-sm font-medium text-black">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-3xl  text-[#7a7a7a] focus:ring-green-700 focus:border-green-700"
              placeholder="abc@gmail.com"
              value="abc@gmail.com"
              disabled
            />

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button type="submit" className="w-1/2 bg-[#4d8073] text-white py-2 rounded-3xl cursor-pointer">
                Update
              </button>
              <button
                type="button"
                className="w-1/2 border border-[#4d8073] text-[#4d8073] py-2 rounded-3xl cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Password Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#99b6ae] bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
              {/* Close Button */}
              <button
            className="absolute top-[55px] right-[240px] bg-[#4d8073] text-white rounded-full p-2 cursor-pointer w-14 h-14"
            onClick={() => setIsModalOpen(false)}
             >
            <IoClose size={40} />
             </button>
          <div className="relative bg-white p-6 rounded-lg w-[680px] h-[380px] ml-[200px]">
          
            <h2 className="text-xl font-bold mb-4">Update Password</h2>
            <form onSubmit={passwordFormik.handleSubmit}>
              <label className="mt-2 block text-[16px] font-medium text-[#000000]">Change Password</label>
              <div className="relative">
              <input
               type={showPassword ? "text" : "password"}
               name="password"
               className="mt-4 p-2 w-full border rounded-3xl pr-10  placeholder:text-[#575757]"
               placeholder="********"
               value={passwordFormik.values.password}
            onChange={passwordFormik.handleChange}
             onBlur={passwordFormik.handleBlur}
             />
                <button
                  type="button"
                  className="absolute top-6 right-3 text-[#c1c1c1]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                </button>
              </div>
              {passwordFormik.touched.password && passwordFormik.errors.password && (
                <div className="text-red-500 text-sm">{passwordFormik.errors.password}</div>
              )}

              <label className="block mt-6 text-[16px] font-medium text-[#000000]">Confirm Change Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="mt-3 p-2 w-full border rounded-3xl pr-10  placeholder:text-[#575757]"
                  placeholder="********"
                  {...passwordFormik.getFieldProps("confirmPassword")}
                />
                <button
                  type="button"
                  className="absolute top-5 right-3 text-[#c1c1c1]"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                </button>
              </div>
              {passwordFormik.touched.confirmPassword && passwordFormik.errors.confirmPassword && (
                <div className="text-red-500 text-sm">{passwordFormik.errors.confirmPassword}</div>
              )}

              <button type="submit" className="w-full bg-[#4d8073] text-white py-3 rounded-3xl mt-[25px] cursor-pointer">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;
