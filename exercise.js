class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    return new Vec((this.x + vec.x), (this.y + vec.y));
  }

  minus(vec) {
    return new Vec((this.x - vec.x), (this.y - vec.y));
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  static distance(point1, point2) {
    return Math.sqrt((Math.pow(point2[0] - point1[0], 2)) + (Math.pow(point2[1] - point1[1])));
  }
}
