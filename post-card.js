// post-card.js

function createPostCard(doc) {
  const post = doc.data();
  const card = document.createElement("div");
  card.className = "bg-white shadow rounded p-4 mb-4";

  card.innerHTML = `
    <div class="flex items-center mb-2">
      <img src="${post.userProfileImage || 'assets/default-avatar.png'}" class="w-10 h-10 rounded-full mr-3" alt="User">
      <div>
        <p class="font-semibold">${post.userName || 'Unknown'}</p>
        <p class="text-xs text-gray-500">${new Date(post.timestamp?.toDate?.() || Date.now()).toLocaleString()}</p>
      </div>
    </div>
    <p class="mb-2">${post.caption || ''}</p>
    ${post.imageUrl ? `<img src="${post.imageUrl}" class="w-full rounded mb-2" alt="Post image">` : ''}
    <div class="flex justify-between items-center text-sm text-gray-600">
      <button class="like-btn" data-id="${doc.id}">❤️ ${post.likes || 0}</button>
      <button class="view-btn" data-id="${doc.id}">👁️ ${post.views || 0}</button>
      <a href="post.html?id=${doc.id}" class="text-blue-500">💬 Comments</a>
    </div>
  `;

  return card;
}
