import Link from 'next/link';
import { useRouter } from 'next/router';

const menuItems = [
    { key: 'home', label: 'Главная', href: '/' },
    { key: 'about', label: 'О нас', href: '/about' },
    // Добавьте другие пункты меню здесь
];

export function SimpleMenu() {
    const router = useRouter();

    return (
        <nav style={{
            padding: '1rem 0',
            borderBottom: '1px solid #f0f0f0'
        }}>
            <ul style={{
                display: 'flex',
                gap: '2rem',
                listStyle: 'none',
                margin: 0,
                padding: 0
            }}>
                {menuItems.map(item => (
                    <li key={item.key}>
                        <Link
                            href={item.href}
                            style={{
                                color: router.pathname === item.href ? '#1890ff' : '#000000d9',
                                textDecoration: 'none',
                                fontSize: '16px',
                                padding: '8px 0',
                                transition: 'color 0.3s'
                            }}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
} 