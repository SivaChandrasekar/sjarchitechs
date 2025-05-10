import { Component, ElementRef, ViewChild } from '@angular/core';
import { Offcanvas } from 'bootstrap'
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('offcanvasNavbar', { static: false }) offcanvasElement!: ElementRef;
  
  closeNavbar() {
 const element = this.offcanvasElement?.nativeElement;
    if (element) {
      const bsOffcanvas = Offcanvas.getInstance(element) || new Offcanvas(element);
      bsOffcanvas.hide();
}

  
}

}
