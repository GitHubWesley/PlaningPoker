import axios from 'axios';

const apiCenter = {
	GetMeetingsAsync: function () {
		return axios.get('/api/groomingmeetings');
	},

	GetMeetingAsync: function (id: string) {
		return axios.get(`/api/groomingmeetings/${id}`);
	},

	AddMeetingAsync: function (topic: string) {
		return axios.post(`/api/groomingmeetings`, { topic: topic });
	},

	JoinMeeting: function (meetingId: string, userName: string) {
		return axios.post(`/api/groomingmeetings/${meetingId}/join/${userName}`,{});
	},

	updateSelectedPoker: function (meetingId: string, userName: string, selectedPokerKey: string) {
		return axios.post(`/api/groomingmeetings/${meetingId}/participants/${userName}/${selectedPokerKey}`);
	},
};

export default apiCenter;