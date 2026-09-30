export async function GET() {
  const content = `# Phoenix Business Advisory

> Phoenix Business Advisory is India's most trusted business migration consultancy, helping Indian entrepreneurs, HNIs, and business owners expand their businesses globally and obtain Permanent Residency in the USA, Australia, New Zealand, and UAE.

## About

- **Legal Name:** PHX Consulting Pvt Ltd
- **Founded:** 2018
- **Founder:** M.P. Singgh
- **Headquarters:** Ahmedabad, Gujarat, India
- **Global HQ:** Sydney, Australia
- **Website:** https://www.phoenixbusinessadvisory.com
- **Email:** info@pcba.com.au
- **Phone India:** +91 99645 44000
- **Phone USA:** +1 713 588 4437
- **Phone Australia:** +61 29 357 6843
- **Phone UAE:** +971 545 846 501
- **Phone New Zealand:** +64 9870 3415
- **Registered Migration Agent:** MARN 1383279
- **Migration Institute of Australia Member:** MIA 6408
- **NZ Licensed Immigration Adviser:** Licence No. 202506918

## Core Services

Phoenix Business Advisory provides end-to-end business migration consulting for the following pathways:

### 1. USA — L1 Visa (Primary Service)

- **Page:** https://www.phoenixbusinessadvisory.com/l1-visa
- L1A Visa for Managers and Executives
- L1B Visa for Specialized Knowledge Workers
- L1 New Office Petition
- L1A to Green Card (EB-1C) Transition
- L1 Blanket Visa for Large Companies
- No IELTS required
- No annual cap or lottery
- Family included — spouse work authorization (EAD)
- Investment starts from USD 300,000
- Processing time: 2–4 months (standard), 15 days (premium)

### 2. USA — Green Card by Investment

- **Page:** https://www.phoenixbusinessadvisory.com/us-green-card-by-investment
- L1A to EB-1C Green Card pathway
- EB-5 Investor Visa Green Card
- No PERM labor certification required for EB-1C
- Green Card in approximately 2 years via L1A pathway
- US Business Acquisition support included

### 3. Australia — National Innovation Visa (NIV Subclass 858)

- **Page:** https://www.phoenixbusinessadvisory.com/niv
- Direct Australian Permanent Residency from Day 1
- No points test
- No IELTS required
- No age limit
- No provisional visa stage
- Investment: AUD 1,000,000+
- Processing time: minimum 9 months
- Target sectors: Critical Technologies, Health Industries, Renewables

### 4. New Zealand — Investor Work Visa

- **Page:** https://www.phoenixbusinessadvisory.com/new-zealand-investor-work-visa
- NZ Permanent Residency through business investment
- Introduced November 2025
- Family PR pathway
- ROI 15–18%
- End-to-end immigration and business advisory support

### 5. UAE — Golden Visa

- **Page:** https://www.phoenixbusinessadvisory.com/uae-goldenvisa
- Long-term UAE residency for investors and entrepreneurs
- 10-year renewable residency
- No sponsor required

## Key Statistics

- 700+ visa approvals across all programs
- USD 170M+ investment capital mobilized
- 300+ local jobs created in USA
- 500+ daily inquiries from India

## Key Pages

- Home: https://www.phoenixbusinessadvisory.com/
- L1 Visa USA: https://www.phoenixbusinessadvisory.com/l1-visa
- US Green Card: https://www.phoenixbusinessadvisory.com/us-green-card-by-investment
- Australia NIV: https://www.phoenixbusinessadvisory.com/niv
- New Zealand Visa: https://www.phoenixbusinessadvisory.com/new-zealand-investor-work-visa
- UAE Golden Visa: https://www.phoenixbusinessadvisory.com/uae-goldenvisa
- About Us: https://www.phoenixbusinessadvisory.com/about-us
- Contact Us: https://www.phoenixbusinessadvisory.com/contact-us
- Blogs: https://www.phoenixbusinessadvisory.com/blogs

## Frequently Asked Questions

**What is the minimum investment for L1 Visa USA?**

Investment starts from USD 300,000 for buying or setting up a qualifying US business.

**How long does L1 Visa take?**

Standard processing: 2–4 months. Premium processing: 15 calendar days.

**Can family come on L1 Visa?**

Yes. Spouse and unmarried children under 21 can come on L2 dependent visas. Spouse eligible for EAD work authorization.

**Which countries does Phoenix serve?**

USA, Australia, New Zealand, and UAE.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}