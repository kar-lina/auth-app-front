import { _ as __nuxt_component_0 } from "./nuxt-layout-jMGp9Z4m.js";
import { _ as __nuxt_component_2, a as __nuxt_component_3 } from "./Password-D7WskZc-.js";
import { _ as __nuxt_component_1 } from "./OTP-8rgdt3fD.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-CqmTSUAg.js";
import { u as useRouter } from "../server.mjs";
import { u as useAuth } from "./useAuth-BAyGP-af.js";
import { ref, watch, withCtx, mergeProps, unref, createTextVNode, createVNode, withDirectives, isRef, vModelText, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDynamicModelProps, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
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
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const { authenticateUser } = useAuth();
    const showOtp = ref(false);
    const twoFactorAuthenticationCode = ref("");
    const schema = toTypedSchema(
      z.object({
        email: z.string().min(1).email(),
        password: z.string().min(1)
      })
    );
    const { errors, handleSubmit, defineField } = useForm({
      validationSchema: schema
    });
    const onSubmit = handleSubmit(async (values) => {
      var _a, _b;
      const { data, error } = await authenticateUser(
        showOtp ? { ...values, twoFactorAuthenticationCode: twoFactorAuthenticationCode.value } : values
      );
      showOtp.value = ((_a = error.value) == null ? void 0 : _a.statusCode) === 403;
      if (((_b = error.value) == null ? void 0 : _b.statusCode) === 401) twoFactorAuthenticationCode.value = "";
      if (!error.value && data.value) router.push("/profile");
    });
    const [email, emailAttrs] = defineField("email");
    const [password, passwordAttrs] = defineField("password");
    watch([email, password], () => {
      twoFactorAuthenticationCode.value = "";
      showOtp.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_IconsEmail = __nuxt_component_2;
      const _component_IconsPassword = __nuxt_component_3;
      const _component_UiOTP = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      let _temp0, _temp1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "auth" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-5 md:p-10 text-center rounded-xl bg-white"${_scopeId}><h1 class="text-xl md:text-2xl mb-5 md:mb-10"${_scopeId}>Добро пожаловать в AuthApp!</h1><form class="flex flex-col gap-4 md:gap-8"${_scopeId}><div${_scopeId}><label class="input input-bordered flex items-center gap-2 mb-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconsEmail, { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(`<input${ssrRenderAttrs((_temp0 = mergeProps({
              tabindex: "1",
              value: unref(email)
            }, unref(emailAttrs), {
              type: "email",
              class: "grow",
              placeholder: "Email",
              autofocus: "off"
            }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(email)))))}${_scopeId}></label><div class="text-xs text-error text-left pl-4"${_scopeId}>${ssrInterpolate(unref(errors).email)}</div></div><div${_scopeId}><label class="input input-bordered flex items-center gap-2 mb-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconsPassword, null, null, _parent2, _scopeId));
            _push2(`<input${ssrRenderAttrs((_temp1 = mergeProps({
              tabindex: "2",
              value: unref(password)
            }, unref(passwordAttrs), {
              type: "password",
              class: "grow",
              placeholder: "Password"
            }), mergeProps(_temp1, ssrGetDynamicModelProps(_temp1, unref(password)))))}${_scopeId}></label><div class="text-xs text-error text-left pl-4"${_scopeId}>${ssrInterpolate(unref(errors).password)}</div></div>`);
            if (unref(showOtp)) {
              _push2(`<label${_scopeId}><p class="mb-2"${_scopeId}>Введите код из приложения для аутентификации:</p>`);
              _push2(ssrRenderComponent(_component_UiOTP, {
                "digit-count": 6,
                small: "",
                "onUpdate:otp": ($event) => twoFactorAuthenticationCode.value = $event
              }, null, _parent2, _scopeId));
              _push2(`</label>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<input${ssrIncludeBooleanAttr(!unref(twoFactorAuthenticationCode) && unref(showOtp)) ? " disabled" : ""} type="submit" value="Войти" class="btn"${_scopeId}></form><p class="mt-5 md:text-base"${_scopeId}> Нет аккаунта? `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/sign-up",
              class: "link link-primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Зарегистрироваться `);
                } else {
                  return [
                    createTextVNode(" Зарегистрироваться ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-5 md:p-10 text-center rounded-xl bg-white" }, [
                createVNode("h1", { class: "text-xl md:text-2xl mb-5 md:mb-10" }, "Добро пожаловать в AuthApp!"),
                createVNode("form", {
                  class: "flex flex-col gap-4 md:gap-8",
                  onSubmit: unref(onSubmit)
                }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "input input-bordered flex items-center gap-2 mb-1" }, [
                      createVNode(_component_IconsEmail, { class: "h-4 w-4" }),
                      withDirectives(createVNode("input", mergeProps({
                        tabindex: "1",
                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null
                      }, unref(emailAttrs), {
                        type: "email",
                        class: "grow",
                        placeholder: "Email",
                        autofocus: "off"
                      }), null, 16, ["onUpdate:modelValue"]), [
                        [vModelText, unref(email)]
                      ])
                    ]),
                    createVNode("div", { class: "text-xs text-error text-left pl-4" }, toDisplayString(unref(errors).email), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "input input-bordered flex items-center gap-2 mb-1" }, [
                      createVNode(_component_IconsPassword),
                      withDirectives(createVNode("input", mergeProps({
                        tabindex: "2",
                        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null
                      }, unref(passwordAttrs), {
                        type: "password",
                        class: "grow",
                        placeholder: "Password"
                      }), null, 16, ["onUpdate:modelValue"]), [
                        [vModelText, unref(password)]
                      ])
                    ]),
                    createVNode("div", { class: "text-xs text-error text-left pl-4" }, toDisplayString(unref(errors).password), 1)
                  ]),
                  unref(showOtp) ? (openBlock(), createBlock("label", { key: 0 }, [
                    createVNode("p", { class: "mb-2" }, "Введите код из приложения для аутентификации:"),
                    createVNode(_component_UiOTP, {
                      "digit-count": 6,
                      small: "",
                      "onUpdate:otp": ($event) => twoFactorAuthenticationCode.value = $event
                    }, null, 8, ["onUpdate:otp"])
                  ])) : createCommentVNode("", true),
                  createVNode("input", {
                    disabled: !unref(twoFactorAuthenticationCode) && unref(showOtp),
                    type: "submit",
                    value: "Войти",
                    class: "btn"
                  }, null, 8, ["disabled"])
                ], 40, ["onSubmit"]),
                createVNode("p", { class: "mt-5 md:text-base" }, [
                  createTextVNode(" Нет аккаунта? "),
                  createVNode(_component_NuxtLink, {
                    to: "/sign-up",
                    class: "link link-primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Зарегистрироваться ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-BCklXwNj.js.map
