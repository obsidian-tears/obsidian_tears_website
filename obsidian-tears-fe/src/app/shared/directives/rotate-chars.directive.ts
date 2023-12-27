import { Directive, ElementRef, HostListener, Renderer2, NgZone } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appRotateChars]'
})
export class RotateCharsDirective {
  private originalText: string = '';
  private timeoutId: any;

  constructor(private el: ElementRef, private renderer: Renderer2, private zone: NgZone) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.originalText = this.el.nativeElement.innerText;
    this.rotateChars(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    clearTimeout(this.timeoutId);
    this.restoreText();
  }

  private rotateChars(startFromEnd: boolean = false) {
    const chars = this.originalText.split('');
    const rotatedChars = chars.map((char, index) => {
      const rotate = startFromEnd ? index % 2 === 0 : index % 2 !== 0;
      return char === ' ' ? ' ' : this.rotateChar(char, rotate);
    }).join('');

    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', rotatedChars);

    // After 500 milliseconds (0.5 second), restore the original text
    this.zone.runOutsideAngular(() => {
      this.timeoutId = setTimeout(() => {
        this.zone.run(() => {
          this.restoreText(chars);
        });
      }, 1000);
    });
  }

  private rotateChar(char: string, rotate: boolean): string {
    const rotationAngle = rotate ? 180 : 0;
    return `<span style="display: inline-block; transform: rotate(${rotationAngle}deg);">${char}</span>`;
  }

  private restoreText(chars?: string[]) {
    const originalText = chars ? chars.join('') : this.originalText;
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', originalText);
  }
}
