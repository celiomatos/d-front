import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
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
  searchInput = new FormControl();
  nomeControl = new Subject<string>();
  observable$ = new Observable<any>();

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
      if (this.searchInput.value) {
        this.observable$ = this.selectService.findByNome(this.searchInput.value, this.page);
      } else {
        this.observable$ = this.selectService.findAll(this.page);
      }
      this.observable$.subscribe(
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
    this.nomeControl.pipe(debounceTime(500)).subscribe(nome => {
      this.page = 0;
      if (nome) {
        this.observable$ = this.selectService.findByNome(nome, this.page);
      } else {
        this.observable$ = this.selectService.findAll(this.page);
      }
      this.observable$.subscribe((data: any) => {
        this.contents = data.content;
        this.page++;
        this.last = data.last;
      });
    });
  }
}
