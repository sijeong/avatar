import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'anms-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor() {}

  ngOnInit() {}
}
