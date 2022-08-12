"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ Hero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/future/image.js
var future_image = __webpack_require__(1608);
var image_default = /*#__PURE__*/__webpack_require__.n(future_image);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "prism-react-renderer"
var external_prism_react_renderer_ = __webpack_require__(7096);
var external_prism_react_renderer_default = /*#__PURE__*/__webpack_require__.n(external_prism_react_renderer_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Button.jsx



const styles = {
    primary: "rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500",
    secondary: "rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
};
function Button({ variant ="primary" , className , href , ...props }) {
    className = external_clsx_default()(styles[variant], className);
    return href ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        className: className,
        ...props
    }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: className,
        ...props
    });
}

;// CONCATENATED MODULE: ./src/components/HeroBackground.jsx


function HeroBackground(props) {
    let id = (0,external_react_.useId)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 668 1069",
        width: 668,
        height: 1069,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: `${id}-clip-path`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        transform: "rotate(-180 334 534.4)",
                        d: "M0 0h668v1068.8H0z"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                opacity: ".4",
                clipPath: `url(#${id}-clip-path)`,
                strokeWidth: 4,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        opacity: ".3",
                        d: "M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "83.5",
                        cy: "384.1",
                        r: "10.438",
                        transform: "rotate(-180 83.5 384.1)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "83.5",
                        cy: "200.399",
                        r: "10.438",
                        transform: "rotate(-180 83.5 200.399)",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "83.5",
                        cy: "81.412",
                        r: "10.438",
                        transform: "rotate(-180 83.5 81.412)",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "183.699",
                        cy: "375.75",
                        r: "10.438",
                        transform: "rotate(-180 183.699 375.75)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "183.699",
                        cy: "563.625",
                        r: "10.438",
                        transform: "rotate(-180 183.699 563.625)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "384.1",
                        cy: "651.3",
                        r: "10.438",
                        transform: "rotate(-180 384.1 651.3)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "484.301",
                        cy: "574.062",
                        r: "10.438",
                        transform: "rotate(-180 484.301 574.062)",
                        fill: "#0EA5E9",
                        fillOpacity: ".42",
                        stroke: "#0EA5E9"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "384.1",
                        cy: "749.412",
                        r: "10.438",
                        transform: "rotate(-180 384.1 749.412)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "384.1",
                        cy: "1027.05",
                        r: "10.438",
                        transform: "rotate(-180 384.1 1027.05)",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "283.9",
                        cy: "924.763",
                        r: "10.438",
                        transform: "rotate(-180 283.9 924.763)",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "183.699",
                        cy: "870.487",
                        r: "10.438",
                        transform: "rotate(-180 183.699 870.487)",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "283.9",
                        cy: "738.975",
                        r: "10.438",
                        transform: "rotate(-180 283.9 738.975)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "83.5",
                        cy: "695.138",
                        r: "10.438",
                        transform: "rotate(-180 83.5 695.138)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "83.5",
                        cy: "484.3",
                        r: "10.438",
                        transform: "rotate(-180 83.5 484.3)",
                        fill: "#0EA5E9",
                        fillOpacity: ".42",
                        stroke: "#0EA5E9"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "484.301",
                        cy: "432.112",
                        r: "10.438",
                        transform: "rotate(-180 484.301 432.112)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "584.5",
                        cy: "432.112",
                        r: "10.438",
                        transform: "rotate(-180 584.5 432.112)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "584.5",
                        cy: "642.95",
                        r: "10.438",
                        transform: "rotate(-180 584.5 642.95)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "484.301",
                        cy: "851.699",
                        r: "10.438",
                        transform: "rotate(-180 484.301 851.699)",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: "384.1",
                        cy: "256.763",
                        r: "10.438",
                        transform: "rotate(-180 384.1 256.763)",
                        stroke: "#334155"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/images/blur-cyan.png
/* harmony default export */ const blur_cyan = ({"src":"/_next/static/media/blur-cyan.d28a5585.png","height":1186,"width":1186,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAApUlEQVR42k2PwQ6CMBBEdxsJXuCGwgES6gfo/3+G1QAxYozeDKVw0HhztgHDJC/ZZqazLc0K2pGLxqmiHlRw/zItldW90ie7Lo2NBZmzalAkWjU9a9OJuQW7iQ0IqXVMubGqPHaxGNrYg1CaToMoRTPlZ6tgzoG9gNkHssphzfXFOIRSOxnAJn7F480kSmsnj5RQ5MGcXEbcXuo2MirBwPT8/L/5A88eZF6HfysDAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/images/blur-indigo.png
/* harmony default export */ const blur_indigo = ({"src":"/_next/static/media/blur-indigo.b752cf77.png","height":1134,"width":1132,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEW9wf+8u/m1uPy6tfuotv+kuP+rs/6rsverrv+dsf6erv2ZsfqPmP2Qlv2OlvuPlfuNlfaLlfiLlPiLlPeHkfuHkfqHkfmGkPmGkPiFkPmFkPeEkPiEkPaCjPiBjPmBjPiBjPiBi/iBjPiBjPeBi/iBi/eBjPeBjPeBjPeBi/eAjPh020NNAAAAK3RSTlMAAAAAAAAAAAAAAAABAQEBAQEBAQMDAwMDAwMDAwkJCQ8PEBAQEBgZJCQwNtSMpgAAAEFJREFUeNoFQMkNwCAMs3EQx7P7z9hPDxRRSEVVNd4+LfdOlnFarUVYaDq6kQylhABAyMyI7ZdWxl7zde2J+J7hP2EtGB3Aqjb5AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/components/Hero.jsx









const codeLanguage = "javascript";
const code = `export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`;
const tabs = [
    {
        name: "cache-advance.config.js",
        isActive: true
    },
    {
        name: "package.json",
        isActive: false
    }, 
];
function TrafficLightsIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 42 10",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "5",
                cy: "5",
                r: "4.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "21",
                cy: "5",
                r: "4.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "37",
                cy: "5",
                r: "4.5"
            })
        ]
    });
}
function Hero() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "py-16 sm:px-2 lg:relative lg:py-20 lg:px-0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative z-10 md:text-center lg:text-left",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: "absolute bottom-full right-full -mr-72 -mb-56 opacity-50",
                                src: blur_cyan,
                                alt: "",
                                width: 530,
                                height: 530,
                                unoptimized: true,
                                priority: true
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent",
                                        children: "Never miss the cache again."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-3 text-2xl tracking-tight text-slate-400",
                                        children: "Cache every single thing your app could ever do ahead of time, so your code never even has to run at all."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mt-8 flex gap-4 md:justify-center lg:justify-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                                href: "/",
                                                children: "Get started"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                                href: "/",
                                                variant: "secondary",
                                                children: "View on GitHub"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative lg:static xl:pl-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(HeroBackground, {
                                    className: "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "absolute -top-64 -right-64",
                                        src: blur_cyan,
                                        alt: "",
                                        width: 530,
                                        height: 530,
                                        unoptimized: true,
                                        priority: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "absolute -bottom-40 -right-44",
                                        src: blur_indigo,
                                        alt: "",
                                        width: 567,
                                        height: 567,
                                        unoptimized: true,
                                        priority: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "pl-4 pt-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TrafficLightsIcon, {
                                                        className: "h-2.5 w-auto stroke-slate-500/30"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mt-4 flex space-x-2 text-xs",
                                                        children: tabs.map((tab)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: external_clsx_default()("flex h-6 rounded-full", tab.isActive ? "bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300" : "text-slate-500"),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: external_clsx_default()("flex items-center rounded-full px-2.5", tab.isActive && "bg-slate-800"),
                                                                    children: tab.name
                                                                })
                                                            }, tab.name))
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "mt-6 flex items-start px-1 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                "aria-hidden": "true",
                                                                className: "select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600",
                                                                children: Array.from({
                                                                    length: code.split("\n").length
                                                                }).map((_, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                                                        children: [
                                                                            (index + 1).toString().padStart(2, "0"),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                                        ]
                                                                    }, index))
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((external_prism_react_renderer_default()), {
                                                                ...external_prism_react_renderer_.defaultProps,
                                                                code: code,
                                                                language: codeLanguage,
                                                                theme: undefined,
                                                                children: ({ className , style , tokens , getLineProps , getTokenProps ,  })=>/*#__PURE__*/ jsx_runtime_.jsx("pre", {
                                                                        className: external_clsx_default()(className, "flex overflow-x-auto pb-6"),
                                                                        style: style,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("code", {
                                                                            className: "px-4",
                                                                            children: tokens.map((line, lineIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    ...getLineProps({
                                                                                        line
                                                                                    }),
                                                                                    children: line.map((token, tokenIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            ...getTokenProps({
                                                                                                token
                                                                                            })
                                                                                        }, tokenIndex))
                                                                                }, lineIndex))
                                                                        })
                                                                    })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 461:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(647);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4079);
/* harmony import */ var _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6067);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(929);
/* harmony import */ var _components_Prose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1104);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8765);
/* harmony import */ var _components_ThemeSelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2651);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__, _components_ThemeSelector__WEBPACK_IMPORTED_MODULE_11__]);
([_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__, _components_ThemeSelector__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const navigation = [
    {
        title: "Introduction",
        links: [
            {
                title: "Getting started",
                href: "/"
            },
            {
                title: "Installation",
                href: "/docs/installation"
            }, 
        ]
    },
    {
        title: "Core concepts",
        links: [
            {
                title: "Understanding caching",
                href: "/docs/understanding-caching"
            },
            {
                title: "Predicting user behavior",
                href: "/docs/predicting-user-behavior"
            },
            {
                title: "Basics of time-travel",
                href: "/docs/basics-of-time-travel"
            },
            {
                title: "Introduction to string theory",
                href: "/docs/introduction-to-string-theory"
            },
            {
                title: "The butterfly effect",
                href: "/docs/the-butterfly-effect"
            }, 
        ]
    },
    {
        title: "Advanced guides",
        links: [
            {
                title: "Writing plugins",
                href: "/docs/writing-plugins"
            },
            {
                title: "Neuralink integration",
                href: "/docs/neuralink-integration"
            },
            {
                title: "Temporal paradoxes",
                href: "/docs/temporal-paradoxes"
            },
            {
                title: "Testing",
                href: "/docs/testing"
            },
            {
                title: "Compile-time caching",
                href: "/docs/compile-time-caching"
            },
            {
                title: "Predictive data generation",
                href: "/docs/predictive-data-generation"
            }, 
        ]
    },
    {
        title: "API reference",
        links: [
            {
                title: "CacheAdvance.predict()",
                href: "/docs/cacheadvance-predict"
            },
            {
                title: "CacheAdvance.flush()",
                href: "/docs/cacheadvance-flush"
            },
            {
                title: "CacheAdvance.revert()",
                href: "/docs/cacheadvance-revert"
            },
            {
                title: "CacheAdvance.regret()",
                href: "/docs/cacheadvance-regret"
            }, 
        ]
    },
    {
        title: "Contributing",
        links: [
            {
                title: "How to contribute",
                href: "/docs/how-to-contribute"
            },
            {
                title: "Architecture guide",
                href: "/docs/architecture-guide"
            },
            {
                title: "Design principles",
                href: "/docs/design-principles"
            }, 
        ]
    }, 
];
function GitHubIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        })
    });
}
function Header({ navigation  }) {
    let { 0: isScrolled , 1: setIsScrolled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function onScroll() {
            setIsScrolled(window.scrollY > 0);
        }
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", onScroll, {
                passive: true
            });
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8", isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mr-6 flex lg:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__/* .MobileNavigation */ .$, {
                    navigation: navigation
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative flex flex-grow basis-0 items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    "aria-label": "Home page",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_6__/* .Logomark */ .c, {
                            className: "h-9 w-9 lg:hidden"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_6__/* .Logo */ .T, {
                            className: "hidden h-9 w-auto fill-slate-700 dark:fill-sky-100 lg:block"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "-my-5 mr-6 sm:mr-8 md:mr-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search__WEBPACK_IMPORTED_MODULE_10__/* .Search */ .o, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThemeSelector__WEBPACK_IMPORTED_MODULE_11__/* .ThemeSelector */ .Y, {
                        className: "relative z-10"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "https://github.com",
                        className: "group",
                        "aria-label": "GitHub",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GitHubIcon, {
                            className: "h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300"
                        })
                    })
                ]
            })
        ]
    });
}
function useTableOfContents(tableOfContents) {
    let { 0: currentSection , 1: setCurrentSection  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tableOfContents[0]?.id);
    let getHeadings = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((tableOfContents)=>{
        return tableOfContents.flatMap((node)=>[
                node.id,
                ...node.children.map((child)=>child.id)
            ]).map((id)=>{
            let el = document.getElementById(id);
            if (!el) return;
            let style = window.getComputedStyle(el);
            let scrollMt = parseFloat(style.scrollMarginTop);
            let top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
            return {
                id,
                top
            };
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (tableOfContents.length === 0) return;
        let headings = getHeadings(tableOfContents);
        function onScroll() {
            let top = window.scrollY;
            let current = headings[0].id;
            for (let heading of headings){
                if (top >= heading.top) {
                    current = heading.id;
                } else {
                    break;
                }
            }
            setCurrentSection(current);
        }
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        onScroll();
        return ()=>{
            window.removeEventListener("scroll", onScroll, {
                passive: true
            });
        };
    }, [
        getHeadings,
        tableOfContents
    ]);
    return currentSection;
}
function Layout({ children , title , tableOfContents  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let isHomePage = router.pathname === "/";
    let allLinks = navigation.flatMap((section)=>section.links);
    let linkIndex = allLinks.findIndex((link)=>link.href === router.pathname);
    let previousPage = allLinks[linkIndex - 1];
    let nextPage = allLinks[linkIndex + 1];
    let section = navigation.find((section)=>section.links.find((link)=>link.href === router.pathname));
    let currentSection = useTableOfContents(tableOfContents);
    function isActive(section) {
        if (section.id === currentSection) {
            return true;
        }
        if (!section.children) {
            return false;
        }
        return section.children.findIndex(isActive) > -1;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                navigation: navigation
            }),
            isHomePage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_5__/* .Hero */ .V, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hidden lg:relative lg:block lg:flex-none",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_8__/* .Navigation */ .W, {
                                        navigation: navigation,
                                        className: "w-64 pr-8 xl:w-72 xl:pr-16"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                children: [
                                    (title || section) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                        className: "mb-9 space-y-1",
                                        children: [
                                            section && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "font-display text-sm font-medium text-sky-500",
                                                children: section.title
                                            }),
                                            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-display text-3xl tracking-tight text-slate-900 dark:text-white",
                                                children: title
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Prose__WEBPACK_IMPORTED_MODULE_9__/* .Prose */ .M, {
                                        children: children
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                className: "mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800",
                                children: [
                                    previousPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                className: "font-display text-sm font-medium text-slate-900 dark:text-white",
                                                children: "Previous"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                className: "mt-1",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: previousPage.href,
                                                    className: "text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            "aria-hidden": "true",
                                                            children: "←"
                                                        }),
                                                        " ",
                                                        previousPage.title
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    nextPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ml-auto text-right",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                className: "font-display text-sm font-medium text-slate-900 dark:text-white",
                                                children: "Next"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                className: "mt-1",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: nextPage.href,
                                                    className: "text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300",
                                                    children: [
                                                        nextPage.title,
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            "aria-hidden": "true",
                                                            children: "→"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            "aria-labelledby": "on-this-page-title",
                            className: "w-56",
                            children: tableOfContents.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        id: "on-this-page-title",
                                        className: "font-display text-sm font-medium text-slate-900 dark:text-white",
                                        children: "On this page"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                                        role: "list",
                                        className: "mt-4 space-y-3 text-sm",
                                        children: tableOfContents.map((section)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: `#${section.id}`,
                                                            className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(isActive(section) ? "text-sky-500" : "font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"),
                                                            children: section.title
                                                        })
                                                    }),
                                                    section.children.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                                                        role: "list",
                                                        className: "mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400",
                                                        children: section.children.map((subSection)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                    href: `#${subSection.id}`,
                                                                    className: isActive(subSection) ? "text-sky-500" : "hover:text-slate-600 dark:hover:text-slate-300",
                                                                    children: subSection.title
                                                                })
                                                            }, subSection.id))
                                                    })
                                                ]
                                            }, section.id))
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Logo),
/* harmony export */   "c": () => (/* binding */ Logomark)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function LogomarkPaths() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
        fill: "none",
        stroke: "#38BDF8",
        strokeLinejoin: "round",
        strokeWidth: 3,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10.308 5L18 17.5 10.308 30 2.615 17.5 10.308 5z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M18 17.5L10.308 5h15.144l7.933 12.5M18 17.5h15.385L25.452 30H10.308L18 17.5z"
            })
        ]
    });
}
function Logomark(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 36 36",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LogomarkPaths, {})
    });
}
function Logo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 227 36",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LogomarkPaths, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M55.96 26.2c-1.027 0-1.973-.173-2.84-.52a6.96 6.96 0 01-2.24-1.5 6.979 6.979 0 01-1.46-2.3c-.347-.893-.52-1.867-.52-2.92 0-1.027.18-1.973.54-2.84a6.71 6.71 0 011.52-2.28 6.922 6.922 0 012.3-1.52 7.48 7.48 0 012.86-.54c.667 0 1.32.093 1.96.28a6.12 6.12 0 011.78.78 5.7 5.7 0 011.4 1.24l-1.88 2.08a6.272 6.272 0 00-1-.82 3.728 3.728 0 00-1.08-.54 3.542 3.542 0 00-1.2-.2 4.14 4.14 0 00-1.62.32 3.991 3.991 0 00-1.3.9 4.197 4.197 0 00-.9 1.38 4.755 4.755 0 00-.32 1.78c0 .667.107 1.273.32 1.82.213.533.513.993.9 1.38.387.373.847.667 1.38.88.547.2 1.147.3 1.8.3a4.345 4.345 0 002.34-.68c.347-.213.653-.46.92-.74l1.46 2.34c-.32.36-.753.687-1.3.98a7.784 7.784 0 01-1.8.7c-.667.16-1.34.24-2.02.24zm6.99-.2l5.48-14h2.68l5.46 14h-3.08l-2.82-7.54c-.08-.213-.18-.487-.3-.82a922.595 922.595 0 00-.68-2.12 13.694 13.694 0 01-.24-.86l.54-.02c-.08.307-.174.627-.28.96-.094.32-.194.653-.3 1-.108.333-.22.66-.34.98-.12.32-.234.633-.34.94L65.91 26h-2.96zm2.54-2.94l.98-2.42h6.42l1 2.42h-8.4zm19.794 3.14c-1.026 0-1.973-.173-2.84-.52a6.96 6.96 0 01-2.24-1.5 6.98 6.98 0 01-1.46-2.3c-.346-.893-.52-1.867-.52-2.92 0-1.027.18-1.973.54-2.84a6.71 6.71 0 011.52-2.28 6.923 6.923 0 012.3-1.52 7.48 7.48 0 012.86-.54c.667 0 1.32.093 1.96.28a6.118 6.118 0 011.78.78c.547.347 1.014.76 1.4 1.24l-1.88 2.08a6.272 6.272 0 00-1-.82 3.728 3.728 0 00-1.08-.54 3.542 3.542 0 00-1.2-.2 4.14 4.14 0 00-1.62.32 3.992 3.992 0 00-1.3.9 4.197 4.197 0 00-.9 1.38 4.755 4.755 0 00-.32 1.78c0 .667.107 1.273.32 1.82.214.533.514.993.9 1.38.387.373.847.667 1.38.88.547.2 1.147.3 1.8.3a4.345 4.345 0 002.34-.68 4.53 4.53 0 00.92-.74l1.46 2.34c-.32.36-.753.687-1.3.98a7.784 7.784 0 01-1.8.7c-.666.16-1.34.24-2.02.24zm17.469-.2V12h3v14h-3zm-8.82 0V12h3v14h-3zm1.2-5.62l.02-2.72h9.14v2.72h-9.16zM110.402 26V12h9.46v2.64h-6.54v8.72h6.68V26h-9.6zm1.4-5.86v-2.56h7.1v2.56h-7.1zM122.437 26l5.48-14h2.68l5.46 14h-3.08l-2.82-7.54c-.08-.213-.18-.487-.3-.82l-.34-1.06-.34-1.06a14.73 14.73 0 01-.24-.86l.54-.02c-.08.307-.173.627-.28.96a63.3 63.3 0 01-.3 1c-.106.333-.22.66-.34.98-.12.32-.233.633-.34.94l-2.82 7.48h-2.96zm2.54-2.94l.98-2.42h6.42l1 2.42h-8.4zM139.023 26V12h5.74c1.027 0 1.953.173 2.78.52.84.333 1.56.813 2.16 1.44a6.097 6.097 0 011.4 2.2c.32.853.48 1.8.48 2.84 0 1.027-.16 1.973-.48 2.84a6.438 6.438 0 01-1.38 2.22 6.394 6.394 0 01-2.16 1.44c-.84.333-1.773.5-2.8.5h-5.74zm3-2.18l-.32-.52h2.96c.6 0 1.14-.1 1.62-.3.48-.213.887-.5 1.22-.86.347-.373.607-.827.78-1.36.173-.533.26-1.127.26-1.78a5.56 5.56 0 00-.26-1.76 3.595 3.595 0 00-.78-1.36 3.323 3.323 0 00-1.22-.86 3.948 3.948 0 00-1.62-.32h-3.02l.38-.48v9.6zM158.671 26l-5.58-14h3.18l2.92 7.58c.16.413.293.78.4 1.1.12.307.22.6.3.88.093.267.18.533.26.8.08.253.16.533.24.84l-.58.02c.107-.413.213-.793.32-1.14.107-.36.227-.733.36-1.12.133-.387.3-.847.5-1.38l2.76-7.58h3.16l-5.62 14h-2.62zm8.114 0l5.48-14h2.68l5.46 14h-3.08l-2.82-7.54c-.08-.213-.18-.487-.3-.82l-.34-1.06-.34-1.06a13.293 13.293 0 01-.24-.86l.54-.02c-.08.307-.173.627-.28.96a63.3 63.3 0 01-.3 1c-.107.333-.22.66-.34.98-.12.32-.233.633-.34.94l-2.82 7.48h-2.96zm2.54-2.94l.98-2.42h6.42l1 2.42h-8.4zM183.371 26V12h2.68l7.74 10.46h-.56c-.054-.413-.1-.813-.14-1.2l-.12-1.2c-.027-.413-.054-.833-.08-1.26-.014-.44-.027-.9-.04-1.38a56.825 56.825 0 01-.02-1.6V12h2.94v14h-2.72l-7.9-10.56.76.02c.066.693.12 1.287.16 1.78a36.623 36.623 0 01.18 2.2c.026.267.04.52.04.76.013.24.02.493.02.76V26h-2.94zm23.175.2c-1.027 0-1.973-.173-2.84-.52-.853-.36-1.6-.86-2.24-1.5a6.979 6.979 0 01-1.46-2.3c-.347-.893-.52-1.867-.52-2.92 0-1.027.18-1.973.54-2.84a6.71 6.71 0 011.52-2.28 6.919 6.919 0 012.3-1.52 7.48 7.48 0 012.86-.54c.667 0 1.32.093 1.96.28a6.12 6.12 0 011.78.78 5.7 5.7 0 011.4 1.24l-1.88 2.08a6.259 6.259 0 00-1-.82 3.721 3.721 0 00-1.08-.54 3.54 3.54 0 00-1.2-.2 4.14 4.14 0 00-1.62.32 3.991 3.991 0 00-1.3.9 4.206 4.206 0 00-.9 1.38 4.76 4.76 0 00-.32 1.78c0 .667.107 1.273.32 1.82.213.533.513.993.9 1.38.387.373.847.667 1.38.88.547.2 1.147.3 1.8.3a4.35 4.35 0 002.34-.68c.347-.213.653-.46.92-.74l1.46 2.34c-.32.36-.753.687-1.3.98a7.773 7.773 0 01-1.8.7c-.667.16-1.34.24-2.02.24zm8.649-.2V12h9.46v2.64h-6.54v8.72h6.68V26h-9.6zm1.4-5.86v-2.56h7.1v2.56h-7.1z"
            })
        ]
    });
}


/***/ }),

/***/ 6067:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ MobileNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1185);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4079);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(929);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function MenuIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "2",
        strokeLinecap: "round",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M4 7h16M4 12h16M4 17h16"
        })
    });
}
function CloseIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "2",
        strokeLinecap: "round",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M5 5l14 14M19 5l-14 14"
        })
    });
}
function MobileNavigation({ navigation  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isOpen) return;
        function onRouteChange() {
            setIsOpen(false);
        }
        router.events.on("routeChangeComplete", onRouteChange);
        router.events.on("routeChangeError", onRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", onRouteChange);
            router.events.off("routeChangeError", onRouteChange);
        };
    }, [
        router,
        isOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                onClick: ()=>setIsOpen(true),
                className: "relative",
                "aria-label": "Open navigation",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuIcon, {
                    className: "h-6 w-6 stroke-slate-500"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
                open: isOpen,
                onClose: setIsOpen,
                className: "fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden",
                "aria-label": "Navigation",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Panel, {
                    className: "min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 dark:bg-slate-900 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>setIsOpen(false),
                                    "aria-label": "Close navigation",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseIcon, {
                                        className: "h-6 w-6 stroke-slate-500"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    className: "ml-6",
                                    "aria-label": "Home page",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_5__/* .Logomark */ .c, {
                                        className: "h-9 w-9"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__/* .Navigation */ .W, {
                            navigation: navigation,
                            className: "mt-5 px-1"
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);




function Navigation({ navigation , className  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("text-base lg:text-sm", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            role: "list",
            className: "space-y-9",
            children: navigation.map((section)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "font-display font-medium text-slate-900 dark:text-white",
                            children: section.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            role: "list",
                            className: "mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200",
                            children: section.links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "relative",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: link.href,
                                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full", link.href === router.pathname ? "font-semibold text-sky-500 before:bg-sky-500" : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"),
                                        children: link.title
                                    })
                                }, link.href))
                        })
                    ]
                }, section.title))
        })
    });
}


/***/ }),

/***/ 1104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ Prose)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function Prose({ as: Component = "div" , className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, "prose prose-slate max-w-none dark:prose-invert dark:text-slate-400", // headings
        "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]", // lead
        "prose-lead:text-slate-500 dark:prose-lead:text-slate-400", // links
        "prose-a:font-semibold dark:prose-a:text-sky-400", // link underline
        "prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]", // pre
        "prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10", // hr
        "dark:prose-hr:border-slate-800"),
        ...props
    });
}


/***/ }),

/***/ 8765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ Search)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "@docsearch/react"
const react_namespaceObject = require("@docsearch/react");
;// CONCATENATED MODULE: ./src/components/Search.jsx






const docSearchConfig = {
    appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
    apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
    indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME
};
function Hit({ hit , children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: hit.url,
        children: children
    });
}
function SearchIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 20 20",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z"
        })
    });
}
function Search() {
    let { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    let { 0: modifierKey , 1: setModifierKey  } = (0,external_react_.useState)();
    const onOpen = (0,external_react_.useCallback)(()=>{
        setIsOpen(true);
    }, [
        setIsOpen
    ]);
    const onClose = (0,external_react_.useCallback)(()=>{
        setIsOpen(false);
    }, [
        setIsOpen
    ]);
    (0,react_namespaceObject.useDocSearchKeyboardEvents)({
        isOpen,
        onOpen,
        onClose
    });
    (0,external_react_.useEffect)(()=>{
        setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl ");
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                type: "button",
                className: "group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 dark:md:bg-slate-800/75 dark:md:ring-inset dark:md:ring-white/5 dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500 lg:w-96",
                onClick: onOpen,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchIcon, {
                        className: "h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 dark:fill-slate-500 md:group-hover:fill-slate-400"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400",
                        children: "Search docs"
                    }),
                    modifierKey && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("kbd", {
                        className: "ml-auto hidden font-medium text-slate-400 dark:text-slate-500 md:block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("kbd", {
                                className: "font-sans",
                                children: modifierKey
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("kbd", {
                                className: "font-sans",
                                children: "K"
                            })
                        ]
                    })
                ]
            }),
            isOpen && /*#__PURE__*/ (0,external_react_dom_namespaceObject.createPortal)(/*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.DocSearchModal, {
                ...docSearchConfig,
                initialScrollY: window.scrollY,
                onClose: onClose,
                hitComponent: Hit,
                navigator: {
                    navigate ({ itemUrl  }) {
                        router_default().push(itemUrl);
                    }
                }
            }), document.body)
        ]
    });
}


/***/ }),

/***/ 2651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ThemeSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const themes = [
    {
        name: "Light",
        value: "light",
        icon: LightIcon
    },
    {
        name: "Dark",
        value: "dark",
        icon: DarkIcon
    },
    {
        name: "System",
        value: "system",
        icon: SystemIcon
    }, 
];
function LightIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
        })
    });
}
function DarkIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
        })
    });
}
function SystemIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
        })
    });
}
function ThemeSelector(props) {
    let { 0: selectedTheme , 1: setSelectedTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (selectedTheme) {
            document.documentElement.setAttribute("data-theme", selectedTheme.value);
        } else {
            setSelectedTheme(themes.find((theme)=>theme.value === document.documentElement.getAttribute("data-theme")));
        }
    }, [
        selectedTheme
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox, {
        as: "div",
        value: selectedTheme,
        onChange: setSelectedTheme,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Label, {
                className: "sr-only",
                children: "Theme"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Button, {
                className: "flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5",
                "aria-label": selectedTheme?.name,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LightIcon, {
                        className: "hidden h-4 w-4 fill-sky-400 [[data-theme=light]_&]:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DarkIcon, {
                        className: "hidden h-4 w-4 fill-sky-400 [[data-theme=dark]_&]:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LightIcon, {
                        className: "hidden h-4 w-4 fill-slate-400 [:not(.dark)[data-theme=system]_&]:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DarkIcon, {
                        className: "hidden h-4 w-4 fill-slate-400 [.dark[data-theme=system]_&]:block"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Options, {
                className: "absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5",
                children: themes.map((theme)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Option, {
                        value: theme,
                        className: ({ active , selected  })=>clsx__WEBPACK_IMPORTED_MODULE_3___default()("flex cursor-pointer select-none items-center rounded-[0.625rem] p-1", {
                                "text-sky-500": selected,
                                "text-slate-900 dark:text-white": active && !selected,
                                "text-slate-700 dark:text-slate-400": !active && !selected,
                                "bg-slate-100 dark:bg-slate-900/40": active
                            }),
                        children: ({ selected  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme.icon, {
                                            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("h-4 w-4", selected ? "fill-sky-400 dark:fill-sky-400" : "fill-slate-400")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "ml-3",
                                        children: theme.name
                                    })
                                ]
                            })
                    }, theme.value))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5272);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(461);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2235);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__, _components_Layout__WEBPACK_IMPORTED_MODULE_3__]);
([_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__, _components_Layout__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function getNodeText(node) {
    let text = "";
    for (let child of node.children ?? []){
        if (typeof child === "string") {
            text += child;
        }
        text += getNodeText(child);
    }
    return text;
}
function collectHeadings(nodes, slugify = (0,_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__.slugifyWithCounter)()) {
    let sections = [];
    for (let node of nodes){
        if (node.name === "h2" || node.name === "h3") {
            let title = getNodeText(node);
            if (title) {
                let id = slugify(title);
                node.attributes.id = id;
                if (node.name === "h3") {
                    if (!sections[sections.length - 1]) {
                        throw new Error("Cannot add `h3` to table of contents without a preceding `h2`");
                    }
                    sections[sections.length - 1].children.push({
                        ...node.attributes,
                        title
                    });
                } else {
                    sections.push({
                        ...node.attributes,
                        title,
                        children: []
                    });
                }
            }
        }
        sections.push(...collectHeadings(node.children ?? [], slugify));
    }
    return sections;
}
function App({ Component , pageProps  }) {
    let title = pageProps.markdoc?.frontmatter.title;
    let pageTitle = pageProps.markdoc?.frontmatter.pageTitle || `${pageProps.markdoc?.frontmatter.title} - Docs`;
    let description = pageProps.markdoc?.frontmatter.description;
    let tableOfContents = pageProps.markdoc?.content ? collectHeadings(pageProps.markdoc.content) : [];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: pageTitle
                    }),
                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .A, {
                title: title,
                tableOfContents: tableOfContents,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 2235:
/***/ ((module) => {

module.exports = require("focus-visible");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("prism-react-renderer");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 5272:
/***/ ((module) => {

module.exports = import("@sindresorhus/slugify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,608], () => (__webpack_exec__(7149)));
module.exports = __webpack_exports__;

})();