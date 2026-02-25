import ClientCarousel from "@/components/ClientCarousel";
import FAQSection from "@/components/FAQSection";
import BlogGrid2 from "@/components/BlogCard2";
import Hero from "@/components/Hero";
import Industry from "@/components/Industry";
import ResearchSection from "@/components/ResearchSection";
import Stat from "@/components/Stat";
import ServiceSection from "@/components/ServiceSection";

async function getBlogs() {
  const res = await fetch("https://bck.siyahfy.com/wp-json/custom/v1/posts", {
    cache: "no-store",
  });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data || [];
}

export default async function Home() {
  const posts = await getBlogs();

  return (
    <div className="">
<Hero/>

<div>
  <ResearchSection/>
</div>


<ClientCarousel/>
{/* <div>
  <StatCards/>
</div> */}
<Industry/>
<div>
  <Stat/>
</div>
<div>
  <ServiceSection/>
</div>

<div>
  <BlogGrid2 posts={posts.slice(0, 3)} />
</div>
<div>
  <FAQSection/>
</div>
    </div>
  );
}
