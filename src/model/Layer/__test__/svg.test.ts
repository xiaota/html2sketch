import Svg from '../../Layer/Svg';
import {
  svgPath,
  rect,
  compPath,
  singleRoundRect,
  unclosedRect,
  dropboxSvgPath,
  behanceSvg,
  upCircleSvg,
  plusSvg,
  outputJSONData,
  plus,
} from './commonSvgData';

describe('Svg 类', () => {
  describe('toSketchJSON', function() {
    it('svgPath 复合对象转换正常', function() {
      const svg = new Svg({
        svgString: svgPath.svgString,
        height: 814.2161138351329,
        width: 736.652344,
        x: -90,
        y: 4,
      });

      expect(svg.toSketchJSON()).toStrictEqual(svgPath.sketchJSON);
    });

    it('dropbox 转换正常', function() {
      const svg = new Svg({
        height: 100,
        width: 100,
        x: 520,
        y: 349,
        svgString: dropboxSvgPath.svgString,
      });
      outputJSONData(svg.toSketchJSON(), 'dropbox');
      expect(svg.toSketchJSON()).toStrictEqual(dropboxSvgPath.sketchJSON);
    });
    it('behance 转换正常', function() {
      const svg = new Svg({
        height: 56.01562500000003,
        width: 89.22991071428572,
        x: 123,
        y: 18.01116071428572,
        svgString: behanceSvg.svgString,
      });
      outputJSONData(svg.toSketchJSON(), 'behance');
      expect(svg.toSketchJSON()).toStrictEqual(behanceSvg.sketchJSON);
    });

    it('plusSvg 转换正常', function() {
      const svg = new Svg({
        height: 25,
        width: 24,
        x: 164,
        y: 22,
        svgString: plusSvg.svgString,
      });
      outputJSONData(svg.toSketchJSON(), 'plus');
      expect(svg.toSketchJSON()).toStrictEqual(plusSvg.sketchJSON);
    });

    describe('多条路径 upArrow 转换正常', function() {
      const svg = new Svg({
        svgString: upCircleSvg.svgString,
        height: 300,
        width: 300,
        x: 25,
        y: -102,
      });
      // outputJSONData(svg.toSketchJSON(), 'up-circle');
      expect(svg.toSketchJSON()).toStrictEqual(upCircleSvg.sketchJSON);
    });
  });

  describe('convertToCubicBezier', function() {
    it('svgPath转换正常', function() {
      const points = Svg.pathToShapeGroup(svgPath.shapes[0].path);
      expect(points).toStrictEqual({
        frame: {
          width: 736.652344,
          height: 814.2161138351329,
          x: 4,
          y: 4,
        },
        shapes: [
          // 不规则
          compPath.shapePath,
          // 正方形
          rect.shapePath,
          // 圆角矩形
          singleRoundRect.shapePath,
          // 开放矩形
          unclosedRect.shapePath,
        ],
      });
    });

    it('plusSvg转换正常', function() {
      const points = Svg.pathToShapeGroup(plusSvg.shapes[0].path);
      console.log(points);
      expect(points).toStrictEqual({
        frame: {
          height: 262.00241998455107,
          width: 371.92533073817987,
          x: 326.0873346309101,
          y: 356.99758001544893,
        },
        shapes: [plus.shapePath],
      });
    });

    it('path不正确时报错', function() {
      const path = 'Z';
      const t = () => {
        try {
          Svg.pathToShapeGroup(path);
        } catch (e) {
          throw e;
        }
      };
      expect(t).toThrow(
        'Error Path!\nData:Z\nPlease check whether the path is correct.'
      );
    });
  });

  describe('calcFrameScale', () => {
    it('长宽比相等', function() {
      const originFrame = { x: 0, y: 0, width: 100, height: 100 };
      const targetFrame = { x: 0, y: 0, width: 200, height: 200 };

      const scale = Svg.calcFrameScale(originFrame, targetFrame);
      expect(scale).toBe(2);
    });
    /**
     *   Origin           Target
     * *--------*        *------*
     * |        |   ->   |      |
     * *--------*        *------*
     */
    it('源长宽比大于目标长宽比', function() {
      const originFrame = { x: 0, y: 0, width: 100, height: 50 };
      const targetFrame = { x: 0, y: 0, width: 200, height: 200 };

      const scale = Svg.calcFrameScale(originFrame, targetFrame);
      expect(scale).toBe(2);
    });
    /**
     *   Origin           Target
     * *--------*        *------*
     * |        |        |      |
     * |        |   ->   *------*
     * |        |
     * *--------*
     */
    it('源长宽比小于目标长宽比', function() {
      const originFrame = { x: 0, y: 0, width: 100, height: 200 };
      const targetFrame = { x: 0, y: 0, width: 100, height: 100 };

      const scale = Svg.calcFrameScale(originFrame, targetFrame);
      expect(scale).toBe(0.5);
    });
  });
  describe('', function() {});
});
