import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'escape' })
export class AppEscapePipe implements PipeTransform {
  transform(value: string): any {
    return escape(value);
  }
}

@Pipe({ name: 'filterList' })
export class AppFilterListPipe implements PipeTransform {
  transform(value: any[], filterTxt: string, prop: string[]): any[] {
    if (filterTxt) {
      return value.filter(item => this.filter(item, filterTxt, prop));
    } else {
      return value;
    }
  }
  filter(item: any, filterTxt: string, prop: string[]): boolean {
    if (prop.length === 0) {
      return this.contains(item, filterTxt);
    } else {
      let truthy = false;
      prop.forEach(element => {
        if (item[element]) {
          truthy = truthy || this.contains(item[element], filterTxt);
        }
      });
      return truthy;
    }
  }

  contains(txt: string, filterTxt: string): boolean {
    return !((txt || '').toLowerCase().indexOf(filterTxt) < 0);
  }
}
