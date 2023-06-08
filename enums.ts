enum Direction {
  TOP,
  RIGHT,
  LEFT,
  BOTTOM,
}

const enum TimingFn {
  EASE,
  LINEAR,
  EASE_IN,
  TEST = "string",
}

function frame(elem: string, dir: Direction, tFunc: TimingFn): void {
  if (dir === Direction.RIGHT) {
    console.log(TimingFn.EASE); // 0
    console.log(TimingFn.TEST); // string
  }
}

frame("id", Direction.RIGHT, TimingFn.EASE);
