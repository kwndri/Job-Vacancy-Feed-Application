import { Component } from '@angular/core';
import { FooterIconsComponent } from '../../icons/footer-icons-component/footer-icons-component';

@Component({
  standalone: true,
  selector: 'app-footer-component',
  imports: [FooterIconsComponent],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
})
export class FooterComponent {
  links = [
    {
      title: 'Solutions',
      contentLinks: [
        { title: 'Marketing', href: '#' },
        { title: 'Analytics', href: '#' },
        { title: 'Automation', href: '#' },
        { title: 'Commerce', href: '#' },
        { title: 'Insights', href: '#' },
      ],
    },
    {
      title: 'Support',
      contentLinks: [
        { title: 'Submit ticket', href: '#' },
        { title: 'Documentation', href: '#' },
        { title: 'Guides', href: '#' },
      ],
    },
    {
      title: 'Company',
      contentLinks: [
        { title: 'About', href: '#' },
        { title: 'Blog', href: '#' },
        { title: 'Jobs', href: '#' },
        { title: 'Press', href: '#' },
      ],
    },
    {
      title: 'Legal',
      contentLinks: [
        { title: 'Terms of service', href: '#' },
        { title: 'Privacy policy', href: '#' },
        { title: 'License', href: '#' },
      ],
    },
  ];
}
