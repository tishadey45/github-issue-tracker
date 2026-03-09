const loadIssues = (status = "") => {
  // console.log(status);
  document.getElementById("loader").classList.remove("hidden"); // removing hidden class for showing loading spinner
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((json) => {
      let issues = json.data;

      // filter by status
      if (status) {
        issues = issues.filter((issue) => issue.status === status);
      }

      displayIssue(issues);
      document.getElementById("loader").classList.add("hidden"); // adding hidden class for hiding loading spinner
    });
};

// const loadIssues = (status = "") => {

//   const loader = document.getElementById("loader");
//   loader.classList.remove("hidden");

//   fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
//     .then((res) => res.json())
//     .then((json) => {

//       setTimeout(() => {   // testing delay

//         let issues = json.data;

//         if (status) {
//           issues = issues.filter((issue) => issue.status === status);
//         }

//         displayIssue(issues);

//         loader.classList.add("hidden");

//       }, 1000); // 2 second delay

//     });
// };

const loadIssueDetails = async (id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayIssueDetails(details.data);
};

document.getElementById("all-tab").addEventListener("click", function () {
  loadIssues();
});

document.getElementById("open-tab").addEventListener("click", function () {
  // console.log("open clicked");
  loadIssues("open");
});

document.getElementById("closed-tab").addEventListener("click", function () {
  loadIssues("closed");
});

document.getElementById("search-issue").addEventListener("input", function (e) {
  const searchValue = e.target.value;
  issueSearch(searchValue);
});

function issueSearch(searchText = "") {
  fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`,
  )
    .then((res) => res.json())
    .then((json) => displayIssue(json.data));
}

const displayIssueDetails = (issue) => {
  const issueContent = document.getElementById("modal-content");

  const colors = ["btn-error", "btn-warning", "btn-info", "btn-success"];

  issueContent.innerHTML = `
        <div>
            <h3 class="text-lg font-bold">${issue.title}</h3>

            <div class="flex gap-2 items-center">
                <span class="badge badge-success">${issue.status}</span>
                <p class="text-sm text-gray-600">
                    Opened by ${issue.author} • ${new Date(issue.createdAt).toLocaleDateString()}
                </p>
            </div>

            <div class="flex gap-4 pt-6">
                ${issue.labels
                  .map(
                    (label, index) =>
                      `<button class="btn btn-soft ${
                        colors[index % colors.length]
                      } rounded-4xl">${label}</button>`,
                  )
                  .join("")}
            </div>

            <p class="py-4 text-gray-600">${issue.description}</p>

            <div class="flex gap-20 bg-gray-100 py-4 px-4 rounded-lg">
                <div>
                    <p class="text-gray-500">Assignee</p>
                    <span>${issue.assignee || "Not assigned"}</span>
                </div>

                <div>
                    <p class="text-gray-500">Priority</p>
                    <span class="badge badge-error">${issue.priority}</span>
                </div>
            </div>
        </div>
    `;

  document.getElementById("issue_modal").showModal();
};

const displayIssue = (issues) => {
  const issueContainer = document.getElementById("issue-container");

  issueContainer.innerHTML = "";

  const colors = ["btn-error", "btn-warning", "btn-info", "btn-success"];

  issues.forEach((issue) => {
    const element = document.createElement("div");

    element.innerHTML = `
    
        <div class="${issue.status === "open" ? "card bg-base-100 shadow-sm border border-green-700 cursor-pointer" : "card bg-base-100 shadow-sm border border-purple-700 cursor-pointer"}" onclick="loadIssueDetails(${issue.id})">

            <div class="card-body bg-white rounded-xl shadow-sm px-5 space-y-4">

                <div class="flex justify-between">
                    <img src="./assets/${
                      issue.status === "open"
                        ? "Open-Status.png"
                        : "Closed-Status.png"
                    }" alt="">
                    
                    <button class="btn btn-soft btn-error rounded-4xl">
                        ${issue.priority}
                    </button>
                </div>

                <h2 class="font-semibold line-clamp-1">${issue.title}</h2>

                <p class="text-gray-500 line-clamp-2">
                    ${issue.description}
                </p>

                <div class="flex gap-4">
                    ${issue.labels
                      .map(
                        (label, index) =>
                          `<button class="btn btn-soft ${
                            colors[index % colors.length]
                          } rounded-4xl">${label}</button>`,
                      )
                      .join("")}
                </div>

                <hr class="border border-gray-300">

                <p class="text-gray-500">
                    #${issue.id} by ${issue.author}
                </p>

                <p class="text-gray-500">
                    ${new Date(issue.createdAt).toLocaleDateString()}
                </p>

            </div>

        </div>
    `;

    issueContainer.append(element);
  });
};

loadIssues();
