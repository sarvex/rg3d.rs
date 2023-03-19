(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{321:function(e,t,r){"use strict";r.r(t);var n=r(15),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Fyrox is an "),t("a",{attrs:{href:"https://github.com/FyroxEngine/Fyrox",target:"_blank",rel:"noopener noreferrer"}},[e._v("open-source"),t("OutboundLink")],1),e._v(" Rust game engine with lots of out-of-box\ngame-ready features and a full-featured editor. This week was mostly dedicated to adding Android support\nand fixing annoying bugs.")]),e._v(" "),t("h2",{attrs:{id:"basic-android-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-android-support"}},[e._v("#")]),e._v(" Basic Android Support")]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/twif17/android.gif",alt:"platformer on android"}})]),e._v(" "),t("p",[e._v("Android support was requested "),t("a",{attrs:{href:"https://github.com/FyroxEngine/Fyrox/issues/175",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple times"),t("OutboundLink")],1),e._v(" already\nand after ~1.5 years from the first request it is finally added. It is not fully complete yet, because\na "),t("a",{attrs:{href:"https://github.com/FyroxEngine/Fyrox/issues/435",target:"_blank",rel:"noopener noreferrer"}},[e._v("separate sound backend"),t("OutboundLink")],1),e._v(" should be added to\n"),t("code",[e._v("fyrox-template")]),e._v(", but it is already usable. Current renderer implementation is not great for mobile\ndevices, because it uses graphics rendering techniques that are PC-oriented, so rendering performance is\nquite bad if you use complex 3D graphics. However it is more or less fine on 2D graphics. There's a separate\n"),t("a",{attrs:{href:"https://github.com/FyroxEngine/Fyrox/issues/434",target:"_blank",rel:"noopener noreferrer"}},[e._v("task"),t("OutboundLink")],1),e._v(" about writing a separate, lightweight renderer for\nmobile devices. Keep in mind, that you need to have a relatively new device (2015+), that supports\nOpenGL ES 3.0 to get the engine working on mobile devices.")]),e._v(" "),t("h2",{attrs:{id:"lightmapper-fixes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lightmapper-fixes"}},[e._v("#")]),e._v(" Lightmapper Fixes")]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/twif17/lightmap.png",alt:"ligthmap"}})]),e._v(" "),t("p",[e._v("As you might know, Fyrox has built-in lightmapper and it is integrated in the editor. For quite a long time,\nthere was a bug that corrupted GPU vertex buffers when preparing second UV map for light maps. Which resulted\nin weird graphical artifacts. Also, when saving a scene with light map, node handles weren't correctly remapped\nthus leading to panic when trying to load such scene. Now these bugs are fixed you can use lightmapper normally.")]),e._v(" "),t("h2",{attrs:{id:"hdr-fixes-on-opengl-es"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hdr-fixes-on-opengl-es"}},[e._v("#")]),e._v(" HDR Fixes on OpenGL ES")]),e._v(" "),t("p",[e._v("For about a year, graphics looked pale on WebAssembly compared to PC. That's because of differences between\nsRGB frame buffers behavior on OpenGL and OpenGL ES. sRGB frame buffers on OpenGL does not change input\nvalues from shader and write values as is (unless you turn sRGB conversion manually) and convert them to\nlinear when reading from sRGB textures. On OpenGL ES, however, such conversion is on by default in both\nways and it led to pale-colored output image on platforms such as WebAssembly.")]),e._v(" "),t("h2",{attrs:{id:"full-list-of-changes-in-random-order"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-list-of-changes-in-random-order"}},[e._v("#")]),e._v(" Full List of Changes in Random Order")]),e._v(" "),t("ul",[t("li",[e._v("Basic android support")]),e._v(" "),t("li",[e._v("Correct window and OpenGL context initialization for all platforms")]),e._v(" "),t("li",[t("code",[e._v("fyrox-template")]),e._v(" improvements to generate Android executors")]),e._v(" "),t("li",[e._v("Fixed incorrect sRGB conversion on WebAssembly and Android (OpenGL ES)")]),e._v(" "),t("li",[e._v("Fixed multiple lightmapper issues and make it work correctly in the editor.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);