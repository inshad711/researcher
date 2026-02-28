
// // E:\Researchers_next\researchers\components\BlogCard1.tsx

// "use client";
// import React from 'react';
// import { Calendar, Clock } from 'lucide-react';

// // --- Types ---
// interface BlogPost {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   readTime: string;
//   image: string; 
// }

// // --- Mock Data ---
// const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     title: "Gamification in WooCommerce: How to Turn Browsers into Buyers with...",
//     description: "Your customers are bored, to the point where nearly half of them are abandoning any shopping intention. You need to fix that if you want to grow.",
//     date: "06 May 2025",
//     readTime: "15 min read",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900",
//   },
//   {
//     id: 2,
//     title: "Best Gamification Plugins for WordPress",
//     description: "WordPress engagement and conversion are something every business and store owner wants to achieve. This is especially important in current times.",
//     date: "16 April 2025",
//     readTime: "15 min read",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
//   },
//   {
//     id: 3,
//     title: "Best Popup Builder Tools in 2025",
//     description: "It's not easy to keep individuals on your site and have them do something. People have attention spans of several seconds.",
//     date: "15 April 2025",
//     readTime: "13 min read",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
//   }
// ];

// const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
//   return (
//     <div className="flex flex-col border-2 border-gray-100 p-[7px] rounded-2xl bg-gary-500 group w-full">
//       {/* 1. Image: Full width of the grid column */}
//       <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
//         <img 
//           src={post.image} 
//           alt={post.title}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>

//       <div className="relative -mt-12 bg-white rounded-2xl py-6 px-4 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 z-10 mx-0">
//         <h3 className="text-[1.15rem] line-clamp-1 font-semibold text-gray-900 leading-tight mb-3 group-hover:text-purple-600 transition-colors duration-300">
//           {post.title}
//         </h3>
        
//         <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 font-medium">
//           {post.description}
//         </p>

//         {/* Footer Meta */}
//         <div className="border-t border-gray-50 flex items-center justify-between text-gray-500 text-xs font-bold uppercase tracking-wider">
//           <div className="flex items-center gap-2">
//             <Calendar size={14} className="text-black" />
//             <span>{post.date}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Clock size={14} className="text-black" />
//             <span>{post.readTime}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function BlogGrid1() {
//   return (
//     <div className="">
//       <main className="max-w-6xl mx-auto px-5 py-12">
//       <header className="pt-20 pb-12 px-5 text-center">
//         <div className="max-w-3xl mx-auto">
//           <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-purple-600 uppercase bg-purple-100 rounded-full">
//             Our Insights
//           </span>
//           <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
//             Latest from the <span className="text-purple-600">Blog</span>.
//           </h1>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             Discover the latest trends in e-commerce, gamification, and digital marketing 
//             to help your business grow faster in 2025.
//           </p>
//         </div>
//       </header>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16">
//           {blogPosts.map((post) => (
//             <BlogCard key={post.id} post={post} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// ///////dynamic
// // E:\Researchers_next\researchers\components\BlogGrid1.tsx
// import React from 'react';
// import { Calendar, Clock } from 'lucide-react';
// import Link from 'next/link';

// interface WordPressPost {
//   title: string;
//   excerpt: string;
//   slug: string;
//   published_date: string;
//   featured_image: string;
//   categories: string[];
// }

// const BlogCard = ({ post }: { post: WordPressPost }) => {
//   return (
//     <Link href={`/blog/${post.slug}`} className="flex flex-col border-2 border-gray-100 p-[7px] rounded-2xl bg-white group w-full transition-all hover:shadow-lg">
//       <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
//         <img 
//           src={post.featured_image} 
//           alt={post.title}
//           className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>

//       <div className="relative -mt-12 bg-white rounded-2xl py-6 px-4 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 z-10 mx-2">
//         <h3 className="text-[1.15rem] line-clamp-2 font-semibold text-gray-900 leading-tight mb-3 group-hover:text-purple-600 transition-colors duration-300">
//           {post.title}
//         </h3>
        
//         <div 
//           className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 font-medium"
//           dangerouslySetInnerHTML={{ __html: post.excerpt }}
//         />

//         <div className="border-t border-gray-50 pt-4 flex items-center justify-between text-gray-500 text-xs font-bold uppercase tracking-wider">
//           <div className="flex items-center gap-2">
//             <Calendar size={14} className="text-purple-600" />
//             <span>{new Date(post.published_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Clock size={14} className="text-purple-600" />
//             <span>5 min read</span> 
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default function BlogGrid1({ posts }: { posts: WordPressPost[] }) {
//   return (
//     <div className="max-w-6xl mx-auto px-5 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
//         {posts.map((post) => (
//           <BlogCard key={post.slug} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// }



// E:\Researchers_next\researchers\components\BlogGrid1.tsx
"use client";
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

// Updated interface to match your WordPress API response
interface WordPressPost {
  title: string;
  excerpt: string;
  slug: string;
  published_date: string;
  featured_image: string;
}

const BlogCard = ({ post }: { post: WordPressPost }) => {
  return (
    // Wrap the card in a Link for navigation
    <Link href={`/blog/${post.slug}`} className="flex flex-col border-2 border-gray-100 p-[7px] rounded-2xl bg-white group w-full transition-all">
      {/* 1. Image: Full width of the grid column */}
      <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-sm">
        <img 
          src={post.featured_image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Your original floating white card design */}
      <div className="relative -mt-12 bg-white rounded-2xl py-6 px-4 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 z-10 mx-0">
        <h3 className="text-[1.15rem] line-clamp-1 font-sans font-normal text-gray-900 leading-tight mb-3 group-hover:text-purple-600 transition-colors duration-300">
          {post.title}
        </h3>
        
        {/* Render the excerpt and strip HTML tags if needed, or use line-clamp */}
        <div 
          className="font-sans line-clamp-3 mb-6"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />

        {/* Footer Meta */}
        <div className="border-t border-gray-50 pt-2 flex items-center justify-between text-gray-500 text-xs font-normal uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-black" />
            <span>{new Date(post.published_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-black" />
            <span>5 min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function BlogGrid2({ posts }: { posts: WordPressPost[] }) {
  return (
    <div className="">
      <main className="max-w-6xl mx-auto px-4 md:px-5 pb-12 pt-32">
        <header className="pt-5 pb-12 px-5 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-purple-600 uppercase bg-purple-100 rounded-full">
              Our Blog
            </span>
            <h1 className="text-3xl md:text-[38px] font-normal text-[#101010] leading-[42.2px] mb-5">
              {/* Latest from the <span className="text-purple-600">Blog</span>. */}
              {/* Latest from the <span
  className="bg-gradient-to-r from-[#D62872] via-[#F15A29] via-[#F6A623] to-[#2E9EE6] bg-clip-text text-transparent"
>
  Blog
</span>. */}
   Latest from the <span className="bg-[radial-gradient(circle_at_30%_50%,#D62872_0%,#F15A29_35%,#F6A623_60%,#2E9EE6_100%)] bg-clip-text text-transparent">
  Blog
</span>.
            </h1>
            <p className=" max-w-lg font-sans mx-auto">
              Discover the latest trends in e-commerce, gamification, and digital marketing 
              to help your business grow faster in 2026.
            </p>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}