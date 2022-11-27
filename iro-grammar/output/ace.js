/*
 * To try in Ace editor, copy and paste into the mode creator
 * here : http://ace.c9.io/tool/mode_creator.html
 */
this.jfasd.y = "dfasdfadsfa"
define(function (require, exports, module) {
    "use strict";
    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    /* --------------------- START ----------------------------- */
    var FlogramHighlightRules = function () {
        this.$rules = {
            "start": [{
                    "token": "constant.numeric",
                    "regex": "(\\b\\d+)"
                },
                {
                    "token": "invalid",
                    "regex": "(\\))"
                },
                {
                    "token": "punctuation",
                    "regex": "(\\\")",
                    "push": "main__1"
                },
                {
                    "token": "keyword",
                    "regex": "([f][n][ ])",
                    "push": "main__2"
                },
                {
                    "token": "keyword",
                    "regex": "(\\[A-Za-z]*.)",
                    "push": "main__3"
                },
                {
                    "token": "text",
                    "regex": "(\\:\\ )",
                    "push": "main__4"
                },
                {
                    "token": "punctuation",
                    "regex": "(\\{)",
                    "push": "main__5"
                },
                {
                    "token": "invalid",
                    "regex": "(\\})"
                },
                {
                    "token": "comment",
                    "regex": "(#.*)"
                },
                {
                    "token": "keyword",
                    "regex": "(addr_of |any |as |bind |bits |bool |break |contract |else|else |equals |export | get |if |iface |is |import |interface |length |list |loop |member |native |set |types |release |return |value_at |this|this. )"
                },
                {
                    "token": "punctuation",
                    "regex": "(true|true |false|false |null|null |zero|zero )"
                },
                {
                    "token": "text",
                    "regex": "(self|self |this|this |break |break)"
                },
                {
                    "token": "punctuation",
                    "regex": "(I8|I8 |I16|I16 |I32|I32 |I64|I64 |U8|U8 |U16|U16 |U32|U32 |U64|U64 |F8|F8 |F16|F16 |F32|F32 |F64|F64 |BOOL|BOOL )"
                },
                {
                    "token": "punctuation",
                    "regex": "(\\b[A-Z|_][A-Z|_][A-Z0-9_]*)"
                },
                {
                    "token": "keyword",
                    "regex": "(object )",
                    "push": "main__6"
                },
                {
                    "token": "keyword",
                    "regex": "(mut )",
                    "push": "main__7"
                },
                {
                    "token": "keyword",
                    "regex": "(enum )",
                    "push": "main__8"
                },
                {
                    "token": "invalid",
                    "regex": "(;)"
                },
                {
                    "token": "punctuation",
                    "regex": "(&|\\||\\*|-|!|/|%?>|<|\\(|\\))"
                },
                {
                    defaultToken: "text",
                }
            ],
            "main__1": [{
                    "token": "punctuation",
                    "regex": "(\\\")",
                    "next": "pop"
                },
                {
                    defaultToken: "text",
                }
            ],
            "main__2": [{
                    "token": "punctuation",
                    "regex": "(\\W|_/g)",
                    "next": "pop"
                },
                {
                    defaultToken: "punctuation",
                }
            ],
            "main__3": [{
                    "token": "keyword",
                    "regex": "(\\()|$\\)",
                    "next": "pop"
                },
                {
                    defaultToken: "keyword",
                }
            ],
            "main__4": [{
                    "token": "punctuation",
                    "regex": "(\\W)",
                    "next": "pop"
                },
                {
                    defaultToken: "punctuation",
                }
            ],
            "main__5": [{
                    "token": "punctuation",
                    "regex": "(\\})",
                    "next": "pop"
                },
                {
                    "token": "constant.numeric",
                    "regex": "(\\b\\d+)"
                },
                {
                    "token": "invalid",
                    "regex": "(\\))"
                },
                {
                    "token": "punctuation",
                    "regex": "(\\\")",
                    "push": "main__1"
                },
                {
                    "token": "keyword",
                    "regex": "([f][n][ ])",
                    "push": "main__2"
                },
                {
                    "token": "keyword",
                    "regex": "(\\[A-Za-z]*.)",
                    "push": "main__3"
                },
                {
                    "token": "text",
                    "regex": "(\\:\\ )",
                    "push": "main__4"
                },
                {
                    "token": "punctuation",
                    "regex": "(\\{)",
                    "push": "main__5"
                },
                {
                    "token": "invalid",
                    "regex": "(\\})"
                },
                {
                    "token": "comment",
                    "regex": "(#.*)"
                },
                {
                    "token": "keyword",
                    "regex": "(addr_of |any |as |bind |bits |bool |break |contract |else|else |equals |export | get |if |iface |is |import |interface |length |list |loop |member |native |set |types |release |return |value_at |this|this. )"
                },
                {
                    "token": "punctuation",
                    "regex": "(true|true |false|false |null|null |zero|zero )"
                },
                {
                    "token": "text",
                    "regex": "(self|self |this|this |break |break)"
                },
                {
                    "token": "punctuation",
                    "regex": "(I8|I8 |I16|I16 |I32|I32 |I64|I64 |U8|U8 |U16|U16 |U32|U32 |U64|U64 |F8|F8 |F16|F16 |F32|F32 |F64|F64 |BOOL|BOOL )"
                },
                {
                    "token": "punctuation",
                    "regex": "(\\b[A-Z|_][A-Z|_][A-Z0-9_]*)"
                },
                {
                    "token": "keyword",
                    "regex": "(object )",
                    "push": "main__6"
                },
                {
                    "token": "keyword",
                    "regex": "(mut )",
                    "push": "main__7"
                },
                {
                    "token": "keyword",
                    "regex": "(enum )",
                    "push": "main__8"
                },
                {
                    "token": "invalid",
                    "regex": "(;)"
                },
                {
                    "token": "punctuation",
                    "regex": "(&|\\||\\*|-|!|/|%?>|<|\\(|\\))"
                },
                {
                    defaultToken: "text",
                }
            ],
            "main__6": [{
                    "token": "text",
                    "regex": "(:)",
                    "next": "pop"
                },
                {
                    defaultToken: "punctuation",
                }
            ],
            "main__7": [{
                    "token": "text",
                    "regex": "( |:)",
                    "next": "pop"
                },
                {
                    defaultToken: "punctuation",
                }
            ],
            "main__8": [{
                    "token": "text",
                    "regex": "( |:)",
                    "next": "pop"
                },
                {
                    defaultToken: "comment",
                }
            ]
        };
        this.normalizeRules();
    };
    /* ------------------------ END ------------------------------ */
    oop.inherits(FlogramHighlightRules, TextHighlightRules);
    exports.FlogramHighlightRules = FlogramHighlightRules;
});