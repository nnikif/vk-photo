import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VkontakteService } from "../vkontakte.service"
import {Subject} from "rxjs/index"
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/internal/operators"
import { Pictures} from "../pictures"

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
  @Input() picture: Pictures;
  private comment$: Subject<string>

  constructor(private route: ActivatedRoute, private vkontakteService: VkontakteService) {
    this.comment$ = new Subject<string>();
    this.comment$.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(value => {
      this.vkontakteService.editComment(this.picture.id, value).subscribe(
        data => console.log(data)
      )
      console.log(value)})
  }

  ngOnInit() {
    this.getPhoto();
  }
  getPhoto(): void{
    const id = this.route.snapshot.paramMap.get('id');
    const album_id = this.route.snapshot.paramMap.get('album_id')
    this.vkontakteService.gettPhoto().subscribe(
      data => {console.log(data);
      this.picture = data
      }
    )

  }
  comment(value: string){

    console.log(value);
  }

}
