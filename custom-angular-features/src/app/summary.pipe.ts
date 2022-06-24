import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, length:number=50, char:string="...", ...args: unknown[]): unknown {

    return value.slice(0, length) + char;
  }

}
