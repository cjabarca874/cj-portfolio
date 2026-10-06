import {Injectable,InjectionToken,inject} from '@angular/core';
export interface ContactMessage {name:string;email:string;subject:string;message:string;website?:string;}
export const CONTACT_EMAIL='cjabarca874@gmail.com';
// FormSubmit's AJAX endpoint forwards each submission to CONTACT_EMAIL. The very first submission
// sends an activation email to that inbox; messages are delivered once it has been confirmed.
export const CONTACT_ENDPOINT=new InjectionToken<string>('CONTACT_ENDPOINT',{providedIn:'root',factory:()=>'https://formsubmit.co/ajax/'+CONTACT_EMAIL});
@Injectable({providedIn:'root'})export class ContactService {private endpoint=inject(CONTACT_ENDPOINT);
mailto(m:ContactMessage){return 'mailto:'+CONTACT_EMAIL+'?subject='+encodeURIComponent(m.subject||'Portfolio enquiry')+'&body='+encodeURIComponent((m.message||'')+'\n\n— '+(m.name||'')+(m.email?' ('+m.email+')':''));}
async send(m:ContactMessage):Promise<void>{
if(m.website)return; // honeypot filled in: silently drop bot submissions
let response:Response;
try{response=await fetch(this.endpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name:m.name,email:m.email,subject:m.subject,message:m.message,_subject:'Portfolio: '+m.subject,_replyto:m.email,_template:'table',_captcha:'false'})});}
catch{throw new Error('We couldn’t reach the mail service. Check your connection, or send the message from your email app instead.');}
const result=await response.json().catch(()=>null) as {success?:string|boolean;message?:string}|null;
if(!response.ok||String(result?.success)==='false')throw new Error(result?.message&&/activat/i.test(result.message)?'The contact form is waiting for activation. Please send your message from your email app for now.':'Your message could not be sent. Please try again, or send it from your email app instead.');}}
