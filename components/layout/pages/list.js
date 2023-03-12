import Link from "next/link";
import { useEffect, useState } from "react";

const ListPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(`http://35.209.178.149:3000/shio`)
      ).json();

      console.log(data);
      setData(data);
    };

    dataFetch();
  }, []);

  return (
    <div className="p-5 flex flex-col justify-between gap-5">
      <p>All Zodiacs</p>
      <div className="flex flex-wrap gap-4">
        {data?.map((data, idx) => {
          return (
            <div key={idx} className="w-[20%] h-[20%]">
              <Link href={`/name/${data?.name}`}>
                <img
                  src={`/${data?.name?.toLowerCase()}.jpg`}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListPage;
