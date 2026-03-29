import type { Metadata } from 'next';
import { Button } from '@/design-system/components/Button';
import { images } from '@/lib/images';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Hair Care Blog | Tips, Trends & Salon Secrets | Longmont, CO',
  description: 'Expert hair care advice from Ashley DeMarco. Learn about balayage, color maintenance, bridal styling, and salon secrets from Longmont\'s top colorist.',
  keywords: ['hair care blog', 'balayage tips', 'hair color maintenance', 'longmont hair advice', 'bridal hair tips'],
};

const blogPosts = [
  {
    slug: 'best-hair-salons-longmont-2025',
    title: 'The 5 Best Hair Salons in Longmont (2025 Guide)',
    excerpt: 'Looking for the perfect salon? We have rounded up Longmont\'s top-rated hair salons, what makes each special, and how to choose the right one for your needs.',
    image: images.salon.interior,
    category: 'Local Guide',
    date: 'January 15, 2025',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'how-much-does-balayage-cost-colorado',
    title: 'How Much Does Balayage Cost in Colorado? (2025 Pricing)',
    excerpt: 'Everything you need to know about balayage pricing in Colorado, what factors affect the cost, and why the investment is worth it for beautiful, low-maintenance color.',
    image: images.blonde.balayage,
    category: 'Pricing Guide',
    date: 'January 10, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'lived-in-blonde-vs-traditional-highlights',
    title: 'Lived-In Blonde vs Traditional Highlights: Which is Right for You?',
    excerpt: 'Confused about the difference? We break down both techniques, the maintenance required, costs, and help you decide which approach fits your lifestyle.',
    image: images.blonde.honey,
    category: 'Education',
    date: 'January 5, 2025',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'wedding-hair-timeline-when-to-book',
    title: 'Wedding Hair Timeline: When to Book Your Stylist (Complete Guide)',
    excerpt: 'Do not leave your wedding day hair to chance. Our comprehensive timeline covers when to book, schedule your trial, and prepare for the big day.',
    image: images.bridal.updo,
    category: 'Bridal',
    date: 'December 28, 2024',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'sustainable-beauty-why-we-use-davines',
    title: 'Sustainable Beauty: Why We Use Davines (And Why You Should Care)',
    excerpt: 'Learn about the sustainable beauty movement, why Davines leads the industry, and how your hair care choices impact the planet.',
    image: images.salon.productWall,
    category: 'Sustainability',
    date: 'December 20, 2024',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'how-to-make-your-color-last-between-salon-visits',
    title: 'How to Make Your Color Last Between Salon Visits: 10 Pro Tips',
    excerpt: 'Extend the life of your hair color with these expert tips from Ashley. From shampoo choices to heat styling, here is how to keep your color vibrant longer.',
    image: images.treatment.products,
    category: 'Hair Care',
    date: 'December 15, 2024',
    readTime: '6 min read',
    featured: false,
  },
];

const categories = [
  { name: 'All', count: 12 },
  { name: 'Education', count: 4 },
  { name: 'Hair Care', count: 3 },
  { name: 'Bridal', count: 2 },
  { name: 'Local Guide', count: 2 },
  { name: 'Sustainability', count: 1 },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>The Wild Dandelion Blog</span>
            <h1 className={styles.heroTitle}>
              Expert hair advice from <span className={styles.gradientText}>Longmont's top colorist</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Tips, trends, and salon secrets to help you love your hair every day.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className={styles.featured}>
          <div className={styles.container}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className={styles.featuredImage}
                />
                <span className={styles.featuredBadge}>Featured</span>
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.postMeta}>
                  <span className={styles.category}>{featuredPost.category}</span>
                  <span className={styles.date}>{featuredPost.date}</span>
                  <span className={styles.readTime}>{featuredPost.readTime}</span>
                </div>
                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                <Button href={`/blog/${featuredPost.slug}`}>
                  Read Article
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className={styles.blogGrid}>
        <div className={styles.container}>
          <div className={styles.gridLayout}>
            {/* Main Content */}
            <div className={styles.postsColumn}>
              <div className={styles.postsGrid}>
                {regularPosts.map((post) => (
                  <article key={post.slug} className={styles.postCard}>
                    <a href={`/blog/${post.slug}`} className={styles.postLink}>
                      <div className={styles.postImageWrapper}>
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className={styles.postImage}
                          loading="lazy"
                        />
                      </div>
                      <div className={styles.postContent}>
                        <div className={styles.postMeta}>
                          <span className={styles.category}>{post.category}</span>
                          <span className={styles.readTime}>{post.readTime}</span>
                        </div>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <p className={styles.postExcerpt}>{post.excerpt}</p>
                        <span className={styles.readMore}>Read Article →</span>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Categories */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Categories</h3>
                <ul className={styles.categoryList}>
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <a href={`/blog/category/${cat.name.toLowerCase()}`}>
                        <span>{cat.name}</span>
                        <span className={styles.count}>{cat.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Widget */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>About the Author</h3>
                <div className={styles.authorWidget}>
                  <img 
                    src={images.people.ashley} 
                    alt="Ashley DeMarco"
                    className={styles.authorImage}
                  />
                  <h4>Ashley DeMarco</h4>
                  <p>Master Colorist & Salon Owner with 20+ years experience. Vidal Sassoon trained, Davines Ambassador.</p>
                  <a href="/ashley-demarco" className={styles.authorLink}>Meet Ashley →</a>
                </div>
              </div>

              {/* CTA Widget */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Ready for a Change?</h3>
                <p className={styles.ctaText}>Book a consultation with Ashley and discover what is possible for your hair.</p>
                <Button href="/book" size="small" fullWidth>
                  Book Now
                </Button>
              </div>

              {/* Newsletter Widget */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Get Hair Tips</h3>
                <p className={styles.ctaText}>Subscribe for monthly hair care tips and exclusive offers.</p>
                <form className={styles.newsletterForm}>
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className={styles.emailInput}
                  />
                  <Button type="submit" size="small" fullWidth>
                    Subscribe
                  </Button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className={styles.topics}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Explore by Topic</span>
            <h2 className={styles.sectionTitle}>What would you like to learn?</h2>
          </div>

          <div className={styles.topicsGrid}>
            <a href="/blog/category/education" className={styles.topicCard}>
              <span className={styles.topicIcon}>📚</span>
              <h3>Education</h3>
              <p>Learn about coloring techniques, products, and processes</p>
            </a>
            <a href="/blog/category/hair-care" className={styles.topicCard}>
              <span className={styles.topicIcon}>✨</span>
              <h3>Hair Care</h3>
              <p>Tips for maintaining healthy, beautiful hair at home</p>
            </a>
            <a href="/blog/category/bridal" className={styles.topicCard}>
              <span className={styles.topicIcon}>👰</span>
              <h3>Bridal</h3>
              <p>Wedding hair timelines, styles, and preparation guides</p>
            </a>
            <a href="/blog/category/sustainability" className={styles.topicCard}>
              <span className={styles.topicIcon}>🌿</span>
              <h3>Sustainability</h3>
              <p>Eco-friendly beauty practices and product guides</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
