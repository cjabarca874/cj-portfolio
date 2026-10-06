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
          <span>UI/UX DESIGN</span><span>WEB DESIGN</span><span>WORDPRESS</span>
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
        <a routerLink="/projects/huts-haven" class="featured-image"
          ><img
            class="cover-backdrop"
            src="/images/huts-haven.webp"
            alt=""
            aria-hidden="true" /><img
            class="cover-image"
            ngSrc="/images/huts-haven.webp"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 55vw"
            alt="Huts Haven nature-inspired website concept"
        /></a>
        <div class="featured-caption">
          <div>
            <div class="eyebrow coral">WEB DESIGN · CONCEPT</div>
            <h3>Huts Haven</h3>
            <p>A digital escape, inspired by nature.</p>
          </div>
          <a class="round-link" routerLink="/projects/huts-haven" aria-label="View Huts Haven"
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
        <div class="tool-grid">
          @for (t of tools; track t.name) {
            <div>
              <span class="tool-symbol" [style.--tool]="t.color">{{ t.mark }}</span
              ><span>{{ t.name }}</span>
            </div>
          }
        </div>
      </article>
      <article class="card experience-widget">
        <div class="card-label">
          <span><app-icon name="briefcase" /> WHERE I’VE BEEN</span
          ><a routerLink="/experience" aria-label="View experience"><app-icon name="external" /></a>
        </div>
        <div class="career">
          <span class="company-mark">n.</span>
          <div>
            <span class="eyebrow coral">ONGOING COLLABORATION</span>
            <h3>Notable Design Co.</h3>
            <p>UI/UX & WordPress Developer</p>
          </div>
        </div>
        <p>Designing, building, and refining digital experiences across brands and platforms.</p>
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
  selected = projects.filter((p) => ['notable', 'comptech', 'gps-drone'].includes(p.id));
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
  tools = [
    { name: 'Figma', mark: 'Fi', color: '#ff8a72' },
    { name: 'WordPress', mark: 'W', color: '#88bce0' },
    { name: 'Bricks', mark: 'B', color: '#f24836' },
    { name: 'Elementor', mark: 'E', color: '#ec78a5' },
    { name: 'CSS', mark: '#', color: '#82a7ff' },
    { name: 'JavaScript', mark: 'JS', color: '#eed05c' },
  ];
}
