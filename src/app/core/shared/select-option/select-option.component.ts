import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { M6S } from '../messages';

@Component({
  selector: 'der-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit {
  m6s = M6S;
  contents: any[] = [];
  page = 0;
  last = false;

  @Input() label: string;
  @Input() selectFormControl: FormControl;
  @Input() selectService: any;
  @Output() selectOnChange = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.paginated();
  }

  onChange() {
    this.selectOnChange.emit();
  }

  loadNext() {
    this.paginated();
  }

  paginated() {
    if (!this.last) {
      this.selectService.findAll(this.page, 5).subscribe(
        (data: any) => {
          this.contents = this.contents.concat(data.content);
          this.page++;
          this.last = data.last;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
}
