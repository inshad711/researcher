// // E:\Researchers_next\researchers\app\blog\page.tsx

import BlogGrid2 from "@/components/BlogCard2";
import BlogGrid1 from "@/components/BlogCard2";

// "use client";

// import BlogCard1 from "@/components/BlogCard1";


// export default function BlogPage() {


//   return (
//     <main className="bg-slate-50 text-slate-900">

//      <div>
//           <BlogCard1/>
//         </div>

//       {/* <section className="templateContainer pt-2">
//         <div className="mx-auto max-w-6xl">
//           <div className="mb-6 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-5 md:flex-row md:items-center md:justify-between">
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Editorial Stream</p>
//             <p className="text-sm text-slate-600">Fresh reads on research operations, strategy, and execution.</p>
//           </div>

//           <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
//             {mosaicPosts.map((post) => (
//               <article key={post.id} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
//                 <div className="relative h-52">
//                   <Image
//                     src={post.image}
//                     alt={post.title}
//                     fill
//                     className="object-cover transition duration-500 group-hover:scale-105"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent" />
//                   <p className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700">
//                     {post.category}
//                   </p>
//                 </div>
//                 <div className="flex flex-1 flex-col p-5">
//                   <h3 className="text-lg font-semibold leading-snug text-slate-900">{post.title}</h3>
//                   <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
//                   <div className="mt-auto pt-5">
//                     <div className="flex items-center justify-between text-xs font-medium text-slate-500">
//                       <span>{post.date}</span>
//                       <span className="inline-flex items-center gap-1">
//                         <Clock3 className="h-3.5 w-3.5" />
//                         {post.readTime}
//                       </span>
//                     </div>
//                     <Link
//                       href="/contact"
//                       className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition group-hover:gap-3"
//                     >
//                       Explore Insight
//                       <ArrowRight className="h-4 w-4" />
//                     </Link>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//           <div className="mt-10 border-t border-slate-200 pt-6">
//             <div className="flex flex-wrap items-center justify-center gap-2">
//               <button
//                 type="button"
//                 onClick={() => goToPage(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
//               >
//                 <ArrowLeft className="h-4 w-4" />
//                 Prev
//               </button>

//               {Array.from({ length: totalPages }, (_, idx) => {
//                 const page = idx + 1;
//                 return (
//                   <button
//                     key={page}
//                     type="button"
//                     onClick={() => goToPage(page)}
//                     className={`h-10 w-10 rounded-full text-sm font-semibold transition ${
//                       currentPage === page
//                         ? "bg-slate-900 text-white"
//                         : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 );
//               })}

//               <button
//                 type="button"
//                 onClick={() => goToPage(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
//               >
//                 Next
//                 <ArrowRight className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         </div>
      
//       </section> */}
//     </main>
//   );
// }



// ///////dynamic
// // E:\Researchers_next\researchers\app\blog\page.tsx


// async function getBlogs() {
//   const res = await fetch("https://bck.siyahfy.com/wp-json/custom/v1/posts", {
//     next: { revalidate: 3600 }, // Cache for 1 hour
//   });
//   if (!res.ok) return [];
//   const json = await res.json();
//   return json.data || [];
// }

// export default async function BlogPage() {
//   const posts = await getBlogs();

//   return (
//     <main className="bg-slate-50 text-slate-900 pt-20">
//       <div className="max-w-6xl mx-auto px-5 text-center">
//         <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-purple-600 uppercase bg-purple-100 rounded-full">
//           Our Insights
//         </span>
//         <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
//           Latest from the <span className="text-purple-600">Blog</span>.
//         </h1>
//       </div>
      
//       {/* Pass the dynamic posts to the Grid component */}
//       <BlogGrid1 posts={posts} />
//     </main>
//   );
// }


// E:\Researchers_next\researchers\app\blog\page.tsx


async function getBlogs() {
  const res = await fetch("https://bck.siyahfy.com/wp-json/custom/v1/posts", {
    cache: 'no-store' // Use this during development to see changes immediately
  });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data || [];
}

export default async function BlogPage() {
  const posts = await getBlogs();

  return (
    <main className="bg-slate-50 text-slate-900">
      <BlogGrid2 posts={posts} />
    </main>
  );
}