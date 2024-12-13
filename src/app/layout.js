import { Inter } from 'next/font/google';
import './globals.css';
import LinuxHeader from '@/components/header/LinuxHeader';
import Footer from '@/components/footer/Footer';
import ParticlesComponent from '@/app/particles';  // Adjust the path as needed

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ryoaditarta',
  description: 'Next.js starter app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Particles as background */}
        <ParticlesComponent className="absolute inset-0 z-0" />

        {/* Header should be on top of the particles */}
        <LinuxHeader className="relative z-10" />

        {/* Main content */}
        <div className="relative z-11">
          {children}
        </div>

        {/* Footer */}
        <Footer className="relative z-10" />
      </body>
    </html>
  );
}
