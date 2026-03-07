const loadIssues = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((json) => displayIssue(json.data));
};
const displayIssue = (issues) => {
  // console.log(issues);
  const issueContainer = document.getElementById("issue-container");
  issueContainer.innerHTML = "";
  for (let issue of issues) {
    const element = document.createElement("div");
    element.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-sm">
                    <div class="card-body bg-white rounded-xl shadow-sm  px-5 space-y-4">
                        <div class="flex justify-between">
                            <img src="./assets/Open-Status.png" alt="">
                            <button class="btn btn-soft btn-error rounded-4xl">${issue.priority}</button>
                        </div>
                        <h2 class="font-semibold">${issue.title}</h2>
                        <p class="text-gray-500">${issue.description}</p>
                        <div class="flex gap-4">
                            <button class="btn btn-soft btn-error rounded-4xl">labels</button>
                            <button class="btn btn-soft btn-warning rounded-4xl ">labels</button>
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
