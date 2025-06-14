import {  Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.scss'],
  standalone: false,
})
export class BookShelfComponent  {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  canScrollLeft = false;
  canScrollRight = true;
  bookImages=[
    { title: 'Wings of Fire', src: 'assets/books/img1.jpg' },
    { title: 'Journey to the Centre of the Earth', src: 'assets/books/img6.jpg' },
    { title: 'Cuba Revolution (Tamil)', src: 'assets/books/img4.jpg' },
    { title: 'The Psychology of Money', src: 'assets/books/img7.jpg' },
    { title: 'The Business School', src: 'assets/books/img8.jpg' },
    { title: 'Target 3 Billion', src: 'assets/books/img12.jpg' },
    { title: 'Attidude Is EveryThing', src: 'assets/books/img14.jpg' },
    { title: 'Rework', src: 'assets/books/img13.jpg' },
    { title: 'Zero to One', src: 'assets/books/img10.jpg' },
    { title: 'How to Talk to AnyOne', src: 'assets/books/img11.jpg' },
    { title: 'Karl Marx (Tamil)', src: 'assets/books/img3.jpg' },
    { title: 'Mein Kampf', src: 'assets/books/img2.jpg' },
     { title: 'Harry Potter', src: 'assets/books/img5.jpg' },
  ];
  
  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.checkScrollButtons();
    this.cdRef.detectChanges(); // 🔥 trigger after changes

    this.scrollContainer.nativeElement.addEventListener('scroll', () => {
      this.checkScrollButtons();
    });
  }

  checkScrollButtons() {
    const el = this.scrollContainer.nativeElement;
    this.canScrollLeft = el.scrollLeft > 0;
    this.canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth;
  }

  scrollLeft() {
    // this.scrollContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
    const card = this.scrollContainer.nativeElement.querySelector('.book-card');
    const scrollAmount = card ? card.offsetWidth + 20 : 160;
    this.scrollContainer.nativeElement.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  scrollRight() {
    // this.scrollContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
    const card = this.scrollContainer.nativeElement.querySelector('.book-card');
    const scrollAmount = card ? card.offsetWidth + 20 : 160;
    this.scrollContainer.nativeElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
