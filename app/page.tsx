import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  const posts = [
    {
      title: "Next.js ile Modern Web Geliştirme",
      excerpt: "Modern web geliştirme teknolojilerini kullanarak nasıl hızlı ve etkili web siteleri oluşturabilirsiniz?",
      date: "13 Şubat 2025",
      readTime: "5 dk okuma"
    },
    {
      title: "Tailwind CSS İpuçları ve Püf Noktaları",
      excerpt: "Tailwind CSS ile daha etkili stil geliştirme teknikleri ve best practice yaklaşımları.",
      date: "12 Şubat 2025",
      readTime: "4 dk okuma"
    },
    {
      title: "Web Performans Optimizasyonu",
      excerpt: "Web sitenizin performansını artırmak için kullanabileceğiniz teknikler ve araçlar.",
      date: "11 Şubat 2025",
      readTime: "6 dk okuma"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1E1E1E] mb-4">
            Teknoloji ve Yazılım Blogu
          </h1>
          <p className="text-xl text-[#333333] mb-8">
            Modern web teknolojileri, yazılım geliştirme ve dijital dünya hakkında içerikler
          </p>
          <button className="bg-[#F4A261] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Tüm Yazılar
          </button>
        </div>

        {/* Featured Posts */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-[#1E1E1E] mb-6">Öne Çıkan Yazılar</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <article key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <span className="text-sm text-[#333333] opacity-75">{post.date}</span>
                  <span className="mx-2 text-[#333333] opacity-50">•</span>
                  <span className="text-sm text-[#333333] opacity-75">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1E1E1E] mb-3">{post.title}</h3>
                <p className="text-[#333333] mb-4">{post.excerpt}</p>
                <button className="text-[#F4A261] flex items-center hover:opacity-80 transition-opacity">
                  Devamını Oku <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;