import { _ as __nuxt_component_0 } from "./nuxt-layout-jMGp9Z4m.js";
import { defineComponent, useSSRContext, ref, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderSlot, ssrIncludeBooleanAttr, ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as __nuxt_component_1 } from "./OTP-8rgdt3fD.js";
import { u as useAuth } from "./useAuth-BAyGP-af.js";
import { a as useToastStore, b as useNuxtApp, _ as _export_sfc } from "../server.mjs";
import dayjs from "dayjs";
import "vue-router";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    visible: { type: Boolean },
    id: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
      _push(`<dialog id=""${ssrIncludeBooleanAttr(_ctx.visible) ? " open" : ""} class="modal"><div class="modal-box"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form>`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Modal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const useDate = (date, format = "DD.MM.YYYY") => dayjs(date).format(format);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TwoFA",
  __ssrInlineRender: true,
  setup(__props) {
    const { currentUser, getAuth } = useAuth();
    const { alert } = useToastStore();
    const qrCodeImg = ref("");
    const twoFASecrete = ref("");
    const disable2FAModalOpen = ref(false);
    const twoFactorAuthenticationCode = ref("");
    const disble2fa = async () => {
      if (!twoFactorAuthenticationCode) return;
      try {
        const res = await useNuxtApp().$api("/2fa/turn-off", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            twoFactorAuthenticationCode: twoFactorAuthenticationCode.value
          }
        });
        getAuth();
        alert("Двухфакторная аутентификация отключена", "info");
        disable2FAModalOpen.value = false;
      } catch (error) {
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_tempalte = resolveComponent("tempalte");
      const _component_UiModal = _sfc_main$2;
      const _component_UiOTP = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card max-w-[360px] bg-base-100 shadow-xl" }, _attrs))}><figure><img src="https://www.axiad.com/wp-content/uploads/2022/07/2-Factor-Authentication.jpg" alt="2-Factor-Authentication"></figure><div class="card-body"><h2 class="card-title">Двухэтапная аутентификация!</h2>`);
      if (!((_a = unref(currentUser)) == null ? void 0 : _a.isTwoFactorAuthenticationEnabled)) {
        _push(`<!--[--><p>Для дополнительной защиты аккаунта, включите двухфакторную аутентификацию</p><div class="card-actions justify-end"><button class="btn btn-info">Включить</button></div><!--]-->`);
      } else {
        _push(`<!--[--><p> Двухфаторная аутентификая включена `);
        if (unref(currentUser).twoFactorAuthenticationSecretEnabledAt) {
          _push(ssrRenderComponent(_component_tempalte, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(("useDate" in _ctx ? _ctx.useDate : unref(useDate))(unref(currentUser).twoFactorAuthenticationSecretEnabledAt))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(("useDate" in _ctx ? _ctx.useDate : unref(useDate))(unref(currentUser).twoFactorAuthenticationSecretEnabledAt)), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p><div class="card-actions justify-between mt-2"><button class="btn">Выключить</button><button class="btn btn-info">Показать QR-code</button></div><!--]-->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiModal, {
        id: "2fa-modal",
        visible: !!unref(qrCodeImg)
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center gap-4"${_scopeId}><h1 class="text-xl"${_scopeId}>Настройка приложения аутентификации.</h1><ul class="list list-disc mb-5"${_scopeId}><li${_scopeId}>В приложении Google Authenticator нажмите на значок &quot;+&quot;.</li><li${_scopeId}>Отсканируйте QR-код</li></ul><img${ssrRenderAttr("src", unref(qrCodeImg))}${_scopeId}><div tabindex="0" class="collapse collapse-arrow border-base-300 bg-base-200 border"${_scopeId}><div class="collapse-title text-base"${_scopeId}>Не получается отсканировать QR-код?</div><div class="collapse-content text-sm"${_scopeId}><ol class="list-decimal flex flex-col gap-2 p-4"${_scopeId}><li${_scopeId}> В приложении Google Authenticator нажмите на значок <strong${_scopeId}>+</strong>, а затем выберите <strong${_scopeId}>Ввести ключ настройки</strong>. </li><li${_scopeId}> Укажите адрес электронной почты и этот ключ (пробелы не учитываются): <div${_scopeId}><strong${_scopeId}>${ssrInterpolate(unref(twoFASecrete))}</strong></div></li><li${_scopeId}>Убедитесь, что выбран параметр <strong${_scopeId}>По времени</strong>.</li><li${_scopeId}>Чтобы завершить настройку, нажмите <strong${_scopeId}>Добавить</strong>.</li></ol></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center gap-4" }, [
                createVNode("h1", { class: "text-xl" }, "Настройка приложения аутентификации."),
                createVNode("ul", { class: "list list-disc mb-5" }, [
                  createVNode("li", null, 'В приложении Google Authenticator нажмите на значок "+".'),
                  createVNode("li", null, "Отсканируйте QR-код")
                ]),
                createVNode("img", { src: unref(qrCodeImg) }, null, 8, ["src"]),
                createVNode("div", {
                  tabindex: "0",
                  class: "collapse collapse-arrow border-base-300 bg-base-200 border"
                }, [
                  createVNode("div", { class: "collapse-title text-base" }, "Не получается отсканировать QR-код?"),
                  createVNode("div", { class: "collapse-content text-sm" }, [
                    createVNode("ol", { class: "list-decimal flex flex-col gap-2 p-4" }, [
                      createVNode("li", null, [
                        createTextVNode(" В приложении Google Authenticator нажмите на значок "),
                        createVNode("strong", null, "+"),
                        createTextVNode(", а затем выберите "),
                        createVNode("strong", null, "Ввести ключ настройки"),
                        createTextVNode(". ")
                      ]),
                      createVNode("li", null, [
                        createTextVNode(" Укажите адрес электронной почты и этот ключ (пробелы не учитываются): "),
                        createVNode("div", null, [
                          createVNode("strong", null, toDisplayString(unref(twoFASecrete)), 1)
                        ])
                      ]),
                      createVNode("li", null, [
                        createTextVNode("Убедитесь, что выбран параметр "),
                        createVNode("strong", null, "По времени"),
                        createTextVNode(".")
                      ]),
                      createVNode("li", null, [
                        createTextVNode("Чтобы завершить настройку, нажмите "),
                        createVNode("strong", null, "Добавить"),
                        createTextVNode(".")
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiModal, {
        id: "2fa-enable",
        visible: unref(disable2FAModalOpen)
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-6 items-center text-center"${_scopeId}><p${_scopeId}>Для отключения двухфаторной аутентификации введите код из приложения</p>`);
            _push2(ssrRenderComponent(_component_UiOTP, {
              "digit-count": 6,
              "onUpdate:otp": ($event) => twoFactorAuthenticationCode.value = $event
            }, null, _parent2, _scopeId));
            _push2(`<button${ssrIncludeBooleanAttr(!unref(twoFactorAuthenticationCode)) ? " disabled" : ""} class="btn btn-info"${_scopeId}>Отключить</button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-6 items-center text-center" }, [
                createVNode("p", null, "Для отключения двухфаторной аутентификации введите код из приложения"),
                createVNode(_component_UiOTP, {
                  "digit-count": 6,
                  "onUpdate:otp": ($event) => twoFactorAuthenticationCode.value = $event
                }, null, 8, ["onUpdate:otp"]),
                createVNode("button", {
                  disabled: !unref(twoFactorAuthenticationCode),
                  class: "btn btn-info",
                  onClick: disble2fa
                }, "Отключить", 8, ["disabled"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile/Settings/TwoFA.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_ProfileSettingsTwoFA = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col items-center gap-3 md:gap-5 pt-5 md:pt-20"${_scopeId}><h1 class="title text-4xl leading-10"${_scopeId}>Настройки аккаунта</h1><div class="max-w-[60%] text-center"${_scopeId}> Настройте параметры конфиденциальности и безопасности, чтобы вам было ещё удобнее пользоваться сервисами AuthApp. </div><div class="flex flex-wrap"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ProfileSettingsTwoFA, null, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col items-center gap-3 md:gap-5 pt-5 md:pt-20" }, [
            createVNode("h1", { class: "title text-4xl leading-10" }, "Настройки аккаунта"),
            createVNode("div", { class: "max-w-[60%] text-center" }, " Настройте параметры конфиденциальности и безопасности, чтобы вам было ещё удобнее пользоваться сервисами AuthApp. "),
            createVNode("div", { class: "flex flex-wrap" }, [
              createVNode(_component_ProfileSettingsTwoFA)
            ])
          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  settings as default
};
//# sourceMappingURL=settings-Cwlrj8gG.js.map
