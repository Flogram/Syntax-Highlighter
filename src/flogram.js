/**
 * Language: Flogram
 * Contributors:
 *   Didier Munezero <didiermunezer38@gmail.com>
 *   Matthew Czarnek <matt@flogram.dev>
 */
const FLOGRAM_IDENT_RE = '[\u00C0-\u02B8a-zA-Z_$][\u00C0-\u02B8a-zA-Z_$0-9]*';

module.exports = function (hljs) {
  return {
    case_insensitive: true,
    keywords: {
      keyword: 'addr_of any as bind bits bool break constant contract else enum equals export fn get if iface is import interface length list loop member mut native object set types release return value_at',
      literal: 'true false null zero',
      buit_in: 'self this',
      type: 'i8 i16 i32 i64 u8 u16 u32 u64 f8 f16 f32 f64 bool'
    },
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'string',
        begin: '`',
        end: '`',
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      {
        className: 'type',
        begin: /((-|>)?\s?\(|-\[)\w*:/,
        end: '\\W',
      },
      {
        className: 'property',
        begin: /\.+\w/,
        end: '\\W',
      },
      {
        className: 'functionCall',
        begin: /(([!-&*-/:-?])|\w)+\(/,
        ///(\s+|,)\w+\(/
        //([a-zA-Z!-&*-/:-?])\w+\(
        //\[(.*?)\]
        end: /\)/,
        keywords: {
          built_in: 'toString'
        }
      },
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE,
      {
        begin: '//',
        ends: '//',
      }
    ]
  }
}