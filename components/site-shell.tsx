'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems, site } from '@/lib/site'

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="container header-inner">
    <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">RNO</span><span><strong>{site.name}</strong><small>ADVISORY</small></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link className="nav-cta" href="/contact">Start a conversation <ArrowUpRight aria-hidden="true" /></Link></nav>
    <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight /></Link></nav>}</header>
}

export function Footer() { return <footer className="footer"><div className="container footer-grid"><div><Link href="/" className="brand footer-brand"><span className="brand-mark">RNO</span><span><strong>{site.name}</strong><small>ADVISORY</small></span></Link><p className="footer-note">{site.tagline}</p></div><div><p className="eyebrow">Explore</p><div className="footer-links">{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div></div><div><p className="eyebrow">Connect</p><p className="footer-note">{site.location}</p><a href={site.social.linkedin}>LinkedIn <ArrowUpRight /></a><a href={site.social.email}>Email <ArrowUpRight /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {site.name} Advisory</span><span>Independent advisory · Accra, Ghana</span></div></footer> }

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <section className="page-intro"><div className="container narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{text}</p></div></section> }

export function Portrait({ small = false }: { small?: boolean }) { return <div className={`portrait ${small ? 'portrait-small' : ''}`} role="img" aria-label="Founder portrait placeholder"><div className="portrait-label">Founder portrait<br /><span>Image to be supplied</span></div></div> }
