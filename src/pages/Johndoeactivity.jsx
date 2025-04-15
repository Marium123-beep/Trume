import Header from "../components/Header";
import { useParams } from "react-router-dom";

const Johndoeactivity = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen">
      <Header />

      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-10">
        
        {/* Brand Info Card */}
        <div className="border border-[#4d8073] rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-normal text-black mb-4">Brand Details</h2>

          <div className="flex items-start gap-4">
            <img src="/assets/john.png" alt="John Doe" className="w-24 h-24 object-cover rounded-md" />

            <div className="flex-1">
              <h3 className="text-lg font-medium text-[#404040]">John Doe</h3>
              <p className="text-sm text-[#919191]">johndoe@gmail.com</p>

              <div className="mt-4">
                <p className="text-sm text-[#404040]">Status</p>
                <p className="text-md font-medium text-[#404040]">Active</p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-[#404040]">Date</p>
                <p className="text-md font-medium text-[#404040]">12/12/24</p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-[#404040]">Detail</p>
                <p className="text-md font-medium text-[#404040]">User posted an unverified product listing.</p>
              </div>
            </div>

            <button className="bg-white border border-[#cde1d4] text-[#4d8073] px-4 py-2 rounded-full h-11">
              Activate
            </button>
          </div>
        </div>

        {/* Activity Logs */}
        <div className="border border-[#4d8073] rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold text-[#010101] mb-4">Activity Logs</h2>

          <div className="max-h-[400px] overflow-y-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead className="sticky top-0 bg-[#aed0b8] text-[#4d8073]">
                <tr>
                  <th className="p-3 rounded-tl-xl">Timestamp</th>
                  <th className="p-3 rounded-tr-xl">Action</th>
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
