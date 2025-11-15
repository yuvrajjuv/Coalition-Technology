# Tech.Care Patient Dashboard

A responsive, single-page healthcare dashboard application built with React, TypeScript, and Vite. This application displays patient information, diagnosis history, and lab results for Jessica Taylor, fetched from the Coalition Technologies Patient Data API.

## Features

- **Patient Sidebar**: Browse through a list of patients with profile pictures
- **Diagnosis History**: Interactive blood pressure chart showing 6 months of historical data
- **Vital Signs**: Display of current blood pressure, heart rate, respiratory rate, and temperature
- **Patient Profile**: Complete patient information including contact details and insurance
- **Diagnostic List**: Table view of patient diagnoses with descriptions and status
- **Lab Results**: Downloadable lab test results

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Chart.js & react-chartjs-2** - Blood pressure visualization
- **Lucide React** - Icons

## Installation

Install dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## API Information

The application uses the Coalition Technologies Patient Data API with Basic Authentication:

- **Endpoint**: `https://fedskillstest.coalitiontechnologies.workers.dev`
- **Username**: `coalition`
- **Password**: `skills-test`
- **Authentication**: Basic Auth (credentials are encrypted using btoa)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Sidebar.tsx     # Patient list sidebar
│   ├── DiagnosisHistory.tsx   # Blood pressure chart and vitals
│   ├── PatientProfile.tsx     # Patient information card
│   ├── DiagnosticList.tsx     # Diagnosis table
│   └── LabResults.tsx         # Lab results list
├── utils/
│   └── api.ts          # API functions and types
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Features Implemented

1. **Responsive Design**: Works on mobile, tablet, and desktop devices
2. **Real-time API Integration**: Fetches data from Coalition Technologies API
3. **Interactive Charts**: Blood pressure visualization using Chart.js
4. **Patient Selection**: Click on any patient in the sidebar to view their data
5. **Loading States**: Shows loading spinner while fetching data
6. **Error Handling**: Displays error messages with retry functionality
7. **Production Ready**: Clean, well-structured code with TypeScript

## Default Patient

The application automatically displays **Jessica Taylor**'s patient data on initial load, as specified in the requirements.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project was created for the Coalition Technologies FED Skills Test.
