import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-5 bg-[#026AA7] text-white flex items-center gap-4">
      <p class="font-bold text-lg">
        <Link href="/">CHINESE ZODIAC</Link>
      </p>
      <p class="">
        <Link href="/list">List</Link>
      </p>
    </div>
  );
};

export default Navbar;
