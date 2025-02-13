import { Calendar, Clock, Search } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      title: "Next.js ile Modern Web Geliştirme",
      excerpt: "Modern web geliştirme teknolojilerini kullanarak nasıl hızlı ve etkili web siteleri oluşturabilirsiniz?",
      date: "13 Şubat 2025",
      readTime: "5 dk okuma",
      category: "Web Geliştirme"
    },
    {
      title: "Tailwind CSS İpuçları ve Püf Noktaları",
      excerpt: "Tailwind CSS ile daha etkili stil geliştirme teknikleri ve best practice yaklaşımları.",
      date: "12 Şubat 2025",
      readTime: "4 dk okuma",
      category: "CSS"
    },
    {
      title: "Web Performans Optimizasyonu",
      excerpt: "Web sitenizin performansını artırmak için kullanabileceğiniz teknikler ve araçlar.",
      date: "11 Şubat 2025",
      readTime: "6 dk okuma",
      category: "Performans"
    }
  ];

  const categories = ["Tümü", "Web Geliştirme", "CSS", "JavaScript", "React", "Next.js", "Performans"];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#1E1E1E] mb-4">Blog Yazıları</h1>
          <p className="text-[#333333]">Tüm yazılarımızı burada bulabilirsiniz</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Yazılarda ara..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4A261] bg-white">
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-2">
                <span className="text-sm px-3 py-1 bg-[#F4A261] text-white rounded-full">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-[#1E1E1E] mb-3">{post.title}</h2>
              <p className="text-[#333333] mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-[#333333] opacity-75">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
                <Clock className="h-4 w-4 ml-6 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;