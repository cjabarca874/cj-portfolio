import {RenderMode,ServerRoute} from '@angular/ssr';import {projects} from './core/constants/portfolio';
export const serverRoutes:ServerRoute[]=[{path:'projects/:slug',renderMode:RenderMode.Prerender,async getPrerenderParams(){return [...projects.map(p=>({slug:p.slug})),...Array.from({length:8},(_,i)=>({slug:'brand-'+(i+1)}))];}},{path:'**',renderMode:RenderMode.Prerender}];
