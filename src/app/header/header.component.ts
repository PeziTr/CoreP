import { Component, OnInit, trigger,state,transition,style,animate } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[

    trigger('focusPanel', [
            state('inactive', style({
                transform: 'scale(1)',
                backgroundColor: '#eee'
            })),
            state('active', style({
                // transform: 'scale(1.1)',
                // backgroundColor: '#cfd8dc'
                //  display: 'inline-block',
                //   height: '99vh',
                //   background:'rgba(0,0,0,0.9)',
                //   width: '100%',
                //   position: 'absolute',
                //   top: '0',
                //   left: '0',
                //   right: '0',
                //   '-webkit-clip-path': 'polygon(65% 0, 100% 0%, 100% 100%, 80% 100%)',
                //   'clip-path' :'polygon(65% 0, 100% 0%, 100% 100%, 80% 100%)',
                  

            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ]),

  ]
})
export class HeaderComponent implements OnInit {

  menuActive 
  menuIconChange = false;
  constructor() { }

  ngOnInit() {
  }


  stateChange(){
    this.menuActive =this.menuIconChange? 'menuActive':'menuInactive'
  }
    

}
