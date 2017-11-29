import { Injectable } from "@angular/core";

@Injectable()
export class MemService {

   static globalMem = {};
   static localMem = {};

   get(that:any){ 
     // call from any component using this service with this as argument
     // to get a components specific memory that survives
     // between route changes
     let className = that.constructor.name;
     MemService.localMem[className] = MemService.localMem[className] || {};
     return MemService.localMem[className];
   }

   global(){
     // call from any component using this service
     // to get a global memory shared between all components 
     return MemService.globalMem;
   }

}