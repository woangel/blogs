;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-b33d6438'],
  {
    '0a49': function (e, t, r) {
      var n = r('9b43'),
        o = r('626a'),
        a = r('4bf8'),
        c = r('9def'),
        i = r('cd1c')
      e.exports = function (e, t) {
        var r = 1 == e,
          s = 2 == e,
          l = 3 == e,
          u = 4 == e,
          m = 6 == e,
          f = 5 == e || m,
          p = t || i
        return function (t, i, d) {
          for (
            var b,
              g,
              y = a(t),
              v = o(y),
              h = n(i, d, 3),
              F = c(v.length),
              _ = 0,
              k = r ? p(t, F) : s ? p(t, 0) : void 0;
            F > _;
            _++
          )
            if ((f || _ in v) && ((b = v[_]), (g = h(b, _, y)), e))
              if (r) k[_] = g
              else if (g)
                switch (e) {
                  case 3:
                    return !0
                  case 5:
                    return b
                  case 6:
                    return _
                  case 2:
                    k.push(b)
                }
              else if (u) return !1
          return m ? -1 : l || u ? u : k
        }
      }
    },
    '20d6': function (e, t, r) {
      'use strict'
      var n = r('5ca1'),
        o = r('0a49')(6),
        a = 'findIndex',
        c = !0
      a in [] &&
        Array(1)[a](function () {
          c = !1
        }),
        n(n.P + n.F * c, 'Array', {
          findIndex: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
          },
        }),
        r('9c6c')(a)
    },
    '236b': function (e, t, r) {
      'use strict'
      r('8e6e'), r('ac6a'), r('456d')
      var n = r('bd86'),
        o = r('2f62')
      function a(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(r, !0).forEach(function (t) {
                Object(n['a'])(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(r).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      t['a'] = {
        computed: c(
          {},
          Object(o['c'])('formData', {
            areaList: function (e) {
              return e.formInitData.areaList
            },
            typeList: function (e) {
              return e.formInitData.typeList
            },
          })
        ),
        methods: {
          submitForm: function (e) {
            var t = this
            this.$refs[e].validate(function (e) {
              e ? t.$Message.success('success') : t.$Message.error('error')
            })
          },
          resetForm: function (e) {
            this.$refs[e].resetFields()
          },
        },
      }
    },
    '3b97': function (e, t, r) {
      'use strict'
      var n = r('8c0e'),
        o = r.n(n)
      o.a
    },
    '85be': function (e, t, r) {
      'use strict'
      r.r(t)
      var n = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t
          return r(
            'div',
            { staticClass: 'el-validate' },
            [
              r(
                'el-form',
                {
                  ref: 'ruleForm',
                  attrs: { model: e.ruleForm, 'label-width': '80px' },
                },
                [
                  r(
                    'el-form-item',
                    { attrs: { label: '活动名称', prop: 'name', verify: '' } },
                    [
                      r('el-input', {
                        model: {
                          value: e.ruleForm.name,
                          callback: function (t) {
                            e.$set(e.ruleForm, 'name', t)
                          },
                          expression: 'ruleForm.name',
                        },
                      }),
                    ],
                    1
                  ),
                  r(
                    'el-form-item',
                    {
                      attrs: { label: '活动区域', prop: 'region', verify: '' },
                    },
                    [
                      r(
                        'el-select',
                        {
                          attrs: { placeholder: '请选择活动区域' },
                          model: {
                            value: e.ruleForm.region,
                            callback: function (t) {
                              e.$set(e.ruleForm, 'region', t)
                            },
                            expression: 'ruleForm.region',
                          },
                        },
                        e._l(e.areaList, function (e, t) {
                          return r('el-option', {
                            key: t,
                            attrs: { label: e.name, value: e.id },
                          })
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                  r(
                    'el-form-item',
                    { attrs: { label: '活动性质', prop: 'type' } },
                    [
                      r(
                        'el-checkbox-group',
                        {
                          model: {
                            value: e.ruleForm.type,
                            callback: function (t) {
                              e.$set(e.ruleForm, 'type', t)
                            },
                            expression: 'ruleForm.type',
                          },
                        },
                        e._l(e.typeList, function (t, n) {
                          return r(
                            'el-checkbox',
                            { key: n, attrs: { label: t.id } },
                            [e._v(e._s(t.name))]
                          )
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                  r(
                    'el-form-item',
                    {
                      attrs: {
                        label: '特殊资源',
                        prop: 'resource',
                        verify: '',
                      },
                    },
                    [
                      r(
                        'el-radio-group',
                        {
                          model: {
                            value: e.ruleForm.resource,
                            callback: function (t) {
                              e.$set(e.ruleForm, 'resource', t)
                            },
                            expression: 'ruleForm.resource',
                          },
                        },
                        [
                          r('el-radio', { attrs: { label: 1 } }, [
                            e._v('线上品牌商赞助'),
                          ]),
                          r('el-radio', { attrs: { label: 2 } }, [
                            e._v('线下场地免费'),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  r(
                    'el-form-item',
                    { attrs: { label: '活动形式', prop: 'desc', verify: '' } },
                    [
                      r('el-input', {
                        attrs: { type: 'textarea' },
                        model: {
                          value: e.ruleForm.desc,
                          callback: function (t) {
                            e.$set(e.ruleForm, 'desc', t)
                          },
                          expression: 'ruleForm.desc',
                        },
                      }),
                    ],
                    1
                  ),
                  e._l(e.ruleForm.contactList, function (t, n) {
                    return r(
                      'el-row',
                      {
                        key: t.id,
                        staticClass: 'sc-row',
                        attrs: { gutter: 20 },
                      },
                      [
                        r(
                          'el-col',
                          { attrs: { span: 8 } },
                          [
                            r(
                              'el-form-item',
                              {
                                attrs: {
                                  label: '姓氏',
                                  prop: 'contactList.' + n + '.family_name',
                                  rules: [
                                    {
                                      required: !0,
                                      message: '不能为空',
                                      trigger: ['blur', 'change'],
                                    },
                                  ],
                                },
                              },
                              [
                                r('el-input', {
                                  model: {
                                    value: t.family_name,
                                    callback: function (r) {
                                      e.$set(t, 'family_name', r)
                                    },
                                    expression: 't.family_name',
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        r(
                          'el-col',
                          { attrs: { span: 8 } },
                          [
                            r(
                              'el-form-item',
                              {
                                attrs: {
                                  label: '名字',
                                  prop: 'contactList.' + n + '.contact_name',
                                  rules: [
                                    {
                                      required: !0,
                                      message: '不能为空',
                                      trigger: ['blur', 'change'],
                                    },
                                  ],
                                },
                              },
                              [
                                r('el-input', {
                                  model: {
                                    value: t.contact_name,
                                    callback: function (r) {
                                      e.$set(t, 'contact_name', r)
                                    },
                                    expression: 't.contact_name',
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        r(
                          'el-col',
                          { attrs: { span: 8 } },
                          [
                            r(
                              'el-button',
                              {
                                on: {
                                  click: function (r) {
                                    return (
                                      r.preventDefault(), e.deleteConcats(t)
                                    )
                                  },
                                },
                              },
                              [e._v('删除')]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  }),
                  r(
                    'el-row',
                    { staticClass: 'add-concats' },
                    [
                      r(
                        'el-button',
                        {
                          attrs: { type: 'primary' },
                          on: { click: e.addConcats },
                        },
                        [e._v('添加')]
                      ),
                    ],
                    1
                  ),
                  r(
                    'el-form-item',
                    [
                      r(
                        'el-button',
                        {
                          attrs: { type: 'primary' },
                          on: {
                            click: function (t) {
                              return e.submitForm('ruleForm')
                            },
                          },
                        },
                        [e._v('立即创建')]
                      ),
                      r(
                        'el-button',
                        {
                          on: {
                            click: function (t) {
                              return e.resetForm('ruleForm')
                            },
                          },
                        },
                        [e._v('重置')]
                      ),
                    ],
                    1
                  ),
                ],
                2
              ),
            ],
            1
          )
        },
        o = [],
        a = (r('20d6'), r('236b')),
        c = {
          mixins: [a['a']],
          data: function () {
            return {
              ruleForm: {
                name: '',
                region: '',
                type: [],
                resource: '',
                desc: '',
                contactList: [{ family_name: '', contact_name: '' }],
              },
              rules: {
                name: [
                  { required: !0, message: '请输入活动名称', trigger: 'blur' },
                  {
                    min: 3,
                    max: 5,
                    message: '长度在 3 到 5 个字符',
                    trigger: 'blur',
                  },
                ],
                region: [
                  {
                    required: !0,
                    message: '请选择活动区域',
                    trigger: 'change',
                  },
                ],
                type: [
                  {
                    type: 'array',
                    required: !0,
                    message: '请至少选择一个活动性质',
                    trigger: 'change',
                  },
                ],
                resource: [
                  {
                    required: !0,
                    message: '请选择活动资源',
                    trigger: 'change',
                  },
                ],
                desc: [
                  { required: !0, message: '请填写活动形式', trigger: 'blur' },
                ],
              },
              timerId: null,
            }
          },
          methods: {
            setFormData: function () {
              var e = this
              this.timerId = setTimeout(function () {
                e.ruleForm = {
                  name: '测试项目',
                  region: 2,
                  type: [1, 2],
                  resource: 1,
                  desc: '测试数据回显时校验颜色变化问题 ',
                  contactList: [{ family_name: '111', contact_name: '222' }],
                }
              }, 1500)
            },
            addConcats: function () {
              this.ruleForm.contactList.push({
                family_name: '',
                contact_name: '',
                id: Date.now(),
              })
            },
            deleteConcats: function (e) {
              var t = this.ruleForm.contactList,
                r = t.findIndex(function (t) {
                  return e === t
                })
              t.splice(r, 1)
            },
          },
          beforeDestroy: function () {
            clearTimeout(this.timerId)
          },
          mounted: function () {
            this.setFormData()
          },
        },
        i = c,
        s = (r('3b97'), r('2877')),
        l = Object(s['a'])(i, n, o, !1, null, null, null)
      t['default'] = l.exports
    },
    '8c0e': function (e, t, r) {},
    cd1c: function (e, t, r) {
      var n = r('e853')
      e.exports = function (e, t) {
        return new (n(e))(t)
      }
    },
    e853: function (e, t, r) {
      var n = r('d3f4'),
        o = r('1169'),
        a = r('2b4c')('species')
      e.exports = function (e) {
        var t
        return (
          o(e) &&
            ((t = e.constructor),
            'function' != typeof t ||
              (t !== Array && !o(t.prototype)) ||
              (t = void 0),
            n(t) && ((t = t[a]), null === t && (t = void 0))),
          void 0 === t ? Array : t
        )
      }
    },
  },
])
//# sourceMappingURL=chunk-b33d6438.821c046c.js.map
