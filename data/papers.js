// The list of exam papers the Exam Paper Search tool searches.
// Saved as a .js file (not .json) so the site also works when opened
// straight from a computer, where browsers block reading .json files.
//
// To add a paper, copy one line and change the details.
// `name` is the school's full name: leave it "" to show just the code.
// `url` is the paper's Google Drive link; `markingScheme` is the link to its
// marking scheme, or "" if there isn't one.
window.SCHOOLS = {
  AIS: "Anglican High School",
  BSS: "",
  BVS: "",
  BWS: "",
  CHS: "",
  CSS: "",
  FMS: "",
  GMS: "",
  GRS: "",
  JYSS: "",
  KSS: "",
  MGS: "",
  NV: "Naval Base Secondary"
};

window.PAPERS = [
  { school: "NV",   year: 2021, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1d_s0sprWL16jzuFxJMZdJC8UF8gq1JGV/view", markingScheme: "https://drive.google.com/file/d/1IshMj9AGLigAPSE6NwhI2tKz5ryBrbjb/view" },
  { school: "NV",   year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/17uRWZWXjkUPOWhPhK13npkGuIY1evxSQ/view", markingScheme: "https://drive.google.com/file/d/1tNsU4mB0arqb9L2MN1Br3rA7uBPpNVA2/view" },
  { school: "AIS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1n-ruE7bTGzwwUYdk_rDo0TunTxUezCpg/view", markingScheme: "https://drive.google.com/file/d/1WTNqc4FVwvPrUHoiFBoRiqB5MAoYBxBZ/view" },
  { school: "BSS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/17WqicD3nxCZaXP5pLJHYhSqg5y6iPL_1/view", markingScheme: "" },
  { school: "BVS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1GqEm_p5YN7nBveGlXY599-5_4l7NHpno/view", markingScheme: "https://drive.google.com/file/d/1pjEkwa_80qmhdzWexrs-ozs2ar_ulDak/view" },
  { school: "BWS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1cPcXz7AfeI8A8ur19ywbpyvN5JF238oh/view", markingScheme: "https://drive.google.com/file/d/1pTXsWIpaHUTr-fO4WMg7mOog9BqDkEVL/view" },
  { school: "CHS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/16dZWkkvCfS9Gt8HzwxTUJpZ3w5QlThKg/view", markingScheme: "https://drive.google.com/file/d/1LwJmeClo8hPexYvNSiZ0PjmQK5CZJXBZ/view" },
  { school: "CSS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1-JZRdpsxAYG8u5qTHVfl9wOU0Ofikf-c/view", markingScheme: "https://drive.google.com/file/d/10JukUP7g4Qh3qhf_p1M4ZjbcH3S_SxN7/view" },
  { school: "FMS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1_CFg7_FmlSuFx0yNs7DIfhS8pfeV5vG3/view", markingScheme: "https://drive.google.com/file/d/1-07MbildGZIyWsFd6zE6ewt7SHzIJOxE/view" },
  { school: "GMS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1A2cQz_BAgGr6hODC4R4kPcGTqq7426ZX/view", markingScheme: "https://drive.google.com/file/d/1KFjNrMxROF7fy5iJcoz2A3BlZb-m6SrO/view" },
  { school: "GRS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1kwLt5okAO2SOUGa5KmUkCYQsL_ZqEnnT/view", markingScheme: "https://drive.google.com/file/d/1FgBrx3cMLHRKr4_qAwqvTjapdwkVce2m/view" },
  { school: "JYSS", year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/13WQsmvi9I8nvhY8Dbtsd53H0n9j5CUai/view", markingScheme: "https://drive.google.com/file/d/1nwT_45E1_HI_iApr--1YH-vUv8QauSw9/view" },
  { school: "KSS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/1RsmpRR1T1tF7wQyLHHRjqCCpu3Y6s2hw/view", markingScheme: "" },
  { school: "MGS",  year: 2022, level: "Sec 3", stream: "Express", subject: "A-Math", exam: "End-of-Year", url: "https://drive.google.com/file/d/12s5rjmateEREnxFxsfE7_aZcaGw16snu/view", markingScheme: "https://drive.google.com/file/d/1Yv8qdA06-g08CQX7ozaAru20L7WY8O5W/view" }
];
