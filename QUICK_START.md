# Quick Start Guide

## Installation & Running

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## Project Features

### What You'll See
- **Left Sidebar**: List of all patients with profile pictures
- **Header**: Navigation menu and doctor profile
- **Main Content**: Jessica Taylor's patient dashboard
- **Blood Pressure Chart**: 6 months of historical data
- **Vital Signs**: Current readings with color-coded status
- **Diagnostic List**: Medical conditions and their status
- **Lab Results**: List of completed lab tests
- **Patient Profile**: Complete patient information

### Key Interactions
1. **Click any patient** in the sidebar to view their data
2. **Hover over chart points** to see exact blood pressure values
3. **Scroll through** the patient list and lab results
4. **Responsive**: Works on mobile, tablet, and desktop

## API Information

The application fetches real patient data from:
- **URL**: https://fedskillstest.coalitiontechnologies.workers.dev
- **Authentication**: Basic Auth (automatically handled)
- **Default Patient**: Jessica Taylor

## Tech Stack

- React + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Chart.js (blood pressure visualization)
- Lucide React (icons)

## File Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── DiagnosisHistory.tsx
│   ├── PatientProfile.tsx
│   ├── DiagnosticList.tsx
│   └── LabResults.tsx
├── utils/
│   └── api.ts          # API functions
├── App.tsx             # Main app
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run typecheck` | Check TypeScript types |
| `npm run lint` | Run ESLint |

## Troubleshooting

### Port Already in Use
If port 5173 is taken, Vite will automatically use the next available port.

### API Not Loading
Check your internet connection. The API requires network access.

### Build Errors
Run `npm install` again to ensure all dependencies are installed.

## Notes

- The application automatically selects Jessica Taylor on load
- All patient data is fetched from the Coalition Technologies API
- The blood pressure chart shows the last 6 months of readings
- The design is fully responsive and works on all screen sizes
