// The list of exam papers the Exam Paper Search tool searches.
// Saved as a .js file (not .json) so the site also works when opened
// straight from a computer, where browsers block reading .json files.
//
// To add a paper, copy one entry and change the details.
// SCHOOLS: each school's full name. Leave it "" to show just the code.
// `url` is the paper's Google Drive link; `markingScheme` is the link to its
// marking scheme, or "" if there isn't one.
// `questions` lists each question number with its topic codes (see TOPICS).
window.SCHOOLS = {
  AIS: "Ahmad Ibrahim Secondary",
  BSS: "Bendemeer Secondary",
  BVS: "Bedok View Secondary",
  BWS: "",
  CHS: "Chung Cheng High School (Yishun)",
  CSS: "Canberra Secondary",
  FMS: "Fairfield Methodist School (Secondary)",
  GMS: "Geylang Methodist School (Secondary)",
  GRS: "Greenridge Secondary",
  JYSS: "Juying Secondary",
  KSS: "Kranji Secondary",
  MGS: "Methodist Girls' School",
  NV: "North Vista Secondary"
};

// Topic codes, in MOE A-Math (4049) syllabus order.
window.TOPICS = {
  QF: "Quadratic Functions",
  EI: "Equations & Inequalities",
  SU: "Surds",
  PP: "Polynomials & Partial Fractions",
  BT: "Binomial Theorem",
  EL: "Exponential & Log Functions",
  CG: "Coordinate Geometry",
  LL: "Linear Law",
  TR: "Trigonometry",
  PG: "Plane Geometry Proofs",
  DI: "Differentiation",
  IN: "Integration"
};

window.PAPERS = [
  { school: "NV",   year: 2021, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1d_s0sprWL16jzuFxJMZdJC8UF8gq1JGV/view", markingScheme: "https://drive.google.com/file/d/1IshMj9AGLigAPSE6NwhI2tKz5ryBrbjb/view",
    questions: { 1: ["PP"], 2: ["LL", "EL"], 3: ["BT"], 4: ["CG"], 5: ["PP", "EI"], 6: ["EL", "SU"], 7: ["EL"], 8: ["CG"], 9: ["QF"], 10: ["EL"], 11: ["EI"] } },
  { school: "NV",   year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/17uRWZWXjkUPOWhPhK13npkGuIY1evxSQ/view", markingScheme: "https://drive.google.com/file/d/1tNsU4mB0arqb9L2MN1Br3rA7uBPpNVA2/view",
    questions: { 1: ["PP"], 2: ["TR"], 3: ["EL"], 4: ["EL"], 5: ["EI"], 6: ["BT"], 7: ["SU"], 8: ["EL"], 9: ["CG"], 10: ["EL"], 11: ["PP"], 12: ["LL", "EL"], 13: ["CG"] } },
  { school: "AIS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1n-ruE7bTGzwwUYdk_rDo0TunTxUezCpg/view", markingScheme: "https://drive.google.com/file/d/1WTNqc4FVwvPrUHoiFBoRiqB5MAoYBxBZ/view",
    questions: { 1: ["PP"], 2: ["QF"], 3: ["TR"], 4: ["TR"], 5: ["EL"], 6: ["PP"], 7: ["EL", "PP"], 8: ["SU"], 9: ["EL"], 10: ["BT"], 11: ["QF", "EI"], 12: ["LL"], 13: ["CG"], 14: ["CG"] } },
  { school: "BSS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/17WqicD3nxCZaXP5pLJHYhSqg5y6iPL_1/view", markingScheme: "",
    questions: { 1: ["EI"], 2: ["TR"], 3: ["QF"], 4: ["LL", "EL"], 5: ["TR"], 6: ["EL"], 7: ["PP"], 8: ["LL"], 9: ["SU"], 10: ["QF", "EI"], 11: ["PP"], 12: ["EL"], 13: ["BT"], 14: ["CG"] } },
  { school: "BVS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1GqEm_p5YN7nBveGlXY599-5_4l7NHpno/view", markingScheme: "https://drive.google.com/file/d/1pjEkwa_80qmhdzWexrs-ozs2ar_ulDak/view",
    questions: { 1: ["EI", "CG"], 2: ["SU"], 3: ["SU"], 4: ["QF", "EI"], 5: ["PP"], 6: ["BT"], 7: ["EL"], 8: ["EL"], 9: ["TR"], 10: ["TR"], 11: ["CG"], 12: ["TR"], 13: ["PP"] } },
  { school: "BWS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1cPcXz7AfeI8A8ur19ywbpyvN5JF238oh/view", markingScheme: "https://drive.google.com/file/d/1pTXsWIpaHUTr-fO4WMg7mOog9BqDkEVL/view",
    questions: { 1: ["PP"], 2: ["EI"], 3: ["EL"], 4: ["SU"], 5: ["EI", "QF"], 6: ["BT"], 7: ["PP"], 8: ["SU"], 9: ["EL"], 10: ["EL"], 11: ["CG"], 12: ["LL"], 13: ["QF"] } },
  { school: "CHS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/16dZWkkvCfS9Gt8HzwxTUJpZ3w5QlThKg/view", markingScheme: "https://drive.google.com/file/d/1LwJmeClo8hPexYvNSiZ0PjmQK5CZJXBZ/view",
    questions: { 1: ["EI"], 2: ["TR"], 3: ["EL", "SU"], 4: ["CG"], 5: ["BT"], 6: ["CG"], 7: ["EL", "SU"], 8: ["PP"], 9: ["EL"], 10: ["EL"], 11: ["LL", "EL"], 12: ["PP"] } },
  { school: "CSS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1-JZRdpsxAYG8u5qTHVfl9wOU0Ofikf-c/view", markingScheme: "https://drive.google.com/file/d/10JukUP7g4Qh3qhf_p1M4ZjbcH3S_SxN7/view",
    questions: { 1: ["TR"], 2: ["PP"], 3: ["QF"], 4: ["SU"], 5: ["PP"], 6: ["EI"], 7: ["TR"], 8: ["EL"], 9: ["CG"], 10: ["BT"], 11: ["LL"], 12: ["CG"] } },
  { school: "FMS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1_CFg7_FmlSuFx0yNs7DIfhS8pfeV5vG3/view", markingScheme: "https://drive.google.com/file/d/1-07MbildGZIyWsFd6zE6ewt7SHzIJOxE/view",
    questions: { 1: ["SU"], 2: ["PP"], 3: ["EL"], 4: ["EL"], 5: ["EL"], 6: ["EL"], 7: ["EI"], 8: ["PP"], 9: ["CG"], 10: ["TR"], 11: ["TR"], 12: ["LL"] } },
  { school: "GMS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1A2cQz_BAgGr6hODC4R4kPcGTqq7426ZX/view", markingScheme: "https://drive.google.com/file/d/1KFjNrMxROF7fy5iJcoz2A3BlZb-m6SrO/view",
    questions: { 1: ["EI"], 2: ["QF"], 3: ["EI"], 4: ["TR"], 5: ["TR"], 6: ["PP"], 7: ["TR"], 8: ["EL"], 9: ["PP"], 10: ["PP"], 11: ["EL", "PP"], 12: ["TR"], 13: ["SU"], 14: ["CG"] } },
  { school: "GRS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1kwLt5okAO2SOUGa5KmUkCYQsL_ZqEnnT/view", markingScheme: "https://drive.google.com/file/d/1FgBrx3cMLHRKr4_qAwqvTjapdwkVce2m/view",
    questions: { 1: ["QF"], 2: ["SU"], 3: ["EL"], 4: ["EI"], 5: ["EL", "SU"], 6: ["BT"], 7: ["EL"], 8: ["QF"], 9: ["PP"], 10: ["CG", "EI"], 11: ["PP"], 12: ["LL"], 13: ["CG"] } },
  { school: "JYSS", year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/13WQsmvi9I8nvhY8Dbtsd53H0n9j5CUai/view", markingScheme: "https://drive.google.com/file/d/1nwT_45E1_HI_iApr--1YH-vUv8QauSw9/view",
    questions: { 1: ["SU"], 2: ["SU"], 3: ["EL"], 4: ["QF"], 5: ["PP"], 6: ["BT"], 7: ["BT"], 8: ["LL", "EL"], 9: ["TR"], 10: ["TR"], 11: ["TR"], 12: ["TR"], 13: ["PP"], 14: ["CG"], 15: ["EI"], 16: ["TR"] } },
  { school: "KSS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1RsmpRR1T1tF7wQyLHHRjqCCpu3Y6s2hw/view", markingScheme: "",
    questions: { 1: ["EI"], 2: ["EI"], 3: ["EI"], 4: ["QF"], 5: ["TR"], 6: ["SU"], 7: ["PP"], 8: ["BT"], 9: ["EL"], 10: ["LL"], 11: ["EL"], 12: ["PP"], 13: ["TR"], 14: ["EL"], 15: ["TR"], 16: ["CG"], 17: ["TR"], 18: ["CG"] } },
  { school: "MGS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/12s5rjmateEREnxFxsfE7_aZcaGw16snu/view", markingScheme: "https://drive.google.com/file/d/1Yv8qdA06-g08CQX7ozaAru20L7WY8O5W/view",
    questions: { 1: ["PP"], 2: ["QF"], 3: ["SU"], 4: ["EI", "QF"], 5: ["PP"], 6: ["EL", "PP"], 7: ["TR"], 8: ["EL"], 9: ["CG"], 10: ["LL"], 11: ["EL"], 12: ["TR"], 13: ["BT"] } }
];
