// Exam Paper Search: filters window.PAPERS (from data/papers.js) by a
// school text search plus one dropdown per detail, and lists the matches.
(function () {
  var papers = window.PAPERS || [];
  var schools = window.SCHOOLS || {};

  // Each dropdown: the paper field it filters on, and its "any" label.
  var FILTERS = [
    { field: "year", label: "Any year" },
    { field: "level", label: "Any level" },
    { field: "stream", label: "Any stream" },
    { field: "subject", label: "Any subject" },
    { field: "exam", label: "Any exam" }
  ];

  function schoolLabel(code) {
    var name = schools[code];
    return name ? name + " (" + code + ")" : code;
  }

  // Fill a dropdown with every distinct value found in the data.
  function fillSelect(select, field, anyLabel) {
    var values = [];
    papers.forEach(function (p) {
      if (values.indexOf(p[field]) === -1) values.push(p[field]);
    });
    values.sort(function (a, b) {
      return field === "year" ? b - a : String(a).localeCompare(String(b));
    });

    select.appendChild(new Option(anyLabel, ""));
    values.forEach(function (v) {
      select.appendChild(new Option(String(v), String(v)));
    });
  }

  function render(form, list, count) {
    var query = form.elements.school.value.trim().toLowerCase();

    var matches = papers.filter(function (p) {
      if (query && schoolLabel(p.school).toLowerCase().indexOf(query) === -1) {
        return false;
      }
      return FILTERS.every(function (f) {
        var chosen = form.elements[f.field].value;
        return !chosen || String(p[f.field]) === chosen;
      });
    });

    matches.sort(function (a, b) {
      return b.year - a.year || a.school.localeCompare(b.school);
    });

    list.textContent = "";
    matches.forEach(function (p) {
      var item = document.createElement("li");
      item.className = "result";

      var title = document.createElement("h3");
      title.textContent = schoolLabel(p.school);

      var details = document.createElement("p");
      details.textContent = [p.year, p.level, p.stream, p.subject, p.exam].join(" · ");

      var link = document.createElement("a");
      link.href = p.url;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = "Open paper";

      item.append(title, details, link);
      list.appendChild(item);
    });

    count.textContent =
      matches.length === 0
        ? "No papers match. Try clearing a filter."
        : matches.length + (matches.length === 1 ? " paper found" : " papers found");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("search-form");
    var list = document.getElementById("results");
    var count = document.getElementById("result-count");

    FILTERS.forEach(function (f) {
      fillSelect(form.elements[f.field], f.field, f.label);
    });

    var update = function () { render(form, list, count); };
    form.addEventListener("input", update);
    form.addEventListener("reset", function () { setTimeout(update); });
    form.addEventListener("submit", function (e) { e.preventDefault(); });
    update();
  });
})();
