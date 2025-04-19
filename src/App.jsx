import { BrowserRouter } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { ToastContainer } from 'react-toastify';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <MantineProvider>
        <ToastContainer />
        <Navbar />
        <Home />
        <Footer />
      </MantineProvider>
      </BrowserRouter>
      <style global="true" jsx="true">{`
        :root {
          --radius: 0.5rem;
          --border: 220 5.3% 91%;
          --input: 220 84% 97%;
          --ring: 220 50% 50%;
          --background: 0 0% 100%;
          --foreground: 222.2 47.4% 11.2%;
          --primary: 262.1 83.3% 57.8%;
          --primary-foreground: 210 40% 98%;
          --secondary: 240 4.8% 95.9%;
          --secondary-foreground: 240 5.9% 10%;
          --destructive: 0 84.2% 60.2%;
          --destructive-foreground: 210 40% 98%;
          --muted: 240 4.8% 95.9%;
          --muted-foreground: 240 3.8% 46.1%;
          --accent: 240 4.8% 95.9%;
          --accent-foreground: 240 5.9% 10%;
          --popover: 0 0% 100%;
          --popover-foreground: 222.2 47.4% 11.2%;
          --card: 0 0% 100%;
          --card-foreground: 222.2 47.4% 11.2%;
        }

        .dark {
          --background: 222.2 84% 4.9%;
          --foreground: 210 40% 98%;
          --primary: 262.1 83.3% 57.8%;
          --primary-foreground: 210 40% 98%;
          --secondary: 240 3.7% 15.9%;
          --secondary-foreground: 0 0% 98%;
          --destructive: 0 62.8% 30.6%;
          --destructive-foreground: 210 40% 98%;
          --muted: 240 3.7% 15.9%;
          --muted-foreground: 240 5% 64.9%;
          --accent: 240 3.7% 15.9%;
          --accent-foreground: 0 0% 98%;
          --popover: 222.2 84% 4.9%;
          --popover-foreground: 210 40% 98%;
          --card: 222.2 84% 4.9%;
          --card-foreground: 210 40% 98%;
          --border: 220 17% 24%;
          --input: 220 17% 24%;
          --ring: 220 50% 50%;
        }

        body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }

        .container {
          @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
        }

        .rounded-lg {
          border-radius: var(--radius);
        }
        .rounded-md{
           border-radius: calc(var(--radius) - 2px);
        }
        .rounded-sm{
            border-radius: calc(var(--radius) - 4px);
        }

        .bg-background {
          background-color: hsl(var(--background));
        }
        .text-foreground {
            color: hsl(var(--foreground));
        }

        .bg-primary {
          background-color: hsl(var(--primary));
        }

        .text-primary-foreground {
          color: hsl(var(--primary-foreground));
        }

        .bg-secondary {
          background-color: hsl(var(--secondary));
        }

        .text-secondary-foreground {
          color: hsl(var(--secondary-foreground));
        }

        .bg-destructive {
          background-color: hsl(var(--destructive));
        }

        .text-destructive-foreground {
          color: hsl(var(--destructive-foreground));
        }

        .bg-muted{
            background-color: hsl(var(--muted));
        }

        .text-muted-foreground{
            color: hsl(var(--muted-foreground));
        }
        .bg-accent{
            background-color: hsl(var(--accent));
        }
        .text-accent-foreground{
            color: hsl(var(--accent-foreground));
        }

        .bg-popover {
            background-color: hsl(var(--popover));
        }
        .text-popover-foreground{
            color: hsl(var(--popover-foreground));
        }
        .bg-card{
            background-color: hsl(var(--card));
        }
        .text-card-foreground{
            color: hsl(var(--card-foreground));
        }

        .border {
          border: 1px solid hsl(var(--border));
        }
        .font-sans {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }
        .ring{
            --tw-ring-color: hsl(var(--ring));
        }
      `}</style>
    </>
  )
}

export default App
