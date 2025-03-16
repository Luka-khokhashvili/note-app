import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { DataService } from '../../services/data.service';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-note-box',
  imports: [QuillModule, FormsModule],
  templateUrl: './note-box.component.html',
  styleUrl: './note-box.component.css',
})
export class NoteBoxComponent {
  testData: Note[] = [];
  noteContent: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllData().subscribe((data) => {
      this.testData = data;
      this.noteContent = this.testData[0].text;
    });
  }

  quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // Basic formatting
      [{ header: [1, 2, 3, false] }], // Headings
      [{ size: ['small', false, 'large', 'huge'] }], // Font sizes
      [{ color: [] }, { background: [] }], // Text & background color
      [{ list: 'ordered' }, { list: 'bullet' }], // Lists
      [{ indent: '-1' }, { indent: '+1' }], // Indent
      [{ align: [] }], // Text alignment
      ['link', 'image', 'video'], // Links, images, and videos
      ['blockquote', 'code-block'], // Quotes & code blocks
      ['clean'], // Clear formatting
    ],
  };
}
