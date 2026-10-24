import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import {
  developerInfo,
  whyWebsiteStats,
  projects,
  processSteps,
  servicesList,
  focusExpertiseList,
  technicalSkills,
  experienceData,
  educationData,
  achievementsData,
  tickerItems
} from './data/portfolioData'

gsap.registerPlugin(ScrollTrigger)

function App() {
  // Navigation & Route View State ('home' | 'projects' | 'case-study')
  const [activeView, setActiveView] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)
  const [projectLayout, setProjectLayout] = useState('stagger') // 'stagger' | 'grid'
  const [categoryFilter, setCategoryFilter] = useState('ALL')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Multi-image switcher per project card (0 = primary image, 1 = secondary image)
  const [activeScreens, setActiveScreens] = useState({})

  // Lightbox state for full-screen screenshot inspection
  const [lightboxImage, setLightboxImage] = useState(null)

  // Custom Framer Cursor Follower
  const [cursorVisible, setCursorVisible] = useState(false)
  const [cursorLabel, setCursorLabel] = useState('View Case Study ↗')
  const cursorRef = useRef(null)
  const siteRef = useRef(null)

  // Interactive Client Missed Revenue & ROI Calculator state
  const [monthlyVisitors, setMonthlyVisitors] = useState(1200)
  const [avgDealValue, setAvgDealValue] = useState(25000)
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState(18)

  // Interactive Client Project Brief / Proposal Generator state
  const [clientName, setClientName] = useState('')
  const [clientBusiness, setClientBusiness] = useState('')
  const [projectType, setProjectType] = useState('Custom Business Website & Lead Engine')
  const [projectGoal, setProjectGoal] = useState('')

  // Smooth GSAP Cursor Follower (Desktop fine pointer only)
  useEffect(() => {
    const cursorEl = cursorRef.current
    if (!cursorEl) return
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isFinePointer) return

    const xTo = gsap.quickTo(cursorEl, 'x', { duration: 0.16, ease: 'power3.out' })
    const yTo = gsap.quickTo(cursorEl, 'y', { duration: 0.16, ease: 'power3.out' })

    const handleMouseMove = (e) => {
      xTo(e.clientX + 18)
      yTo(e.clientY + 18)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Heavy GSAP Animations: Kinetic Hero, Scroll Progress, Live Counters, Clip-Path Reveals, Magnetic Buttons & 3D Tilt
  useEffect(() => {
    const cleanupListeners = []

    const ctx = gsap.context(() => {
      // 0. Top Scroll Progress Bar
      gsap.fromTo(
        '.scroll-progress-bar',
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.2
          }
        }
      )

      // Ambient Floating Hero Orbs
      gsap.to('.hero-orb-1', {
        x: -35,
        y: 25,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
      gsap.to('.hero-orb-2', {
        x: 30,
        y: -25,
        duration: 6.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      if (activeView === 'home') {
        // 1. Kinetic Split-Character 3D Hero Entrance Timeline
        const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } })
        heroTl
          .fromTo(
            '.gsap-hero-char',
            { yPercent: 120, rotateX: -80, opacity: 0 },
            {
              yPercent: 0,
              rotateX: 0,
              opacity: 1,
              duration: 0.95,
              stagger: 0.032,
              ease: 'back.out(1.4)'
            }
          )
          .fromTo(
            '.hero-meta-bar',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.65 },
            '-=0.55'
          )
          .fromTo(
            '.gsap-hero-item',
            { y: 32, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.75, stagger: 0.1 },
            '-=0.45'
          )
          .fromTo(
            '.hero-proof-card',
            { y: 40, opacity: 0, rotateY: -8, scale: 0.96 },
            { y: 0, opacity: 1, rotateY: 0, scale: 1, duration: 0.9, ease: 'power3.out' },
            '-=0.6'
          )

        // 2. Section Headers Reveal
        gsap.utils.toArray('.gsap-section-header').forEach((header) => {
          gsap.fromTo(
            header,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: header,
                start: 'top 86%'
              }
            }
          )
        })

        // 3. Why Website Stat Cards Stagger + Live Counting Numbers
        gsap.fromTo(
          '.stat-bento-card',
          { y: 48, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.09,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.stats-bento-grid',
              start: 'top 84%'
            }
          }
        )

        gsap.utils.toArray('.gsap-counter').forEach((counterEl) => {
          const targetVal = parseFloat(counterEl.getAttribute('data-target') || '0')
          const prefix = counterEl.getAttribute('data-prefix') || ''
          const suffix = counterEl.getAttribute('data-suffix') || ''
          const decimals = parseInt(counterEl.getAttribute('data-decimals') || '0', 10)
          const counterObj = { val: 0 }

          gsap.to(counterObj, {
            val: targetVal,
            duration: 1.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: counterEl,
              start: 'top 88%'
            },
            onUpdate: () => {
              counterEl.textContent = `${prefix}${counterObj.val.toFixed(decimals)}${suffix}`
            }
          })
        })

        // 4. Comparison Columns & ROI Calculator Reveal
        gsap.fromTo(
          '.comparison-col',
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.16,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.comparison-grid',
              start: 'top 84%'
            }
          }
        )

        gsap.fromTo(
          '.roi-calculator-box',
          { y: 48, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.roi-calculator-box',
              start: 'top 86%'
            }
          }
        )

        // 5. Featured Project Cards Clip-Path Curtain Unveil + Elevation Reveal
        gsap.utils.toArray('.gsap-project-card').forEach((card) => {
          const imgFrame = card.querySelector('.project-image-frame')
          gsap.fromTo(
            card,
            { y: 64, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 86%'
              }
            }
          )
          if (imgFrame) {
            gsap.fromTo(
              imgFrame,
              { clipPath: 'inset(12% 8% 12% 8% round 12px)' },
              {
                clipPath: 'inset(0% 0% 0% 0% round 0px)',
                duration: 1.05,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 82%'
                }
              }
            )
          }
        })

        // 6. Client Launch Blueprint Progress Line + Step Cards
        gsap.fromTo(
          '.process-progress-fill',
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.process-timeline-wrap',
              start: 'top 80%',
              end: 'bottom 55%',
              scrub: 0.4
            }
          }
        )

        gsap.fromTo(
          '.process-step-card',
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.process-timeline-grid',
              start: 'top 85%'
            }
          }
        )

        // 7. Services & Focus Rows Stagger
        gsap.fromTo(
          '.framer-list-row',
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.04,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.services-split-grid',
              start: 'top 82%'
            }
          }
        )

        // 8. Experience Cards (Medicca, Vefes Engineering) Reveal
        gsap.utils.toArray('.experience-card').forEach((expCard) => {
          gsap.fromTo(
            expCard,
            { y: 44, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: expCard,
                start: 'top 86%'
              }
            }
          )
        })

        // 9. Skills Matrix Stagger
        gsap.fromTo(
          '.skill-group-cell',
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.skills-matrix-grid',
              start: 'top 86%'
            }
          }
        )

        // 10. About Section Reveal
        gsap.fromTo(
          ['.about-copy-stack', '.about-telemetry-card'],
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.about-split-layout',
              start: 'top 84%'
            }
          }
        )
      } else {
        gsap.fromTo(
          '.gsap-view-enter',
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out' }
        )
      }

      // Footer Signature Reveal
      gsap.fromTo(
        '.footer-giant-signature',
        { y: 44, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.footer-signature-wrap',
            start: 'top 92%'
          }
        }
      )

      // Magnetic Buttons & 3D Perspective Tilt Cards (Fine pointer / desktop only)
      const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
      if (isFinePointer) {
        const magneticBtns = document.querySelectorAll('.gsap-magnetic')
        magneticBtns.forEach((btn) => {
          const onMove = (e) => {
            const rect = btn.getBoundingClientRect()
            const relX = e.clientX - (rect.left + rect.width / 2)
            const relY = e.clientY - (rect.top + rect.height / 2)
            gsap.to(btn, {
              x: relX * 0.24,
              y: relY * 0.24,
              duration: 0.25,
              ease: 'power2.out'
            })
          }
          const onLeave = () => {
            gsap.to(btn, {
              x: 0,
              y: 0,
              duration: 0.6,
              ease: 'elastic.out(1, 0.35)'
            })
          }
          btn.addEventListener('mousemove', onMove)
          btn.addEventListener('mouseleave', onLeave)
          cleanupListeners.push(() => {
            btn.removeEventListener('mousemove', onMove)
            btn.removeEventListener('mouseleave', onLeave)
          })
        })

        const tiltCards = document.querySelectorAll('.gsap-tilt-card')
        tiltCards.forEach((card) => {
          const onMove = (e) => {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2
            const rotateX = ((y - centerY) / centerY) * -4.5
            const rotateY = ((x - centerX) / centerX) * 4.5

            gsap.to(card, {
              rotationX: rotateX,
              rotationY: rotateY,
              transformPerspective: 1100,
              duration: 0.35,
              ease: 'power2.out'
            })
          }
          const onLeave = () => {
            gsap.to(card, {
              rotationX: 0,
              rotationY: 0,
              duration: 0.65,
              ease: 'power3.out'
            })
          }
          card.addEventListener('mousemove', onMove)
          card.addEventListener('mouseleave', onLeave)
          cleanupListeners.push(() => {
            card.removeEventListener('mousemove', onMove)
            card.removeEventListener('mouseleave', onLeave)
          })
        })
      }
    }, siteRef)

    return () => {
      cleanupListeners.forEach((fn) => fn())
      ctx.revert()
    }
  }, [activeView, projectLayout, categoryFilter])

  const openCaseStudy = (project) => {
    setSelectedProject(project)
    setActiveView('case-study')
    setCursorVisible(false)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateTo = (view, sectionId = null) => {
    setActiveView(view)
    setSelectedProject(null)
    setMobileMenuOpen(false)
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 60)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const toggleProjectScreen = (e, projectId, screenIndex) => {
    e.stopPropagation()
    setActiveScreens((prev) => ({
      ...prev,
      [projectId]: screenIndex
    }))
  }

  // ROI Calculations based on proven conversion & automation metrics
  const estimatedNewLeadsPerMonth = Math.max(2, Math.round(monthlyVisitors * 0.035))
  const estimatedMonthlyRevenueLift = Math.round(estimatedNewLeadsPerMonth * 0.25 * avgDealValue)
  const estimatedAnnualRevenueLift = estimatedMonthlyRevenueLift * 12
  const hoursSavedPerMonth = Math.round(manualHoursPerWeek * 4 * 0.6)

  const formatINR = (num) => {
    return '₹' + num.toLocaleString('en-IN')
  }

  const handleSendWhatsAppProposal = (e) => {
    e.preventDefault()
    const message = `Hi Hitarth! I reviewed your portfolio.${
      clientName ? ` I'm ${clientName}` : ''
    }${clientBusiness ? ` from ${clientBusiness}` : ''}. We're looking to build: ${projectType}.${
      projectGoal ? ` Details: ${projectGoal}` : ''
    } Let's discuss how we can get started.`
    const url = `https://wa.me/${developerInfo.whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleSendEmailProposal = () => {
    const subject = `Project Inquiry: ${projectType}${clientBusiness ? ` — ${clientBusiness}` : ''}`
    const body = `Hi Hitarth,\n\nI explored your portfolio and would love to discuss a web project.\n\nName: ${
      clientName || 'Prospective Client'
    }\nBusiness: ${clientBusiness || 'N/A'}\nProject Scope: ${projectType}\nGoals / Details: ${
      projectGoal || 'Looking to upgrade our online presence and automate workflows.'
    }\n\nBest regards,\n${clientName || ''}`
    window.location.href = `mailto:${developerInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  const filteredProjects =
    categoryFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category.toUpperCase().includes(categoryFilter))

  const renderSplitWord = (word) =>
    word.split('').map((char, idx) => (
      <span key={idx} className="gsap-hero-char">
        {char}
      </span>
    ))

  return (
    <div ref={siteRef} className="framer-site">
      {/* Live Top Scroll Progress Bar */}
      <div className="scroll-progress-wrap">
        <div className="scroll-progress-bar" />
      </div>

      {/* Custom Framer Cursor Follower Badge (GSAP-powered) */}
      <div
        ref={cursorRef}
        className="framer-cursor-badge"
        style={{
          opacity: cursorVisible ? 1 : 0,
          visibility: cursorVisible ? 'visible' : 'hidden'
        }}
      >
        <span>{cursorLabel}</span>
      </div>

      {/* Fullscreen Screenshot Lightbox */}
      {lightboxImage && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImage(null)}>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.caption}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="lightbox-caption-bar">
            <span>{lightboxImage.caption}</span>
            <button className="framer-btn" onClick={() => setLightboxImage(null)}>
              Close [ESC]
            </button>
          </div>
        </div>
      )}

      {/* Sticky Top Architectural Navigation Bar */}
      <header className="top-nav-section">
        <div className="top-nav-rail">
          <div className="top-nav-main-row">
            <div className="nav-brand" onClick={() => navigateTo('home')}>
              <span className="status-dot" />
              <span>HITARTH PAREEK</span>
            </div>

            <nav className="nav-links" aria-label="Primary Navigation">
              <button
                className={`nav-link-btn ${activeView === 'home' ? 'active' : ''}`}
                onClick={() => navigateTo('home', 'why-website')}
              >
                Why a Website?
              </button>
              <button
                className={`nav-link-btn ${activeView === 'projects' ? 'active' : ''}`}
                onClick={() => navigateTo('home', 'featured-work')}
              >
                Work [{projects.length}]
              </button>
              <button
                className="nav-link-btn"
                onClick={() => navigateTo('home', 'process-section')}
              >
                Process
              </button>
              <button
                className="nav-link-btn"
                onClick={() => navigateTo('home', 'experience-section')}
              >
                Experience
              </button>
              <button
                className="nav-link-btn"
                onClick={() => navigateTo('home', 'about-section')}
              >
                About
              </button>
            </nav>

            <div className="nav-actions">
              <a
                href={`tel:${developerInfo.phone}`}
                className="phone-highlight-pill nav-phone-desktop gsap-magnetic"
                title="Call Hitarth Directly"
              >
                <span>📞 {developerInfo.phone}</span>
              </a>
              <button
                className="framer-btn framer-btn-primary nav-cta-desktop gsap-magnetic"
                onClick={() => navigateTo('home', 'contact-footer')}
              >
                Let&apos;s Talk ↗
              </button>

              {/* Mobile Call Quick Button + Hamburger Menu Toggle */}
              <a
                href={`tel:${developerInfo.phone}`}
                className="phone-highlight-pill nav-phone-mobile"
                title="Call Hitarth Directly"
              >
                <span>📞 Call</span>
              </a>
              <button
                type="button"
                className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <span className="hamburger-box">
                  <span className="hamburger-line" />
                  <span className="hamburger-line" />
                </span>
                <span className="mobile-menu-label">{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
              </button>
            </div>
          </div>

          {/* Collapsible Mobile & Tablet Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="mobile-nav-drawer">
              <div className="mobile-nav-links">
                <button
                  className="mobile-nav-item"
                  onClick={() => navigateTo('home', 'why-website')}
                >
                  <span>Why Your Business Needs a Website</span>
                  <span className="framer-mono-tag">[01]</span>
                </button>
                <button
                  className="mobile-nav-item"
                  onClick={() => navigateTo('home', 'featured-work')}
                >
                  <span>Featured Work &amp; Case Studies [{projects.length}]</span>
                  <span className="framer-mono-tag">[02]</span>
                </button>
                <button
                  className="mobile-nav-item"
                  onClick={() => navigateTo('projects')}
                >
                  <span>All Projects Archive</span>
                  <span className="framer-mono-tag">[ARCHIVE]</span>
                </button>
                <button
                  className="mobile-nav-item"
                  onClick={() => navigateTo('home', 'process-section')}
                >
                  <span>4-Step Launch Process</span>
                  <span className="framer-mono-tag">[03]</span>
                </button>
                <button
                  className="mobile-nav-item"
                  onClick={() => navigateTo('home', 'services-section')}
                >
                  <span>Services &amp; Expertise</span>
                  <span className="framer-mono-tag">[04]</span>
                </button>
                <button
                  className="mobile-nav-item"
                  onClick={() => navigateTo('home', 'experience-section')}
                >
                  <span>Industry Experience &amp; Skills</span>
                  <span className="framer-mono-tag">[05]</span>
                </button>
                <button
                  className="mobile-nav-item"
                  onClick={() => navigateTo('home', 'about-section')}
                >
                  <span>About Hitarth Pareek</span>
                  <span className="framer-mono-tag">[06]</span>
                </button>
              </div>

              <div className="mobile-nav-cta-stack">
                <a
                  href={`tel:${developerInfo.phone}`}
                  className="phone-highlight-hero"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  📞 Call Direct: {developerInfo.phone}
                </a>
                <a
                  href={`https://wa.me/${developerInfo.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="framer-btn"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  💬 WhatsApp Direct ↗
                </a>
                <button
                  className="framer-btn framer-btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => navigateTo('home', 'contact-footer')}
                >
                  Request Custom Proposal ↗
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ====================================================================
          VIEW 1: CASE STUDY DETAIL PAGE (/projects/:slug)
          ==================================================================== */}
      {activeView === 'case-study' && selectedProject && (
        <section className="framer-section">
          <div className="framer-rail case-study-view gsap-view-enter">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '32px'
              }}
            >
              <button className="framer-btn" onClick={() => navigateTo('home', 'featured-work')}>
                ← Back to Projects
              </button>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span className="framer-mono-tag">
                  {selectedProject.index} · {selectedProject.category}
                </span>
                <a href={`tel:${developerInfo.phone}`} className="phone-highlight-pill">
                  📞 {developerInfo.phone}
                </a>
                <button
                  className="framer-btn framer-btn-primary"
                  onClick={() => navigateTo('home', 'contact-footer')}
                >
                  Build a Similar System ↗
                </button>
              </div>
            </div>

            <h1 className="framer-h1" style={{ maxWidth: '820px', marginBottom: '20px' }}>
              {selectedProject.title}
            </h1>
            <p className="framer-body" style={{ maxWidth: '760px' }}>
              {selectedProject.summary}
            </p>

            {/* Framer Case Study Metadata Table */}
            <div className="case-meta-table">
              <div className="case-meta-row">
                <span className="framer-h3">Scope</span>
                <span className="framer-body-2">{selectedProject.scope}</span>
              </div>
              <div className="case-meta-row">
                <span className="framer-h3">Target Client</span>
                <span className="framer-body-2">{selectedProject.client}</span>
              </div>
              <div className="case-meta-row">
                <span className="framer-h3">Industry</span>
                <span className="framer-body-2">{selectedProject.industry}</span>
              </div>
              <div className="case-meta-row">
                <span className="framer-h3">Business Impact</span>
                <span
                  className="framer-body-2"
                  style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}
                >
                  {selectedProject.featuredMetric}
                </span>
              </div>
              <div className="case-meta-row">
                <span className="framer-h3">Tech Stack</span>
                <div className="tech-tag-row">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="tech-mini-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Screenshots Gallery */}
            <div className="case-gallery-grid">
              {selectedProject.images.map((imgObj, idx) => (
                <div key={idx} className="case-image-card">
                  <img
                    src={imgObj.src}
                    alt={imgObj.caption}
                    onClick={() => setLightboxImage(imgObj)}
                  />
                  <div className="case-image-caption">
                    <span className="framer-mono-tag" style={{ marginRight: 10 }}>
                      [SCREEN 0{idx + 1}]
                    </span>
                    {imgObj.caption} —{' '}
                    <span
                      style={{
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        fontWeight: 600,
                        color: 'var(--ink-primary)'
                      }}
                      onClick={() => setLightboxImage(imgObj)}
                    >
                      Click to enlarge
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Framer Case Study Narrative Sections */}
            <div className="case-narrative-blocks">
              <div className="case-narrative-row">
                <span className="framer-h3">[01] Overview</span>
                <p className="framer-body-2">{selectedProject.overview}</p>
              </div>
              <div className="case-narrative-row">
                <span className="framer-h3">[02] Business Context</span>
                <p className="framer-body-2">{selectedProject.context}</p>
              </div>
              <div className="case-narrative-row">
                <span className="framer-h3">[03] Engineering Approach</span>
                <p className="framer-body-2">{selectedProject.approach}</p>
              </div>
              <div className="case-narrative-row">
                <span className="framer-h3">[04] Commercial Outcome</span>
                <p
                  className="framer-body-2"
                  style={{ color: 'var(--ink-primary)', fontWeight: 600 }}
                >
                  {selectedProject.outcome}
                </p>
              </div>
            </div>

            {/* Next Project Navigation */}
            <div className="load-more-row">
              <div>
                <span className="framer-mono-tag">
                  WANT A PLATFORM LIKE {selectedProject.shortTitle.toUpperCase()}?
                </span>
                <p className="framer-body-2" style={{ marginTop: 4 }}>
                  Call or WhatsApp directly at <strong>{developerInfo.phone}</strong> to launch your custom platform.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button className="framer-btn" onClick={() => navigateTo('projects')}>
                  All Projects [{projects.length}]
                </button>
                <button
                  className="framer-btn framer-btn-primary"
                  onClick={() => navigateTo('home', 'contact-footer')}
                >
                  Request a Proposal ↗
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====================================================================
          VIEW 2: ALL PROJECTS ARCHIVE (/projects)
          ==================================================================== */}
      {activeView === 'projects' && (
        <section className="framer-section">
          <div className="framer-rail framer-rail-pad gsap-view-enter">
            <div className="featured-header-row">
              <div>
                <span className="framer-mono-tag">
                  [ COMPLETE PROJECT ARCHIVE · {projects.length} PRODUCTION SYSTEMS ]
                </span>
                <h1 className="framer-h1" style={{ marginTop: 10 }}>
                  All Engineered Platforms.
                </h1>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {['ALL', 'SAAS', 'AI', 'ENTERPRISE', 'REAL-TIME'].map((cat) => (
                  <button
                    key={cat}
                    className={`screen-pill-btn ${categoryFilter === cat ? 'active' : ''}`}
                    onClick={() => setCategoryFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
                <button className="framer-btn" onClick={() => navigateTo('home')}>
                  ← Back Home
                </button>
              </div>
            </div>

            <div className="framer-projects-grid">
              {filteredProjects.map((project) => {
                const currentScreen = activeScreens[project.id] || 0
                const displayImg =
                  currentScreen === 1 && project.secondaryImage
                    ? project.secondaryImage
                    : project.primaryImage

                return (
                  <article
                    key={project.id}
                    className="framer-project-card gsap-tilt-card"
                    onClick={() => openCaseStudy(project)}
                    onMouseEnter={() => {
                      setCursorLabel(`Explore ${project.shortTitle} ↗`)
                      setCursorVisible(true)
                    }}
                    onMouseLeave={() => setCursorVisible(false)}
                  >
                    <div className="project-card-topbar">
                      <div className="project-card-index-group">
                        <span className="framer-mono-tag">{project.index}</span>
                        <span className="framer-body-small">{project.year}</span>
                      </div>
                      {project.secondaryImage && (
                        <div className="project-screen-switcher">
                          <button
                            className={`screen-pill-btn ${currentScreen === 0 ? 'active' : ''}`}
                            onClick={(e) => toggleProjectScreen(e, project.id, 0)}
                          >
                            Screen 1
                          </button>
                          <button
                            className={`screen-pill-btn ${currentScreen === 1 ? 'active' : ''}`}
                            onClick={(e) => toggleProjectScreen(e, project.id, 1)}
                          >
                            Screen 2
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="project-image-frame">
                      <img src={displayImg} alt={project.title} loading="lazy" />
                      <div className="project-metric-ribbon">{project.featuredMetric}</div>
                    </div>

                    <div className="project-card-meta">
                      <div className="project-card-title-row">
                        <h3 className="project-card-title">{project.shortTitle}</h3>
                        <span className="project-card-category">{project.category}</span>
                      </div>
                      <p className="project-card-summary">{project.summary}</p>
                      <div className="project-card-footer">
                        <div className="tech-tag-row">
                          {project.techStack.slice(0, 4).map((t) => (
                            <span key={t} className="tech-mini-pill">
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="framer-body-small">Case Study ↗</span>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ====================================================================
          VIEW 3: MAIN HOME PORTFOLIO PAGE (Light Editorial + Heavy GSAP Motion)
          ==================================================================== */}
      {activeView === 'home' && (
        <>
          {/* 1. HERO SECTION */}
          <section className="framer-section">
            <div className="framer-rail hero-rail">
              {/* Ambient Floating Light Gradient Orbs */}
              <div className="hero-ambient-orb hero-orb-1" />
              <div className="hero-ambient-orb hero-orb-2" />

              {/* Kinetic Split-Character Giant Display Name Header */}
              <div className="hero-giant-title-wrap">
                <h1 className="hero-giant-title">
                  <span className="hero-word-group">{renderSplitWord('HITARTH')}</span>
                  <span className="hero-word-group">{renderSplitWord('PAREEK')}</span>
                </h1>
              </div>

              {/* Framer 3-Column Hero Metadata Row */}
              <div className="hero-meta-bar">
                <div className="hero-meta-left">
                  <span>[ {developerInfo.location} ]</span>
                </div>
                <div className="hero-meta-center">{developerInfo.role}</div>
                <div className="hero-meta-right">
                  <a
                    href={`tel:${developerInfo.phone}`}
                    className="phone-highlight-pill gsap-magnetic"
                  >
                    📞 {developerInfo.phone}
                  </a>
                </div>
              </div>

              {/* Hero Main Value Proposition & 3D Interactive Business Impact Card */}
              <div className="hero-main-grid">
                <div className="hero-pitch-col">
                  <div className="hero-eyebrow-pill gsap-hero-item">
                    <span className="status-dot" />
                    <span>{developerInfo.availability} · Direct Line: {developerInfo.phone}</span>
                  </div>

                  <h2 className="framer-h1 gsap-hero-item">{developerInfo.tagline}</h2>

                  <p className="framer-body gsap-hero-item">{developerInfo.heroPitch}</p>

                  <div className="hero-cta-row gsap-hero-item">
                    <button
                      className="framer-btn framer-btn-primary gsap-magnetic"
                      onClick={() => navigateTo('home', 'contact-footer')}
                    >
                      Get Your Custom Website Proposal ↗
                    </button>
                    <a
                      href={`https://wa.me/${developerInfo.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="phone-highlight-hero gsap-magnetic"
                    >
                      <span>📞 Call / WhatsApp: {developerInfo.phone}</span>
                    </a>
                    <button
                      className="framer-btn gsap-magnetic"
                      onClick={() => navigateTo('home', 'featured-work')}
                    >
                      Explore Live Work [{projects.length}]
                    </button>
                  </div>
                </div>

                {/* Right Column: 3D Tilt Proven Commercial Impact Telemetry */}
                <div className="hero-proof-card gsap-tilt-card">
                  <div className="hero-proof-header">
                    <span className="framer-mono-tag">[ PROVEN CLIENT ROI METRICS ]</span>
                    <span
                      className="framer-body-small"
                      style={{ color: 'var(--accent-emerald)' }}
                    >
                      ● Verified Business Impact
                    </span>
                  </div>

                  <div className="hero-proof-metrics">
                    <div className="hero-mini-stat">
                      <div className="hero-mini-stat-val">60%</div>
                      <div className="hero-mini-stat-lbl">Reduction in manual quoting &amp; admin work</div>
                    </div>
                    <div className="hero-mini-stat">
                      <div className="hero-mini-stat-val">+35%</div>
                      <div className="hero-mini-stat-lbl">Higher client inquiry &amp; form conversion</div>
                    </div>
                    <div className="hero-mini-stat">
                      <div className="hero-mini-stat-val">3.2×</div>
                      <div className="hero-mini-stat-lbl">Faster revenue growth for digital brands</div>
                    </div>
                    <div className="hero-mini-stat">
                      <div className="hero-mini-stat-val">24/7</div>
                      <div className="hero-mini-stat-lbl">Automated client capture &amp; quoting</div>
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: '12.5px',
                      color: 'var(--ink-secondary)',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '8px',
                      flexWrap: 'wrap'
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>Medicca · Vefes Engineering</span>
                    <a
                      href={`tel:${developerInfo.phone}`}
                      style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}
                    >
                      {developerInfo.phone} ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. FRAMER INFINITE MARQUEE TICKER ("Thicker" Component) */}
          <section className="framer-section">
            <div className="framer-rail">
              <div className="ticker-wrap">
                <div className="ticker-track">
                  {[...tickerItems, ...tickerItems].map((item, idx) => (
                    <div key={idx} className="ticker-item">
                      <span>{item}</span>
                      <span className="ticker-sep">✦</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3. CLIENT PERSUASION SECTION: WHY YOUR BUSINESS NEEDS A WEBSITE NOW */}
          <section id="why-website" className="framer-section">
            <div className="framer-rail framer-rail-pad">
              <div className="section-header-stack gsap-section-header">
                <span className="framer-mono-tag" style={{ color: 'var(--accent-crimson)' }}>
                  {whyWebsiteStats.eyebrow}
                </span>
                <h2 className="framer-h1" style={{ maxWidth: '880px' }}>
                  {whyWebsiteStats.headline}
                </h2>
                <p className="framer-body" style={{ maxWidth: '790px', marginTop: '4px' }}>
                  {whyWebsiteStats.subheadline}
                </p>
              </div>

              {/* 6 Hard-Hitting Client Conversion Statistics with Live Animated GSAP Counters & 3D Tilt */}
              <div className="stats-bento-grid">
                {whyWebsiteStats.stats.map((stat) => (
                  <div key={stat.index} className="stat-bento-card gsap-tilt-card">
                    <div className="stat-bento-top">
                      <span
                        className="stat-big-number gsap-counter"
                        data-target={stat.numericValue}
                        data-prefix={stat.prefix}
                        data-suffix={stat.suffix}
                        data-decimals={stat.decimals}
                      >
                        {stat.value}
                      </span>
                      <span className="framer-mono-tag">{stat.index}</span>
                    </div>
                    <div>
                      <div
                        className="framer-mono-tag"
                        style={{ color: 'var(--accent-emerald)', marginBottom: '6px' }}
                      >
                        {stat.label}
                      </div>
                      <h3 className="stat-card-title">{stat.title}</h3>
                    </div>
                    <p className="stat-card-desc">{stat.description}</p>
                  </div>
                ))}
              </div>

              {/* Side-by-Side Comparison: Without a Website vs. With a Custom Web Platform */}
              <div className="comparison-grid">
                <div className="comparison-col without-col">
                  <div className="comparison-header">
                    <h3 className="framer-h2" style={{ fontSize: '21px', color: '#881337' }}>
                      {whyWebsiteStats.comparison.withoutWebsite.title}
                    </h3>
                    <span className="comparison-badge badge-danger">
                      {whyWebsiteStats.comparison.withoutWebsite.badge}
                    </span>
                  </div>
                  <ul className="comparison-list">
                    {whyWebsiteStats.comparison.withoutWebsite.points.map((pt, i) => (
                      <li key={i} className="comparison-item">
                        <span
                          className="comparison-icon"
                          style={{ background: '#ffe4e6', color: '#e11d48' }}
                        >
                          ✕
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="comparison-col with-col">
                  <div className="comparison-header">
                    <h3 className="framer-h2" style={{ fontSize: '21px', color: '#064e3b' }}>
                      {whyWebsiteStats.comparison.withWebsite.title}
                    </h3>
                    <span className="comparison-badge badge-success">
                      {whyWebsiteStats.comparison.withWebsite.badge}
                    </span>
                  </div>
                  <ul className="comparison-list">
                    {whyWebsiteStats.comparison.withWebsite.points.map((pt, i) => (
                      <li key={i} className="comparison-item">
                        <span
                          className="comparison-icon"
                          style={{ background: '#d1fae5', color: '#059669' }}
                        >
                          ✓
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Interactive Missed Revenue & Automation ROI Calculator */}
              <div className="roi-calculator-box">
                <div className="roi-calc-header">
                  <div>
                    <span className="framer-mono-tag" style={{ color: 'var(--accent-cobalt)' }}>
                      [ INTERACTIVE BUSINESS GROWTH ESTIMATOR ]
                    </span>
                    <h3 className="framer-h2" style={{ marginTop: 8 }}>
                      Calculate How Much Revenue &amp; Time Your Website Can Generate
                    </h3>
                  </div>
                  <a href={`tel:${developerInfo.phone}`} className="phone-highlight-pill">
                    📞 Direct Consultation: {developerInfo.phone}
                  </a>
                </div>

                <div className="roi-calc-body">
                  <div className="roi-sliders">
                    <div className="roi-slider-group">
                      <div className="roi-slider-label-row">
                        <span>Monthly Potential Buyers Searching Your Niche</span>
                        <span className="roi-slider-val">
                          {monthlyVisitors.toLocaleString('en-IN')} visitors / mo
                        </span>
                      </div>
                      <input
                        type="range"
                        min="200"
                        max="10000"
                        step="100"
                        value={monthlyVisitors}
                        onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                        className="roi-range-input"
                      />
                    </div>

                    <div className="roi-slider-group">
                      <div className="roi-slider-label-row">
                        <span>Average Value of 1 Client / Order (₹)</span>
                        <span className="roi-slider-val">{formatINR(avgDealValue)}</span>
                      </div>
                      <input
                        type="range"
                        min="5000"
                        max="250000"
                        step="5000"
                        value={avgDealValue}
                        onChange={(e) => setAvgDealValue(Number(e.target.value))}
                        className="roi-range-input"
                      />
                    </div>

                    <div className="roi-slider-group">
                      <div className="roi-slider-label-row">
                        <span>Hours Spent Weekly on Manual Quotes, WhatsApp &amp; Excel</span>
                        <span className="roi-slider-val">{manualHoursPerWeek} hrs / week</span>
                      </div>
                      <input
                        type="range"
                        min="4"
                        max="60"
                        step="2"
                        value={manualHoursPerWeek}
                        onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                        className="roi-range-input"
                      />
                    </div>
                  </div>

                  <div className="roi-results-panel">
                    <span className="framer-mono-tag">
                      ESTIMATED ANNUAL GROWTH WITH A CUSTOM WEB SYSTEM
                    </span>
                    <div className="roi-result-big">+{formatINR(estimatedAnnualRevenueLift)} / yr</div>
                    <p className="framer-body-2">
                      Capturing just <strong>~{estimatedNewLeadsPerMonth} high-intent leads/month</strong>{' '}
                      online and automating your quotation &amp; onboarding workflows saves{' '}
                      <strong style={{ color: 'var(--ink-primary)' }}>
                        {hoursSavedPerMonth} hours every month
                      </strong>{' '}
                      (60% reduction in manual effort).
                    </p>
                    <button
                      className="framer-btn framer-btn-primary gsap-magnetic"
                      style={{ width: '100%', marginTop: '6px' }}
                      onClick={() => navigateTo('home', 'contact-footer')}
                    >
                      Claim Your Growth — Call / WhatsApp {developerInfo.phone} ↗
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. FEATURED WORK SECTION (4 Real Projects: QuoteRx, AI Nutrition, eSign, Let's Chat) */}
          <section id="featured-work" className="framer-section">
            <div className="framer-rail framer-rail-pad">
              <div className="featured-header-row gsap-section-header">
                <div>
                  <span className="framer-mono-tag">[ PRODUCTION SYSTEMS &amp; CLIENT SOLUTIONS ]</span>
                  <h2 className="framer-h1" style={{ marginTop: 10 }}>
                    Featured Work
                  </h2>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="view-mode-toggle">
                    <button
                      className={`view-mode-btn ${projectLayout === 'stagger' ? 'active' : ''}`}
                      onClick={() => setProjectLayout('stagger')}
                    >
                      Framer Editorial
                    </button>
                    <button
                      className={`view-mode-btn ${projectLayout === 'grid' ? 'active' : ''}`}
                      onClick={() => setProjectLayout('grid')}
                    >
                      Grid View
                    </button>
                  </div>
                </div>
              </div>

              {/* Staggered Framer Project Cards with 3D Tilt & Clip-Path Unveil */}
              <div
                className={
                  projectLayout === 'stagger' ? 'framer-projects-stagger' : 'framer-projects-grid'
                }
              >
                {projects.map((project) => {
                  const currentScreen = activeScreens[project.id] || 0
                  const displayImg =
                    currentScreen === 1 && project.secondaryImage
                      ? project.secondaryImage
                      : project.primaryImage

                  return (
                    <div
                      key={project.id}
                      className={
                        projectLayout === 'stagger'
                          ? `framer-project-row align-${project.alignment}`
                          : ''
                      }
                    >
                      <article
                        className="framer-project-card gsap-project-card gsap-tilt-card"
                        onClick={() => openCaseStudy(project)}
                        onMouseEnter={() => {
                          setCursorLabel(`Open Case Study ${project.index} ↗`)
                          setCursorVisible(true)
                        }}
                        onMouseLeave={() => setCursorVisible(false)}
                      >
                        {/* Top Bar with Index, Year, and Multi-Screen Switcher */}
                        <div className="project-card-topbar">
                          <div className="project-card-index-group">
                            <span className="framer-mono-tag">{project.index}</span>
                            <span className="framer-body-small">{project.year}</span>
                            <span className="framer-mono-tag project-industry-tag">· {project.industry}</span>
                          </div>

                          {project.secondaryImage && (
                            <div
                              className="project-screen-switcher"
                              title="Switch between live screens of this project"
                            >
                              <button
                                className={`screen-pill-btn ${currentScreen === 0 ? 'active' : ''}`}
                                onClick={(e) => toggleProjectScreen(e, project.id, 0)}
                              >
                                {project.id === 'quoterx' ? 'Dashboard' : 'Live Chat'}
                              </button>
                              <button
                                className={`screen-pill-btn ${currentScreen === 1 ? 'active' : ''}`}
                                onClick={(e) => toggleProjectScreen(e, project.id, 1)}
                              >
                                Login Portal
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Screenshot Showcase */}
                        <div className="project-image-frame">
                          <img src={displayImg} alt={project.title} loading="lazy" />
                          <div className="project-metric-ribbon">{project.featuredMetric}</div>
                        </div>

                        {/* Framer Project Metadata Footer */}
                        <div className="project-card-meta">
                          <div className="project-card-title-row">
                            <h3 className="project-card-title">{project.title}</h3>
                            <span className="project-card-category">{project.category}</span>
                          </div>

                          <p className="project-card-summary">{project.summary}</p>

                          <div className="project-card-footer">
                            <div className="tech-tag-row">
                              {project.techStack.map((tech) => (
                                <span key={tech} className="tech-mini-pill">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <span
                              className="framer-body-small"
                              style={{ whiteSpace: 'nowrap', marginLeft: '8px' }}
                            >
                              Read Case Study ↗
                            </span>
                          </div>
                        </div>
                      </article>
                    </div>
                  )
                })}
              </div>

              {/* Framer "View Archive / Start Project" Row */}
              <div className="load-more-row">
                <div>
                  <span className="framer-mono-tag">
                    [ NEED A CUSTOM SYSTEM BUILT FOR YOUR COMPANY? ]
                  </span>
                  <p className="framer-body-2" style={{ marginTop: 4 }}>
                    From quotation CRMs and AI dashboards to paperless eSign portals and high-converting company websites.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a href={`tel:${developerInfo.phone}`} className="phone-highlight-pill">
                    📞 {developerInfo.phone}
                  </a>
                  <button
                    className="framer-btn framer-btn-primary gsap-magnetic"
                    onClick={() => navigateTo('home', 'contact-footer')}
                  >
                    Start Your Project ↗
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 5. ANIMATED 4-STEP CLIENT LAUNCH BLUEPRINT */}
          <section id="process-section" className="framer-section">
            <div className="framer-rail framer-rail-pad">
              <div className="section-header-stack gsap-section-header">
                <span className="framer-mono-tag" style={{ color: 'var(--accent-cobalt)' }}>
                  [ CLIENT EXECUTION BLUEPRINT · FROM IDEA TO LIVE REVENUE ]
                </span>
                <h2 className="framer-h1">How We Launch Your Digital Platform in 4 Steps</h2>
              </div>

              <div className="process-timeline-wrap">
                <div className="process-progress-track">
                  <div className="process-progress-fill" />
                </div>

                <div className="process-timeline-grid">
                  {processSteps.map((item) => (
                    <div key={item.step} className="process-step-card gsap-tilt-card">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <span className="process-step-num">{item.step}</span>
                        <span className="framer-mono-tag">STEP {item.step}</span>
                      </div>
                      <h3 className="stat-card-title">{item.title}</h3>
                      <p className="stat-card-desc">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 6. SERVICES & FOCUS / EXPERTISE 2-COLUMN SPLIT GRID */}
          <section id="services-section" className="framer-section">
            <div className="services-split-grid">
              {/* Left Column: Services [01]–[08] */}
              <div className="services-col">
                <div className="gsap-section-header">
                  <span className="framer-mono-tag">[ WHAT I BUILD FOR CLIENTS ]</span>
                  <h2 className="framer-h1" style={{ marginTop: 10 }}>
                    Services
                  </h2>
                </div>

                <div className="framer-numbered-list">
                  {servicesList.map((service, idx) => (
                    <div key={service} className="framer-list-row">
                      <span
                        className="framer-body-2"
                        style={{ color: 'var(--ink-primary)', fontWeight: 500 }}
                      >
                        {service}
                      </span>
                      <span className="framer-h3">[0{idx + 1}]</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Focus / Expertise [01]–[07] */}
              <div className="services-col">
                <div className="gsap-section-header">
                  <span className="framer-mono-tag">[ INDUSTRIES &amp; ARCHITECTURES ]</span>
                  <h2 className="framer-h1" style={{ marginTop: 10 }}>
                    Focus / Expertise
                  </h2>
                </div>

                <div className="framer-numbered-list">
                  {focusExpertiseList.map((item, idx) => (
                    <div key={item} className="framer-list-row">
                      <span
                        className="framer-body-2"
                        style={{ color: 'var(--ink-primary)', fontWeight: 500 }}
                      >
                        {item}
                      </span>
                      <span className="framer-h3">[0{idx + 1}]</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 7. ENGINEERING EXPERIENCE (Medicca, Vefes Engineering — No months shown) & TECH ARSENAL */}
          <section id="experience-section" className="framer-section">
            <div className="framer-rail framer-rail-pad">
              <div className="section-header-stack gsap-section-header">
                <span className="framer-mono-tag">[ PRODUCTION TRACK RECORD &amp; COMPANIES ]</span>
                <h2 className="framer-h1">Industry Experience &amp; Engineering Arsenal</h2>
              </div>

              <div className="experience-stack">
                {experienceData.map((exp) => (
                  <div key={exp.company} className="experience-card gsap-tilt-card">
                    <div className="experience-top">
                      <div>
                        <span className="framer-mono-tag">{exp.index} · VERIFIED TRACK RECORD</span>
                        <h3 className="framer-h2" style={{ marginTop: 6 }}>
                          {exp.role} —{' '}
                          <span style={{ color: 'var(--accent-cobalt)' }}>{exp.company}</span>
                        </h3>
                      </div>
                      <span className="experience-company-badge">{exp.sector}</span>
                    </div>

                    <div className="experience-impact-grid">
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="impact-metric-box">
                          <div className="impact-metric-num">{item.metric}</div>
                          <p className="framer-body-2" style={{ fontSize: '13.5px' }}>
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Categorized Technical Skills Matrix */}
              <div className="skills-matrix-grid">
                {Object.entries(technicalSkills).map(([category, skills], idx) => (
                  <div key={category} className="skill-group-cell">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span className="framer-h3" style={{ color: 'var(--ink-primary)' }}>
                        {category}
                      </span>
                      <span className="framer-mono-tag">[0{idx + 1}]</span>
                    </div>
                    <div className="skill-pill-wrap">
                      {skills.map((skill) => (
                        <span key={skill} className="skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 8. ABOUT ME, EDUCATION (No CGPA shown) & NATIONAL ACHIEVEMENTS */}
          <section id="about-section" className="framer-section">
            <div className="framer-rail framer-rail-pad">
              <div className="about-split-layout">
                {/* Left Column: About Me Narrative + Clean Degree Card */}
                <div className="about-copy-stack">
                  <span className="framer-mono-tag">[ ABOUT THE DEVELOPER ]</span>
                  <h2 className="framer-h1">About Me</h2>

                  {developerInfo.aboutParagraphs.map((para, idx) => (
                    <p
                      key={idx}
                      className={idx === 0 ? 'framer-body' : 'framer-body-2'}
                      style={{
                        color: idx === 0 ? 'var(--ink-primary)' : 'var(--ink-secondary)',
                        fontWeight: idx === 0 ? 500 : 400
                      }}
                    >
                      {para}
                    </p>
                  ))}

                  {/* Clean Academic Foundation Card (No CGPA, No Dates) */}
                  <div
                    style={{
                      marginTop: '8px',
                      padding: '24px',
                      borderRadius: '16px',
                      border: '1px solid var(--border-hairline)',
                      background: '#ffffff',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <span className="framer-mono-tag" style={{ color: 'var(--accent-cobalt)' }}>
                      [ ACADEMIC FOUNDATION ]
                    </span>
                    <h3 className="framer-h2" style={{ fontSize: '20px', marginTop: '8px' }}>
                      {educationData.degree}
                    </h3>
                    <p className="framer-body-2" style={{ marginTop: '4px' }}>
                      {educationData.institution}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '6px' }}>
                    <a
                      href={`tel:${developerInfo.phone}`}
                      className="phone-highlight-hero gsap-magnetic"
                    >
                      📞 Direct Line: {developerInfo.phone}
                    </a>
                    <button
                      className="framer-btn framer-btn-primary gsap-magnetic"
                      onClick={() => navigateTo('home', 'contact-footer')}
                    >
                      Schedule a Discovery Call ↗
                    </button>
                  </div>
                </div>

                {/* Right Column: Architect Monogram & National Achievements */}
                <div className="about-telemetry-card gsap-tilt-card">
                  <div className="architect-monogram-box">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                      }}
                    >
                      <span className="monogram-initials">HP.</span>
                      <span className="hero-eyebrow-pill">Verified Engineer</span>
                    </div>
                    <div>
                      <div
                        className="framer-body"
                        style={{ fontWeight: 600, color: '#ffffff' }}
                      >
                        {developerInfo.name}
                      </div>
                      <div
                        className="framer-mono-tag"
                        style={{ marginTop: 4, color: '#cbd5e1' }}
                      >
                        {developerInfo.role}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '12px'
                      }}
                    >
                      <span className="framer-mono-tag">[ HONORS &amp; NATIONAL QUALIFICATIONS ]</span>
                      <span className="framer-mono-tag">[05]</span>
                    </div>

                    <div className="achievements-stack">
                      {achievementsData.map((ach, i) => (
                        <div key={ach.title} className="achievement-item">
                          <div>
                            <div className="framer-body-small" style={{ fontSize: '13.5px' }}>
                              {ach.title}
                            </div>
                            <div
                              style={{
                                fontSize: '12px',
                                color: 'var(--ink-secondary)',
                                marginTop: '2px'
                              }}
                            >
                              {ach.subtitle}
                            </div>
                          </div>
                          <span
                            className="framer-mono-tag"
                            style={{ color: 'var(--accent-emerald)' }}
                          >
                            [0{i + 1}]
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ====================================================================
          9. MONUMENTAL FRAMER FOOTER ("Let's Talk" + Highlighted Phone + Proposal Generator)
          ==================================================================== */}
      <footer id="contact-footer" className="framer-section">
        <div className="framer-rail footer-rail">
          {/* Highlighted Direct Phone Call / WhatsApp Spotlight Banner */}
          <div className="phone-spotlight-banner">
            <div>
              <span className="framer-mono-tag" style={{ color: '#047857' }}>
                [ DIRECT CLIENT HOTLINE · CALL OR WHATSAPP ANYTIME ]
              </span>
              <div style={{ marginTop: 6 }}>
                <a href={`tel:${developerInfo.phone}`} className="phone-spotlight-number">
                  <span>📞 {developerInfo.phone}</span>
                </a>
              </div>
            </div>
            <div className="phone-spotlight-actions">
              <a
                href={`tel:${developerInfo.phone}`}
                className="framer-btn framer-btn-primary gsap-magnetic"
              >
                Call Now ({developerInfo.phone}) ↗
              </a>
              <a
                href={`https://wa.me/${developerInfo.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="phone-highlight-pill gsap-magnetic"
              >
                WhatsApp Direct ↗
              </a>
            </div>
          </div>

          <div className="footer-top-grid">
            {/* Left Column: Direct Contact & Persuasive Close */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <span className="framer-mono-tag" style={{ color: 'var(--accent-emerald)' }}>
                [ READY TO UPGRADE YOUR BUSINESS ONLINE? ]
              </span>
              <h2 className="framer-h1">Let&apos;s Talk.</h2>
              <p className="framer-body-2">
                Whether you need a high-converting business website that outranks competitors, a custom quotation &amp; billing CRM like <strong>QuoteRx</strong>, an AI dashboard, or a paperless eSign portal — I’ll architect and launch it end-to-end.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-hairline)'
                }}
              >
                <div>
                  <span className="framer-mono-tag">HIGHLIGHTED PHONE / WHATSAPP</span>
                  <div style={{ marginTop: 8 }}>
                    <a
                      href={`tel:${developerInfo.phone}`}
                      className="phone-highlight-hero gsap-magnetic"
                    >
                      📞 {developerInfo.phone}
                    </a>
                  </div>
                </div>

                <div>
                  <span className="framer-mono-tag">DIRECT EMAIL</span>
                  <div style={{ marginTop: 4 }}>
                    <a
                      href={`mailto:${developerInfo.email}`}
                      className="framer-body"
                      style={{
                        textDecoration: 'underline',
                        color: 'var(--ink-primary)',
                        fontWeight: 600
                      }}
                    >
                      {developerInfo.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', paddingTop: '6px' }}>
                  {developerInfo.socials.map((soc) => (
                    <a
                      key={soc.label}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="framer-btn"
                    >
                      {soc.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Instant Client Project Brief Generator */}
            <form className="proposal-form-card" onSubmit={handleSendWhatsAppProposal}>
              <div className="proposal-form-header">
                <span className="framer-body-small">INSTANT PROJECT BRIEF &amp; ESTIMATE</span>
                <span className="framer-mono-tag" style={{ color: 'var(--accent-emerald)' }}>
                  ● Replies within 2 hours
                </span>
              </div>

              <div className="form-row-2">
                <div className="framer-field">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="framer-input"
                  />
                </div>
                <div className="framer-field">
                  <label>Company / Business Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Enterprises"
                    value={clientBusiness}
                    onChange={(e) => setClientBusiness(e.target.value)}
                    className="framer-input"
                  />
                </div>
              </div>

              <div className="framer-field">
                <label>What Do You Want to Build?</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="framer-select"
                >
                  <option value="Custom Business Website & Lead Engine">
                    Custom Business Website &amp; 24/7 Lead Engine
                  </option>
                  <option value="Quotation & CRM Automation Platform (like QuoteRx)">
                    Quotation &amp; CRM Automation Platform (like QuoteRx)
                  </option>
                  <option value="Full-Stack SaaS / AI Web Dashboard">
                    Full-Stack SaaS / AI Web Dashboard
                  </option>
                  <option value="Digital Signing / Client Onboarding Portal (like eSign)">
                    Digital Signing / Client Onboarding Portal (like eSign)
                  </option>
                  <option value="Real-Time Chat / Custom Web Application">
                    Real-Time Chat / Custom Web Application
                  </option>
                  <option value="Complete Website Redesign & Speed Optimization">
                    Complete Website Redesign &amp; Conversion Optimization
                  </option>
                </select>
              </div>

              <div className="framer-field">
                <label>Project Goals or Current Bottlenecks</label>
                <textarea
                  rows={3}
                  placeholder="Tell me about your business and what you want your website or platform to achieve..."
                  value={projectGoal}
                  onChange={(e) => setProjectGoal(e.target.value)}
                  className="framer-textarea"
                />
              </div>

              <div className="proposal-submit-row">
                <button
                  type="submit"
                  className="framer-btn framer-btn-primary gsap-magnetic"
                  style={{ flex: 1 }}
                >
                  Send Brief via WhatsApp ↗
                </button>
                <button
                  type="button"
                  className="framer-btn"
                  onClick={handleSendEmailProposal}
                >
                  Send via Email ✉
                </button>
              </div>
            </form>
          </div>

          {/* Framer Monumental Signature ("Adrian." -> "Hitarth Pareek.") */}
          <div className="footer-signature-wrap">
            <div className="footer-giant-signature">{developerInfo.footerSignature}</div>
          </div>

          <div className="footer-bottom-bar">
            <span>
              © {new Date().getFullYear()} {developerInfo.name} · Direct: {developerInfo.phone}
            </span>
            <span>Architectural Light Edition · React + GSAP Motion</span>
            <button
              className="nav-link-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
