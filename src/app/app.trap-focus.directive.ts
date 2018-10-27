import { AfterViewInit, Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appTrapFocus]'
})
export class TrapFocusDirective implements AfterViewInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) { }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.el.nativeElement, 'focus');
  }
}
