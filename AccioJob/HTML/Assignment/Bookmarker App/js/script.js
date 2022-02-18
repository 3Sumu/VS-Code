const sName = document.getElementById("siteName");
const sUrl = document.getElementById("siteUrl");

document.getElementById("myForm").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
  e.preventDefault();

  const siteName = sName.value;
  const siteUrl = sUrl.value;

  if (!validateForm(siteName, siteUrl)) {
    return false;
  }

  let bookmark = {
    name: siteName,
    url: siteUrl,
  };

  if (localStorage.getItem("bookmarks") === null) {
    let bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  document.getElementById("myForm").reset();

  fetchBookmarks();
}

function deleteBookmark(url) {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  bookmarks.forEach((bookmark, index) => {
    if (bookmark.url === url) {
      bookmarks.splice(index, 1);
    }
  });

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  fetchBookmarks();
}

function fetchBookmarks() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  const result = document.getElementById("bookmarksResults");

  result.innerHTML = "";

  if (bookmarks === null) {
    return false;
  } else {
    bookmarks.forEach((bookmark, index) => {
      let url = bookmark.url;
      let name = bookmark.name;
      const div = document.createElement("div");
      let properUrl = addHttp(url);

      div.innerHTML = `<h3>${name}
        <a class='btn btn-default' target='_blank' href='${properUrl}'>Visit</a>
        <a class='btn btn-danger' onClick='deleteBookmark("${url}")' href='#'>Delete</a>
        </h3>
        `;

      result.appendChild(div);
    });
  }
}

function addHttp(url) {
  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
    url = "https://" + url;
  }
  return url;
}

function validateForm(siteName, siteUrl) {
  if (!siteName || !siteUrl) {
    alert("Please fill in the form");
    return false;
  }

  var expression =
    /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert("Please use a valid URL");
    return false;
  }

  return true;
}
