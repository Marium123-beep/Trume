import Header from "../components/Header";
import { useParams } from "react-router-dom";

const Johndoeactivity = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-[100vh] overflow-y-auto">
      <Header />

      {/* Container */}
      <div className="max-w-6xl flex flex-col relative">
        
        {/* Brand Info Card */}
        <div className="flex flex-col p-6 w-220 rounded-lg border border-[#4d8073]">
          <h2 className="text-[18px] font-normal mr-2 text-black mt-[-5px]">Activity Details</h2>

          <div className="absolute right-7 top-1/3 transform -translate-y-1/2 flex gap-3">
            <button className="bg-white border border-[#cde1d4] text-[#4d8073] p-2 rounded-3xl w-35 h-11 mt-[-330px] cursor-pointer mx-[270px]">
              Activate
            </button>
          </div>

          <div className="bg-white p-6 w-210 rounded-sm mt-3 mr-3 shadow-xs">
            <img src="/assets/john.png" alt="" className="mt-[-15px] ml-[-15px]" />

            <h3 className="ml-[-14px] mt-2 text-[#404040] text-[16px] font-normal">John Doe</h3>
            <p className="text-[#919191] font-normal text-[14px] ml-[-14px]">johndoe@gmail.com</p>
            <p className="text-[#404040] font-normal text-[16px] ml-[-14px] mt-6">Status</p>
            <p className="text-[#404040] font-medium text-[18px] ml-[-14px] mt-2">Active</p>
            <p className="text-[#404040] font-normal text-[16px] ml-[-14px] mt-6">Date</p>
            <p className="text-[#404040] font-medium text-[18px] ml-[-14px] mt-2">12/12/24</p>
            <p className="text-[#404040] font-normal text-[16px] ml-[-14px] mt-6">Detail</p>
            <p className="text-[#404040] font-medium text-[18px] ml-[-14px] mt-3">User posted an unverified product listing.</p>
          </div>
        </div>

        {/* Activity Logs */}
        <div className="border border-[#4d8073] rounded-lg p-6 bg-white shadow-sm w-220 mt-6">
          <h2 className="text-xl font-semibold text-[#010101] mb-4">Activity Logs</h2>

          <div className="max-h-[610px] overflow-y-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead className="sticky top-0 bg-[#aed0b8] text-[#4d8073]">
                <tr>
                  <th className="p-3 rounded-tl-xl">Timestamp</th>
                  <th className="p-3 rounded-tr-xl"></th>
                </tr>
              </thead>
              <tbody>
                {Array(30).fill(0).map((_, i) => (
                  <tr key={i}>
                    <td className="p-3 bg-[#f0f5f1] rounded-l-xl">2025-02-03</td>
                    <td className="p-3 bg-[#f0f5f1] text-[#5a8b7d] rounded-r-xl">
                      {i % 2 === 0 ? "Updated Brand Information" : "Added A New Post"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Johndoeactivity;
