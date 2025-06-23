// ========== CONFIGURATION ==========

// Category-wise format options
const FILE_FORMAT_CATEGORIES = [
  {
    name: "Code",
    formats: [
      { ext: '.js', label: 'JavaScript' },
      { ext: '.ts', label: 'TypeScript' },
      { ext: '.jsx', label: 'React JSX' },
      { ext: '.tsx', label: 'React TSX' },
      { ext: '.py', label: 'Python' },
      { ext: '.java', label: 'Java' },
      { ext: '.c', label: 'C' },
      { ext: '.cpp', label: 'C++' },
      { ext: '.cs', label: 'C#' },
      { ext: '.php', label: 'PHP' },
      { ext: '.rb', label: 'Ruby' },
      { ext: '.go', label: 'Go' },
      { ext: '.rs', label: 'Rust' },
      { ext: '.swift', label: 'Swift' },
      { ext: '.kt', label: 'Kotlin' },
      { ext: '.scala', label: 'Scala' },
      { ext: '.pl', label: 'Perl' },
      { ext: '.sh', label: 'Shell Script' },
      { ext: '.bat', label: 'Batch File' },
      { ext: '.ps1', label: 'PowerShell' },
      { ext: '.html', label: 'HTML' },
      { ext: '.css', label: 'CSS' },
      { ext: '.scss', label: 'Sass/SCSS' },
      { ext: '.less', label: 'Less' },
      { ext: '.json', label: 'JSON' },
      { ext: '.xml', label: 'XML' },
      { ext: '.md', label: 'Markdown' },
      { ext: '.yml', label: 'YAML' },
      { ext: '.yaml', label: 'YAML' },
      { ext: '.sql', label: 'SQL' },
      { ext: '.ini', label: 'INI Config' },
      { ext: '.toml', label: 'TOML Config' },
      { ext: '.dockerfile', label: 'Dockerfile' },
      { ext: '.makefile', label: 'Makefile' }
    ]
  },
  {
    name: "Image",
    formats: [
      { ext: '.png', label: 'PNG Image' }, { ext: '.jpg', label: 'JPG Image' },
      { ext: '.jpeg', label: 'JPEG Image' }, { ext: '.gif', label: 'GIF Image' },
      { ext: '.svg', label: 'SVG Image' }, { ext: '.ico', label: 'ICO (icon)' },
      { ext: '.webp', label: 'WebP Image' }, { ext: '.bmp', label: 'BMP Image' },
      { ext: '.apng', label: 'APNG Image' }, { ext: '.tif', label: 'TIFF Image' },
      { ext: '.tiff', label: 'TIFF Image' }, { ext: '.jfif', label: 'JFIF Image' },
      { ext: '.pjpeg', label: 'PJPEG Image' }, { ext: '.pjp', label: 'PJP Image' },
      { ext: '.avif', label: 'AVIF Image' }
    ]
  },
  {
    name: "Text",
    formats: [
      { ext: '.txt', label: 'Text' }, { ext: '.log', label: 'Log' }, { ext: '.csv', label: 'CSV' }
    ]
  },
  {
    name: "Document",
    formats: [
      { ext: '.docx', label: 'DOCX' }, { ext: '.pdf', label: 'PDF' }, { ext: '.rtf', label: 'Rich Text Format' },
      { ext: '.odt', label: 'OpenDocument Text' }, { ext: '.pptx', label: 'PowerPoint' },
      { ext: '.xlsx', label: 'Excel' }
    ]
  },
  {
    name: "Audio/Video",
    formats: [
      { ext: '.mp3', label: 'MP3 Audio' }, { ext: '.mp4', label: 'MP4 Video' }, { ext: '.wav', label: 'WAV Audio' },
      { ext: '.ogg', label: 'OGG Audio' }, { ext: '.webm', label: 'WebM Video' }, { ext: '.flac', label: 'FLAC Audio' }
    ]
  },
  {
    name: "Font",
    formats: [
      { ext: '.woff', label: 'WOFF Font' }, { ext: '.woff2', label: 'WOFF2 Font' },
      { ext: '.ttf', label: 'TTF Font' }, { ext: '.eot', label: 'EOT Font' }, { ext: '.otf', label: 'OTF Font' }
    ]
  },
  {
    name: "Other",
    formats: [
      { ext: '.zip', label: 'ZIP Archive' }, { ext: '.tar', label: 'TAR Archive' },
      { ext: '.gz', label: 'GZip' }
    ]
  }
];

// For file icons
const FILE_ICONS = {
  folder: 'fa-folder', js: 'fa-js', ts: 'fa-code', jsx: 'fa-code', tsx: 'fa-code',
  py: 'fa-python', java: 'fa-coffee', c: 'fa-c', cpp: 'fa-c', cs: 'fa-c', php: 'fa-php',
  rb: 'fa-gem', go: 'fa-golang', rs: 'fa-rust', swift: 'fa-swift', kt: 'fa-korvue', scala: 'fa-code', pl: 'fa-code',
  sh: 'fa-terminal', bat: 'fa-terminal', ps1: 'fa-terminal', html: 'fa-html5', css: 'fa-css3-alt',
  scss: 'fa-css3-alt', less: 'fa-css3-alt', json: 'fa-file-code', xml: 'fa-file-code', md: 'fa-markdown',
  yml: 'fa-file-code', yaml: 'fa-file-code', sql: 'fa-database', ini: 'fa-file-lines', toml: 'fa-file-lines',
  dockerfile: 'fa-docker', makefile: 'fa-cogs', 
  png: 'fa-file-image', jpg: 'fa-file-image', jpeg: 'fa-file-image', gif: 'fa-file-image',
  svg: 'fa-file-image', ico: 'fa-file-image', webp: 'fa-file-image', bmp: 'fa-file-image',
  apng: 'fa-file-image', tif: 'fa-file-image', tiff: 'fa-file-image', jfif: 'fa-file-image',
  pjpeg: 'fa-file-image', pjp: 'fa-file-image', avif: 'fa-file-image',
  txt: 'fa-file-lines', log: 'fa-file-lines', csv: 'fa-file-csv',
  docx: 'fa-file-word', pdf: 'fa-file-pdf', rtf: 'fa-file-lines', odt: 'fa-file-word',
  pptx: 'fa-file-powerpoint', xlsx: 'fa-file-excel',
  mp3: 'fa-file-audio', mp4: 'fa-file-video', wav: 'fa-file-audio', ogg: 'fa-file-audio',
  webm: 'fa-file-video', flac: 'fa-file-audio',
  woff: 'fa-font', woff2: 'fa-font', ttf: 'fa-font', eot: 'fa-font', otf: 'fa-font',
  zip: 'fa-file-zipper', tar: 'fa-file-zipper', gz: 'fa-file-zipper',
  default: 'fa-file'
};
// For sidebar icons/colors
const FOLDER_ICON_COLOR = {
  "Collections": { icon: "fa-folder-open", color: "#0074d9" },
  "Documents":    { icon: "fa-file-lines", color: "#ff9800" },
  "Downloads":    { icon: "fa-circle-arrow-down", color: "#009688" },
  "Music":        { icon: "fa-music", color: "#e91e63" },
  "Pictures":     { icon: "fa-image", color: "#3f51b5" },
  "Videos":       { icon: "fa-film", color: "#f44336" }
};
const DEFAULT_FOLDERS = [
  { name: 'Collections', type: 'folder', children: [] }, { name: 'Documents', type: 'folder', children: [] },
  { name: 'Downloads', type: 'folder', children: [] }, { name: 'Music', type: 'folder', children: [] },
  { name: 'Pictures', type: 'folder', children: [] }, { name: 'Videos', type: 'folder', children: [] }
];

// ========== STATE ==========
let root = loadFS() || { name: "Files", type: "folder", children: JSON.parse(JSON.stringify(DEFAULT_FOLDERS)) };
let currentFolder = root, viewMode = 'grid';

// ========== UTILS ==========
function saveFS() { localStorage.setItem('fm-data', JSON.stringify(root)); }
function loadFS() { try { return JSON.parse(localStorage.getItem('fm-data')); } catch { return null; } }
function getFileExt(name) {
  let m = name.match(/\.([a-z0-9]+)$/i);
  if (m) return m[1].toLowerCase();
  if (/dockerfile$/i.test(name)) return "dockerfile";
  if (/makefile$/i.test(name)) return "makefile";
  return '';
}
function getFileIcon(node) {
  if (node.type === 'folder') return 'fa-folder';
  let ext = getFileExt(node.name);
  return FILE_ICONS[ext] || FILE_ICONS['default'];
}
function getFolderPath(folder) { let path = []; function find(node, pth) { if (node === folder) { path = pth.slice(); return true; } if (node.children) for (let ch of node.children) if (find(ch, [...pth, ch])) return true; return false; } find(root, [root]); return path; }
function findParent(node, curr = root) { if (curr.children && curr.children.includes(node)) return curr; for (let ch of (curr.children || [])) { let res = findParent(node, ch); if (res) return res; } return null; }
function uniqueName(parent, base, type) { let i = 1, name = base; while (parent.children.find(c => c.name === name && c.type === type)) name = `${base} (${i++})`; return name; }

// ========== FORMAT DROPDOWN (CATEGORY) ==========
function renderFormatDropdown(selectElem, currentExt) {
  selectElem.innerHTML = '';
  for (const cat of FILE_FORMAT_CATEGORIES) {
    const optgroup = document.createElement('optgroup');
    optgroup.label = cat.name;
    for (const fmt of cat.formats) {
      const opt = document.createElement('option');
      opt.value = fmt.ext;
      opt.textContent = fmt.label + ' (' + fmt.ext + ')';
      if (currentExt === fmt.ext) opt.selected = true;
      optgroup.appendChild(opt);
    }
    selectElem.appendChild(optgroup);
  }
}

// ========== SIDEBAR ==========
function renderSidebar() {
  const sidebar = document.getElementById('sidebar'); sidebar.innerHTML = '';
  const ul = document.createElement('ul'); renderSidebarTree(root, ul, 0); sidebar.appendChild(ul);
}
function renderSidebarTree(node, ul, level) {
  if (node === root) { node.children.forEach(child => renderSidebarTree(child, ul, level)); return; }
  if (node.type === 'folder') {
    const li = document.createElement('li');
    li.className = 'sidebar-folder' + (currentFolder === node ? ' selected' : '');
    let icon = 'fa-folder', color = 'var(--folder)';
    if (FOLDER_ICON_COLOR[node.name]) { icon = FOLDER_ICON_COLOR[node.name].icon; color = FOLDER_ICON_COLOR[node.name].color; }
    li.innerHTML = `<i class="fa ${icon}" style="color:${color}"></i>${node.name}`;
    li.onclick = e => { currentFolder = node; renderAll(); };
    ul.appendChild(li);
    if ((currentFolder === node || level < 1) && node.children && node.children.length) {
      const subUl = document.createElement('ul');
      node.children.forEach(child => renderSidebarTree(child, subUl, level + 1));
      ul.appendChild(subUl);
    }
  }
}

// ========== PATH BAR ==========
function renderPathBar() {
  const rootSpan = document.getElementById('path-root');
  rootSpan.onclick = () => { currentFolder = root; renderAll(); };
  const pathSpans = document.getElementById('path-parts'); pathSpans.innerHTML = '';
  const pathArr = getFolderPath(currentFolder);
  for (let i = 1; i < pathArr.length; ++i) {
    const span = document.createElement('span');
    span.className = 'path-part'; span.textContent = pathArr[i].name;
    span.onclick = (() => { const idx = i; return () => { currentFolder = pathArr[idx]; renderAll(); }; })();
    pathSpans.appendChild(document.createTextNode(' / ')); pathSpans.appendChild(span);
  }
}

// ========== MAIN PANEL ==========
function renderMainPanel() {
  const main = document.getElementById('main-panel');
  let files = (currentFolder.children || []);
  const q = document.getElementById('search-input').value.trim().toLowerCase();
  if (q) files = files.filter(f => f.name.toLowerCase().includes(q));
  files = files.slice().sort((a, b) => { if (a.type !== b.type) return a.type === 'folder' ? -1 : 1; return a.name.localeCompare(b.name); });
  if (viewMode === 'grid') main.innerHTML = `<div class="file-grid">${files.map(node => fileItemHTML(node)).join('')}</div>`;
  else main.innerHTML = `<div class="file-list">${files.map(node => fileItemHTML(node)).join('')}</div>`;
  files.forEach((node, idx) => {
    const item = main.querySelectorAll('.file-item')[idx];
    item.onclick = e => { if (e.target.closest('.file-actions')) return; if (node.type === 'folder') { currentFolder = node; renderAll(); } else openEditModal(node, false); };
    item.querySelector('.file-actions .edit-btn')?.addEventListener('click', e => { e.stopPropagation(); openEditModal(node, false); });
    item.querySelector('.file-actions .delete-btn')?.addEventListener('click', e => { e.stopPropagation(); openDeleteModal(node); });
    item.querySelector('.file-actions .rename-btn')?.addEventListener('click', e => { e.stopPropagation(); openEditModal(node, true); });
    item.querySelector('.file-actions .download-btn')?.addEventListener('click', e => { e.stopPropagation(); downloadFile(node); });
  });
}
function fileItemHTML(node) {
  const ext = getFileExt(node.name);
  let icon = `<i class="fa ${getFileIcon(node)} file-thumb"></i>`;
  if (node.type === 'file' && ['jpg','jpeg','png','gif','svg','ico','webp','bmp','apng','tif','tiff','jfif','pjpeg','pjp','avif'].includes(ext) && node.contentURL)
    icon = `<img src="${node.contentURL}" class="file-thumb" style="width:52px;height:52px;object-fit:cover;border-radius:5px"/>`;
  return `
  <div class="file-item" title="${node.name}">
    ${icon}
    <span class="file-name">${node.name}</span>
    <span class="file-ext">${node.type==='folder'?'':'.'+ext}</span>
    <div class="file-actions">
      ${node.type==='file'?`
        <button class="edit-btn" title="Edit"><i class="fa fa-pen"></i></button>
        <button class="download-btn" title="Download"><i class="fa fa-download"></i></button>
      `:''}
      <button class="rename-btn" title="Rename"><i class="fa fa-i-cursor"></i></button>
      <button class="delete-btn" title="Delete"><i class="fa fa-trash"></i></button>
    </div>
  </div>`;
}

// ========== MODAL (ADD/EDIT/RENAME/DELETE) ==========
let modalContext = null; // { mode: "new-file"|"new-folder"|"edit-file"|"rename-file"|"rename-folder", node, parent }
function openEditModal(node, isRenameOnly = false, isNew = false, isFolder = false) {
  const modalBg = document.getElementById('modal-bg'); modalBg.style.display = '';
  const nameInput = document.getElementById('edit-file-name');
  const sel = document.getElementById('edit-file-format');
  const contentArea = document.getElementById('edit-file-content');
  // Set modal context for save
  if (isNew && isFolder) {
    modalContext = { mode: "new-folder", node, parent: currentFolder };
    document.getElementById('modal-title').textContent = "New Folder";
    nameInput.value = "";
    nameInput.style.display = '';
    sel.style.display = 'none';
    contentArea.style.display = 'none';
  }
  else if (isNew && !isFolder) {
    modalContext = { mode: "new-file", node, parent: currentFolder };
    document.getElementById('modal-title').textContent = "New File";
    nameInput.value = "";
    nameInput.style.display = '';
    renderFormatDropdown(sel, ".txt");
    sel.style.display = '';
    sel.value = ".txt";
    contentArea.value = "";
    contentArea.style.display = '';
  }
  else if (isRenameOnly && node.type === "file") {
    modalContext = { mode: "rename-file", node, parent: null };
    document.getElementById('modal-title').textContent = "Rename File";
    nameInput.value = node.name.replace(/\.[^.]+$/, '');
    nameInput.style.display = '';
    renderFormatDropdown(sel, '.' + (getFileExt(node.name) || 'txt'));
    sel.value = '.' + (getFileExt(node.name) || 'txt');
    sel.style.display = '';
    contentArea.style.display = 'none';
  }
  else if (isRenameOnly && node.type === "folder") {
    modalContext = { mode: "rename-folder", node, parent: null };
    document.getElementById('modal-title').textContent = "Rename Folder";
    nameInput.value = node.name;
    nameInput.style.display = '';
    sel.style.display = 'none';
    contentArea.style.display = 'none';
  }
  else if (!isRenameOnly && node.type === "file") {
    modalContext = { mode: "edit-file", node, parent: null };
    document.getElementById('modal-title').textContent = node.name;
    nameInput.value = node.name.replace(/\.[^.]+$/, '');
    nameInput.style.display = '';
    renderFormatDropdown(sel, '.' + (getFileExt(node.name) || 'txt'));
    sel.value = '.' + (getFileExt(node.name) || 'txt');
    sel.style.display = '';
    contentArea.value = node.content || "";
    contentArea.style.display = '';
  }
  document.getElementById('modal-save').onclick = modalSaveHandler;
  document.getElementById('modal-close').onclick = closeModal;
}
function closeModal() {
  document.getElementById('modal-bg').style.display = 'none';
  modalContext = null;
}
function modalSaveHandler() {
  const nameInput = document.getElementById('edit-file-name');
  const sel = document.getElementById('edit-file-format');
  const contentArea = document.getElementById('edit-file-content');
  if (!modalContext) return;
  if (modalContext.mode === "new-folder") {
    let name = nameInput.value.trim();
    if (!name) { nameInput.focus(); return; }
    modalContext.parent.children.push({ name: uniqueName(modalContext.parent, name, 'folder'), type: 'folder', children: [] });
    saveFS(); renderAll(); closeModal();
  }
  else if (modalContext.mode === "new-file") {
    let base = nameInput.value.trim();
    let ext = sel.value;
    let content = contentArea.value;
    if (!base) { nameInput.focus(); return; }
    let name = uniqueName(modalContext.parent, base + ext, 'file');
    let node = { name, type: "file", content: content };
    if (['.jpg','.jpeg','.png','.gif','.svg','.ico','.webp','.bmp','.apng','.tif','.tiff','.jfif','.pjpeg','.pjp','.avif'].includes(ext))
      node.contentURL = content;
    modalContext.parent.children.push(node);
    saveFS(); renderAll(); closeModal();
  }
  else if (modalContext.mode === "rename-file") {
    let base = nameInput.value.trim();
    let ext = sel.value;
    if (!base) { nameInput.focus(); return; }
    modalContext.node.name = base + ext;
    saveFS(); renderAll(); closeModal();
  }
  else if (modalContext.mode === "rename-folder") {
    let base = nameInput.value.trim();
    if (!base) { nameInput.focus(); return; }
    modalContext.node.name = base;
    saveFS(); renderAll(); closeModal();
  }
  else if (modalContext.mode === "edit-file") {
    let base = nameInput.value.trim();
    let ext = sel.value;
    let content = contentArea.value;
    if (!base) { nameInput.focus(); return; }
    modalContext.node.name = base + ext;
    modalContext.node.content = content;
    saveFS(); renderAll(); closeModal();
  }
}
// Custom modal for delete confirmation
function openDeleteModal(node) {
  openCustomModal(
    `Delete "${node.name}"?`,
    `<div style="padding:14px 0;">Are you sure you want to delete <b>${node.name}</b>?</div>`,
    [
      { text: "Delete", style: "background:#f44336;color:#fff;", action: () => { confirmDelete(node); closeCustomModal(); } },
      { text: "Cancel", style: "", action: closeCustomModal }
    ]
  );
}
function confirmDelete(node) {
  let parent = findParent(node, root);
  if (parent) {
    parent.children = parent.children.filter(c => c !== node);
    if (currentFolder === node) currentFolder = root;
    saveFS(); renderAll();
  }
}

// ========== GENERIC CUSTOM MODAL ==========
function openCustomModal(title, bodyHtml, buttons) {
  document.getElementById('custom-modal-bg')?.remove();
  const bg = document.createElement('div');
  bg.id = 'custom-modal-bg';
  bg.className = 'modal-bg';
  bg.style.display = '';
  bg.innerHTML = `
    <div class="modal" style="min-width:280px;">
      <div class="modal-header">
        <span>${title}</span>
        <button onclick="document.getElementById('custom-modal-bg').remove()"><i class="fa fa-times"></i></button>
      </div>
      <div class="modal-body">${bodyHtml}</div>
      <div class="modal-footer"></div>
    </div>
  `;
  document.body.appendChild(bg);
  const footer = bg.querySelector('.modal-footer');
  buttons.forEach(btn => {
    const b = document.createElement('button');
    b.innerText = btn.text;
    b.style = btn.style || '';
    b.onclick = btn.action;
    footer.appendChild(b);
  });
}
function closeCustomModal() {
  document.getElementById('custom-modal-bg')?.remove();
}

// ========== ADD FOLDER/FILE WITH MODAL ==========
function newFolder() {
  let node = { name: "", type: "folder", children: [] };
  openEditModal(node, false, true, true);
}
function newFile() {
  let node = { name: "", type: "file", content: "" };
  openEditModal(node, false, true, false);
}

// ========== UPLOAD ==========
document.getElementById('file-input').onchange = function(e) {
  const files = Array.from(e.target.files);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = function(evt) {
      let ext = '.' + file.name.split('.').pop().toLowerCase();
      let node = { name: uniqueName(currentFolder, file.name, 'file'), type: 'file', content: evt.target.result };
      if (['.jpg','.jpeg','.png','.gif','.svg','.ico','.webp','.bmp','.apng','.tif','.tiff','.jfif','.pjpeg','.pjp','.avif'].includes(ext))
        node.contentURL = evt.target.result;
      currentFolder.children.push(node); saveFS(); renderAll();
    };
    if (['.jpg','.jpeg','.png','.gif','.svg','.ico','.webp','.bmp','.apng','.tif','.tiff','.jfif','.pjpeg','.pjp','.avif'].includes('.' + file.name.split('.').pop().toLowerCase()))
      reader.readAsDataURL(file);
    else reader.readAsText(file);
  });
  this.value = '';
};

// ========== DOWNLOAD AS FOLDER (ZIP) ==========
function addToZip(zip, node, path = '') {
  if (node.type === 'file') {
    let ext = getFileExt(node.name), data = node.content;
    if (['jpg','jpeg','png','gif','svg','ico','webp','bmp','apng','tif','tiff','jfif','pjpeg','pjp','avif'].includes(ext) && node.contentURL)
      data = dataURLtoBlob(node.contentURL), zip.file(path + node.name, data);
    else zip.file(path + node.name, data || '');
  } else if (node.type === 'folder') {
    let folder = zip.folder(path + node.name + '/');
    node.children.forEach(child => addToZip(folder, child, ''));
  }
}
function downloadCurrentFolder() {
  const zip = new JSZip();
  addToZip(zip, currentFolder, '');
  zip.generateAsync({ type: 'blob' }).then(content => { saveAs(content, `${currentFolder.name}.zip`); });
}
function downloadZip() {
  const zip = new JSZip();
  addToZip(zip, root, '');
  zip.generateAsync({ type: 'blob' }).then(content => { saveAs(content, 'All_Files.zip'); });
}
function downloadFile(node) {
  let blob;
  if (['jpg','jpeg','png','gif','svg','ico','webp','bmp','apng','tif','tiff','jfif','pjpeg','pjp','avif'].includes(getFileExt(node.name)) && node.contentURL)
    blob = dataURLtoBlob(node.contentURL);
  else blob = new Blob([node.content || ''], { type: 'text/plain' });
  saveAs(blob, node.name);
}
function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--) u8arr[n] = bstr.charCodeAt(n); return new Blob([u8arr], {type:mime});
}

// ========== EVENTS ==========
document.getElementById('search-input').oninput = renderMainPanel;
document.getElementById('new-folder-btn').onclick = newFolder;
document.getElementById('new-file-btn').onclick = newFile;
document.getElementById('upload-btn').onclick = () => document.getElementById('file-input').click();
document.getElementById('download-zip-btn').onclick = downloadZip;
document.getElementById('download-folder-btn').onclick = downloadCurrentFolder;
document.getElementById('sort-btn').onclick = () => openCustomModal(
  "Sort Info",
  `<div style="padding:14px 0;">Sorting is alphabetical by default.</div>`,
  [{ text: "OK", action: closeCustomModal }]
);
document.getElementById('refresh-btn').onclick = () => { renderAll(); };
document.getElementById('grid-view-btn').onclick = () => {
  viewMode = 'grid'; renderAll();
  document.getElementById('grid-view-btn').classList.add('active');
  document.getElementById('list-view-btn').classList.remove('active');
};
document.getElementById('list-view-btn').onclick = () => {
  viewMode = 'list'; renderAll();
  document.getElementById('list-view-btn').classList.add('active');
  document.getElementById('grid-view-btn').classList.remove('active');
};
document.getElementById('theme-toggle-btn').onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('fm-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  renderAll();
};
window.onload = () => {
  if (localStorage.getItem('fm-theme') === 'dark') document.body.classList.add('dark');
  renderAll();
};
function renderAll() { renderSidebar(); renderPathBar(); renderMainPanel(); }

// ========== MINDMAP FEATURE ==========
// --- Mindmap Button Event ---
document.getElementById('mindmap-btn').onclick = function() {
  renderMindmapModal(currentFolder);
  document.getElementById('mindmap-modal-bg').style.display = '';
};
document.getElementById('mindmap-modal-close').onclick = function() {
  document.getElementById('mindmap-modal-bg').style.display = 'none';
};

// --- Mindmap Rendering ---
function renderMindmapModal(folder) {
  const container = document.getElementById('mindmap-container');
  container.innerHTML = '';
  // Render as SVG tree
  const data = makeMindmapData(folder);
  container.appendChild(makeMindmapSVG(data));
}
// Convert folder/file structure to mindmap data
function makeMindmapData(node) {
  return {
    text: node.name,
    type: node.type,
    children: (node.children||[]).map(makeMindmapData)
  };
}
// Simple SVG mindmap renderer (horizontal tree)
function makeMindmapSVG(tree) {
  // --- Settings
  const nodeH = 36, nodeW = 150, hGap = 26, vGap = 18;
  let nodes = [], links = [];
  // Traverse and assign positions
  let maxDepth = 1;
  function layout(node, depth, x, y) {
    node._x = x; node._y = y; node._depth = depth;
    nodes.push(node);
    maxDepth = Math.max(maxDepth, depth);
    if (node.children && node.children.length) {
      let cy = y;
      node.children.forEach((ch, i) => {
        links.push({from: node, to: ch});
        layout(ch, depth+1, x + nodeW + hGap, cy);
        cy += nodeH + vGap + (ch.children && ch.children.length ? (ch.children.length-1)*(nodeH/2) : 0);
      });
      // Center parent if has children
      let totalH = (cy - y - nodeH - vGap);
      node._y = y + totalH/2;
    }
  }
  layout(tree, 0, 10, 10);
  let width = (maxDepth+1)*nodeW + maxDepth*hGap + 30;
  let height = nodes.reduce((h, n) => Math.max(h, n._y+nodeH+20), 0);

  // SVG elements
  const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.style.width = "100%";
  svg.style.height = "100%";
  svg.style.background = "#fafdff";

  // Draw links
  for(let l of links) {
    let x1 = l.from._x + nodeW, y1 = l.from._y + nodeH/2;
    let x2 = l.to._x, y2 = l.to._y + nodeH/2;
    let c1 = x1 + 32, c2 = x2 - 32;
    let path = document.createElementNS("http://www.w3.org/2000/svg","path");
    path.setAttribute("d", `M${x1},${y1} C${c1},${y1} ${c2},${y2} ${x2},${y2}`);
    path.setAttribute("stroke", "#b2bcd1");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke-width", "2");
    svg.appendChild(path);
  }

  // Draw nodes
  for(let n of nodes) {
    let g = document.createElementNS("http://www.w3.org/2000/svg","g");
    g.setAttribute("transform", `translate(${n._x},${n._y})`);
    let rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
    rect.setAttribute("width", nodeW);
    rect.setAttribute("height", nodeH);
    rect.setAttribute("rx", 8);
    rect.setAttribute("fill", n.type === 'folder' ? "#e8f3fd" : "#f6ffe9");
    rect.setAttribute("stroke", "#b2bcd1");
    rect.setAttribute("stroke-width", "1.5");
    g.appendChild(rect);

    let text = document.createElementNS("http://www.w3.org/2000/svg","text");
    text.setAttribute("x", nodeW/2);
    text.setAttribute("y", nodeH/2+6);
    text.setAttribute("text-anchor","middle");
    text.setAttribute("font-size","1.04em");
    text.setAttribute("fill", "#234");
    text.setAttribute("style","font-family:Segoe UI,Arial,sans-serif;");
    text.textContent = n.text;
    g.appendChild(text);

    svg.appendChild(g);
  }
  return svg;
}
