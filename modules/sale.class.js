module.exports = class Sale {

	schema() {
		return {
			dateAdded: {type: Date, default: Date.now},
			type: {type: String, required: true},
			price: {type: Number, required: true},
			priceMonth: {type: Number},
			buildDate: {type: Number},
			showings: [{
				date: String,
				from: String,
				to: String
			}],
			sold: {type: Boolean, required: true, default: false},
			rooms: {type: Number},
			bathrooms: {type: Number},
			area: {type: Number},
			totalArea: {type: Number},
			place: {
				city: String,
				municipality: String,
				adress: String,
				postcode: Number
			},
			brokerId: String,
			text: {
				info: String,
				shortInfo: String,
				roomInfo: [{type: String}]
			},
			img: [{src: String, caption: String}],
			layout: [{src: String, description: String}]
		};
	}
};
