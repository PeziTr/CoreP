import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation, waveAnimation} from './animations/slideInOutAnimation'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[ slideInOutAnimation, waveAnimation ]
})
export class HeaderComponent implements OnInit {

  menuIconChange = false;
  menuActive = this.menuIconChange? 'menuActive':'menuInactive'
  constructor() { }

  ngOnInit() {
  }


  stateChange(){
    this.menuActive =this.menuIconChange? 'menuActive':'menuInactive';
  }
    

}
