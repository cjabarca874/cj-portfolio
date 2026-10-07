import {Component,signal,computed,inject,viewChild,ElementRef,ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectCard} from '../../shared/components/project-card';
import {ArtLightbox} from '../../shared/components/art-lightbox';
import {projects,graphics,graphicAsProject} from '../../core/constants/portfolio';
import {Project,ProjectCategory} from '../../core/models/project';
@Component({changeDetection:ChangeDetectionStrategy.OnPush,imports:[ProjectCard,ArtLightbox],template:`<div class="page-heading"><div><div class="eyebrow coral">SELECTED WORK</div><h1>{{heading}}</h1><p>{{description}}</p></div></div><div class="filters-anchor" #anchor></div><div class="filters filters--sticky" aria-label="Filter projects">@for(c of categories;track c){<button [attr.aria-pressed]="filter()===c" (click)="choose(c)">{{c}} <span class="filter-count">{{count(c)}}</span></button>}</div><p class="note" style="margin:0 0 20px" aria-live="polite">{{filtered().length}} projects · Concepts and client work are labeled individually.</p><h2 class="sr-only">Project collection</h2><div class="project-grid">@for(p of filtered();track p.id){<app-project-card [project]="p" [lightbox]="p.category==='Graphic Design'" (open)="lightbox().open(p.slug)"/>}</div><app-art-lightbox [items]="visibleGraphics()"/>`})
export class Projects {route=inject(ActivatedRoute);heading=this.route.snapshot.data['heading']||'Ideas, brought to life.';description=this.route.snapshot.data['description']||'Websites, interfaces, and visual identities — each with its own point of view.';filter=signal<string>(this.route.snapshot.data['filter']||'All');
categories:('All'|ProjectCategory)[]=['All','Web & UI/UX','WordPress','Graphic Design','Shopify','Squarespace','Wix','Leadpages'];
all:Project[]=[...projects,...graphics.map(graphicAsProject)];
lightbox=viewChild.required(ArtLightbox);anchor=viewChild.required<ElementRef<HTMLElement>>('anchor');
/** Switch filter; if the bar is stuck mid-page, jump back to the top of the results. */
choose(c:string){this.filter.set(c);const el=this.anchor().nativeElement;if(el.getBoundingClientRect().top<0)el.scrollIntoView({behavior:'smooth'});}
matches(p:Project,f:string){return f==='All'||p.category===f||(f==='WordPress'&&p.technologies.includes('WordPress'));}
count(f:string){return this.all.filter(p=>this.matches(p,f)).length;}
filtered=computed(()=>this.all.filter(p=>this.matches(p,this.filter())));
visibleGraphics=computed(()=>{const slugs=new Set(this.filtered().map(p=>p.slug));return graphics.filter(g=>slugs.has(g.slug));});}
