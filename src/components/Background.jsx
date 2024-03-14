const Background = () => {
  return (
    <>
      <div className="fixed z-10 w-full h-screen">
        <div className=" absolute top-14 w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold  ">
          Documents
        </div>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-none tracking-tighter text-[250px] font-extrabold text-zinc-900 opacity-80 ">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
