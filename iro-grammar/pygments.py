from pygments.lexer import RegexLexer, bygroups
from pygments.token import *

import re

__all__=['FlogramLexer']

class FlogramLexer(RegexLexer):
    name = 'Flogram'
    aliases = ['flogram']
    filenames = ['*.flo']
    flags = re.MULTILINE | re.UNICODE

    tokens = {
        'root' : [
            (u'(\\b\\d+)', bygroups(Number)),
            (u'(\\))', bygroups(Generic.Error)),
            (u'(\\\")', bygroups(Punctuation), 'main__1'),
            (u'([f][n][ ])', bygroups(Keyword), 'main__2'),
            (u'(\\[A-Za-z]*.)', bygroups(Keyword), 'main__3'),
            (u'(\\:\\ )', bygroups(String), 'main__4'),
            (u'(\\{)', bygroups(Punctuation), 'main__5'),
            (u'(#.*)', bygroups(Comment)),
            (u'(addr_of |any |as |bind |bits |bool |break |contract |else|else |equals |export | get |if |iface |is |import |interface |length |list |loop |member |native |set |types |release |return |value_at |this|this. )', bygroups(Keyword)),
            (u'(true|true |false|false |null|null |zero|zero )', bygroups(Punctuation)),
            (u'(self|self |this|this |break |break)', bygroups(Literal)),
            (u'(I8|I8 |I16|I16 |I32|I32 |I64|I64 |U8|U8 |U16|U16 |U32|U32 |U64|U64 |F8|F8 |F16|F16 |F32|F32 |F64|F64 |BOOL|BOOL )', bygroups(Generic.Strong)),
            (u'(\\b[A-Z|_][A-Z|_][A-Z0-9_]*)', bygroups(Literal)),
            (u'(object )', bygroups(Keyword), 'main__6'),
            (u'(mut )', bygroups(Keyword), 'main__7'),
            (u'(enum )', bygroups(Keyword), 'main__8'),
            (u'(;)', bygroups(Generic.Error)),
            (u'(&|\\||\\*|-|!|/|%?>|<|\\(|\\))', bygroups(Punctuation)),
            ('(\n|\r|\r\n)', String),
            ('.', String),
        ], 
        'main__1' : [
            ('(\n|\r|\r\n)', String),
            ('.', String),
        ], 
        'main__2' : [
            ('(\n|\r|\r\n)', String),
            ('.', Generic.Strong),
        ], 
        'main__3' : [
            ('(\n|\r|\r\n)', String),
            ('.', Keyword),
        ], 
        'main__4' : [
            ('(\n|\r|\r\n)', String),
            ('.', Generic.Strong),
        ], 
        'main__5' : [
            (u'(\\b\\d+)', bygroups(Number)),
            (u'(\\))', bygroups(Generic.Error)),
            (u'(\\\")', bygroups(Punctuation), 'main__1'),
            (u'([f][n][ ])', bygroups(Keyword), 'main__2'),
            (u'(\\[A-Za-z]*.)', bygroups(Keyword), 'main__3'),
            (u'(\\:\\ )', bygroups(String), 'main__4'),
            (u'(\\{)', bygroups(Punctuation), 'main__5'),
            (u'(#.*)', bygroups(Comment)),
            (u'(addr_of |any |as |bind |bits |bool |break |contract |else|else |equals |export | get |if |iface |is |import |interface |length |list |loop |member |native |set |types |release |return |value_at |this|this. )', bygroups(Keyword)),
            (u'(true|true |false|false |null|null |zero|zero )', bygroups(Punctuation)),
            (u'(self|self |this|this |break |break)', bygroups(Literal)),
            (u'(I8|I8 |I16|I16 |I32|I32 |I64|I64 |U8|U8 |U16|U16 |U32|U32 |U64|U64 |F8|F8 |F16|F16 |F32|F32 |F64|F64 |BOOL|BOOL )', bygroups(Generic.Strong)),
            (u'(\\b[A-Z|_][A-Z|_][A-Z0-9_]*)', bygroups(Literal)),
            (u'(object )', bygroups(Keyword), 'main__6'),
            (u'(mut )', bygroups(Keyword), 'main__7'),
            (u'(enum )', bygroups(Keyword), 'main__8'),
            (u'(;)', bygroups(Generic.Error)),
            (u'(&|\\||\\*|-|!|/|%?>|<|\\(|\\))', bygroups(Punctuation)),
            ('(\n|\r|\r\n)', String),
            ('.', String),
        ], 
        'main__6' : [
            ('(\n|\r|\r\n)', String),
            ('.', Literal),
        ], 
        'main__7' : [
            ('(\n|\r|\r\n)', String),
            ('.', Generic.Strong),
        ], 
        'main__8' : [
            ('(\n|\r|\r\n)', String),
            ('.', Comment),
        ]
    }

