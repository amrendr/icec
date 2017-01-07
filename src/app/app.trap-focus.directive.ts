import { Directive, ElementRef, Renderer, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[trapFocus]'
})
export class TrapFocusDirective implements AfterViewInit{

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {  }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.el.nativeElement, 'focus');
  }
}
