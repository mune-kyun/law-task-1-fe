import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const YearPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      if (isNaN(slug)) {
        const data = await (
          await fetch(`http://35.209.178.149:3000/shio/name/${slug}`)
        ).json();
        setData(data);
      } else {
        const data = await (
          await fetch(`http://35.209.178.149:3000/shio/${slug}`)
        ).json();
        setData(data.data);
      }

      console.log(data);
    };

    if (slug) dataFetch();
  }, [slug]);

  return (
    <div className="p-5 flex flex-col justify-between gap-5">
      <p class="text-center w-full text-bold text-lg">
        {data?.name} {!isNaN(slug) && <span>Year {slug}</span>}
      </p>
      <div className="w-full flex justify-center">
        <img
          src={`/${data?.name?.toLowerCase()}.jpg`}
          className="w-[20%] h-auto object-cover"
        />
      </div>
      <div className="flex gap-2">
        <p className="font-semibold">Personality:</p>
        {data?.personality.map((p, idx) => {
          return <p key={idx}>{p}</p>;
        })}
      </div>
      <div className="flex gap-2">
        <p className="font-semibold">Years:</p>
        {data?.years.map((p, idx) => {
          return <p key={idx}>{p}</p>;
        })}
      </div>
      <p>{data?.description}</p>
    </div>
  );
};

export default YearPage;
