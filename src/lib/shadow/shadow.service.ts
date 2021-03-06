import { Injectable }       from '@angular/core';
import { toPositiveNumber } from './toPositiveNumber';
import { converterToHex }         from 'alyle-ui/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Injectable()
export class LyShadowService {
  constructor(
    private sanitizer: DomSanitizer
  ) { }
  shadow(color: string, size: number) {
    const sizeOrigin = size;
    const _color = [226, 226, 226];
    size = toPositiveNumber(size);
    let style = `
    rgba(${_color[0]}, ${_color[1]}, ${_color[2]}, ${
      ((70 / 100) * Number(size / 2))
    }) 0px ${
      (((3 * size) - 2) / 2) * toPositiveNumber(sizeOrigin, true)
    }px ${
      (3 * size * 2) / 2
    }px 0px${
      ','
    } rgba(${_color[0]}, ${_color[1]}, ${_color[2]}, ${
      ((60 / 100) * Number('0.' + String(size)))
    }) 0px ${
      (((3 * size) - 2) / 3) * toPositiveNumber(sizeOrigin, true)
    }px ${
      (3 * size * 2)
    }px 0px${
      ','
    } rgba(${_color[0]}, ${_color[1]}, ${_color[2]}, ${
      (40 / 100) * Number('0.' + String(size))
    }) 0px ${
      (((3 * size) - 2)) * toPositiveNumber(sizeOrigin, true)
    }px ${(3 * size * 2) / 1.4}px 0px`;

    if (size < 2 && size > 0) {
      style = style + `, rgba(${_color[0]}, ${_color[1]}, ${_color[2]}, ${
        .23
      }) 0px ${2 * toPositiveNumber(sizeOrigin, true)}px 6px 0px`;
    }
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
