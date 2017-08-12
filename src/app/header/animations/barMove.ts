import { trigger, state, animate, transition, style, keyframes} from '@angular/animations';

export const barMoveAnimation =
      trigger('barMove', [
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
            
    transition('menuActive => menuInactive', [ //':enter'
    animate('500ms 500ms', keyframes([
            style({
              //  margin: '6px',
               margin: '6px 0'
              //  paddingTop: '16px'

            }),
            style({
                // margin: '0',
                 margin: '0'
            }),
            style({
              //  margin: '6px',
               margin: '6px 0'
              //  paddingTop: '16px'
            })
          ]))
      ])
    ]);
  
export const boxMoveAnimation = 
  trigger('barBox', [
    transition('menuActive => menuInactive', [ //':enter'
    animate('500ms 500ms', keyframes([
            style({
              offset: 0,
              height : '53px',
              //  margin: '6px',
              //  height : 'auto'
              //  paddingTop: '16px'

            }),
            style({
              offset: .5,
                // margin: '0',
                height : '53px',
                paddingTop: '16px'
            }),
            style({
              offset: 1,
              height : '53px',
              //  margin: '6px',
              //  height : 'auto'
              // padding: '7px 10px'
              paddingTop: '7px'
            })
          ]))
      ])
    ]);
        //     state('mixBar', style({
        //         // margin: '0',
        //         height : '47px',
        //         paddingTop: '16px'

                 
        //     })),
        //     state('unMixBar', style({
        //       //  margin: '6px',
        //        height : 'auto'
        //       //  paddingTop: '16px'

        //     })),
        //     transition('mixBar => maxBar', animate('500ms ease-in')),
        //     transition('menuActive => menuInactive', animate('500ms ease-out'))
        // ]);

