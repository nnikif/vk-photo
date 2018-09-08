import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { TokenService } from "../token.service"
import { VkontakteService } from "../vkontakte.service"
import { Pictures} from "../pictures"
import { Router} from "@angular/router"
@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css']
})
export class MyhomeComponent implements OnInit {
  pictures: Pictures[];
  constructor(private route: ActivatedRoute,
              private tokenService: TokenService,
              private vkontakteService: VkontakteService,
              private router: Router) { }

  ngOnInit() {
    this.route.fragment.subscribe(
      (fragments) => {
        // console.log(fragments);
      // console.log(this.getParameterByName('access_token', fragments));
        this.tokenService.setToken(this.getParameterByName('access_token', fragments));
        this.router.navigateByUrl('')

        this.vkontakteService.getPhotos().subscribe(
          data => { if (data){
            console.log(data.response.items)
            this.pictures = []
            for (let i=0; i< data.response.items.length;i++){
              // console.log(data.response.items[i]);
              this.pictures.push({id: data.response.items[i].id, album_id: data.response.items[i].album_id, size1: data.response.items[i].sizes[0].url,
              size2: data.response.items[i].sizes[data.response.items[i].sizes.length - 1].url,
              text: data.response.items[i].text})

            }
            console.log(this.pictures)
          }}
        )
      }

    );
  }

  public getParameterByName(name: string, url: string): string {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp( name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    // console.log(results);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  public setPhoto(picture: Pictures){
    this.vkontakteService.setPhoto(picture)
  }
}
