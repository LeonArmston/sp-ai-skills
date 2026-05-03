---
_disableContribution: true
_disableToc: true
_disableAffix: true
title: SP AI Skills — Community AI Skills for AI in SharePoint
---

<div class="hero-section">
  <div class="hero-content">
    <div class="hero-badge">&#x26A0; AI in SharePoint &mdash; Public Preview</div>
    <h1 class="hero-title">SP AI Skills</h1>
    <p class="hero-description">
      Community-contributed AI Skills for AI in SharePoint (Microsoft&nbsp;365&nbsp;Copilot).
      Drop a <code>SKILL.md</code> file into your site&rsquo;s <code>Agent&nbsp;Assets/Skills/</code>
      library and give your team repeatable, consistent AI-powered workflows &mdash; no&nbsp;code&nbsp;required.
    </p>
    <div class="hero-actions">
      <a href="getting-started.html" class="hero-btn hero-btn-primary">Get Started</a>
      <a href="contributing.html" class="hero-btn hero-btn-outline">Contribute a Skill</a>
      <a href="https://github.com/LeonArmston/sp-ai-skills" target="_blank" class="hero-btn hero-btn-outline hero-btn-github">
        <svg height="18" width="18" viewBox="0 0 16 16" fill="currentColor" style="vertical-align:middle;margin-right:6px"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        GitHub
      </a>
    </div>
  </div>
</div>

<div class="skills-section">
  <div class="skills-controls">
    <div class="filter-bar">
      <button class="filter-btn active" data-filter="all">All Skills</button>
      <button class="filter-btn" data-filter="document-quality">Document Quality</button>
      <button class="filter-btn" data-filter="list-library">List &amp; Library</button>
      <button class="filter-btn" data-filter="content-generation">Content Generation</button>
      <button class="filter-btn" data-filter="governance">Governance</button>
      <button class="filter-btn" data-filter="automation">Automation</button>
    </div>
    <div class="search-wrap">
      <input type="text" id="skillSearch" class="skill-search" placeholder="Search skills&hellip;" aria-label="Search skills" />
    </div>
  </div>

  <div class="skills-grid" id="skillsGrid">

    <a href="samples/document-quality/metadata-completeness-checker/README.html" class="skill-card" data-category="document-quality">
      <div class="skill-card-icon cat-document-quality">&#x1F4C4;</div>
      <div class="skill-card-body">
        <span class="skill-badge cat-document-quality">Document Quality</span>
        <h3>Metadata Completeness Checker</h3>
        <p>Reviews selected documents and reports missing required metadata fields across a library.</p>
      </div>
      <div class="skill-card-footer">
        <span class="skill-author">Leon Armston</span>
        <span class="skill-tools">get_list_schema &middot; get_list_item_metadata</span>
      </div>
    </a>

    <a href="samples/document-quality/rot-content-identifier/README.html" class="skill-card" data-category="document-quality">
      <div class="skill-card-icon cat-document-quality">&#x1F4C4;</div>
      <div class="skill-card-body">
        <span class="skill-badge cat-document-quality">Document Quality</span>
        <h3>ROT Content Identifier</h3>
        <p>Flags Redundant, Outdated, or Trivial content across a document library to support governance.</p>
      </div>
      <div class="skill-card-footer">
        <span class="skill-author">Leon Armston</span>
        <span class="skill-tools">get_list_item_metadata &middot; fetch_file</span>
      </div>
    </a>

    <a href="samples/list-library/column-schema-auditor/README.html" class="skill-card" data-category="list-library">
      <div class="skill-card-icon cat-list-library">&#x1F4CB;</div>
      <div class="skill-card-body">
        <span class="skill-badge cat-list-library">List &amp; Library</span>
        <h3>Column Schema Auditor</h3>
        <p>Reviews library columns against a defined standard and reports gaps or inconsistencies.</p>
      </div>
      <div class="skill-card-footer">
        <span class="skill-author">Leon Armston</span>
        <span class="skill-tools">get_list_schema &middot; discover_sharepoint_lists</span>
      </div>
    </a>

    <a href="samples/content-generation/meeting-notes-to-actions/README.html" class="skill-card" data-category="content-generation">
      <div class="skill-card-icon cat-content-generation">&#x270D;&#xFE0F;</div>
      <div class="skill-card-body">
        <span class="skill-badge cat-content-generation">Content Generation</span>
        <h3>Meeting Notes to Actions</h3>
        <p>Converts meeting notes into a structured SharePoint action items list with owners and due dates.</p>
      </div>
      <div class="skill-card-footer">
        <span class="skill-author">Leon Armston</span>
        <span class="skill-tools">create_list_items &middot; get_user_info</span>
      </div>
    </a>

    <a href="samples/governance/version-change-summary/README.html" class="skill-card" data-category="governance">
      <div class="skill-card-icon cat-governance">&#x1F3DB;&#xFE0F;</div>
      <div class="skill-card-body">
        <span class="skill-badge cat-governance">Governance</span>
        <h3>Version Change Summary</h3>
        <p>Summarises what changed between the current and previous version of a Word document.</p>
      </div>
      <div class="skill-card-footer">
        <span class="skill-author">Leon Armston</span>
        <span class="skill-tools">compare_file_versions &middot; list_item_versions</span>
      </div>
    </a>

  </div>

  <div class="no-results" id="noResults" style="display:none">
    <p>No skills found matching your search. <a href="contributing.html">Contribute one!</a></p>
  </div>
</div>

<script>
(function () {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.skill-card');
  var searchInput = document.getElementById('skillSearch');
  var noResults = document.getElementById('noResults');
  var currentFilter = 'all';
  var currentQuery = '';

  function applyFilters() {
    var visible = 0;
    cards.forEach(function (card) {
      var matchFilter = currentFilter === 'all' || card.dataset.category === currentFilter;
      var matchSearch = currentQuery === '' || card.textContent.toLowerCase().indexOf(currentQuery) !== -1;
      if (matchFilter && matchSearch) {
        card.style.display = 'flex';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });
    noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
      currentFilter = this.dataset.filter;
      applyFilters();
    });
  });

  searchInput.addEventListener('input', function () {
    currentQuery = this.value.toLowerCase();
    applyFilters();
  });
})();
</script>
