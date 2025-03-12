import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  testArray: string[] = ['test1', 'test2', 'test3'];
  testObject = [
    {
      name: 'test1',
      description: 'test1 description',
      tag: 'test1 tag',
    },
    {
      name: 'test2',
      description: 'test2 description',
      tag: 'test2 tag',
    },
    {
      name: 'test3',
      description: 'test3 description',
      tag: 'test3 tag',
    },
  ];
}
