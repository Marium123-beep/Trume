import React, { useState } from "react";
import Header from "../components/Header";
import { IoClose } from "react-icons/io5";
import { useFormik } from "formik";
import * as Yup from "yup";

const UserDeactivation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 

  const formik = useFormik({
    initialValues: {
      flagsForTempBan: '',
      tempBansForPermBan: '',
      tempBanDuration: ''
    },
    validationSchema: Yup.object({
      flagsForTempBan: Yup.number()
        .typeError("Only numbers are allowed")
        .required("Required"),
      tempBansForPermBan: Yup.number()
        .typeError("Only numbers are allowed")
        .required("Required"),
      tempBanDuration: Yup.number()
        .typeError("Only numbers are allowed")
        .required("Required")
    }),
    onSubmit: (values) => {
      console.log("Form Values:", values);
      setIsModalOpen(false);
    },
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Header />

      <div className="flex flex-col p-6 w-full h-[calc(100vh-60px)] rounded-lg bg-white border border-[#e5e6ea] overflow-auto">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Automated User Deactivation</h1>
          <div className="relative w-64">
          
              <button className="flex justify-center items-center w-30 p-3 text-nowrap border border-[#f6f6f6] bg-[#4d8073] text-white rounded-3xl ml-[150px] mt-[2px] cursor-pointer" onClick={() => setIsModalOpen(true)}> 
                Change Criteria  </button>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[2fr_3fr_1fr_1fr_auto] bg-[#aed0b8] text-[#609081] font-semibold p-4 rounded-lg w-full">
          <span>User ID</span>
          <span>Name</span>
          <span className="ml-[-180px] ">Flag Count</span>
          <span className="ml-[-100px]">Status</span>
        </div>

        {/* Table Rows */}
        <div className="mt-4 rounded-lg space-y-5">
          {/* Just displaying all for demo; You can slice based on currentPage */}
          {[
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "Temporarily Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Permanently Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "		Temporarily Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "		Permanently Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "		Temporarily Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "		Permanently Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "		Temporarily Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Permanently Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "		Temporarily Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Permanently Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Temporarily  Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Permanently Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Temporarily Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Permanently Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Temporarily  Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Permanently Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Temporarily  Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Permanently Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Temporarily  Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Permanently Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Temporarily  Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Permanently Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Temporarily  Banned" },
            { UserID: "#0025487", Name: "John Doe", FlagCount:"3", status: "	Permanently Banned" },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-[2fr_3fr_1fr_1fr_auto] p-4 bg-[#f0f5f1] text-gray-700 items-center rounded-lg w-full">
              <span>{item.UserID}</span>
              <span>{item.Name}</span>
              <span className="ml-[-180px]">{item.FlagCount}</span>
              <span className="font-semibold text-[#4a4b4a] ml-[-100px]">{item.status}</span>
            </div>
          ))}
        </div>

       
       
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-[#99b6ae] bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
          <button
            className="absolute top-[55px] right-[240px] bg-[#4d8073] text-white rounded-full p-2 cursor-pointer w-14 h-14"
            onClick={() => setIsModalOpen(false)}
          >
            <IoClose size={40} />
          </button>

          <div className="relative bg-white p-6 rounded-lg w-[680px] h-[490px] ml-[200px]">
            <h2 className="text-xl font-bold mb-4">Ban Criteria</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label className="block text-[16px] font-medium text-[#000000]">
                  Flags for Temporary Ban
                </label>
                <input
                  type="text"
                  name="flagsForTempBan"
                  className="mt-2 p-2 w-full border rounded-3xl placeholder:text-[#575757]"
                  placeholder="3"
                  value={formik.values.flagsForTempBan}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.flagsForTempBan && formik.errors.flagsForTempBan && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.flagsForTempBan}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-[16px] font-medium text-[#000000]">
                  Temporary Bans for Permanent Ban
                </label>
                <input
                  type="text"
                  name="tempBansForPermBan"
                  className="mt-2 p-2 w-full border rounded-3xl placeholder:text-[#575757]"
                  placeholder="2"
                  value={formik.values.tempBansForPermBan}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.tempBansForPermBan && formik.errors.tempBansForPermBan && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.tempBansForPermBan}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-[16px] font-medium text-[#000000]">
                  Temporary Ban Duration (Days)
                </label>
                <input
                  type="text"
                  name="tempBanDuration"
                  className="mt-2 p-2 w-full border rounded-3xl placeholder:text-[#575757]"
                  placeholder="7"
                  value={formik.values.tempBanDuration}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.tempBanDuration && formik.errors.tempBanDuration && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.tempBanDuration}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#4d8073] text-white py-3 rounded-3xl mt-4 cursor-pointer"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    


    </div>
  );
};

export default UserDeactivation;


