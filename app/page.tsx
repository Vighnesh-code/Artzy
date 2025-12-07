export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#FDE3EC]/20 py-10 px-7 rounded-2xl overflow-x-hidden flex flex-col gap-10">
      <div>
        <h1 className="text-2xl">Stories</h1>

        {/* Stories Component */}
        <div className="flex h-50 w-full gap-10 mt-5">
          <div className="bg-red-100 h-full w-40"></div>
          <div className="bg-red-100 h-full w-40"></div>
          <div className="bg-red-100 h-full w-40"></div>
          <div className="bg-red-100 h-full w-40"></div>
          <div className="bg-red-100 h-full w-40"></div>
          <div className="bg-red-100 h-full w-40"></div>
          <div className="bg-red-100 h-full w-40"></div>
          <div className="bg-red-100 h-full w-40"></div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl">Recent Posts</h1>
      </div>
    </div>
  );
}
