// 项目数据
const projects = [
  {
    id: 1,
    title: "倒计时应用 - Days Matter",
    description:
      "✅ 多分类管理 • 🎨 主题颜色定制 • ⏰ 精准时间计算 • 💾 本地数据存储 • 📤 数据导入导出",
    link: "https://github.com/Qcaid/Countdown",
    category: "web",
  },
  {
    id: 2,
    title: "MultiPost",
    description: "一个用于在多个社交平台上发布内容的浏览器扩展。",
    link: "https://github.com/leaperone/MultiPost-Extension",
    category: "web",
  },
  {
    id: 3,
    title: "Learn_MarkDown",
    description: "一个现代化的、交互式的Markdown学习平台，帮助用户快速掌握Markdown语法。项目采用React和Material-UI构建，提供实时预览和丰富的教程示例。",
    link: "https://github.com/Qcaid/Learn_MarkDown",
    category: "web",
    },
  {
    id: 4,
    title: "Birthday-Demo",
    description: "一个精心设计的生日祝福网页，可以展示温馨的生日祝福、友情计时器和音乐播放等功能。", 
    link: "https://github.com/Qcaid/Birthday-Demo",
    category: "mobile",
  }
];

// 渲染项目列表
function renderProjects(filter = "all") {
  const projectList = document.querySelector(".project-list");
  projectList.innerHTML = "";

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  filteredProjects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.className = "project-item";
    projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">查看项目</a>
        `;
    projectList.appendChild(projectItem);
  });
}

// 初始化页面
window.addEventListener("DOMContentLoaded", () => {
  renderProjects();

  
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });

  // 显示PC端弹窗
  const popup = document.getElementById("pc-popup");
  if (popup) {
    popup.style.display = "block";
  }
});

// 关闭弹窗功能
function closePopup() {
  const popup = document.getElementById("pc-popup");
  if (popup) {
    popup.style.display = "none";
  }
}
