import {Component,input,output,ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage,NgTemplateOutlet} from '@angular/common';
import {Project} from '../../core/models/project';
import {Icon} from './icon';
@Component({changeDetection:ChangeDetectionStrategy.OnPush,selector:'app-project-card',imports:[RouterLink,NgOptimizedImage,NgTemplateOutlet,Icon],template:`<article class="project-card">
<ng-template #cover><img class="cover-backdrop" [src]="'/'+project().image" alt="" aria-hidden="true" loading="lazy"/><img class="cover-image" [ngSrc]="'/'+project().image" fill sizes="(max-width: 767px) 100vw, 40vw" [alt]="project().title+' design'"/><span class="image-action"><app-icon [name]="lightbox()?(project().technologies.includes('Motion Graphics')?'play':'spark'):'external'"/></span></ng-template>
@if(lightbox()){<button type="button" class="project-image" (click)="open.emit()" [attr.aria-label]="'View '+project().title"><ng-container *ngTemplateOutlet="cover"/></button>}@else{<a class="project-image" [routerLink]="['/projects',project().slug]"><ng-container *ngTemplateOutlet="cover"/></a>}
<div class="project-copy"><div class="eyebrow">{{project().category}} <span> / {{project().concept?'CONCEPT':'SELECTED WORK'}}</span></div>
<h3>@if(lightbox()){<button type="button" class="link-button" (click)="open.emit()">{{project().title}}</button>}@else{<a [routerLink]="['/projects',project().slug]">{{project().title}}</a>}</h3>
<p>{{project().description}}</p><div class="tags">@for(tool of project().technologies;track tool){<span>{{tool}}</span>}</div>
<div class="project-links">@if(lightbox()){<button type="button" class="link-button" (click)="open.emit()">View design <app-icon name="arrow"/></button>}@else{<a [routerLink]="['/projects',project().slug]">View project <app-icon name="arrow"/></a>}@if(project().liveUrl){<a [href]="project().liveUrl" target="_blank" rel="noopener noreferrer">Live site <app-icon name="external"/></a>}</div></div></article>`})
export class ProjectCard {project=input.required<Project>();/** Open the piece in a modal instead of navigating to its detail page. */lightbox=input(false);open=output<void>();}
