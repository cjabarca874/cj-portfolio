import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Icon } from '../../shared/components/icon';
import { ProjectCard } from '../../shared/components/project-card';
import { projects } from '../../core/constants/portfolio';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgOptimizedImage, Icon, ProjectCard],
  template: ` <div class="page-heading">
      <div>
        <div class="eyebrow coral">THE CREATIVE WORKSPACE</div>
        <h1>Welcome to my corner<span class="coral">.</span></h1>
        <p>A collection of ideas, thoughtful design, and things I’ve built.</p>
      </div>
      <span class="status-pill"><i></i> Open to opportunities</span>
    </div>
    <section class="overview-grid">
      <article class="card intro-card">
        <div class="eyebrow">DESIGN WITH PURPOSE. BUILD WITH INTENTION.</div>
        <h2>
          Hello, I’m CJ <span class="wave"></span><br /><span>Web Designer<br />& Developer.</span>
        </h2>
        <p>
          I bring graphic design, UI/UX, and WordPress development together to create clear,
          responsive websites.
        </p>
        <div class="actions">
          <a class="button primary" routerLink="/projects"
            >View Projects <app-icon name="arrow" /></a
          ><a class="button secondary" routerLink="/contact"
            >Contact Me <app-icon name="external"
          /></a>
        </div>
        <div class="intro-bottom">
          <span>UI/UX DESIGN</span><span>WEB DESIGN</span><span>WORDPRESS</span><span>GRAPHIC DESIGN</span>
        </div>
        <span class="intro-star" aria-hidden="true">✳</span>
      </article>
      <article class="card about-widget">
        <div class="card-label">
          <span><app-icon name="user" /> A LITTLE ABOUT ME</span
          ><a routerLink="/about" aria-label="More about CJ"><app-icon name="external" /></a>
        </div>
        <div class="portrait">
          <img
            ngSrc="/images/About.webp"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 30vw"
            alt="CJ Abarca working on web design and development"
          />
        </div>
        <div class="about-widget-copy">
          <h3>Creative mind.<br />Builder at heart.</h3>
          <p>Turning visual ideas into websites that look polished and feel easy to use.</p>
        </div>
      </article>
      <article class="card featured-widget">
        <div class="card-label">
          <span><app-icon name="spark" /> IN THE SPOTLIGHT</span
          ><span class="tiny-tag">FEATURED WORK</span>
        </div>
        <a routerLink="/projects/notable" class="featured-image"
          ><img
            class="cover-backdrop"
            src="/images/notable.webp"
            alt=""
            aria-hidden="true" /><img
            class="cover-image"
            ngSrc="/images/notable.webp"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 55vw"
            alt="Notable Design Co. website"
        /></a>
        <div class="featured-caption">
          <div>
            <div class="eyebrow coral">UI/UX · WORDPRESS</div>
            <h3>Notable Design Co.</h3>
            <p>Websites that support the reputation you’ve built.</p>
          </div>
          <a class="round-link" routerLink="/projects/notable" aria-label="View Notable Design Co."
            ><app-icon name="external"
          /></a>
        </div>
      </article>
      <article class="card services-widget">
        <div class="card-label">
          <span><app-icon name="pen" /> WHAT I DO</span>
        </div>
        @for (s of services; track s.title) {
          <a [routerLink]="s.route" class="service-row"
            ><span class="service-icon"><app-icon [name]="s.icon" /></span>
            <div>
              <h3>{{ s.title }}</h3>
              <p>{{ s.text }}</p>
            </div>
            <app-icon name="external"
          /></a>
        }
      </article>
      <article class="card stack-widget">
        <div class="card-label">
          <span><app-icon name="tools" /> MY EVERYDAY TOOLKIT</span
          ><a routerLink="/skills" aria-label="View all skills"><app-icon name="external" /></a>
        </div>
        @for (g of toolGroups; track g.label) {
          <div class="tool-group">
            <h3 class="tool-group-label"><span>{{ g.step }}</span> {{ g.label }}</h3>
            <div class="tool-grid">
              @for (t of g.tools; track t.name) {
                <div>
                  <span class="tool-symbol" [class.tool-symbol--dark]="t.dark"
                    ><img [src]="'/icons/tools/' + (t.icon.includes('.') ? t.icon : t.icon + '.svg')" alt="" width="26" height="26" loading="lazy" /></span
                  ><span>{{ t.name }}</span>
                </div>
              }
            </div>
          </div>
        }
      </article>
      <article class="card experience-widget">
        <div class="card-label">
          <span><app-icon name="briefcase" /> WHERE I’VE BEEN</span
          ><a routerLink="/experience" aria-label="View experience"><app-icon name="external" /></a>
        </div>
        <ol class="career-list">
          @for (c of careers; track c.company) {
            <li class="career">
              <span class="company-mark" [class.company-mark--dark]="c.dark" [class.company-mark--fill]="c.fill"
                ><img [src]="c.logo" [alt]="c.company + ' logo'" loading="lazy"
              /></span>
              <div>
                <span class="eyebrow coral">{{ c.period }}</span>
                <h3>{{ c.company }}</h3>
                <p>{{ c.role }}</p>
              </div>
            </li>
          }
        </ol>
      </article>
    </section>
    <div class="section-heading">
      <div>
        <div class="eyebrow">IDEAS INTO EXPERIENCES</div>
        <h2>More from my workspace</h2>
      </div>
      <a class="text-link" routerLink="/projects">All projects <app-icon name="arrow" /></a>
    </div>
    <div class="project-grid selected-grid">
      @for (p of selected; track p.id) {
        <app-project-card [project]="p" />
      }
    </div>`,
})
export class Overview {
  selected = projects.filter((p) => ['huts-haven', 'comptech', 'gps-drone'].includes(p.id));
  services = [
    { title: 'UI/UX Design', text: 'Clarity in every interaction', icon: 'pen', route: '/ui-ux' },
    {
      title: 'Web Design',
      text: 'Purposeful, responsive experiences',
      icon: 'globe',
      route: '/projects',
    },
    {
      title: 'WordPress Development',
      text: 'From layout to launch',
      icon: 'tools',
      route: '/wordpress',
    },
    {
      title: 'Graphic Design',
      text: 'Visuals with a point of view',
      icon: 'image',
      route: '/graphic-design',
    },
  ];
  careers = [
    {
      company: 'Notable Design Co.',
      role: 'UI/UX Designer & WordPress Developer',
      period: 'Mar 2025 – Sep 2026',
      logo: '/images/logos/notable.png',
    },
    {
      company: 'Freelance',
      role: 'Freelance UI/UX Designer',
      period: 'Feb 2024 – Jan 2025',
      logo: '/images/logos/freelancer.png',
    },
    { company: 'Awesome CX', role: 'IT Support', period: '2024', logo: '/images/logos/awesome-cx.png', fill: true },
    {
      company: 'Lines + Pixels',
      role: 'UI Designer',
      period: 'Apr 2023 – Jan 2024',
      logo: '/images/logos/lines-pixels.png',
      dark: true,
    },
  ];
  toolGroups: { step: string; label: string; tools: { name: string; icon: string; dark?: boolean }[] }[] = [
    {
      step: '01',
      label: 'Design',
      tools: [
        { name: 'Figma', icon: 'figma' },
        { name: 'Photoshop', icon: 'photoshop' },
        { name: 'Illustrator', icon: 'illustrator' },
        { name: 'After Effects', icon: 'after-effects' },
      ],
    },
    {
      step: '02',
      label: 'Build',
      tools: [
        { name: 'HTML', icon: 'html' },
        { name: 'CSS', icon: 'css' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'jQuery', icon: 'jquery' },
        { name: 'PHP', icon: 'php' },
        { name: 'Bootstrap', icon: 'bootstrap' },
        { name: 'Tailwind', icon: 'tailwind' },
        { name: 'Angular', icon: 'angular' },
      ],
    },
    {
      step: '03',
      label: 'CMS & Builders',
      tools: [
        { name: 'WordPress', icon: 'wordpress' },
        { name: 'Elementor', icon: 'elementor' },
        { name: 'Bricks', icon: 'bricks', dark: true },
        { name: 'Wix', icon: 'wix' },
        { name: 'Squarespace', icon: 'squarespace' },
        { name: 'Leadpages', icon: 'leadpages.png', dark: true },
      ],
    },
    {
      step: '04',
      label: 'Hosting',
      tools: [
        { name: 'Cloudflare', icon: 'cloudflare' },
        { name: 'Cloudways', icon: 'cloudways' },
        { name: 'Pressable', icon: 'pressable' },
      ],
    },
  ];
}
