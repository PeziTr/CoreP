import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation, waveAnimation} from './animations/slideInOutAnimation'
import { barMoveAnimation, boxMoveAnimation } from './animations/barMove'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[ slideInOutAnimation, waveAnimation, barMoveAnimation, boxMoveAnimation]
})
export class HeaderComponent implements OnInit {

  menuIconChange = false;
  menuActive = this.menuIconChange? 'menuActive':'menuInactive'
  constructor() { }

  ngOnInit() {
    Http
    HttpClient
    
  }


  stateChange(){
    this.menuActive =this.menuIconChange? 'menuActive':'menuInactive';
    console.log(this.menuActive);
  }
    

}
