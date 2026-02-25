// // E:\Researchers_next\researchers\components\SingleBlog.tsx
// "use client";
// import React, { useMemo } from 'react';
// import { ChevronRight, ChevronLeft, User, Calendar } from 'lucide-react';
// import Link from 'next/link';

// export default function SingleBlog({ post, sidebarPosts, prevPost, nextPost }: any) {
    
//     // Helper to clean WordPress text
//     const decodeHtml = (html: string) => {
//         if (!html) return '';
//         return html.replace(/&nbsp;/g, ' ')
//                    .replace(/&#8211;/g, '–')
//                    .replace(/&#8217;/g, "'")
//                    .replace(/&amp;/g, '&');
//     };

//     // Table of Contents & Content Logic
//     const { contentWithIds, tocItems } = useMemo(() => {
//         const html = post?.content || '';
//         const toc: any[] = [];
        
//         // This regex finds H2 and H3 tags and gives them unique IDs for the TOC links
//         const withIds = html.replace(/<h([2-3])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match: any, level: any, attrs: any, inner: any) => {
//             const text = inner.replace(/<[^>]*>/g, '').trim();
//             const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
//             toc.push({ id, level: Number(level), text });
//             return `<h${level} id="${id}" class="scroll-mt-32">${inner}</h${level}>`;
//         });

//         return { contentWithIds: withIds, tocItems: toc };
//     }, [post?.content]);

//     return (
//         <div className="w-full">
//             {/* Breadcrumb */}
//             <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-10">
//                 <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
//                 <ChevronRight size={10} />
//                 <Link href="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
//                 <ChevronRight size={10} />
//                 <span className="text-zinc-900 truncate max-w-[200px] md:max-w-none">
//                     {decodeHtml(post.title)}
//                 </span>
//             </nav>

//             <div className="flex flex-col lg:flex-row gap-10">
//                 {/* Left Side: Content */}
//                 <div className="lg:w-[70%]">
//                     <article className="bg-white border border-gray-100 rounded-3xl p-5 md:p-10 shadow-sm">
//                         <div className="mb-8">
//                             <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
//                                 {decodeHtml(post.title)}
//                             </h1>
                            
//                             <div className="flex flex-wrap items-center gap-5 text-zinc-500 text-[11px] font-bold uppercase tracking-widest border-b border-gray-50 pb-8">
//                                 <div className="flex items-center gap-2">
//                                     <User size={14} className="text-purple-600" />
//                                     <span>{post.categories?.[0] || "Siyahfy"}</span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <Calendar size={14} className="text-purple-600" />
//                                     <span>{post.published_date}</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="rounded-2xl overflow-hidden mb-10 shadow-md">
//                             <img src={post.featured_image} alt={post.title} className="w-full h-auto object-cover" />
//                         </div>

//                         {/* TOC Section */}
//                         {tocItems.length > 0 && (
//                             <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-6 mb-10">
//                                 <p className="text-xs font-black uppercase tracking-widest text-purple-900 mb-4">Table of Contents</p>
//                                 <ul className="space-y-3">
//                                     {tocItems.map((item) => (
//                                         <li key={item.id} className={`${item.level === 3 ? 'ml-6' : ''}`}>
//                                             <a href={`#${item.id}`} className="text-sm font-medium text-slate-600 hover:text-purple-600 flex items-center gap-2">
//                                                 <div className="w-1.5 h-1.5 rounded-full bg-purple-300" />
//                                                 {decodeHtml(item.text)}
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}

//                         {/* Main Body */}
//                         <div 
//                             className="prose prose-lg max-w-none 
//                             prose-headings:text-slate-900 prose-headings:font-bold
//                             prose-p:text-slate-600 prose-p:leading-relaxed
//                             prose-strong:text-slate-900 prose-a:text-purple-600"
//                             dangerouslySetInnerHTML={{ __html: contentWithIds }} 
//                         />
//                     </article>

//                     {/* Navigation Bar */}
//                     <div className="grid grid-cols-2 gap-4 mt-10 py-10 border-t border-zinc-100">
//                         {prevPost ? (
//                             <Link href={`/blog/${prevPost.slug}`} className="group">
//                                 <p className="text-[10px] font-black uppercase text-zinc-400 mb-2 flex items-center gap-1">
//                                     <ChevronLeft size={12} /> Previous
//                                 </p>
//                                 <span className="text-sm font-bold group-hover:text-purple-600 line-clamp-2">{decodeHtml(prevPost.title)}</span>
//                             </Link>
//                         ) : <div />}

//                         {nextPost ? (
//                             <Link href={`/blog/${nextPost.slug}`} className="group text-right">
//                                 <p className="text-[10px] font-black uppercase text-zinc-400 mb-2 flex items-center justify-end gap-1">
//                                     Next <ChevronRight size={12} />
//                                 </p>
//                                 <span className="text-sm font-bold group-hover:text-purple-600 line-clamp-2">{decodeHtml(nextPost.title)}</span>
//                             </Link>
//                         ) : <div />}
//                     </div>
//                 </div>

//                 {/* Right Side: Sidebar */}
//                 <aside className="lg:w-[30%]">
//                     <div className="sticky top-32 space-y-8">
//                         <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
//                             <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-2">
//                                 <div className="w-1 h-4 bg-purple-600 rounded-full" /> Recent Stories
//                             </h2>
//                             <div className="space-y-8">
//                                 {sidebarPosts.map((s: any) => (
//                                     <Link key={s.slug} href={`/blog/${s.slug}`} className="group flex flex-col gap-3">
//                                         <div className="aspect-video rounded-xl overflow-hidden">
//                                             <img src={s.featured_image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//                                         </div>
//                                         <h3 className="text-sm font-bold leading-snug group-hover:text-purple-600 transition-colors">
//                                             {decodeHtml(s.title)}
//                                         </h3>
//                                     </Link>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </aside>
//             </div>
//         </div>
//     );
// }


//////new
"use client";
import React, { useMemo, useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft, User, Calendar, Share2, Clock } from 'lucide-react';
import Link from 'next/link';

export default function SingleBlog({ post, sidebarPosts, prevPost, nextPost }: any) {
    const [completion, setCompletion] = useState(0);

    // Scroll Progress Logic
    useEffect(() => {
        const updateScroll = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
            }
        };
        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    const decodeHtml = (html: string) => {
        if (!html) return '';
        return html.replace(/&nbsp;/g, ' ').replace(/&#8211;/g, '–').replace(/&#8217;/g, "'").replace(/&amp;/g, '&');
    };

    const { contentWithIds, tocItems } = useMemo(() => {
        const html = post?.content || '';
        const toc: any[] = [];
        const withIds = html.replace(/<h([2-3])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match: any, level: any, attrs: any, inner: any) => {
            const text = inner.replace(/<[^>]*>/g, '').trim();
            const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            toc.push({ id, level: Number(level), text });
            return `<h${level} id="${id}" class="scroll-mt-32 group relative">${inner}</h${level}>`;
        });
        return { contentWithIds: withIds, tocItems: toc };
    }, [post?.content]);

    return (
        <div className="w-full relative">
         
            {/* Header Section: Editorial Style */}
            <header className="max-w-4xl mx-auto text-center mb-16">
                <nav className="flex justify-center items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-purple-600 mb-8">
                    <Link href="/blog" className="hover:opacity-70">Insights</Link>
                    <span className="w-1 h-1 rounded-full bg-zinc-300" />
                    <span className="text-zinc-400">{post.categories?.[0] || "Story"}</span>
                </nav>
                
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                    {decodeHtml(post.title)}
                </h1>

                <div className="flex items-center justify-center gap-6 text-zinc-500 text-[11px] font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                            <User size={14} className="text-purple-600" />
                        </div>
                        <span>By Siyahfy Team</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{post.published_date}</span>
                    </div>
                </div>
            </header>

            {/* Main Visual */}
            <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-20 shadow-2xl">
                <img 
                    src={post.featured_image} 
                    alt={post.title} 
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="flex flex-col lg:flex-row gap-16 relative">
                {/* Left Side: Dynamic TOC */}
                <aside className="hidden lg:block lg:w-[250px]">
                    <div className="sticky top-40">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">In this article</p>
                        <ul className="space-y-4 border-l-2 border-zinc-100">
                            {tocItems.map((item) => (
                                <li key={item.id} className={`${item.level === 3 ? 'pl-6' : 'pl-4'} -ml-[2px] border-l-2 border-transparent hover:border-purple-600 transition-colors`}>
                                    <a href={`#${item.id}`} className="text-xs font-bold text-zinc-500 hover:text-purple-600 transition-colors block">
                                        {decodeHtml(item.text)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Center: Content */}
                <div className="flex-1">
                    <article className="relative">
                        {/* Abstract / First Paragraph Stylized */}
                        <div 
                            className="prose prose-lg max-w-none 
                            prose-p:text-slate-600 prose-p:leading-[1.8]
                            prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight
                            prose-strong:text-slate-900 prose-a:text-purple-600 prose-a:font-bold
                            first-letter:text-7xl first-letter:font-black first-letter:text-slate-900 
                            first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]"
                            dangerouslySetInnerHTML={{ __html: contentWithIds }} 
                        />
                    </article>

             
                </div>

                {/* Right Side: Floating Sidebar */}
                <aside className="lg:w-[320px]">
                    <div className="sticky top-32 space-y-10">
                     

                        <div>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900 mb-8 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-purple-600" /> Latest Reads
                            </h3>
                            <div className="space-y-8">
                                {sidebarPosts.map((s: any) => (
                                    <Link key={s.slug} href={`/blog/${s.slug}`} className="group flex gap-4 items-start">
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                                            <img src={s.featured_image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold leading-tight group-hover:text-purple-600 transition-colors line-clamp-2">
                                                {decodeHtml(s.title)}
                                            </h3>
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase mt-2 block">5 min read</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}