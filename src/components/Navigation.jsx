'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Navigation.module.css';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#services', label: 'Services' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>

                <Image
                    src="/images/logo.png"
                    alt="Portfolio Logo"
                    width={160}
                    height={40}
                    className={styles.logoImage}
                    priority
                />

                <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
                    {navLinks.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" className={`btn btn-primary ${styles.ctaBtn}`}>
                        Hire Me
                    </a>
                </div>

                <button
                    className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}