# TrendSageHub.com — Deployment Guide

## Stack
- Framework: Next.js 15 (App Router, static export)
- Hosting: Cloudflare Pages (free plan)
- Domain: trendsagehub.com (already on Cloudflare)
- Analytics: None (privacy-first — no tracking)

---

## Prerequisites (owner must do first)

1. Cloudflare account created (use aegisextensions@proton.me)
2. trendsagehub.com domain is on Cloudflare DNS (change nameservers in GoDaddy if not done)
3. GitHub account (aegisextensions) with this repo pushed as a PUBLIC repo

---

## Step 1: Push code to GitHub

```bash
cd "D:/Chrome Extension Project/aegis/trendsagehub"
git init
git add .
git commit -m "Initial TrendSageHub — 7 pages, 3 articles"
git remote add origin https://github.com/aegisextensions/trendsagehub.git
git push -u origin main
```

## Step 2: Create GitHub repo

Go to: https://github.com/new
- Repository name: trendsagehub
- Visibility: PUBLIC (required for free Cloudflare Pages)
- Don't initialize with README

## Step 3: Connect to Cloudflare Pages

1. Cloudflare Dashboard → Pages → Create a project
2. "Connect to Git" → Connect GitHub → Select repo: aegisextensions/trendsagehub
3. Build settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`
4. Environment variables: NONE needed (static site)
5. Click "Save and Deploy"
6. First deploy takes ~2 minutes

## Step 4: Connect custom domain

1. Cloudflare Pages → trendsagehub project → Custom domains
2. Add: trendsagehub.com
3. Cloudflare adds DNS automatically (CNAME or AAAA records)
4. SSL: automatic, free

## Step 5: Configure www redirect

In Cloudflare DNS:
- Add CNAME: www → trendsagehub.pages.dev
- Add redirect rule: www.trendsagehub.com → trendsagehub.com (301)

---

## Adding new articles

1. Create new file: `app/[category]/[slug]/page.tsx`
2. Add metadata (title, description, canonical URL)
3. Write content
4. Update category index page (app/[category]/page.tsx)
5. Git push → Cloudflare auto-deploys (60-second rebuild)

## Internal linking to ComplianceIQ

Every AI compliance article should link to ComplianceIQ with:
- href: "https://trycomplianceiq.com"
- Context: natural product mention, not banner ad
- CTA: "Get your free risk report"

This builds domain authority and sends relevant traffic to ComplianceIQ.

---

## Content publishing schedule (from INFRASTRUCTURE.md)

| Day | Topic | Product target |
|---|---|---|
| Monday | AI/Compliance article | ComplianceIQ |
| Wednesday | Extension/Privacy article | Extension traffic |
| Friday | Construction/PM article | ScheduleAI |

Target: 3 articles/week. Claude generates, owner reviews (optional), pushes to GitHub.
