import {Component,input,signal,computed,viewChild,ElementRef,ChangeDetectionStrategy} from '@angular/core';
import {Graphic} from '../../core/constants/portfolio';
import {Icon} from './icon';
/** Modal viewer for graphic design pieces; steps through `items` with the arrow buttons or keys. */
@Component({changeDetection:ChangeDetectionStrategy.OnPush,selector:'app-art-lightbox',imports:[Icon],template:`<dialog #modal class="lightbox" aria-labelledby="art-title" (keydown)="keys($event)" (click)="backdrop($event)" (close)="onClose()">@if(current();as a){<div class="lightbox-header"><div><span class="eyebrow coral">{{a.category}}</span><h2 id="art-title">{{a.title}}</h2></div><button class="icon-button" aria-label="Close artwork" (click)="close()"><app-icon name="close"/></button></div>@if(a.video){<video class="lightbox-video" [src]="'/'+a.video" [poster]="'/'+a.image" controls autoplay muted loop playsinline [attr.aria-label]="a.title"></video>}@else{<img [src]="'/'+a.image" [alt]="a.title"/>}<div class="lightbox-controls"><button class="button secondary" (click)="move(-1)" aria-label="Previous artwork">← Previous</button><span>{{index()+1}} / {{items().length}}</span><button class="button secondary" (click)="move(1)" aria-label="Next artwork">Next →</button></div>}</dialog>`})
export class ArtLightbox {items=input.required<Graphic[]>();index=signal(0);current=computed(()=>this.items()[this.index()]);
modal=viewChild.required<ElementRef<HTMLDialogElement>>('modal');
open(slug:string){const i=this.items().findIndex(g=>g.slug===slug);if(i<0)return;this.index.set(i);this.modal().nativeElement.showModal();}
close(){this.modal().nativeElement.close();}
/** Stop any playing video when the dialog closes. */
onClose(){this.modal().nativeElement.querySelector('video')?.pause();}
move(n:number){const len=this.items().length;this.index.update(i=>(i+n+len)%len);}
keys(e:KeyboardEvent){if(e.key==='ArrowRight'){e.preventDefault();this.move(1);}if(e.key==='ArrowLeft'){e.preventDefault();this.move(-1);}}
backdrop(e:MouseEvent){const d=this.modal().nativeElement;if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)this.close();}}}
