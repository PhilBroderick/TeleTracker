import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';
import { SearchService } from './search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  entities: string[] = ['People', 'Movies', 'TV'];
  searchResults: Observable<string[]>;
  constructor(private searchService: SearchService, private fb: FormBuilder) {}

  ngOnInit() {
    this.createSearchForm();
  }

  createSearchForm = () => {
    this.searchForm = this.fb.group({
      searchTerm: ['', Validators.required],
      searchEntities: new FormArray([])
    });
  };

  search = () =>
    (this.searchResults = this.searchService.search(
      this.searchForm.value.searchTerm,
      this.searchForm.value.entities
    ));

  onCheckChange = event => {
    const formArray: FormArray = this.searchForm.get(
      'searchEntities'
    ) as FormArray;

    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;

      formArray.controls.forEach((control: FormControl) => {
        if (control.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  };
}
