import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { M6S } from '../messages';

@Component({
  selector: 'der-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit, OnDestroy {
  m6s = M6S;
  contents: any[] = [];
  page = 0;
  last = false;

  @Input() label: string;
  @Input() selectFormControl: FormControl;
  @Input() selectService: any;
  @Output() selectOnChange = new EventEmitter();
  nomeControl = new Subject<string>();

  constructor() {}

  ngOnInit() {
    this.loadNext();
    this.filter();
  }

  ngOnDestroy(): void {
    this.nomeControl.unsubscribe();
  }

  onChange() {
    this.selectOnChange.emit();
  }

  loadNext() {
    if (!this.last) {
      console.log(this.nomeControl.next);
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

  filter() {
    this.page = 0;
    this.nomeControl.pipe(debounceTime(500)).subscribe(nome => {
      console.log(nome);
      this.selectService.findByNome(nome).subscribe((data: any) => {
        this.contents = data.content;
      });
    });
  }
}
