import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "readMore" })
export class ReadMorePipe implements PipeTransform {
  transform(value: string) {
    if (value.length > 100) {
      return `${value.substring(0, 100)}...`;
    }
    return value;
  }
}
