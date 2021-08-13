const timer = (ms) => new Promise((res) => setTimeout(res, ms));

var jobList = document.getElementsByClassName("artdeco-pagination__indicator");

var jobListCount = Number(
  jobList[jobList.length - 1].textContent.replace(/\s+/g, "")
);

nextBtn = document.getElementsByClassName(
  "artdeco-pagination__button artdeco-pagination__button--next artdeco-button artdeco-button--muted artdeco-button--icon-right artdeco-button--1 artdeco-button--tertiary ember-view"
);

for (let j = 0; j < jobListCount; j++) {
  var allJobs = document.getElementsByClassName(
    "reusable-search__result-container"
  );
  let btnLst = [];

  Array.prototype.forEach.call(allJobs, (job) => {
    noJobText = job.querySelector(".entity-result__simple-insight-text");
    if (noJobText) {
      if (
        noJobText.textContent.replace(/\s+/g, "").toLowerCase() ===
        "nolongeracceptingapplications"
      ) {
        unsaveButton = job.querySelector(".artdeco-dropdown__content-inner");
        btnId = unsaveButton.children[2].id;
        btnLst.push(String(btnId));
      }
    }
  });

  btnLstLen = btnLst.length;

  if (btnLstLen > 0) {
    for (let i = 0; i < btnLstLen; i++) {
      id = btnLst[i];
      btn = document.getElementById(id);
      btn.click();
      await timer(3000);
    }
  }
  nextBtn[0].click();

  await timer(5000);
}
