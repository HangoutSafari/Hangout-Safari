enum Model {
  BOTTOM_CENTER = "/models/Chunks/bottom_center.glb",
  BOTTOM_LEFT = "/models/Chunks/bottom_left.glb",
  BOTTOM_RIGHT = "/models/Chunks/bottom_right.glb",
  CENTER_LEFT = "/models/Chunks/center_left.glb",
  CENTER_RIGHT = "/models/Chunks/center_right.glb",
  CENTER_TOP = "/models/Chunks/center_top.glb",
  CENTER = "/models/Chunks/center.glb",
  TOP_LEFT = "/models/Chunks/top_left.glb",
  TOP_RIGHT = "/models/Chunks/top_right.glb",
}

/**
 * Type deffiniton where key is number and model is the value
 */
type IndexModel = {
  [key: number]: Model;
};

/**
 * Variable that is defining at what order are chunks being spawn
 * !!!!!!! DONT CHANGE THE ORDER !!!!!!!
 */
export const Models: IndexModel = {
  0: Model.CENTER,
  1: Model.TOP_RIGHT,
  2: Model.CENTER_RIGHT,
  3: Model.BOTTOM_RIGHT,
  4: Model.CENTER_TOP,
  5: Model.BOTTOM_CENTER,
  6: Model.BOTTOM_LEFT,
  7: Model.CENTER_LEFT,
  8: Model.TOP_LEFT,
};
