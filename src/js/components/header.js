import {GenerateNavbar} from '#components/navbar';
import * as Console from "node:console";

export function GenerateHeader() {
  Console.log("Header function called");
    return '<div>'+
       '   <div>'+
              '<a>'+
                  '<span>Sagar Kumar</span>'+
              '</a>'+
          '</div>'+
      GenerateNavbar() +
          '</div>';

  }