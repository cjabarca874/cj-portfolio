import {RenderMode,ServerRoute} from '@angular/ssr';import {projects,graphics} from './core/constants/portfolio';
export const serverRoutes:ServerRoute[]=[{path:'projects/:slug',renderMode:RenderMode.Prerender,async getPrerenderParams(){return [...projects.map(p=>({slug:p.slug})),...graphics.map(g=>({slug:g.slug}))];}},{path:'**',renderMode:RenderMode.Prerender}];
