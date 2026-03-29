# 🚀 PRODUCTION DEPLOYMENT CHECKLIST
## The Wild Dandelion - Go Live & Dominate

---

## PHASE 1: PRE-LAUNCH (Do This Now)

### ✅ Step 1: Environment Variables
Create `.env.production` file:

```bash
# Site Configuration
NEXT_PUBLIC_URL=https://the-wild-dandelion-collective.netlify.app
NEXT_PUBLIC_SITE_NAME="The Wild Dandelion Collective"

# Contact Info
NEXT_PUBLIC_PHONE="+1-303-834-7572"
NEXT_PUBLIC_ADDRESS="413 Main Street, Longmont, CO 80501"

# Google Analytics (Create GA4 property first)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Business Profile Review Link
GOOGLE_REVIEW_URL=https://g.page/r/CYlM_your_actual_review_link/review

# Twilio (for SMS automation)
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+1your_twilio_number
ASHLEY_PHONE_NUMBER=+13038347572

# Email (Resend)
RESEND_API_KEY=re_your_api_key
FROM_EMAIL=hello@thewilddandelion.com

# Stripe (for deposits)
STRIPE_SECRET_KEY=sk_live_your_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_key

# Admin Password (scrypt hash)
ADMIN_PASSWORD_HASH=your_scrypt_hash
```

### ✅ Step 2: Netlify Configuration
Update `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"
  NPM_FLAGS = "--legacy-peer-deps"

[[plugins]]
  package = "@netlify/plugin-nextjs"

# Redirect rules for SEO
[[redirects]]
  from = "/best-hair-salon-longmont"
  to = "/"
  status = 301

[[redirects]]
  from = "/hair-color-longmont"
  to = "/balayage-longmont"
  status = 301

# Headers for performance
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### ✅ Step 3: Deploy to Production

```bash
# 1. Install dependencies
npm ci

# 2. Build production
npm run build

# 3. Deploy to Netlify
netlify deploy --prod

# Or push to Git for auto-deploy:
git add .
git commit -m "Production deployment - full SEO & automation suite"
git push origin main
```

---

## PHASE 2: GOOGLE BUSINESS PROFILE OPTIMIZATION (Week 1)

### ✅ Complete Your GBP Profile

**Business Information:**
- [ ] Name: "The Wild Dandelion Collective"
- [ ] Category: "Hair Salon" (Primary), "Beauty Salon", "Hairdresser"
- [ ] Address: 413 Main Street, Longmont, CO 80501
- [ ] Phone: (303) 834-7572
- [ ] Website: https://the-wild-dandelion-collective.netlify.app
- [ ] Hours: Mon-Sat 9am-7pm

**Attributes (Check all that apply):**
- [ ] Women-owned
- [ ] LGBTQ+ friendly
- [ ] Transgender safespace
- [ ] Appointment required
- [ ] Mask required (optional)
- [ ] Wheelchair accessible
- [ ] Free Wi-Fi
- [ ] Gender-neutral restroom

**Description (750 characters):**
```
The Wild Dandelion Collective is a luxury hair salon in the heart of downtown Longmont, Colorado. Founded by Ashley DeMarco, a Vidal Sassoon-trained master colorist with 20+ years of experience, we specialize in balayage, lived-in blonde, bridal styling, and sustainable beauty practices.

As a Davines-exclusive salon, we use only the finest Italian color products that are as kind to your hair as they are to the planet. Our collective model creates a supportive, community-focused environment where artistry meets intention.

Services include precision cuts, custom color, balayage, highlights, bridal styling, keratin treatments, and color correction. Every appointment includes a thorough consultation to ensure you leave feeling confident and beautiful.

New clients welcome! Book online or call (303) 834-7572.
```

### ✅ Upload Photos to GBP

**Required Photos (Upload 20+):**
1. **Exterior** - Storefront with signage
2. **Interior wide shot** - Full salon view
3. **Styling stations** - Where the magic happens
4. **Shampoo area** - Comfort shots
5. **Product display** - Davines wall
6. **Ashley at work** - Action shot
7. **Team photo** - If applicable
8. **Before/After** - Transformation shots (5+)
9. **Bridal work** - Wedding styles (3+)
10. **Detail shots** - Tools, products, flowers
11. **Waiting area** - Client comfort
12. **Retail area** - Product selection

**Photo Tips:**
- High resolution (1200x800 minimum)
- Bright, well-lit
- Include people (with permission)
- Show diversity of hair types
- Update monthly

### ✅ Create Google Posts (Weekly)

**Post Template:**
```
🌸 [Service Spotlight]

This week's transformation: [Description]

✨ Service: [Type]
✨ Duration: [Time]
✨ Investment: [Price]

Ready for your own transformation? Book now:
🔗 https://the-wild-dandelion-collective.netlify.app/book

#LongmontHairSalon #Balayage #HairColor #LongmontCO #80501
```

**Post Schedule:**
- Monday: Transformation Tuesday preview
- Wednesday: Product spotlight
- Friday: Weekend availability
- Sunday: Bridal/wedding content

### ✅ Q&A Section (Seed These)

**Questions to Add:**
1. "Do you accept walk-ins?"
   - Answer: "We recommend booking in advance to ensure availability. You can book online 24/7 or call us at (303) 834-7572. We do occasionally have same-day openings—feel free to call and check!"

2. "What products do you use?"
   - Answer: "We exclusively use Davines, a sustainable Italian color line. Their products are ammonia-free, eco-friendly, and deliver beautiful, long-lasting results while being gentle on your hair."

3. "How much does balayage cost?"
   - Answer: "Balayage starts at $220. The final price depends on your hair length, thickness, and desired result. We provide a detailed quote during your free consultation. View our full menu at https://the-wild-dandelion-collective.netlify.app/services"

4. "Do you do wedding hair?"
   - Answer: "Absolutely! We specialize in bridal styling. We offer trials, day-of styling, and packages for bridal parties. Contact us at least 3-6 months before your wedding to secure your date."

5. "Is parking available?"
   - Answer: "Yes! We have free street parking on Main Street and a parking lot behind the building. We're also within walking distance of many downtown Longmont shops and restaurants."

---

## PHASE 3: REVIEW AUTOMATION SETUP (Week 1)

### ✅ Twilio Setup

1. **Create Twilio Account:** https://www.twilio.com
2. **Get a phone number** (choose Colorado area code if available)
3. **Set environment variables** (see above)
4. **Test the webhook:**
   ```bash
   curl -X POST https://your-site.netlify.app/api/reviews/response \
     -d "From=%2B13035551234" \
     -d "Body=5"
   ```

### ✅ Google Review Link

1. Go to https://search.google.com/local/writereview
2. Search for "The Wild Dandelion Collective"
3. Copy the review link
4. Update `GOOGLE_REVIEW_URL` in environment variables

### ✅ Test the Flow

1. Book a test appointment
2. Wait 24 hours (or manually trigger)
3. Verify SMS is received
4. Reply "5" or "LOVE"
5. Verify Google review link is sent

---

## PHASE 4: LOCAL CITATIONS (Week 2)

### ✅ Top 50 Directories to Submit

**Priority 1 (Do First):**
1. Google Business Profile ✓
2. Yelp for Business
3. Bing Places
4. Apple Maps
5. Facebook Business
6. Nextdoor
7. Thumbtack
8. StyleSeat
9. Booksy
10. Vagaro

**Priority 2:**
11. Yellow Pages
12. Manta
13. Foursquare
14. Merchant Circle
15. Hotfrog
16. Superpages
17. Citysearch
18. Local.com
19. MapQuest
20. ShowMeLocal

**Priority 3 - Wedding Specific:**
21. The Knot
22. WeddingWire
23. Zola
24. Borrowed & Blue
25. Colorado Wedding Magazine

**Priority 4 - Local:**
26. Longmont Chamber of Commerce
27. Downtown Longmont Association
28. Visit Longmont
29. Boulder Chamber
30. Broomfield Chamber

**NAP Consistency Check:**
Make sure Name, Address, Phone are IDENTICAL across all listings:
- Name: The Wild Dandelion Collective
- Address: 413 Main Street, Longmont, CO 80501
- Phone: (303) 834-7572

---

## PHASE 5: CONTENT MARKETING (Ongoing)

### ✅ Blog Post Schedule (2/month)

**Month 1:**
- Week 2: "Best Hair Salons in Longmont (2025 Guide)"
- Week 4: "How Much Does Balayage Cost in Colorado?"

**Month 2:**
- Week 2: "Lived-In Blonde vs Traditional Highlights"
- Week 4: "Wedding Hair Timeline: When to Book"

**Month 3:**
- Week 2: "Sustainable Beauty: Why We Use Davines"
- Week 4: "How to Make Your Color Last"

### ✅ Social Media Schedule

**Instagram (@thewilddandelioncollective):**
- Daily Stories: Behind the scenes, product features
- 3x/week Feed: Transformations, tips, team features
- Weekly Reels: Process videos, tutorials

**Facebook:**
- 2x/week: Share blog posts, client testimonials
- Weekly: Facebook Live Q&A

**Pinterest:**
- Create boards: "Balayage Inspiration", "Bridal Hair", "Longmont Style"
- Pin 5x/week

---

## PHASE 6: PAID ADVERTISING (Month 2)

### ✅ Google Ads (Local Campaign)

**Budget:** $300-500/month

**Target Keywords:**
- hair salon longmont
- balayage longmont
- bridal hair longmont
- best hair salon near me
- hair colorist boulder county

**Ad Copy:**
```
Headline 1: Longmont's Top Hair Salon
Headline 2: Balayage & Bridal Experts
Headline 3: Book Your Transformation

Description: Award-winning colorist Ashley DeMarco. 20+ years experience. 
Vidal Sassoon trained. Book your consultation today!

Call Extension: (303) 834-7572
Location Extension: Enabled
```

### ✅ Facebook/Instagram Ads

**Audience:**
- Women 25-55
- Within 15 miles of Longmont
- Interests: Beauty, weddings, sustainability

**Ad Types:**
1. Before/After carousel
2. Video testimonial
3. "Meet Ashley" introduction
4. Bridal hair showcase

---

## PHASE 7: PARTNERSHIPS (Month 2-3)

### ✅ Wedding Vendor Partners

**Target Partners:**
1. Wedding photographers (trade: free styling for portfolio)
2. Bridal boutiques
3. Wedding planners
4. Florists
5. Venues

**Outreach Template:**
```
Hi [Name],

I'm Ashley DeMarco, owner of The Wild Dandelion Collective, a luxury 
hair salon in downtown Longmont. I specialize in bridal styling and 
would love to explore a partnership.

I offer:
- Complimentary trial for your clients
- Referral commission
- Styled shoot collaboration
- Cross-promotion

Would you be open to a quick call to discuss?

Warmly,
Ashley
(303) 834-7572
```

---

## DAILY CHECKLIST (After Launch)

### Morning (5 minutes):
- [ ] Check overnight bookings
- [ ] Respond to any new reviews
- [ ] Check SMS review responses
- [ ] Post to Instagram Stories

### Weekly (30 minutes):
- [ ] Post to Google Business Profile
- [ ] Review analytics dashboard
- [ ] Engage with Instagram comments
- [ ] Check referral program activity

### Monthly (2 hours):
- [ ] Publish blog post
- [ ] Update GBP photos
- [ ] Review ad performance
- [ ] Analyze conversion rates
- [ ] Plan next month's content

---

## SUCCESS METRICS TO TRACK

### Weekly KPIs:
- Google ranking for "hair salon longmont"
- New Google reviews
- Website traffic (organic)
- Booking conversion rate
- Phone calls from website

### Monthly KPIs:
- New client acquisition
- Average booking value
- Return client rate
- Referral revenue
- Email list growth

---

## TROUBLESHOOTING

**Issue: Site not indexing**
- Submit sitemap to Google Search Console
- Check robots.txt isn't blocking
- Request indexing for key pages

**Issue: Reviews not sending**
- Check Twilio credentials
- Verify phone number format
- Test webhook manually

**Issue: Low conversion**
- A/B test CTA buttons
- Add exit-intent popup
- Simplify booking flow

---

## 🎯 90-DAY TIMELINE

| Week | Action | Status |
|------|--------|--------|
| 1 | Deploy site, optimize GBP | ⬜ |
| 2 | Set up review automation, 10 citations | ⬜ |
| 3 | Launch first blog post, social schedule | ⬜ |
| 4 | Email sequences live, analytics check | ⬜ |
| 5 | Google Ads campaign launch | ⬜ |
| 6 | Wedding vendor outreach (5 partners) | ⬜ |
| 7 | Second blog post, referral promotion | ⬜ |
| 8 | Review automation optimization | ⬜ |
| 9 | Instagram Reels campaign | ⬜ |
| 10 | Third blog post, local PR pitch | ⬜ |
| 11 | Partnership events, styled shoot | ⬜ |
| 12 | Month 3 analytics review, plan Q2 | ⬜ |

---

## 🚀 YOU'RE READY TO DOMINATE!

**Execute this checklist in order.**
**Track metrics weekly.**
**Iterate based on data.**

**Questions? Issues?**
- Check the code: `/src/lib/`, `/src/app/api/`
- Review logs: Netlify dashboard
- Debug: Browser DevTools, Network tab

**Go make The Wild Dandelion #1 in Longmont! 🌸**
