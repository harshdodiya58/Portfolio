# Full Stack Developer Portfolio - MERN Stack

A professional, modern, and recruiter-ready portfolio website for a B.Tech Computer Science Engineering student targeting Full Stack Developer roles with a focus on the MERN stack.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with blue/purple accents
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Subtle Framer Motion animations for enhanced UX
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Fast Performance**: Built with Vite for lightning-fast build times
- **Professional Content**: Real-world projects and detailed skill showcase

## �️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom configuration

## � Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolioData.js` to update:
- Personal name and details
- Contact information (email, LinkedIn, GitHub)
- Resume URL
- Education details
- Skills and proficiency levels
- Project details and links

### Styling

- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles are inline with Tailwind classes

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔧 Configuration

### Update Resume Link

In `src/data/portfolioData.js`, update the `resumeUrl` field with your resume PDF link:
```javascript
resumeUrl: "https://your-resume-link.com/resume.pdf"
```

### Update Project Links

Update GitHub and live demo URLs in the `projects` array in `portfolioData.js`.

## 📝 Sections

1. **Hero Section**: Introduction, role, and call-to-action buttons
2. **About Section**: Professional summary and background
3. **Skills Section**: Categorized technical skills with proficiency levels
4. **Projects Section**: Featured projects with descriptions, tech stack, and links
5. **Education Section**: Academic background and current status
6. **Contact Section**: Social links and contact information

## 🚀 Deployment

This portfolio can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Use Firebase CLI to deploy

## 📄 License

This project is open source and available for personal use.

## 👤 Author

Your Name - Full Stack Developer (MERN Stack)

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
