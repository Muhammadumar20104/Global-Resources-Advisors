import ProviderComponent from '@/components/layouts/provider-component';
import '../styles/tailwind.css';
import { Metadata } from 'next';
import { Noto_Sans, Inter } from 'next/font/google';

export const metadata: Metadata = {
    title: {
        template: '%s | Global Resource Advisor',
        default: 'Global Resource Advisor',
    },
};
const notoSans = Noto_Sans({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-noto-sans',
});

const inter = Inter({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={notoSans.variable + ' ' + inter.variable}>
                <ProviderComponent>{children}</ProviderComponent>
            </body>
        </html>
    );
}
