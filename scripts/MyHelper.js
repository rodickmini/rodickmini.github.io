hexo.extend.helper.register('countWords', function(content) {
  // Remove HTML tags and trim the content
  const cleanContent = content.replace(/<\/?[^>]+(>|$)/g, "").trim();

  // Define a regular expression for words
  const englishWordsRegex = /[A-Za-z0-9]+/g; // Matches English words
  const chineseWordsRegex = /[\u4e00-\u9fa5]+/g; // Matches Chinese characters

  // Count English words
  const englishWords = cleanContent.match(englishWordsRegex) || [];
  const englishWordCount = englishWords.length;

  // Count Chinese characters (as words)
  const chineseWords = cleanContent.match(chineseWordsRegex) || [];
  const chineseWordCount = chineseWords.reduce((total, word) => total + word.length, 0);

  // Total word count: add English words and count Chinese characters
  const totalWordCount = englishWordCount + chineseWordCount;

  return totalWordCount;
});

hexo.extend.helper.register('readingTime', function(content) {
  const wordCount = this.countWords(content);
  const readingTimeMinutes = Math.ceil(wordCount / 200); // Assuming 200 words per minute
  return readingTimeMinutes;
});

hexo.extend.helper.register('extractHighlighted', function(content) {
  // Use a regular expression to find all <mark> tags and extract their content
  const matches = content.match(/<mark>(.*?)<\/mark>/g);
  if (!matches) return null;

  // Extract the text from each <mark> tag
  const highlightedWords = matches.map(match => match.replace(/<\/?mark>/g, ''));
  
  // Join the highlighted words with a comma and space
  return highlightedWords.join(', ');
});