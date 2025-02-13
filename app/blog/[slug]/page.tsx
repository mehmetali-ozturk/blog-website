import { Calendar, Clock, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';

const BlogPostDetail = () => {
  const post = {
    title: "Next.js ile Modern Web Geliştirme",
    date: "13 Şubat 2025",
    readTime: "5 dk okuma",
    category: "Web Geliştirme",
    author: {
      name: "Ali Yılmaz",
      avatar: "/api/placeholder/40/40",
      title: "Senior Web Developer"
    },
    content: `
      Modern web geliştirme dünyasında Next.js, React tabanlı uygulamalar geliştirmek için en popüler çözümlerden biri haline geldi. Bu yazıda, Next.js'in sunduğu temel özellikleri ve avantajları inceleyeceğiz.

      ## Next.js Nedir?

      Next.js, React uygulamaları için geliştirilmiş bir web uygulama çatısıdır. Sunucu tarafında render etme (SSR), statik site oluşturma (SSG) ve API rotaları gibi özellikler sunar.

      ## Temel Özellikler

      1. **Otomatik Sayfa Yönlendirme**: pages dizini altında oluşturduğunuz dosyalar otomatik olarak route'lara dönüşür.

      2. **Image Optimizasyonu**: Next.js Image komponenti ile otomatik görsel optimizasyonu sağlanır.

      3. **API Routes**: /api dizini altında serverless fonksiyonlar oluşturabilirsiniz.

      ## Performans Avantajları

      Next.js'in sunduğu optimizasyonlar sayesinde web siteniz daha hızlı yüklenir ve daha iyi bir kullanıcı deneyimi sunar.
    `,
    relatedPosts: [
      {
        title: "Tailwind CSS İpuçları",
        excerpt: "Tailwind CSS ile daha etkili stil geliştirme teknikleri.",
        date: "12 Şubat 2025",
      },
      {
        title: "Web Performans Optimizasyonu",
        excerpt: "Web sitenizin performansını artırmak için teknikler.",
        date: "11 Şubat 2025",
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <span className="text-sm px-3 py-1 bg-[#F4A261] text-white rounded-full">
            {post.category}
          </span>
          <h1 className="text-4xl font-bold text-[#1E1E1E] mt-4 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-[#1E1E1E]">{post.author.name}</p>
                <p className="text-sm text-[#333333]">{post.author.title}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-[#333333]">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="mr-4">{post.date}</span>
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose max-w-none mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-[#333333] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Share Buttons */}
        <div className="border-t border-b py-6 mb-12">
          <div className="flex items-center space-x-4">
            <span className="text-[#1E1E1E] font-medium">Paylaş:</span>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Twitter className="h-5 w-5 text-[#333333]" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Facebook className="h-5 w-5 text-[#333333]" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Linkedin className="h-5 w-5 text-[#333333]" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Share2 className="h-5 w-5 text-[#333333]" />
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <div>
          <h2 className="text-2xl font-bold text-[#1E1E1E] mb-6">
            İlgili Yazılar
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {post.relatedPosts.map((relatedPost, index) => (
              <article key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-[#1E1E1E] mb-3">
                  {relatedPost.title}
                </h3>
                <p className="text-[#333333] mb-4">{relatedPost.excerpt}</p>
                <span className="text-sm text-[#333333] opacity-75">
                  {relatedPost.date}
                </span>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPostDetail;