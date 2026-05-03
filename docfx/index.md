---
_disableContribution: true
_disableToc: true
_disableAffix: true
title: SP AI Skills — Community AI Skills for AI in SharePoint
---

<style>
:root {
  --sp-primary:#0f6cbd;
  --sp-primary-dark:#094074;
  --sp-teal:#038387;
  --sp-teal-dark:#025d60;
  --cat-doc-bg:#e8f5f5;--cat-doc-fg:#025d60;--cat-doc-border:#038387;
  --cat-list-bg:#f0ebf9;--cat-list-fg:#5c2d91;--cat-list-border:#8764b8;
  --cat-content-bg:#deeeff;--cat-content-fg:#094074;--cat-content-border:#0f6cbd;
  --cat-gov-bg:#fce8e2;--cat-gov-fg:#a4262c;--cat-gov-border:#c4314b;
  --cat-auto-bg:#dff6dd;--cat-auto-fg:#107c10;--cat-auto-border:#107c10;
}
.hero-section{background:linear-gradient(135deg,var(--sp-primary-dark) 0%,var(--sp-teal-dark) 100%);color:#fff;padding:56px 40px 48px;margin:-20px -20px 40px;border-radius:0 0 12px 12px}
@media(max-width:768px){.hero-section{padding:36px 20px 32px;margin:-12px -12px 28px}}
.hero-eyebrow{display:inline-block;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.3);border-radius:20px;font-size:12px;font-weight:600;letter-spacing:.04em;padding:3px 12px;margin-bottom:16px}
.hero-title{font-size:42px;font-weight:700;color:#fff;margin:0 0 14px;line-height:1.15}
@media(max-width:768px){.hero-title{font-size:28px}}
.hero-desc{font-size:17px;line-height:1.65;color:rgba(255,255,255,0.88);max-width:660px;margin:0 0 28px}
.hero-desc code{background:rgba(255,255,255,0.18);color:#fff;padding:1px 7px;border-radius:4px;font-size:.9em}
.hero-actions{display:flex;flex-wrap:wrap;gap:10px}
.sp-btn{display:inline-flex;align-items:center;gap:6px;padding:9px 22px;border-radius:20px;font-size:14px;font-weight:600;text-decoration:none!important;border:none;cursor:pointer;transition:150ms}
.sp-btn-primary{background:#fff;color:var(--sp-primary-dark)!important}
.sp-btn-primary:hover{background:#e6f0fa}
.sp-btn-outline{background:transparent;color:#fff!important;border:1.5px solid rgba(255,255,255,0.55)}
.sp-btn-outline:hover{background:rgba(255,255,255,0.1);border-color:#fff}
.skills-section{max-width:1160px;margin:0 auto}
.skills-controls{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:24px}
.filter-bar{display:flex;flex-wrap:wrap;gap:6px;flex:1}
.filter-btn{background:#f3f2f1;border:1px solid #e1dfdd;border-radius:20px;color:#323130;font-size:13px;font-weight:500;padding:5px 14px;cursor:pointer;transition:150ms}
.filter-btn:hover,.filter-btn.active{background:var(--sp-primary);border-color:var(--sp-primary);color:#fff}
.search-wrap{flex:0 0 220px}
.skill-search{width:100%;padding:6px 16px;border-radius:20px;border:1px solid #e1dfdd;font-size:13px;background:#fff;color:#323130}
.skill-search:focus{outline:2px solid var(--sp-primary);border-color:transparent}
.skills-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:16px;margin-bottom:40px}
.skill-card{display:flex;flex-direction:column;background:#fff;border:1px solid #edebe9;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.08);text-decoration:none!important;color:#323130!important;transition:box-shadow 150ms,transform 150ms;overflow:hidden}
.skill-card:hover{box-shadow:0 4px 12px rgba(0,0,0,.12);transform:translateY(-2px)}
.skill-card-top{height:6px}
.cat-document-quality .skill-card-top,.skill-card-top.cat-document-quality{background:var(--cat-doc-border)}
.cat-list-library .skill-card-top,.skill-card-top.cat-list-library{background:var(--cat-list-border)}
.cat-content-generation .skill-card-top,.skill-card-top.cat-content-generation{background:var(--cat-content-border)}
.cat-governance .skill-card-top,.skill-card-top.cat-governance{background:var(--cat-gov-border)}
.cat-automation .skill-card-top,.skill-card-top.cat-automation{background:var(--cat-auto-border)}
.skill-card-body{padding:16px 18px 10px;flex:1}
.skill-badge{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:600;border-radius:4px;padding:2px 8px;letter-spacing:.03em;text-transform:uppercase;margin-bottom:8px}
.skill-badge.cat-document-quality{background:var(--cat-doc-bg);color:var(--cat-doc-fg)}
.skill-badge.cat-list-library{background:var(--cat-list-bg);color:var(--cat-list-fg)}
.skill-badge.cat-content-generation{background:var(--cat-content-bg);color:var(--cat-content-fg)}
.skill-badge.cat-governance{background:var(--cat-gov-bg);color:var(--cat-gov-fg)}
.skill-badge.cat-automation{background:var(--cat-auto-bg);color:var(--cat-auto-fg)}
.skill-card-body h3{font-size:15px;font-weight:600;margin:0 0 6px;line-height:1.35;color:#201f1e}
.skill-card-body p{font-size:13px;line-height:1.5;color:#605e5c;margin:0}
.skill-card-footer{padding:10px 18px 14px;border-top:1px solid #f3f2f1;display:flex;flex-direction:column;gap:2px}
.skill-author{font-size:12px;font-weight:600;color:#323130}
.skill-tools{font-size:11px;color:#a19f9d;font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.no-results{text-align:center;padding:48px 24px;color:#a19f9d;font-size:15px}
</style>

<div class="hero-section">
<div class="hero-eyebrow">AI in SharePoint &mdash; Public Preview</div>
<h1 class="hero-title">SP AI Skills</h1>
<p class="hero-desc">Community-contributed AI Skills for AI in SharePoint (Microsoft&nbsp;365&nbsp;Copilot). Drop a <code>SKILL.md</code> file into your site&rsquo;s <code>Agent&nbsp;Assets/Skills/</code> library and give your team repeatable, consistent AI-powered workflows &mdash; no&nbsp;code&nbsp;required.</p>
<div class="hero-actions">
<a href="getting-started.html" class="sp-btn sp-btn-primary">Get Started</a>
<a href="contributing.html" class="sp-btn sp-btn-outline">Contribute a Skill</a>
<a href="https://github.com/LeonArmston/sp-ai-skills" target="_blank" class="sp-btn sp-btn-outline">GitHub</a>
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
<a href="samples/document-quality/metadata-completeness-checker/README.html" class="skill-card cat-document-quality" data-category="document-quality">
<div class="skill-card-top cat-document-quality"></div>
<div class="skill-card-body">
<span class="skill-badge cat-document-quality"><i class="bi bi-file-earmark-check"></i>Document Quality</span>
<h3>Metadata Completeness Checker</h3>
<p>Reviews selected documents and reports missing required metadata fields across a library.</p>
</div>
<div class="skill-card-footer">
<span class="skill-author">Leon Armston</span>
<span class="skill-tools">get_list_schema &middot; get_list_item_metadata</span>
</div>
</a>
<a href="samples/document-quality/rot-content-identifier/README.html" class="skill-card cat-document-quality" data-category="document-quality">
<div class="skill-card-top cat-document-quality"></div>
<div class="skill-card-body">
<span class="skill-badge cat-document-quality"><i class="bi bi-file-earmark-check"></i>Document Quality</span>
<h3>ROT Content Identifier</h3>
<p>Flags Redundant, Outdated, or Trivial content across a document library to support governance.</p>
</div>
<div class="skill-card-footer">
<span class="skill-author">Leon Armston</span>
<span class="skill-tools">get_list_item_metadata &middot; fetch_file</span>
</div>
</a>
<a href="samples/list-library/column-schema-auditor/README.html" class="skill-card cat-list-library" data-category="list-library">
<div class="skill-card-top cat-list-library"></div>
<div class="skill-card-body">
<span class="skill-badge cat-list-library"><i class="bi bi-table"></i>List &amp; Library</span>
<h3>Column Schema Auditor</h3>
<p>Reviews library columns against a defined standard and reports gaps or inconsistencies.</p>
</div>
<div class="skill-card-footer">
<span class="skill-author">Leon Armston</span>
<span class="skill-tools">get_list_schema &middot; discover_sharepoint_lists</span>
</div>
</a>
<a href="samples/content-generation/meeting-notes-to-actions/README.html" class="skill-card cat-content-generation" data-category="content-generation">
<div class="skill-card-top cat-content-generation"></div>
<div class="skill-card-body">
<span class="skill-badge cat-content-generation"><i class="bi bi-pencil-square"></i>Content Generation</span>
<h3>Meeting Notes to Actions</h3>
<p>Converts meeting notes into a structured SharePoint action items list with owners and due dates.</p>
</div>
<div class="skill-card-footer">
<span class="skill-author">Leon Armston</span>
<span class="skill-tools">create_list_items &middot; get_user_info</span>
</div>
</a>
<a href="samples/governance/version-change-summary/README.html" class="skill-card cat-governance" data-category="governance">
<div class="skill-card-top cat-governance"></div>
<div class="skill-card-body">
<span class="skill-badge cat-governance"><i class="bi bi-shield-check"></i>Governance</span>
<h3>Version Change Summary</h3>
<p>Summarises what changed between the current and previous version of a Word document.</p>
</div>
<div class="skill-card-footer">
<span class="skill-author">Leon Armston</span>
<span class="skill-tools">compare_file_versions &middot; list_item_versions</span>
</div>
</a>
</div>
<div id="noResults" class="no-results" style="display:none">
<p>No skills found. <a href="contributing.html">Contribute one!</a></p>
</div>
</div>

<script>
(function(){
var filterBtns=document.querySelectorAll('.filter-btn');
var cards=document.querySelectorAll('.skill-card');
var searchInput=document.getElementById('skillSearch');
var noResults=document.getElementById('noResults');
var currentFilter='all';
var currentQuery='';
function applyFilters(){
var visible=0;
cards.forEach(function(card){
var matchFilter=currentFilter==='all'||card.dataset.category===currentFilter;
var matchSearch=currentQuery===''||card.textContent.toLowerCase().indexOf(currentQuery)!==-1;
if(matchFilter&&matchSearch){card.style.display='flex';visible++;}
else{card.style.display='none';}
});
noResults.style.display=visible===0?'block':'none';
}
filterBtns.forEach(function(btn){
btn.addEventListener('click',function(){
filterBtns.forEach(function(b){b.classList.remove('active');});
this.classList.add('active');
currentFilter=this.dataset.filter;
applyFilters();
});
});
if(searchInput){searchInput.addEventListener('input',function(){
currentQuery=this.value.toLowerCase();
applyFilters();
});}
})();
</script>
