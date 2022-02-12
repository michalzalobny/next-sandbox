export interface Size {
  clientRect: DomRectSSR;
  offsetTop: number;
  isReady: boolean;
}

export interface DomRectSSR {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}
