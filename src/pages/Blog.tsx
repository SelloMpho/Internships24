import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top Internships for Graduates in South Africa (2026 Guide)",
    excerpt: "Discover the best internship opportunities for South African graduates across various industries including finance, IT, engineering, and more.",
    category: "Internships",
    date: "December 10, 2024",
    readTime: "8 min read",
    author: "Internships24 Team",
  },
  {
    id: 2,
    title: "Latest Learnerships in South Africa You Can Apply for Today",
    excerpt: "A comprehensive list of currently open learnerships across South Africa. Updated regularly with new opportunities.",
    category: "Learnerships",
    date: "December 8, 2024",
    readTime: "10 min read",
    author: "Internships24 Team",
  },
  {
    id: 3,
    title: "Difference Between Internships, Learnerships & Graduate Programmes",
    excerpt: "Understanding the key differences between these career opportunities and which one is right for your situation.",
    category: "Career Tips",
    date: "December 5, 2024",
    readTime: "6 min read",
    author: "Internships24 Team",
  },
  {
    id: 4,
    title: "How to Apply for Internships in South Africa (Step-by-Step)",
    excerpt: "A detailed guide on the application process, from finding opportunities to submitting a winning application.",
    category: "Career Tips",
    date: "December 3, 2024",
    readTime: "12 min read",
    author: "Internships24 Team",
  },
  {
    id: 5,
    title: "Government Learnerships for Unemployed Youth in South Africa",
    excerpt: "Explore government-sponsored learnership programmes designed to help unemployed youth gain skills and work experience.",
    category: "Learnerships",
    date: "December 1, 2024",
    readTime: "9 min read",
    author: "Internships24 Team",
  },
  {
    id: 6,
    title: "Best Companies Offering Graduate Programmes in South Africa",
    excerpt: "Top companies with structured graduate programmes that offer excellent training and career development opportunities.",
    category: "Graduate Programmes",
    date: "November 28, 2024",
    readTime: "7 min read",
    author: "Internships24 Team",
  },
  {
    id: 7,
    title: "How to Avoid Internship & Learnership Scams",
    excerpt: "Protect yourself from fraudulent job postings with these essential tips and red flags to watch out for.",
    category: "Career Tips",
    date: "November 25, 2024",
    readTime: "5 min read",
    author: "Internships24 Team",
  },
  {
    id: 8,
    title: "Paid vs Unpaid Internships: What South African Graduates Should Know",
    excerpt: "Understanding your rights and making informed decisions about paid and unpaid internship opportunities.",
    category: "Internships",
    date: "November 22, 2024",
    readTime: "6 min read",
    author: "Internships24 Team",
  },
  {
    id: 9,
    title: "TVET College Learnership Opportunities Explained",
    excerpt: "Everything TVET students need to know about learnership opportunities, eligibility, and how to apply.",
    category: "Learnerships",
    date: "November 20, 2024",
    readTime: "8 min read",
    author: "Internships24 Team",
  },
  {
    id: 10,
    title: "How to Build a CV for Internships With No Experience",
    excerpt: "Create an impressive CV even without work experience. Tips on highlighting your skills, education, and potential.",
    category: "Career Tips",
    date: "November 18, 2024",
    readTime: "10 min read",
    author: "Internships24 Team",
  },
];

const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Internships", count: blogPosts.filter(p => p.category === "Internships").length },
  { name: "Learnerships", count: blogPosts.filter(p => p.category === "Learnerships").length },
  { name: "Graduate Programmes", count: blogPosts.filter(p => p.category === "Graduate Programmes").length },
  { name: "Career Tips", count: blogPosts.filter(p => p.category === "Career Tips").length },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-primary section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">
              Career Resources & Opportunities
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Explore our latest articles on internships, learnerships, graduate programmes, 
              and career advice tailored for South African youth.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-background">
        <div className="container-main">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent first:bg-accent first:text-accent-foreground"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="card-elevated overflow-hidden group animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-accent group-hover:translate-x-1 transition-transform">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Check back regularly for new opportunities and career tips. Bookmark this page 
              to never miss an update.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/get-started">
                Learn How to Apply
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
