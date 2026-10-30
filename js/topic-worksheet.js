// Topic Worksheet: gathers every question tagged with the chosen topic
// (from data/papers.js) into one printable list. Each question shows its
// cropped pictures (from data/question-images.js) when they exist, or a
// link to its paper when they don't. The choice is kept in the page
// address (e.g. ?topic=SU&year=2022) so a worksheet can be shared.
(function () {
  var papers = window.PAPERS || [];
  var schools = window.SCHOOLS || {};
  var topics = window.TOPICS || {};
  var images = window.QUESTION_IMAGES || {};

  function schoolLabel(code) {
    var name = schools[code];
    return name ? name + " (" + code + ")" : code;
  }

  function onWorksheet(paper) {
    return paper.worksheet !== false;
  }

  // Question numbers in a paper tagged with the given topic code.
  function questionsOnTopic(paper, code) {
    var questions = paper.questions || {};
    return Object.keys(questions)
      .filter(function (q) { return questions[q].indexOf(code) !== -1; })
      .sort(function (a, b) { return a - b; });
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

  function fillSelects(form) {
    var used = {};
    var years = [];
    papers.filter(onWorksheet).forEach(function (p) {
      if (years.indexOf(p.year) === -1) years.push(p.year);
      Object.keys(p.questions || {}).forEach(function (q) {
        p.questions[q].forEach(function (code) { used[code] = true; });
      });
    });

    form.elements.topic.appendChild(new Option("Choose a topic", ""));
    Object.keys(topics).forEach(function (code) {
      if (used[code]) form.elements.topic.appendChild(new Option(topics[code], code));
    });

    form.elements.year.appendChild(new Option("Any year", ""));
    years.sort(function (a, b) { return b - a; }).forEach(function (y) {
      form.elements.year.appendChild(new Option(String(y), String(y)));
    });
  }

  function renderQuestion(paper, q) {
    var item = document.createElement("li");
    item.className = "worksheet-question";

    var title = document.createElement("h3");
    title.textContent = schoolLabel(paper.school) + " · " + paper.year + " · Question " + q;
    item.appendChild(title);

    var pictures = images[paper.school + "-" + paper.year + "-" + q] || [];
    if (pictures.length) {
      pictures.forEach(function (path, i) {
        var img = document.createElement("img");
        img.src = "../" + path;
        img.alt = title.textContent +
          (pictures.length > 1 ? " (part " + (i + 1) + " of " + pictures.length + ")" : "");
        item.appendChild(img);
      });
    } else {
      var missing = document.createElement("p");
      missing.className = "worksheet-missing";
      missing.append("Picture not added yet. ");
      missing.appendChild(makeLink(paper.url, "Open the paper"));
      missing.append(" and find Question " + q + ".");
      item.appendChild(missing);
    }

    var links = document.createElement("p");
    links.className = "result-links worksheet-links";
    links.appendChild(makeLink(paper.url, "Open paper"));
    if (paper.markingScheme) {
      links.appendChild(makeLink(paper.markingScheme, "Marking scheme"));
    }
    item.appendChild(links);

    return item;
  }

  function render(form, sheet, printButton) {
    var topic = form.elements.topic.value;
    var year = form.elements.year.value;

    // Keep the choice in the address so the worksheet can be shared.
    var params = new URLSearchParams();
    if (topic) params.set("topic", topic);
    if (year) params.set("year", year);
    var query = params.toString();
    history.replaceState(null, "", query ? "?" + query : location.pathname);

    sheet.textContent = "";
    printButton.disabled = !topic;

    if (!topic) {
      var prompt = document.createElement("p");
      prompt.className = "result-count";
      prompt.textContent = "Choose a topic to make a worksheet.";
      sheet.appendChild(prompt);
      return;
    }

    var chosen = papers
      .filter(function (p) { return !year || String(p.year) === year; })
      .sort(function (a, b) { return b.year - a.year || a.school.localeCompare(b.school); });

    var list = document.createElement("ol");
    list.className = "worksheet-questions";
    var paperCount = 0;
    var left = [];

    chosen.forEach(function (p) {
      var qs = questionsOnTopic(p, topic);
      if (!qs.length) return;
      if (!onWorksheet(p)) {
        left.push(schoolLabel(p.school) + " " + p.year);
        return;
      }
      paperCount += 1;
      qs.forEach(function (q) { list.appendChild(renderQuestion(p, q)); });
    });

    var heading = document.createElement("h2");
    heading.textContent = topics[topic] + " worksheet";

    var summary = document.createElement("p");
    summary.className = "result-count";
    var n = list.children.length;
    summary.textContent = n === 0
      ? "No questions on this topic" + (year ? " in " + year : "") + "."
      : n + (n === 1 ? " question" : " questions") + " from " +
        paperCount + (paperCount === 1 ? " paper" : " papers") +
        (year ? " (" + year + ")" : "") + ".";

    sheet.append(heading, summary, list);

    if (left.length) {
      var note = document.createElement("p");
      note.className = "worksheet-note";
      note.textContent = "Left out: " + left.join(", ") +
        ", because that file has worked solutions printed with the questions.";
      sheet.appendChild(note);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("worksheet-form");
    var sheet = document.getElementById("worksheet");
    var printButton = document.getElementById("print-button");

    fillSelects(form);

    // Start from the address, e.g. ?topic=SU&year=2022, if it names valid options.
    var params = new URLSearchParams(location.search);
    ["topic", "year"].forEach(function (name) {
      var value = params.get(name);
      var select = form.elements[name];
      if (value && Array.prototype.some.call(select.options, function (o) { return o.value === value; })) {
        select.value = value;
      }
    });

    var update = function () { render(form, sheet, printButton); };
    form.addEventListener("input", update);
    printButton.addEventListener("click", function () { window.print(); });
    update();
  });
})();
