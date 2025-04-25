function makeProjectCard(p) {
    return `
    <div class="col-md-4 mb-4 project-card" data-category="${p.category}">
      <div class="card h-100 shadow">
        <img src="${p.thumbnail}" class="card-img-top" alt="${p.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.title}</h5>
          <p class="mt-auto"><a href="project.html?slug=${p.slug}" class="stretched-link">Learn More →</a></p>
        </div>
      </div>
    </div>`;
  }
  