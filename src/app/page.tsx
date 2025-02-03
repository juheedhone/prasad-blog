import Article from "@/components/Article";
import Badge from "@/components/Badge";
import NavBar from "@/components/NavBar";
import SearchInput from "@/components/SearchInput";

const Page = () => {
  return (
    <>
      <div>
        {/* navbar */}
        <div className="pb-8 max-w-full">
          <NavBar />
        </div>
        <p className="font-bold text-xl pb-4">Tags</p>
        {/* badges */}
        <div className="pb-8 gap-2 flex flex-wrap">
          <Badge name="Fashion" color="#FFC7C7" />
          <Badge name="photography" color="#C7FFFB" />
          <Badge name="SEO" color="#C7E4FF" />
          <Badge name="Content" color="#DEC7FF" />
          <Badge name="Culture" color="#ffC7e8" />
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Article heading="Trending marketing hack for fashion" time={2} />
          <Article heading="Trending marketing hack for fashion" time={2} />
          <Article heading="Trending marketing hack for fashion" time={2} />
          <Article heading="Trending marketing hack for fashion" time={2} />
          <Article heading="Trending marketing hack for fashion" time={2} />
        </div>
        {/* search Input */}
        <div className="pt-4">
          <SearchInput />
        </div>
        {/* <DialogBadge /> */}
      </div>
    </>
  );
};

export default Page;
