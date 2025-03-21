import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const menuItems = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О нас' },
    // Добавьте другие пункты меню здесь
];

export function Navigation() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navigation">
            <div className="nav-content">
                {/* Десктопное меню */}
                <div className="desktop-menu">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`nav-link ${router.pathname === item.href ? 'active' : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Мобильное меню */}
                <button
                    className="mobile-menu-button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Меню
                </button>

                {isOpen && (
                    <div className="mobile-menu">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`nav-link ${router.pathname === item.href ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <style jsx>{`
        .navigation {
          padding: 1rem;
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .desktop-menu {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: #333;
          text-decoration: none;
          padding: 0.5rem 1rem;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #1890ff;
        }

        .nav-link.active {
          color: #1890ff;
          font-weight: 500;
        }

        .mobile-menu-button {
          display: none;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu-button {
            display: block;
            padding: 0.5rem 1rem;
            background: none;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }

          .mobile-menu .nav-link {
            padding: 0.5rem 0;
          }
        }
      `}</style>
        </nav>
    );
} 