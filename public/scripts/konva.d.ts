declare module 'konva' {
  export let enableTrace: number;
  export let pixelRatio: number;
  export let autoDrawEnabled: boolean;
  export let dragDistance: number;
  export let angleDeg: boolean;
  export let showWarnings: boolean;
  export let capturePointerEventsEnabled: boolean;
  export let dragButtons: Array<number>;
  export let hitOnDragEnabled: boolean;
  export const isDragging: () => boolean;
  export const isDragReady: () => boolean;

  export type Vector2d = import('../lib/types.js').Vector2d;

  export const Node: typeof import('../lib/Node.js').Node;
  export type Node = import('../lib/Node.js').Node;
  export type NodeConfig = import('../lib/Node.js').NodeConfig;

  export type KonvaEventObject<
    EventType
  > = import('../lib/Node.js').KonvaEventObject<EventType>;

  export type KonvaPointerEvent = import('../lib/PointerEvents.js').KonvaPointerEvent;

  export type KonvaEventListener<
    This,
    EventType
  > = import('../lib/Node.js').KonvaEventListener<This, EventType>;

  export const Container: typeof import('../lib/Container.js').Container;
  export type Container = import('../lib/Container.js').Container<Node>;
  export type ContainerConfig = import('../lib/Container.js').ContainerConfig;

  export const Transform: typeof import('../lib/Util.js').Transform;
  export type Transform = import('../lib/Util.js').Transform;

  export const Util: typeof import('../lib/Util.js').Util;

  export const Context: typeof import('../lib/Context.js').Context;
  export type Context = import('../lib/Context.js').Context;

  export const Stage: typeof import('../lib/Stage.js').Stage;
  export type Stage = import('../lib/Stage.js').Stage;
  export type StageConfig = import('../lib/Stage.js').StageConfig;
  export const stages: typeof import('../lib/Stage.js').stages;

  export const Layer: typeof import('../lib/Layer.js').Layer;
  export type Layer = import('../lib/Layer.js').Layer;
  export type LayerConfig = import('../lib/Layer.js').LayerConfig;

  export const FastLayer: typeof import('../lib/FastLayer.js').FastLayer;
  export type FastLayer = import('../lib/FastLayer.js').FastLayer;

  export const Group: typeof import('../lib/Group.js').Group;
  export type Group = import('../lib/Group.js').Group;
  export type GroupConfig = import('../lib/Group.js').GroupConfig;

  export const DD: typeof import('../lib/DragAndDrop.js').DD;

  export const Shape: typeof import('../lib/Shape.js').Shape;
  export type Shape = import('../lib/Shape.js').Shape;
  export type ShapeConfig = import('../lib/Shape.js').ShapeConfig;
  export const shapes: typeof import('../lib/Shape.js').shapes;

  export const Animation: typeof import('../lib/Animation.js').Animation;
  export type Animation = import('../lib/Animation.js').Animation;

  export const Tween: typeof import('../lib/Tween.js').Tween;
  export type Tween = import('../lib/Tween.js').Tween;
  export type TweenConfig = import('../lib/Tween.js').TweenConfig;
  export const Easings: typeof import('../lib/Tween.js').Easings;

  export const Arc: typeof import('../lib/shapes/Arc.js').Arc;
  export type Arc = import('../lib/shapes/Arc.js').Arc;
  export type ArcConfig = import('../lib/shapes/Arc.js').ArcConfig;
  export const Arrow: typeof import('../lib/shapes/Arrow.js').Arrow;
  export type Arrow = import('../lib/shapes/Arrow.js').Arrow;
  export type ArrowConfig = import('../lib/shapes/Arrow.js').ArrowConfig;
  export const Circle: typeof import('../lib/shapes/Circle.js').Circle;
  export type Circle = import('../lib/shapes/Circle.js').Circle;
  export type CircleConfig = import('../lib/shapes/Circle.js').CircleConfig;
  export const Ellipse: typeof import('../lib/shapes/Ellipse.js').Ellipse;
  export type Ellipse = import('../lib/shapes/Ellipse.js').Ellipse;
  export type EllipseConfig = import('../lib/shapes/Ellipse.js').EllipseConfig;
  export const Image: typeof import('../lib/shapes/Image.js').Image;
  export type Image = import('../lib/shapes/Image.js').Image;
  export type ImageConfig = import('../lib/shapes/Image.js').ImageConfig;
  export const Label: typeof import('../lib/shapes/Label.js').Label;
  export type Label = import('../lib/shapes/Label.js').Label;
  export type LabelConfig = import('../lib/shapes/Label.js').LabelConfig;
  export const Tag: typeof import('../lib/shapes/Label.js').Tag;
  export type Tag = import('../lib/shapes/Label.js').Tag;
  export type TagConfig = import('../lib/shapes/Label.js').TagConfig;
  export const Line: typeof import('../lib/shapes/Line.js').Line;
  export type Line = import('../lib/shapes/Line.js').Line;
  export type LineConfig = import('../lib/shapes/Line.js').LineConfig;
  export const Path: typeof import('../lib/shapes/Path.js').Path;
  export type Path = import('../lib/shapes/Path.js').Path;
  export type PathConfig = import('../lib/shapes/Path.js').PathConfig;
  export const Rect: typeof import('../lib/shapes/Rect.js').Rect;
  export type Rect = import('../lib/shapes/Rect.js').Rect;
  export type RectConfig = import('../lib/shapes/Rect.js').RectConfig;
  export const RegularPolygon: typeof import('../lib/shapes/RegularPolygon.js').RegularPolygon;
  export type RegularPolygon = import('../lib/shapes/RegularPolygon.js').RegularPolygon;
  export type RegularPolygonConfig = import('../lib/shapes/RegularPolygon.js').RegularPolygonConfig;
  export const Ring: typeof import('../lib/shapes/Ring.js').Ring;
  export type Ring = import('../lib/shapes/Ring.js').Ring;
  export type RingConfig = import('../lib/shapes/Ring.js').RingConfig;
  export const Sprite: typeof import('../lib/shapes/Sprite.js').Sprite;
  export type Sprite = import('../lib/shapes/Sprite.js').Sprite;
  export type SpriteConfig = import('../lib/shapes/Sprite.js').SpriteConfig;
  export const Star: typeof import('../lib/shapes/Star.js').Star;
  export type Star = import('../lib/shapes/Star.js').Star;
  export type StarConfig = import('../lib/shapes/Star.js').StarConfig;
  export const Text: typeof import('../lib/shapes/Text.js').Text;
  export type Text = import('../lib/shapes/Text.js').Text;
  export type TextConfig = import('../lib/shapes/Text.js').TextConfig;
  export const TextPath: typeof import('../lib/shapes/TextPath.js').TextPath;
  export type TextPath = import('../lib/shapes/TextPath.js').TextPath;
  export type TextPathConfig = import('../lib/shapes/TextPath.js').TextPathConfig;
  export const Transformer: typeof import('../lib/shapes/Transformer.js').Transformer;
  export type Transformer = import('../lib/shapes/Transformer.js').Transformer;
  export type TransformerConfig = import('../lib/shapes/Transformer.js').TransformerConfig;
  export const Wedge: typeof import('../lib/shapes/Wedge.js').Wedge;
  export type Wedge = import('../lib/shapes/Wedge.js').Wedge;
  export type WedgeConfig = import('../lib/shapes/Wedge.js').WedgeConfig;


  export const Filters: {
    Blur: typeof import('../lib/filters/Blur.js').Blur;
    Brighten: typeof import('../lib/filters/Brighten.js').Brighten;
    Contrast: typeof import('../lib/filters/Contrast.js').Contrast;
    Emboss: typeof import('../lib/filters/Emboss.js').Emboss;
    Enhance: typeof import('../lib/filters/Enhance.js').Enhance;
    Grayscale: typeof import('../lib/filters/Grayscale.js').Grayscale;
    HSL: typeof import('../lib/filters/HSL.js').HSL;
    HSV: typeof import('../lib/filters/HSV.js').HSV;
    Invert: typeof import('../lib/filters/Invert.js').Invert;
    Kaleidoscope: typeof import('../lib/filters/Kaleidoscope.js').Kaleidoscope;
    Mask: typeof import('../lib/filters/Mask.js').Mask;
    Noise: typeof import('../lib/filters/Noise.js').Noise;
    Pixelate: typeof import('../lib/filters/Pixelate.js').Pixelate;
    Posterize: typeof import('../lib/filters/Posterize.js').Posterize;
    RGB: typeof import('../lib/filters/RGB.js').RGB;
    RGBA: typeof import('../lib/filters/RGBA.js').RGBA;
    Sepia: typeof import('../lib/filters/Sepia.js').Sepia;
    Solarize: typeof import('../lib/filters/Solarize.js').Solarize;
    Threshold: typeof import('../lib/filters/Threshold.js').Threshold;
  };
}
