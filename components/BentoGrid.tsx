import HeadingComponent from "./HeadingComponent";

const BentoGrid = () => {
  return (
    <section className="min-h-screen px-4 w-full flex flex-col gap-20 items-center bg-white p-28">
      {/* <HeadingComponent
        heading="Bento Grid"
        variant="gradient"
      /> */}
      <div className="grid max-w-7xl mx-auto md:px-4 h-[calc(150vh-12rem)] md:h-[calc(150vh-12rem)] w-full grid-cols-1 grid-rows-4 md:grid-cols-10 md:grid-rows-4 gap-4">
        <div className="bg-[linear-gradient(135deg,#000_20%,#F37036_100%)] md:col-span-6 md:row-span-2 rounded-3xl flex justify-center items-center">
          One
        </div>
        <div className="bg-[linear-gradient(135deg,#000_20%,#007DC5_100%)] md:col-span-4 md:row-span-2 rounded-3xl flex justify-center items-center">
          Two
        </div>
        <div className="bg-[linear-gradient(135deg,#000_20%,#8B5CF6_100%)] md:col-span-4 md:row-span-2 rounded-3xl flex justify-center items-center">
          Three
        </div>
        <div className="bg-[linear-gradient(135deg,#000_20%,#10B981_100%)] md:col-span-6 md:row-span-2 rounded-3xl flex justify-center items-center">
          Four
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
