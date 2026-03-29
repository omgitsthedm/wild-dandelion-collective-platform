/**
 * Welcome Email Sequence
 * 5-email nurture sequence for new clients
 * Builds trust, educates, and encourages rebooking
 */

export interface EmailTemplate {
  subject: string;
  preview: string;
  html: string;
  text: string;
}

/**
 * Email 1: Immediate welcome (sent immediately after booking)
 */
export const welcomeEmail1: EmailTemplate = {
  subject: 'Welcome to The Wild Dandelion Collective! 🌸',
  preview: 'Your appointment is confirmed. Here is everything you need to know...',
  html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to The Wild Dandelion</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Outfit:wght@400;500;600&display=swap');
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: #FDF8F3;
      color: #3D405B;
      line-height: 1.6;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
    }
    
    .header {
      background: linear-gradient(135deg, #E07A5F 0%, #F2CC8F 100%);
      padding: 40px 30px;
      text-align: center;
    }
    
    .logo {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: 28px;
      color: #ffffff;
      margin-bottom: 10px;
    }
    
    .tagline {
      color: rgba(255, 255, 255, 0.9);
      font-size: 14px;
    }
    
    .content {
      padding: 40px 30px;
    }
    
    .greeting {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: 24px;
      color: #3D405B;
      margin-bottom: 20px;
    }
    
    .text {
      font-size: 16px;
      margin-bottom: 20px;
    }
    
    .appointment-box {
      background: #F5EBE0;
      border-radius: 16px;
      padding: 24px;
      margin: 24px 0;
      text-align: center;
    }
    
    .appointment-label {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #E07A5F;
      margin-bottom: 8px;
    }
    
    .appointment-date {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: 20px;
      color: #3D405B;
      margin-bottom: 4px;
    }
    
    .appointment-time {
      font-size: 16px;
      color: #5E6085;
    }
    
    .cta-button {
      display: inline-block;
      background: #E07A5F;
      color: #ffffff;
      text-decoration: none;
      padding: 16px 32px;
      border-radius: 50px;
      font-weight: 600;
      margin: 20px 0;
    }
    
    .divider {
      height: 1px;
      background: #F5EBE0;
      margin: 32px 0;
    }
    
    .section-title {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: 20px;
      color: #3D405B;
      margin-bottom: 16px;
    }
    
    .tips-list {
      padding-left: 0;
      list-style: none;
    }
    
    .tips-list li {
      padding: 12px 0;
      padding-left: 32px;
      position: relative;
      border-bottom: 1px solid #F5EBE0;
    }
    
    .tips-list li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #81B29A;
      font-weight: bold;
    }
    
    .social-links {
      text-align: center;
      margin: 32px 0;
    }
    
    .social-links a {
      display: inline-block;
      margin: 0 10px;
      color: #E07A5F;
      text-decoration: none;
    }
    
    .footer {
      background: #3D405B;
      color: rgba(255, 255, 255, 0.8);
      padding: 30px;
      text-align: center;
      font-size: 14px;
    }
    
    .footer a {
      color: #F2CC8F;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">🌸 The Wild Dandelion</div>
      <div class="tagline">Where artistry meets intention</div>
    </div>
    
    <div class="content">
      <h1 class="greeting">Welcome, {{clientName}}!</h1>
      
      <p class="text">
        I am absolutely thrilled you have chosen The Wild Dandelion for your hair journey. 
        Thank you for trusting me with your look—I cannot wait to meet you and create something beautiful together.
      </p>
      
      <div class="appointment-box">
        <div class="appointment-label">Your Appointment</div>
        <div class="appointment-date">{{appointmentDate}}</div>
        <div class="appointment-time">{{appointmentTime}} | {{serviceType}}</div>
      </div>
      
      <p class="text">
        You will receive a reminder text 24 hours before your appointment. 
        In the meantime, here is what to expect and how to prepare:
      </p>
      
      <div class="divider"></div>
      
      <h2 class="section-title">Before Your Visit</h2>
      <ul class="tips-list">
        <li>Come with clean, dry hair (washed within 24 hours)</li>
        <li>Bring photos of styles you love (Pinterest is your friend!)</li>
        <li>Wear a button-down or zip-up top</li>
        <li>Arrive 5 minutes early to settle in</li>
        <li>Free street parking on Main Street or lot behind building</li>
      </ul>
      
      <div class="divider"></div>
      
      <h2 class="section-title">About Your Consultation</h2>
      <p class="text">
        Every appointment begins with a thorough consultation. I will ask about your hair history, 
        lifestyle, and goals. This is your time—ask questions, share concerns, and let me know 
        exactly what you are envisioning. No detail is too small!
      </p>
      
      <center>
        <a href="https://the-wild-dandelion-collective.netlify.app/about" class="cta-button">
          Meet Ashley
        </a>
      </center>
      
      <div class="divider"></div>
      
      <p class="text">
        Have questions before your appointment? Just reply to this email or text me at (303) 834-7572.
      </p>
      
      <p class="text">
        See you soon!<br>
        <strong>Ashley DeMarco</strong><br>
        <em>Founder & Master Stylist</em>
      </p>
      
      <div class="social-links">
        <a href="https://instagram.com/thewilddandelioncollective">Instagram</a>
        <a href="https://facebook.com/thewilddandelioncollective">Facebook</a>
      </div>
    </div>
    
    <div class="footer">
      <p>
        The Wild Dandelion Collective<br>
        413 Main Street, Longmont, CO 80501<br>
        <a href="tel:+13038347572">(303) 834-7572</a>
      </p>
      <p style="margin-top: 16px; font-size: 12px; opacity: 0.7;">
        <a href="{{unsubscribeUrl}}">Unsubscribe</a> | 
        <a href="{{preferencesUrl}}">Update Preferences</a>
      </p>
    </div>
  </div>
</body>
</html>
  `,
  text: `
Welcome to The Wild Dandelion Collective!

Hi {{clientName}},

I am absolutely thrilled you have chosen The Wild Dandelion for your hair journey. Thank you for trusting me with your look!

YOUR APPOINTMENT
Date: {{appointmentDate}}
Time: {{appointmentTime}}
Service: {{serviceType}}

You will receive a reminder text 24 hours before your appointment.

BEFORE YOUR VISIT:
- Come with clean, dry hair (washed within 24 hours)
- Bring photos of styles you love
- Wear a button-down or zip-up top
- Arrive 5 minutes early
- Free parking on Main Street or lot behind building

Every appointment begins with a thorough consultation. This is your time—ask questions and share your vision!

Have questions? Reply to this email or text me at (303) 834-7572.

See you soon!
Ashley DeMarco
Founder & Master Stylist

The Wild Dandelion Collective
413 Main Street, Longmont, CO 80501
(303) 834-7572

Unsubscribe: {{unsubscribeUrl}}
  `,
};

/**
 * Email 2: Day before appointment (sent 24 hours prior)
 */
export const reminderEmail: EmailTemplate = {
  subject: 'Your appointment is tomorrow! 🌸',
  preview: 'A few quick reminders for your visit to The Wild Dandelion...',
  html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Reminder</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Outfit:wght@400;500;600&display=swap');
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Outfit', sans-serif;
      background-color: #FDF8F3;
      color: #3D405B;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
    }
    
    .header {
      background: #81B29A;
      padding: 30px;
      text-align: center;
      color: white;
    }
    
    .content {
      padding: 40px 30px;
    }
    
    .greeting {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: 24px;
      margin-bottom: 20px;
    }
    
    .reminder-box {
      background: #F2E9E4;
      border-left: 4px solid #E07A5F;
      padding: 20px;
      margin: 24px 0;
    }
    
    .reminder-box h2 {
      margin: 0 0 10px 0;
      color: #E07A5F;
      font-size: 18px;
    }
    
    .actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin: 24px 0;
    }
    
    .btn {
      display: inline-block;
      padding: 12px 24px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      text-align: center;
    }
    
    .btn-primary {
      background: #E07A5F;
      color: white;
    }
    
    .btn-secondary {
      background: transparent;
      color: #3D405B;
      border: 2px solid #3D405B;
    }
    
    .footer {
      background: #3D405B;
      color: rgba(255,255,255,0.8);
      padding: 30px;
      text-align: center;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin:0;font-family:'DM Serif Display',serif;">Tomorrow is the Day! 🌸</h1>
    </div>
    
    <div class="content">
      <h2 class="greeting">Hi {{clientName}},</h2>
      
      <p>Just a friendly reminder about your appointment tomorrow:</p>
      
      <div class="reminder-box">
        <h2>{{serviceType}}</h2>
        <p style="margin:0;font-size:18px;"><strong>{{appointmentDate}}</strong> at <strong>{{appointmentTime}}</strong></p>
        <p style="margin:8px 0 0 0;color:#5E6085;">The Wild Dandelion Collective<br>413 Main Street, Longmont</p>
      </div>
      
      <h3 style="color:#3D405B;">Quick Reminders:</h3>
      <ul>
        <li>Free parking on Main Street or behind the building</li>
        <li>Arrive 5 minutes early to get settled</li>
        <li>Bring inspiration photos if you have them</li>
        <li>Questions? Text Ashley at (303) 834-7572</li>
      </ul>
      
      <div class="actions">
        <a href="https://maps.google.com/?q=413+Main+St+Longmont+CO+80501" class="btn btn-primary">Get Directions</a>
        <a href="{{rescheduleUrl}}" class="btn btn-secondary">Reschedule</a>
      </div>
      
      <p>See you tomorrow!<br>Ashley 💕</p>
    </div>
    
    <div class="footer">
      <p>The Wild Dandelion Collective | 413 Main Street, Longmont, CO 80501</p>
    </div>
  </div>
</body>
</html>
  `,
  text: `
Tomorrow is the Day!

Hi {{clientName}},

Just a friendly reminder about your appointment tomorrow:

{{serviceType}}
{{appointmentDate}} at {{appointmentTime}}
The Wild Dandelion Collective
413 Main Street, Longmont

Quick Reminders:
- Free parking on Main Street or behind the building
- Arrive 5 minutes early to get settled
- Bring inspiration photos if you have them
- Questions? Text Ashley at (303) 834-7572

Need to reschedule? {{rescheduleUrl}}
Get directions: https://maps.google.com/?q=413+Main+St+Longmont+CO+80501

See you tomorrow!
Ashley
  `,
};

/**
 * Email 3: 3 days after appointment - Care tips
 */
export const aftercareEmail: EmailTemplate = {
  subject: 'How to make your color last (Ashley\'s top tips) ✨',
  preview: 'Your personalized hair care guide + product recommendations...',
  html: '', // Would include full HTML
  text: '', // Would include text version
};

/**
 * Email 4: 2 weeks after - Check-in + retail promo
 */
export const checkinEmail: EmailTemplate = {
  subject: 'How is your hair feeling? 💕',
  preview: 'Quick check-in + 15% off Davines products this week only...',
  html: '',
  text: '',
};

/**
 * Email 5: 6 weeks after - Rebooking prompt
 */
export const rebookingEmail: EmailTemplate = {
  subject: 'It is time for a refresh! 🌸',
  preview: 'Your color is probably ready for a gloss or touch-up...',
  html: '',
  text: '',
};

/**
 * Get complete welcome sequence
 */
export function getWelcomeSequence(): EmailTemplate[] {
  return [
    welcomeEmail1,
    reminderEmail,
    // aftercareEmail,
    // checkinEmail,
    // rebookingEmail,
  ];
}
