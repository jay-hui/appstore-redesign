import axios from 'axios';

const testingUrl = 'https://raw.githubusercontent.com/jay-hui/appstore-redesign/master/json/free.json'
const url = 'https://rss.applemarketingtools.com/api/v2/hk/apps/top-free/100/apps.json'

export const fetchTopFree = async () => {
    const { data } = await axios.get(testingUrl);
    return data;
} 