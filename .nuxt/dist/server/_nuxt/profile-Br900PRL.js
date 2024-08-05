import { _ as __nuxt_component_0 } from "./nuxt-layout-BDwzfyRu.js";
import { u as useAuth } from "./useAuth-BAyGP-af.js";
import { defineComponent, withCtx, unref, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "devalue";
import "@vue/devtools-api";
import "vue3-toastify";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const { currentUser } = useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="mt-40 mx-auto p-10 rounded-2xl flex flex-col items-center gap-10 justify-center text-center max-w-[600px] backdrop-blur-sm bg-white/30"${_scopeId}><h1 class="title text-4xl font-bold leading-10"${_scopeId}> Добро пожаловать в AuthApp, ${ssrInterpolate((_a = unref(currentUser)) == null ? void 0 : _a.name)}</h1><div${_scopeId}> Страница находится в разработке. Спасибо за понимание! </div></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-40 mx-auto p-10 rounded-2xl flex flex-col items-center gap-10 justify-center text-center max-w-[600px] backdrop-blur-sm bg-white/30" }, [
                createVNode("h1", { class: "title text-4xl font-bold leading-10" }, " Добро пожаловать в AuthApp, " + toDisplayString((_b = unref(currentUser)) == null ? void 0 : _b.name), 1),
                createVNode("div", null, " Страница находится в разработке. Спасибо за понимание! ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=profile-Br900PRL.js.map
