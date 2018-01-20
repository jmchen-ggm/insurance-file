const insuranceTypeList = new Vue(
	{
		el: '#company-list',
		data: {
			companies: []
		},
		mounted() {
			axios.post(RequestUrl, createRequestJsonBody(FuncListCompany)).then(response => {
	  			this.companies = response.data.Body.CompanyList
	  		});
		}
	}
)