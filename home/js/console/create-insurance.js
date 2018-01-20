
const FuncListArticle = 1
const FuncListCompany = 2
const FuncListInsurance = 3
const FuncListComment = 4
const FuncCreateComment = 5
const FuncViewComment = 6
const FuncListInsuranceType = 7
const FuncGetHomeData = 8
const FuncUpComment = 9
const FuncGetCompanyById = 10
const FuncGetInsuranceTypeById = 11
const FuncReplyComment = 12
const FuncGetListCommentReply = 13

const RequestUrl = "http://120.78.175.235:8081/data-bin"


function createRequestJsonBody(funId) {
	var requestJson = {
			Bin : {
				URI : "data-bin"
			},
			Header : {
				Uin : 1
			},
			Body : {
				StartIndex : 0,
				PageSize : -1
			}
		}
	requestJson.Bin.FunId = funId
	return requestJson
}

const companyList = new Vue(
	{
		el: '#company-list',
		data: {
		   	comments : []
		},
		mounted() {
		  	axios.post(RequestUrl, createRequestJsonBody(FuncListComment)).then(response => {
		  		this.comments = response.data.Body.CommentList
		  	});
		},
	}
)

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