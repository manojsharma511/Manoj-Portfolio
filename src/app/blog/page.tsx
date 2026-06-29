import Link from "next/link"
import Image from "next/image"
import { BLOG_POSTS } from "@/data/blog"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"

export const metadata = {
  title: "Technical Blog | Manoj Kumar Sharma | Software Developer Insights",
  description: "Read technical articles on Java Spring Boot, SAP ERP integration, Liferay DXP, clean code practices, and full-stack web development by Manoj Kumar Sharma.",
  alternates: {
    canonical: "https://manojkumarsharma.vercel.app/blog",
  },
}

export default function BlogIndexPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/5 px-4.5 py-1.5 w-fit">
            <BookOpen size={14} className="text-blue-400" />
            <span className="text-xs font-semibold tracking-wider text-blue-300 uppercase">Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Insights & Technical <span className="text-gradient-primary">Writing</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Deep dives into enterprise architectures, SAP ERP workflows, backend engineering in Java Spring Boot, Liferay client extensions, and clean system design principles.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-panel rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between h-[450px] transition-all hover:border-blue-500/30 hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/5 group"
            >
              {/* Visual Cover */}
              <div className="h-44 relative bg-slate-900 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] opacity-35" style={{ backgroundSize: "16px 16px" }} />
                
                {/* Overlay colors depending on category */}
                {post.slug.includes("java") && <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-orange-600/10" />}
                {post.slug.includes("sap") && <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-blue-600/10" />}
                {post.slug.includes("liferay") && <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-indigo-600/10" />}
                {post.slug.includes("software") && <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/10" />}
                {post.slug.includes("full") && <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-emerald-600/10" />}

                {/* Category tag */}
                <span className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-slate-950/80 text-cyan-400 border border-white/5">
                  {post.category}
                </span>

                <div className="z-10 text-slate-400 group-hover:text-blue-400 group-hover:scale-105 transition-all font-semibold font-mono text-sm uppercase">
                  {post.category} GUIDE
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-slate-500 text-xs font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Bottom Trigger */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-blue-400 group-hover:text-cyan-400 transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
