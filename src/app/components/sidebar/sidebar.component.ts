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
      description:
        'lorem impsum dolor sit amet consectetur adipiscing elit sed do eiusmod',
      tag: 'test2 tag',
    },
    {
      name: 'test3',
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa officia deserunt mollit anim id est laborum',
      tag: 'test3 tag',
    },
    {
      name: 'test4',
      description: 'test4 description',
      tag: 'test4 tag',
    },
    {
      name: 'test5',
      description: 'test5 description',
      tag: 'test5 tag',
    },
    {
      name: 'test6',
      description: 'test6 description',
      tag: 'test6 tag',
    },
    {
      name: 'test7',
      description: 'test7 description',
      tag: 'test7 tag',
    },
    {
      name: 'test8',
      description: 'test8 description',
      tag: 'test8 tag',
    },
    {
      name: 'test9',
      description: 'test9 description',
      tag: 'test9 tag',
    },
    {
      name: 'test10',
      description: 'test10 description',
      tag: 'test10 tag',
    },
    {
      name: 'test11',
      description: 'test11 description',
      tag: 'test11 tag',
    },
  ];
}
