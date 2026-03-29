# The Wild Dandelion Collective — Production Setup Checklist

## ✅ COMPLETED

### Deployment
- [x] Site deployed to Netlify
- [x] Admin password hash configured
- [x] Basic environment variables set
- [x] Build successful (48 pages, 8 API routes)

**Live URL**: https://the-wild-dandelion-collective.netlify.app

---

## ⏳ REMAINING SETUP (Priority Order)

### 1. Turso Database (HIGH PRIORITY)

**Why needed**: Consultations, rental inquiries, notes, and admin sessions require this.

**Steps**:
1. Go to https://turso.tech
2. Sign up/login with GitHub
3. Create new database: `wild-dandelion-db`
4. Get database URL and auth token
5. Set environment variables in Netlify:
   ```
   TURSO_DATABASE_URL=libsql://wild-dandelion-db-[your-username].turso.io
   TURSO_AUTH_TOKEN=your-auth-token-here
   ```
6. Run schema (via Turso web shell or CLI):
   ```sql
   -- Copy contents of schema.sql
   ```

**Test**: Submit a rental inquiry at `/collective` - should save to DB and show in admin.

---

### 2. Square Integration (HIGH PRIORITY)

**Why needed**: Booking flow, services, customer management.

**Steps**:
1. Go to https://developer.squareup.com/apps
2. Sign in with Ashley's Square account
3. Create new application: "The Wild Dandelion Collective"
4. Get Sandbox credentials first (for testing)
5. Set environment variables:
   ```
   SQUARE_ACCESS_TOKEN=sq0idp-xxxxxxxx
   SQUARE_LOCATION_ID=LXXXXXXXXXX
   SQUARE_ENVIRONMENT=sandbox  # Change to "production" when ready
   ```
6. Test booking flow
7. Switch to production credentials when ready

**Test**: Go to `/book` and try to book an appointment.

---

### 3. Resend (Email) (MEDIUM PRIORITY)

**Why needed**: Booking confirmations, consultation acknowledgments, weekly digests.

**Steps**:
1. Go to https://resend.com
2. Sign up and verify domain: `thewilddandelioncollective.com`
3. Or use onboarding@resend.dev for testing
4. Get API key
5. Set environment variable:
   ```
   RESEND_API_KEY=re_xxxxxxxx
   ```

**Test**: Book an appointment and check for confirmation email.

---

### 4. Twilio (SMS) (MEDIUM PRIORITY)

**Why needed**: SMS reminders, Ashley alerts for new bookings/inquiries.

**Steps**:
1. Go to https://twilio.com
2. Sign up and get phone number
3. Set environment variables:
   ```
   TWILIO_ACCOUNT_SID=ACxxxxxxxx
   TWILIO_AUTH_TOKEN=xxxxxxxx
   TWILIO_PHONE_NUMBER=+1xxx555xxxx
   ```

**Test**: Submit rental inquiry - Ashley should get SMS alert.

---

### 5. Stripe (Payments) (LOW PRIORITY)

**Why needed**: Deposit capture for bookings.

**Steps**:
1. Go to https://stripe.com
2. Create account
3. Get API keys from Developer Dashboard
4. Set environment variables:
   ```
   STRIPE_SECRET_KEY=sk_live_xxxxxxxx
   STRIPE_PUBLISHABLE_KEY=pk_live_xxxxxxxx
   ```

**Test**: Complete booking flow with deposit payment.

---

### 6. Custom Domain (MEDIUM PRIORITY)

**Steps**:
1. In Netlify: Site Settings → Domain Management
2. Add custom domain: `thewilddandelioncollective.com`
3. Update DNS with registrar:
   - Option A: Use Netlify DNS (recommended)
   - Option B: CNAME record pointing to Netlify
4. Wait for SSL certificate provisioning
5. Update `NEXT_PUBLIC_URL` env var to new domain

---

## 🔧 Admin Access

**Login URL**: https://the-wild-dandelion-collective.netlify.app/admin/login

**Password**: `Dandelion2026!`

To change password:
1. Generate new hash:
   ```bash
   node -e "const {randomBytes,scrypt}=require('crypto');const s=randomBytes(16).toString('hex');scrypt('NEW_PASSWORD',s,64,(e,d)=>console.log(s+':'+d.toString('hex')));"
   ```
2. Update `ADMIN_PASSWORD_HASH` in Netlify environment variables
3. Redeploy

---

## 📊 Monitoring

### Netlify Dashboard
- **Deploys**: https://app.netlify.com/sites/the-wild-dandelion-collective/deploys
- **Functions**: https://app.netlify.com/sites/the-wild-dandelion-collective/functions
- **Analytics**: https://app.netlify.com/sites/the-wild-dandelion-collective/analytics

### Logs
- **Build logs**: Available in Netlify deploy summary
- **Function logs**: https://app.netlify.com/sites/the-wild-dandelion-collective/logs/functions

---

## 🧪 Testing Checklist

### Public Site
- [ ] Homepage loads with animations
- [ ] Services page shows all 11 services
- [ ] Booking flow completes (all 6 steps)
- [ ] Consultation form submits with photos
- [ ] Rental inquiry form submits
- [ ] Contact form works
- [ ] Gallery displays images

### Admin Dashboard
- [ ] Login works
- [ ] Dashboard shows greeting
- [ ] Bookings list loads
- [ ] Clients list loads
- [ ] Products display
- [ ] Inquiries show consultations and rentals
- [ ] Settings page loads

### API Endpoints
- [ ] `POST /api/consult` - Saves consultation
- [ ] `POST /api/rentals` - Saves rental inquiry
- [ ] `POST /api/notify/booking-confirmed` - Sends notifications

---

## 🚨 Troubleshooting

### Build Failures
1. Check all env vars are set in Netlify
2. Verify `package.json` dependencies
3. Check build logs for TypeScript errors

### Database Connection Issues
1. Verify `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN`
2. Check database exists and is running
3. Verify schema is applied

### Notifications Not Sending
1. Check integration API keys
2. Verify `ASHLEY_PHONE_NUMBER` format (+1XXXXXXXXXX)
3. Check Netlify function logs

---

## 📞 Support

**LiFi NYC**: info@lilfightnyc.com  
**Netlify Docs**: https://docs.netlify.com  
**Next.js Docs**: https://nextjs.org/docs

---

**Last Updated**: 2026-03-28  
**Site Status**: ✅ Live (Placeholder Mode)
