'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { addCollection, Icon } from '@iconify/react'
import checkBold from '@iconify-icons/ph/check-bold'
import linkBold from '@iconify-icons/ph/link-bold'
import shareNetworkBold from '@iconify-icons/ph/share-network-bold'
import githubLogoBold from '@iconify-icons/ph/github-logo-bold'
import dribbbleLogoBold from '@iconify-icons/ph/dribbble-logo-bold'
import linkedinLogoBold from '@iconify-icons/ph/linkedin-logo-bold'
import coffeeFill from '@iconify-icons/ph/coffee-fill'
import spotifyLogoFill from '@iconify-icons/ph/spotify-logo-fill'
import musicNotesFill from '@iconify-icons/ph/music-notes-fill'
import trendUpBold from '@iconify-icons/ph/trend-up-bold'
import rocketLaunchFill from '@iconify-icons/ph/rocket-launch-fill'
import codeBold from '@iconify-icons/ph/code-bold'
import paintBrushBold from '@iconify-icons/ph/paint-brush-bold'
import arrowUpRightBold from '@iconify-icons/ph/arrow-up-right-bold'
import mapPinFill from '@iconify-icons/ph/map-pin-fill'
import envelopeSimpleFill from '@iconify-icons/ph/envelope-simple-fill'
import figmaLogoFill from '@iconify-icons/ph/figma-logo-fill'
import bracketsCurlyBold from '@iconify-icons/ph/brackets-curly-bold'
import windBold from '@iconify-icons/ph/wind-bold'
import sparkleFill from '@iconify-icons/ph/sparkle-fill'
import databaseFill from '@iconify-icons/ph/database-fill'
import cursorTextBold from '@iconify-icons/ph/cursor-text-bold'
import heartFill from '@iconify-icons/ph/heart-fill'
import arrowRightBold from '@iconify-icons/ph/arrow-right-bold'
import gitCommitBold from '@iconify-icons/ph/git-commit-bold'
import targetBold from '@iconify-icons/ph/target-bold'
import activityBold from '@iconify-icons/ph/activity-bold'
import caretDownBold from '@iconify-icons/ph/caret-down-bold'
import chartLineUpBold from '@iconify-icons/ph/chart-line-up-bold'
import bookOpenBold from '@iconify-icons/ph/book-open-bold'
import usersThreeBold from '@iconify-icons/ph/users-three-bold'
import smileyWinkFill from '@iconify-icons/ph/smiley-wink-fill'
import starFill from '@iconify-icons/ph/star-fill'
import userPlusBold from '@iconify-icons/ph/user-plus-bold'
import bugBeetleBold from '@iconify-icons/ph/bug-beetle-bold'
import articleBold from '@iconify-icons/ph/article-bold'
import hashBold from '@iconify-icons/ph/hash-bold'

addCollection({
  prefix: 'ph',
  icons: {
    'check-bold': checkBold,
    'link-bold': linkBold,
    'share-network-bold': shareNetworkBold,
    'github-logo-bold': githubLogoBold,
    'dribbble-logo-bold': dribbbleLogoBold,
    'linkedin-logo-bold': linkedinLogoBold,
    'coffee-fill': coffeeFill,
    'spotify-logo-fill': spotifyLogoFill,
    'music-notes-fill': musicNotesFill,
    'trend-up-bold': trendUpBold,
    'rocket-launch-fill': rocketLaunchFill,
    'code-bold': codeBold,
    'paint-brush-bold': paintBrushBold,
    'arrow-up-right-bold': arrowUpRightBold,
    'map-pin-fill': mapPinFill,
    'envelope-simple-fill': envelopeSimpleFill,
    'figma-logo-fill': figmaLogoFill,
    'brackets-curly-bold': bracketsCurlyBold,
    'wind-bold': windBold,
    'sparkle-fill': sparkleFill,
    'database-fill': databaseFill,
    'cursor-text-bold': cursorTextBold,
    'heart-fill': heartFill,
    'arrow-right-bold': arrowRightBold,
    'git-commit-bold': gitCommitBold,
    'target-bold': targetBold,
    'activity-bold': activityBold,
    'caret-down-bold': caretDownBold,
    'chart-line-up-bold': chartLineUpBold,
    'book-open-bold': bookOpenBold,
    'users-three-bold': usersThreeBold,
    'smiley-wink-fill': smileyWinkFill,
    'star-fill': starFill,
    'user-plus-bold': userPlusBold,
    'bug-beetle-bold': bugBeetleBold,
    'article-bold': articleBold,
    'hash-bold': hashBold,
  },
})

function Tile({ className = '', children, delay = 0 }: { className?: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      className={`tile ${className}`}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.56, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SocialButton({ icon, label, href = '#' }: { icon: string; label: string; href?: string }) {
  return (
    <a href={href} aria-label={label} className="social-button">
      <Icon icon={icon} width="20" height="20" />
    </a>
  )
}

function Chip({ children, icon, className = '' }: { children: React.ReactNode; icon?: string; className?: string }) {
  return (
    <span className={`chip ${className}`}>
      {icon && <Icon icon={icon} width="15" height="15" />}
      {children}
    </span>
  )
}

export default function Home() {
  const [copied, setCopied] = useState(false)

  async function copyLink() {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  async function sharePage() {
    if (navigator.share) {
      await navigator.share({ title: 'Viraj Jadhav', text: 'Viraj Jadhav · Full-Stack Developer & Creator', url: window.location.href })
    } else {
      await copyLink()
    }
  }

  return (
    <main className="min-h-screen">
      <div className="container-shell">
        <header className="topbar">
          <a href="#top" className="brand-lockup" aria-label="Viraj Jadhav home">
            <span className="brand-mark">VJ</span>
            <span className="brand-name">viraj.jadhav</span>
          </a>
          <nav className="desktop-nav" aria-label="Portfolio navigation">
            <a href="#about">about</a>
            <a href="#stack">stack</a>
            <a href="#analytics">analytics</a>
            <a href="#workflow">workflow</a>
            <a href="#connect">connect</a>
          </nav>
          <div className="top-actions">
            <button onClick={copyLink} className="pill-button" aria-live="polite">
              <Icon icon={copied ? 'ph:check-bold' : 'ph:link-bold'} width="17" height="17" />
              {copied ? 'Copied' : 'Copy link'}
            </button>
            <button onClick={sharePage} className="icon-button" aria-label="Share this profile">
              <Icon icon="ph:share-network-bold" width="18" height="18" />
            </button>
          </div>
        </header>

        <section id="top" className="bento-grid" aria-label="Profile links and highlights">
          <Tile delay={0.04} className="profile-tile md:col-span-2 md:row-span-2">
            <div className="profile-top">
              <div className="avatar"><img src="/avatar-crop.jpeg" alt="Viraj Jadhav" /></div>
              <div className="availability"><span className="status-dot" /> Available for projects</div>
            </div>
            <div className="profile-copy">
              <h1>Viraj Jadhav</h1>
              <p className="role-line">Full-Stack Developer &amp; Creator</p>
              <p className="bio">I build useful things for the web, from first sketch to a calm production deploy. I like sharp ideas, thoughtful interfaces, and shipping with care.</p>
            </div>
            <div className="social-row">
              <SocialButton icon="ph:github-logo-bold" label="GitHub" href="https://github.com/brutal-45" />
              <SocialButton icon="ph:dribbble-logo-bold" label="Dribbble" href="https://dribbble.com" />
              <SocialButton icon="ph:linkedin-logo-bold" label="LinkedIn" href="https://linkedin.com" />
              <SocialButton icon="ph:envelope-simple-fill" label="Email" href="mailto:creatorsports81@gmail.com" />
            </div>
          </Tile>

          <Tile delay={0.10} className="photo-tile md:col-span-2">
            <div className="photo-image" aria-hidden="true" />
            <div className="photo-gradient" aria-hidden="true" />
            <div className="photo-caption"><Icon icon="ph:coffee-fill" width="16" height="16" /> On the desk today</div>
          </Tile>

          <Tile delay={0.16} className="now-playing-tile bg-ink text-white">
            <div className="tile-topline teal-line"><Icon icon="ph:spotify-logo-fill" width="16" height="16" /><span>Now playing</span></div>
            <div className="track-row">
              <div className="album-art"><Icon icon="ph:music-notes-fill" width="28" height="28" /></div>
              <div className="track-copy"><strong>Something in the Way</strong><span>Nirvana</span></div>
            </div>
            <div className="player-bottom"><div className="equalizer" aria-label="Playing"><i /><i /><i /><i /><i /></div><span className="timestamp">2:41</span></div>
          </Tile>

          <Tile delay={0.22} className="stat-tile bg-teal text-white">
            <div className="stat-top"><Icon icon="ph:github-logo-bold" width="20" height="20" /><span className="trend-chip"><Icon icon="ph:trend-up-bold" width="14" height="14" /> +24</span></div>
            <div><div className="stat-number">24+</div><div className="stat-caption">projects shipped</div></div>
          </Tile>

          <Tile delay={0.28} className="project-tile md:col-span-2">
            <div className="project-icon"><Icon icon="ph:rocket-launch-fill" width="36" height="36" /></div>
            <div className="project-copy"><div className="eyebrow">Latest project</div><h2>Shipshape</h2><div className="tag-row"><Chip icon="ph:code-bold">Next.js</Chip><Chip icon="ph:paint-brush-bold">Tailwind</Chip><span className="live-tag"><span /> Live</span></div></div>
            <a className="round-arrow" href="https://github.com" target="_blank" rel="noreferrer" aria-label="Open latest project"><Icon icon="ph:arrow-up-right-bold" width="19" height="19" /></a>
          </Tile>

          <Tile delay={0.34} className="map-tile">
            <svg className="street-map" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <path d="M-25 145 L42 98 L218 34" /><path d="M-10 32 L66 87 L215 174" /><path d="M50 -15 L92 73 L118 216" /><path d="M154 -10 L138 77 L167 215" /><path className="thin" d="M-10 181 L84 127 L224 119" /><path className="thin" d="M24 -8 L101 34 L224 63" />
            </svg>
            <div className="map-pin"><span><Icon icon="ph:map-pin-fill" width="20" height="20" /></span></div>
            <div className="map-bottom"><span className="map-chip"><Icon icon="ph:map-pin-fill" width="14" height="14" /> Pune, IN</span><span className="local-time">14:22</span></div>
          </Tile>

          <Tile delay={0.40} className="newsletter-tile bg-apricot text-ink">
            <div className="newsletter-top"><span className="eyebrow ink-eyebrow">The weekly</span><Icon icon="ph:envelope-simple-fill" width="21" height="21" /></div>
            <div><h2>Read my<br />newsletter</h2><p>3,200 makers subscribed</p></div>
          </Tile>

          <Tile delay={0.46} className="toolbox-tile md:col-span-2">
            <div className="eyebrow">Toolbox</div>
            <div className="toolbox-chips">
              <Chip icon="ph:figma-logo-fill" className="teal-icon">Figma</Chip>
              <Chip icon="ph:brackets-curly-bold" className="purple-icon">Next.js</Chip>
              <Chip icon="ph:wind-bold" className="teal-icon">Tailwind</Chip>
              <Chip icon="ph:sparkle-fill" className="apricot-icon">Superdesign</Chip>
              <Chip icon="ph:database-fill" className="teal-icon">Supabase</Chip>
              <Chip icon="ph:cursor-text-bold" className="apricot-icon">Framer</Chip>
            </div>
          </Tile>

          <Tile delay={0.52} className="email-tile md:col-span-2 bg-ink text-white">
            <div className="email-glow" aria-hidden="true" />
            <div className="email-copy"><h2>Let&apos;s make something</h2><p>Open for one good project this fall.</p></div>
            <a href="mailto:creatorsports81@gmail.com" className="say-hello">Say hello <Icon icon="ph:arrow-right-bold" width="17" height="17" /></a>
          </Tile>
        </section>

        <div className="readme-sections">
          <AboutReadme />
          <ArsenalReadme />
          <AnalyticsReadme />
          <WorkflowReadme />
          <PhilosophyReadme />
          <FunReadme />
          <ConnectReadme />
        </div>

        <footer className="footer"><span>© 2026 Viraj Jadhav · @brutal-45</span><span>Made with <Icon icon="ph:heart-fill" width="13" height="13" /> and a bento grid</span></footer>
      </div>
    </main>
  )
}

function ReadmeSection({ id, number, label, title, copy, children }: { id: string; number: string; label: string; title: string; copy: string; children: React.ReactNode }) {
  return (
    <section id={id} className="readme-section">
      <div className="readme-heading">
        <div><div className="eyebrow">{number} / {label}</div><h2>{title}</h2></div>
        <p>{copy}</p>
      </div>
      {children}
    </section>
  )
}

function AboutReadme() {
  return (
    <ReadmeSection id="about" number="01" label="about me" title="A developer profile, without the corporate fog." copy="The short version of the README, translated into something you can actually skim. I build, learn, share, and keep the coffee close.">
      <div className="about-readme-grid">
        <div className="readme-card terminal-readme">
          <div className="terminal-bar"><span className="terminal-lights"><i /><i /><i /></span><span>brutal-45@github: ~</span><Icon icon="ph:code-bold" width="16" height="16" /></div>
          <div className="terminal-body">
            <div><span className="prompt">brutal-45@github</span><span className="path">:~$</span> <span>whoami</span></div>
            <div className="terminal-output"><span>USER</span><b>brutal-45</b><span>ROLE</span><b>Full-Stack Developer &amp; Creator</b><span>LOCATION</span><b>Earth, mostly online</b><span>STATUS</span><b className="green-text">● Open to collaboration</b><span>FUEL</span><b>Coffee &amp; curiosity</b><span>GOAL</span><b>Make a dent in the universe</b><span>MOTTO</span><b>&quot;Code hard, stay humble, ship fast.&quot;</b></div>
            <div><span className="prompt">brutal-45@github</span><span className="path">:~$</span> <span>echo $NEXT_MOVE</span></div>
            <div className="terminal-success">building useful things <span className="terminal-cursor" /></div>
          </div>
        </div>
        <div className="readme-card facts-card">
          <div className="facts-head"><span className="readme-card-label">what I&apos;m up to</span><Icon icon="ph:sparkle-fill" width="19" height="19" /></div>
          <ul className="facts-list"><li><span>01</span> Building exciting projects</li><li><span>02</span> Learning new technologies</li><li><span>03</span> Open to open-source collaboration</li><li><span>04</span> Aiming for 3,000+ contributions</li><li><span>05</span> Sharing knowledge and code</li><li><span>06</span> Dreaming in code and design</li></ul>
        </div>
      </div>
    </ReadmeSection>
  )
}

const stackGroups = [
  { label: 'Languages', tone: 'violet', items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'Go', 'Rust', 'C', 'HTML5', 'CSS3', 'SQL', 'Shell'] },
  { label: 'Frameworks', tone: 'cyan', items: ['React', 'Next.js', 'Vue.js', 'Svelte', 'Node.js', 'Express', 'FastAPI', 'Django', 'Flask', 'Tailwind CSS', 'Bootstrap', 'Three.js'] },
  { label: 'Databases', tone: 'green', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'SQLite', 'Firebase'] },
  { label: 'Cloud & DevOps', tone: 'rose', items: ['Docker', 'Kubernetes', 'AWS', 'Vercel', 'Netlify', 'Linux', 'Nginx', 'GitHub Actions'] },
  { label: 'Tools', tone: 'orange', items: ['Git', 'VS Code', 'Neovim', 'Figma', 'Postman', 'NPM', 'Yarn', 'PNPM'] },
]

function ArsenalReadme() {
  return (
    <ReadmeSection id="stack" number="02" label="tech arsenal" title="A wide toolbox with a pragmatic center." copy="These are the technologies I reach for, grouped the way I actually use them. The best stack is the one that makes the product feel simple.">
      <div className="arsenal-layout">
        <div className="readme-card arsenal-card">{stackGroups.map((group) => <div className="stack-group" key={group.label}><div className={`stack-group-title ${group.tone}`}><span className="stack-dot" />{group.label}<span className="stack-count">{String(group.items.length).padStart(2, '0')}</span></div><div className="stack-pills">{group.items.map((item) => <span key={item} className="stack-pill">{item}</span>)}</div></div>)}</div>
        <div className="readme-card proficiency-card"><div className="facts-head"><span className="readme-card-label">skill proficiency</span><span className="mini-badge">always learning</span></div><div className="proficiency-list">{[['Frontend', '90%', 'React, Next.js, Vue, Tailwind', 'violet'], ['Backend', '85%', 'Node.js, Python, FastAPI', 'cyan'], ['Database', '80%', 'MongoDB, PostgreSQL, Redis', 'green'], ['DevOps', '70%', 'Docker, AWS, CI/CD', 'rose'], ['Mobile', '65%', 'React Native', 'orange']].map(([name, percent, tools, tone]) => <div className="proficiency-row" key={name}><div className="proficiency-meta"><b>{name}</b><span>{percent}</span></div><div className="proficiency-track"><span className={`proficiency-fill ${tone}`} style={{ width: percent }} /></div><small>{tools}</small></div>)}</div></div>
      </div>
    </ReadmeSection>
  )
}

const heatLevels = [0, 0, 1, 0, 2, 1, 0, 3, 2, 1, 4, 1, 2, 3, 0, 2, 1, 4, 3, 2, 1, 0, 3, 4, 2, 1, 0, 2, 3, 1, 4, 2]

function AnalyticsReadme() {
  return (
    <ReadmeSection id="analytics" number="03" label="github analytics" title="Proof of life in the contribution graph." copy="A designed snapshot of the work loop behind the work. Live API data can plug in later, but the story is already clear: consistent beats dramatic sprints.">
      <div className="analytics-stat-grid"><Metric value="846" label="commits this year" change="+18.4%" icon="ph:git-commit-bold" tone="cyan" /><Metric value="24+" label="projects shipped" change="since 2021" icon="ph:rocket-launch-fill" tone="violet" /><Metric value="3,000+" label="contributions goal" change="in progress" icon="ph:target-bold" tone="orange" /><Metric value="99.9%" label="curiosity uptime" change="always online" icon="ph:activity-bold" tone="green" /></div>
      <div className="analytics-layout">
        <div className="readme-card contribution-card"><div className="analytics-card-head"><div><span className="readme-card-label">contribution field</span><p>less green squares, more useful software</p></div><span className="year-badge">2026 <Icon icon="ph:caret-down-bold" width="13" height="13" /></span></div><div className="months"><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span></div><div className="heatmap-wrap"><div className="weekday-labels"><span>Mon</span><span>Wed</span><span>Fri</span></div><div className="heatmap">{Array.from({ length: 196 }).map((_, index) => <span key={index} className={`heat-cell heat-${heatLevels[(index * 7 + index * index) % heatLevels.length]}`} />)}</div></div><div className="heat-legend"><span>less</span><i className="heat-0" /><i className="heat-1" /><i className="heat-2" /><i className="heat-3" /><i className="heat-4" /><span>more</span></div></div>
        <div className="readme-card graph-card"><div className="analytics-card-head"><div><span className="readme-card-label">commit rhythm</span><p>small pushes, compounding momentum</p></div><Icon icon="ph:chart-line-up-bold" width="20" height="20" className="accent-icon" /></div><div className="line-chart"><svg viewBox="0 0 520 180" role="img" aria-label="Commit rhythm line chart"><defs><linearGradient id="graphFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0f9d8f" stopOpacity=".28" /><stop offset="100%" stopColor="#0f9d8f" stopOpacity="0" /></linearGradient></defs><path className="chart-grid" d="M0 35H520M0 90H520M0 145H520" /><path className="chart-area" d="M0 145 C28 140 32 122 56 128 S90 95 112 112 S145 75 168 97 S200 63 224 85 S252 105 280 72 S318 92 340 58 S378 78 400 40 S438 56 462 28 S495 49 520 14 V180 H0Z" /><path className="chart-line" d="M0 145 C28 140 32 122 56 128 S90 95 112 112 S145 75 168 97 S200 63 224 85 S252 105 280 72 S318 92 340 58 S378 78 400 40 S438 56 462 28 S495 49 520 14" /></svg></div><div className="graph-footer"><span>Jan 2025</span><span>Dec 2025</span></div></div>
      </div>
      <div className="language-strip readme-card"><span className="readme-card-label">most-used languages</span><div className="language-bar"><span className="lang-ts" style={{ width: '38%' }} /><span className="lang-python" style={{ width: '26%' }} /><span className="lang-js" style={{ width: '19%' }} /><span className="lang-go" style={{ width: '10%' }} /><span className="lang-other" style={{ width: '7%' }} /></div><div className="language-labels"><span><i className="lang-ts" />TypeScript 38%</span><span><i className="lang-python" />Python 26%</span><span><i className="lang-js" />JavaScript 19%</span><span><i className="lang-go" />Go 10%</span><span><i className="lang-other" />Other 7%</span></div></div>
    </ReadmeSection>
  )
}

function Metric({ value, label, change, icon, tone }: { value: string; label: string; change: string; icon: string; tone: string }) {
  return <div className="metric-card"><div className={`metric-icon ${tone}`}><Icon icon={icon} width="17" height="17" /></div><div className="metric-value">{value}</div><div className="metric-label">{label}</div><div className={`metric-change ${tone}`}>{change}</div></div>
}

const workflowSteps = [
  ['01', 'Idea', 'Find the sharp problem hiding inside the loud brief.'],
  ['02', 'Research & Plan', 'Make the unknowns visible before the first line.'],
  ['03', 'Design', 'Make the path obvious before writing the interface.'],
  ['04', 'Develop', 'Compose small, testable pieces that can move quickly.'],
  ['05', 'Test', 'Break the happy path and listen to what fails.'],
  ['06', 'Deploy & Monitor', 'Ship it, watch it, then make it better.'],
]

function WorkflowReadme() {
  return (
    <ReadmeSection id="workflow" number="04" label="development lifecycle" title="From rough signal to reliable software." copy="A six-part loop for turning a question into a product. The goal is not perfection on day one. It is a better next iteration.">
      <div className="workflow-grid">{workflowSteps.map(([number, title, copy], index) => <div className="workflow-step" key={number}><div className={`workflow-number ${index === 5 ? 'last' : ''}`}>{number}</div>{index < workflowSteps.length - 1 && <span className="workflow-connector" />}<h3>{title}</h3><p>{copy}</p></div>)}</div>
    </ReadmeSection>
  )
}

const philosophy = [
  ['Clean code', 'Code should read like a thoughtful note to the person who comes after you.', 'ph:code-bold', 'violet'],
  ['Keep learning', 'Stay curious long enough for the next useful idea to find you.', 'ph:book-open-bold', 'cyan'],
  ['Open source', 'Share the work, document the sharp edges, make the room bigger.', 'ph:users-three-bold', 'green'],
  ['Ship fast', 'Make the smallest useful version, then let reality teach you.', 'ph:rocket-launch-fill', 'orange'],
]

function PhilosophyReadme() {
  return (
    <ReadmeSection id="philosophy" number="05" label="coding philosophy" title="Principles I try to keep in the room." copy="The README quotes were a good start. These are the working beliefs underneath them, translated into my own words.">
      <div className="philosophy-grid">{philosophy.map(([title, copy, icon, tone]) => <div className="readme-card philosophy-card" key={title}><div className={`philosophy-icon ${tone}`}><Icon icon={icon} width="20" height="20" /></div><h3>{title}</h3><p>{copy}</p><span className="philosophy-mark">0{philosophy.findIndex((item) => item[0] === title) + 1}</span></div>)}</div>
    </ReadmeSection>
  )
}

function FunReadme() {
  return (
    <ReadmeSection id="fun" number="06" label="dev fun zone" title="Because every serious build needs a little chaos." copy="A small terminal window for the bugs, the brave deploys, and the commits that definitely fixed it this time.">
      <div className="fun-grid"><div className="readme-card fun-terminal"><div className="terminal-bar"><span className="terminal-lights"><i /><i /><i /></span><span>late-night-deploy.log</span><Icon icon="ph:coffee-fill" width="16" height="16" /></div><pre>{`$ git push --force
> 😱 Wait... did I just...?
> 💀 RIP production server
> 🏃 deletes LinkedIn, updates resume

$ git log --oneline
> fix bug
> fix bug again
> fix bug for real this time
> please just work
> actually fixed it (maybe)`}</pre></div><div className="fun-side"><div className="quote-card"><span className="quote-mark">“</span><p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p><span className="quote-author">Martin Fowler</span></div><div className="joke-card"><div className="joke-top"><Icon icon="ph:smiley-wink-fill" width="20" height="20" /><span>daily status</span></div><strong>Powered by coffee<br />and suspicious optimism.</strong><span className="joke-line" /></div></div></div>
    </ReadmeSection>
  )
}

function ConnectReadme() {
  return (
    <ReadmeSection id="connect" number="07" label="support & connect" title="The best projects start with a hello." copy="Star a repo, open an issue, send a note, or bring a hard problem. I am always happier when the work has a real person on the other side.">
      <div className="connect-grid"><div className="connect-card connect-primary"><div><div className="eyebrow light-eyebrow">open channel</div><h3>Let&apos;s build something worth shipping.</h3><p>Available for collaboration, open-source experiments, and a few focused product builds.</p></div><a href="mailto:creatorsports81@gmail.com" className="connect-button">Email me <Icon icon="ph:arrow-up-right-bold" width="17" height="17" /></a></div><div className="connect-card support-card"><div className="readme-card-label">how to support the work</div><div className="support-links"><a href="https://github.com/brutal-45?tab=repositories" target="_blank" rel="noreferrer"><Icon icon="ph:star-fill" width="16" height="16" /> Star my repos <Icon icon="ph:arrow-up-right-bold" width="14" height="14" /></a><a href="https://github.com/brutal-45" target="_blank" rel="noreferrer"><Icon icon="ph:user-plus-bold" width="16" height="16" /> Follow me <Icon icon="ph:arrow-up-right-bold" width="14" height="14" /></a><a href="https://github.com/brutal-45/issues" target="_blank" rel="noreferrer"><Icon icon="ph:bug-beetle-bold" width="16" height="16" /> Report an issue <Icon icon="ph:arrow-up-right-bold" width="14" height="14" /></a></div></div></div><div className="connect-links"><a href="mailto:creatorsports81@gmail.com"><Icon icon="ph:envelope-simple-fill" width="17" height="17" /> creatorsports81@gmail.com</a><a href="https://github.com/brutal-45" target="_blank" rel="noreferrer"><Icon icon="ph:github-logo-bold" width="17" height="17" /> github.com/brutal-45</a><a href="https://linkedin.com" target="_blank" rel="noreferrer"><Icon icon="ph:linkedin-logo-bold" width="17" height="17" /> LinkedIn</a><a href="https://dev.to" target="_blank" rel="noreferrer"><Icon icon="ph:article-bold" width="17" height="17" /> Dev.to</a><a href="https://hashnode.com" target="_blank" rel="noreferrer"><Icon icon="ph:hash-bold" width="17" height="17" /> Hashnode</a></div>
    </ReadmeSection>
  )
}
