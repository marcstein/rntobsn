# RN to BSN Programs Directory

A comprehensive website covering all accredited RN to BSN programs across the United States.

## Overview

This site provides detailed information about RN to BSN (Registered Nurse to Bachelor of Science in Nursing) programs, helping nurses find the right program to advance their education and career.

## Features

- **Comprehensive Coverage**: 500+ accredited programs across all 50 states + DC
- **State-by-State Browsing**: Dedicated pages for each state with local programs
- **Online Programs Directory**: 300+ online and hybrid programs for working nurses
- **Detailed School Pages**: Complete information including:
  - Program costs and fees
  - Admission requirements
  - Curriculum details
  - Application process and deadlines
  - Accreditation status (CCNE/ACEN)
  - Contact information with validated links
- **Search & Filter**: Find programs by location, format, cost, and accreditation
- **Cross-Linking**: Extensive internal linking between state pages, online programs, and school pages

## Site Structure

```
/
├── index.html              # Main homepage
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Search and interactivity
├── states/
│   ├── index.html          # All states overview
│   ├── alabama.html        # State-specific pages (51 total)
│   ├── california.html
│   ├── ...
│   └── wyoming.html
├── online/
│   └── index.html          # Online programs directory
├── schools/
│   ├── csuf.html           # Individual school pages
│   ├── ucla.html
│   └── ...
└── data/
    └── programs.json       # Structured program data
```

## Program Information Included

Each program listing includes:

1. **School Information**
   - University name and location
   - Accreditation status (CCNE or ACEN)
   - Contact information
   - Official website links

2. **Program Details**
   - Delivery format (Online, Campus, Hybrid)
   - Program duration
   - Total credits required
   - Cost per credit hour
   - Total estimated program cost

3. **Admission Requirements**
   - RN license requirements
   - GPA requirements
   - Prerequisite courses
   - Application materials needed

4. **Application Information**
   - Application deadlines
   - Application process steps
   - Required documents
   - Contact information for admissions

## Data Sources

All program information is verified from:
- Official university websites
- CCNE and ACEN accreditation databases
- State nursing board directories
- Direct contact with nursing program offices

## Accreditation

Programs listed are accredited by:
- **CCNE**: Commission on Collegiate Nursing Education
- **ACEN**: Accreditation Commission for Education in Nursing

Both accrediting bodies are recognized by the U.S. Department of Education and ensure program quality.

## Technologies Used

- HTML5 - Semantic markup
- CSS3 - Modern, responsive design with CSS Grid and Flexbox
- JavaScript - Search, filtering, and interactive features
- JSON - Structured data storage

## State Coverage

The site includes comprehensive coverage for all 50 U.S. states plus:
- District of Columbia

Major states with extensive programs:
- California (65+ programs)
- Texas (55+ programs)
- Florida (45+ programs)
- New York (50+ programs)
- Pennsylvania (40+ programs)
- Ohio (42+ programs)
- Illinois (40+ programs)

## Online Programs

The site features a dedicated section for online RN to BSN programs, including:
- 100% online programs with no campus visits required
- Hybrid programs with limited on-campus requirements
- Self-paced and competency-based options
- Programs accepting students from multiple states

## Future Enhancements

Planned additions:
- Interactive cost calculator
- Program comparison tool
- Student reviews and ratings
- Scholarship database
- Application deadline calendar
- Graduate school pathways
- Career outcome statistics

## Contact & Updates

Program information is regularly updated and verified. Users should always confirm current details directly with institutions before applying.

Last Updated: November 2024

## SEO and Google Indexing

The site is fully optimized for search engines:

### SEO Features
- ✓ **sitemap.xml** - Complete sitemap with all 54 pages
- ✓ **robots.txt** - Configured to allow all search engine crawling
- ✓ **Meta tags** - Optimized titles, descriptions, and keywords on all pages
- ✓ **Canonical URLs** - Prevent duplicate content issues
- ✓ **Structured Data** - JSON-LD schema for enhanced search results
- ✓ **Open Graph tags** - Optimized for social media sharing
- ✓ **Mobile-responsive** - Mobile-first design for better rankings
- ✓ **Fast loading** - Static HTML for optimal performance

### How to Get Indexed by Google

1. **Enable GitHub Pages** (if not already done):
   - Go to repository Settings → Pages
   - Select your branch as source
   - Your site will be live at: `https://marcstein.github.io/rntobsn/`

2. **Submit to Google Search Console**:
   - Visit: https://search.google.com/search-console
   - Add property: `https://marcstein.github.io/rntobsn/`
   - Verify ownership (HTML file or meta tag method)
   - Submit sitemap: `sitemap.xml`

3. **Monitor Indexing**:
   - Check "Coverage" report in Search Console
   - Use "URL Inspection" tool to request indexing
   - Typically indexed within 1-7 days

See **SEO-GUIDE.md** for detailed instructions and best practices.

## License

Educational purposes only. All program information should be verified with individual institutions.
