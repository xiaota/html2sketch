(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[74,75],{"0Owb":function(n,e,t){"use strict";function o(){return o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},o.apply(this,arguments)}t.d(e,"a",(function(){return o}))},"6VBw":function(n,e,t){"use strict";var o=t("ODXe"),a=t("rePB"),r=t("Ff2n"),s=t("q1tI"),c=t.n(s),i=t("TSYQ"),l=t.n(i),m=t("VTBJ"),u=t("U8pU"),d=t("HXN9"),p=t("Kwbf"),y=t("Gu+u");function b(n,e){Object(p["a"])(n,"[@ant-design/icons] ".concat(e))}function f(n){return"object"===Object(u["a"])(n)&&"string"===typeof n.name&&"string"===typeof n.theme&&("object"===Object(u["a"])(n.icon)||"function"===typeof n.icon)}function g(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).reduce((function(e,t){var o=n[t];switch(t){case"class":e.className=o,delete e.class;break;default:e[t]=o}return e}),{})}function h(n,e,t){return t?c.a.createElement(n.tag,Object(m["a"])(Object(m["a"])({key:e},g(n.attrs)),t),(n.children||[]).map((function(t,o){return h(t,"".concat(e,"-").concat(n.tag,"-").concat(o))}))):c.a.createElement(n.tag,Object(m["a"])({key:e},g(n.attrs)),(n.children||[]).map((function(t,o){return h(t,"".concat(e,"-").concat(n.tag,"-").concat(o))})))}function x(n){return Object(d["generate"])(n)[0]}function C(n){return n?Array.isArray(n)?n:[n]:[]}var w="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",O=!1,S=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;Object(s["useEffect"])((function(){O||(Object(y["insertCss"])(n,{prepend:!0}),O=!0)}),[])},k={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function v(n){var e=n.primaryColor,t=n.secondaryColor;k.primaryColor=e,k.secondaryColor=t||x(e),k.calculated=!!t}function N(){return Object(m["a"])({},k)}var j=function(n){var e=n.icon,t=n.className,o=n.onClick,a=n.style,s=n.primaryColor,c=n.secondaryColor,i=Object(r["a"])(n,["icon","className","onClick","style","primaryColor","secondaryColor"]),l=k;if(s&&(l={primaryColor:s,secondaryColor:c||x(s)}),S(),b(f(e),"icon should be icon definiton, but got ".concat(e)),!f(e))return null;var u=e;return u&&"function"===typeof u.icon&&(u=Object(m["a"])(Object(m["a"])({},u),{},{icon:u.icon(l.primaryColor,l.secondaryColor)})),h(u.icon,"svg-".concat(u.name),Object(m["a"])({className:t,onClick:o,style:a,"data-icon":u.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},i))};j.displayName="IconReact",j.getTwoToneColors=N,j.setTwoToneColors=v;var E=j;function I(n){var e=C(n),t=Object(o["a"])(e,2),a=t[0],r=t[1];return E.setTwoToneColors({primaryColor:a,secondaryColor:r})}function z(){var n=E.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}I("#1890ff");var T=s["forwardRef"]((function(n,e){var t=n.className,c=n.icon,i=n.spin,m=n.rotate,u=n.tabIndex,d=n.onClick,p=n.twoToneColor,y=Object(r["a"])(n,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),b=l()("anticon",Object(a["a"])({},"anticon-".concat(c.name),Boolean(c.name)),t),f=l()({"anticon-spin":!!i||"loading"===c.name}),g=u;void 0===g&&d&&(g=-1);var h=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,x=C(p),w=Object(o["a"])(x,2),O=w[0],S=w[1];return s["createElement"]("span",Object.assign({role:"img","aria-label":c.name},y,{ref:e,tabIndex:g,onClick:d,className:b}),s["createElement"](E,{className:f,icon:c,primaryColor:O,secondaryColor:S,style:h}))}));T.displayName="AntdIcon",T.getTwoToneColor=z,T.setTwoToneColor=I;e["a"]=T},"K+nK":function(n,e){function t(n){return n&&n.__esModule?n:{default:n}}n.exports=t},Llbl:function(n,e,t){"use strict";var o=t("q1tI"),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"},r=a,s=t("6VBw"),c=function(n,e){return o["createElement"](s["a"],Object.assign({},n,{ref:e,icon:r}))};c.displayName="UpCircleOutlined";e["a"]=o["forwardRef"](c)},UKAO:function(n,e,t){"use strict";t.r(e);var o=t("0Owb"),a=t("q1tI"),r=t.n(a),s=(t("B2uJ"),t("+su7"),t("qOys"),t("5Yjd")),c=t.n(s),i=r.a.memo((function(){var n=t("K+nK"),e=n(t("q1tI")),o=n(t("oGXw")),a=function(){return e["default"].createElement(o["default"],null)};return e["default"].createElement(a)}));e["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u6309\u94ae"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u6309\u94ae"},r.a.createElement("span",{className:"icon icon-link"})),"\u6309\u94ae")),r.a.createElement(c.a,Object(o["a"])({source:{tsx:"import React, { FC, useState, Fragment } from 'react';\nimport { Button, Divider, Row, Col, message, Space } from 'antd';\nimport { StepForwardOutlined, UpCircleOutlined } from '@ant-design/icons';\nimport copy from 'copy-to-clipboard';\nimport {\n  AnyLayer,\n  nodeToGroup,\n  nodeToSketchSymbol,\n  GroupLayoutType,\n} from 'html2sketch';\nimport Footer, { ActionType } from './Footer';\nimport { generateSymbolName } from './utils/symbolName';\n\n/**\n * Button demo\n */\nconst ButtonSymbolDemo: FC = () => {\n  const [json, setJSON] = useState<object>();\n  const groupLayout = 'LEFT_TO_RIGHT';\n  const typeList = [\n    { type: 'default' },\n    { type: 'primary' },\n    { type: 'disabled' },\n    { type: 'dashed' },\n    { type: 'ghost' },\n    { type: 'default', icon: <StepForwardOutlined /> },\n    { type: 'primary', icon: <UpCircleOutlined /> },\n    { type: 'text' },\n    { type: 'link' },\n    { type: 'primary', danger: true },\n    { type: 'default', danger: true },\n    { type: 'dashed', danger: true },\n    { type: 'text', danger: true },\n  ];\n\n  const buttonList = [\n    typeList.map((i) => ({ ...i, size: 'default' })),\n    typeList.map((i) => ({ ...i, size: 'small' })),\n    typeList.map((i) => ({ ...i, size: 'large' })),\n  ];\n\n  const transformFunc = async (\n    transferFn: (node: Element) => Promise<Object>,\n  ) => {\n    try {\n      const els = document.getElementsByClassName('button');\n      const buttons: Object[] = [];\n\n      const list = Array.from(els);\n\n      for (let i = 0; i < list.length; i++) {\n        const sketchBtn = await transferFn(list[i]);\n        buttons.push(sketchBtn);\n      }\n\n      console.log('-------\u8f6c\u6362\u7ed3\u675f--------');\n      console.log(buttons);\n\n      copy(JSON.stringify(buttons));\n      message.success('\u8f6c\u6362\u6210\u529f\ud83c\udf89\u5df2\u590d\u5236\u5230\u526a\u5207\u677f');\n      setJSON(buttons);\n    } catch (e) {\n      message.error('\u89e3\u6790\u5931\u8d25,\u914d\u7f6e\u9879\u53ef\u80fd\u5b58\u5728\u9519\u8bef!');\n      console.error(e);\n    }\n  };\n\n  const actionList: ActionType[] = [\n    {\n      text: '\u8f6c\u6362\u4e3a Group',\n      type: 'default',\n      onClick: () => {\n        transformFunc(async (node) => {\n          return (await nodeToGroup(node)).toSketchJSON();\n        });\n      },\n    },\n    {\n      text: '\u8f6c\u6362\u4e3a Symbol',\n      type: 'primary',\n      onClick: () => {\n        transformFunc(async (node) => {\n          const symbolLayout = node.getAttribute('layout') as GroupLayoutType;\n\n          const symbol = await nodeToSketchSymbol(node, {\n            symbolLayout: symbolLayout || undefined,\n            handleSymbol: (symbol) => {\n              symbol.name = node.getAttribute('symbol-name') || 'symbol';\n              const renameBG = (layer: AnyLayer) => {\n                if (layer.layers) {\n                  layer.layers.forEach(renameBG);\n                }\n\n                if (layer?.name?.includes('ant-btn')) {\n                  layer.name = '\u80cc\u666f';\n                }\n              };\n              symbol.layers.forEach(renameBG);\n            },\n          });\n\n          return symbol.toSketchJSON();\n        });\n      },\n    },\n  ];\n\n  const group = ['\u9ed8\u8ba4', '\u5c0f', '\u5927'];\n  return (\n    <div>\n      <Row>\n        {buttonList.map((list, sizeIndex) => {\n          return (\n            <Fragment key={sizeIndex}>\n              <Col key={sizeIndex}>\n                <Space align=\"start\">\n                  <div style={{ width: 32 }}>{group[sizeIndex]}</div>\n                  <Row gutter={[8, 12]}>\n                    {list.map((button, index) => {\n                      const { type, size, danger, icon } = button;\n                      return (\n                        <Col key={index}>\n                          <Button\n                            className=\"button\"\n                            icon={icon}\n                            symbol-name={generateSymbolName({\n                              type,\n                              size,\n                              typeIndex: index + 1,\n                              sizeIndex: sizeIndex + 1,\n                              component: 'button',\n                              componentIndex: 1,\n                              content: 'general',\n                              contentIndex: 1,\n                              suffix: danger ? '-Danger' : undefined,\n                            })}\n                            layout={groupLayout}\n                            // @ts-ignore\n                            type={type}\n                            danger={danger}\n                            disabled={type === 'disabled'}\n                            // @ts-ignore\n                            size={size}\n                          >\n                            \u6587\u672c\n                          </Button>\n                        </Col>\n                      );\n                    })}\n                  </Row>\n                </Space>\n              </Col>\n              {sizeIndex === buttonList.length - 1 ? null : <Divider dashed />}\n            </Fragment>\n          );\n        })}\n      </Row>\n      <Footer json={json} actions={actionList} />\n    </div>\n  );\n};\n\nexport default ButtonSymbolDemo;\n",jsx:"import React, { useState, Fragment } from 'react';\nimport { Button, Divider, Row, Col, message, Space } from 'antd';\nimport { StepForwardOutlined, UpCircleOutlined } from '@ant-design/icons';\nimport copy from 'copy-to-clipboard';\nimport { nodeToGroup, nodeToSketchSymbol } from 'html2sketch';\nimport Footer from './Footer';\nimport { generateSymbolName } from './utils/symbolName';\n/**\n * Button demo\n */\n\nconst ButtonSymbolDemo = () => {\n  const [json, setJSON] = useState();\n  const groupLayout = 'LEFT_TO_RIGHT';\n  const typeList = [\n    {\n      type: 'default',\n    },\n    {\n      type: 'primary',\n    },\n    {\n      type: 'disabled',\n    },\n    {\n      type: 'dashed',\n    },\n    {\n      type: 'ghost',\n    },\n    {\n      type: 'default',\n      icon: <StepForwardOutlined />,\n    },\n    {\n      type: 'primary',\n      icon: <UpCircleOutlined />,\n    },\n    {\n      type: 'text',\n    },\n    {\n      type: 'link',\n    },\n    {\n      type: 'primary',\n      danger: true,\n    },\n    {\n      type: 'default',\n      danger: true,\n    },\n    {\n      type: 'dashed',\n      danger: true,\n    },\n    {\n      type: 'text',\n      danger: true,\n    },\n  ];\n  const buttonList = [\n    typeList.map((i) => ({ ...i, size: 'default' })),\n    typeList.map((i) => ({ ...i, size: 'small' })),\n    typeList.map((i) => ({ ...i, size: 'large' })),\n  ];\n\n  const transformFunc = async (transferFn) => {\n    try {\n      const els = document.getElementsByClassName('button');\n      const buttons = [];\n      const list = Array.from(els);\n\n      for (let i = 0; i < list.length; i++) {\n        const sketchBtn = await transferFn(list[i]);\n        buttons.push(sketchBtn);\n      }\n\n      console.log('-------\u8f6c\u6362\u7ed3\u675f--------');\n      console.log(buttons);\n      copy(JSON.stringify(buttons));\n      message.success('\u8f6c\u6362\u6210\u529f\ud83c\udf89\u5df2\u590d\u5236\u5230\u526a\u5207\u677f');\n      setJSON(buttons);\n    } catch (e) {\n      message.error('\u89e3\u6790\u5931\u8d25,\u914d\u7f6e\u9879\u53ef\u80fd\u5b58\u5728\u9519\u8bef!');\n      console.error(e);\n    }\n  };\n\n  const actionList = [\n    {\n      text: '\u8f6c\u6362\u4e3a Group',\n      type: 'default',\n      onClick: () => {\n        transformFunc(async (node) => {\n          return (await nodeToGroup(node)).toSketchJSON();\n        });\n      },\n    },\n    {\n      text: '\u8f6c\u6362\u4e3a Symbol',\n      type: 'primary',\n      onClick: () => {\n        transformFunc(async (node) => {\n          const symbolLayout = node.getAttribute('layout');\n          const symbol = await nodeToSketchSymbol(node, {\n            symbolLayout: symbolLayout || undefined,\n            handleSymbol: (symbol) => {\n              symbol.name = node.getAttribute('symbol-name') || 'symbol';\n\n              const renameBG = (layer) => {\n                if (layer.layers) {\n                  layer.layers.forEach(renameBG);\n                }\n\n                if (layer?.name?.includes('ant-btn')) {\n                  layer.name = '\u80cc\u666f';\n                }\n              };\n\n              symbol.layers.forEach(renameBG);\n            },\n          });\n          return symbol.toSketchJSON();\n        });\n      },\n    },\n  ];\n  const group = ['\u9ed8\u8ba4', '\u5c0f', '\u5927'];\n  return (\n    <div>\n      <Row>\n        {buttonList.map((list, sizeIndex) => {\n          return (\n            <Fragment key={sizeIndex}>\n              <Col key={sizeIndex}>\n                <Space align=\"start\">\n                  <div\n                    style={{\n                      width: 32,\n                    }}\n                  >\n                    {group[sizeIndex]}\n                  </div>\n                  <Row gutter={[8, 12]}>\n                    {list.map((button, index) => {\n                      const { type, size, danger, icon } = button;\n                      return (\n                        <Col key={index}>\n                          <Button\n                            className=\"button\"\n                            icon={icon}\n                            symbol-name={generateSymbolName({\n                              type,\n                              size,\n                              typeIndex: index + 1,\n                              sizeIndex: sizeIndex + 1,\n                              component: 'button',\n                              componentIndex: 1,\n                              content: 'general',\n                              contentIndex: 1,\n                              suffix: danger ? '-Danger' : undefined,\n                            })}\n                            layout={groupLayout} // @ts-ignore\n                            type={type}\n                            danger={danger}\n                            disabled={type === 'disabled'} // @ts-ignore\n                            size={size}\n                          >\n                            \u6587\u672c\n                          </Button>\n                        </Col>\n                      );\n                    })}\n                  </Row>\n                </Space>\n              </Col>\n              {sizeIndex === buttonList.length - 1 ? null : <Divider dashed />}\n            </Fragment>\n          );\n        })}\n      </Row>\n      <Footer json={json} actions={actionList} />\n    </div>\n  );\n};\n\nexport default ButtonSymbolDemo;\n"}},{path:"/_demos/button",CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.8.0","@ant-design/icons":"4.2.2","copy-to-clipboard":"3.3.1",html2sketch:"0.4.6","react-json-view":"1.19.1"},files:{"Footer.tsx":{path:"./Footer",content:"import React, { FC, useState } from 'react';\nimport { Button, Row, Col, Card, Divider, Space } from 'antd';\nimport ReactJson from 'react-json-view';\n\nimport { ButtonType } from 'antd/es/button';\n\nexport type ActionType = {\n  text: string;\n  type?: ButtonType;\n  onClick: React.MouseEventHandler<HTMLElement>;\n};\n\ninterface FooterProps {\n  actions: ActionType[];\n  json?: object;\n}\nconst Footer: FC<FooterProps> = ({ actions, json }) => {\n  const [showJSON, setShowJSON] = useState(false);\n\n  return (\n    <>\n      <Divider dashed />\n      <Row>\n        <Col span={24}>\n          <Row justify={'space-between'}>\n            <Col>\n              <Button\n                disabled={!json}\n                onClick={() => {\n                  setShowJSON(!showJSON);\n                }}\n              >\n                {showJSON ? '\u9690\u85cf' : '\u663e\u793a'} JSON\n              </Button>\n            </Col>\n            <Col>\n              <Space>\n                {actions.map((action) => (\n                  <Button\n                    key={action.text}\n                    type={action.type}\n                    onClick={action.onClick}\n                  >\n                    {action.text}\n                  </Button>\n                ))}\n              </Space>\n            </Col>\n          </Row>\n        </Col>\n        {showJSON ? (\n          <Col span={24}>\n            <Card>\n              <ReactJson name={'Sketch JSON'} src={json || {}} />\n            </Card>\n          </Col>\n        ) : null}\n      </Row>\n    </>\n  );\n};\n\nexport default Footer;\n"},"utils/symbolName.ts":{path:"./utils/symbolName",content:"const firstUpperCase = (str: string) => {\n  return str.replace(/\\b(\\w)(\\w*)/g, function ($0, $1, $2) {\n    return $1.toUpperCase() + $2.toLowerCase();\n  });\n};\n\n/**\n * \u751f\u6210 symbol \u540d\u79f0\n **/\nexport const generateSymbolName = (params: {\n  size: string;\n  type: string;\n  component: string;\n  content: string;\n  sizeIndex: number;\n  typeIndex: number;\n  componentIndex: number;\n  contentIndex: number;\n  suffix?: string;\n  symbolName?: string;\n}) => {\n  const {\n    content,\n    component,\n    size,\n    type,\n    contentIndex,\n    componentIndex,\n    sizeIndex,\n    typeIndex,\n    suffix,\n    symbolName,\n  } = params;\n\n  if (symbolName) return symbolName;\n\n  const contentName = contentIndex + '.' + firstUpperCase(content);\n  const componentName = componentIndex + '.' + firstUpperCase(component);\n  const sizeName = sizeIndex + '.' + firstUpperCase(size);\n  const typeName = typeIndex + '.' + firstUpperCase(type);\n  return `${contentName}/${componentName}/${sizeName}/${typeName}${\n    suffix ? suffix : ''\n  }`;\n};\n"}}}),r.a.createElement(i,null)))}},oGXw:function(n,e,t){"use strict";t.r(e);t("qNb/");var o=t("PArb"),a=(t("Y2jk"),t("zeV3")),r=(t("Jmwx"),t("BMrR")),s=(t("rO+z"),t("kPKH")),c=(t("L/Qf"),t("2/Rp")),i=t("WmNS"),l=t.n(i),m=(t("8/o9"),t("tsqr")),u=t("9og8"),d=t("k1fw"),p=t("tJVT"),y=t("q1tI"),b=t.n(y),f={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 010 33.9M694 864h64a8 8 0 008-8V168a8 8 0 00-8-8h-64a8 8 0 00-8 8v688a8 8 0 008 8"}}]},name:"step-forward",theme:"outlined"},g=f,h=t("6VBw"),x=function(n,e){return y["createElement"](h["a"],Object.assign({},n,{ref:e,icon:g}))};x.displayName="StepForwardOutlined";var C=y["forwardRef"](x),w=t("Llbl"),O=t("+QRC"),S=t.n(O),k=t("/7QA"),v=(t("EpIQ"),t("bx4M")),N=t("ovOe"),j=t.n(N),E=n=>{var e=n.actions,t=n.json,i=Object(y["useState"])(!1),l=Object(p["a"])(i,2),m=l[0],u=l[1];return b.a.createElement(b.a.Fragment,null,b.a.createElement(o["a"],{dashed:!0}),b.a.createElement(r["a"],null,b.a.createElement(s["a"],{span:24},b.a.createElement(r["a"],{justify:"space-between"},b.a.createElement(s["a"],null,b.a.createElement(c["a"],{disabled:!t,onClick:()=>{u(!m)}},m?"\u9690\u85cf":"\u663e\u793a"," JSON")),b.a.createElement(s["a"],null,b.a.createElement(a["b"],null,e.map((n=>b.a.createElement(c["a"],{key:n.text,type:n.type,onClick:n.onClick},n.text))))))),m?b.a.createElement(s["a"],{span:24},b.a.createElement(v["a"],null,b.a.createElement(j.a,{name:"Sketch JSON",src:t||{}}))):null))},I=E,z=n=>n.replace(/\b(\w)(\w*)/g,(function(n,e,t){return e.toUpperCase()+t.toLowerCase()})),T=n=>{var e=n.content,t=n.component,o=n.size,a=n.type,r=n.contentIndex,s=n.componentIndex,c=n.sizeIndex,i=n.typeIndex,l=n.suffix,m=n.symbolName;if(m)return m;var u=r+"."+z(e),d=s+"."+z(t),p=c+"."+z(o),y=i+"."+z(a);return"".concat(u,"/").concat(d,"/").concat(p,"/").concat(y).concat(l||"")},L=()=>{var n=Object(y["useState"])(),e=Object(p["a"])(n,2),t=e[0],i=e[1],f="LEFT_TO_RIGHT",g=[{type:"default"},{type:"primary"},{type:"disabled"},{type:"dashed"},{type:"ghost"},{type:"default",icon:b.a.createElement(C,null)},{type:"primary",icon:b.a.createElement(w["a"],null)},{type:"text"},{type:"link"},{type:"primary",danger:!0},{type:"default",danger:!0},{type:"dashed",danger:!0},{type:"text",danger:!0}],h=[g.map((n=>Object(d["a"])(Object(d["a"])({},n),{},{size:"default"}))),g.map((n=>Object(d["a"])(Object(d["a"])({},n),{},{size:"small"}))),g.map((n=>Object(d["a"])(Object(d["a"])({},n),{},{size:"large"})))],x=function(){var n=Object(u["a"])(l.a.mark((function n(e){var t,o,a,r,s;return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:n.prev=0,t=document.getElementsByClassName("button"),o=[],a=Array.from(t),r=0;case 5:if(!(r<a.length)){n.next=13;break}return n.next=8,e(a[r]);case 8:s=n.sent,o.push(s);case 10:r++,n.next=5;break;case 13:console.log("-------\u8f6c\u6362\u7ed3\u675f--------"),console.log(o),S()(JSON.stringify(o)),m["b"].success("\u8f6c\u6362\u6210\u529f\ud83c\udf89\u5df2\u590d\u5236\u5230\u526a\u5207\u677f"),i(o),n.next=24;break;case 20:n.prev=20,n.t0=n["catch"](0),m["b"].error("\u89e3\u6790\u5931\u8d25,\u914d\u7f6e\u9879\u53ef\u80fd\u5b58\u5728\u9519\u8bef!"),console.error(n.t0);case 24:case"end":return n.stop()}}),n,null,[[0,20]])})));return function(e){return n.apply(this,arguments)}}(),O=[{text:"\u8f6c\u6362\u4e3a Group",type:"default",onClick:()=>{x(function(){var n=Object(u["a"])(l.a.mark((function n(e){return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(k["nodeToGroup"])(e);case 2:return n.abrupt("return",n.sent.toSketchJSON());case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}},{text:"\u8f6c\u6362\u4e3a Symbol",type:"primary",onClick:()=>{x(function(){var n=Object(u["a"])(l.a.mark((function n(e){var t,o;return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.getAttribute("layout"),n.next=3,Object(k["nodeToSketchSymbol"])(e,{symbolLayout:t||void 0,handleSymbol:n=>{n.name=e.getAttribute("symbol-name")||"symbol";var t=n=>{var e;n.layers&&n.layers.forEach(t),(null===n||void 0===n||null===(e=n.name)||void 0===e?void 0:e.includes("ant-btn"))&&(n.name="\u80cc\u666f")};n.layers.forEach(t)}});case 3:return o=n.sent,n.abrupt("return",o.toSketchJSON());case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}}],v=["\u9ed8\u8ba4","\u5c0f","\u5927"];return b.a.createElement("div",null,b.a.createElement(r["a"],null,h.map(((n,e)=>b.a.createElement(y["Fragment"],{key:e},b.a.createElement(s["a"],{key:e},b.a.createElement(a["b"],{align:"start"},b.a.createElement("div",{style:{width:32}},v[e]),b.a.createElement(r["a"],{gutter:[8,12]},n.map(((n,t)=>{var o=n.type,a=n.size,r=n.danger,i=n.icon;return b.a.createElement(s["a"],{key:t},b.a.createElement(c["a"],{className:"button",icon:i,"symbol-name":T({type:o,size:a,typeIndex:t+1,sizeIndex:e+1,component:"button",componentIndex:1,content:"general",contentIndex:1,suffix:r?"-Danger":void 0}),layout:f,type:o,danger:r,disabled:"disabled"===o,size:a},"\u6587\u672c"))}))))),e===h.length-1?null:b.a.createElement(o["a"],{dashed:!0}))))),b.a.createElement(I,{json:t,actions:O}))};e["default"]=L}}]);