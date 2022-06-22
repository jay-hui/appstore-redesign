import axios from 'axios';

const testingUrl = 'https://raw.githubusercontent.com/jay-hui/appstore-redesign/master/json/paid.json'
const url = 'https://rss.applemarketingtools.com/api/v2/hk/apps/top-paid/100/apps.json'

export const fetchTopPaid = async () => {
    const { data } = await axios.get(testingUrl);
    return data;
} 