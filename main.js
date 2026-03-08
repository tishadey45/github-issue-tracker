const loadIssues = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((json) => displayIssue(json.data));
};

const loadIssueDetails = async (id) => {
  // console.log("clicked");
  const url = `
    https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayIssueDetails(details.data);
};
const displayIssueDetails = (issue) => {
  // console.log(issue);
  const issueContent = document.getElementById("modal-content");
  
  issueContent.innerHTML = `
                    <div>
                          <h3 class="text-lg font-bold">${issue.title}</h3>
                          <div class="flex gap-2" >
                          <span class="badge badge-success" >${issue.status}</span>
                         <p class="text-sm text-gray-600">
                        Opened by ${issue.author} • ${new Date(issue.createdAt).toLocaleDateString()}
                        </p>
                          </div>
                         
                        <p class="py-4 text-gray-600 ">${issue.description}</p>
                        <div class="flex gap-25 bg-gray-100 py-4" >
                        <div class="px-4" >
                         <p class="text-gray-500" >assignee:</p>
                        <span>${issue.assignee}</span>
                        </div>
                        <div>
                        <p class="text-gray-500" >priority:</p>
                        <span class="badge badge-error" >${issue.priority}</span>
                        </div>
                       
                        </div>
                        
                        </div>
`;
  document.getElementById("issue_modal").showModal();
};

const displayIssue = (issues) => {
  // console.log(issues);
  const issueContainer = document.getElementById("issue-container");
  issueContainer.innerHTML = "";
  for (let issue of issues) {
    const element = document.createElement("div");
    const colors = ["btn-error", "btn-warning", "btn-info", "btn-success"];
    element.innerHTML = `
       


        <div class="card bg-base-100 shadow-sm" onClick ="loadIssueDetails(${issue.id})">
                    <div class="card-body bg-white rounded-xl shadow-sm  px-5 space-y-4">
                        <div class="flex justify-between">
                            <img src="./assets/Open-Status.png" alt="">
                            <button class="btn btn-soft btn-error rounded-4xl">${issue.priority}</button>
                        </div>
                        <h2 class="font-semibold line-clamp-1">${issue.title}</h2>
                        <p class="text-gray-500 line-clamp-2">${issue.description}</p>
                        <div class="flex gap-4">
                      ${issue.labels
                        .map(
                          (label, index) =>
                            `<button class="btn btn-soft ${colors[index % colors.length]} rounded-4xl">${label}</button>`,
                        )
                        .join("")}
                           
                        </div>
                        <hr class="border border-gray-300">
                        <p class="text-gray-500">#1 by john_doe</p>
                        <p class="text-gray-500">1/15/2024</p>
                    </div>
        `;
    issueContainer.append(element);
  }
};

loadIssues();
