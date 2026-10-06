import {inject,Injectable} from '@angular/core';
import {TitleStrategy,RouterStateSnapshot} from '@angular/router';
import {Title} from '@angular/platform-browser';
@Injectable() export class PortfolioTitleStrategy extends TitleStrategy {
  private title=inject(Title);
  override updateTitle(snapshot:RouterStateSnapshot){this.title.setTitle((this.buildTitle(snapshot)||'Web Designer & Developer')+' — CJ Abarca');}
}
