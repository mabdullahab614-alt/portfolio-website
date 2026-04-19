# Professional Portfolio Website

A modern, responsive portfolio website built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS** featuring a professional dark neon theme with smooth animations.

## 🎨 Features

- ✨ **Modern Design** - Professional dark theme with neon accents
- 🎯 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- ⚡ **Performance Optimized** - Built with Next.js for lightning-fast loading
- 🎬 **Smooth Animations** - Framer Motion animations throughout
- 📱 **Mobile Navigation** - Responsive hamburger menu
- 💼 **Sections Included**:
  - Hero section with CTAs
  - About me section with stats
  - Skills & technologies showcase
  - Featured projects with links
  - Education & certifications
  - Contact form
  - Footer with social links

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Update Your Information

Edit the following files to personalize your portfolio:

- **Hero Section**: `/components/sections/Hero.tsx`
  - Change name, title, and description
  - Update social media links

- **About Section**: `/components/sections/About.tsx`
  - Update bio and statistics

- **Skills Section**: `/components/sections/Skills.tsx`
  - Add/remove technologies
  - Adjust proficiency levels

- **Projects Section**: `/components/sections/Projects.tsx`
  - Add your project details, links, and technologies

- **Education Section**: `/components/sections/Education.tsx`
  - Update degrees and certifications

- **Contact Section**: `/components/sections/Contact.tsx`
  - Update contact information

### Color Customization

Colors are defined in `tailwind.config.js`:
```js
colors: {
  'neon-blue': '#00d9ff',
  'neon-purple': '#9d4edd',
  'neon-pink': '#ff006e',
  'dark-bg': '#0a0e27',
  'dark-secondary': '#1a1f3a',
}
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Deploy to Other Platforms

- **Netlify**: Connect your Git repo and deploy
- **GitHub Pages**: Build and deploy manually
- **Docker**: Create a Docker image and deploy

## 📧 Contact & Support

For questions or suggestions, reach out through:
- Email: your@email.com
- LinkedIn: Your Profile
- GitHub: Your Username

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Ready to Go!

Your portfolio is ready! Remember to:
- ✅ Update all personal information
- ✅ Add your project links and details
- ✅ Upload your CV/Resume
- ✅ Connect social media links
- ✅ Test responsiveness on mobile devices
- ✅ Deploy to your preferred hosting platform

Happy coding! 🚀
