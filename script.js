const RESULT_BUCKET = "hashir-static-site";
const RESULT_PREFIX = "results/";

async function checkResult() {
  const fileName = document.getElementById("fileName").value.trim();
  if (!fileName) {
    alert("Enter resume filename");
    return;
  }

  const jsonFile =
    RESULT_PREFIX + fileName.replace(/\.[^/.]+$/, ".json");

  const url = `https://${RESULT_BUCKET}.s3.amazonaws.com/${jsonFile}`;

  document.getElementById("loader").classList.remove("hidden");
  document.getElementById("status").innerText = "Waiting for AI processing...";

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Not ready");

    const data = await res.json();
    showResult(data);

    document.getElementById("status").innerText = "AI processing complete!";
  } catch {
    document.getElementById("status").innerText =
      "Result not found yet. Try again in a few seconds.";
  } finally {
    document.getElementById("loader").classList.add("hidden");
  }
}

function showResult(data) {
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("name").innerText = data.name || "Unknown";
  document.getElementById("summary").innerText = data.summary || "";

  const skillsDiv = document.getElementById("skills");
  skillsDiv.innerHTML = "";

  (data.skills || []).forEach(skill => {
    const tag = document.createElement("span");
    tag.className = "skill-tag";
    tag.innerText = skill;
    skillsDiv.appendChild(tag);
  });
}
