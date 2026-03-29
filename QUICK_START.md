# ⚡ QUICK START GUIDE
## Deploy in 5 Minutes

---

## OPTION 1: One-Command Deploy (Recommended)

```bash
# 1. Navigate to project
cd "/Users/davidmarsh/Desktop/LiFi NYC/Clients/The Wild Dandelion/Website/platform"

# 2. Make deploy script executable
chmod +x scripts/deploy.sh

# 3. Deploy to production
./scripts/deploy.sh --prod
```

---

## OPTION 2: Manual Deploy

```bash
# 1. Install dependencies
npm ci

# 2. Build
npm run build

# 3. Deploy
netlify deploy --prod --dir=.next
```

---

## IMMEDIATE POST-DEPLOY ACTIONS

### Within 1 Hour:
1. **Test the booking flow**
   - Visit: https://your-site.netlify.app/book
   - Complete a test booking
   - Check email confirmations

2. **Test contact form**
   - Submit test message
   - Verify Ashley receives it

3. **Check all landing pages**
   - /balayage-longmont
   - /bridal-hair-longmont
   - /ashley-demarco

### Within 24 Hours:
1. **Submit to Google**
   - Go to: https://search.google.com/search-console
   - Add property
   - Submit sitemap: `/sitemap.xml`

2. **Update Google Business Profile**
   - Edit website URL
   - Add new photos
   - Create first post

3. **Set up Twilio** (for review automation)
   - Create account at twilio.com
   - Get phone number
   - Add credentials to Netlify env vars

---

## ENVIRONMENT VARIABLES (Required)

Add these in Netlify Dashboard → Site Settings → Environment Variables:

```
NEXT_PUBLIC_URL=https://the-wild-dandelion-collective.netlify.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_PHONE_NUMBER=+1your_number
ASHLEY_PHONE_NUMBER=+13038347572
GOOGLE_REVIEW_URL=your_google_review_link
```

---

## FIRST WEEK PRIORITIES

### Day 1: Deploy & Test
- [ ] Deploy website
- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Submit sitemap to Google

### Day 2: GBP Optimization
- [ ] Complete all GBP fields
- [ ] Upload 20 photos
- [ ] Write description
- [ ] Add attributes

### Day 3: Citations
- [ ] Submit to Yelp
- [ ] Submit to Bing Places
- [ ] Submit to Apple Maps
- [ ] Submit to Facebook

### Day 4: Content
- [ ] Write first blog post
- [ ] Schedule social posts
- [ ] Create Instagram content

### Day 5: Automation
- [ ] Set up Twilio
- [ ] Test SMS review flow
- [ ] Configure email sequences

---

## TROUBLESHOOTING

**Build fails:**
```bash
# Clear cache
rm -rf .next node_modules
npm ci
npm run build
```

**Styles not loading:**
- Check CSS imports in layout.tsx
- Verify CSS modules file paths

**Forms not working:**
- Check environment variables in Netlify
- Verify API routes are deployed

**Images not showing:**
- Check Unsplash URLs are valid
- Verify image domains in next.config.js

---

## GET HELP

**Documentation:**
- DEPLOYMENT.md - Full deployment guide
- MARKETING_CALENDAR.md - 90-day plan
- STRATEGY.md - Complete strategy document

**Support:**
- Netlify Docs: docs.netlify.com
- Next.js Docs: nextjs.org/docs
- Contact developer for issues

---

## YOU'RE READY! 🚀

**Deploy now and start dominating Longmont!**

The Wild Dandelion Collective
#1 Hair Salon in 80501
