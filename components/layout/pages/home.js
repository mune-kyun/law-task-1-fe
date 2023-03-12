import { useRouter } from "next/router";
import { useState } from "react";

const HomePage = () => {
  const router = useRouter();
  const [year, setYear] = useState(2000);

  const handleSubmit = async () => {
    router.push(`/year/${year}`);
  };

  return (
    <div className="p-5 flex flex-col justify-between gap-5">
      <p className="text-center w-full">Enter your birth year</p>
      <div className="w-full flex items-center justify-center gap-2">
        <p>Year</p>
        <input
          type="number"
          id="first_name"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5"
          placeholder="2000..."
          required
          onChange={(e) => setYear(e.target.value)}
        />
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-fit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default HomePage;
