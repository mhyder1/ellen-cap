(this["webpackJsonpstarter-restaurant-reservation-front-end"] =
  this["webpackJsonpstarter-restaurant-reservation-front-end"] || []).push([
  [0],
  {
    33: function (e, t, n) {},
    34: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(1),
        r = n.n(a),
        c = n(16),
        s = n.n(c),
        i = n(4),
        o = n(7),
        l = n(0);
      var b = function () {
          return Object(l.jsx)("nav", {
            className: "navbar navbar-dark align-items-start p-0",
            children: Object(l.jsxs)("div", {
              className: "container-fluid d-flex flex-column p-0",
              children: [
                Object(l.jsx)(o.b, {
                  className:
                    "navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0",
                  to: "/",
                  children: Object(l.jsx)("div", {
                    className: "sidebar-brand-text mx-3",
                    children: Object(l.jsx)("span", {
                      children: "Periodic Tables",
                    }),
                  }),
                }),
                Object(l.jsx)("hr", { className: "sidebar-divider my-0" }),
                Object(l.jsxs)("ul", {
                  className: "nav navbar-nav text-light",
                  id: "accordionSidebar",
                  children: [
                    Object(l.jsx)("li", {
                      className: "nav-item",
                      children: Object(l.jsxs)(o.b, {
                        className: "nav-link",
                        to: "/dashboard",
                        children: [
                          Object(l.jsx)("span", {
                            className: "oi oi-dashboard",
                          }),
                          "\xa0Dashboard",
                        ],
                      }),
                    }),
                    Object(l.jsx)("li", {
                      className: "nav-item",
                      children: Object(l.jsxs)(o.b, {
                        className: "nav-link",
                        to: "/search",
                        children: [
                          Object(l.jsx)("span", {
                            className: "oi oi-magnifying-glass",
                          }),
                          "\xa0Search",
                        ],
                      }),
                    }),
                    Object(l.jsx)("li", {
                      className: "nav-item",
                      children: Object(l.jsxs)(o.b, {
                        className: "nav-link",
                        to: "/reservations/new",
                        children: [
                          Object(l.jsx)("span", { className: "oi oi-plus" }),
                          "\xa0New Reservation",
                        ],
                      }),
                    }),
                    Object(l.jsx)("li", {
                      className: "nav-item",
                      children: Object(l.jsxs)(o.b, {
                        className: "nav-link",
                        to: "/tables/new",
                        children: [
                          Object(l.jsx)("span", { className: "oi oi-layers" }),
                          "\xa0New Table",
                        ],
                      }),
                    }),
                  ],
                }),
                Object(l.jsx)("div", {
                  className: "text-center d-none d-md-inline",
                  children: Object(l.jsx)("button", {
                    className: "btn rounded-circle border-0",
                    id: "sidebarToggle",
                    type: "button",
                  }),
                }),
              ],
            }),
          });
        },
        d = n(3),
        j = n.n(d),
        u = n(6),
        h = n(2),
        m = /\d\d\d\d-\d\d-\d\d/;
      function p(e) {
        return ""
          .concat(e.getFullYear().toString(10), "-")
          .concat((e.getMonth() + 1).toString(10).padStart(2, "0"), "-")
          .concat(e.getDate().toString(10).padStart(2, "0"));
      }
      function O() {
        return p(new Date());
      }
      function x(e) {
        return (e.reservation_date = e.reservation_date.match(m)[0]), e;
      }
      function v(e) {
        return Array.isArray(e) ? e.map(x) : x(e);
      }
      var f = "https://back-end-lovat.vercel.app",
        N = new Headers();
      function y(e, t, n) {
        return _.apply(this, arguments);
      }
      function _() {
        return (_ = Object(u.a)(
          j.a.mark(function e(t, n, a) {
            var r, c;
            return j.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch(t, n);
                    case 3:
                      if (204 !== (r = e.sent).status) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 6:
                      return (e.next = 8), r.json();
                    case 8:
                      if (!(c = e.sent).error) {
                        e.next = 11;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        Promise.reject({ message: c.error })
                      );
                    case 11:
                      return e.abrupt("return", c.data);
                    case 14:
                      if (
                        ((e.prev = 14),
                        (e.t0 = e.catch(0)),
                        "AbortError" === e.t0.name)
                      ) {
                        e.next = 19;
                        break;
                      }
                      throw (console.error(e.t0.stack), e.t0);
                    case 19:
                      return e.abrupt("return", Promise.resolve(a));
                    case 20:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 14]]
            );
          })
        )).apply(this, arguments);
      }
      function g(e, t) {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = Object(u.a)(
          j.a.mark(function e(t, n) {
            var a;
            return j.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = new URL("".concat(f, "/reservations"))),
                      Object.entries(t).forEach(function (e) {
                        var t = Object(h.a)(e, 2),
                          n = t[0],
                          r = t[1];
                        return a.searchParams.append(n, r.toString());
                      }),
                      (e.next = 4),
                      y(a, { headers: N, signal: n }, []).then(v).then(v)
                    );
                  case 4:
                    return e.abrupt("return", e.sent);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function S() {
        return (S = Object(u.a)(
          j.a.mark(function e(t, n) {
            var a, r;
            return j.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = "".concat(f, "/reservations")),
                      (r = {
                        method: "POST",
                        headers: N,
                        body: JSON.stringify({ data: t }),
                        signal: n,
                      }),
                      (e.next = 4),
                      y(a, r)
                    );
                  case 4:
                    return e.abrupt("return", e.sent);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function k() {
        return (k = Object(u.a)(
          j.a.mark(function e(t, n, a) {
            var r, c;
            return j.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = "".concat(f, "/reservations/").concat(n)),
                      (c = {
                        method: "PUT",
                        headers: N,
                        body: JSON.stringify({ data: t }),
                        signal: a,
                      }),
                      (e.next = 4),
                      y(r, c)
                    );
                  case 4:
                    return e.abrupt("return", e.sent);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function C(e, t, n) {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = Object(u.a)(
          j.a.mark(function e(t, n, a) {
            var r, c;
            return j.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = "".concat(f, "/reservations/").concat(t, "/status")),
                      (c = {
                        method: "PUT",
                        headers: N,
                        body: JSON.stringify({ data: { status: n } }),
                        signal: a,
                      }),
                      (e.next = 4),
                      y(r, c)
                    );
                  case 4:
                    return e.abrupt("return", e.sent);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function T(e, t) {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = Object(u.a)(
          j.a.mark(function e(t, n) {
            var a;
            return j.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = new URL("".concat(f, "/tables"))),
                      Object.entries(t).forEach(function (e) {
                        var t = Object(h.a)(e, 2),
                          n = t[0],
                          r = t[1];
                        return a.searchParams.append(n, r.toString());
                      }),
                      (e.next = 4),
                      y(a, { headers: N, signal: n }, [])
                    );
                  case 4:
                    return e.abrupt("return", e.sent);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function P() {
        return (P = Object(u.a)(
          j.a.mark(function e(t, n) {
            var a, r;
            return j.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = "".concat(f, "/tables")),
                      (r = {
                        method: "POST",
                        headers: N,
                        body: JSON.stringify({ data: t }),
                        signal: n,
                      }),
                      (e.next = 4),
                      y(a, r)
                    );
                  case 4:
                    return e.abrupt("return", e.sent);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function M() {
        return (M = Object(u.a)(
          j.a.mark(function e(t, n, a) {
            var r, c;
            return j.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = "".concat(f, "/tables/").concat(t, "/seat/")),
                      (c = {
                        method: "PUT",
                        headers: N,
                        body: JSON.stringify({ data: { reservation_id: n } }),
                        signal: a,
                      }),
                      (e.next = 4),
                      y(r, c)
                    );
                  case 4:
                    return e.abrupt("return", e.sent);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function F(e, t) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = Object(u.a)(
          j.a.mark(function e(t, n) {
            var a, r;
            return j.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = ""
                        .concat(f, "/tables/")
                        .concat(t.table_id, "/seat/")),
                      (r = {
                        method: "DELETE",
                        body: JSON.stringify(t),
                        headers: N,
                        signal: n,
                      }),
                      (e.next = 4),
                      y(a, r)
                    );
                  case 4:
                    return e.abrupt("return", e.sent);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      N.append("Content-Type", "application/json");
      var J = function (e) {
        var t = e.error;
        return (
          t &&
          Object(l.jsxs)("div", {
            className: "alert alert-danger m-2",
            children: ["Error: ", t.message],
          })
        );
      };
      var L = function () {
        var e = Object(a.useState)([]),
          t = Object(h.a)(e, 2),
          n = t[0],
          r = t[1],
          c = Object(a.useState)([]),
          s = Object(h.a)(c, 2),
          o = s[0],
          b = s[1],
          d = Object(a.useState)(null),
          m = Object(h.a)(d, 2),
          x = m[0],
          v = m[1],
          f = Object(i.h)(),
          N = Object(i.g)();
        function y(e) {
          var t = new AbortController();
          return (
            v(null),
            g({ reservation_date: e }, t.signal).then(r).catch(v),
            T(t.signal).then(b).catch(v),
            function () {
              return t.abort();
            }
          );
        }
        function _() {
          return (_ = Object(u.a)(
            j.a.mark(function e(t) {
              var n;
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      window.confirm(
                        "Is this table ready to seat new guests? This cannot be undone."
                      ) &&
                        ((n = f.reservationDate || O()),
                        F(t).catch(v),
                        C(t.reservation_id, "finished")
                          .then(function () {
                            return y(n);
                          })
                          .catch(v));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function w() {
          return (w = Object(u.a)(
            j.a.mark(function e(t) {
              var n;
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      window.confirm(
                        "Do you want to cancel this reservation? This cannot be undone."
                      ) &&
                        ((n = f.reservationDate || O()),
                        C(t.reservation_id, "cancelled")
                          .then(function () {
                            return y(n);
                          })
                          .catch(v));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        Object(a.useEffect)(
          function () {
            y(f.reservationDate || O());
          },
          [f]
        );
        var S = n
            .filter(function (e) {
              return "finished" !== e.status;
            })
            .map(function (e) {
              return Object(l.jsxs)(
                "tr",
                {
                  children: [
                    Object(l.jsx)("th", {
                      scope: "row",
                      children: e.reservation_id,
                    }),
                    Object(l.jsx)("td", { children: e.first_name }),
                    Object(l.jsx)("td", { children: e.last_name }),
                    Object(l.jsx)("td", { children: e.mobile_number }),
                    Object(l.jsx)("td", { children: e.reservation_date }),
                    Object(l.jsx)("td", { children: e.reservation_time }),
                    Object(l.jsx)("td", { children: e.people }),
                    Object(l.jsx)("td", {
                      "data-reservation-id-status": e.reservation_id,
                      children: e.status,
                    }),
                    Object(l.jsxs)("td", {
                      children: [
                        "booked" === e.status &&
                          Object(l.jsx)("a", {
                            href: "/reservations/".concat(
                              e.reservation_id,
                              "/edit"
                            ),
                            className: "btn btn-primary mr-2",
                            children: "Edit",
                          }),
                        "cancelled" !== e.status &&
                          Object(l.jsx)("button", {
                            type: "button",
                            className: "btn btn-primary mr-2 mt-2",
                            onClick: function () {
                              return (function (e) {
                                return w.apply(this, arguments);
                              })(e);
                            },
                            "data-reservation-id-cancel": e.reservation_id,
                            children: "Cancel",
                          }),
                        "booked" === e.status &&
                          Object(l.jsx)("a", {
                            href: "/reservations/".concat(
                              e.reservation_id,
                              "/seat"
                            ),
                            className: "btn btn-primary mr-2 mt-2",
                            children: "Seat",
                          }),
                      ],
                    }),
                  ],
                },
                e.reservation_id
              );
            }),
          k = o.map(function (e) {
            return Object(l.jsxs)(
              "tr",
              {
                children: [
                  Object(l.jsx)("th", { scope: "row", children: e.table_id }),
                  Object(l.jsx)("td", { children: e.table_name }),
                  Object(l.jsx)("td", { children: e.capacity }),
                  Object(l.jsx)("td", {
                    "data-table-id-status": e.table_id,
                    children: e.reservation_id ? "Occupied" : "Free",
                  }),
                  Object(l.jsx)("td", {
                    "data-table-id-finish": e.table_id,
                    children: e.reservation_id
                      ? Object(l.jsx)("button", {
                          type: "button",
                          className: "btn btn-primary mr-2",
                          onClick: function () {
                            return (function (e) {
                              return _.apply(this, arguments);
                            })(e);
                          },
                          children: "Finish",
                        })
                      : "",
                  }),
                ],
              },
              e.table_id
            );
          });
        return Object(l.jsxs)("main", {
          children: [
            Object(l.jsx)("h1", { children: "Dashboard" }),
            Object(l.jsx)("div", {
              className: "d-md-flex mb-3",
              children: Object(l.jsx)("h4", {
                className: "mb-0",
                children: "Reservations for ".concat(f.reservationDate || O()),
              }),
            }),
            Object(l.jsxs)("div", {
              className: "d-md-flex mb-3",
              children: [
                Object(l.jsx)("button", {
                  type: "button",
                  className: "btn btn-primary mr-2",
                  onClick: function () {
                    var e = (function (e) {
                      var t = e.split("-"),
                        n = Object(h.a)(t, 3),
                        a = n[0],
                        r = n[1],
                        c = n[2],
                        s = new Date(a, (r -= 1), c);
                      return (
                        s.setMonth(s.getMonth()),
                        s.setDate(s.getDate() - 1),
                        p(s)
                      );
                    })(f.reservationDate || O());
                    N.push("/dashboard/".concat(e));
                  },
                  children: "Previous",
                }),
                Object(l.jsx)("button", {
                  type: "button",
                  className: "btn btn-primary mr-2",
                  onClick: function () {
                    var e = O();
                    N.push("/dashboard/".concat(e));
                  },
                  children: "Today",
                }),
                Object(l.jsx)("button", {
                  type: "button",
                  className: "btn btn-primary mr-2",
                  onClick: function () {
                    var e = (function (e) {
                      var t = e.split("-"),
                        n = Object(h.a)(t, 3),
                        a = n[0],
                        r = n[1],
                        c = n[2],
                        s = new Date(a, (r -= 1), c);
                      return (
                        s.setMonth(s.getMonth()),
                        s.setDate(s.getDate() + 1),
                        p(s)
                      );
                    })(f.reservationDate || O());
                    N.push("/dashboard/".concat(e));
                  },
                  children: "Next",
                }),
              ],
            }),
            Object(l.jsx)(J, { error: x }),
            Object(l.jsxs)("div", {
              className: "row",
              children: [
                Object(l.jsx)("div", {
                  className: "col-8",
                  children: Object(l.jsxs)("table", {
                    className: "table",
                    children: [
                      Object(l.jsx)("thead", {
                        children: Object(l.jsxs)("tr", {
                          children: [
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "#",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "First Name",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Last Name",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Mobile Number",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Reservation Date",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Reservation Time",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Number Of People",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Status",
                            }),
                            Object(l.jsx)("th", { scope: "col" }),
                          ],
                        }),
                      }),
                      Object(l.jsx)("tbody", { children: S }),
                    ],
                  }),
                }),
                Object(l.jsx)("div", {
                  className: "col-4",
                  style: { border: "1px solid grey" },
                  children: Object(l.jsxs)("table", {
                    className: "table",
                    children: [
                      Object(l.jsx)("thead", {
                        children: Object(l.jsxs)("tr", {
                          children: [
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "#",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Table Name",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Capacity",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Status",
                            }),
                            Object(l.jsx)("th", { scope: "col" }),
                          ],
                        }),
                      }),
                      Object(l.jsx)("tbody", { children: k }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var A = function (e) {
        var t = e.editReservation,
          n = Object(i.g)();
        Object(a.useEffect)(
          function () {
            t &&
              (o(t.first_name),
              u(t.last_name),
              x(t.mobile_number),
              y(t.reservation_date),
              C(t.reservation_time),
              P(parseInt(t.people)));
          },
          [t]
        );
        var r = Object(a.useState)(),
          c = Object(h.a)(r, 2),
          s = c[0],
          o = c[1],
          b = Object(a.useState)(),
          d = Object(h.a)(b, 2),
          j = d[0],
          u = d[1],
          m = Object(a.useState)(),
          p = Object(h.a)(m, 2),
          O = p[0],
          x = p[1],
          v = Object(a.useState)(),
          f = Object(h.a)(v, 2),
          N = f[0],
          y = f[1],
          _ = Object(a.useState)(),
          g = Object(h.a)(_, 2),
          w = g[0],
          C = g[1],
          D = Object(a.useState)(),
          T = Object(h.a)(D, 2),
          E = T[0],
          P = T[1],
          M = Object(a.useState)(null),
          F = Object(h.a)(M, 2),
          R = F[0],
          L = F[1];
        function A(e) {
          e.preventDefault();
          var a = {
            first_name: s,
            last_name: j,
            mobile_number: O,
            reservation_date: N,
            reservation_time: w,
            people: E,
          };
          t
            ? (function (e, t, n) {
                return k.apply(this, arguments);
              })(a, t.reservation_id)
                .then(function () {
                  n.push("/dashboard/".concat(a.reservation_date));
                })
                .catch(L)
            : (function (e, t) {
                return S.apply(this, arguments);
              })(a)
                .then(function () {
                  n.push("/dashboard/".concat(a.reservation_date));
                })
                .catch(L);
        }
        return Object(l.jsxs)(l.Fragment, {
          children: [
            Object(l.jsx)(J, { error: R }),
            Object(l.jsxs)("form", {
              onSubmit: A,
              children: [
                Object(l.jsxs)("div", {
                  className: "mb-3",
                  children: [
                    Object(l.jsx)("label", {
                      for: "first_name",
                      className: "form-label",
                      children: "First Name",
                    }),
                    Object(l.jsx)("input", {
                      placeholder: "First Name",
                      type: "text",
                      className: "form-control",
                      id: "first_name",
                      name: "first_name",
                      value: s,
                      onChange: function (e) {
                        return o(e.target.value);
                      },
                    }),
                  ],
                }),
                Object(l.jsxs)("div", {
                  className: "mb-3",
                  children: [
                    Object(l.jsx)("label", {
                      for: "last_name",
                      className: "form-label",
                      children: "Last Name",
                    }),
                    Object(l.jsx)("input", {
                      placeholder: "Last Name",
                      type: "text",
                      className: "form-control",
                      id: "last_name",
                      name: "last_name",
                      value: j,
                      onChange: function (e) {
                        return u(e.target.value);
                      },
                    }),
                  ],
                }),
                Object(l.jsxs)("div", {
                  className: "mb-3",
                  children: [
                    Object(l.jsx)("label", {
                      for: "mobile_number",
                      className: "form-label",
                      children: "Mobile Number",
                    }),
                    Object(l.jsx)("input", {
                      placeholder: "Mobile Number",
                      type: "text",
                      className: "form-control",
                      id: "mobile_number",
                      name: "mobile_number",
                      value: O,
                      onChange: function (e) {
                        return x(e.target.value);
                      },
                    }),
                  ],
                }),
                Object(l.jsxs)("div", {
                  className: "mb-3",
                  children: [
                    Object(l.jsx)("label", {
                      for: "reservation_date",
                      className: "form-label",
                      children: "Reservation Date",
                    }),
                    Object(l.jsx)("input", {
                      type: "date",
                      className: "form-control",
                      id: "reservation_date",
                      name: "reservation_date",
                      placeholder: "YYYY-MM-DD",
                      pattern: "\\d{4}-\\d{2}-\\d{2}",
                      value: N,
                      onChange: function (e) {
                        return y(e.target.value);
                      },
                    }),
                  ],
                }),
                Object(l.jsxs)("div", {
                  className: "mb-3",
                  children: [
                    Object(l.jsx)("label", {
                      for: "reservation_time",
                      className: "form-label",
                      children: "Reservation Time",
                    }),
                    Object(l.jsx)("input", {
                      type: "time",
                      className: "form-control",
                      placeholder: "HH:MM",
                      pattern: "[0-9]{2}:[0-9]{2}",
                      id: "reservation_time",
                      name: "reservation_time",
                      value: w,
                      onChange: function (e) {
                        return C(e.target.value);
                      },
                    }),
                  ],
                }),
                Object(l.jsxs)("div", {
                  className: "mb-3",
                  children: [
                    Object(l.jsx)("label", {
                      for: "people",
                      className: "form-label",
                      children: "Number Of People",
                    }),
                    Object(l.jsx)("input", {
                      placeholder: "Number Of People",
                      type: "number",
                      className: "form-control",
                      id: "people",
                      name: "people",
                      value: E,
                      onChange: function (e) {
                        return P(parseInt(e.target.value));
                      },
                    }),
                  ],
                }),
                Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("button", {
                      type: "button",
                      className: "btn btn-secondary mr-2",
                      onClick: function () {
                        n.push("/");
                      },
                      children: "Cancel",
                    }),
                    Object(l.jsx)("button", {
                      type: "submit",
                      className: "btn btn-primary",
                      onClick: A,
                      children: "Submit",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var I = function () {
        return Object(l.jsx)(A, {});
      };
      var U = function () {
        var e = Object(i.g)(),
          t = Object(a.useState)(),
          n = Object(h.a)(t, 2),
          r = n[0],
          c = n[1],
          s = Object(a.useState)(),
          o = Object(h.a)(s, 2),
          b = o[0],
          d = o[1],
          j = Object(a.useState)(null),
          u = Object(h.a)(j, 2),
          m = u[0],
          p = u[1];
        function O(t) {
          t.preventDefault(),
            (function (e, t) {
              return P.apply(this, arguments);
            })({ table_name: r, capacity: b })
              .then(function () {
                e.push("/");
              })
              .catch(p);
        }
        return Object(l.jsxs)(l.Fragment, {
          children: [
            Object(l.jsx)("h1", { children: "New Table" }),
            Object(l.jsx)(J, { error: m }),
            Object(l.jsxs)("form", {
              onSubmit: O,
              children: [
                Object(l.jsxs)("div", {
                  className: "mb-3",
                  children: [
                    Object(l.jsx)("label", {
                      for: "table_name",
                      className: "form-label",
                      children: "Table Name",
                    }),
                    Object(l.jsx)("input", {
                      placeholder: "Table Name",
                      type: "text",
                      className: "form-control",
                      id: "table_name",
                      name: "table_name",
                      value: r,
                      onChange: function (e) {
                        return c(e.target.value);
                      },
                    }),
                  ],
                }),
                Object(l.jsxs)("div", {
                  className: "mb-3",
                  children: [
                    Object(l.jsx)("label", {
                      for: "capacity",
                      className: "form-label",
                      children: "Capacity",
                    }),
                    Object(l.jsx)("input", {
                      placeholder: "Capacity",
                      type: "number",
                      className: "form-control",
                      id: "capacity",
                      name: "capacity",
                      value: b,
                      onChange: function (e) {
                        return d(parseInt(e.target.value));
                      },
                    }),
                  ],
                }),
                Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("button", {
                      type: "button",
                      className: "btn btn-secondary mr-2",
                      onClick: function () {
                        e.push("/");
                      },
                      children: "Cancel",
                    }),
                    Object(l.jsx)("button", {
                      type: "submit",
                      className: "btn btn-primary",
                      onClick: O,
                      children: "Submit",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var Y = function () {
        var e = Object(a.useState)([]),
          t = Object(h.a)(e, 2),
          n = t[0],
          r = t[1],
          c = Object(a.useState)(),
          s = Object(h.a)(c, 2),
          o = s[0],
          b = s[1],
          d = Object(i.h)(),
          j = Object(i.g)();
        return (
          Object(a.useEffect)(function () {
            !(function () {
              var e = new AbortController();
              T(e.signal).then(r);
            })();
          }, []),
          Object(l.jsxs)("div", {
            className: "mb-3",
            children: [
              Object(l.jsx)("label", {
                className: "form-label",
                htmlFor: "tables",
                children: "Tables",
              }),
              Object(l.jsxs)("select", {
                className: "form-control",
                id: "tables",
                name: "tables",
                value: o,
                onChange: function (e) {
                  var t = e.target,
                    n = (t.name, t.value);
                  b(n);
                },
                required: !0,
                children: [
                  Object(l.jsx)("option", {
                    value: "",
                    children: "Select a table",
                  }),
                  n.map(function (e) {
                    return Object(l.jsx)("option", {
                      value: e.table_id,
                      children: ""
                        .concat(e.table_name, " - ")
                        .concat(e.capacity, " people"),
                    });
                  }),
                ],
              }),
              Object(l.jsx)("button", {
                type: "button",
                className: "btn btn-secondary mr-2",
                onClick: function () {
                  j.push("/");
                },
                children: "Cancel",
              }),
              Object(l.jsx)("button", {
                className: "btn btn-primary",
                onClick: function () {
                  !(function (e, t, n) {
                    M.apply(this, arguments);
                  })(o, d.reservation_id),
                    C(d.reservation_id, "seated").then(function () {
                      j.push("/dashboard");
                    });
                },
                children: "Submit",
              }),
            ],
          })
        );
      };
      var H = function () {
        return Object(l.jsx)("div", {
          className: "NotFound",
          children: Object(l.jsx)("h1", { children: "Not Found" }),
        });
      };
      var q = function () {
        var e = Object(a.useState)(""),
          t = Object(h.a)(e, 2),
          n = t[0],
          r = t[1],
          c = Object(a.useState)([]),
          s = Object(h.a)(c, 2),
          i = s[0],
          o = s[1];
        function b() {
          g({ mobile_number: n }).then(o);
        }
        function d() {
          return (d = Object(u.a)(
            j.a.mark(function e(t) {
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      window.confirm(
                        "Do you want to cancel this reservation? This cannot be undone."
                      ) && C(t.reservation_id, "cancelled").then(b);
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var m = i.map(function (e) {
          return Object(l.jsxs)(
            "tr",
            {
              children: [
                Object(l.jsx)("th", {
                  scope: "row",
                  children: e.reservation_id,
                }),
                Object(l.jsx)("td", { children: e.first_name }),
                Object(l.jsx)("td", { children: e.last_name }),
                Object(l.jsx)("td", { children: e.mobile_number }),
                Object(l.jsx)("td", { children: e.reservation_date }),
                Object(l.jsx)("td", { children: e.reservation_time }),
                Object(l.jsx)("td", { children: e.people }),
                Object(l.jsx)("td", {
                  "data-reservation-id-status": e.reservation_id,
                  children: e.status,
                }),
                Object(l.jsxs)("td", {
                  children: [
                    "booked" === e.status &&
                      Object(l.jsx)("a", {
                        href: "/reservations/".concat(
                          e.reservation_id,
                          "/edit"
                        ),
                        className: "btn btn-primary mr-2",
                        children: "Edit",
                      }),
                    "cancelled" !== e.status &&
                      Object(l.jsx)("button", {
                        type: "button",
                        className: "btn btn-primary mr-2 mt-2",
                        onClick: function () {
                          return (function (e) {
                            return d.apply(this, arguments);
                          })(e);
                        },
                        "data-reservation-id-cancel": e.reservation_id,
                        children: "Cancel",
                      }),
                  ],
                }),
              ],
            },
            e.reservation_id
          );
        });
        return Object(l.jsxs)("div", {
          className: "p-3",
          children: [
            Object(l.jsxs)("div", {
              className: "d-md-flex mb-3",
              children: [
                Object(l.jsx)("input", {
                  name: "mobile_number",
                  placeholder: "Enter a customer's phone number",
                  value: n,
                  onChange: function (e) {
                    return r(e.target.value);
                  },
                }),
                Object(l.jsx)("div", {
                  className: "d-md-flex pl-3",
                  children: Object(l.jsx)("button", {
                    className: "btn btn-primary",
                    onClick: b,
                    children: "Find",
                  }),
                }),
              ],
            }),
            Object(l.jsx)("div", {
              className: "d-md-flex mb-3",
              children: i.length
                ? Object(l.jsxs)("table", {
                    className: "table",
                    children: [
                      Object(l.jsx)("thead", {
                        children: Object(l.jsxs)("tr", {
                          children: [
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "#",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "First Name",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Last Name",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Mobile Number",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Reservation Date",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Reservation Time",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Number Of People",
                            }),
                            Object(l.jsx)("th", {
                              scope: "col",
                              children: "Status",
                            }),
                            Object(l.jsx)("th", { scope: "col" }),
                          ],
                        }),
                      }),
                      Object(l.jsx)("tbody", { children: m }),
                    ],
                  })
                : "No reservations found",
            }),
          ],
        });
      };
      var B = function () {
        var e = Object(i.h)(),
          t = Object(a.useState)(null),
          n = Object(h.a)(t, 2),
          r = n[0],
          c = n[1];
        return (
          Object(a.useEffect)(
            function () {
              e.reservation_id &&
                g({ reservation_id: e.reservation_id }).then(function (e) {
                  return c(e[0]);
                });
            },
            [e.reservation_id]
          ),
          Object(l.jsx)(A, { editReservation: r })
        );
      };
      var z = function () {
        return Object(l.jsxs)(i.d, {
          children: [
            Object(l.jsx)(i.b, {
              exact: !0,
              path: "/",
              children: Object(l.jsx)(i.a, { to: "/dashboard" }),
            }),
            Object(l.jsx)(i.b, {
              exact: !0,
              path: "/reservations",
              children: Object(l.jsx)(i.a, { to: "/dashboard" }),
            }),
            Object(l.jsx)(i.b, {
              exact: !0,
              path: "/reservations/new",
              children: Object(l.jsx)(I, {}),
            }),
            Object(l.jsx)(i.b, {
              exact: !0,
              path: "/tables/new",
              children: Object(l.jsx)(U, {}),
            }),
            Object(l.jsx)(i.b, {
              path: "/dashboard/:reservationDate",
              children: Object(l.jsx)(L, {}),
            }),
            Object(l.jsx)(i.b, {
              path: "/dashboard",
              children: Object(l.jsx)(L, {}),
            }),
            Object(l.jsx)(i.b, {
              exact: !0,
              path: "/reservations/:reservation_id/seat",
              children: Object(l.jsx)(Y, {}),
            }),
            Object(l.jsx)(i.b, {
              exact: !0,
              path: "/reservations/:reservation_id/edit",
              children: Object(l.jsx)(B, {}),
            }),
            Object(l.jsx)(i.b, {
              exact: !0,
              path: "/search",
              children: Object(l.jsx)(q, {}),
            }),
            Object(l.jsx)(i.b, { children: Object(l.jsx)(H, {}) }),
          ],
        });
      };
      n(33);
      var G = function () {
        return Object(l.jsx)("div", {
          className: "container-fluid",
          children: Object(l.jsxs)("div", {
            className: "row h-100",
            children: [
              Object(l.jsx)("div", {
                className: "col-md-2 side-bar",
                children: Object(l.jsx)(b, {}),
              }),
              Object(l.jsx)("div", {
                className: "col",
                children: Object(l.jsx)(z, {}),
              }),
            ],
          }),
        });
      };
      var K = function () {
        return Object(l.jsx)(i.d, {
          children: Object(l.jsx)(i.b, {
            path: "/",
            children: Object(l.jsx)(G, {}),
          }),
        });
      };
      s.a.render(
        Object(l.jsx)(r.a.StrictMode, {
          children: Object(l.jsx)(o.a, { children: Object(l.jsx)(K, {}) }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[34, 1, 2]],
]);
//# sourceMappingURL=main.71fecce4.chunk.js.map
