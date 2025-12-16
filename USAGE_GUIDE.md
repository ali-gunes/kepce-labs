# Kepce Labs Website - Usage Guide

This guide explains how to manage and update your Kepce Labs website.

## 🚀 Quick Start

### Development
```bash
npm run dev
```
Visit `http://localhost:3000` to see your site.

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

## 📝 Adding New Projects

Edit `/src/data/projects.json`:

```json
{
  "projects": [
    {
      "id": "your-project-id",
      "name": "Your Project Name",
      "description": {
        "en": "English description",
        "tr": "Turkish description"
      },
      "status": "active",
      "platforms": ["web", "ios", "android"],
      "accentColor": "#FF6B6B",
      "hasDocuments": false,
      "url": "/your-project-url"
    }
  ]
}
```

### Status Options
- `active` - Currently maintained and active
- `experiment` - Experimental or in development
- `archived` - No longer actively maintained

### Platform Options
- `web` - Web application
- `ios` - iOS app
- `android` - Android app

## 📄 Adding Project Documents

For projects that need legal documents (like KepGuess):

1. Create a folder: `/src/app/[locale]/your-project-name/`
2. Add pages:
   - `terms/page.tsx` - Terms of Service
   - `privacy/page.tsx` - Privacy Policy

Use the `DocumentLayout` component for consistent styling:

```tsx
import DocumentLayout from '@/components/DocumentLayout';

export default function TermsPage({ params }: { params: { locale: Locale } }) {
  return (
    <DocumentLayout title="Your Title" lastUpdated="Date">
      {/* Your content */}
    </DocumentLayout>
  );
}
```

## 📰 Adding Updates

Edit `/src/data/content.json` and add to the `updates.items` array:

```json
{
  "date": "2025-12-16",
  "content": {
    "en": "English update text",
    "tr": "Turkish update text"
  }
}
```

Updates appear in reverse chronological order (newest first).

## 🌍 Editing Site Content

All site-wide text is in `/src/data/content.json`:

- `manifesto` - Homepage hero text
- `subtitle` - Homepage subtitle
- `about.paragraphs` - About page content
- `contact` - Contact page text
- `updates` - Updates/log entries

## 🎨 Customizing Design

### Colors
Edit `/src/app/globals.css` CSS variables:

```css
:root {
  --color-bg: #FAFAFA;
  --color-text: #1A1A1A;
  --color-kepguess: #FF6B6B;
  /* Add more project colors */
}
```

### Typography
The site uses Inter font. To change:
1. Edit `/src/app/[locale]/layout.tsx`
2. Import a different Google Font
3. Update the font variable

## 📱 Responsive Design

The site is fully responsive:
- Desktop: Max width 1200px, multi-column grids
- Mobile: Single column, full-width cards

Test on different screen sizes before deploying.

## 🔗 URL Structure

- Homepage: `/` → redirects to `/en`
- English pages: `/en/page-name`
- Turkish pages: `/tr/page-name`
- Project docs: `/en/project-name/terms`

## 🛠️ Project Structure

```
src/
├── app/
│   ├── [locale]/          # Locale-based routing
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   ├── projects/      # Projects page
│   │   ├── about/         # About page
│   │   ├── updates/       # Updates page
│   │   ├── contact/       # Contact page
│   │   └── kepguess/      # KepGuess documents
│   └── globals.css        # Global styles
├── components/            # Reusable components
├── data/                  # JSON content files
│   ├── projects.json      # Project data
│   └── content.json       # Site content
└── lib/
    └── i18n.ts           # Internationalization config
```

## ✅ Before Deploying

1. Test both languages (EN/TR)
2. Check all internal links work
3. Verify responsive design on mobile
4. Run `npm run build` to check for errors
5. Test the production build locally

## 📧 Contact Links

Update contact information in:
- `/src/components/Footer.tsx`
- `/src/app/[locale]/contact/page.tsx`
- Legal documents (terms/privacy)

## 🎯 Tips

- Keep project descriptions concise (1-2 sentences)
- Use consistent accent colors for brand identity
- Update the Updates page regularly to show activity
- Add new projects to `projects.json` as you build them
- Keep the design minimal and focused

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Locale Issues
- Check that all content has both `en` and `tr` keys
- Verify middleware is working correctly

### Styling Issues
- Check CSS variable names match
- Ensure global styles are imported in layout

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [React Documentation](https://react.dev)

---

Built with care at Kepce Labs 🐱
