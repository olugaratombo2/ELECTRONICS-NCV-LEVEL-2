const DB_NAME = 'electronicsDocumentsDB';
const DB_VERSION = 1;
const STORE_NAME = 'files';
const STORAGE_PREFIX = 'personalPaper_';

let fileCache = new Map();

function getStorageKey(year, type) {
  return STORAGE_PREFIX + year + '_' + type;
}

function openFileDatabase() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB is not supported by this browser.'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = event => {
      const database = event.target.result;

      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME, { keyPath: 'key' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function saveFileToDatabase(fileData) {
  return openFileDatabase().then(database => {
    return new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      store.put(fileData);

      transaction.oncomplete = () => {
        database.close();
        resolve();
      };

      transaction.onerror = () => {
        database.close();
        reject(transaction.error);
      };
    });
  });
}

function getFileFromDatabase(key) {
  return openFileDatabase().then(database => {
    return new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE_NAME, 'readonly');
      const request = transaction.objectStore(STORE_NAME).get(key);

      request.onsuccess = () => {
        database.close();
        resolve(request.result || null);
      };

      request.onerror = () => {
        database.close();
        reject(request.error);
      };
    });
  });
}

function getAllFilesFromDatabase() {
  return openFileDatabase().then(database => {
    return new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE_NAME, 'readonly');
      const request = transaction.objectStore(STORE_NAME).getAll();

      request.onsuccess = () => {
        database.close();
        resolve(request.result || []);
      };

      request.onerror = () => {
        database.close();
        reject(request.error);
      };
    });
  });
}

function deleteFileFromDatabase(key) {
  return openFileDatabase().then(database => {
    return new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE_NAME, 'readwrite');
      transaction.objectStore(STORE_NAME).delete(key);

      transaction.oncomplete = () => {
        database.close();
        resolve();
      };

      transaction.onerror = () => {
        database.close();
        reject(transaction.error);
      };
    });
  });
}

function readOldLocalStorageFile(key) {
  const savedValue = localStorage.getItem(key);

  if (!savedValue) {
    return null;
  }

  try {
    const parsedValue = JSON.parse(savedValue);

    if (
      parsedValue &&
      typeof parsedValue === 'object' &&
      typeof parsedValue.content === 'string'
    ) {
      return {
        key,
        kind: parsedValue.kind === 'pdf' ? 'pdf' : 'text',
        content: parsedValue.content,
        name: parsedValue.name || 'Uploaded file',
        type: parsedValue.type || (
          parsedValue.kind === 'pdf'
            ? 'application/pdf'
            : 'text/plain'
        )
      };
    }
  } catch (error) {
    // Supports older plain-text uploads.
  }

  return {
    key,
    kind: 'text',
    content: savedValue,
    name: 'Uploaded file',
    type: 'text/plain'
  };
}

function getPersonalFileData(year, type) {
  const key = getStorageKey(year, type);

  return fileCache.get(key) || readOldLocalStorageFile(key);
}

function isPdfFile(file) {
  const fileName = (file.name || '').toLowerCase();

  return file.type === 'application/pdf' || fileName.endsWith('.pdf');
}

function uploadPersonalFile(year, type, input) {
  const file = input && input.files ? input.files[0] : null;

  if (!file) {
    return;
  }

  const pdf = isPdfFile(file);
  const reader = new FileReader();

  reader.onload = async event => {
    const key = getStorageKey(year, type);

    const fileData = {
      key,
      kind: pdf ? 'pdf' : 'text',
      content: event.target.result,
      name: file.name || 'Uploaded file',
      type: file.type || (pdf ? 'application/pdf' : 'text/plain')
    };

    try {
      await saveFileToDatabase(fileData);

      fileCache.set(key, fileData);

      // Remove any older copy from localStorage.
      localStorage.removeItem(key);

      if (typeof renderPapers === 'function') {
        await renderPapers();
      }
    } catch (error) {
      console.error('Storage error:', error);

      alert(
        'The document could not be saved. ' +
        'Your browser may have blocked document storage or the file may be too large.'
      );
    }

    input.value = '';
  };

  reader.onerror = () => {
    input.value = '';
    alert('The file could not be read.');
  };

  reader.onabort = () => {
    input.value = '';
    alert('File reading was cancelled.');
  };

  if (pdf) {
    reader.readAsDataURL(file);
  } else {
    reader.readAsText(file);
  }
}

async function deletePersonalFile(year, type) {
  const key = getStorageKey(year, type);

  try {
    await deleteFileFromDatabase(key);
  } catch (error) {
    console.error('Delete error:', error);
  }

  fileCache.delete(key);
  localStorage.removeItem(key);

  if (typeof renderPapers === 'function') {
    await renderPapers();
  }
}

async function fileToBlob(fileData) {
  if (!fileData || typeof fileData.content !== 'string') {
    throw new Error('The saved file is invalid.');
  }

  if (fileData.content.startsWith('data:')) {
    const response = await fetch(fileData.content);

    if (!response.ok) {
      throw new Error('The saved document could not be read.');
    }

    return response.blob();
  }

  return new Blob([fileData.content], {
    type: fileData.type || 'text/plain'
  });
}

async function createFileUrl(fileData) {
  const blob = await fileToBlob(fileData);
  return URL.createObjectURL(blob);
}

async function downloadPersonalFile(year, type) {
  const fileData = getPersonalFileData(year, type);

  if (!fileData) {
    alert('No file has been uploaded yet.');
    return;
  }

  let url = '';

  try {
    url = await createFileUrl(fileData);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileData.name || type + '-' + year;
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 5000);
  } catch (error) {
    console.error('Download error:', error);

    if (url) {
      URL.revokeObjectURL(url);
    }

    alert('The file could not be downloaded.');
  }
}

async function openPersonalFile(year, type) {
  const fileData = getPersonalFileData(year, type);

  if (!fileData) {
    alert('No file has been uploaded yet.');
    return;
  }

  let url = '';

  try {
    url = await createFileUrl(fileData);

    const openedWindow = window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );

    if (!openedWindow) {
      URL.revokeObjectURL(url);
      alert('Please allow pop-ups to open this document.');
      return;
    }

    setTimeout(() => URL.revokeObjectURL(url), 120000);
  } catch (error) {
    console.error('Open error:', error);

    if (url) {
      URL.revokeObjectURL(url);
    }

    alert('The file could not be opened.');
  }
}

function fileButtons(year, type, title) {
  return (
    '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">' +
      '<button class="btn-primary" style="flex:1;" ' +
      'onclick="downloadPersonalFile(' + year + ', \'' + type + '\')">' +
      'Download ' + title +
      '</button>' +

      '<button class="btn-primary" style="flex:1;" ' +
      'onclick="openPersonalFile(' + year + ', \'' + type + '\')">' +
      'Open ' + title +
      '</button>' +
    '</div>' +

    '<br>' +

    '<button class="btn-primary" ' +
    'onclick="deletePersonalFile(' + year + ', \'' + type + '\')">' +
    'Delete Personal ' + title +
    '</button>'
  );
}

function renderPersonalFile(year, type, title) {
  const fileData = getPersonalFileData(year, type);

  if (!fileData) {
    return '<p><i>No personal ' + title.toLowerCase() +
      ' uploaded yet.</i></p>';
  }

  const safeName = escapeHtml(fileData.name || 'Uploaded file');

  if (fileData.kind === 'pdf') {
    return (
      '<h4>Personal ' + title + '</h4>' +
      '<p><small>' + safeName + '</small></p>' +
      '<embed src="' + fileData.content + '" ' +
      'type="application/pdf" ' +
      'style="width:100%;height:520px;border:1px solid #334155;' +
      'border-radius:8px;background:#fff;">' +
      fileButtons(year, type, title)
    );
  }

  return (
    '<h4>Personal ' + title + '</h4>' +
    '<p><small>' + safeName + '</small></p>' +
    '<pre style="white-space:pre-wrap;line-height:1.5;">' +
    escapeHtml(fileData.content) +
    '</pre>' +
    fileButtons(year, type, title)
  );
}

async function renderPapers() {
  main.innerHTML = '<h3>Loading documents...</h3>';

  try {
    const storedFiles = await getAllFilesFromDatabase();

    fileCache = new Map(
      storedFiles.map(fileData => [fileData.key, fileData])
    );
  } catch (error) {
    console.error('Database error:', error);
    fileCache = new Map();
  }

  let html =
    '<h3>Past Question Papers and Memos</h3>' +
    '<div class="notes-box">' +
      '<p><b>Upload your personal papers:</b> Select a PDF, text, HTML ' +
      'or Markdown file. Files are saved on this device.</p>' +
    '</div><br>';

  for (let year = 2020; year <= 2026; year++) {
    html +=
      '<div class="topic-card">' +
        '<div class="badge">' + year + '</div>' +
        '<div class="name">Electronics Paper ' + year + '</div>' +
      '</div>' +

      '<div class="notes-box">' +
        '<h4>Upload Question Paper</h4>' +
        '<input type="file" accept=".pdf,.txt,.md,.html,.htm,' +
        'application/pdf,text/plain,text/markdown,text/html" ' +
        'onchange="uploadPersonalFile(' + year + ', \'paper\', this)">' +
        '<br><br>' +
        renderPersonalFile(year, 'paper', 'Question Paper') +

        '<h4>Upload Memorandum</h4>' +
        '<input type="file" accept=".pdf,.txt,.md,.html,.htm,' +
        'application/pdf,text/plain,text/markdown,text/html" ' +
        'onchange="uploadPersonalFile(' + year + ', \'memo\', this)">' +
        '<br><br>' +
        renderPersonalFile(year, 'memo', 'Memorandum') +

        '<hr style="margin:18px 0;border-color:#334155;">' +
        renderGeneratedPaper(getPaper(year)) +
      '</div><br>';
  }

  main.innerHTML = html;
}