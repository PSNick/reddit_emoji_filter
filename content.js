(function() {
  'use strict';

  const EMOJI_TO_HIDE = '🤯';

  function hidePostsWithEmoji() {
    // For new Reddit
    const newRedditPosts = document.querySelectorAll('shreddit-post');
    newRedditPosts.forEach(post => {
      const title = post.getAttribute('post-title');
      if (title && title.includes(EMOJI_TO_HIDE)) {
        post.style.display = 'none';
      }
    });

    // For old Reddit
    const oldRedditPosts = document.querySelectorAll('.thing');
    oldRedditPosts.forEach(post => {
      const titleElement = post.querySelector('a.title');
      if (titleElement && titleElement.textContent.includes(EMOJI_TO_HIDE)) {
        post.style.display = 'none';
      }
    });
  }

  // Run initially
  hidePostsWithEmoji();

  // Watch for new posts (infinite scroll, etc.)
  const observer = new MutationObserver(() => {
    hidePostsWithEmoji();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
