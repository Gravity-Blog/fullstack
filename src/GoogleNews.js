import React, { useEffect, useState } from 'react';

const GoogleNews = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = '238108a8e9de47ffa5f6183db406407b'; // Your API key
  const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2025-01-17&sortBy=publishedAt&apiKey=${apiKey}`; // Updated API URL

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched articles:', data.articles); // Log the fetched articles
        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles); // Adjust based on your API response structure
        } else {
          console.log('No articles available.');
          setArticles([]); // Reset articles state if response is empty
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setArticles([]); // Reset articles state on error
      }
    };

    fetchNews();
  }, [apiUrl]);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 font-sans bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">Tesla News</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        Stay updated with the latest news from Tesla.
      </p>
      {articles.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300 mb-2">No articles available.</p>
      ) : (
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          {articles.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <img src={article.urlToImage} alt={article.title} />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{article.description}</p>
              </a>
              <p className="text-gray-600 dark:text-gray-300">Published at: {new Date(article.publishedAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoogleNews;
