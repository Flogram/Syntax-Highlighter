'fileTypes' : [
  'flo'
]
'name' : 'flogram'
'patterns' : [
  {
    'include' : '#main'
  }
]
'scopeName' : 'source.flogram'
'uuid' : ''
'repository' : {
  'main' : {
    'patterns' : [
      {
        'include' : '#numeric'
      }
      {
        'match' : '(\\))'
        'name' : 'invalid.flogram'
      }
      {
        'begin' : '(\\")'
        'beginCaptures' : {
          '1' : {
            'name' : 'punctuation.flogram'
          }
        }
        'contentName' : 'text.flogram'
        'end' : '(\\")'
        'endCaptures' : {
          '1' : {
            'name' : 'punctuation.flogram'
          }
        }
      }
      {
        'begin' : '([f][n][\\x{0020}])'
        'beginCaptures' : {
          '1' : {
            'name' : 'keyword.flogram'
          }
        }
        'contentName' : 'punctuation.flogram'
        'end' : '(\\W|_/g)'
        'endCaptures' : {
          '1' : {
            'name' : 'punctuation.flogram'
          }
        }
      }
      {
        'begin' : '(\\[A-Za-z]*.)'
        'beginCaptures' : {
          '1' : {
            'name' : 'keyword.flogram'
          }
        }
        'contentName' : 'keyword.flogram'
        'end' : '(\\()|$\\)'
        'endCaptures' : {
          '1' : {
            'name' : 'keyword.flogram'
          }
        }
      }
      {
        'begin' : '(\\:\\ )'
        'beginCaptures' : {
          '1' : {
            'name' : 'text.flogram'
          }
        }
        'contentName' : 'punctuation.flogram'
        'end' : '(\\W)'
        'endCaptures' : {
          '1' : {
            'name' : 'punctuation.flogram'
          }
        }
      }
      {
        'begin' : '(\\{)'
        'beginCaptures' : {
          '1' : {
            'name' : 'punctuation.flogram'
          }
        }
        'patterns' : [
          {
            'include' : '#main__5'
          }
        ]
        'end' : '(\\})'
        'endCaptures' : {
          '1' : {
            'name' : 'punctuation.flogram'
          }
        }
      }
      {
        'match' : '(\\})'
        'name' : 'invalid.flogram'
      }
      {
        'match' : '(#.*)'
        'name' : 'comment.flogram'
      }
      {
        'match' : '(addr_of |any |as |bind |bits |bool |break |contract |else|else |equals |export | get |if |iface |is |import |interface |length |list |loop |member |native |set |types |release |return |value_at |this|this. )'
        'name' : 'keyword.flogram'
      }
      {
        'match' : '(true|true |false|false |null|null |zero|zero )'
        'name' : 'punctuation.flogram'
      }
      {
        'match' : '(self|self |this|this |break |break)'
        'name' : 'text.flogram'
      }
      {
        'match' : '(I8|I8 |I16|I16 |I32|I32 |I64|I64 |U8|U8 |U16|U16 |U32|U32 |U64|U64 |F8|F8 |F16|F16 |F32|F32 |F64|F64 |BOOL|BOOL )'
        'name' : 'punctuation.flogram'
      }
      {
        'match' : '(\\b[A-Z\\x{007c}_][A-Z\\x{007c}_][A-Z0-9_]*)'
        'name' : 'punctuation.flogram'
      }
      {
        'begin' : '(object )'
        'beginCaptures' : {
          '1' : {
            'name' : 'keyword.flogram'
          }
        }
        'contentName' : 'punctuation.flogram'
        'end' : '(:)'
        'endCaptures' : {
          '1' : {
            'name' : 'text.flogram'
          }
        }
      }
      {
        'begin' : '(mut )'
        'beginCaptures' : {
          '1' : {
            'name' : 'keyword.flogram'
          }
        }
        'contentName' : 'punctuation.flogram'
        'end' : '( |:)'
        'endCaptures' : {
          '1' : {
            'name' : 'text.flogram'
          }
        }
      }
      {
        'begin' : '(enum )'
        'beginCaptures' : {
          '1' : {
            'name' : 'keyword.flogram'
          }
        }
        'contentName' : 'comment.flogram'
        'end' : '( |:)'
        'endCaptures' : {
          '1' : {
            'name' : 'text.flogram'
          }
        }
      }
      {
        'match' : '(;)'
        'name' : 'invalid.flogram'
      }
      {
        'match' : '(&|\\||\\*|-|!|/|%?>|<|\\(|\\))'
        'name' : 'punctuation.flogram'
      }
    ]
  }
  'main__1' : {
    'patterns' : [
    ]
  }
  'main__2' : {
    'patterns' : [
    ]
  }
  'main__3' : {
    'patterns' : [
    ]
  }
  'main__4' : {
    'patterns' : [
    ]
  }
  'main__5' : {
    'patterns' : [
      {
        'include' : '#main'
      }
    ]
  }
  'main__6' : {
    'patterns' : [
    ]
  }
  'main__7' : {
    'patterns' : [
    ]
  }
  'main__8' : {
    'patterns' : [
    ]
  }
  'numeric' : {
    'patterns' : [
      {
        'match' : '(\\b\\d+)'
        'name' : 'constant.numeric.flogram'
      }
    ]
  }
}
