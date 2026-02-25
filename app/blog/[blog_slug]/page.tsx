
// // E:\Researchers_next\researchers\app\blog\[blog_slug]/page.tsx
// import { Calendar, User } from "lucide-react";

// async function getPostData(slug: string) {
//   // Debug: Log the slug to see if it's correct in your terminal
//   console.log("Fetching slug:", slug); 
  
//   const res = await fetch(`https://bck.siyahfy.com/wp-json/custom/v1/post/${slug}`, {
//     next: { revalidate: 60 },
//   });
  
//   if (!res.ok) return null;
//   return res.json();
// }

// // 1. Notice the 'params' type is now a Promise
// export default async function SingleBlogPage({ params }: { params: Promise<{ blog_slug: string }> }) {
  
//   // 2. Await the params before using them
//   const { blog_slug } = await params;
  
//   const post = await getPostData(blog_slug);

//   if (!post) {
//     return (
//       <div className="py-40 text-center">
//         <h2 className="text-2xl font-bold">Post not found</h2>
//         <p className="text-gray-500">Slug: {blog_slug}</p>
//       </div>
//     );
//   }

//   return (
//     <article className="bg-white min-h-screen pb-20">
//       <div className="w-full h-[60vh] relative">
//         <img 
//           src={post.featured_image} 
//           className="w-full h-full object-cover" 
//           alt={post.title} 
//         />
//         <div className="absolute inset-0 bg-black/40 flex items-end">
//           <div className="max-w-4xl mx-auto px-5 mb-12 text-white">
//             <span className="bg-purple-600 px-3 py-1 rounded text-sm font-bold uppercase mb-4 inline-block">
//               {post.categories?.[0] || "Blog"}
//             </span>
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight">{post.title}</h1>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto px-5 mt-12">
//         <div className="flex items-center gap-6 mb-8 text-gray-500 border-b pb-6">
//           <div className="flex items-center gap-2">
//             <Calendar size={18} />
//             <span>{post.published_date}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <User size={18} />
//             <span>Siyahfy Editorial</span>
//           </div>
//         </div>

//         <div 
//           className="prose prose-lg max-w-none prose-purple 
//           prose-headings:font-bold prose-p:text-gray-700 prose-li:text-gray-700"
//           dangerouslySetInnerHTML={{ __html: post.content }}
//         />
//       </div>
//     </article>
//   );
// }


////new

// E:\Researchers_next\researchers\app\blog\[blog_slug]/page.tsx
import SingleBlog from "@/components/SingleBlog";

async function getPostData(slug: string) {
  const res = await fetch(`https://bck.siyahfy.com/wp-json/custom/v1/post/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
}

async function getAllPosts() {
  const res = await fetch("https://bck.siyahfy.com/wp-json/custom/v1/posts", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data || [];
}

export default async function Page({ params }: { params: Promise<{ blog_slug: string }> }) {
  // CRITICAL: You must await params in Next.js 15
  const { blog_slug } = await params;
  
  const [post, allPosts] = await Promise.all([
    getPostData(blog_slug),
    getAllPosts(),
  ]);

  if (!post) {
    return <div className="py-40 text-center font-bold">POST NOT FOUND: {blog_slug}</div>;
  }

  // Find Prev and Next posts for the navigation section
  const currentIndex = allPosts.findIndex((p: any) => p.slug === blog_slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Get sidebar posts (excluding current one)
  const sidebarPosts = allPosts.filter((p: any) => p.slug !== blog_slug).slice(0, 4);

  return (
    <main className="bg-[#fcfcfc] pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-5">
        <SingleBlog 
          post={post} 
          sidebarPosts={sidebarPosts} 
          prevPost={prevPost} 
          nextPost={nextPost} 
        />
      </div>
    </main>
  );
}