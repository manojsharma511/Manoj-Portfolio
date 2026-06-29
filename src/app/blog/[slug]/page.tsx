import { BLOG_POSTS } from "@/data/blog"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, User, Hash } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: `${post.title} | Manoj Kumar Sharma Blog`,
    description: post.excerpt,
    keywords: post.keywords.join(", "),
    alternates: {
      canonical: `https://manojkumarsharma.vercel.app/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://manojkumarsharma.vercel.app/blog/${post.slug}`,
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Schema representation
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://manojkumarsharma.vercel.app/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Manoj Kumar Sharma Portfolio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://manojkumarsharma.vercel.app/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://manojkumarsharma.vercel.app/blog/${post.slug}`
    }
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-950 text-white">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-400 transition-colors mb-12 uppercase tracking-wider"
        >
          <ArrowLeft size={14} />
          Back to Blog
        </Link>

        {/* Article Container */}
        <article className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-blue-500/10 text-cyan-400 border border-blue-500/15">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {post.title}
            </h1>
            
            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-b border-white/5 pb-6 text-slate-400 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <User size={16} className="text-blue-400" />
                <span className="font-semibold text-slate-300">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Keywords / Tags */}
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((kw) => (
              <span
                key={kw}
                className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold rounded-lg bg-slate-900 border border-white/5 text-slate-300"
              >
                <Hash size={10} className="text-slate-500" />
                {kw}
              </span>
            ))}
          </div>

          {/* Body Content */}
          <div
            className="text-slate-300 leading-relaxed text-base sm:text-lg space-y-6 pt-4 
              [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:pt-6 [&>h3]:tracking-tight
              [&>p>strong]:text-white [&>p>strong]:font-semibold
              [&>p>em]:text-blue-400 [&>p>em]:not-italic [&>p>em]:font-semibold
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul>li>strong]:text-white
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Internal Linking Footer */}
          <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <h4 className="text-base font-bold text-white mb-2">Need an enterprise software engineer or developer?</h4>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              I specialize in Java Spring Boot backend design, SAP ERP integrations, and building high-performance customer-facing interfaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02]"
              >
                Let's Talk
              </Link>
              <Link
                href="/"
                className="px-5 py-2.5 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02]"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
