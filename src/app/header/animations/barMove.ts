import { trigger, state, animate, transition, style, keyframes} from '@angular/animations';

export const slideInOutAnimation =
      trigger('focusPanel', [
    //   transition(':enter', [   // :enter is alias to 'void => *'
    //   style({opacity:0}),
    //   animate(1000, style({opacity:1})) 
    // ]),
  //  transition('void => *', [
  //   //  style({position: 'absolute', ddisplay: 'inline-block' }),
  //     animate('1000ms', keyframes([
  //       style({   
  //                 offset: 0,
  //                 position: 'absolute',
  //                 display: 'none',
  //                 top: '0',
  //                 left: '0',
  //                 right: '0',
  //                 '-webkit-clip-path': 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)',
  //                 'clip-path' :'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)'}),
  //       style({   
  //                 offset: .7,
  //                 position: 'absolute',
  //                 background:'rgba(0,0,0,0.9)',
  //                 top: '0',
  //                 left: '0',
  //                 right: '0',
  //                 '-webkit-clip-path': 'polygon(75% 0, 100% 0%, 100% 100%, 80% 100%)',
  //                 'clip-path' :'polygon(75% 0, 100% 0%, 100% 100%, 80% 100%)'}),
  //       style({   
  //                 offset: 1,
  //                 position: 'absolute',
  //                 display: 'block',
  //                 background:'rgba(0,0,0,0.9)',
  //                 top: '0',
  //                 left: '0',
  //                 right: '0',
  //                 '-webkit-clip-path': 'polygon(65% 0, 100% 0%, 100% 100%, 80% 100%)',
  //                 'clip-path' :'polygon(65% 0, 100% 0%, 100% 100%, 80% 100%)'})
  //     ]))
  //   ]),
  //   transition('* => void', [
  //     animate(1000, keyframes([
  //       style({   
  //                 offset: 0,
  //                 position: 'absolute',
  //                 background:'rgba(0,0,0,0.9)',
  //                 top: '0',
  //                 left: '0',
  //                 right: '0',
  //                 '-webkit-clip-path': 'polygon(65% 0, 100% 0%, 100% 100%, 80% 100%)',
  //                 'clip-path' :'polygon(65% 0, 100% 0%, 100% 100%, 80% 100%)'}),
  //       style({   
  //                 offset: .3,
  //                 position: 'absolute',
  //                 background:'rgba(0,0,0,0.9)',
  //                 top: '0',
  //                 left: '0',
  //                 right: '0',
  //                 '-webkit-clip-path': 'polygon(85% 0, 100% 0%, 100% 100%, 80% 100%)',
  //                 'clip-path' :'polygon(85% 0, 100% 0%, 100% 100%, 80% 100%)'}),
  //       style({   
  //                 offset: 1,
  //                 display: 'none',
  //                 position: 'absolute',
  //                 top: '0',
  //                 left: '0',
  //                 right: '0',
  //                 '-webkit-clip-path': 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)',
  //                 'clip-path' :'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)'})
  //     ]))
  //   ]),
    // transition(':leave', [   // :leave is alias to '* => void'
    //   style({opacity:1}),
    //   animate(1000, style({opacity:0})) 
    // ])
            state('mixBar', style({
                
                 
            })),
            state('unMixBar', style({
               

            })),
            transition('mixBar => unMixBar', animate('500ms ease-in')),
            transition('menuActive => menuInactive', animate('500ms ease-out'))
        ]);

  