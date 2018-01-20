const articleList = new Vue(
	{
		el: '#article-list',
		data: {
			articles: []
		},
		mounted() {
			axios.post(RequestUrl, createRequestJsonBody(FuncListArticle)).then(response => {
	  			this.articles = response.data.Body.ArticleList
	  		});
		}
	}
)