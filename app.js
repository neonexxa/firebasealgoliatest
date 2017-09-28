var search = instantsearch({
  // Replace with your own values
  appId: 'ZPW66ULMMX',
  apiKey: '2961740a8d3aa47f02ec73284a002d03', // search only API key, no ADMIN key
  indexName: 'item',
  urlSync: true
});
search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-input'
      })
    );
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 10,
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination'
  })
);

search.start();