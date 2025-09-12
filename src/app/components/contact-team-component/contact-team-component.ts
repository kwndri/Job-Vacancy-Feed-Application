import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contact-team-component',
  imports: [],
  templateUrl: './contact-team-component.html',
  styleUrl: './contact-team-component.css',
})
export class ContactTeamComponent {
  firstGroup = [
    {
      fullName: 'Leslie Alexander',
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      title: 'Co-Founder / CEO',
    },
    {
      fullName: 'Dries Vincent',
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      title: 'Businnes Relations',
    },
    {
      fullName: 'Courtney Henry',
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      title: 'Designer',
    },
  ];
  secondGroup = [
    {
      fullName: 'Michael Foster',
      src: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      title: 'Co-Founder / CTO',
    },
    {
      fullName: 'Lindsay Walton',
      src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      title: 'Front-end Developer',
    },
    {
      fullName: 'Tom Cook',
      src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      title: 'Director of Product',
    },
  ];
}
