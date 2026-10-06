export type ProjectCategory='Web Design'|'WordPress'|'UI/UX'|'Graphic Design';
export interface Project {id:string;title:string;slug:string;category:ProjectCategory;description:string;image:string;fullImage?:string;technologies:string[];liveUrl?:string;featured?:boolean;concept?:boolean;overview?:string[];focus?:string;}
