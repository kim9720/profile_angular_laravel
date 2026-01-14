# Angular Portfolio Project

A professional portfolio website built with Angular 21, TypeScript, and SCSS.

## 📁 Project Structure

```
├── frontend/          # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/    # All UI components
│   │   │   ├── mock-data.ts   # Mock data for portfolio
│   │   │   └── app.ts         # Main app component
│   │   ├── styles.scss        # Global styles
│   │   └── index.html
│   ├── angular.json           # Angular configuration
│   ├── package.json           # Dependencies
│   └── tsconfig.json          # TypeScript configuration
│
└── backend/           # FastAPI backend (ready for integration)
    ├── server.py      # API server
    └── requirements.txt
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)


### Frontend Setup

1. **Extract the archive:**
   ```bash
   tar -xzf angular-portfolio.tar.gz
   cd frontend
   ```

2. **Install Angular CLI globally (if not already installed):**
   ```bash
   npm install -g @angular/cli
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   ng serve
   ```

5. **Open your browser:**
   Navigate to `http://localhost:4200`

### Configuration

If you need to run on a specific host/port:

**Option 1: Command line**
```bash
ng serve --host 0.0.0.0 --port 3000
```

**Option 2: Update angular.json**
```json
{
  "serve": {
    "options": {
      "port": 4200,
      "host": "localhost"
    }
  }
}
```

### Backend Setup (Optional)

If you want to integrate with the FastAPI backend:

1. **Navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up MongoDB:**
   - Install MongoDB locally or use MongoDB Atlas
   - Update `.env` file with your MongoDB connection string

5. **Run the backend:**
   ```bash
   uvicorn server:app --reload --port 8001
   ```

## 🎨 Customizing Your Portfolio

### Update Personal Information

Edit `/frontend/src/app/mock-data.ts`:

```typescript
export const mockData = {
  profile: {
    name: 'Your Name',
    title: 'Your Title',
    tagline: 'Your tagline',
    bio: 'Your bio...',
    email: 'your@email.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    // ... update other fields
  },
  // ... update skills, projects, experience
};
```

### Modify Styling

**Global styles:** `/frontend/src/styles.scss`
**Component styles:** `/frontend/src/app/components/*/component-name.scss`

**Color scheme variables:**
- Primary text: `#000000`
- Background: `#ffffff`
- Secondary background: `#fafafa`
- Borders: `#e5e5e5`
- Gray text: `#666666`, `#999999`

### Add/Remove Sections

Components are located in `/frontend/src/app/components/`

To add a section:
1. Generate component: `ng generate component components/new-section`
2. Import in `app.ts`
3. Add to template in `app.html`

## 📦 Building for Production

```bash
cd frontend
ng build --configuration production
```

The build artifacts will be in the `dist/` directory.

## 🛠️ Tech Stack

- **Frontend:** Angular 21, TypeScript, SCSS
- **Backend:** FastAPI, Python
- **Database:** MongoDB (ready for integration)
- **Styling:** Custom SCSS with monochrome design
- **Fonts:** IBM Plex Sans, JetBrains Mono

## 📝 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Animated hero section with rotating graphics
- ✅ Interactive project cards with hover effects
- ✅ Contact form (frontend ready, backend integration needed)
- ✅ Professional monochrome design
- ✅ SEO-friendly structure

## 🔧 Troubleshooting

**Issue: Angular CLI not found**
```bash
npm install -g @angular/cli@latest
```

**Issue: Port already in use**
```bash
ng serve --port 4300
```

**Issue: Module not found errors**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Support

For questions or issues:
1. Check the Angular documentation
2. Review the component code in `/frontend/src/app/components/`
3. Inspect browser console for errors

---

**Built with ❤️ using Angular**
