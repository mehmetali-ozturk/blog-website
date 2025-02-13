export default function Hero() {
    return (
      <div className="container mx-auto text-center py-16">
        <h1 className="text-5xl font-bold text-primary">Welcome to My Blog</h1>
        <p className="text-lg mt-4">Explore the latest articles and insights.</p>
        <button className="mt-6 bg-accent text-primary px-6 py-2 rounded-lg font-semibold hover:bg-opacity-80 transition">
          Read Blog
        </button>
      </div>
    );
  }