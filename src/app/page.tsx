import DialogBadge from "@/components/DialogBadge";

const Page = () => {
  return (
    <>
      <div className="px-4 py-4">
        {/* navbar */}
        {/* <div className="pb-8">
          <NavBar />
        </div>
        <p className="font-bold text-xl pb-4">Tags</p> */}
        {/* badges */}
        {/* <div className="pb-8 gap-2">
          <Badge name="Fashion" color="#FFC7C7" />
          <Badge name="photography" color="#C7FFFB" />
          <Badge name="SEO" color="#C7E4FF" />
          <Badge name="Content" color="#DEC7FF" />
          <Badge name="Culture" color="#ffC7e8" />
        </div> */}
        {/* Cards */}
        {/* <div className="grid  gap-2 lg:grid-flow-col md:grid-cols-2 md:gap-2 lg:grid-cols-4">
          <Article heading="Trending marketing hack for fashion" time={2} />
          <Article heading="Trending marketing hack for fashion" time={2} />
          <Article heading="Trending marketing hack for fashion" time={2} />
          <Article heading="Trending marketing hack for fashion" time={2} />
          <Article heading="Trending marketing hack for fashion" time={2} />
        </div> */}
        {/* search Input */}
        {/* <div className="pt-4">
          <SearchInput />
        </div> */}
        <DialogBadge />
      </div>
    </>
  );
};

export default Page;
