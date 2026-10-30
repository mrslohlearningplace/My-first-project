// Exam Paper Search: filters window.PAPERS (from data/papers.js) by a
// school text search plus one dropdown per detail and a topic dropdown,
// and lists the matches. With a topic chosen, each result also lists
// the question numbers on that topic.
(function () {
  var papers = window.PAPERS || [];
  var schools = window.SCHOOLS || {};
  var topics = window.TOPICS || {};

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

  // A link that opens in a new tab.
  function makeLink(href, text) {
    var link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = text;
    return link;
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

  // Fill the topic dropdown with every topic used by at least one question,
  // in syllabus order (the order of window.TOPICS).
  function fillTopicSelect(select) {
    var used = {};
    papers.forEach(function (p) {
      Object.keys(p.questions || {}).forEach(function (q) {
        p.questions[q].forEach(function (code) { used[code] = true; });
      });
    });

    select.appendChild(new Option("Any topic", ""));
    Object.keys(topics).forEach(function (code) {
      if (used[code]) select.appendChild(new Option(topics[code], code));
    });
  }

  // Question numbers in a paper tagged with the given topic code.
  function questionsOnTopic(paper, code) {
    var questions = paper.questions || {};
    return Object.keys(questions)
      .filter(function (q) { return questions[q].indexOf(code) !== -1; })
      .sort(function (a, b) { return a - b; });
  }

  function render(form, list, count) {
    var query = form.elements.school.value.trim().toLowerCase();
    var topic = form.elements.topic.value;

    var matches = papers.filter(function (p) {
      if (query && schoolLabel(p.school).toLowerCase().indexOf(query) === -1) {
        return false;
      }
      if (topic && questionsOnTopic(p, topic).length === 0) {
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

      var links = document.createElement("p");
      links.className = "result-links";
      links.appendChild(makeLink(p.url, "Open paper"));
      if (p.markingScheme) {
        links.appendChild(makeLink(p.markingScheme, "Open marking scheme"));
      }

      item.append(title, details);

      if (topic) {
        var onTopic = document.createElement("p");
        onTopic.className = "result-topic";
        onTopic.textContent =
          topics[topic] + ": " +
          questionsOnTopic(p, topic).map(function (q) { return "Q" + q; }).join(", ");
        item.appendChild(onTopic);
      }

      item.appendChild(links);
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
    fillTopicSelect(form.elements.topic);

    var update = function () { render(form, list, count); };
    form.addEventListener("input", update);
    form.addEventListener("reset", function () { setTimeout(update); });
    form.addEventListener("submit", function (e) { e.preventDefault(); });
    update();
  });
})();
