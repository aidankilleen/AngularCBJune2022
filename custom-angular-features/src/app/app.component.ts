import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
    <h1>{{ title | titlecase }}</h1>


    <input type="range" min="10" max="200" [(ngModel)]="length">
    <p>{{ message | summary:length }}</p>


    <input appFormatText="lowercase">
    <input appFormatText="uppercase">

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 50;
  title = 'custom angular features';
  message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda blanditiis dolor repudiandae similique ex illo quidem optio perferendis tempore omnis sequi, fugit praesentium. Fuga dolor molestias eius sit magni!Lorem 
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem pariatur perspiciatis libero ratione sequi vitae modi autem, rem voluptatibus est esse at animi porro assumenda deserunt? Distinctio, non assumenda.
`
}
