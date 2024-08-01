import { _ as __nuxt_component_0 } from "./nuxt-layout-jMGp9Z4m.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-CqmTSUAg.js";
import { withCtx, createTextVNode, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "vue-router";
import "ufo";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "devalue";
import "@vue/devtools-api";
import "vue3-toastify";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtLayout, { name: "animated" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLayout, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mt-20 md:mt-40 mx-auto p-3 md:p-10 rounded-2xl flex flex-col items-center gap-10 justify-center text-center max-w-[600px] backdrop-blur-sm bg-white/30"${_scopeId2}><h1 class="title text-4xl font-bold leading-10"${_scopeId2}>Добро пожаловать в AuthApp</h1><div class="description text-xl"${_scopeId2}> Fullstack приложение с авторизацией c использованием Nest.js + Postgres, Vue.js + Nuxt.js. </div>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "/login",
                class: "try btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary text-white mt-5"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Попробовать <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"${_scopeId3}></path></svg>`);
                  } else {
                    return [
                      createTextVNode(" Попробовать "),
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        })
                      ]))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mt-20 md:mt-40 mx-auto p-3 md:p-10 rounded-2xl flex flex-col items-center gap-10 justify-center text-center max-w-[600px] backdrop-blur-sm bg-white/30" }, [
                  createVNode("h1", { class: "title text-4xl font-bold leading-10" }, "Добро пожаловать в AuthApp"),
                  createVNode("div", { class: "description text-xl" }, " Fullstack приложение с авторизацией c использованием Nest.js + Postgres, Vue.js + Nuxt.js. "),
                  createVNode(_component_NuxtLink, {
                    to: "/login",
                    class: "try btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary text-white mt-5"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Попробовать "),
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        })
                      ]))
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtLayout, null, {
            default: withCtx(() => [
              createVNode("div", { class: "mt-20 md:mt-40 mx-auto p-3 md:p-10 rounded-2xl flex flex-col items-center gap-10 justify-center text-center max-w-[600px] backdrop-blur-sm bg-white/30" }, [
                createVNode("h1", { class: "title text-4xl font-bold leading-10" }, "Добро пожаловать в AuthApp"),
                createVNode("div", { class: "description text-xl" }, " Fullstack приложение с авторизацией c использованием Nest.js + Postgres, Vue.js + Nuxt.js. "),
                createVNode(_component_NuxtLink, {
                  to: "/login",
                  class: "try btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary text-white mt-5"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Попробовать "),
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      })
                    ]))
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-DhDs76sv.js.map
