const insuranceTypeList = new Vue(
	{
		el: '#insurance-type-list',
		data: {
			insuranceTypes: []
		},
		mounted() {
			axios.post(RequestUrl, createRequestJsonBody(FuncListInsuranceType)).then(response => {
	  			this.insuranceTypes = response.data.Body.InsuranceTypeList
	  		});
		}
	}
)