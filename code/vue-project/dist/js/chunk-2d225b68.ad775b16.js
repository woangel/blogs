;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-2d225b68'],
  {
    e623: function (n, e, t) {
      'use strict'
      t.r(e)
      var r = function () {
          var n = this,
            e = n.$createElement,
            t = n._self._c || e
          return t('div', [
            t('p', [
              n._v(
                '\n        主要用来测试 `el-scrollbar` 组件是否无法在数据回来后，页面加长而无法自动修改高度，导致无法及时进行显示，给人感觉滚动条消失一样的感觉\n    '
              ),
            ]),
            n._m(0),
            t('p', [n._v('测试一')]),
            t('p', [n._v('测试二')]),
            t(
              'ul',
              [
                t(
                  'transition-group',
                  { attrs: { name: 'el-fade-in' } },
                  n._l(n.backNum, function (e) {
                    return t('li', { key: e }, [
                      t('span', [n._v('第' + n._s(e) + '个')]),
                    ])
                  }),
                  0
                ),
              ],
              1
            ),
          ])
        },
        l = [
          function () {
            var n = this,
              e = n.$createElement,
              t = n._self._c || e
            return t('ol', [
              t('li', [
                t('h6', [n._v('测试自动增加数据，改变高度')]),
                t('ul', [
                  t('li', [
                    n._v(
                      '\n                    测试结果：随着内容增加，高度到达底部时，会自动出现滚动条\n                '
                    ),
                  ]),
                ]),
              ]),
              t('li', [
                t('h6', [n._v('测试数据一次性到位，高度改变')]),
                t('ul', [
                  t('li', [
                    n._v(
                      '测试结果：数据一次性返回，滚动条还是会出现，因而我的问题出现在 是否破坏了原有的设计结构，这个好好考虑了'
                    ),
                  ]),
                ]),
              ]),
            ])
          },
        ],
        u = {
          name: 'vue-test-el-scrollbar',
          data: function () {
            return { num: 1, backNum: 1, timerId: null }
          },
          created: function () {
            var n = this
            setTimeout(function () {
              n.backNum = 100
            }, 1e3)
          },
          mounted: function () {
            var n = this
            this.timerId = setInterval(function () {
              n.num >= 100 ? clearInterval(n.timerId) : n.num++
            }, 500)
          },
          beforeDestory: function () {
            clearInterval(this.timerId)
          },
        },
        i = u,
        a = t('2877'),
        c = Object(a['a'])(i, r, l, !1, null, null, null)
      e['default'] = c.exports
    },
  },
])
//# sourceMappingURL=chunk-2d225b68.ad775b16.js.map
