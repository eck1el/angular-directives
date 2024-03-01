import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBrokenImage]'
})
export class ImagenRotaDirective{

  constructor(
  private elementRef:ElementRef
  )
  {

  }

  ngOnInit() {
    const img = this.elementRef.nativeElement;
  }

  //if the image is broken I will get an error
  @HostListener('error')
  getDefaultImage(){
    //catching the broken image
    const element = this.elementRef.nativeElement;

    //if it detects any broken images they will be replaced
    element.src = 'https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg';
  }

}
