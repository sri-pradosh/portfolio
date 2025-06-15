import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
   standalone: false
})
export class ContactComponent {
    formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! I\'ll get back to you soon.');

    // Reset form
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
