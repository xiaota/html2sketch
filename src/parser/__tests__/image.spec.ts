import { Bitmap, Svg, parseToBitmap } from 'html2sketch';
import { errorBase64Url } from 'html2sketch/utils/image';
import { antdSvg } from '@test-utils';

describe('parseToBitmap', () => {
  describe('Png 内联', () => {
    const dataUrl =
      'data:image/png;base64,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';
    afterAll(() => {
      document.body.innerHTML = '';
    });
    beforeAll(() => {
      document.body.innerHTML = `
   <div id="div"></div>
   <img id='img' alt="Ant Design" src=${dataUrl} />
    `;
    });

    it('正常解析', () => {
      const img = document.getElementById('img') as HTMLImageElement;
      const imageLayer = parseToBitmap(img);
      expect((imageLayer as Bitmap)?.url).toBe(
        'data:image/png;base64,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',
      );
    });
  });

  describe('Png 外联图片', () => {
    afterAll(() => {
      document.body.innerHTML = '';
    });
    beforeAll(() => {
      document.body.innerHTML = `
   <div id="div"></div>
   <img id='img' alt="Ant Design" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
    `;
    });

    it('传入空值 则返回未定义对象', () => {
      const img = document.getElementById('im') as HTMLImageElement;
      const imageLayer = parseToBitmap(img);
      expect(imageLayer).toBeUndefined();
    });
    it('传入不正确的节点 则返回未定义对象', () => {
      const img = document.getElementById('div') as HTMLImageElement;
      const imageLayer = parseToBitmap(img);
      expect(imageLayer).toBeUndefined();
    });
    it('如果网络有问题,则解析失败', () => {
      const img = document.getElementById('img') as HTMLImageElement;
      const imageLayer = parseToBitmap(img);
      expect((imageLayer as Bitmap)?.url).toBe(errorBase64Url);
    });
  });

  describe('Svg', () => {
    const svgBase64Url =
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDcuMSAoNDU0MjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDI4IENvcHkgNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjIuMTAyMzI3MyUiIHkxPSIwJSIgeDI9IjEwOC4xOTcxOCUiIHkyPSIzNy44NjM1NzY0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDI4NUVCIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyRUM3RkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OS42NDQxMTYlIiB5MT0iMCUiIHgyPSI1NC4wNDI4OTc1JSIgeTI9IjEwOC40NTY3MTQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyOUNERkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE0OEVGRiIgb2Zmc2V0PSIzNy44NjAwNjg3JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEE2MEZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjkuNjkwODE2NSUiIHkxPSItMTIuOTc0MzU4NyUiIHgyPSIxNi43MjI4OTgxJSIgeTI9IjExNy4zOTEyNDglIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQTgxNkUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y3NEE1QyIgb2Zmc2V0PSI0MS40NzI2MDYlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OC4xMjc5ODcyJSIgeTE9Ii0zNS42OTA1NzM3JSIgeDI9IjMwLjQ0MDA5MTQlIiB5Mj0iMTE0Ljk0MjY3OSUiIGlkPSJsaW5lYXJHcmFkaWVudC00Ij4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZBOEU3RCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjc0QTVDIiBvZmZzZXQ9IjUxLjI2MzUxOTElIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjAwMDAwMCwgLTIwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjgtQ29weS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI3LUNvcHktMyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTEuNTg4MDg2Myw0LjE3NjUyODIzIEw0LjE3OTk2NTQ0LDkxLjUxMjc3MjggQy0wLjUxOTI0MDYwNSw5Ni4yMDgxMTQ2IC0wLjUxOTI0MDYwNSwxMDMuNzkxODg1IDQuMTc5OTY1NDQsMTA4LjQ4NzIyNyBMOTEuNTg4MDg2MywxOTUuODIzNDcyIEM5Ni4yODcyOTIzLDIwMC41MTg4MTQgMTAzLjg3NzMwNCwyMDAuNTE4ODE0IDEwOC41NzY1MSwxOTUuODIzNDcyIEwxNDUuMjI1NDg3LDE1OS4yMDQ2MzIgQzE0OS40MzM5NjksMTU0Ljk5OTYxMSAxNDkuNDMzOTY5LDE0OC4xODE5MjQgMTQ1LjIyNTQ4NywxNDMuOTc2OTAzIEMxNDEuMDE3MDA1LDEzOS43NzE4ODEgMTM0LjE5MzcwNywxMzkuNzcxODgxIDEyOS45ODUyMjUsMTQzLjk3NjkwMyBMMTAyLjIwMTkzLDE3MS43MzczNTIgQzEwMS4wMzIzMDUsMTcyLjkwNjAxNSA5OS4yNTcxNjA5LDE3Mi45MDYwMTUgOTguMDg3NTM1OSwxNzEuNzM3MzUyIEwyOC4yODU5MDgsMTAxLjk5MzEyMiBDMjcuMTE2MjgzMSwxMDAuODI0NDU5IDI3LjExNjI4MzEsOTkuMDUwNzc1IDI4LjI4NTkwOCw5Ny44ODIxMTE4IEw5OC4wODc1MzU5LDI4LjEzNzg4MjMgQzk5LjI1NzE2MDksMjYuOTY5MjE5MSAxMDEuMDMyMzA1LDI2Ljk2OTIxOTEgMTAyLjIwMTkzLDI4LjEzNzg4MjMgTDEyOS45ODUyMjUsNTUuODk4MzMxNCBDMTM0LjE5MzcwNyw2MC4xMDMzNTI4IDE0MS4wMTcwMDUsNjAuMTAzMzUyOCAxNDUuMjI1NDg3LDU1Ljg5ODMzMTQgQzE0OS40MzM5NjksNTEuNjkzMzEgMTQ5LjQzMzk2OSw0NC44NzU2MjMyIDE0NS4yMjU0ODcsNDAuNjcwNjAxOCBMMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05MS41ODgwODYzLDQuMTc2NTI4MjMgTDQuMTc5OTY1NDQsOTEuNTEyNzcyOCBDLTAuNTE5MjQwNjA1LDk2LjIwODExNDYgLTAuNTE5MjQwNjA1LDEwMy43OTE4ODUgNC4xNzk5NjU0NCwxMDguNDg3MjI3IEw5MS41ODgwODYzLDE5NS44MjM0NzIgQzk2LjI4NzI5MjMsMjAwLjUxODgxNCAxMDMuODc3MzA0LDIwMC41MTg4MTQgMTA4LjU3NjUxLDE5NS44MjM0NzIgTDE0NS4yMjU0ODcsMTU5LjIwNDYzMiBDMTQ5LjQzMzk2OSwxNTQuOTk5NjExIDE0OS40MzM5NjksMTQ4LjE4MTkyNCAxNDUuMjI1NDg3LDE0My45NzY5MDMgQzE0MS4wMTcwMDUsMTM5Ljc3MTg4MSAxMzQuMTkzNzA3LDEzOS43NzE4ODEgMTI5Ljk4NTIyNSwxNDMuOTc2OTAzIEwxMDIuMjAxOTMsMTcxLjczNzM1MiBDMTAxLjAzMjMwNSwxNzIuOTA2MDE1IDk5LjI1NzE2MDksMTcyLjkwNjAxNSA5OC4wODc1MzU5LDE3MS43MzczNTIgTDI4LjI4NTkwOCwxMDEuOTkzMTIyIEMyNy4xMTYyODMxLDEwMC44MjQ0NTkgMjcuMTE2MjgzMSw5OS4wNTA3NzUgMjguMjg1OTA4LDk3Ljg4MjExMTggTDk4LjA4NzUzNTksMjguMTM3ODgyMyBDMTAwLjk5OTg2NCwyNS42MjcxODM2IDEwNS43NTE2NDIsMjAuNTQxODI0IDExMi43Mjk2NTIsMTkuMzUyNDQ4NyBDMTE3LjkxNTU4NSwxOC40Njg1MjYxIDEyMy41ODUyMTksMjAuNDE0MDIzOSAxMjkuNzM4NTU0LDI1LjE4ODk0MjQgQzEyNS42MjQ2NjMsMjEuMDc4NDI5MiAxMTguNTcxOTk1LDE0LjAzNDAzMDQgMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUzLjY4NTYzMywxMzUuODU0NTc5IEMxNTcuODk0MTE1LDE0MC4wNTk2IDE2NC43MTc0MTIsMTQwLjA1OTYgMTY4LjkyNTg5NCwxMzUuODU0NTc5IEwxOTUuOTU5OTc3LDEwOC44NDI3MjYgQzIwMC42NTkxODMsMTA0LjE0NzM4NCAyMDAuNjU5MTgzLDk2LjU2MzYxMzMgMTk1Ljk2MDUyNyw5MS44Njg4MTk0IEwxNjguNjkwNzc3LDY0LjcxODExNTkgQzE2NC40NzIzMzIsNjAuNTE4MDg1OCAxNTcuNjQ2ODY4LDYwLjUyNDE0MjUgMTUzLjQzNTg5NSw2NC43MzE2NTI2IEMxNDkuMjI3NDEzLDY4LjkzNjY3NCAxNDkuMjI3NDEzLDc1Ljc1NDM2MDcgMTUzLjQzNTg5NSw3OS45NTkzODIxIEwxNzEuODU0MDM1LDk4LjM2MjM3NjUgQzE3My4wMjM2Niw5OS41MzEwMzk2IDE3My4wMjM2NiwxMDEuMzA0NzI0IDE3MS44NTQwMzUsMTAyLjQ3MzM4NyBMMTUzLjY4NTYzMywxMjAuNjI2ODQ5IEMxNDkuNDc3MTUsMTI0LjgzMTg3IDE0OS40NzcxNSwxMzEuNjQ5NTU3IDE1My42ODU2MzMsMTM1Ljg1NDU3OSBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIiBjeD0iMTAwLjUxOTMzOSIgY3k9IjEwMC40MzY2ODEiIHJ4PSIyMy42MDAxOTI2IiByeT0iMjMuNTgwNzg2Ij48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
    afterAll(() => {
      document.body.innerHTML = '';
    });
    beforeAll(() => {
      document.body.innerHTML = `<img id='img' alt="Ant Design" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" base64=${svgBase64Url} />`;
    });
    it('正常解析出 Svg', () => {
      const img = document.getElementById('img') as HTMLImageElement;
      const imageLayer = parseToBitmap(img);
      expect((imageLayer as Svg)?.rawSVGString).toBe(antdSvg);
    });
  });
});