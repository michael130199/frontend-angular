/**
 * Creates an element that will render member initials if
 * no image is present OR/ image fails to load
 *
 * initials, src and size are optional
 * you can pick between [small, default, large] sizing
 *
 /* @since 0.2.0*/
 /* @example *//*
 *
 * <app-avatar
 *    name="FIRSTNAME LASTNAME"
 *    initials="FL"
 *    isOnline="false"
 *    src="IMAGE_SRC"
 *    size="small">
 * </app-avatar>
 * */
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnChanges, OnInit {
  @Input()
  isOnline: boolean;
  @Input()
  initials: string;
  @Input()
  src: string;
  @Input()
  name: string;
  @Input()
  size: string;

  sizing = {
    default: 'avatar--default',
    small: 'avatar--small',
    large: 'avatar--large',
    xlarge: 'avatar--xlarge'
  };
  className: string;
  imageLoaded = false;

  constructor() {}

  ngOnInit() {
    this.setSizing();
    this.getImage();
  }
  ngOnChanges() {
    this.createInitials();
  }

  private getImage(): void {
    if (typeof this.src !== 'undefined') {
      const image = new Image();
      image.src = this.src;
      image.onload = () => {
        this.className = [this.className, 'avatar--image'].join(' ');
        this.imageLoaded = true;
      };
    }
  }
  private setSizing(): void {
    if (typeof this.size !== 'undefined') {
      this.className = this.sizing[this.size];
    } else {
      this.className = this.sizing.default;
    }
  }
  private createInitials(): void {
    if (typeof this.name !== 'undefined') {
      const _name = this.name.split(' ');
      if (_name[0] !== 'null') {
        this.initials =
          _name[0].slice(0, 1).toUpperCase() +
          _name[_name.length - 1].slice(0, 1).toUpperCase();
      }
    }
  }
}
